import axios from "axios";

async function AuthString() {
  const user = await axios.get(`${process.env.REACT_APP_BASE_URL}/login`)
    .then((res) => {
      return res.data
    }).catch((res) => {
      throw new Error(res);
    })

  return user
}

export default AuthString