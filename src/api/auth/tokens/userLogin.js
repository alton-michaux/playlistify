import axios from "axios";

async function UserLogin() {
  console.log('HIT!!')
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/login`)
  .then((res) => {
    return res.json()
  }).catch((res) => {
    throw new Error(res);
  })

  return response
}

export default UserLogin