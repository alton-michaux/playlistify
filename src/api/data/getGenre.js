import axios from "axios";

async function getGenres(token) {
  const response = await axios.get(`https://api.spotify.com/v1/recommendations/available-genre-seeds`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }
  ).then(async (response) => {
    return response.data.genres
  }).catch((response) => {
    throw new Error(`Error! status: ${response.message}`);
  })
  return response
}

export default getGenres
