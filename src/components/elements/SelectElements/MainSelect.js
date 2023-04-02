import TrackList from './Tracklist'
import GenreList from './GenreList'
import PlaylistList from './PlaylistList'

const MainSelect = ({
  tracklist,
  genres,
  genre,
  playlists,
  filterPlaylists,
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
        handlePlaylistFilter={filterPlaylists}
      ></GenreList>
      <PlaylistList
        playlists={playlists}
        handleTracklistFetch={globalHandler}
        genre={genre}
      ></PlaylistList>
    </section>
  )
}

export default MainSelect
