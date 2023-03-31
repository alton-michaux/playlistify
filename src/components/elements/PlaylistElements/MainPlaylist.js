import PlaylistTitle from './PlaylistTitle'
import PlaylistArt from './PlaylistArt'

const MainPlaylist = ({ title, image }) => {
  return (
    <section
      style={{ backgroundImage: "linear-gradient(#1C2127, #D33D17)" }}
    >
      <PlaylistTitle
        title={title}
      ></PlaylistTitle>
      <PlaylistArt
        image={image}
      ></PlaylistArt>
    </section>
  )
}

export default MainPlaylist
