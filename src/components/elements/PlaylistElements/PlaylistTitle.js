import PropTypes from 'prop-types';

const PlaylistTitle = ({title}) => {
  return (
    <section>
      <h2>{title}</h2>
    </section>
  )
}

PlaylistTitle.propTypes = {
  title: PropTypes.string
}

export default PlaylistTitle
