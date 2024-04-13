import { Component } from '@angular/core';
import {TranslatorService} from "../services/translator.service";

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent {
  text;
  sourceLanguage: string;
  translatedText = '';
  errorMessage = '';

  constructor(private translatorService: TranslatorService) {
    this.text = '';
    this.sourceLanguage = 'en';
  }

  translate() {
    this.translatorService.translate(this.text, this.sourceLanguage)
      .subscribe(response => {
        this.translatedText = response['translatedText'];
        this.errorMessage = '';
      }, error => {
        this.errorMessage = 'Błąd tłumaczenia';
        console.error('Błąd tłumaczenia:', error);
      });
  }
}
