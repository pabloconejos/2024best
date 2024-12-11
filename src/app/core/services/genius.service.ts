import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Root } from '../../interfaces/Igenius';
import { ICover, ILyrics } from '../../interfaces/IReduceSong';

@Injectable({
  providedIn: 'root'
})
export class GeniusService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  search(name: string) {
    console.log(this.apiUrl + '/search')
    const params = new HttpParams().set('name', name);

    return this.http.get<Root>(this.apiUrl + '/search', {params}); // Envíalo en el cuerpo
  }

  getCover(data: { artist: string, song: string }) {
    const params = new HttpParams()
      .set('artist', data.artist)
      .set('song', data.song);
    return this.http.get<ICover>(this.apiUrl + '/cover', { params });
  }

  getLyrics(data: { artist: string, song: string }) {
    const params = new HttpParams()
      .set('artist', data.artist)
      .set('song', data.song);
    return this.http.get<ILyrics>(this.apiUrl + '/lyrics', { params });
  }
  
}
