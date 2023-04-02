import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react';
import API from './utils/spotifyAPI.js'
import utils from './utils/utils.js';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Home from './components/routes/Home'
import LandingPage from './components/routes/LandingPage'
import NotFound from './components/routes/NotFound'

function App() {
  const [token, setToken] = useState("")
  const [genres, setGenres] = useState([])
  const [genre, setGenre] = useState("")
  const [playlists, setPlaylists] = useState([])
  const [playlist, setPlaylist] = useState({})
  const [tracklist, setTracklist] = useState([])
  const [song, setSong] = useState({})

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("https://techcrunch.com/wp-content/uploads/2021/02/alexander-shatov-JlO3-oY5ZlQ-unsplash.jpg")

  const [songImage, setSongImage] = useState("https://techcrunch.com/wp-content/uploads/2021/02/alexander-shatov-JlO3-oY5ZlQ-unsplash.jpg")

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

        const updatedPlaylists = myPlaylists.map((playlist) => {
          return (
            utils.charConverter(playlist, playlist.description)
          )
        })
        localStorage.setItem('playlists', JSON.stringify(updatedPlaylists))

        setPlaylists(updatedPlaylists)
      }

      fetchGenres()
      fetchPlaylists()
    }
  }, [token])

  // state management

  useEffect(() => {
    const positiveLength = Object.keys(playlist).length > 0

    if (positiveLength) {
      setTitle(playlist.name)
      setImage(playlist.images[0].url)
    }
  }, [playlist])

  useEffect(() => {
    function assignImage() {
      if (Object.keys(song).length > 0) {
        setSongImage(song.album.images[0].url)
      }
    }

    assignImage()
  }, [song])

  // handlers

  const handlePlaylistFetch = (id) => {
    async function fetchPlaylist() {
      const newToken = tokenRef.current.defaultValue
      const playlist = await API.playlist(id, newToken)
      setPlaylist(playlist)
    }
    fetchPlaylist()
  }

  const handleTracklistFetch = (id) => {
    async function fetchTracklist() {
      const newToken = tokenRef.current.defaultValue
      const tracklist = await API.tracklist(id, newToken)
      setTracklist(tracklist)
    }
    fetchTracklist()
  }

  const handleTrackInfo = (id) => {
    async function fetchTrackInfo() {
      const newToken = tokenRef.current.defaultValue
      const track = await API.song(id, newToken)
      setSong(track)
    }
    fetchTrackInfo()
  }

  const filterPlaylists = (genreParam) => {
    const storedPlaylists = JSON.parse(localStorage.getItem('playlists'))
    function applyFilter() {
      const filtered = storedPlaylists.filter((playlist) => {
        return (
          playlist.description.toLowerCase().includes(genreParam.toLowerCase())
        )
      })
      if (genreParam !== "Sort By Genre") {
        setGenre(genreParam)
        setPlaylists(filtered)
      }
    }
    applyFilter()
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
    <Container
      style={{ paddingTop: "5%", height: "100%" }}
      fluid
    >
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Home
              token={token}
              tokenRef={tokenRef}
              genres={genres}
              genre={genre}
              playlists={playlists}
              playlist={playlist}
              tracklist={tracklist}
              song={song}
              title={title}
              image={image}
              songImage={songImage}
              fetchHandler={fetchHandler}
              filterPlaylists={filterPlaylists}
            />}
        ></Route>
        <Route
          exact
          path='/login'
          element={<LandingPage />}
        ></Route>
        <Route
          path='*'
          element={<NotFound />}
        ></Route>
      </Routes>
    </Container>
  );
}

export default App;
