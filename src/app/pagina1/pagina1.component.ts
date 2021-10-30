import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  usuarios : any= [];
  constructor() { }



  ngOnInit(): void {
    axios.get("http://127.0.0.1:8080/PROYECTO-REST/rest/usuario/list").then(re=>

      {
        this.usuarios=re.data;
      })
  }

}
