import React from 'react';
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar';
import Advertise1 from '../Components/Advertise1/Advertise1';
import './Homepage.css';
import PhoneItems from '../Components/PhoneItems/PhoneItems';

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="side-left">
        <LeftSideBar />
      </div>
      <div className="side-right">
        <div className="advertise-container">
          <Advertise1 />
        </div>
        <div className="phone-items-container">
          <PhoneItems />
        </div>
      </div>
    </div>
  )
}

export default Homepage;
