import React, { useState, useRef } from 'react';
import Input from '../Input';
import Carousel from 'react-bootstrap/Carousel';
import "../../../styles/App.css"

const PlaylistList = ({ playlists, handleTracklistFetch }) => {
  const itemRef = useRef(null)

  const [index, setIndex] = useState(0);

  const handleIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleFetch = () => {
    const regexExtract = new RegExp('value=(.*)');
    const target = itemRef.current.element.children[1].children[index].innerHTML
    const id = target.match(regexExtract)[1].substr(1, 22)

    handleTracklistFetch('playlist', id)
    handleTracklistFetch('genre', id)
  }
  return (
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
              interval={30000}
            >
              <img
                src={playlist.images[0].url}
                alt={playlist.description}
                className="d-block w-100"
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
    </Carousel>
  )
}

export default PlaylistList
