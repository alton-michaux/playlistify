import axios from "axios";

async function getGenres(token) {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/genres`, {
    params: { token }
  }).then(async (response) => {
    const data = response.data.genres
    return data
  }).catch((response) => {
    throw new Error(`Error! status: ${response.message}`);
  })
  return response
}

export default getGenres
