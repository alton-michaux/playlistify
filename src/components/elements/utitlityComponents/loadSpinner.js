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

export default BasicSpinner;