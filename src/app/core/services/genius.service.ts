import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Root } from '../../interfaces/Igenius';

@Injectable({
  providedIn: 'root'
})
export class GeniusService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  search(name: string) {
    const body = { name }; // Crea un objeto con el nombre
    console.log(this.apiUrl + '/search')
    const params = new HttpParams().set('name', name);

    return this.http.get<Root>(this.apiUrl + '/search', {params}); // Envíalo en el cuerpo
  }
  
}
