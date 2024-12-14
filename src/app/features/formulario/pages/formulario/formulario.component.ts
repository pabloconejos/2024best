import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { TopTresComponent } from "../../components/top-tres/top-tres.component";
import { ColaboracionComponent } from "../../components/colaboracion/colaboracion.component";
import { CoverComponent } from "../../components/cover/cover.component";
import { LyricsComponent } from "../../components/lyrics/lyrics.component";
import { FormsModule } from '@angular/forms';
import { OneSearchComponent } from "../../components/one-search/one-search.component"; // Importa FormsModule
import { TwoSearchComponent } from "../../components/two-search/two-search.component";
import { HeaderComponent } from "../../../../shared/header/header.component";
import { AlbumComponent } from "../../components/album/album.component";
import { SeleccionesService } from '../../../../core/services/selecciones.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    AccordionModule,
    TopTresComponent,
    ColaboracionComponent,
    CoverComponent,
    LyricsComponent,
    FormsModule,
    OneSearchComponent,
    TwoSearchComponent,
    HeaderComponent,
    AlbumComponent,
    CommonModule
  ],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css', '../../components/one-search/one-search.component.css']
})
export class FormularioComponent {

  nombre: string = '';
  errorMessage: { isError: boolean; message: string; } = {
    isError: false,
    message: 'Faltan campos por completar'
  }

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
      categoria: 'ALBUM DEL AÑO',
      nombre_back: 'album_del_ano',
    },
    {
      id: 3,
      categoria: 'PORTADA DEL AÑO',
      nombre_back: 'portada_del_ano',
    },
    // {
    //   id: 4,
    //   categoria: 'BARRA DEL AÑO',
    //   nombre_back: 'barra_del_ano',
    // }
  ]

  constructor(
    private seleccionesService: SeleccionesService,
    private router: Router) {

  }


  generarResultado() {
    if (this.nombre.length <= 0) {
      this.errorMessage.isError = true
      this.closeAlert()
      return
    }

    // comprobar objeto

    this.generateLink()
  }




  closeAlert() {
    setTimeout(() => {
      this.errorMessage.isError = false
    }, 3000)
  }


  generateLink() {
    // Obtener las selecciones una vez y reutilizar
    const selecciones = this.seleccionesService.selecciones();
  
    // Crear un array para almacenar las partes del enlace
    const dataLink = [];
    const baseLink = `http://localhost:4200/resultado?name=${this.nombre}&`;
  
    // Iterar sobre las propiedades del objeto selecciones
    for (const key in selecciones) {
      if (selecciones.hasOwnProperty(key)) {
        const seleccion = selecciones[key];
        const categoria = seleccion.categoria;
  
        // Si tiene un ID único
        if (seleccion.info.id) {
          dataLink.push(`${categoria}=${seleccion.info.id}`);
        } else {
          // Si tiene múltiples datos, unirlos en un string separado por comas
          const ids = Object.values(seleccion.info).join(',');
          dataLink.push(`${categoria}=${ids}`);
        }
      }
    }

    
  
    // Unir todas las partes del enlace con '&'
    const realLink = baseLink + dataLink.join('&');
    console.log(realLink);
  
    // Redirigir al enlace generado
    window.location.href = realLink;
  }



  
}
