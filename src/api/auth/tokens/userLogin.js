import axios from "axios";

async function UserLogin() {
  const response = await axios.get(process.env.REACT_APP_BASE_URL + "/login").then((response) => {
    return response.json()
  }).catch((error) => {
    throw new Error(`Error! status: ${error}`);
  })
  console.log("🚀 ~ file: userLogin.js:9 ~ response ~ response:", response)
  return response
}

export default UserLogin