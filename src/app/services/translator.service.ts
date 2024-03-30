import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {TranslationRequest, TranslationResponse} from "./models";

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private http: HttpClient) {
  }

  translate(text: string, sourceLanguage: string): Observable<TranslationResponse> {
    let request: TranslationRequest = {
      text: text,
      sourceLanguage: sourceLanguage,
      targetLanguage: 'pl'
    };
    return this.http.post<TranslationResponse>('/api/translator/translate', request);
  }
}
