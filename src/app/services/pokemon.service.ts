import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons()
   }

  async carregarPokemons() {
    const requisicao = await this.httpClient
    .get<any>('https://api.pokemontcg.io/v2/cards?q=set.id:xy1')
    .toPromise();

    this.pokemons = requisicao.data;
    
    console.log(this.pokemons)
  }
}
