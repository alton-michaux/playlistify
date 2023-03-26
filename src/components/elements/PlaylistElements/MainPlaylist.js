import PlaylistTitle from './PlaylistTitle'
import PlaylistArt from './PlaylistArt'
import PlaybackCtrls from './PlaybackCtrls'

const MainPlaylist = () => {
  return (
    <section>
      <PlaylistTitle></PlaylistTitle>
      <PlaylistArt></PlaylistArt>
      <PlaybackCtrls></PlaybackCtrls>
    </section>
  )
}

export default MainPlaylist
