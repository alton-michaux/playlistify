import Carousel from 'react-bootstrap/Carousel';
import styles from "../../../styles/App.css"

const PlaylistList = ({ playlists, handleTracklistFetch }) => {
  return (
    <Carousel
      onSelect={handleTracklistFetch}
      className={styles.carousel}
    >
      {
        playlists.map((playlist) => {
          return (
            <Carousel.Item>
              <img
                fluid
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
