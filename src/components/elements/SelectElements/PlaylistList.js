const PlaylistList = ({ playlists, handleTracklistFetch }) => {
  return (
    <section>
      <ul>
        {
          playlists.map((playlist) => {
            return (
              <li key={playlist.id}>
                <button>
                  <img src={playlist.images[0].url} alt={playlist.description} />
                  <div>${playlist.name}</div>
                </button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default PlaylistList
