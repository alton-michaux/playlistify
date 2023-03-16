import TrackList from './Tracklist'
import GenreList from './GenreList'
import PlaylistList from './PlaylistList'
import globalStyles from '../../../assets/modules/App.module.css'
import styles from '../../../assets/modules/componentModules/MainSelect.module.css'

const MainSelect = () => {
  return (
    <div>
      <TrackList></TrackList>
      <GenreList></GenreList>
      <PlaylistList></PlaylistList>
    </div>
  )
}

export default MainSelect
