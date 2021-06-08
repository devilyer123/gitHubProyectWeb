import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatearFecha } from '../utilidades/utlidades';
import { AdministradoresCreacionDTO, AdministradoresDTO } from './administradores';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'administradores';

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<AdministradoresDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerPorId(id: number): Observable<AdministradoresDTO>{
    return this.http.get<AdministradoresDTO>(`${this.apiURL}/${id}`);
  }


  public crear(administrador: AdministradoresCreacionDTO) {
    const formData = this.construirFormData(administrador);
    return this.http.post(this.apiURL, formData);
  }

  public editar(id:number, administrador: AdministradoresCreacionDTO) {
    const formData = this.construirFormData(administrador);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  private construirFormData(administrador: AdministradoresCreacionDTO): FormData {
    const formData = new FormData();
    formData.append('nombreUsuario', administrador.nombreUsuario);
    if (administrador.contraseña){
      formData.append('contraseña', administrador.contraseña);
    }
    if (administrador.correo){
      formData.append('correo', administrador.correo);
    }
    if (administrador.fechaHabilitacion){
      formData.append('fechaHabilitacion', formatearFecha(administrador.fechaHabilitacion));
    }
    if (administrador.foto){
      formData.append('foto', administrador.foto);
    }
    
    return formData;
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
