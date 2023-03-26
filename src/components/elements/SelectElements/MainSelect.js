import TrackList from './Tracklist'
import GenreList from './GenreList'
import PlaylistList from './PlaylistList'

const MainSelect = () => {
  return (
    <section>
      <TrackList></TrackList>
      <div>
        <GenreList></GenreList>
        <PlaylistList></PlaylistList>
      </div>
    </section>
  )
}

export default MainSelect
