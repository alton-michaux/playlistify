
import { Switch } from "@blueprintjs/core"
import { Classes, Tooltip2 } from "@blueprintjs/popover2";
import Popover from 'react-bootstrap/Popover';

const PopoverComponent = ({checked, onChange}) => {
  const popover = (
    <Popover id="popoverTip" style={{ marginTop: "20%", marginLeft: "5%", minWidth: "100%" }}>
      <Popover.Header as="h3" style={{ color: "black" }}>Getting Started</Popover.Header>
      <Popover.Body style={{ backgroundColor: "black", color: "white" }}>
        <strong>Select a playlist</strong> from the card viewer or <strong>sort playlists by genre</strong> to start exploring new music.
      </Popover.Body>
    </Popover>
  )
  return (
    <>
      Toggle switch for tips to get started using Playlistify.
      < Tooltip2
        className={Classes.TOOLTIP2_INDICATOR}
        content={popover}
        compact={true}
        isOpen={checked}
        style={{ marginRight: "2%" }
        }
      >
      </Tooltip2 >
      <Switch
        checked={checked}
        onChange={onChange}
        style={{ display: "inline-block", marginBottom: 0, marginLeft: 20 }}
      />
    </>
  )
}

export default PopoverComponent
