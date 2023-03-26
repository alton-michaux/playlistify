import PlaylistTitle from './PlaylistTitle'
import PlaylistArt from './PlaylistArt'
import PlaybackCtrls from './PlaybackCtrls'

const MainPlaylist = () => {
  return (
    <section
      style={{ backgroundImage: "linear-gradient(#738091, #147EB3)" }}
    >
      <PlaylistTitle></PlaylistTitle>
      <PlaylistArt></PlaylistArt>
      <PlaybackCtrls></PlaybackCtrls>
    </section>
  )
}

export default MainPlaylist
