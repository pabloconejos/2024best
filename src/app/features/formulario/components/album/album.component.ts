import { Component } from '@angular/core';
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { ImageViewerComponent } from '../../../../shared/image-viewer/image-viewer.component';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [ImageViewerComponent],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  constructor (public seleccionesService: SeleccionesService) {

  }
}
