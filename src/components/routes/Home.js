import Input from '../elements/Input'
import Nav from '../elements/Nav'
import Main from '../elements/Main'
import MainSong from '../elements/SongElements/MainSong'
import MainPlaylist from '../elements/PlaylistElements/MainPlaylist'
import Metadata from '../elements/SelectElements/Metadata'
import Footer from '../elements/Footer'

const Home = () => {
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

export default Home;
