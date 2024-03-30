import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InformationRequest, InformationResponse} from './models';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private http: HttpClient) {
  }

  getInformation(question: string, sourceLanguage: string): Observable<InformationResponse> {
    let request: InformationRequest = {
      question: question,
      sourceLanguage: sourceLanguage
    }
    return this.http.post<InformationResponse>('/api/tourist/information', request);
  }
}
