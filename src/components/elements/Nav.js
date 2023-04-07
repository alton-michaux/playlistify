import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Navbar, Button, Alignment } from "@blueprintjs/core"
import PopoverComponent from "./utitlityComponents/popover";
import API from "../../utils/spotifyAPI";

const Nav = ({ token, isOpen, popoverHandler, user }) => {
  const toggleControlledTooltip = () => {
    popoverHandler(!isOpen)
  }
  return (
    <Navbar
      className="bp4-navbar bp4-dark"
      style={{ margin: "0 auto", width: "100%", height: "8vh" }}
      fixedToTop
    >
      <div className="toggleSwitch">
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
          <Button
            className="bp4-minimal bp4-align-right"
            icon={user ? "log-out" : "log-in"}
            text={user ? "Log-Out" : "Log-In"}
            onClick={() => API.login(token)}
          />
        </Navbar.Group>
      </div>
    </Navbar>
  )
}

export default Nav
