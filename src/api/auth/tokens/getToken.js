import axios from "axios";

async function getToken() {
  const response = await axios.get('/token').then((response) => {
    const data = response.json()
    console.log("🚀 ~ file: getToken.js:6 ~ response ~ data:", data)
  }).catch((response) => {
    throw new Error(`Error! status: ${response.status}`);
  })
  return response
}

export default getToken
