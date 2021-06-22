import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAdministradoresComponent } from './administradores/crear-administradores/crear-administradores.component';
import { EditarAdministradoresComponent } from './administradores/editar-administradores/editar-administradores.component';
import { IndiceAdministradoresComponent } from './administradores/indice-administradores/indice-administradores.component';
import { AgregarBusComponent } from './buses/agregar-bus/agregar-bus.component';
import { EditarBusComponent } from './buses/editar-bus/editar-bus.component';
import { EliminarBusComponent } from './buses/eliminar-bus/eliminar-bus.component';
import { IndiceBusComponent } from './buses/indice-bus/indice-bus.component';
import { EsAdminGuard } from './es-admin.guard';
import { AgregarHoraComponent } from './horarios/agregar-hora/agregar-hora.component';
import { EditarHoraComponent } from './horarios/editar-hora/editar-hora.component';
import { EliminarHoraComponent } from './horarios/eliminar-hora/eliminar-hora.component';
import { IndiceHoraComponent } from './horarios/indice-hora/indice-hora.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearRutaComponent } from './rutas/crear-ruta/crear-ruta.component';
import { EditarRutaComponent } from './rutas/editar-ruta/editar-ruta.component';
import { EliminarRutaComponent } from './rutas/eliminar-ruta/eliminar-ruta.component';
import { FiltroRutasComponent } from './rutas/filtro-rutas/filtro-rutas.component';
import { IndiceRutasComponent } from './rutas/indice-rutas/indice-rutas.component';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { CrearTicketComponent } from './tickets/crear-ticket/crear-ticket.component';
import { EditarTicketComponent } from './tickets/editar-ticket/editar-ticket.component';
import { EliminarTicketComponent } from './tickets/eliminar-ticket/eliminar-ticket.component';
import { IndiceTicketComponent } from './tickets/indice-ticket/indice-ticket.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'rutas', component: IndiceRutasComponent, canActivate: [EsAdminGuard]},
  {path: 'rutas/crear', component: CrearRutaComponent, canActivate: [EsAdminGuard]},
  {path: 'rutas/editar/:id', component: EditarRutaComponent, canActivate: [EsAdminGuard]},
  {path: 'rutas/eliminar', component: EliminarRutaComponent, canActivate: [EsAdminGuard]},
  {path: 'rutas/buscar', component: FiltroRutasComponent},

  {path: 'buses', component: IndiceBusComponent, canActivate: [EsAdminGuard]},
  {path: 'buses/agregar', component: AgregarBusComponent, canActivate: [EsAdminGuard]},
  {path: 'buses/editar/:id', component: EditarBusComponent, canActivate: [EsAdminGuard]},
  {path: 'buses/eliminar', component: EliminarBusComponent, canActivate: [EsAdminGuard]},

  {path: 'horarios', component: IndiceHoraComponent, canActivate: [EsAdminGuard]},
  {path: 'horarios/agregar', component: AgregarHoraComponent, canActivate: [EsAdminGuard]},
  {path: 'horarios/editar/:id', component: EditarHoraComponent, canActivate: [EsAdminGuard]},
  {path: 'horarios/eliminar', component: EliminarHoraComponent, canActivate: [EsAdminGuard]},

  {path: 'administradores', component: IndiceAdministradoresComponent, canActivate: [EsAdminGuard]},
  {path: 'administradores/crear', component: CrearAdministradoresComponent, canActivate: [EsAdminGuard]},
  {path: 'administradores/editar/:id', component: EditarAdministradoresComponent, canActivate: [EsAdminGuard]},

  {path: 'tickets', component: IndiceTicketComponent, canActivate: [EsAdminGuard]},
  {path: 'tickets/crear', component: CrearTicketComponent, canActivate: [EsAdminGuard]},
  {path: 'tickets/editar/:id', component: EditarTicketComponent, canActivate: [EsAdminGuard]},
  {path: 'tickets/eliminar', component: EliminarTicketComponent, canActivate: [EsAdminGuard]},

  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'usuarios', component: IndiceUsuariosComponent, canActivate: [EsAdminGuard]},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
