import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss', '../../app.component.scss']
})

export class PokemonListComponent implements OnInit {
  pokeData: any;
  allPokemon: Pokemon[];
  pokemonGroup = new FormControl();

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe(data => {
      this.pokeData = data.results;
      this.allPokemon = this.pokeData;
    });
  }

}
