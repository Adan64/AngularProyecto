import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  constructor() { }
  usuarios:any;
  ngOnInit(): void {
    axios.get("http://127.0.0.1:8080/PROYECTO-REST/rest/usuario/list").then(re=>

    {
      this.usuarios=re.data;
    })
  }

}
