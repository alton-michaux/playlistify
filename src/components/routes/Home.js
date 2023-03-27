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
  const [playlists, setPlaylists] = useState([])
  const [playlist, setPlaylist] = useState({})

  const tokenRef = useRef({
    value: ''
  })

  useEffect(() => {
    if (tokenRef.current.value !== "") {
      setToken(tokenRef.current.value)
    } else {
      async function fetchToken() {
        const newToken = await API.token()
        setToken(newToken)
      }
      fetchToken()
    }
  }, [tokenRef])

  useEffect(() => {
    if (token) {
      async function fetchGenres() {
        const genres = await API.genres(tokenRef.current.value)
        setGenres(genres)
      }

      async function fetchPlaylists() {
        const myPlaylists = await API.playlists(tokenRef.current.value)
        setPlaylists(myPlaylists)
      }

      fetchGenres()
      fetchPlaylists()
    }
  }, [token])

  const handlePlaylistFetch = (id, token) => {
    async function fetchPlaylist() {
      const playlist = await API.playlist(id, token)
      setPlaylist(playlist)
    }
    fetchPlaylist()
  } 
// console.log('token ->', token, 'genres ->', genres, 'playlists ->', playlists, 'playlist ->', playlist)
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
            playlists={playlists}
            handlePlaylistFetch={handlePlaylistFetch}
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
