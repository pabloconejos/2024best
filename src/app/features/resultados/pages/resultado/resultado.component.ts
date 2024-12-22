import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GeniusService } from '../../../../core/services/genius.service';
import { ImageViewerComponent } from "../../../../shared/image-viewer/image-viewer.component";
import { HeaderComponent } from "../../../../shared/header/header.component";
import { DomSanitizer } from '@angular/platform-browser';
import { SharedLinkComponent } from "../../../../shared/shared-link/shared-link.component";
import { LoaderComponent } from "../../../../shared/loader/loader.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export interface Idata {
  categoria: string;
  data: any
}

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [ImageViewerComponent, HeaderComponent, SharedLinkComponent, LoaderComponent, TranslateModule, RouterModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
  cancionDelAno: string | null = null;

  //selecciones: Record<string, any> = [];
  selecciones: Idata[] = []
  name: string = ''
  currentUrl: string = '';
  headerTitle: string = ''

  constructor(
    public route: ActivatedRoute,
    private geniusService: GeniusService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private translate: TranslateService
  ) {
     // Carga la traducción inicial
     this.setTranslatedTitle();

     // Suscríbete a los cambios de idioma (opcional, si la app permite cambiar idiomas dinámicamente)
     this.translate.onLangChange.subscribe(() => {
       this.setTranslatedTitle();
     });
  }

  private setTranslatedTitle(): void {
    this.translate.get('header_title_2').subscribe((translation: string) => {
      this.headerTitle = translation + this.name;
    });
  }

  ngOnInit(): void {
    
    this.currentUrl = window.location.origin + this.router.url;

    this.route.queryParams.subscribe(params => {
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
  }
  
  async getSong(songId: string) {

    return this.geniusService.getSong(songId).toPromise()
   
  }
  
  
  sanitazerUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

  updateSelecciones(data: Idata) {
    this.selecciones.push(data)
  }



}
