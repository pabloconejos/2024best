import { Component, Input } from '@angular/core';
import { Subject, Subscription, debounceTime, switchMap } from 'rxjs';
import { GeniusService } from '../../../../core/services/genius.service';
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { Hit } from '../../../../interfaces/Igenius';
import { FormsModule } from '@angular/forms';
import { ICategoria } from '../../../../interfaces/ICategoria';

@Component({
  selector: 'app-one-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './one-search.component.html',
  styleUrl: './one-search.component.css'
})
export class OneSearchComponent {
  
  @Input() item: ICategoria | undefined

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
      switchMap((query) => this.geniusService.handlerSearch(query, this.item!.nombre_back)) // Cambia a una nueva llamada de búsqueda y cancela la anterior
    ).subscribe(response => {
      if (!response) {
        return
      }
      this.filteredResults = response.hits.sort((a,b) => b.result.release_date_components.year - a.result.release_date_components.year)

    });
    
  }

  search(ev: Event) {
    this.searchTerm = (ev.target as HTMLInputElement).value;
    console.log(this.categoriaSelected)
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
}
