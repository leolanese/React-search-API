import React from 'react';

const Footer = props => {
    return (
        <div className="f1 tc">
            <p>Hi!</p>
            { props.messageToChield1 }
            { props.messageToChield2 }
        </div>
    );
}

export default Footer;