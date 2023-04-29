import axios from "axios";

async function getGenres(token) {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/genres`, {
    params: { token }
  }).then(async (res) => {
    const data = res.data.genres
    return data
  }).catch((res) => {
    throw new Error(res);
  })
  return response
}

export default getGenres
