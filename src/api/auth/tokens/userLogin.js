import axios from "axios";

async function UserLogin() {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/login`)
  .then((res) => {
    return res
  }).catch((res) => {
    throw new Error(res);
  })

  return response
}

export default UserLogin