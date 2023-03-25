import TrackList from './Tracklist'
import GenreList from './GenreList'
import PlaylistList from './PlaylistList'

const MainSelect = () => {
  return (
    <>
      <TrackList></TrackList>
      <section>
        <GenreList></GenreList>
        <PlaylistList></PlaylistList>
      </section>
    </>
  )
}

export default MainSelect
