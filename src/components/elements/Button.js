import PropTypes from 'prop-types';
import { Button, Icon, Divider } from "@blueprintjs/core";

const CtrlButtons = ({ icon, intent, text, handler }) => {
  return (
    <>
      <Button
        intent={intent}
        onClick={() => handler(text)}
      >
        <Icon
          icon={icon}
          size={50}
        ></Icon>
      </Button>
      <Divider/>
    </>
  )
}

Button.propTypes = {
  icon: PropTypes.string,
  intent: PropTypes.string,
  text: PropTypes.string,
  handler: PropTypes.func
}

export default CtrlButtons
