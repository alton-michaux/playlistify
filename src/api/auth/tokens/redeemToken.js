import axios from 'axios'

async function redeemToken(code, state) {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/callback`, {
    params: { code, state }
  }).then((res) => {
    return res.data.access_token
  }).catch((error) => {
    throw new Error(error)
  })

  return response
}

export default redeemToken
