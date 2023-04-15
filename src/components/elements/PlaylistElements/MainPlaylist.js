import PropTypes from 'prop-types';
import PlaylistTitle from './PlaylistTitle'
import PlaylistArt from './PlaylistArt'
import SpotifyPlayer from '../SpotifyPlayer';

const MainPlaylist = ({ title, image, token, uri, user }) => {
  console.log('uri', uri)
  return (
    <section
      className="mainSections"
    >
      <PlaylistTitle
        title={title}
      ></PlaylistTitle>
      <PlaylistArt
        image={image}
      ></PlaylistArt>
      { Object.keys(user).length !== 0 ? 
      <SpotifyPlayer
        token={token}
        uri={uri}
      ></SpotifyPlayer> :
      <></>
      }
    </section>
  )
}

MainPlaylist.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  token: PropTypes.string,
  uri: PropTypes.string,
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
}

export default MainPlaylist
