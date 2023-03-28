import { Button, Card, Elevation } from "@blueprintjs/core";

const PlaylistList = ({ playlists, handleTracklistFetch }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "32% 32% 32%",
        columnGap: "1%"
      }}
    >
      {
        playlists.map((playlist) => {
          return (
            <Card
              key={playlist.id}
              interactive={true}
              elevation={Elevation.FOUR}
              style={{ width: "100%", padding: "1%" }}
              className="bp4-interactive bp4-dark"
            >
              <img
                src={playlist.images[0].url}
                alt={playlist.description}
                style={{ width: "100%", padding: "0" }}
              />
              <Button
                style={{ width: "100%" }}
              >{playlist.name}</Button>
            </Card>
          )
        })
      }
    </div>
  )
}

export default PlaylistList
