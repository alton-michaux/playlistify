import axios from "axios";

async function UserLogin() {
  const response = await axios.get('/login').then((response) => {
    return response.json()
  }).catch((error) => {
    throw new Error(`Error! status: ${error}`);
  })
  return response
}

export default UserLogin