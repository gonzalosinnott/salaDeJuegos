import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

  constructor(private http: HttpClient) { }

  getRandomCharacter() { 
    return this.http.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=4");
  }  
}
