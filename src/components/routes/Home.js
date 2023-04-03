import React from 'react';
import Row from 'react-bootstrap/Row';
import Input from '../elements/Input'
import Nav from '../elements/Nav'
import Main from '../elements/Main'
import Footer from '../elements/Footer'
import "../../styles/App.css"

const Home = ({
  token,
  tokenRef,
  genres,
  genre,
  playlists,
  playlist,
  tracklist,
  song,
  title,
  image,
  songImage,
  fetchHandler,
  filterPlaylists,
  isOpen,
  popoverHandler
}) => {
  return (
    <>
      <main>
        <Row>
          <Input
            type="hidden"
            value={token}
            inputRef={tokenRef}
            popoverHandler={popoverHandler}
          ></Input>
          <Nav
            isOpen={isOpen}
            popoverHandler={popoverHandler}
          ></Nav>
        </Row>
        <Row
          className="mainRow"
        >
          <Main
            genres={genres}
            genre={genre}
            playlists={playlists}
            globalHandler={fetchHandler}
            filterPlaylists={filterPlaylists}
            selectedPlaylist={playlist}
            tracklist={tracklist}
            song={song}
            title={title}
            image={image}
            songImage={songImage}
          ></Main>
        </Row>
      </main>
      <Row>
        <Footer></Footer>
      </Row>
    </>
  );
}

export default Home;
