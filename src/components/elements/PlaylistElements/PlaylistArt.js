import Image from 'react-bootstrap/Image'

const PlaylistArt = ({image}) => {
  return (
    <section>
      <Image
        src={image}
        fluid
      >
      </Image>
    </section>
  )
}

export default PlaylistArt
