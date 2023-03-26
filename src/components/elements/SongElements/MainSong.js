import SongArt from './SongArt'
import SongData from './SongData'

const TrackWindow = () => {
  return (
    <section
      style={{ backgroundImage: "linear-gradient(#1C2127, #D33D17)" }}
    >
      <SongArt></SongArt>
      <SongData></SongData>
    </section>
  )
}

export default TrackWindow
