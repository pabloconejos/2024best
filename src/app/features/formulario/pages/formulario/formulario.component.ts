import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { TopTresComponent } from "../../components/top-tres/top-tres.component";
import { ColaboracionComponent } from "../../components/colaboracion/colaboracion.component";
import { CoverComponent } from "../../components/cover/cover.component";
import { LyricsComponent } from "../../components/lyrics/lyrics.component";
import { FormsModule } from '@angular/forms';
import { OneSearchComponent } from "../../components/one-search/one-search.component"; // Importa FormsModule
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
      categoria: 'CANCIÓN DEL AÑO',
      nombre_back: 'cancion_del_ano',
    },
    {
      id: 1,
      categoria: 'COLABORACIÓN DEL AÑO',
      nombre_back: 'colaboracion_del_ano',
    },
    {
      id: 2,
      categoria: 'PORTADA DEL AÑO',
      nombre_back: 'portada_del_ano',
    },
    {
      id: 3,
      categoria: 'BARRA DEL AÑO',
      nombre_back: 'barra_del_ano',
    }
  ]

  constructor() {

  }




  
}
