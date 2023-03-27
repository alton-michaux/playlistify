import getToken from "./auth/tokens/getToken";
import getGenres from "./data/getGenre";
import getMyPlaylists from "./data/getPlaylists";

const API = {
  // returns access_token
  token: () => getToken(),
  // return genres
  genres: (token) => getGenres(token),
  // fetch user playlists
  playlists: (token) => getMyPlaylists(token)
}

export default API
