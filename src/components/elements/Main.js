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
  title,
  image,
  song,
  songImage
}) => {
  return (
    <>
      <Col>
        <MainSong
          song={song}
          songImage={songImage}
        ></MainSong>
      </Col>
      <Col>
        <MainPlaylist
          selectedPlaylist={selectedPlaylist}
          song={song}
          image={image}
          title={title}
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
