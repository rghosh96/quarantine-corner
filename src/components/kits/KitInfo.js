import React from 'react'
import Modal from 'react-bootstrap/Modal';

function KitInfo(props) {
        // const id= props.match.params.id;
        // console.log(id);
        return (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {props.kit.name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{props.kit.name}</p>
                <p>{props.kit.type}</p>
                <p>{props.kit.description}</p>
                <p>[ Kit Rating ]</p>
              </Modal.Body>
              <Modal.Footer>
                <small className="text-muted">[ Created at time ] by {props.kit.user}</small>
              </Modal.Footer>
            </Modal>
          );
}

export default KitInfo
