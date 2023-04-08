import axios from 'axios'

async function GetUserToken(token) {
  const response = await axios.get(`https://api.spotify.com/v1/me`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(async response => {
    const data = await response.json()
    return data
  }).catch((error) => {
    throw new Error(`Error! status: ${error}`);
  })
  return response
};

export default GetUserToken
