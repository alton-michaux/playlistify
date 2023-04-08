import axios from "axios";

//get access token for User
async function GetUser(authCode) {
  uiCtrl.displayLoadingMessage();
  const response = await axios.post('https://accounts.spotify.com/api/token', {
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded', 
        'Authorization' : 'Basic ' + btoa(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET)
    },
    form: {
      code: authCode,
      grant_type : 'authorization_code',
      redirect_uri : process.env.REDIRECT_URI
    },
    json: true
  })
  .then(async (response) => {
    console.log(response)
    if (response.ok) {
      uiCtrl.hideLoadingMessage()
      const data = await response.json()
      uiCtrl.storeAccToken(data.access_token)
      return data.access_token;
    }
    uiCtrl.displayError(response.status)
  })
  .catch (error => {
    uiCtrl.displayError(error)
  } )
  return response
};

export default GetUser
