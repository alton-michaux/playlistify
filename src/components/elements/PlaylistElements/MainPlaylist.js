import PropTypes from 'prop-types';
import PlaylistTitle from './PlaylistTitle'
import PlaylistArt from './PlaylistArt'
import SpotifyPlayer from '../SpotifyPlayer';

const MainPlaylist = ({ title, image, token, uris }) => {
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
      <SpotifyPlayer
        token={token}
        uris={uris}
      ></SpotifyPlayer>
    </section>
  )
}

MainPlaylist.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  token: PropTypes.string,
  uris: PropTypes.string
}

export default MainPlaylist
