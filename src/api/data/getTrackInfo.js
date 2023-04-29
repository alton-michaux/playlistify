import axios from "axios";

async function getTrackInfo(trackID, token) {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/song`, {
    params: { token, trackID }
  }).then((res) => {
    return res.data;
  }).catch((res) => {
    throw new Error(`Error! status: ${res.status}`);
  });
  return response  
};

export default getTrackInfo
