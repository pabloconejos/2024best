import { Component } from '@angular/core';
import { ImageViewerComponent } from "../../../../shared/image-viewer/image-viewer.component";
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [ImageViewerComponent,TranslateModule],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.css'
})
export class CoverComponent {
  constructor (public seleccionesService: SeleccionesService) {

  }
}
