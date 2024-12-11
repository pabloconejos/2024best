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
  styleUrl: './two-search.component.css'
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
      console.log(this.form.value);
      this.getCover()
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

  selectItem(categoria: string,item: Hit) {
    console.log(item)
    this.seleccionesService.updateSelecciones({categoria: categoria, info: item.result})
  }
}
