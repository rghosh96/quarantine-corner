import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import KitInfo from './KitInfo';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateLike,likeKit, addLike } from './../../reduxStore/actions/kitActions'

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
            <Card.Body>
            <Card.Title onClick={() => setModalShow(true)} >{props.kit.name}</Card.Title>
            <Card.Text className="kitcards">
                <p className="kitName">{props.kit.name}</p>
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
        // addLike: (user, kit) => dispatch(addLike(user, kit))
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

