import PropTypes from 'prop-types';
import SpotifyPlayer from 'react-spotify-web-playback';

function Player({ token, uris }) {
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
        uris={[uris]}
      />
    </>
  )
}

SpotifyPlayer.propTypes = {
  token: PropTypes.string,
  uris: PropTypes.string
}

export default Player
