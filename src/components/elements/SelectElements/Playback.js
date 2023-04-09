import CtrlButtons from "../Button"
import { ButtonGroup } from "@blueprintjs/core"
import "../../../styles/App.css"

const Playback = () => {
  return (
    <ButtonGroup 
    className="buttonDiv"
    minimal={true}
    >
      <CtrlButtons
        icon="fast-backward"
        intent="None"
      ></CtrlButtons>
      <CtrlButtons
        icon="play"
        intent="None"
      ></CtrlButtons>
      <CtrlButtons
        icon="fast-forward"
        intent="None"
      ></CtrlButtons>
    </ButtonGroup>
  )
}

export default Playback
