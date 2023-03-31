import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import MainSong from './SongElements/MainSong'
import MainPlaylist from './PlaylistElements/MainPlaylist'
import MainSelect from './SelectElements/MainSelect'

const Main = ({
  genres,
  playlists,
  globalHandler,
  selectedPlaylist,
  tracklist,
  song
}) => {
  const [title, setTitle] = useState("None Selected")
  const [image, setImage] = useState("https://techcrunch.com/wp-content/uploads/2021/02/alexander-shatov-JlO3-oY5ZlQ-unsplash.jpg")
  // console.log('genres ->', genres, 'playlists ->', playlists, 'selectedPlaylist ->', selectedPlaylist, 'tracklist ->', tracklist, 'song ->', song)
  return (
    <>
      <Col>
        <MainSong
          song={song}
        ></MainSong>
      </Col>
      <Col>
        <MainPlaylist
          selectedPlaylist={selectedPlaylist}
          song={song}
          image={image}
          title={title}
          setTitle={setTitle}
          setImage={setImage}
        ></MainPlaylist>
      </Col>
      <Col>
        <MainSelect
          tracklist={tracklist}
          genres={genres}
          playlists={playlists}
          globalHandler={globalHandler}
        ></MainSelect>
      </Col>
    </>
  )
}

export default Main
