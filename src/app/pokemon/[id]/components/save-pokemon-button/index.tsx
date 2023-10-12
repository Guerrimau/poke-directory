"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { isInFavorites, toggleFavorite } from "@/utils";

interface Props {
  pokemonId: string;
}

const SavePokemonButton = ({ pokemonId }: Props) => {
  const [isFavorited, setIsFavorites] = useState(false);

  const onClick = () => {
    setIsFavorites((pre) => !pre);
    toggleFavorite(pokemonId);
  };

  useEffect(() => {
    setIsFavorites(isInFavorites(pokemonId));
  }, [pokemonId]);

  return (
    <Button color="primary" variant="ghost" onClick={onClick}>
      {isFavorited ? "Remove from Favorites" : "Save to Favorites"}
    </Button>
  );
};

export default SavePokemonButton;
