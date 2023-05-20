import axios from "axios";

async function getMyPlaylists(token) {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/playlists`, {
    params: { token }
  }).then((res) => {
    return res.data;
  }).catch((res) => {
    throw new Error(`Error! status: ${res}`);
  });
  return response  
}

export default getMyPlaylists
