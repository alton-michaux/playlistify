const GenreList = ({ genres }) => {
  return (
    <section>
      <select
        style={{ minWidth: "100%" }}
      >
        <option value="" disabled>Sort by Genre</option>
        {
          genres.map((genre) => {
            return (
              <option>{genre}</option>
            )
          })
        }
      </select>
    </section>
  )
}

export default GenreList
