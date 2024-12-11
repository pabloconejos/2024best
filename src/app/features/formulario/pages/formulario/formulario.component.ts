import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { GeniusService } from '../../../../core/services/genius.service';
import { debounceTime, Subject, Subscription, switchMap } from 'rxjs';
import { Hit, Song } from '../../../../interfaces/Igenius';
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { TopTresComponent } from "../../components/top-tres/top-tres.component";
import { ColaboracionComponent } from "../../components/colaboracion/colaboracion.component";
import { CoverComponent } from "../../components/cover/cover.component";
import { LyricsComponent } from "../../components/lyrics/lyrics.component";
import { FormsModule } from '@angular/forms';
import { OneSearchComponent } from "../../components/one-search/one-search.component"; // Importa FormsModule
import { ICategoria } from '../../../../interfaces/ICategoria';
import { TwoSearchComponent } from "../../components/two-search/two-search.component";




@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [AccordionModule, TopTresComponent, ColaboracionComponent, CoverComponent, LyricsComponent, FormsModule, OneSearchComponent, TwoSearchComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  categorias = [
    {
      id: 0,
      categoria: 'CANCION DEL AÑO',
      nombre_back: 'cancion_del_ano',
      placeHolders: ['Buscar...']
    },
    {
      id: 1,
      categoria: 'COLABORACION DEL AÑO',
      nombre_back: 'colaboracion_del_ano',
      placeHolders: ['Buscar...']
    },
    {
      id: 2,
      categoria: 'PORTADA DEL AÑO',
      nombre_back: 'portada_del_ano',
      placeHolders: ['Artista', 'Cancion/Album']
    },
    {
      id: 3,
      categoria: 'BARRA DEL AÑO',
      nombre_back: 'barra_del_ano',
      placeHolders: ['Artista', 'Cancion/Album']
    }
  ]


  private searchSubject = new Subject<string>();
  private subscription: Subscription | null = null;

  searchTerm = ''
  filteredResults: Hit[] = []
  categoriaSelected!: string;

  constructor(
    private geniusService: GeniusService,
    private seleccionesService: SeleccionesService) {

    this.subscription = this.searchSubject.pipe(
      debounceTime(300), // Espera 300 ms después de cada tecla para reducir llamadas
      switchMap((query) => this.geniusService.handlerSearch(query, this.categoriaSelected)) // Cambia a una nueva llamada de búsqueda y cancela la anterior
    ).subscribe(response => {
      if (!response) {
        return
      }
      this.filteredResults = response.hits.sort((a,b) => b.result.release_date_components.year - a.result.release_date_components.year)

    });
    
  }

  search(ev: Event) {
    this.searchTerm = (ev.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    if (this.searchTerm.length <= 0) {
      this.filteredResults = [];
      return;
    }
    this.searchSubject.next(this.searchTerm); // Emite el nuevo valor de búsqueda
  }

  selectItem(categoria: string,item: Hit) {
    console.log(item)
    this.seleccionesService.updateSelecciones({categoria: categoria, info: item.result})
  }

  handlerAccordeon(event: any, item: ICategoria): void {
    this.filteredResults = []
    this.searchTerm = ''
    this.categoriaSelected = item.nombre_back
  }
  
}
