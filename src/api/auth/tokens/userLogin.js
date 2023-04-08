import utils from "../../../utils/utils"

async function UserLogin() {
  // Open the auth popup
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token`

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