import axios from "axios";

async function getPlaylistByID(playlistID, token) {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/playlist`, {
    params: { playlistID, token }
  }).then((res) => {
    return res.data;
  }).catch((res) => {
    throw new Error(res);
  });
  return response
};

export default getPlaylistByID
