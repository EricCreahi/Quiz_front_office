import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginReq, Response, Utilisateur } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.apiUrl;

  constructor(private api: ApiService) {}

  // Connexion utilisateur
  login(userData: LoginReq): Observable<Response<Utilisateur>> {
    return this.api.POST<LoginReq, Response<Utilisateur>>(
      `${this.API_URL}Utilisateur/Login`,
      userData
    );
  }

  // Information d'un utilisateur via son
  userInfos(matricule: string): Observable<Response<Utilisateur>> {
    return this.api.GET<Response<Utilisateur>>(
      `${this.API_URL}Utilisateur/InfosUser/${matricule}`
    );
  }
}
