import PlaylistTitle from './PlaylistTitle'
import PlaylistArt from './PlaylistArt'
import PlaybackCtrls from './PlaybackCtrls'

const MainPlaylist = ({selectedPlaylist, song}) => {
  console.log('playlist', selectedPlaylist, 'song', song)
  return (
    <section
      style={{ backgroundImage: "linear-gradient(#1C2127, #D33D17)" }}
    >
      <PlaylistTitle></PlaylistTitle>
      <PlaylistArt></PlaylistArt>
      <PlaybackCtrls></PlaybackCtrls>
    </section>
  )
}

export default MainPlaylist
