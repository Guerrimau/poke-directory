const getFavoritePokemons: () => string[] = () => {
    const favoritePokemonsString = localStorage.getItem("favorites");
    const favoritePokemonsArray = favoritePokemonsString?.split(",") || [];
    return favoritePokemonsArray;
}

export default getFavoritePokemons;