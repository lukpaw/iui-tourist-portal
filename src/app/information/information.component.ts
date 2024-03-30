import {Component, OnInit} from '@angular/core';
import {TouristService} from "../services/tourist.service";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  question: string;
  sourceLanguage: string;
  results: string[];

  constructor(private touristService: TouristService) {
    this.question = '';
    this.sourceLanguage = 'pl';
    this.results = [];
  }

  ngOnInit() {
  }

  onSubmit() {
    this.touristService.getInformation(this.question, this.sourceLanguage)
      .subscribe(response => {
        this.results = response.results;
      }, error => {
      });
  }
}
