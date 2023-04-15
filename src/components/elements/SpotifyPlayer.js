import PropTypes from 'prop-types';
import SpotifyPlayer from 'react-spotify-web-playback';

function Player({ token, uri }) {
  return (
    <>
      <SpotifyPlayer
        styles={{
          activeColor: '#fff',
          bgColor: '#333',
          color: '#fff',
          loaderColor: '#fff',
          sliderColor: '#1cb954',
          trackArtistColor: '#ccc',
          trackNameColor: '#fff',
        }}
        token={token}
        uri={[uri]}
      />
    </>
  )
}

SpotifyPlayer.propTypes = {
  token: PropTypes.string,
  uri: PropTypes.string
}

export default Player
