import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { propTypes } from 'react-bootstrap/esm/Image';

function Login({ handleUser, user, show }) {
  const handleFormSubmit = (event) => {
    handleUser("user", event.target.value)
  }

  const handleModalState = (type) => {
    handleUser("modal", type)
  }

  return (
    <>
      {
        user ? <></> :

          <>
            <Button variant="primary" onClick={() => handleModalState(true)}>
              Login to your Spotify Account
            </Button>

            <Modal show={show} onHide={() => handleModalState(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => handleModalState(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleFormSubmit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
      }
    </>
  );
}

Login.PropTypes = {
  handleUser: propTypes.func,
  user: propTypes.object,
  show: propTypes.bool
}

export default Login
