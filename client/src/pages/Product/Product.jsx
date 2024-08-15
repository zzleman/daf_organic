import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus,faScaleBalanced} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import "./Product.scss";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const image = [
    "https://html.merku.love/herbalist/img/product/slide01.webp"
  ]
  return (
    <div className='product flex mx-10 gap-10'>
      <div className="left ">
        <img src={image} alt="" />
      </div>
      <div className="right flex flex-col gap-3">
        <h1>Pure Sun CBD Oil 30 ml</h1>
        <p>Elementum eu facilisis sed odio morbi quis commodo odio. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Arcu felis bibendum ut tristique et egestas. Id semper risus in hendrerit gravida rutrum. Eu mi bibendum neque egestas congue</p>
        <span id='price'>$19.99</span>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=> prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
          <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff",marginRight:"5px"}} />
          ADD TO CART
        </button>
        <div className="link flex gap-10">
          <div className="item flex gap-2">
            <FontAwesomeIcon icon={faHeart} style={{color: "#258f67",fontSize:"22px"}} />
            ADD TO WHISLIST
          </div>
          <div className="item flex gap-2">
            <FontAwesomeIcon icon={faScaleBalanced} style={{color: "#258f67",fontSize:"22px"}} />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info flex flex-col gap-2">
          <span>Category: Oil</span>
          <span>Size: 30ml</span>
          <span>Tags: Cannabis, oil</span>
        </div>
      </div>
    </div>
  )
}

export default Product