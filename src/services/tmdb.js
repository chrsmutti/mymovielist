import debounce from "awesome-debounce-promise";
import TMDB from "../config/tmdb";

const search = debounce(
  query => fetch(`${TMDB.api_url}?api_key=${TMDB.api_key}&query=${query}`),
  1000,
);

/**
 * Fetch movie results for a certain query.
 *
 * @export
 * @param {string} query Query to search for.
 * @return {any[]} Movie results.
 */
export async function fetchMovies(query) {
  if (!query || query.length === 0) {
    return [];
  }

  const response = await search(query);
  const body = await response.json();

  if (!response.ok) {
    throw new Error(`Unable to connect to API. ${body["status_message"]}`);
  }

  return body.results;
}

/**
 * Get image from path.
 *
 * @param {string} path Path to image in server.
 * @return {string} Image url.
 */
export function getImage(path) {
  return path ? `${TMDB.image_url}${path}` : "fallback-image.jpg";
}
