import CtrlButtons from "../Button"
import PropTypes from 'prop-types';
import { ButtonGroup } from "@blueprintjs/core"
import "../../../styles/App.css"

const Playback = ({handleTrack}) => {
  function handleAction(type){
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
        text="backwards"
        handler={handleAction}
      ></CtrlButtons>
      <CtrlButtons
        icon="play"
        intent="None"
        text="play"
        handler={handleAction}
      ></CtrlButtons>
      <CtrlButtons
        icon="fast-forward"
        intent="None"
        text="forward"
        handler={handleAction}
      ></CtrlButtons>
    </ButtonGroup>
  )
}

Playback.propTypes = {
  handleTrack: PropTypes.func
}

export default Playback
