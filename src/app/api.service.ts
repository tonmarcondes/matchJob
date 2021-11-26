import { Icivil, Iuf, Iensino, Iskill } from './IMatchJob';
import { API_PATH } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  obterUFS(){
    return this.httpClient.get<Iuf[]>(`${API_PATH}Uf`).toPromise();
  }

  obterCivils(){
    return this.httpClient.get<Icivil[]>(`${API_PATH}Estadocivil`).toPromise();
  }

  obterEnsinos(){
    return this.httpClient.get<Iensino[]>(`${API_PATH}Escolaridade`).toPromise();
  }

  obterSkills(){
    return this.httpClient.get<Iskill[]>(`${API_PATH}Comportamental`).toPromise();
  }
}
