import PlaylistTitle from './PlaylistTitle'
import PlaylistArt from './PlaylistArt'

const MainPlaylist = ({ title, image }) => {
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
    </section>
  )
}

export default MainPlaylist
