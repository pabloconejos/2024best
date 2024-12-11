import { Injectable, signal } from '@angular/core';

interface Ieleccion {
  categoria: string;
  info: any;
}

@Injectable({
  providedIn: 'root'
})
export class SeleccionesService {
  selecciones = signal<Record<string, Ieleccion>>({});

  constructor() { }

  updateSelecciones(data: Ieleccion) {
    if (!this.selecciones()[data.categoria]) {
      this.selecciones()[data.categoria] = {categoria: data.categoria, info: data.info};
      console.log(this.selecciones())
      return
    }

    this.selecciones()[data.categoria].info = data.info

    console.log(this.selecciones())

  }
}

