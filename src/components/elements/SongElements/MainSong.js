import SongArt from './SongArt'
import SongData from './SongData'
import globalStyles from '../../../assets/modules/App.module.css'
import styles from '../../../assets/modules/componentModules/MainSong.module.css'

const TrackWindow = () => {
  return (
    <div>
      <SongArt></SongArt>
      <SongData></SongData>
    </div>
  )
}

export default TrackWindow
