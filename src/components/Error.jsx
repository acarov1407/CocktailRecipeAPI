import { Alert } from "react-bootstrap"

function Error({msg}) {
  return (
    <Alert className="text-center h6" variant="danger">
        {msg}
    </Alert>
  )
}

export default Error