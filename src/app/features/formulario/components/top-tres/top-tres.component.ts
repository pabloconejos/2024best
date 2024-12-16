import { Component } from '@angular/core';
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { ImageViewerComponent } from "../../../../shared/image-viewer/image-viewer.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-top-tres',
  standalone: true,
  imports: [ImageViewerComponent, TranslateModule],
  templateUrl: './top-tres.component.html',
  styleUrls: ['./top-tres.component.css', '../colaboracion/colaboracion.component.css']
})
export class TopTresComponent {
  constructor (public seleccionesService: SeleccionesService) {

  }
}
