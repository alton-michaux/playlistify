const GenreList = ({ genres, handlePlaylistFetch }) => {
 const handleGenreSelect = (selected) => {
  handlePlaylistFetch("playlist", selected)
 }
  return (
    <section>
      <select
        style={{ minWidth: "100%" }}
        value="Sort by Genre"
        onChange={(event) => handleGenreSelect(event.target.value)}
      >
        {
          genres.map((genre) => {
            return (
              <option key={genres.indexOf(genre, 0)}>{genre}</option>
            )
          })
        }
      </select>
    </section>
  )
}

export default GenreList
