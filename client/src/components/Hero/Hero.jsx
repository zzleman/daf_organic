import React, { useEffect } from 'react'; 
import "../../styles/style.scss";
import "./Hero.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
   useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className='hero-section flex py-20 px-10 relative'>
        <div className="hero-left flex flex-col gap-7">
          <h1>Cannabis Oils: CBD Oil and THC Oil Available</h1>
          <p>
            Discover a diverse range of food, concentrates, cannabis oils, capsules, CBD oils, baked buns, and dried flowers - available in indica, sativa, and hybrid varieties with varying CBD and THC potencies. Cannabis accessories can also be purchased.
          </p>
          <button>Shop Now</button>
          <div className="hero-offers grid grid-cols-2 gap-7">
            <div className='flex gap-4 animation' data-aos="fade-up">
              <div className='bg-white rounded-full p-2 h-12 w-12'>
                <img className='h-9 w-9' src="icons/shipping.png" alt="" />
              </div>
              <p className='py-2 text-main-green'>Free Shipping & Returns</p>
            </div>
            <div className='flex gap-4 animation' data-aos="fade-up">
              <div className='bg-white rounded-full p-2 h-12 w-12'>
                <img className='h-9 w-9' src="icons/coin.png" alt="" />
              </div>
              <p className='py-2 text-main-green'>Money Back Guarantee</p>
            </div>
            <div className='flex gap-4 animation' data-aos="fade-up">
              <div className='bg-white rounded-full p-2 h-12 w-12'>
                <img className='h-9 w-9' src="icons/secure_payment.png" alt="" />
              </div>
              <p className='py-2 text-main-green'>100% Secure Payment</p>
            </div>
            <div className='flex gap-4 animation' data-aos="fade-up">
              <div className='bg-white rounded-full p-2 h-12 w-12'>
                <img className='h-9 w-9'src="icons/online_support.png" alt="" />
              </div>
              <p className='py-2 text-main-green'>Online Support</p>
            </div>
          </div>
        </div>
        <div className="hero-right absolute right-0">
          <img src="https://html.merku.love/herbalist/img/index2/leaf.webp" alt="" />
        </div>
    </div>
  );
}

export default Hero;
