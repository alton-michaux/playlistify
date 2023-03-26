import Col from 'react-bootstrap/Col';
import MainSong from './SongElements/MainSong'
import MainPlaylist from './PlaylistElements/MainPlaylist'
import MainSelect from './SelectElements/MainSelect'

const Main = () => {
  return (
    <>
      <Col>
        <MainSong></MainSong>
      </Col>
      <Col xs={5}>
        <MainPlaylist></MainPlaylist>
      </Col>
      <Col>
        <MainSelect></MainSelect>
      </Col>
    </>
  )
}

export default Main
