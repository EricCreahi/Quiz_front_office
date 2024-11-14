import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChoixReponseReq, ChoixReponseResponse, Question, Response, TamponCocher } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  API_URL = environment.apiUrl;

  constructor(private api: ApiService) {}

  getAll(): Observable<Response<Question>> {
    return this.api.GET<Response<Question>>(
      this.API_URL + 'SousQuestion/SousQuestions'
    );
  }

  getListeTamponByMatricule(
    matricule: string
  ): Observable<Response<TamponCocher>> {
    return this.api.GET<Response<TamponCocher>>(
      `${this.API_URL}CocherTampon/listeTamponCochers/${matricule}`,
      { matricule: matricule }
    );
  }

  getListeCocherByMatricule(
    matricule: string
  ): Observable<Response<TamponCocher>> {
    return this.api.GET<Response<TamponCocher>>(
      `${this.API_URL}Cocher/listeCochers/${matricule}`
    );
  }

  choixReponseQuestion(
    choixData: ChoixReponseReq
  ): Observable<Response<ChoixReponseResponse>> {
    return this.api.POST<ChoixReponseReq, Response<ChoixReponseResponse>>(
      `${this.API_URL}Home/Choix_Reponse`,
      choixData
    );
  }

  updateChoixReponseQuestion(
    choixId: number,
    cocherTamponId: number
  ): Observable<Response<void>> {
    return this.api.GET<Response<void>>(
      `${this.API_URL}Home/Choix_Reponse_Precedente/${choixId}/${cocherTamponId}`
    );
  }

  validerListeCocherByMatricule(matricule: string): Observable<Response<void>> {
    return this.api.GET<Response<void>>(
      `${this.API_URL}CocherTampon/ValiderListeCocherTampon/${matricule}`
    );
  }
}
