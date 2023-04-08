import PropTypes from 'prop-types';
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

MainSelect.propTypes = {
  tracklist: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  genres: PropTypes.array,
  genre: PropTypes.string,
  playlists: PropTypes.array,
  filterPlaylists: PropTypes.func,
  globalHandler: PropTypes.func
}

export default MainSelect
