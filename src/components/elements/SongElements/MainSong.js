import PropTypes from 'prop-types';
import SongArt from './SongArt'
import SongData from './SongData'

const TrackWindow = ({ song, songImage }) => {
  return (
    <section
      className="mainSections"
    >
      <SongArt
        songImage={songImage}
      ></SongArt>
      <SongData
        song={song}
      ></SongData>
    </section>
  )
}

TrackWindow.propTypes = {
  song: PropTypes.object,
  songImage: PropTypes.string
}

export default TrackWindow
