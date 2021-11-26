import { Iskill } from './../../IMatchJob';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comportamental',
  templateUrl: './comportamental.component.html',
  styleUrls: ['./comportamental.component.css']
})
export class ComportamentalComponent implements OnInit {

  listaSkill: Iskill[] = []

  constructor(private apiComportamental: ApiService)
  { }

  ngOnInit(): void {
    this.obterSkill()
  }

  obterSkill(){
    this.apiComportamental.obterSkills()
      .then(skills => {
        this.listaSkill = skills
      })

      .catch(error => console.error(error))
  }
}
