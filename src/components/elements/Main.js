import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import MainSong from './SongElements/MainSong'
import MainPlaylist from './PlaylistElements/MainPlaylist'
import MainSelect from './SelectElements/MainSelect'

const Main = ({
  genres,
  genre,
  playlists,
  filterPlaylists,
  globalHandler,
  selectedPlaylist,
  tracklist,
  title,
  image,
  song,
  songImage,
  token,
  uri,
  user
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
          token={token}
          uri={uri}
          user={user}
        ></MainPlaylist>
      </Col>
      <Col>
        <MainSelect
          tracklist={tracklist}
          genres={genres}
          playlists={playlists}
          filterPlaylists={filterPlaylists}
          globalHandler={globalHandler}
          genre={genre}
        ></MainSelect>
      </Col>
    </>
  )
}

Main.propTypes = {
  genres: PropTypes.array,
  genre: PropTypes.string,
  playlists: PropTypes.array,
  filterPlaylists: PropTypes.func,
  globalHandler: PropTypes.func,
  selectedPlaylist: PropTypes.object,
  tracklist: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  title: PropTypes.string,
  image: PropTypes.string,
  song: PropTypes.object,
  songImage: PropTypes.string,
  token: PropTypes.string,
  uri: PropTypes.string,
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
}

export default Main
