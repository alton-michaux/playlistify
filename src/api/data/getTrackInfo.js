import axios from "axios";

async function getTrackInfo(trackID, token) {
  console.log('trackID', trackID)
  const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackID}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => {
    return response.data
  }).catch((response) => {
    throw new Error(`Error! status: ${response.status}`);
  })
  return response
};

export default getTrackInfo
