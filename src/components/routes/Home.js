import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Nav from '../elements/Nav'
import Main from '../elements/Main'
import Footer from '../elements/Footer'
import BasicSpinner from '../elements/utitlityComponents/loadSpinner';
import ErrorCallout from '../elements/utitlityComponents/errorCallout';
import "../../styles/App.css"

const Home = ({
  loading,
  error,
  isError,
  redirect,
  handleError,
  handleLogin,
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
            redirect={redirect}
            handleError={handleError}
            handleUser={handleUser}
            handleLogin={handleLogin}
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
            isError={isError}
            error={error}
          />
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

Home.propTypes = {
  loading: PropTypes.bool,
  isError: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  handleError: PropTypes.func,
  handleLogin: PropTypes.func,
  handleUser: PropTypes.func,
  user: PropTypes.object,
  genres: PropTypes.array,
  genre: PropTypes.string,
  playlists: PropTypes.array,
  playlist: PropTypes.object,
  tracklist: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  redirect: PropTypes.string,
  song: PropTypes.object,
  title: PropTypes.string,
  image: PropTypes.string,
  songImage: PropTypes.string,
  fetchHandler: PropTypes.func,
  filterPlaylists: PropTypes.func,
  isOpen: PropTypes.bool,
  popoverHandler: PropTypes.func
}

export default Home;
