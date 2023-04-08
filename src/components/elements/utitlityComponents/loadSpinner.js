import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

function BasicSpinner({ children, isLoading }) {
  return (
    <Spinner
      className={isLoading ? "loader" : "nonLoader"}
      animation="border"
      role="status"
    >
      <span className="visually-hidden">{children}</span>
    </Spinner>
  );
}

BasicSpinner.propTypes = {
  children: PropTypes.string,
  isLoading: PropTypes.bool
}

export default BasicSpinner;