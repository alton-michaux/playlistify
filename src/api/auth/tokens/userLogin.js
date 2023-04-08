import utils from "../../../utils/utils"

async function UserLogin() {
  console.log('userLogin')
  // Open the auth popup
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token`

  // window.history.pushState("", "", process.env.REACT_APP_REDIRECT_URI)

  const authToken = utils.URLToken
  console.log('authtoken', authToken)

  try {
    window.spotifyCallback = async (payload) => {

      return payload
    }

    if (authToken) {
      window.spotifyCallback(authToken);
    } else {
      throw new Error(`Authorization token failure`);
    }
  } catch (error) {
    throw new Error(`Error! status: ${error}`);
  }
}

export default UserLogin