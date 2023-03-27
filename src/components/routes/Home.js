import { useEffect, useState, useRef } from 'react';
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
  const [genres, setGenres] = useState([])

  const tokenRef = useRef(null)

  useEffect(() => {
    if (tokenRef != "[object Object]") {
      setToken(tokenRef.current.value)
    } else {
      async function fetchToken() {
        const newToken = await API.token()
        setToken(newToken)
      }
      fetchToken()
    }
  }, [])

  useEffect(() => {
    async function fetchGenres() {
      const genres = await API.genres(tokenRef.current.value)
      setGenres(genres)
    }
    fetchGenres(token)
  }, [tokenRef])

  return (
    <>
      <main>
        <Row>
          <Input
            type="hidden"
            value={token}
            inputRef={tokenRef}
          ></Input>
          <Nav></Nav>
        </Row>
        <Row>
          <Main
            genres={genres}
          ></Main>
        </Row>
      </main>
      <Row>
        <Footer></Footer>
      </Row>
    </>
  );
}

export default Home;
