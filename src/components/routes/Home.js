import React from 'react';
import Row from 'react-bootstrap/Row';
import Nav from '../elements/Nav'
import Main from '../elements/Main'
import Footer from '../elements/Footer'
import BasicSpinner from '../elements/utitlityComponents/loadSpinner';
import ErrorCallout from '../elements/utitlityComponents/errorCallout';
// import Login from '../elements/Login';
import "../../styles/App.css"

const Home = ({
  loading,
  error,
  handleUser,
  user,
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
  token,
  isOpen,
  popoverHandler
}) => {
  return (
    <>
      <main>
        <Row>
          <Nav
            isOpen={isOpen}
            popoverHandler={popoverHandler}
            handleUser={handleUser}
            user={user}
          ></Nav>
        </Row>
        <Row
          className="mainRow"
        >
          <BasicSpinner
            isLoading={loading}
          >Loading...
          </BasicSpinner>
          <ErrorCallout
            isError={error}
          >There was an error...
          </ErrorCallout>
          {/* <Login
            show={show}
            handleUser={handleUser}
            user={user}
          ></Login> */}
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
