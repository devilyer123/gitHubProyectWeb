import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { rutaCracionDTO, rutaDTO, rutaTicketDTO } from './ruta';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL +'rutas';

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<rutaDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerPorId(id: number): Observable<rutaDTO>{
    return this.http.get<rutaDTO>(`${this.apiURL}/${id}`);
  }

  public obtenerPorOrigen(origen: string): Observable<rutaTicketDTO[]>{
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post<rutaTicketDTO[]>(`${this.apiURL}/buscarPorOrigen`,
    JSON.stringify(origen), {headers});
  }

  public crear(rutas: rutaCracionDTO){
    return this.http.post(this.apiURL,rutas)
  }

  public editar(id:number, ruta: rutaCracionDTO) {
    //const formData = this.construirFormData(ruta);
    return this.http.put(`${this.apiURL}/${id}`, ruta/*formData*/);
  }

  private construirFormData(ruta: rutaCracionDTO): FormData {
    const formData = new FormData();
    formData.append('origen', ruta.origen);
    if (ruta.destino){
      formData.append('destino', ruta.destino.toString());
    }
    if (ruta.costoRuta){
      formData.append('costoRuta', ruta.costoRuta.toString());
    }
    if (ruta.duraViaAprox){
      formData.append('duraViaAprox', ruta.duraViaAprox.toString());
    }
    
    return formData;
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  getUser(Id: string): Observable<rutaDTO>{
    //url = 'rutas/editar' + '/' +Id;
    return this.http.get<rutaDTO>(`${this.apiURL}/${Id}`);
  }
  
}
