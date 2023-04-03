import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Navbar, Button, Alignment, Switch } from "@blueprintjs/core"
import { Classes, Tooltip2 } from "@blueprintjs/popover2";
import Popover from 'react-bootstrap/Popover';

const Nav = ({ isOpen, popoverHandler }) => {
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
          Toggle switch for tips to get started using Playlistify.
          <Tooltip2
            className={Classes.TOOLTIP2_INDICATOR}
            content={
              <Popover id="popoverTip" style={{marginTop: "20%", marginLeft: "5%"}}>
                <Popover.Header as="h3" style={{color: "black"}}>Getting Started</Popover.Header>
                <Popover.Body style={{backgroundColor: "black", color: "white"}}>
                  <strong>Select a playlist</strong> from the card viewer or <strong>sort playlists by genre</strong> to start exploring new music.
                </Popover.Body>
              </Popover>
            }
            compact={true}
            isOpen={isOpen}
            style={{ marginRight: "2%" }}
          >
          </Tooltip2>
          <Switch
            checked={isOpen}
            onChange={toggleControlledTooltip}
            style={{ display: "inline-block", marginBottom: 0, marginLeft: 20 }}
          />
        </div>
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Heading className="bp4-align-left">Playlistify</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp4-minimal bp4-align-right" icon="home" text="Home" />
          <Button className="bp4-minimal bp4-align-right" icon="log-out" text="Logout" />
        </Navbar.Group>
      </div>
    </Navbar>
  )
}

export default Nav
