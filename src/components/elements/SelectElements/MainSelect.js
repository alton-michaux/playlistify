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
      className="mainSections"
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
