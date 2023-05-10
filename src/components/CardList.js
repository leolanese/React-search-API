import React, {memo} from 'react';
import Card from './Card';

function CardList({users}) {

    // if (true) {
    //     throw new Error('Error to be handle by ')
    // } 

    const cardComponent = users.map( (user, i) => {
        // Warning: Each child in a list should have a unique "key" prop
        // Tip: When do a loop. We need a key: Key={} prop it is need it
      return (
        <Card key={i} 
            id={ users[i].id } 
            name={users[i].name} 
            email={users[i].email} />
      )
    })

    return (
        <div>
            <header className="tc ph4">
            <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
                Search 
            </h1>
            <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                Seach by bear names: Filtering using state and hooks 
            </h2>
            </header>

            {cardComponent}

        </div>
    );
}

export default memo(CardList);