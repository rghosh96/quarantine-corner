import React from 'react';
import Card from 'react-bootstrap/Card';
import KitInfo from './KitInfo'

const KitCard = ({kit}) => {
    console.log(kit);
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Card>
            <Card.Body>
            <Card.Title onClick={() => setModalShow(true)} >{kit.name}</Card.Title>
            <Card.Text>
                <p>{kit.name}</p>
                <p>{kit.type}</p>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">[ Created at time ] by [ User ]</small>
            </Card.Footer>
                <KitInfo kit={kit}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
        </Card>
    )
}

export default KitCard;

