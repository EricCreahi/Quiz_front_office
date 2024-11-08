import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  GET<RResponse>(url: string, params?: Record<string, any>) {
    let httpParams = new HttpParams();

    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, (params as any)[key]);
      });
    }
    return this.http.get<RResponse>(url, {});
  }

  POST<RParams, RResponse>(url: string, params: RParams) {
    return this.http.post<RResponse>(url, params);
  }
}
