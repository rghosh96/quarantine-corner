import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateLike } from './../../reduxStore/actions/kitActions'

function KitInfo(props) {
        // const id= props.match.params.id;
        // console.log(id);
        const likeButton = () => {
            console.log(props.kit)
            props.updateLike(props.kit)
        }
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
                <div className="modalInfo">
                  <p className="kitNameModal">{props.kit.name}   </p>
                  <Badge pill variant="primary">
                      {props.kit.type}
                  </Badge>
                </div>
                <p>{props.kit.description}</p>
                <p>[ Kit Rating ]</p>
              </Modal.Body>
              <Modal.Footer>
                <small className="text-muted">{moment(props.kit.created.toDate()).calendar()} by {props.kit.user} &nbsp; | &nbsp; <p className="like" onClick={likeButton}>{props.kit.likes} ♥</p></small>
              </Modal.Footer>
            </Modal>
          );
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateLike: (kit) => dispatch(updateLike(kit))
  }
}

export default connect(null, mapDispatchToProps)(KitInfo);

