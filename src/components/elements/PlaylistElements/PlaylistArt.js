import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'
import "../../../styles/App.css"

const PlaylistArt = ({ image }) => {
  return (
    <div
      className="playlistImageDiv"
      style={{
        maxHeight: "75%",
        margin: "0 auto"
      }}
    >
      <Image
        src={image}
        alt="playlist image"
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
