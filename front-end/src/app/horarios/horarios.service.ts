import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { horarioCreacionDTO, horarioDTO } from './horario';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http:HttpClient) { }

  private apiURL= environment.apiURL +'horarios';

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<horarioDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerPorId(id: number): Observable<horarioDTO>{
    return this.http.get<horarioDTO>(`${this.apiURL}/${id}`);
  }
  
  public agregar(horario: horarioCreacionDTO){
    return this.http.post(this.apiURL, horario);
  }

  public editar(id:number, horario: horarioCreacionDTO) {
    //const formData = this.construirFormData(horario);
    return this.http.put(`${this.apiURL}/${id}`, horario/*formData*/);
  }

  private construirFormData(horario: horarioCreacionDTO): FormData {
    const formData = new FormData();
    formData.append('horaSalida', horario.horaSalida.toString());
    if (horario.minutoSalida){
      formData.append('minutoSalida', horario.minutoSalida.toString());
    }
    
    return formData;
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  getUser3(Id: string): Observable<horarioDTO>{
    //url = 'rutas/editar' + '/' +Id;
    return this.http.get<horarioDTO>(`${this.apiURL}/${Id}`);
  }

}
