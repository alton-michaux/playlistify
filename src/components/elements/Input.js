import PropTypes from 'prop-types';

const Input = ({ type, value, inputRef }) => {
  return (
    <input
      type={type}
      value={value}
      ref={inputRef}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  inputRef: PropTypes.func
}

export default Input
