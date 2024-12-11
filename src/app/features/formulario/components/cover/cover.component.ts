import { Component } from '@angular/core';
import { ImageViewerComponent } from "../../../../shared/image-viewer/image-viewer.component";
import { SeleccionesService } from '../../../../core/services/selecciones.service';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [ImageViewerComponent],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.css'
})
export class CoverComponent {
  constructor (public seleccionesService: SeleccionesService) {

  }
}
