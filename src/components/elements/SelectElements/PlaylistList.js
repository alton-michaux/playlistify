import Carousel from 'react-bootstrap/Carousel';
import "../../../styles/App.css"

const PlaylistList = ({ playlists, handleTracklistFetch }) => {
  return (
    <Carousel
      onSelect={handleTracklistFetch}
    >
      {
        playlists.map((playlist) => {
          return (
            <Carousel.Item>
              <img
                fluid
                thumbnail={true}
                src={playlist.images[0].url}
                alt={playlist.description}
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>{playlist.name}</h3>
                <p>{playlist.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  )
}

export default PlaylistList
