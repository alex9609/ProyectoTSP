import React from 'react'
import Estrellascinco from "../../img/estrellascinco.webp";
import './card.css'

const Card = ({source,name,price}) =>  {
  return (
    <div>
      <img className="d-block w-100 mouse" src={source} alt="First slide" />
	  <img className="d-block w-100 star" src={Estrellascinco} alt="First slide" />
      <h1 className='reference'>{name}</h1>
      <p className='price'>$ {price}</p>
    </div>
  );
}

export default Card