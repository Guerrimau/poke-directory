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
    <Link href={"/pokemon/" + pokemon.id} className="h-[250px]">
      <Card isPressable key={pokemon.id} className="w-full h-full">
        <CardBody className="overflow-hidden justify-center items-center">
          <Image
            className="rounded-xl"
            src={pokemon.img}
            alt={pokemon.name + "_image"}
            height={150}
            width={150}
          />
        </CardBody>
        <CardFooter className="justify-between">
          <p className="capitalize">{pokemon.name}</p>
          <p># {pokemon.id}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PokemonCard;
