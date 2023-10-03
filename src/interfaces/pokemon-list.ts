export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonShort[];
}

export interface PokemonShort {
  name: string;
  url: string;
  img?: string;
  id?: number;
}
