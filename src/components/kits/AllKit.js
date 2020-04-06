import React from 'react';
import KitCard from './KitCard';
import CardColumns from 'react-bootstrap/CardColumns'

const AllKit = ({kits}) => {
    console.log(kits.kit);
    return (
            <CardColumns>
                { kits.kit && kits.kit.map(kit => {
                    return (
                        <KitCard kit={kit} key={kit.id} />
                    )
                })}
            </CardColumns>
    
    )
}

export default AllKit;

