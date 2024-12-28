import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RootLastFm } from '../../interfaces/ILastFm';

@Injectable({
  providedIn: 'root'
})
export class LastfmService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  
  search(name: string) {
    const params = new HttpParams().set('name', name);
    return this.http.get<RootLastFm>(this.apiUrl + '/last', {params}); // Envíalo en el cuerpo
  }
}
