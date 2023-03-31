import axios from "axios";

async function getMyPlaylistsTrackList(playlistID, token) {
  console.log('id', playlistID, 'token', token)
  const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => {
    return response.data;
  }).catch((response) => {
    throw new Error(`Error! status: ${response.status}`);
  })
  return response
};

export default getMyPlaylistsTrackList