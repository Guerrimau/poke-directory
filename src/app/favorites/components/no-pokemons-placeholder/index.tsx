import Image from "next/image";

const NoPokemonsPlaceholder = () => {
  return (
    <div className="flex" style={{ height: "calc(100vh - 100px)" }}>
      <div className="mx-auto my-auto">
        <h1 className="mb-4 text-4xl font-bold text-zinc-800">No favorites yet.</h1>
        <Image
          className="opacity-10"
          alt="placeholder_pokemon"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default NoPokemonsPlaceholder;
