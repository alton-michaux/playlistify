import axios from "axios";

async function UserLogin() {
  axios.get('/login').then((response) => {
    return response.json()
  }).catch((error) => {
    throw new Error(`Error! status: ${error}`);
  })
}

export default UserLogin