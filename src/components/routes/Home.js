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
  const [tracklist, setTracklist] = useState([])
  const [song, setSong] = useState({})

  const tokenRef = useRef({
    value: ''
  })

  // initial api calls

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

  // handlers

  const handlePlaylistFetch = (id, token) => {
    async function fetchPlaylist() {
      const playlist = await API.playlist(id, token)
      setPlaylist(playlist)
    }
    fetchPlaylist()
  }

  const handleTracklistFetch = (id, token) => {
    async function fetchTracklist() {
      const tracklist = await API.tracklist(id, token)
      setTracklist(tracklist)
    }
    fetchTracklist()
  }

  const handleTrackInfo = (id, token) => {
    async function fetchTrackInfo() {
      const track = await API.trackInfo(id, token)
      setSong(track)
    }
    fetchTrackInfo()
  }

  const fetchHandler = (type, target) => {
    if (type === "song") {
      handleTrackInfo(target)
    }
    if (type === "genre") {
      handlePlaylistFetch(target)
    }
    if (type === "playlist") {
      handleTracklistFetch(target)
    }
  }

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
        <Row
          className="mainRow"
        >
          <Main
            genres={genres}
            playlists={playlists}
            globalHandler={fetchHandler}
            selectedPlaylist={playlist}
            tracklist={tracklist}
            song={song}
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
