import axios from 'axios'

async function GetUserToken(token, dispatch) {
  dispatch({ type: 'loading' })
  const response = await axios.post(`https://api.spotify.com/v1/me`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(async response => {
    if (response.ok) {
      console.log('user response', response)
      dispatch({ type: 'success' })
      const data = await response.json()
      return data
    } else {
      dispatch({ type: 'failure' })
    }
  }).catch(() => {
    dispatch({ type: 'failure' })
  })
  return response
};

export default GetUserToken
