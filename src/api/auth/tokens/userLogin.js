import axios from "axios";
import utils from "../../../utils/utils";

async function UserLogin() {
  try {
    const authString = await axios.get(`${process.env.REACT_APP_BASE_URL}/login`)
      .then((res) => {
        return res.data
      }).catch((res) => {
        throw new Error(res);
      })

    // Open the auth popup
    window.location.href = authString

    const tokenObj = utils.URLToken()
  
    return tokenObj
  } catch (error) {
    throw new Error(error)
  }
}

export default UserLogin