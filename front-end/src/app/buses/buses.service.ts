import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { busCreacionDTO, busDTO } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusesService {

  constructor(private http: HttpClient) { }
   
  private apiURL = environment.apiURL + 'buses';

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<busDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerPorId(id: number): Observable<busDTO>{
    return this.http.get<busDTO>(`${this.apiURL}/${id}`);
  }

  public agregar(bus: busCreacionDTO) {
    return this.http.post(this.apiURL, bus);
  }

  public editar(id:number, bus:busCreacionDTO)
  {
    return this.http.put(`${this.apiURL}/${id}`,bus);   
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  getUser2(Id: string): Observable<busDTO>{
    //url = 'rutas/editar' + '/' +Id;
    return this.http.get<busDTO>(`${this.apiURL}/${Id}`);
  }
}
