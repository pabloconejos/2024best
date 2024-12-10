import { Component } from '@angular/core';
import { SeleccionesService } from '../../../../core/services/selecciones.service';

@Component({
  selector: 'app-top-tres',
  standalone: true,
  imports: [],
  templateUrl: './top-tres.component.html',
  styleUrl: './top-tres.component.css'
})
export class TopTresComponent {
  constructor (public seleccionesService: SeleccionesService) {

  }
}
