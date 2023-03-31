import axios from "axios";

async function getPlaylistByID(playlistID, token) {
  console.log('playlist', playlistID, 'token', token)
  const response = await axios.get(
    `https://api.spotify.com/v1/playlists/${playlistID}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }
  ).then((response) => {
    return response.data;
  }).catch((response) => {
    throw new Error(`Error! status: ${response.status}`);
  });
  return response
};

export default getPlaylistByID
