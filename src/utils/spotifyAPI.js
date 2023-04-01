import getToken from "../api/auth/tokens/getToken";
import getGenres from "../api/data/getGenre";
import getMyPlaylists from "../api/data/getPlaylists";
import getPlaylistByID from "../api/data/getPlaylistByID";
import getMyPlaylistsTrackList from "../api/data/getTracklist";
import getTrackInfo from "../api/data/getTrackInfo";

const API = {
  // returns access_token
  token: () => getToken(),
  // return genres
  genres: (token) => getGenres(token),
  // fetch user playlists
  playlists: (token) => getMyPlaylists(token),
  // fetch playlist by ID
  playlist: (id, token) => getPlaylistByID(id, token),
  // fetch tracklist
  tracklist: (id, token) => getMyPlaylistsTrackList(id, token),
  // fetch song information
  song: (id, token) => getTrackInfo(id, token)
}

export default API
