import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import stateHandler from "./reducers/StateHandler.js";
import initialState from "./initialState.js"
import API from './utils/spotifyAPI.js'
import utils from './utils/utils.js';
import Container from 'react-bootstrap/Container'
import Home from './components/routes/Home'
import LandingPage from './components/routes/LandingPage'
import NotFound from './components/routes/NotFound'

function App() {
  const [state, dispatch] = useReducer(stateHandler, initialState)

  const tokenRef = useRef({
    value: ''
  })

  // initial api calls

  useEffect(() => {
    if (tokenRef.current.value !== "") {
      const token = tokenRef.current.value
      dispatch({ type: 'token', payload: token })
    } else {
      async function fetchToken() {
        const token = await API.token()
        dispatch({ type: 'token', payload: token })
      }
      fetchToken()
    }
  }, [])

  useEffect(() => {
    if (state.token) {
      async function fetchGenres() {
        const genres = await API.genres(state.token)
        dispatch({ type: 'genres', payload: genres })
      }

      async function fetchPlaylists() {
        const myPlaylists = await API.playlists(state.token)

        const updatedPlaylists = myPlaylists.map((playlist) => {
          return (
            utils.charConverter(playlist, playlist.description)
          )
        })
        localStorage.setItem('playlists', JSON.stringify(updatedPlaylists))

        dispatch({ type: 'playlists', payload: updatedPlaylists })
      }

      fetchGenres()
      fetchPlaylists()
    }
  }, [state.token])

  // state management

  useEffect(() => {
    const positiveLength = Object.keys(state.playlist).length > 0

    if (positiveLength) {
      const title = state.playlist.name
      const image = state.playlist.images[0].url

      dispatch({ type: 'title', payload: title })
      dispatch({ type: 'image', payload: image })
    }
  }, [state.playlist])

  useEffect(() => {
    function assignImage() {
      if (Object.keys(state.song).length > 0) {
        const songImage = state.song.album.images[0].url
        dispatch({ type: 'songImage', payload: songImage })
      }
    }

    assignImage()
  }, [state.song])

  // handlers

  const handlePopover = (bool) => {
    const isOpen = bool
    dispatch({ type: 'isOpen', payload: isOpen })
  }

  const handlePlaylistFetch = (id) => {
    async function fetchPlaylist() {
      const newToken = state.token
      const playlist = await API.playlist(id, newToken)
      dispatch({ type: 'playlist', payload: playlist })
    }
    fetchPlaylist()
  }

  const handleTracklistFetch = (id) => {
    async function fetchTracklist() {
      const newToken = state.token
      const tracklist = await API.tracklist(id, newToken)
      dispatch({ type: 'tracklist', payload: tracklist })
    }
    fetchTracklist()
  }

  const handleTrackInfo = (id) => {
    async function fetchTrackInfo() {
      const newToken = state.token
      const song = await API.song(id, newToken)
      dispatch({ type: 'song', payload: song })
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
        dispatch({ type: 'genre', payload: genreParam })
        dispatch({ type: 'playlists', payload: filtered })
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
              token={state.token}
              tokenRef={state.tokenRef}
              genres={state.genres}
              genre={state.genre}
              playlists={state.playlists}
              playlist={state.playlist}
              tracklist={state.tracklist}
              song={state.song}
              title={state.title}
              image={state.image}
              songImage={state.songImage}
              isOpen={state.isOpen}
              popoverHandler={handlePopover}
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
