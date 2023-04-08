import PropTypes from 'prop-types';
import { Callout } from "@blueprintjs/core"

const ErrorCallout = ({ children, isError }) => {
  return (
    <Callout
      icon="error"
      intent="danger"
      showheader="true"
      className={isError ? "errorDiv" : "nonError"}
    >
      {children}
    </Callout>
  )
}

ErrorCallout.propTypes = {
  children: PropTypes.string,
  isError: PropTypes.bool
}

export default ErrorCallout
