import Input from ',/components/elements/Input'
import Nav from './components/elements/Nav'
import Main from './components/elements/Main'
import MainSong from './components/elements/SongElements/MainSong'
import MainPlaylist from './components/elements/PlaylistElements/MainPlaylist'
import Metadata from './components/elements/SelectElements/Metadata'
import Footer from './components/elements/Footer'

function App() {
  return (
    <div className='container'>
      <Input></Input>
      <Nav></Nav>
      <Main>
        <MainSong></MainSong>
        <MainPlaylist></MainPlaylist>
        <Metadata></Metadata>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
