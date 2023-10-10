"use client";

import { Image } from "@nextui-org/image";
import Link from "next/link";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { PokemonShort } from "@/interfaces";

interface Props {
  pokemon: PokemonShort;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card isPressable key={pokemon.id}>
      <Link href={"/pokemon/" + pokemon.id} className="h-full w-full flex flex-col">
        <CardBody>
          <Image
            className="rounded-xl object-cover"
            src={pokemon.img}
            alt={pokemon.name + "_image"}
            height="80px"
            width="100%"
          />
        </CardBody>
        <CardFooter className="flex justify-between">
          <p className="capitalize">{pokemon.name}</p>
          <p># {pokemon.id}</p>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default PokemonCard;
