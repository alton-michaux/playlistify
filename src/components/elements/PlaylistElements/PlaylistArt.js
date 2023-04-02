import Image from 'react-bootstrap/Image'
import "../../../styles/App.css"

const PlaylistArt = ({ image }) => {
  return (
    <div
      className="playlistImageDiv"
    >
      <Image
        src={image}
        style={{maxHeight: "400px"}}
        fluid
      >
      </Image>
    </div>
  )
}

export default PlaylistArt
