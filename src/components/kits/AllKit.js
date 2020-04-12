import React from 'react';
import KitCard from './KitCard';
import CardColumns from 'react-bootstrap/CardColumns'

const AllKit = (props) => {
    console.log(props);
    return (
            <CardColumns>
                { props.kits.kit && props.kits.kit.map(kit => {
                console.log(kit.id)
                var like
                if(props.kits.likes) {
                    console.log(props.kits.likes)
                for (var i in props.kits.likes) {
                    console.log(props.kits.likes[i].id)
                    if (props.kits.likes[i].id === kit.id) {
                        console.log(props.kits.likes[i].id)
                        like = props.kits.likes[i]}
                }}
                    return (
                        <KitCard kit={kit} like={like} key={kit.id} />
                    )
                })}
            </CardColumns>
    
    )
}

export default AllKit;

