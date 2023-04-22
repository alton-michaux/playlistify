import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import stateHandler from "./reducers/StateHandler.js";
import initialState from "./initialState.js"
import API from './utils/spotifyAPI.js'
import utils from './utils/utils.js';
import Container from 'react-bootstrap/Container'
import Home from './components/routes/Home'
import NotFound from './components/routes/NotFound'

function App() {
  const [state, dispatch] = useReducer(stateHandler, initialState)
  console.log("🚀 ~ file: App.js:15 ~ App ~ state:", state)

  // initial api calls

  useEffect(() => {
    async function fetchToken() {
      dispatch({ type: 'loading' })
      try {
        const token = await API.token()
        console.log("🚀 ~ file: App.js:24 ~ fetchToken ~ token:", token)
        dispatch({ type: 'token', payload: token })
        dispatch({ type: 'success' })
      } catch {
        dispatch({ type: 'failure' })
      }
    }
    fetchToken()
  }, [])

  useEffect(() => {
    if (state.token) {
      dispatch({ type: 'loading' })
      async function fetchGenres() {
        try {
          const genres = await API.genres(state.token)
          dispatch({ type: 'genres', payload: genres })
          dispatch({ type: 'success' })
        } catch {
          dispatch({ type: 'failure' })
        }
      }

      async function fetchPlaylists() {
        dispatch({ type: 'loading' })
        try {
          const myPlaylists = await API.playlists(state.token)
          dispatch({ type: 'success' })

          const updatedPlaylists = myPlaylists.map((playlist) => {
            return (
              utils.charConverter(playlist, playlist.description)
            )
          })
          localStorage.setItem('playlists', JSON.stringify(updatedPlaylists))

          dispatch({ type: 'playlists', payload: updatedPlaylists })
        } catch {
          dispatch({ type: 'failure' })
        }
      }

      fetchGenres()
      fetchPlaylists()
    }
  }, [state.token])

  useEffect(() => {
    const spotify = new SpotifyWebApi()
  
    const _spotifyToken = utils.URLToken().access_token

    window.location.hash = ""

    if (_spotifyToken) {
      dispatch({ type: 'authToken', payload: _spotifyToken })

      spotify.setAccessToken(_spotifyToken)

      spotify.getMe().then((user) => {
        dispatch({ type: 'user', payload: user })
        dispatch({ type: 'success' })
        alert(`Welcome ${user.display_name}`)
      })
    } else {
      dispatch({ type: 'failure' })
    }
  }, [state.authToken])

  // song/playlist data update

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
      dispatch({ type: 'loading' })
      try {
        const newToken = state.token
        const playlist = await API.playlist(id, newToken)
        dispatch({ type: 'playlist', payload: playlist })
        dispatch({ type: 'success' })
      } catch {
        dispatch({ type: 'failure' })
      }
    }
    fetchPlaylist()
  }

  const handleTracklistFetch = (id) => {
    async function fetchTracklist() {
      dispatch({ type: 'loading' })
      try {
        const newToken = state.token
        const tracklist = await API.tracklist(id, newToken)
        dispatch({ type: 'tracklist', payload: tracklist })
        dispatch({ type: 'success' })
      } catch {
        dispatch({ type: 'failure' })
      }
    }
    fetchTracklist()
  }

  const handleTrackInfo = (id) => {
    async function fetchTrackInfo() {
      dispatch({ type: 'loading' })
      try {
        const newToken = state.token
        const song = await API.song(id, newToken)
        dispatch({ type: 'song', payload: song })
        dispatch({ type: 'success' })
      } catch {
        dispatch({ type: 'failure' })
      }
    }
    fetchTrackInfo()
  }

  async function userhandler(type) {
    dispatch({ type: 'loading' })
    if (type === 'log-in') {
      try {
        const userToken = await API.login()
        console.log("🚀 ~ file: App.js:174 ~ userhandler ~ userToken:", userToken)
        dispatch({ type: "authToken", payload: userToken })
      } catch {
        dispatch({ type: 'failure' })
      }
    } else {
      dispatch({ type: 'authToken', payload: '' })
      dispatch({ type: 'user', payload: '' })
      dispatch({ type: 'success' })
      alert("You logged out")
    }
  }

  const filterPlaylists = (genreParam) => {
    if (genreParam !== "Sort By Genre") {
      const storedPlaylists = JSON.parse(localStorage.getItem('playlists'))
      function applyFilter() {
        const filtered = storedPlaylists.filter((playlist) => {
          return (
            playlist.description.toLowerCase().includes(genreParam.toLowerCase())
          )
        })
        dispatch({ type: 'genre', payload: genreParam })
        dispatch({ type: 'playlists', payload: filtered })
      }
      applyFilter()
    }
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
        {['/', '/callback'].map(path =>
          <Route
            key={path}
            exact
            path={path}
            element={
              <Home
                loading={state.isLoading}
                error={state.isError}
                handleUser={userhandler}
                show={state.show}
                user={state.user}
                token={state.token}
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
        )}
        <Route
          path='*'
          element={<NotFound />}
        ></Route>
      </Routes>
    </Container>
  );
}

export default App;
