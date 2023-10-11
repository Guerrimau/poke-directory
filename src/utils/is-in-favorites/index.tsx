const isInFavorites = (id: string) => {
    const favorites = localStorage.getItem("favorites") || "";
    return favorites?.includes(id);
}

export default isInFavorites;