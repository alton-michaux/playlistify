import utils from "../../../utils/utils"

async function UserLogin() {
  const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "app-remote-control",
    "streaming"
  ];
  // Open the auth popup
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token&scopes=${scopes}`

  const authToken = utils.URLToken
  // console.log('authtoken', authToken)

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