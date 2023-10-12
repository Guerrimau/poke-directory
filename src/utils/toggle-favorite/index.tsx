const toggleFavorite = (id: string) => {
  let favoritesString = localStorage?.getItem("favorites");
  let favoritesArray = favoritesString?.split(",") || [];

  if (favoritesArray?.includes(id)) {
    favoritesArray = favoritesArray.filter((favId) => favId !== id);
  } else {
    favoritesArray?.push(id);
  }

  favoritesString = favoritesArray?.join(",") || "";

  if (favoritesString !== "") {
    localStorage.setItem("favorites", favoritesString);
  } else {
    localStorage.removeItem("favorites");
  }
};

export default toggleFavorite;
