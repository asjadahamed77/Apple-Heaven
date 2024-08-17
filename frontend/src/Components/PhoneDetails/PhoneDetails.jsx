import React, { useContext, useState, useEffect } from 'react';
import './PhoneDetails.css';
import { PhoneContext } from '../../Context/PhoneContext';
import { Link } from 'react-router-dom';

const PhoneDetails = (props) => {
    const { addToCart } = useContext(PhoneContext);
    const { phones } = props;
    const [selectedStorage, setSelectedStorage] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleStorageClick = (storage) => {
        setSelectedStorage(storage);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const handleAddToCart = () => {
        if (selectedStorage && selectedColor) {
            addToCart(phones.model_name, selectedStorage.storage, selectedColor);
        } else {
            alert('Please select storage and color options.');
        }
    };

    return (
        <div className='phone-details'>
            <div className="phone-details-left">
                <img src={phones.phone_image} alt="" />
            </div>
            <div className="phone-details-right">
                <div className="model-name">
                    <h1>{phones.model_name}</h1>
                </div>
                <div className="ram-battery">
                    <div className="ram">{phones.ram}</div>
                    <div className="battery">{phones.battery}</div>
                </div>
                <div className="storage-options">
                    <p>SELECT STORAGE: </p>
                    {phones.storage_options.map((option, index) => (
                        <button
                            key={index}
                            className={`storage-option ${selectedStorage === option ? 'selected' : ''}`}
                            onClick={() => handleStorageClick(option)}
                        >
                            {option.storage}
                        </button>
                    ))}
                </div>
                {selectedStorage && (
                    <div className="price">
                        <p>Price: {selectedStorage.price}</p>
                    </div>
                )}
                <div className="colour-options">
                    <p>SELECT COLOUR: </p>
                    {phones.colours_options.map((option, index) => (
                        <button
                            key={index}
                            className={`colour-option ${selectedColor === option.colour ? 'selected' : ''}`}
                            onClick={() => handleColorClick(option.colour)}
                        >
                            {option.colour}
                        </button>
                    ))}
                </div>
                {selectedColor && (
                    <div className="selected-colour">
                        <p>Selected Colour: {selectedColor}</p>
                    </div>
                )}
                <div className="warranty">
                    Warranty: {phones.warranty}
                </div>
                <div className="button-add-to-cart">
                    <Link to={'/cart'}><button onClick={handleAddToCart}>ADD TO CART</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;
