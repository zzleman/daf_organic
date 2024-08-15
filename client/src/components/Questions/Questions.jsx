import React from 'react';
import "./Questions.scss";
import "../../styles/style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';


const Questions = () => {
  return (
    <div className='questionContainer'>
      <div className="top text-center">
        <h1>Have any Questions?</h1> 
        <p>Elementum eu facilisis sed odio morbi quis commodo odio. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque</p>
      </div>
      <div className="bottom mx-10 flex justify-center gap-8 ">
        <div className='card-item flex flex-col gap-3 p-8'>
          <h4>Our Office Location</h4>
          <div className='card-text flex gap-3'>
            <FontAwesomeIcon icon={faLocationDot} style={{color: "#214842", fontSize:"30px", marginTop:"10px"}} />
            <p className='w-64'>211 Lehner Valleys Apt. 287 Harrisstad</p>
          </div>
          <p className='text-sm'>Tincidunt vitae semper quis lectus nulla. Viverra accumsan in nisl nisi scelerisque eu ultrices</p>
        </div>
        <div className='card-item flex flex-col gap-3 card-green p-8'>
          <h4>How Can We Help?</h4>
          <div className='card-text flex flex-col gap-3'>
            <div className='flex gap-3'>
              <FontAwesomeIcon icon={faCheck} style={{color: "#efc368", marginTop:"5px"}} />
              <p>Orci nulla pellentesque dignissim</p>
            </div>
            <div className='flex gap-3'>
              <FontAwesomeIcon icon={faCheck} style={{color: "#efc368", marginTop:"5px"}} />
              <p>Nam at lectus urna duis convallis</p>
            </div>
            <div className='flex gap-3'>
              <FontAwesomeIcon icon={faCheck} style={{color: "#efc368", marginTop:"5px"}} />
                <p>Nam at lectus urna duis convallis</p>
            </div>
            <div className='flex gap-3'>
              <FontAwesomeIcon icon={faCheck} style={{color: "#efc368", marginTop:"5px"}} />
              <p>Quis auctor elit sed vulputate</p>
            </div>
          </div>
        </div>
        <div className='card-item flex flex-col gap-3 p-8'>
          <h4>Our Office Location</h4>
          <div className='card-text flex gap-3'>
            <FontAwesomeIcon icon={faPhone} style={{color: "#214842",fontSize:"28px", marginTop:"10px"}} />
            <p className='w-64'>
              +1-896-882-3255
              <br />
              +1-249-342-7501</p>
          </div>
          <p className='text-sm'>Tincidunt vitae semper quis lectus nulla. Viverra accumsan in nisl nisi scelerisque eu ultrices</p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
