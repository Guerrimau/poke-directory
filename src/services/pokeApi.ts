import axios from "axios";
import { Pokemon, PokemonListResponse, PokemonShort } from "@/interfaces";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

const getPokemonById = async (pokemonId: string) => {
  const { data } = await pokeApi.get<Pokemon>("/pokemon/" + pokemonId);
  return data;
};

const getPokemonsMany = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: PokemonShort[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return pokemons;
};

const apiService = {
    getPokemonById,
    getPokemonsMany
}

export default apiService;
