import CtrlButtons from "../Button"
import PropTypes from 'prop-types';
import { ButtonGroup } from "@blueprintjs/core"
import "../../../styles/App.css"

const Playback = ({handleTrack}) => {
  const handleAction = (type) => {
    console.log('type', type)
    handleTrack(type)
  }
  return (
    <ButtonGroup
      className="buttonDiv"
      minimal={true}
    >
      <CtrlButtons
        icon="fast-backward"
        intent="None"
        onClick={() => handleAction("backwards")}
      ></CtrlButtons>
      <CtrlButtons
        icon="play"
        intent="None"
        onClick={() => handleAction("play")}
      ></CtrlButtons>
      <CtrlButtons
        icon="fast-forward"
        intent="None"
        onClick={() => handleAction("forward")}
      ></CtrlButtons>
    </ButtonGroup>
  )
}

Playback.propTypes = {
  handleTrack: PropTypes.func
}

export default Playback
