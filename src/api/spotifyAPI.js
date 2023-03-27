import getToken from "./auth/tokens/getToken";

const API = {
  // returns access_token
  token: () => getToken(),
}

export default API
