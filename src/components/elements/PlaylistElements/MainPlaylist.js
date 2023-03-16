import PlaylistTitle from './PlaylistTitle'
import PlaylistArt from './PlaylistArt'
import PlaybackCtrls from './PlaybackCtrls'
import globalStyles from '../../../assets/modules/App.module.css'
import styles from '../../../assets/modules/componentModules/MainPlaylist.module.css'

const MainPlaylist = () => {
  return (
    <div>
      <PlaylistTitle></PlaylistTitle>
      <PlaylistArt></PlaylistArt>
      <PlaybackCtrls></PlaybackCtrls>
    </div>
  )
}

export default MainPlaylist
