import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Question, Response, TamponCocher } from '../models';
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
      `${this.API_URL}Home/listeCochers/${matricule}`
    );
  }
}
