import axios from 'axios'

async function redeemToken(state, code) {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/callback`, {
    params: { state, code }
  }).then((res) => {
    if (!res.data.error) {
      window.location.hash = ""
      const user = res.data
      console.log("🚀 ~ file: redeemToken.js:9 ~ redeemToken ~ user:", user)
      return user
    } else {
      throw new Error(res.data.error)
    }
  }).catch((error) => {
    throw new Error(error)
  })

  return response
}

export default redeemToken
