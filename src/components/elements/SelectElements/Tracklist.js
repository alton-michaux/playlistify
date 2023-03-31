import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import utils from "../../../utils/utils.js"
import "../../../styles/App.css"

const TrackList = ({ tracklist, handleSongInfoFetch }) => {
  const parsedTracks = tracklist.items?.map((item) => item)

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
            // console.log('item', item)
            return (
              <ListGroup.Item
                key={item.track.id}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto ml-o">
                  <div className="fw-bold">
                    {item.track.name}
                  </div>
                {item.track.artists.map((artist) => artist.name).join(', ')}
                </div>
                <Badge bg="danger" pill>
                  {utils.msConverter(item.track.duration_ms)}
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
