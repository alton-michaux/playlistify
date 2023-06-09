import React, { useState, useRef } from 'react';
import Input from '../Input';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import utils from '../../../utils/utils';
import "../../../styles/App.css"

const PlaylistList = ({ playlists, handleTracklistFetch, genre }) => {
  const itemRef = useRef(null)

  const [index, setIndex] = useState(0);

  const handleIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleFetch = () => {
    const id = utils.locateID(index, itemRef)

    handleTracklistFetch('playlist', id)
    handleTracklistFetch('genre', id)
  }
  return (
    Object.keys(playlists).length > 0 ?
      <Carousel
        activeIndex={index}
        onSelect={handleIndex}
        onSlid={handleFetch}
        className="playlist-carousel"
        ref={itemRef}
        fade
      >
        {
          playlists.map((playlist) => {
            return (
              <Carousel.Item
                key={playlist.id}
                interval={50000}
                style={{ alignContent: "center", maxHeight: "250px" }}
              >
                <img
                  src={utils.changeImages(genre)}
                  alt={playlist.description}
                  className="d-block w-100"
                  style={{ marginTop: "2%", maxHeight: "250px" }}
                />
                <Input
                  type="hidden"
                  value={playlist.id}
                ></Input>
                <Carousel.Caption
                  style={{ margin: "0 auto", justifyContent: "center" }}
                >
                  <h3>{playlist.name}</h3>
                  <p>{playlist.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
      </Carousel> :
      <p>No Matches for selected Genre</p>
  )
}

PlaylistList.propTypes = {
  playslists: PropTypes.array,
  handleTracklistFetch: PropTypes.func,
  genre: PropTypes.string
}

export default PlaylistList
