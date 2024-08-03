import React from 'react'
import "../../styles/style.scss"
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer flex text-white  gap-28'>
      <div className="left flex flex-col gap-5">
        <img className='h-40 w-40 object-cover rounded-xl' src="img/logo_footer.jpeg" alt="" />
        <p className='w-60'>Elementum nisi quis eleifend quam adipiscing. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin</p>
        <div className="social flex gap-4">
          <img className='h-9 w-9' src="img/instagram.png" alt="" />
          <img className='h-9 w-9' src="img/whatsapp.png" alt="" />
          <img className='h-7 w-7 mt-1' src="img/facebook.png" alt="" />
        </div>
      </div>
      <div className="center-left flex flex-col gap-7">
        <h3 className='text-2xl font-semibold'>Contacts information</h3>
        <div className='flex gap-4 '>
          <img className='contacts-icon mt-1' src="img/phone.png" alt="" />
          <p>+1-202-555-0133 <br /> +1-202-555-0133 </p>
        </div>
        <div className='flex gap-4'>
          <img className='contacts-icon mt-1' src="img/location.png" alt="" />
          <p>
            192 North Border Street
            <br />
            Lithonia, GA 30038
          </p>
        </div>
        <div className='flex gap-4'>
          <img className='contacts-icon mt-1' src='img/clock.png' />
          <p>
            9:00 am to 5:00 pm
            <br />
            Monday to Saturday
          </p>
        </div>
      </div>
      <div className="center-right flex flex-col gap-7">
        <h3 className='text-2xl font-semibold '>Support</h3>
        <ul className='flex flex-col gap-5'>
          <li><a href="" className='flex'> <img src="icons/sort_right.png" className='h-6'/>  About</a></li>
          <li><a href="" className='flex'> <img src="icons/sort_right.png" className='h-6'/> Products</a></li>
          <li><a href="" className='flex'> <img src="icons/sort_right.png" className='h-6'/> Gallery</a></li>
          <li><a href="" className='flex'> <img src="icons/sort_right.png" className='h-6'/> FAQ</a></li>
          <li><a href="" className='flex'> <img src="icons/sort_right.png" className='h-6'/> Contact</a></li>
        </ul>
      </div>
      <div className="right flex flex-col gap-7">
        <h3 className='text-2xl font-semibold'>Instagram</h3>
        <div className='intsa-area flex flex-wrap gap-6'>
          <img className='h-28 w-24 rounded-2xl' src="img/insta_1.jpg" alt="" />
          <img className='h-28 w-24 rounded-2xl' src="img/insta_2.jpg" alt="" />
          <img className='h-28 w-24 rounded-2xl' src="img/insta_3.jpg" alt="" />
          <img className='h-28 w-24 rounded-2xl' src="img/insta_4.jpg" alt="" />
          <img className='h-28 w-24 rounded-2xl' src="img/insta_5.jpg" alt="" />
          <img className='h-28 w-24 rounded-2xl' src="img/insta_6.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer