import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { rutaCracionDTO, rutaDTO } from '../rutas/ruta';
import { ticketCreacionDTO, ticketDTO, TicketPosGet } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'tickets';

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<ticketDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerPorId(id: number): Observable<ticketDTO>{
    return this.http.get<ticketDTO>(`${this.apiURL}/${id}`);
  }

  public crear(ticket: ticketCreacionDTO) {
    return this.http.post(this.apiURL, ticket);
  }

  //public editar(id:number, ticket: ticketCreacionDTO) {
    //const formData = this.construirFormData(ruta);
    //return this.http.put(`${this.apiURL}/${id}`, ticket/*formData*/);
  //}

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  public postGet(): Observable<TicketPosGet>{
    return this.http.get<TicketPosGet>(`${this.apiURL}/postget`);
  }

  /*getUser(Id: string): Observable<rutaDTO>{
    //url = 'rutas/editar' + '/' +Id;
    return this.http.get<rutaDTO>(`${this.apiURL}/${Id}`);
  }*/
}
