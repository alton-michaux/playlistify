import getToken from "./auth/tokens/getToken";
import getGenres from "./data/getGenre";

const API = {
  // returns access_token
  token: () => getToken(),
  // return genres
  genres: (token) => getGenres(token)
}

export default API
