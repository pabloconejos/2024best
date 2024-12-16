import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title = ''

  constructor(private translate: TranslateService) {
    this.setTranslatedTitle();
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedTitle();
    });
  }

  private setTranslatedTitle(): void {
    this.translate.get('header_title').subscribe((translation: string) => {
      this.title = translation;
    });
  }
}
