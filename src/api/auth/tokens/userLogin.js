async function UserLogin({ dispatch }) {
  // Open the auth popup
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token`

  const authToken = window.location.hash.substring(14).split('&')[0]
  dispatch({ type: 'userToken', payload: authToken })

  try {
    window.spotifyCallback = async (payload) => {

      return payload
    }

    if (authToken) {
      window.spotifyCallback(authToken);
    } else {
      dispatch({ type: 'failure' })
    }
  } catch (error) {
    dispatch({ type: 'failure' })
  }
}

export default UserLogin