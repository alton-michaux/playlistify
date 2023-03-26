import axios from 'axios';

async function getToken() {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)
  }

  const response = await axios.post('https://accounts.spotify.com/api/token',
    'grant_type=client_credentials',
    {
      headers: headers
    }
  ).then(async (response) => {
    return response.data.access_token
  }).catch(() => {
    throw new Error(`Error! status: ${response.status}`);
  })
}

export default getToken
