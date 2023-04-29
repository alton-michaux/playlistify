import axios from "axios";

async function getToken() {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/token`)
    .then((res) => {
      const data = res.data
      return data
    }).catch((res) => {
      throw new Error(res);
    })

  return response
}

export default getToken
