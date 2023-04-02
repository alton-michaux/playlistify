import React, { useState, useRef } from 'react';
import Input from '../Input';
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

  const handleBackgroundImg = (genre) => {
    switch (genre) {
      case "chill", "study":
        return "https://wallpapercave.com/wp/wp10837598.png"
      case "hip-hop":
        return "https://wallpapers.com/images/hd/dark-city-digital-art-6vx1qudd00qlnz17.jpg"
      case "club", "party":
        return "https://c1.wallpaperflare.com/preview/581/162/430/smoke-party-people-dark.jpg"
      case "pop":
        return "https://media.istockphoto.com/id/1199262104/vector/illuminated-stage-with-scenic-lights-and-smoke-blue-vector-spotlight-with-smoke-volume-light.jpg?s=612x612&w=0&k=20&c=sGterFSNO2hzFRt6NRg_VDLkvur2UIloA5v5pDGFtVg="
      case "r-n-b":
        return "https://wallpapers.com/images/hd/dark-heart-on-window-pane-a2fqmtwop8i9narh.jpg"
      case "sad", "rainy-day":
        return "https://wallpaperaccess.com/full/777992.jpg"
      default:
        return "https://thumbs.dreamstime.com/b/abstract-black-red-blue-background-vector-illustration-abstract-black-red-blue-background-vector-illustration-beautiful-204073511.jpg"
    }
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
                  src={handleBackgroundImg(genre)}
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

export default PlaylistList
