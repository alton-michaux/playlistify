import "../../../styles/App.css"

const TrackList = ({ tracklist, handleSongInfoFetch }) => {
  const parsedTracks = tracklist.items?.map((item) => item)
  console.log('parsed', parsedTracks)
  return (
    <ul
      style={{ listStyleType: "None" }}
      className="tracklist"
    >
      {
        parsedTracks ?
          parsedTracks.map((item) => {
            console.log('track', item)
            return (
              <li
                key={item.track.id}
              >
                {item.track.name}
              </li>
            )
          }) :
          <li>None Selected</li>
      }
    </ul>
  )
}

export default TrackList
