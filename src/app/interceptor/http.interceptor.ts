import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceInterceptor implements HttpInterceptor {
  count = 0;
  constructor(private toast: ToastrService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.count++;

    const newRequest = req.clone();
    return next.handle(newRequest).pipe(
      finalize(() => {
        this.count--;
      }),
      catchError(e => this.handlerError(e))
    );
  }

  handlerError(error: HttpErrorResponse): ObservableInput<any> {
    if (error instanceof HttpErrorResponse) {
      switch ((error as HttpErrorResponse).status) {
        case 400:
        case 403:
          if (
            error && error.error.errors && error.error.errors.length > 0) {
            this.toast.warning(error.error.errors[0].message);
          }
          break;
      }
      return this.errorHandler(error);
    }else{
      return new Observable();
    }
  }
  errorHandler(error: HttpErrorResponse): Observable<any> {
    if (!navigator.onLine) {
      this.toast.error('Sem conexão com a internet', undefined);
      return throwError(error);
    }

    if (error instanceof HttpErrorResponse) {
      let errorMessage: string = "";
      switch ((error as HttpErrorResponse).status) {
        case 0:
          errorMessage = error.message;
          return new Observable();
      }


      if (typeof errorMessage === 'string' && errorMessage !== '') {
        this.toast.error(errorMessage, undefined);
      } else {
        return throwError(error);
      }
      return throwError(errorMessage);
    } else {
      return throwError(error);
    }
  }
}
