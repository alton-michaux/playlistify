import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Navbar, Button, AnchorButton, Alignment } from "@blueprintjs/core"
import PopoverComponent from "./utitlityComponents/popover";
import PropTypes from 'prop-types';
import API from "../../utils/API";
import utils from "../../utils/utils";

const Nav = ({ isOpen, popoverHandler, user, handleLogin, handleUser, redirect, handleError }) => {
  if (window.location.href.includes('callback')) {
    async function getUser() {
      const tokenObj = await utils.URLToken()
      const state = tokenObj.state
      const code = tokenObj.authCode

      await API.user(state, code).then((user) => {
        console.log("🚀 ~ file: Nav.js:17 ~ Nav ~ user:", user)
        handleUser(user)
      }).catch((error) => {
        handleError(error)
      })
    }

    getUser()
  }

  const toggleControlledTooltip = () => {
    popoverHandler(!isOpen)
  }

  const handleClick = (type) => {
    handleLogin(type, "user")
  }

  return (
    <Navbar
      className="bp4-navbar bp4-dark"
      style={{ margin: "0 auto", width: "100%", height: "8vh" }}
      fixedToTop
    >
      <div
        className="toggleSwitch"
        style={{ marginTop: ".5%" }}
      >
        <div
          className="innerToggleSwitch"
        >
          <PopoverComponent
            checked={isOpen}
            onChange={toggleControlledTooltip}
          ></PopoverComponent>
        </div>
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Heading className="bp4-align-left">Playlistify</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp4-minimal bp4-align-right" icon="home" text="Home" />
          <AnchorButton
            href={redirect}
            className="bp4-minimal bp4-align-right"
            icon={user.display_name ? "log-out" : "log-in"}
            text={user.display_name ? "Log-Out" : "Log-In"}
            onClick={user.display_name ? () => handleClick('log-out') : () => handleClick('log-in')}
          />
        </Navbar.Group>
      </div>
    </Navbar>
  )
}

Nav.propTypes = {
  handleError: PropTypes.func,
  isOpen: PropTypes.bool,
  popoverHandler: PropTypes.func,
  handleUser: PropTypes.func,
  user: PropTypes.object,
  handleLogin: PropTypes.func,
  redirect: PropTypes.string,
}

export default Nav
