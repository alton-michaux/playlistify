import PlaylistTitle from './PlaylistTitle'
import PlaylistArt from './PlaylistArt'
import PlaybackCtrls from './PlaybackCtrls'

const MainPlaylist = ({ selectedPlaylist, title, setTitle, image, setImage }) => {

  const positiveLength = Object.keys(selectedPlaylist).length > 0

  if (positiveLength) {
    setTitle(selectedPlaylist.name)
    setImage(selectedPlaylist.images[0].url)
  }

  return (
    <section
      style={{ backgroundImage: "linear-gradient(#1C2127, #D33D17)" }}
    >
      <PlaylistTitle
        title={title}
      ></PlaylistTitle>
      <PlaylistArt
        image={image}
      ></PlaylistArt>
      <PlaybackCtrls
        playlist={selectedPlaylist}
      ></PlaybackCtrls>
    </section>
  )
}

export default MainPlaylist
