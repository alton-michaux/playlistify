import TrackList from './Tracklist'
import GenreList from './GenreList'
import PlaylistList from './PlaylistList'

const MainSelect = () => {
  return (
    <section
      style={{ backgroundImage: "linear-gradient(#738091, #147EB3)" }}
    >
      <TrackList></TrackList>
      <div>
        <GenreList></GenreList>
        <PlaylistList></PlaylistList>
      </div>
    </section>
  )
}

export default MainSelect
