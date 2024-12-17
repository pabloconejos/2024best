import { Injectable } from '@angular/core';
import { Ieleccion } from '../../interfaces/ISeleccion';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setData(data: Record<string, Ieleccion>) {
    const dataToString = JSON.stringify(data);
    localStorage.setItem('selecciones', dataToString);
  }
  
  getData(): Record<string, Ieleccion> | null {
    const data = localStorage.getItem('selecciones');
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
  

  deleteData() {
    try {
      localStorage.removeItem('selecciones')
      return true
    } catch (e) {
      return false
    }
  }
}
