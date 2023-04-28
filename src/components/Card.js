import React from 'react'

const Card = ({ name, email, id }) => {
    // same as:
    // const { name, emial, id } = props;
    return (
        <>
          <article className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 ">
          <div className="tc">
            <img src={`https://robohash.org/${id}?size=75x75`} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
            <h1 className="f3 mb2">{ name }</h1>
            <h2 className="f5 fw4 gray mt0">{ email }</h2>
          </div>
        </article>
        </>
    );
}

export default Card;