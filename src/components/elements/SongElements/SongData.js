import PropTypes from 'prop-types';
import utils from "../../../utils/utils"

const SongData = ({ song }) => {
  return (
    Object.keys(song).length > 0 ?
      <div>
        <h4>{utils.truncate(song.name)}</h4>
        <h6>{utils.truncate(utils.multiObjectNameString(song.artists))}</h6>
        <h5>{utils.truncate(song.album.name)}</h5>
      </div> :
      <p>Song data will appear here once a song is selected from tracklist</p>
  )
}

SongData.propTypes = {
  song: PropTypes.object
}

export default SongData
