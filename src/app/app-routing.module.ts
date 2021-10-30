import { CiudadListarComponent } from './Ciudad/ciudad-listar/ciudad-listar.component';
import { InsertarUsuaroComponent } from './Usuario/insertar-usuaro/insertar-usuaro.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuarioComponent } from './Usuario/listar-usuario/listar-usuario.component';
import { CiudadModificarComponent } from './Ciudad/ciudad-modificar/ciudad-modificar.component';

const routes: Routes =
[
{
  path:'C',
component:ListarUsuarioComponent,
},
{path:'p2',
component:CiudadListarComponent
},
{path:'p3/:codigo',
component:CiudadModificarComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule
{


 }
