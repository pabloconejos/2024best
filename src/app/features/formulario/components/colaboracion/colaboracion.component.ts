import { Component } from '@angular/core';
import { SeleccionesService } from '../../../../core/services/selecciones.service';

@Component({
  selector: 'app-colaboracion',
  standalone: true,
  imports: [],
  templateUrl: './colaboracion.component.html',
  styleUrl: './colaboracion.component.css'
})
export class ColaboracionComponent {
  constructor (public seleccionesService: SeleccionesService) {

  }
}
