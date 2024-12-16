import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lenguage-selector',
  standalone: true,
  imports: [],
  templateUrl: './lenguage-selector.component.html',
  styleUrl: './lenguage-selector.component.css'
})
export class LenguageSelectorComponent {
  currentLanguage: string;

  constructor(private translateService: TranslateService) {
    this.currentLanguage = translateService.getDefaultLang();
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
    this.currentLanguage = language;
  }

  toggleDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) {
      dropdown.classList.toggle('show');
    }
  }
}
