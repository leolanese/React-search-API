import React from 'react'

const Card = ({ name, email, id }) => {
    // same as passing: {props}
    // const { name, emial, id } = props;

    if (!name || !email || !id) {
      return <div>Invalid props</div>;
    }

    return (
        <>
          <article className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 ">
            <div className="tc">
              <img src={`https://placebear.com/200/20${id}`}
                className="br-100 h4 w4 dib ba b--black-05 pa2" 
                title={`a lovely bear called: ${name}`} 
                alt="card person"/>
              <h1 className="f3 mb2">{ name }</h1>
              {email && <h2 className="f5 fw4 gray mt0">{ email }</h2>}
            </div>
        </article>
        </>
    );
}

export default Card;