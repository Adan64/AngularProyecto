import { Ciudad } from './../Ciudad';
import { Component, OnInit, ViewChild } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { HtmlParser } from '@angular/compiler';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
@Component({
  selector: 'app-ciudad-listar',
  templateUrl: './ciudad-listar.component.html',
  styleUrls: ['./ciudad-listar.component.css']
})
export class CiudadListarComponent implements OnInit {
  private error :string=""
  constructor(
    private router:Router,
    private dialog:MatDialog

  ) { }
  textobuscar=""
  displayedColumns :string[]=['Codigo','Descripcion','N/M','E'];
  dataSource :any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
 MostrarError(resp:any)
 {
  if (resp.resp==false)
  alert(resp.error)
 }
 //Metodo KeyUp
 KeyUp()
 {
//http://127.0.0.1:8080/PROYECTO-REST/rest/ciudad/Buscar/C
if (this.textobuscar.trim().length>0)
{
  this.Buscar();
}
else
{
  this.Mostrar();
}

 }

Buscar()
{

  axios.get("http://127.0.0.1:8080/PROYECTO-REST/rest/ciudad/Buscar/"+this.textobuscar).then(resultado=>{
    this.MostrarError(resultado.data)
    console.log((<any>resultado.data).error)
    this.dataSource=(<any>resultado.data).Resulta;
  })
}
  //Metodo Eliminar Ciudad
Eliminar(codigo:HtmlParser)
{
  let resp:any
  axios.delete("http://127.0.0.1:8080/PROYECTO-REST/rest/ciudad/delete/"+codigo).
  then(res=> {
    console.log(res.data)
    this.MostrarError(res.data)
     this.Mostrar()

  })

}

//Metodo para redireccionar a la pagina para registrar o modificar ciudad
  Nuevo()
  {
    this.router.navigate(["/p3/0"]);
  }

//Metodo Mostrar Ciudades
  Mostrar()
  {
    axios.get("http://127.0.0.1:8080/PROYECTO-REST/rest/ciudad/list").then(resultado=>{
      this.MostrarError(resultado.data)
      console.log(resultado.data)
    this.dataSource=new MatTableDataSource((<any>resultado.data).Resulta);
    this.dataSource.paginator=this.paginator;
    this.paginator
    })
  }
  ngOnInit(): void {
    this.Mostrar();
  }

}
