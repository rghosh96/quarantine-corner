import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import KitInfo from './KitInfo';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateLike,likeKit, deleteKit } from './../../reduxStore/actions/kitActions'

const KitCard = (props) => {
    console.log(props)
    const [modalShow, setModalShow] = React.useState(false);
    const checkLike = () => {
        if (props.like) {
            if (props.like.like === true) {
                return 'activeLike'
            }
            else {
                return 'like'
            }
        }
        else {
            return 'like'
        }
    }

    const deleteThis = () => {
        props.deleteKit(props.kit)
    }

    const likeButton = () => {
        console.log(props.like)
        if (props.like) {
            if (props.like.like === true) {
                props.likeKit(props.auth, props.kit, false)
                props.updateLike(props.kit, -1)
            }
            else {
                props.likeKit(props.auth, props.kit, true)
                props.updateLike(props.kit, 1)
            }
        }
        else {
            props.likeKit(props.auth, props.kit, true)
            props.updateLike(props.kit, 1)
        }
    }

    

    return (
        <Card>
            <Card.Body> <div class="kitcards">
            <Card.Title onClick={() => setModalShow(true)} >{props.kit.name} </Card.Title> 
            {props.auth.uid === props.kit.userId? <p onClick={() => {deleteThis()} } className="delete" >delete</p> : null}
            </div>
            <Card.Text className="kitcards">
                <p className="kitName">{props.kit.name} </p> 
                <Badge pill variant="primary">
                    {props.kit.type}
                </Badge>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">{moment(props.kit.created.toDate()).calendar()} by {props.kit.user} <p className ={props.auth.uid ?checkLike(): 'disabled'} onClick={props.auth.uid ? likeButton: null}>{props.kit.likes} ♥</p></small>
            </Card.Footer>
                <KitInfo kit={props.kit} like={props.like}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                
        </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLike: (kit, value) => dispatch(updateLike(kit, value)),
        likeKit: (user, kit, like) => dispatch(likeKit(user, kit, like)),
        deleteKit: (kit) => dispatch(deleteKit(kit))
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(KitCard);

