import { Component } from '@angular/core';
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { ImageViewerComponent } from "../../../../shared/image-viewer/image-viewer.component";

@Component({
  selector: 'app-top-tres',
  standalone: true,
  imports: [ImageViewerComponent],
  templateUrl: './top-tres.component.html',
  styleUrl: './top-tres.component.css'
})
export class TopTresComponent {
  constructor (public seleccionesService: SeleccionesService) {

  }
}
