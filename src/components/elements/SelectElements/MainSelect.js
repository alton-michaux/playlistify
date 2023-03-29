import TrackList from './Tracklist'
import GenreList from './GenreList'
import PlaylistList from './PlaylistList'

const MainSelect = ({
  tracklist,
  genres,
  playlists,
  globalHandler
}) => {
  return (
    <section
      style={{ backgroundImage: "linear-gradient(#1C2127, #D33D17)" }}
    >
      <TrackList
        tracklist={tracklist}
        handleSongInfoFetch={globalHandler}
      ></TrackList>
      <GenreList
        genres={genres}
        handlePlaylistFetch={globalHandler}
      ></GenreList>
      <PlaylistList
        playlists={playlists}
        handleTracklistFetch={globalHandler}
      ></PlaylistList>
    </section>
  )
}

export default MainSelect
