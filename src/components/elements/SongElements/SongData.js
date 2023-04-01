import { Card, Elevation } from "@blueprintjs/core";

const SongData = ({ song }) => {
  const styles = {
    maxHeight: "100px",
    color: "black"
  }
  return (
    Object.keys(song).length > 0 ?
      <Card
        elevation={Elevation.FIVE}
        style={styles}
      >
        <div>
          <p>{song.name}</p>
          <p>{song.artists[0]?.name}</p>
          <p>{song.album.name}</p>
        </div>
      </Card> :
      <></>
  )
}

export default SongData
