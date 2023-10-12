"use client";

import { getFavoritePokemons } from "@/utils";
import FavoritePokemonsGrid from "./components/favorite-pokemons-grid";
import NoPokemonsPlaceholder from "./components/no-pokemons-placeholder";
import { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<string[]>([]);

  useEffect(() => {
    setFavoritePokemons(getFavoritePokemons())
  }, []);

  return (
    <main className="p-4">
      {favoritePokemons.length > 0 ? (
        <FavoritePokemonsGrid pokemons={favoritePokemons} />
      ) : (
        <NoPokemonsPlaceholder />
      )}
    </main>
  );
};

export default FavoritesPage;
