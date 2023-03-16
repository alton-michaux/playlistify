import MainSong from './SongElements/MainSong'
import MainPlaylist from './PlaylistElements/MainPlaylist'
import MainSelect from './SelectElements/MainSelect'
import globalStyles from '../../assets/modules/App.module.css'
import styles from '../../assets/modules/componentModules/Main.module.css'

const Main = () => {
  return (
    <main className={globalStyles.mainDiv}>
      <MainSong></MainSong>
      <MainPlaylist></MainPlaylist>
      <MainSelect></MainSelect>
    </main>
  )
}

export default Main
