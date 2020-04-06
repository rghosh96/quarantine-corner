import React from 'react';
import KitCard from './KitCard';
import CardColumns from 'react-bootstrap/CardColumns'

const SearchUserKit = ({kits, search}) => {
    console.log(kits.kit);
    return (
            <CardColumns>
                { kits.kit && kits.kit.map(kit => {
                    if (kit.user === search) {
                    return (
                        <KitCard kit={kit} key={kit.id} />
                    )}
                })}
            </CardColumns>
    
    )
}

export default SearchUserKit;

