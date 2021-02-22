import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public http: HttpClient, private endpoint: EndpointService) { }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.endpoint.getPokemonById.replace('${id}', id.toString()));
    // return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  getAllPokemon(): Observable<any> {
    return this.http.get<any>(this.endpoint.getAllPokemon);
  }

  getPokemonByURL(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.endpoint.getPokemonByURL.replace('', url));
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.endpoint.getPokemonByName.replace('${name}', name));
  }
}
