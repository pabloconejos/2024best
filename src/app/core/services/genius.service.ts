import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeniusService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getItem(name: string) {
    return this.http.get<any>(this.apiUrl+'/song')
  }
}
