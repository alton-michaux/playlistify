import { Button } from "@blueprintjs/core";

const PlaybackCtrl = () => {
  const importedClassNames = "bp4-minimal, bp4-large"
  const styles = {
    margin: "2%",
    backgroundColor: "#2F343C",
    color: "#D3D8DE"
  }

  return (
    <div
      className="buttonDiv"
    >
      <Button
        icon="fast-backward"
        intent="fast-backward"
        text="Previous"
        className={importedClassNames}
        style={styles}
      />
      <Button
        icon="play"
        intent="play"
        text="Play"
        className={importedClassNames}
        style={styles}
      />
      <Button
        icon="fast-forward"
        intent="fast-forward"
        text="Next"
        className={importedClassNames}
        style={styles}
      />
    </div>
  )
}

export default PlaybackCtrl
