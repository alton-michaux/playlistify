import SongArt from './SongArt'
import SongData from './SongData'

const TrackWindow = ({ song, songImage }) => {
  return (
    <section
      style={{ backgroundImage: "linear-gradient(#1C2127, #D33D17)" }}
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
