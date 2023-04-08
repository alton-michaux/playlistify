import PropTypes from 'prop-types';
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

MainPlaylist.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
}

export default MainPlaylist
