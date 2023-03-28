import Dropdown from 'react-bootstrap/Dropdown';

const GenreList = ({ genres, handlePlaylistFetch }) => {
  const handleGenreSelect = (selected) => {
    handlePlaylistFetch("playlist", selected)
  }
  return (
    <section>
      <Dropdown>
        <Dropdown.Toggle
          id="genre-select-button"
          variant="secondary"
        >
          Sort by Genre
        </Dropdown.Toggle>

        <Dropdown.Menu
          variant="dark"
          onChange={(event) => handleGenreSelect(event.target.value)}
        >
          {
            genres.map((genre) => {
              return (
                <Dropdown.Item key={genres.indexOf(genre, 0)}>{genre}</Dropdown.Item>
              )
            })
          }
        </Dropdown.Menu>
      </Dropdown>
    </section>
  )
}

export default GenreList
