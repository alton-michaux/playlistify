import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import MainSong from './SongElements/MainSong'
import MainPlaylist from './PlaylistElements/MainPlaylist'
import MainSelect from './SelectElements/MainSelect'
import getToken from '../../api/auth/tokens/getToken.js'

const Main = () => {
  useEffect(() => {
    getToken()
  }, [])

  return (
    <>
      <Col>
        <MainSong></MainSong>
      </Col>
      <Col>
        <MainPlaylist></MainPlaylist>
      </Col>
      <Col>
        <MainSelect></MainSelect>
      </Col>
    </>
  )
}

export default Main
