import { ApiService } from './../../../api.service';
import { Iensino } from './../../../IMatchJob';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escolaridade',
  templateUrl: './escolaridade.component.html',
  styleUrls: ['./escolaridade.component.css']
})
export class EscolaridadeComponent implements OnInit {

  listarEnsino: Iensino[] = []

  constructor(private apiEnsino: ApiService) { }

  ngOnInit(): void {
    this.obterEnsino()
  }
  obterEnsino(){
    this.apiEnsino.obterEnsinos()
      .then(ensinos => {
        this.listarEnsino = ensinos
      })
  }
}
