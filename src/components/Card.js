import React from 'react';

const Card = ({ name, email, id }) => {
    // same as:
    // const { name, emial, id } = props;
    return (
        <>
          <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?50x50`} alt='card picture' />
            <div>
                <h2>{ name } </h2>
                <p>{ email }</p>
            </div>
          </div>

        </>
    );
}

export default Card;