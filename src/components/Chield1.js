import React from 'react';
import './Chield1.css';

const Chield1 = props => {
    return (
        <div className="f1 tc">
            <h1>Hi!</h1>
            { props.messageToChield1 }
            { props.messageToChield2 }
        </div>
    );
}

export default Chield1;