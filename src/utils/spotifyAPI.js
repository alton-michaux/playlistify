import getToken from "../api/auth/tokens/getToken";
import getGenres from "../api/data/getGenre";
import getMyPlaylists from "../api/data/getPlaylists";
import getPlaylistByID from "../api/data/getPlaylistByID";
import getMyPlaylistsTrackList from "../api/data/getTracklist";
import getTrackInfo from "../api/data/getTrackInfo";
import UserLogin from "../api/auth/tokens/userLogin";
import GetUser from "../api/auth/tokens/getUser";

const API = {
  // returns access_token for playlist data
  token: () => getToken(),
  // open auth popup
  login: (token, dispatch) => UserLogin(token, dispatch),
  // get access token for user
  access: (token, dispatch) => GetUser(token, dispatch),
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
