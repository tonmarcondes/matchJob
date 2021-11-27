import { ApiService } from './../../api.service';
import { Iensino } from './../../IMatchJob';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent implements OnInit {

  listaEscolaridade: Iensino[] = []

  constructor(private apiEnsino: ApiService) { }

  ngOnInit(): void {
    this.obterEnsino()
  }

  obterEnsino(){
    this.apiEnsino.obterEnsinos()
      .then(escolar => {
        this.listaEscolaridade = escolar
      })
  }

}
