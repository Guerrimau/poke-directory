"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { isInFavorites, toggleFavorite } from "@/utils";

interface Props {
  pokemonId: string;
}

const SavePokemonButton = ({ pokemonId }: Props) => {
  const [saved, setSaved] = useState(isInFavorites(pokemonId));

  const onClick = () => {
    setSaved((pre) => !pre);
    toggleFavorite(pokemonId);
  };

  return (
    <Button color="primary" variant="ghost" onClick={onClick}>
      {saved ? "Remove from Favorites" : "Save to Favorites"}
    </Button>
  );
};

export default SavePokemonButton;
