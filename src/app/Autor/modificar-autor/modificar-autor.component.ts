import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-modificar-autor',
  templateUrl: './modificar-autor.component.html',
  styleUrls: ['./modificar-autor.component.css']
})
export class ModificarAutorComponent implements OnInit {

  Autor:any
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private router:Router
    )
  { }
  IdValido() :boolean {
    if (this.Autor.codigo>0)
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
    axios.get("http://127.0.0.1:8080/PROYECTO-REST/rest/autor/find/"+this.Autor.codigo).then(
      res =>
      {
        this.Autor=(<any>res.data).Resulta
        console.log(this.Autor)
      }
    )

  }

  Guardar()
  {
    if(this.ValidarCampos())
    {    axios.put("http://127.0.0.1:8080/PROYECTO-REST/rest/autor/update/",this.Autor).then(
      res=>
      {
        console.log(res.data)
        this.router.navigate(["/la"])
      }
    )
    }
    else
    alert("Ingrese el nombre de la ciudad")
  }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(parms=>
      {

      this.Autor.codigo= parms.codigo;
          this.Mostrar()
          console.log(this.Autor)

      }
      );

  }
}
