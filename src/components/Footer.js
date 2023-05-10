import React from 'react';

const Footer = props => {
    return (
        <div className="f1 tc">
            <div className="f3">
                { props.messageToChield1 }
            </div>
            <div className="f2">
                { props.messageToChield2 }
            </div>
        </div>
    );
}

export default Footer;