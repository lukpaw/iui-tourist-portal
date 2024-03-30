import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InformationResponse } from './information-models';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private http: HttpClient) {}

  getInformation(question: string, sourceLanguage: string): Observable<InformationResponse> {
    return this.http.post<InformationResponse>('/api/tourist/information', {
      question,
      sourceLanguage
    });
  }
}
