import getToken from "./auth/tokens/getToken";
import getGenres from "./data/getGenre";
import getMyPlaylists from "./data/getPlaylists";
import getPlaylistByID from "./data/getPlaylistByID";

const API = {
  // returns access_token
  token: () => getToken(),
  // return genres
  genres: (token) => getGenres(token),
  // fetch user playlists
  playlists: (token) => getMyPlaylists(token),
  // fetch playlist by ID
  playlist: (id, token) => getPlaylistByID(id, token)
}

export default API
