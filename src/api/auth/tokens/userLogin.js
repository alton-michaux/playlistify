import axios from "axios";

async function UserLogin() {
  const user = await axios.get(`${process.env.REACT_APP_BASE_URL}/login`)
    .then((res) => {
      return res.data
    }).catch((res) => {
      throw new Error(res);
    })

  return user
}

export default UserLogin