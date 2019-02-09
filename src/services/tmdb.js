import debounce from "awesome-debounce-promise";
import TMDB from "../config/tmdb";

const search = debounce(
  (query, page) =>
    fetch(
      `${TMDB.api_url}?api_key=${TMDB.api_key}&query=${query}&page=${page}`,
    ),
  1000,
);

class TMDBService {
  /**
   * Fetch movie results for a certain query.
   *
   * @param {string} query Query to search for.
   * @param {number} page Page to search for.
   * @return {any[]} Movie results.
   * @memberof TMDBService
   */
  async fetchMovies(query, page) {
    if (!query || query.length === 0) {
      return { results: [], hasNext: false };
    }

    const response = await search(query, page);
    const body = await response.json();

    if (!response.ok) {
      throw new Error(`Unable to connect to API. ${body["status_message"]}`);
    }

    return {
      results: body.results,
      hasNext: body.total_pages > body.page,
    };
  }

  /**
   * Get image from path.
   *
   * @param {string} path Path to image in server.
   * @return {string} Image url.
   */
  getImage(path) {
    return path ? `${TMDB.image_url}${path}` : "fallback-image.jpg";
  }
}

export const service = new TMDBService();
