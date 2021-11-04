import { Ciudad } from './../Ciudad';

import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-ciudad-modificar',
  templateUrl: './ciudad-modificar.component.html',
  styleUrls: ['./ciudad-modificar.component.css']
})
export class CiudadModificarComponent implements OnInit {

  ciudad =new Ciudad;
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private router:Router
  ) { }

   IdValido() :boolean {
    if (this.ciudad.codigo>0)
    return true;
    else
    return false;

  }

  ValidarCampos():boolean
  {
    let res:boolean=false
    if(undefined==this.ciudad.descripcion )
    res=false
    else if(!this.ciudad.descripcion.length)
    res= false
    else
    res =true
    return res
  }

  Mostrar()
  {
    axios.get("http://127.0.0.1:8080/PROYECTO-REST/rest/ciudad/find/"+this.ciudad.codigo).then(
      res =>
      {
        this.ciudad=<Ciudad>(<any>res.data).Resulta
        this.ciudad.codigo
      }
    )

  }

  Guardar(Ciudad:Ciudad)
  {
    if(this.ValidarCampos())
    {    axios.put("http://127.0.0.1:8080/PROYECTO-REST/rest/ciudad/update/",this.ciudad).then(
      res=>
      {
        console.log(res.data)
        this.router.navigate(["/p2"])
      }
    )
    }
    else
    alert("Ingrese el nombre de la ciudad")
  }



  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(parms=>
      {

      this.ciudad.codigo= parms.codigo;
        if (this.IdValido())
        {this.Mostrar()};
      }
      );
  }

}
