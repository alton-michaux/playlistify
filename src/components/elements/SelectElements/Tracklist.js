import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../../styles/App.css"

const TrackList = ({ tracklist, handleSongInfoFetch }) => {
  const parsedTracks = tracklist.items?.map((item) => item)

  function millisecondsToMinutes(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  return (
    <ListGroup
      as="ol"
      numbered
      style={{ listStyleType: "None" }}
      className="tracklist"
    >
      {
        parsedTracks ?
          parsedTracks.map((item) => {
            console.log('item', item)
            return (
              <ListGroup.Item
                key={item.track.id}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {item.track.name}
                  </div>
                  {item.track.artists.map((artist) => artist.name)}
                </div>
                <Badge bg="primary" pill>
                  {millisecondsToMinutes(item.track.duration_ms)}
                </Badge>
              </ListGroup.Item>
            )
          }) :
          <li>None Selected</li>
      }
    </ListGroup>
  )
}

export default TrackList
