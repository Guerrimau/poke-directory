"use client";

import { getFavoritePokemons } from "@/utils";
import FavoritePokemonsGrid from "./components/favorite-pokemons-grid";

const FavoritesPage = () => {
  const favoritePokemons = getFavoritePokemons();

  return (
    <main className="p-4">
      <h1 className="mb-4 text-4xl font-bold">Favorites</h1>
      <FavoritePokemonsGrid pokemons={favoritePokemons} />
    </main>
  );
};

export default FavoritesPage;
