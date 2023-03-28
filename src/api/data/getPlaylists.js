import axios from "axios";

async function getMyPlaylists(token) {
  const limit = 21;

  const response = await axios.get(
    `https://api.spotify.com/v1/users/${process.env.REACT_APP_USER_ID}/playlists?limit=${limit}&offset=0`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }
  ).then((response) => {
    return response.data.items;
  }).catch((response) => {
    throw new Error(`Error! status: ${response.status}`);
  });
  return response
}

export default getMyPlaylists
