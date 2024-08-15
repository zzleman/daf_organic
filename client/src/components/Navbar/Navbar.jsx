import React, { useState } from 'react';
import "../../styles/style.scss";
import Cart from '../Cart/Cart';
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='navbar flex gap-10 justify-between mx-4 lg:mx-7'>
      <div className="left flex gap-4">
        <img className='h-10 mt-7 lg:hidden' src="icons/menu_icon.png" alt="" />
        <div className='flex gap-2'>
          <img className='h-20 w-20 mt-2 lg:mt-3 lg:h-20 lg:w-16' src ="img/textless_logo.png" alt="" />
          <p className='my-9 text-2xl'>DAF<span>ORGANIC</span></p>
        </div>
      </div>
      <div className="center mt-10">
        <ul className='gap-10 hidden lg:flex'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className="right flex gap-7 mt-7">
        <div className='searching flex relative'>
          <input className='hidden lg:block' type="text" placeholder='Search...' />
          <img className='icons lg:absolute right-0' id='search-icon' src="icons/search_icon.png" alt="" />
        </div>
        <div className='flex gap-5'>
          <img className='icons' src="icons/favorites_icon.png" alt="" />
          <div className='relative'>
            <img className='icons' src="icons/basket_icon.png" alt="" onClick={() => setOpen(!open)} />
            <span className='count-badge absolute text-white h-6 w-6 text-center rounded-full'>0</span>
          </div>
        </div>
      </div>
      {open && (
        <>
          <div className={`cart-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)}></div>
          <Cart open={open} setOpen={setOpen} />
        </>
      )}
    </div>
  );
}

export default Navbar;
