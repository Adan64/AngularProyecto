import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './../Usuario';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-insertar-usuaro',
  templateUrl: './insertar-usuaro.component.html',
  styleUrls: ['./insertar-usuaro.component.css']
})
export class InsertarUsuaroComponent implements OnInit {
  Usuario= new Usuario
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private router:Router
    )
  { }
  IdValido() :boolean {
    if (this.Usuario.codigo>0)
    return true;
    else
    return false;

  }

  ValidarCampos():boolean
  {

    return true
  }

  Mostrar()
  {
    axios.get("http://127.0.0.1:8080/PROYECTO-REST/rest/usuario/find/"+this.Usuario.codigo).then(
      res =>
      {
        this.Usuario=<Usuario>(<any>res.data).Resulta
        console.log(Usuario)
      }
    )

  }

  Guardar()
  {
    if(this.ValidarCampos())
    {    axios.put("http://127.0.0.1:8080/PROYECTO-REST/rest/usuario/update/",this.Usuario).then(
      res=>
      {
        console.log(res.data)
        this.router.navigate(["/C"])
      }
    )
    }
    else
    alert("Ingrese el nombre de la ciudad")
  }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(parms=>
      {

      this.Usuario.codigo= parms.codigo;
          this.Mostrar()
          console.log(this.Usuario)

      }
      );

  }
}
