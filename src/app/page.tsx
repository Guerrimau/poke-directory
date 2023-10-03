import { PokemonListResponse, PokemonShort } from "@/interfaces";
import { pokeApi } from "@/services";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

async function getPokemons() {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: PokemonShort[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return pokemons;
}

export default async function Home() {
  const pokemons = await getPokemons();
  return (
    <main className="p-4">
      <div className="grid grid-flow-row grid-cols-4 gap-4">
        {pokemons.map((pokemon) => {
          return (
            <Card key={pokemon.id}>
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
            </Card>
          );
        })}
      </div>
    </main>
  );
}
