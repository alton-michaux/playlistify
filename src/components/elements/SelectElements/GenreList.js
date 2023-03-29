import Form from 'react-bootstrap/Form';

const GenreList = ({ genres, handlePlaylistFetch }) => {
  const handleGenreSelect = (selected) => {
    console.log('selected', selected)
    handlePlaylistFetch("playlist", selected)
  }
  return (
    <section>
      <Form.Select
        aria-label="genre-select"
        onChange={(event) => handleGenreSelect(event.target.value)}
        variant="dark"
      >
        <option>Sort by Genre</option>
        {
          genres.map((genre) => {
            return (
              <option value={genre} key={genres.indexOf(genre, 0)}>{genre}</option>
            )
          })
        }
      </Form.Select>
    </section>
  )
}

export default GenreList
