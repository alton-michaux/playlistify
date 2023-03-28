import TrackList from './Tracklist'
import GenreList from './GenreList'
import PlaylistList from './PlaylistList'

const MainSelect = ({
  tracklist,
  genres,
  playlists,
  handlePlaylistFetch,
  handleTracklistFetch,
  handleSongInfoFetch
}) => {
  return (
    <section
      style={{ backgroundImage: "linear-gradient(#1C2127, #D33D17)" }}
    >
      <TrackList
        tracklist={tracklist}
        handleTracklistFetch={handleTracklistFetch}
        handleSongInfoFetch={handleSongInfoFetch}
      ></TrackList>
      <div>
        <GenreList
          genres={genres}
        ></GenreList>
        <PlaylistList
          playlists={playlists}
          handlePlaylistFetch={handlePlaylistFetch}
        ></PlaylistList>
      </div>
    </section>
  )
}

export default MainSelect
