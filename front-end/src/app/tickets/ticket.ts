import { busDTO } from "../buses/bus";
import { horarioDTO } from "../horarios/horario";
import { rutaDTO } from "../rutas/ruta";

export interface ticketCreacionDTO{
    origen: string;
    destino: string;
    tipoBus: string;
    fechaSalida: Date;
    horaSalida: number;
    horaLlegada: number;
    costoTicket: number;
}

export interface ticketDTO{
    id: number;
    origen: string;
    destino: string;
    tipoBus: string;
    fechaSalida: Date;
    horaSalida: number;
    horaLlegada: number;
    costoTicket: number;
}

export interface TicketPosGet {
    rutas: rutaDTO[];
    buses: busDTO[];
    horarios: horarioDTO[];
}