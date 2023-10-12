import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/navigation";

interface Props {
  pokemons: string[];
}

const FavoritePokemonsGrid = ({ pokemons }: Props) => {

  const router = useRouter();

  const onClick = (pokemonId: string) => {
    router.push("/pokemon/" + pokemonId);
  }

  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">Favorites</h1>
      <div className="xs:grid-flow-col-1 grid gap-4 md:grid-cols-4 lg:grid-cols-8">
        {pokemons.map((pokemon) => (
          <Card isPressable key={pokemon} onClick={() => onClick(pokemon)}>
            <CardBody>
              <Image
                alt="pokemon"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
                width="100%"
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FavoritePokemonsGrid;
