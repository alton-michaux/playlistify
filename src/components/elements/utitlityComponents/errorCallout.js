import PropTypes from 'prop-types';
import { Callout } from "@blueprintjs/core"

const ErrorCallout = ({ error, isError }) => {
  return (
    <Callout
      icon="error"
      intent="danger"
      showheader="true"
      className={isError ? "errorDiv" : "nonError"}
    >
      {isError ? error.message : <></>}
    </Callout>
  )
}

ErrorCallout.propTypes = {
  error: PropTypes.object,
  isError: PropTypes.bool
}

export default ErrorCallout
