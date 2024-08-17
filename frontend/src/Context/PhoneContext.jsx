import React, { useState, createContext } from 'react';
import iPhones from '../Assets/Phones';

export const PhoneContext = createContext(null);

const PhoneContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({}); // Initialize as an empty object

    const addToCart = (model_name, storage, color) => {
        const key = `${model_name}-${storage}-${color}`;
        setCartItems((prev) => ({ ...prev, [key]: (prev[key] || 0) + 1 }));
    };

    const removeFromCart = (key) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            newCartItems[key] -= 1;
            if (newCartItems[key] <= 0) {
                delete newCartItems[key];
            }
            return newCartItems;
        });
    };

    const contextValue = { iPhones, cartItems, addToCart, removeFromCart };

    return <PhoneContext.Provider value={contextValue}>
        {props.children}
    </PhoneContext.Provider>;
};

export default PhoneContextProvider;
