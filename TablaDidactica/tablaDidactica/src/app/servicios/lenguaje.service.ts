import { Injectable } from '@angular/core';
import { Languages } from '../models/enums/lenguajes.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private language: Languages;

  constructor() {
    this.language = Languages.English;
  }

  changeLanguage(newLanguage: Languages): void {
    this.language = newLanguage;
  }

  getLanguage(): Languages {
    return this.language;
  }

}