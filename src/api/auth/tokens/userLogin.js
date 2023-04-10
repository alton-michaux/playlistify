import utils from "../../../utils/utils"

async function UserLogin() {
  const scopes = [
    "user-read-playback-state",
    "user-library-modify",
    "user-library-read",
    "user-modify-playback-state",
    "user-read-private",
    "user-read-email",
    "streaming",
    'user-read-playback-state',
    'playlist-read-collaborative',
    'playlist-read-private',
    'user-library-modify',
    'user-library-read',  
    'user-read-playback-position'
  ];
  // Open the auth popup
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token&scopes=${scopes}`

  const authToken = utils.URLToken

  try {
    window.spotifyCallback = async (payload) => {
      return payload
    }

    window.spotifyCallback(authToken);
  } catch (error) {
    throw new Error(`Error! status: ${error}`);
  }
}

export default UserLogin