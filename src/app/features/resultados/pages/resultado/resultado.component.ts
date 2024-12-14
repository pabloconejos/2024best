import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeniusService } from '../../../../core/services/genius.service';
import { ImageViewerComponent } from "../../../../shared/image-viewer/image-viewer.component";
import { HeaderComponent } from "../../../../shared/header/header.component";
import { DomSanitizer } from '@angular/platform-browser';
import { SharedLinkComponent } from "../../../../shared/shared-link/shared-link.component";

export interface Idata {
  categoria: string;
  data: any
}

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [ImageViewerComponent, HeaderComponent, SharedLinkComponent],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
  cancionDelAno: string | null = null;

  //selecciones: Record<string, any> = [];
  selecciones: Idata[] = []
  name: string = ''
  constructor(
    private route: ActivatedRoute,
    private geniusService: GeniusService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cancionDelAno = params['cancion_del_ano'];
      this.getInfo(params)
    });
  }

  async getInfo(params: any) {
    for (let cat in params) {
      if (cat === 'cancion_del_ano' || cat === 'colaboracion_del_ano') {
        const data = await this.getSong(params[cat])
        this.updateSelecciones({categoria: cat, data: data?.song})
      }
      if (cat === 'album_del_ano' || cat === 'portada_del_ano') {
        const infoToArray = params[cat].split(',')
        this.updateSelecciones({categoria: cat, data: infoToArray})
      }
      if (cat === 'name') {
        const data = params[cat]
        this.name = data
      }
    }

    console.log(this.selecciones);
  }
  
  async getSong(songId: string) {

    return this.geniusService.getSong(songId).toPromise()
   
  }
  
  
  sanitazerUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

  updateSelecciones(data: Idata) {
    console.log(data)
    this.selecciones.push(data)
  }



}
