import { Component } from '@angular/core';
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { ImageViewerComponent } from "../../../../shared/image-viewer/image-viewer.component";

@Component({
  selector: 'app-colaboracion',
  standalone: true,
  imports: [ImageViewerComponent],
  templateUrl: './colaboracion.component.html',
  styleUrl: './colaboracion.component.css'
})
export class ColaboracionComponent {
  constructor (public seleccionesService: SeleccionesService) {

  }
}
