import { Component } from '@angular/core';
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { TextSelectorComponent } from '../../../../shared/text-selector/text-selector.component';

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [TextSelectorComponent],
  templateUrl: './lyrics.component.html',
  styleUrl: './lyrics.component.css'
})
export class LyricsComponent {
  constructor (public seleccionesService: SeleccionesService) {

  }

  onTextSelected(selectedText: string): void {
    const newInfo = {...{selectedText}, ...this.seleccionesService.selecciones()['barra_del_ano'].info}
    this.seleccionesService.updateSelecciones({categoria: 'barra_del_ano', info: newInfo})
  }
  
}
