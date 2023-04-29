import axios from "axios";

async function getPlaylistByID(playlistID, token) {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/playlist`, {
    params: { playlistID, token }
  }).then((response) => {
    return response.data;
  }).catch((response) => {
    throw new Error(`Error! status: ${response.status}`);
  });
  return response
};

export default getPlaylistByID
