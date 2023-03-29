import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../../../styles/App.css"

const PlaylistList = ({ playlists, handleTracklistFetch }) => {
  const [index, setIndex] = useState(0);

  const handleFetch = (selectedIndex, e) => {
    // console.log('e', e, 'index', index, 'selectedIndex', selectedIndex)
    setIndex(selectedIndex);
    handleTracklistFetch('playlist', e)
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleFetch}
      className="playlist-carousel"
    >
      {
        playlists.map((playlist) => {
          return (
            <Carousel.Item
              key={playlist.id}
              interval={30000}
            >
              <img
                src={playlist.images[0].url}
                alt={playlist.description}
                className="d-block w-100"
              />
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
    </Carousel>
  )
}

export default PlaylistList
