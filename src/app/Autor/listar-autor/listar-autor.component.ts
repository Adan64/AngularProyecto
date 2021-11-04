import { Router } from '@angular/router';
import { HtmlParser } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import axios from 'axios';

@Component({
  selector: 'app-listar-autor',
  templateUrl: './listar-autor.component.html',
  styleUrls: ['./listar-autor.component.css']
})
export class ListarAutorComponent implements OnInit {


  constructor(private router: Router) { }
  MostrarError(resp:any)
  {
   if (resp.resp==false)
   alert(resp.error)
  }
  Eliminar(codigo:HtmlParser)
  {
    let resp:any
    axios.delete("http://127.0.0.1:8080/PROYECTO-REST/rest/autor/delete/"+codigo).
    then(res=> {
      console.log(res.data)
      this.MostrarError(res.data)
       this.Mostrar()

    })

  }
  Nuevo()
  {
    this.router.navigate(["/c/"]);
  }
  Mostrar()
  {
    axios.get("http://127.0.0.1:8080/PROYECTO-REST/rest/autor/list").then(resultado=>{
    console.log(resultado.data)
    this.dataSource=new MatTableDataSource((<any>resultado.data).Resulta);
    this.dataSource.paginator=this.paginator;

    })
  }
  dataSource :any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
   displayedColumns :string[]=['Codigo','U','F','N/M','E'];
    usuarios:any;
  ngOnInit(): void {
    this.Mostrar();
  }

}


