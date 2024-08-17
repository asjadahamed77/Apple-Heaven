import React from 'react';
import './PhoneItems.css';
import iPhones from '../../Assets/Phones';
import PhonesContainer from '../PhonesContainer/PhonesContainer';

const PhoneItems = () => {
  return (
    <div className='phone-items'>

      {iPhones.map((item, index) => {
        return (
          <div className="iPhone-items" key={index}>
            <PhonesContainer
              model_name={item.model_name}
              price_between={item.price_between}
              phone_image={item.phone_image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PhoneItems;
