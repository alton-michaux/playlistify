import axios from "axios";

async function getMyPlaylistsTrackList(playlistID, token) {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/tracklist`, {
    params: { token, playlistID }
  }).then((res) => {
    return res.data;
  }).catch((res) => {
    throw new Error(`Error! status: ${res.status}`);
  });
  return response  
};

export default getMyPlaylistsTrackList