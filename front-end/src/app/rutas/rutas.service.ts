import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { rutaCracionDTO, rutaDTO } from './ruta';

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

  public crear(rutas: rutaCracionDTO){
    return this.http.post(this.apiURL,rutas)
  }

  public editar(id:number, ruta: rutaCracionDTO) {
    const formData = this.construirFormData(ruta);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  private construirFormData(ruta: rutaCracionDTO): FormData {
    const formData = new FormData();
    formData.append('origenId', ruta.origenId.toString());
    if (ruta.destinoId){
      formData.append('destinoId', ruta.destinoId.toString());
    }
    if (ruta.porcentaje){
      formData.append('porcentaje', ruta.porcentaje.toString());
    }
    if (ruta.duraViaAprox){
      formData.append('duraViaAprox', ruta.duraViaAprox.toString());
    }
    
    return formData;
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  
}
