import axios from "axios";

async function getMyPlaylists(token) {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/playlists`, {
    params: { token }
  }).then((response) => {
    return response.data;
  }).catch((response) => {
    throw new Error(`Error! status: ${response.status}`);
  });
  return response  
}

export default getMyPlaylists
