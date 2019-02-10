const favoritesKey = "my-movie-list-favorites";

class FavoritesService {
  /**
   * Save or remove a movie to user's favorites list.
   *
   * @param {any} movie Movie to save.
   * @memberof FavoritesService
   */
  toggle(movie) {
    const favorites = this.get();
    const index = favorites.findIndex(m => m.id === movie.id);

    if (index === -1) {
      favorites.push(movie);
    } else {
      favorites.splice(index, 1);
    }

    window.localStorage.setItem(favoritesKey, JSON.stringify(favorites));
  }

  /**
   * Get all favorites.
   *
   * @return {any[]} List of favorite movies
   * @memberof FavoritesService
   */
  get() {
    const json = window.localStorage.getItem(favoritesKey);
    if (json == null || json.length === 0) {
      return [];
    }

    return JSON.parse(json);
  }

  /**
   * Check if a movie is favorite.
   *
   * @param {*} movie Movie to check.
   * @return {boolean} If is favorite.
   * @memberof FavoritesService
   */
  isFavorite(movie) {
    return this.get().find(m => m.id === movie.id) != null;
  }
}

export const service = new FavoritesService();
