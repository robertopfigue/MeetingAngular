import { SalaService } from 'src/app/salas/services/sala.service';

export interface Agendamento {
    title: string;
    room: string;
    initialDate: Date;
    finalDate: Date;
  }