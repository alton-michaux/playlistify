import { Callout } from "@blueprintjs/core"

const ErrorCallout = ({ children, isError }) => {
  return (
    <Callout
      icon="error"
      intent="danger"
      showheader={true}
      className={isError ? "errorDiv" : "nonError"}
    >
      {children}
    </Callout>
  )
}

export default ErrorCallout
