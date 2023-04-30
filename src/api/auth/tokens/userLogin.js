import axios from "axios";
import utils from "../../../utils/utils";

async function UserLogin() {
  const authString = await axios.get(`${process.env.REACT_APP_BASE_URL}/login`)
    .then((res) => {
      return res.data
    }).catch((res) => {
      throw new Error(res);
    })

  // Open the auth popup
  window.location.href = authString
  // console.log("🚀 ~ file: userLogin.js:14 ~ UserLogin ~ window.location.href:", window.location)

  const windowHash = utils.URLToken()

  const token = Object.values(windowHash)[0]

  console.log("🚀 ~ file: userLogin.js:16 ~ UserLogin ~ token:", token)

  return token
}

export default UserLogin