import React from 'react';
import "./Card.scss"
import {Link} from "react-router-dom"
const Card = ({item}) => {
  return (
    <Link  to={`/product/${item.id}`}>
    <div className='card flex flex-col gap-3 mb-10'>
      <div className="image">
        {item.isNew && <span className='absolute bg-emerald-800 text-white m-2 px-2 rounded-md'>New</span>}
        <img className='rounded-2xl' src={item.img} alt="Product Image" />
      </div>
      <h2 className='text-emerald-800 font-semibold text-xl'>{item.title}</h2>
      <div className="prices flex gap-6">
        <h3 className='line-through	text-gray-400 text-xl'>${item.oldPrice}</h3>
        <h3 className='text-emerald-700 font-bold text-xl'>${item.price}</h3>
      </div>
    </div>
    </Link>
  );
}

export default Card;
