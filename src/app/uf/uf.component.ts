import { Iuf } from './../IMatchJob';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uf',
  templateUrl: './uf.component.html',
  styleUrls: ['./uf.component.css']
})
export class UfComponent implements OnInit {

  listaDeUfs: Iuf[] = []

  constructor(private apiUf: ApiService)
  { }

  ngOnInit(): void {
    this.obterUF()
  }
  obterUF(){
    this.apiUf.obterUFS()
    .then(ufs => {
      this.listaDeUfs = ufs
    })

    // .then(ufs => console.log(ufs))
      .catch(error => console.error(error))
      // alert("O resultado sairá no Console")
  }
}
