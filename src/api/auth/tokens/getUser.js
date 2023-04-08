import axios from "axios";

//get access token for User
async function GetUser(authCode) {
  const response = await axios.get('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET)
    },
    form: {
      code: authCode,
      grant_type: 'authorization_code',
      redirect_uri: process.env.REDIRECT_URI
    },
    json: true
  })
    .then(async (response) => {
      const data = await response.json()
      return data.access_token;
    })
    .catch(error => {
      throw new Error(`Error! status: ${error}`);
    })
  return response
};

export default GetUser
