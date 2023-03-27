import { useEffect, useState } from 'react';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Input from '../elements/Input'
import Nav from '../elements/Nav'
import Main from '../elements/Main'
import Footer from '../elements/Footer'
import API from '../../api/spotifyAPI.js'
import "../../styles/App.css"

const Home = () => {
  const [token, setToken] = useState("")

  useEffect(() => {
    async function fetchToken() {
      const newToken = await API.token()
      setToken(newToken)
    }
    fetchToken()
  }, [])

  return (
    <>
      <main>
        <Row>
          <Input
            value={token}
          ></Input>
          <Nav></Nav>
        </Row>
        <Row>
          <Main></Main>
        </Row>
      </main>
      <Row>
        <Footer></Footer>
      </Row>
    </>
  );
}

export default Home;
