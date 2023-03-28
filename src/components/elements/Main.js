import Col from 'react-bootstrap/Col';
import MainSong from './SongElements/MainSong'
import MainPlaylist from './PlaylistElements/MainPlaylist'
import MainSelect from './SelectElements/MainSelect'

const Main = ({
  genres,
  playlists,
  handlePlaylistFetch,
  handleTracklistFetch,
  handleSongInfoFetch,
  selectedPlaylist,
  tracklist,
  song
}) => {
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
        ></MainPlaylist>
      </Col>
      <Col>
        <MainSelect
          tracklist={tracklist}
          genres={genres}
          playlists={playlists}
          handlePlaylistFetch={handlePlaylistFetch}
          handleTracklistFetch={handleTracklistFetch}
          handleSongInfoFetch={handleSongInfoFetch}
        ></MainSelect>
      </Col>
    </>
  )
}

export default Main
