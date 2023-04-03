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

export default TrackWindow
