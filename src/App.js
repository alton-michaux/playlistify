import Input from 'components/elements/Input'
import Nav from 'components/elements/Nav'
import Main from 'components/elements/Main'
import TrackWindow from 'components/elements/TrackWindow'
import MainPlaylist from 'components/elements/MainPlaylist'
import Metadata from './components/elements/Metadata'

function App() {
  return (
    <div className='container'>
      <Input></Input>
      <Nav></Nav>
      <Main>
        <TrackWindow></TrackWindow>
        <MainPlaylist></MainPlaylist>
        <Metadata></Metadata>
      </Main>
    </div>
  );
}

export default App;
