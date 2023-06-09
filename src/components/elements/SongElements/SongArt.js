import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'

const SongArt = ({ songImage }) => {
  return (
    <section>
      <Image
        src={songImage}
        alt="song image"
        fluid
      >
      </Image>
    </section>
  )
}

SongArt.propTypes = {
  songImage: PropTypes.string
}

export default SongArt
