import { Metadata, NextPage } from "next";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { pokeApi } from "@/services";

interface Props {
  params: { id: string };
}

const PokemonPage: NextPage<Props> = async ({ params }) => {
  const { id: pokemonId } = params;
  const pokemon = await pokeApi.getPokemonById(pokemonId);

  return (
    <main className="grid grid-cols-3 gap-3 p-3">
      <Card isHoverable className="col-span-1 p-3">
        <CardBody className="items-center">
          <Image
            isBlurred
            as={NextImage}
            src={pokemon.sprites.other?.dream_world.front_default}
            alt={pokemon.name + "_image"}
            width={200}
            height={200}
          />
        </CardBody>
      </Card>
      <Card className="col-span-2 p-3">
        <CardHeader className="justify-between">
          <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
          <Button color="primary" variant="ghost">
            Guardar en favoritos
          </Button>
        </CardHeader>
        <CardBody>
          <p className="text-lg">Sprites:</p>
          <div className="flex justify-evenly">
            <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Image src={pokemon.sprites.back_default} alt={pokemon.name} />
            <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} />
            <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} />
          </div>
        </CardBody>
      </Card>
    </main>
  );
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const pokemon = await pokeApi.getPokemonById(params.id);
  return {
    title: pokemon.name
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const pokemon151 = [...Array(151)].map((_, index) => ({
    id: String(index + 1),
  }));
  return pokemon151;
}

export default PokemonPage;
