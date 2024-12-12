import { Component, Input } from '@angular/core';
import { ICategoria } from '../../../../interfaces/ICategoria';
import { Subject, Subscription, debounceTime, switchMap } from 'rxjs';
import { GeniusService } from '../../../../core/services/genius.service';
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { Hit } from '../../../../interfaces/Igenius';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-two-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './two-search.component.html',
  styleUrls: ['./two-search.component.css', '../one-search/one-search.component.css']
})
export class TwoSearchComponent {
  @Input() item: ICategoria | undefined


  searchTerm = ''
  categoriaSelected!: string;
  form: FormGroup;
  isSubmited: boolean = false

  constructor(
    private geniusService: GeniusService,
    private seleccionesService: SeleccionesService,
    private fb: FormBuilder) {

      this.form = this.fb.group({
        artist: ['', [Validators.required]],
        song: ['', [Validators.required]],
      });
    
  }

  search() {
    this.isSubmited = true
    if (this.form.valid) {
      if (this.item?.nombre_back == 'portada_del_ano' || this.item?.nombre_back == 'album_del_ano') {
        this.getCover()
        return
      }

      if (this.item?.nombre_back == 'barra_del_ano') {
        this.getLyrics()
        return
      }
      
    } else {
      console.log('Formulario no válido');
    }
  }

  getCover() {
    this.geniusService.getCover(this.form.value).subscribe( cover => {
      if (!cover || !this.item) {
        return
      }

      this.seleccionesService.updateSelecciones({categoria: this.item.nombre_back, info: cover})
    })
  }

  getLyrics() {
    this.geniusService.getLyrics(this.form.value).subscribe( cover => {
      if (!cover || !this.item) {
        return
      }

      this.seleccionesService.updateSelecciones({categoria: this.item.nombre_back, info: cover})
    })
  }

  selectItem(categoria: string,item: Hit) {
    this.seleccionesService.updateSelecciones({categoria: categoria, info: item.result})
  }
}
