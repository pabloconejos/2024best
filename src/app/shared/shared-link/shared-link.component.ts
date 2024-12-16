import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-shared-link',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './shared-link.component.html',
  styleUrl: './shared-link.component.css'
})
export class SharedLinkComponent {
  @Input() link: string = 'https://example.com'; // Enlace por defecto

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.link).then(() => {
      alert('Enlace copiado al portapapeles. ¡Ahora puedes pegarlo y compartirlo!');
    }).catch(err => {
      console.error('Error al copiar el enlace: ', err);
    });
  }
}
