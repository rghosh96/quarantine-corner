import React from 'react';
import KitCard from './KitCard';
import CardColumns from 'react-bootstrap/CardColumns'

const SearchTypeKit = ({kit, likes, search}) => {
    console.log(kit);
    console.log(likes);
    console.log(search);

    return (
            <CardColumns>
                { kit && kit.map(kit => {
                console.log(kit.id)
                var alike
                if(likes) {
                    console.log(likes)
                for (var i in likes) {
                    console.log(likes[i].id)
                    if (likes[i].id === kit.id) {
                        console.log(likes[i].id)
                        alike = likes[i]}
                }}
                if (kit.type === search) {
                    return (
                        <KitCard kit={kit} like={alike}  key={kit.id} />
                    )}
                })}
            </CardColumns>
    
    )
}



export default SearchTypeKit;

