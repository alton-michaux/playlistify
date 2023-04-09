import PropTypes from 'prop-types';
import { Button, Icon, Divider } from "@blueprintjs/core";

const CtrlButtons = ({ icon, intent }) => {
  return (
    <>
      <Button
        intent={intent}
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
  text: PropTypes.string
}

export default CtrlButtons
