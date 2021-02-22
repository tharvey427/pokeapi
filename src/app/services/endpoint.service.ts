import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  private readonly baseURL = 'https://pokeapi.co/api/v2'

  public readonly getPokemonById: string = this.baseURL + '/pokemon/${id}';

  public readonly getAllPokemon: string = this.baseURL + '/pokemon?limit=107&offset=386'

  public readonly getPokemonByURL: string = '';

  public readonly getPokemonByName: string = this.baseURL + '/pokemon/${name}';

  constructor() { }
}
