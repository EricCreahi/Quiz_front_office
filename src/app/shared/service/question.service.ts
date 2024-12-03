import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ChoixReponseReq,
  ChoixReponseResponse,
  Question,
  QuizDay,
  Response,
  TamponCocher,
  UserRanking,
  UserScore,
} from '../models';
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

  getQuizList(): Observable<Response<QuizDay>> {
    return this.api.GET<Response<QuizDay>>(
      this.API_URL + 'Question/ListeQuestions'
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

  getUtilisateurScore(matricule: string): Observable<Response<UserScore>> {
    return this.api.GET<Response<UserScore>>(
      `${this.API_URL}Employe/ResultatEmployeCocher/${matricule}`,
      { matricule: matricule }
    );
  }

  getRanking(): Observable<Response<UserRanking>> {
    return this.api.GET<Response<UserRanking>>(
      `${this.API_URL}TotalCocher/ListeEmployesTotalCocherGagnant`
    );
  }
}
