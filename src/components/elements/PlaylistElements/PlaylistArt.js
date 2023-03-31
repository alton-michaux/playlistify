import Image from 'react-bootstrap/Image'
import "../../../styles/App.css"

const PlaylistArt = ({ image }) => {
  return (
    <div
      className="playlistImageDiv"
    >
      <Image
        src={image}
        style={{height: "300px"}}
        fluid
      >
      </Image>
    </div>
  )
}

export default PlaylistArt
