import React, { useState } from "react"
import PlaylistTitle from './PlaylistTitle'
import PlaylistArt from './PlaylistArt'
import PlaybackCtrls from './PlaybackCtrls'

const MainPlaylist = ({ selectedPlaylist }) => {
  const [title, setTitle] = useState("None Selected")
  const [image, setImage] = useState("https://techcrunch.com/wp-content/uploads/2021/02/alexander-shatov-JlO3-oY5ZlQ-unsplash.jpg")

  const positiveLength = Object.keys(selectedPlaylist).length > 0

  if (positiveLength) {
    setTitle(selectedPlaylist.name)
    setImage(selectedPlaylist.images[0].url)
  }

  return (
    <section
      style={{ backgroundImage: "linear-gradient(#1C2127, #D33D17)" }}
    >
      <PlaylistTitle
        title={title}
      ></PlaylistTitle>
      <PlaylistArt
        image={image}
      ></PlaylistArt>
      <PlaybackCtrls
        playlist={selectedPlaylist}
      ></PlaybackCtrls>
    </section>
  )
}

export default MainPlaylist
