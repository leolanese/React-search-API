import React from 'react';
import Card from './Card';

function CardList({robots}) {
    const cardComponent = robots.map( (user, i) => {
        // Warning: Each child in a list should have a unique "key" prop
        // Tip: When do a loop. We need a key: Key={} prop it is need it
      return (
        <Card key={i} 
            id={ robots[i].id } 
            name={robots[i].name} 
            email={robots[i].email} />
      )
    })

    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;