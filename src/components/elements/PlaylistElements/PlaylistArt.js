import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'
import "../../../styles/App.css"

const PlaylistArt = ({ image }) => {
  return (
    <div
      className="playlistImageDiv"
    >
      <Image
        src={image}
        style={{
          maxHeight: "400px"
        }}
        fluid
      >
      </Image>
    </div>
  )
}

PlaylistArt.propTypes = {
  image: PropTypes.string
}

export default PlaylistArt
