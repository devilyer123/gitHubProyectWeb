import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { HammerModule } from "@angular/platform-browser";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoBusesComponent } from './buses/listado-buses/listado-buses.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'
import {MarkdownModule} from 'ngx-markdown'
import {LeafletModule} from '@asymmetrik/ngx-leaflet'
import "leaflet/dist/images/marker-shadow.png";
import 'leaflet/dist/images/marker-icon-2x.png';
import {MatTableModule} from '@angular/material/table'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceRutasComponent } from './rutas/indice-rutas/indice-rutas.component';
import { CrearRutaComponent } from './rutas/crear-ruta/crear-ruta.component';
import { EditarRutaComponent } from './rutas/editar-ruta/editar-ruta.component';
import { EliminarRutaComponent } from './rutas/eliminar-ruta/eliminar-ruta.component';
import { AgregarBusComponent } from './buses/agregar-bus/agregar-bus.component';
import { EditarBusComponent } from './buses/editar-bus/editar-bus.component';
import { EliminarBusComponent } from './buses/eliminar-bus/eliminar-bus.component';
import { AgregarHoraComponent } from './horarios/agregar-hora/agregar-hora.component';
import { EditarHoraComponent } from './horarios/editar-hora/editar-hora.component';
import { EliminarHoraComponent } from './horarios/eliminar-hora/eliminar-hora.component';
import { IndiceBusComponent } from './buses/indice-bus/indice-bus.component';
import { IndiceHoraComponent } from './horarios/indice-hora/indice-hora.component';
import { FormularioRutaComponent } from './rutas/formulario-ruta/formulario-ruta.component';
import { FiltroRutasComponent } from './rutas/filtro-rutas/filtro-rutas.component';
import { FormularioBusesComponent } from './buses/formulario-buses/formulario-buses.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { FormularioHorariosComponent } from './horarios/formulario-horarios/formulario-horarios.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { IndiceAdministradoresComponent } from './administradores/indice-administradores/indice-administradores.component';
import { CrearAdministradoresComponent } from './administradores/crear-administradores/crear-administradores.component';
import { FormularioAdministradoresComponent } from './administradores/formulario-administradores/formulario-administradores.component';
import { EditarAdministradoresComponent } from './administradores/editar-administradores/editar-administradores.component';
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { FormularioAutenticacionComponent } from './seguridad/formulario-autenticacion/formulario-autenticacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoBusesComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceRutasComponent,
    CrearRutaComponent,
    EditarRutaComponent,
    EliminarRutaComponent,
    AgregarBusComponent,
    EditarBusComponent,
    EliminarBusComponent,
    AgregarHoraComponent,
    EditarHoraComponent,
    EliminarHoraComponent,
    IndiceBusComponent,
    IndiceHoraComponent,
    FormularioRutaComponent,
    FiltroRutasComponent,
    FormularioBusesComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormularioHorariosComponent,
    MapaComponent,
    IndiceAdministradoresComponent,
    CrearAdministradoresComponent,
    FormularioAdministradoresComponent,
    EditarAdministradoresComponent,
    SelectorMultipleComponent,
    MostrarErroresComponent,
    AutorizadoComponent,
    LoginComponent,
    RegistroComponent,
    FormularioAutenticacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LeafletModule,
    HttpClientModule,
    MatTableModule,
    HammerModule,
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
