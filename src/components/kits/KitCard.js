import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import KitInfo from './KitInfo'

const KitCard = ({kit}) => {
    console.log(kit);
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Card>
            <Card.Body>
            <Card.Title onClick={() => setModalShow(true)} >{kit.name}</Card.Title>
            <Card.Text>
                <p className="kitName">{kit.name}</p>
                <Badge pill variant="primary">
                    {kit.type}
                </Badge>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">[ Created at time ] by {kit.user}</small>
            </Card.Footer>
                <KitInfo kit={kit}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
        </Card>
    )
}

export default KitCard;

