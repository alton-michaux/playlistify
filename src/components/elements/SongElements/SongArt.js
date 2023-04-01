import Image from 'react-bootstrap/Image'

const SongArt = ({ songImage }) => {
  return (
    <section>
      <Image
        src={songImage}
        fluid
      >
      </Image>
    </section>
  )
}

export default SongArt
