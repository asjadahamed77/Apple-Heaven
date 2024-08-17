import React, { useState, useEffect } from 'react';
import './Advertise1.css';
import image1 from '../../Assets/Advertise1/advertisement-1-1.jpg';
import image2 from '../../Assets/Advertise1/advertisement-1-2.jpg';
import image3 from '../../Assets/Advertise1/advertisement-1-3.jpg';
import image4 from '../../Assets/Advertise1/advertisement-1-4.jpg';

const images = [image1, image2, image3, image4];

const Advertise1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='advertise-1'>
      <img src={images[currentIndex]} alt={`Advertisement ${currentIndex + 1}`} />
    </div>
  );
}

export default Advertise1;
