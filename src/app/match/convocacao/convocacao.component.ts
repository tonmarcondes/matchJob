import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convocacao',
  templateUrl: './convocacao.component.html',
  styleUrls: ['./convocacao.component.css']
})
export class ConvocacaoComponent implements OnInit {

  vaga: string = "Analista de PCP"
  mensagem: string = "Olá {{candidato}} \n\nEstamos muito felizes em te dar as boas vindas para a etapa de dinâmica em grupo a ser realizada no dia XX/XX/XXXX\n\nAtt\n\n(Empresa)"
  constructor() { }

  ngOnInit(): void {
  }

}
