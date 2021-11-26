import { Iuf } from './IMatchJob';
import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Match Job';

  ufEscolhida: any = {}
  listaDeUfs: Iuf[] = []

  constructor(private apiService: ApiService)
  {}
  ngOnInit(): void {
    this.obterUF()
  }
  obterUF(){
    this.apiService.obterUFS()
    .then(ufs => {
      this.listaDeUfs = ufs
      // console.log(this.listaDeUfs)
      this.ufEscolhida = this.listaDeUfs[3]
      // console.log()
    })

    // .then(ufs => console.log(ufs))
      .catch(error => console.error(error))
      // alert("O resultado sairá no Console")
  }

  obterEstadoCivil(){
    this.apiService.obterCivils()
      .then(civils => console.log(civils))
      .catch(error => console.error(error))
  }

  obterEnsino(){
    this.apiService.obterEnsinos()
      .then(ensinos => console.log(ensinos))
      .catch(error => console.error(error))
  }

  obterSkill(){
    this.apiService.obterSkills()
      .then(skills => console.log(skills))
      .catch(error => console.error(error))
  }
}

