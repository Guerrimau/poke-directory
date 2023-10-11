"use client"

import { ReactNode } from "react";
import { Button } from "@nextui-org/button";
import { toggleFavorite } from "@/utils";

interface Props {
  pokemonId: string;
  children: ReactNode;
}

const SavePokemonButton = ({ pokemonId, children }: Props) => {
  const onClick = () => {
    toggleFavorite(pokemonId);
  }

  return (
    <Button color="primary" variant="ghost" onClick={onClick}>
      {children}
    </Button>
  );
};

export default SavePokemonButton;
