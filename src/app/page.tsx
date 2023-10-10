import PokemonCard from "@/components/pokemon-card";
import { pokeApi } from "@/services";

export default async function Home() {
  const pokemons = await pokeApi.getPokemonsMany();
  return (
    <main className="p-4">
      <div className="xs:grid-cols-1 grid grid-flow-row gap-4 sm:grid-cols-2 md:grid-cols-4">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </main>
  );
}
