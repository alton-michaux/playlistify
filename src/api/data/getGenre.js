import axios from "axios";

async function getGenres(token) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
  const response = await axios.get(`https://api.spotify.com/v1/recommendations/available-genre-seeds`,
    {
      heaaders: headers
    }
  ).then(async (response) => {
    console.log('data', response)
    const data = await response.json()
    return data.genres
  }).catch((response) => {
    throw new Error(`Error! status: ${response.message}`);
  })
  return response
}

export default getGenres
