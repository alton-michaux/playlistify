import TrackList from './Tracklist'
import GenreList from './GenreList'
import PlaylistList from './PlaylistList'
import globalStyles from '../../../assets/modules/App.module.css'
import styles from '../../../assets/modules/componentModules/MainSelect.module.css'

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
