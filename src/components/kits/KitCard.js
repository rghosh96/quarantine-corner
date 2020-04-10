import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import KitInfo from './KitInfo';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateLike } from './../../reduxStore/actions/kitActions'

const KitCard = (props) => {
    console.log(props)
    const [modalShow, setModalShow] = React.useState(false);
    const likeButton = () => {
        console.log(props.kit)
        props.updateLike(props.kit)
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
            <small className="text-muted">{moment(props.kit.created.toDate()).calendar()} by {props.kit.user} <p className="like" onClick={likeButton}>{props.kit.likes} ♥</p></small>
            </Card.Footer>
                <KitInfo kit={props.kit}  
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                
        </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLike: (kit) => dispatch(updateLike(kit))
    }
}



export default connect(null, mapDispatchToProps)(KitCard);

