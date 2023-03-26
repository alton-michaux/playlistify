import axios from 'axios';

async function getToken() {
  const response = await axios.post('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)
    },
    params: 'grant_type=client_credentials'
  }).then(async (response) => {
    const data = await response.json()
    return data.access_token
  }).catch((e) => {
    console.log(e.message)
  })
  return response
}

export default getToken
