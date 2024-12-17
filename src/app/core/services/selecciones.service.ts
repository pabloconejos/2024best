import { Injectable, signal } from '@angular/core';
import { Ieleccion } from '../../interfaces/ISeleccion';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SeleccionesService {
  selecciones = signal<Record<string, Ieleccion>>({});

  constructor(private localStorageService: LocalStorageService) { }

  updateSelecciones(data: Ieleccion) {
    if (!this.selecciones()[data.categoria]) {
      this.selecciones()[data.categoria] = {categoria: data.categoria, info: data.info};
      this.localStorageService.setData(this.selecciones())
      console.log(this.selecciones())
      return
    }

    this.selecciones()[data.categoria].info = data.info
    this.localStorageService.setData(this.selecciones())
    console.log(this.selecciones())
  }
}

