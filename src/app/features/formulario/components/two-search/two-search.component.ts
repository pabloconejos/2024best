import { Component, Input } from '@angular/core';
import { ICategoria } from '../../../../interfaces/ICategoria';
import { Subject, Subscription, debounceTime, switchMap } from 'rxjs';
import { GeniusService } from '../../../../core/services/genius.service';
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { Hit } from '../../../../interfaces/Igenius';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoaderComponent } from "../../../../shared/loader/loader.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-two-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, LoaderComponent, TranslateModule],
  templateUrl: './two-search.component.html',
  styleUrls: ['./two-search.component.css', '../one-search/one-search.component.css']
})
export class TwoSearchComponent {
  @Input() item: ICategoria | undefined


  searchTerm = ''
  categoriaSelected!: string;
  form: FormGroup;
  isSubmited: boolean = false
  isLoading: boolean = false;

  constructor(
    private geniusService: GeniusService,
    private seleccionesService: SeleccionesService,
    private fb: FormBuilder) {

      this.form = this.fb.group({
        artist: ['', [Validators.required]],
        song: ['', [Validators.required]],
      });
    
  }

  async search() {
    if (!this.form.valid) {
      console.log('Formulario no válido');
      return;
    }
  
    this.isLoading = true;
  
    const category = this.item?.nombre_back;
    if (category) {
      try {
        const info = await this.getInfoByCategory(category);
        if (info && this.item) {
          this.seleccionesService.updateSelecciones({ categoria: category, info });
        }
      } catch (error) {
        console.error('Error al obtener la información:', error);
      } finally {
        this.isLoading = false;
      }
    }
  }
  
  private async getInfoByCategory(category: string) {
    if (category === 'portada_del_ano' || category === 'album_del_ano') {
      return this.getCover();
    }
    if (category === 'barra_del_ano') {
      return this.getLyrics();
    }
    return null;
  }
  
  private getCover() {
    return this.geniusService.getCover(this.form.value).toPromise();
  }
  
  private getLyrics() {
    return this.geniusService.getLyrics(this.form.value).toPromise();
  }
  

  selectItem(categoria: string,item: Hit) {
    this.seleccionesService.updateSelecciones({categoria: categoria, info: item.result})
  }
}
