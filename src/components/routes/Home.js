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

  const [title, setTitle] = useState("None Selected")
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
        setPlaylists(myPlaylists)
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

  const filterPlaylists = (genre) => {
    playlists.filter((playlist) => {
      console.log('genre', genre, 'descriptions', playlist.description.toLowerCase())
      const filtered = playlist.description.toLowerCase().includes(genre)
      setPlaylists(filtered)
    })
  }

  const fetchHandler = (type, target) => {
    // console.log('type', type, 'target', target)
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
            filterPlaylists={filterPlaylists}
            selectedPlaylist={playlist}
            tracklist={tracklist}
            song={song}
            title={title}
            image={image}
            songImage={songImage}
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
