import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

interface Props {
    pokemons: string[]
}

const FavoritePokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="xs:grid-flow-col-1 grid gap-4 md:grid-cols-4 lg:grid-cols-8">
      {pokemons.map((pokemon) => (
        <Card key={pokemon}>
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
  );
};

export default FavoritePokemonsGrid;
