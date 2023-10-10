import { Pokemon } from "@/interfaces";
import { pokeApi } from "@/services";
import { NextPage } from "next";

interface Props {
  params: { id: string };
}

const  PokemonPage: NextPage<Props> = async ({ params }) => {
  const { id: pokemonId } = params;
  const pokemon = await pokeApi.getPokemonById(pokemonId);

  return (
    <div>

    </div>
  );
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const pokemon151 = [...Array(151)].map((_, index) => ({
    id: String(index + 1),
  }));
  return pokemon151;
}

export default PokemonPage;
