import { Component, Input } from '@angular/core';
import { Subject, Subscription, debounceTime, switchMap } from 'rxjs';
import { GeniusService } from '../../../../core/services/genius.service';
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { Hit } from '../../../../interfaces/Igenius';
import { FormsModule } from '@angular/forms';
import { ICategoria } from '../../../../interfaces/ICategoria';
import { TranslateModule } from '@ngx-translate/core';
import { LastfmService } from '../../../../core/services/lastfm.service';
import { AlnumLastFm } from '../../../../interfaces/ILastFm';

@Component({
  selector: 'app-one-search',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './one-search.component.html',
  styleUrl: './one-search.component.css'
})
export class OneSearchComponent {
  
  @Input() item: ICategoria | undefined

  private geniusSearchSubject = new Subject<string>();
  private geniusSubscription: Subscription | null = null;

  private lastFmSearchSubject = new Subject<string>();
  private lastFmSubscription: Subscription | null = null;

  searchTerm = ''
  filteredResultsGenius: Hit[] = []
  filteredResultsLastFm: AlnumLastFm[] = []
  filteredResults: any[] = []


  categoriaSelected!: string;
  error: boolean = false

  constructor(
    private geniusService: GeniusService,
    private seleccionesService: SeleccionesService,
    private lastFmService: LastfmService
  ) 
  {

    this.geniusSubscription = this.geniusSearchSubject.pipe(
      debounceTime(300), // Espera 300 ms después de cada tecla para reducir llamadas
      switchMap((query) => this.geniusService.search(query)) // Cambia a una nueva llamada de búsqueda y cancela la anterior
    ).subscribe(response => {
      if (!response) {
        return
      }
      console.log(response)

      this.filteredResultsGenius = response.hits.filter(item => item.result.release_date_components)
      this.filteredResultsGenius = this.filteredResultsGenius.sort((a,b) => b.result.release_date_components.year - a.result.release_date_components.year)
      this.filteredResults = this.filteredResultsGenius
      this.error = false;
    }, error => {
      console.log(error)
      // error
      this.error = true
    });


    this.lastFmSubscription = this.lastFmSearchSubject.pipe(
      debounceTime(300),
      switchMap((query) => this.lastFmService.search(query))
    ).subscribe( response => {
      if (!response) {
        return
      }
      console.log(response)
      this.filteredResultsLastFm = response
      this.filteredResults = this.filteredResultsLastFm
    })
    
  }


  handlerSearch(ev: Event) {
    if (this.item!.nombre_back == 'cancion_del_ano' || this.item!.nombre_back == 'colaboracion_del_ano') {
      this.searchGenius(ev)
    }

    if (this.item!.nombre_back == 'portada_del_ano' || this.item!.nombre_back == 'album_del_ano') {
      this.searchLast(ev)
    }
  }

  searchGenius(ev: Event) {
    this.searchTerm = (ev.target as HTMLInputElement).value;
    if (this.searchTerm.length <= 0) {
      this.filteredResults = [];
      return;
    }
    this.geniusSearchSubject.next(this.searchTerm); // Emite el nuevo valor de búsqueda
  }

  searchLast(ev: Event) {
    this.searchTerm = (ev.target as HTMLInputElement).value;
    if (this.searchTerm.length <= 0) {
      this.filteredResults = [];
      return;
    }
    this.lastFmSearchSubject.next(this.searchTerm); // Emite el nuevo valor de búsqueda
  }

  selectItem(categoria: string,item: Hit) {
    console.log(item)
    this.seleccionesService.updateSelecciones({categoria: categoria, info: item})
  }

  isColab(song: Hit) {
    return song.result.full_title.includes('&') || song.result.full_title.includes('ft')
  }

  closeAutocomplete() {
    this.filteredResults = []
    this.searchTerm = ''
  }
}
