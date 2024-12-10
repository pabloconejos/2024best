import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { GeniusService } from '../../../../core/services/genius.service';
import { debounceTime, Subject, Subscription, switchMap } from 'rxjs';
import { Hit, Song } from '../../../../interfaces/Igenius';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  private searchSubject = new Subject<string>();
  private subscription: Subscription | null = null;
  filteredResults: Hit[] = []
  constructor(private geniusService: GeniusService) {

    this.subscription = this.searchSubject.pipe(
      debounceTime(300), // Espera 300 ms después de cada tecla para reducir llamadas
      switchMap((query) => this.geniusService.search(query)) // Cambia a una nueva llamada de búsqueda y cancela la anterior
    ).subscribe(response => {
      console.log(response.hits)
      this.filteredResults = response.hits
    });
    
  }



  search(ev: Event) {
    const inputValue = (ev.target as HTMLInputElement).value;
    if (inputValue.length <= 0) {
      this.filteredResults = [];
      return;
    }
    this.searchSubject.next(inputValue); // Emite el nuevo valor de búsqueda
  }
}
