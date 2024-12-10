import { Component } from '@angular/core';
import { SeleccionesService } from '../../../../core/services/selecciones.service';

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [],
  templateUrl: './lyrics.component.html',
  styleUrl: './lyrics.component.css'
})
export class LyricsComponent {
  constructor (public seleccionesService: SeleccionesService) {

  }
}
