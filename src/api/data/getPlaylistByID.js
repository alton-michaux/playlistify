import axios from "axios";

async function getPlaylistByID(playlistID, token) {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/playlist`, {
    params: { playlistID, token }
  }).then((response) => {
    console.log("🚀 ~ file: getPlaylistByID.js:7 ~ getPlaylistByID ~ response:", response)
    return response.data;
  }).catch((response) => {
    throw new Error(`Error! status: ${response.status}`);
  });
  return response
};

export default getPlaylistByID
