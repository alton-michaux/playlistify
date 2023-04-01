import utils from "../../../utils/utils"

const SongData = ({ song }) => {
  return (
    Object.keys(song).length > 0 ?
      <div>
        <h4>{utils.truncate(song.name)}</h4>
        <h6>{utils.truncate(utils.multiObjectNameString(song.artists))}</h6>
        <h5>{utils.truncate(song.album.name)}</h5>
      </div> :
      <p>Select a Song from the Tracklist</p>
  )
}

export default SongData
