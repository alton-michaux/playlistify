import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Navbar, Button, Alignment } from "@blueprintjs/core"

const Nav = () => {
  return (
    <Navbar
      className="bp4-navbar bp4-dark"
      style={{margin: "0 auto", width: "100%", height: "8vh"}}
      fixedToTop 
    >
      <Navbar.Group align={Alignment.RIGHT}>
        <Navbar.Heading className="bp4-align-left">Playlistify</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp4-minimal bp4-align-right" icon="home" text="Home" />
        <Button className="bp4-minimal bp4-align-right" icon="log-out" text="Logout" />
      </Navbar.Group>
    </Navbar>
  )
}

export default Nav
