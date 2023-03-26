import Col from 'react-bootstrap/Col';
import MainSong from './SongElements/MainSong'
import MainPlaylist from './PlaylistElements/MainPlaylist'
import MainSelect from './SelectElements/MainSelect'

const Main = () => {
  return (
    <>
      <Col className='m-5'>
        <MainSong></MainSong>
      </Col>
      <Col className='m-5'>
        <MainPlaylist></MainPlaylist>
      </Col>
      <Col className='m-5'>
        <MainSelect></MainSelect>
      </Col>
    </>
  )
}

export default Main
