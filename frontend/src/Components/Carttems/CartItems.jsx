import React, { useContext, useEffect } from 'react';
import './CartItems.css';
import { PhoneContext } from '../../Context/PhoneContext';
import remove_icon from '../../Assets/Icons/cart_cross_icon.png';

const CartItems = () => {
    const { iPhones, cartItems, removeFromCart } = useContext(PhoneContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!iPhones || !cartItems) {
        return <div>Loading...</div>;
    }

    const calculateTotal = () => {
        return Object.keys(cartItems).reduce((total, key) => {
            const [modelName, storage] = key.split('-');
            const phone = iPhones.find(phone => phone.model_name === modelName);
            if (!phone) return total; // Ensure phone is defined
            const storageOption = phone.storage_options.find(option => option.storage === storage);
            if (!storageOption) return total; // Ensure storageOption is defined

            const price = parseFloat(storageOption.price);
            
            return total + (price);
        }, 0);
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Storage</p>
                <p>Color</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                Object.keys(cartItems).filter(key => cartItems[key] > 0).map((key) => {
                    const [modelName, storage, color] = key.split('-');
                    const phone = iPhones.find(phone => phone.model_name === modelName);
                    if (!phone) return null; // Ensure phone is defined
                    const storageOption = phone.storage_options.find(option => option.storage === storage);
                    if (!storageOption) return null; // Ensure storageOption is defined

                    const price = parseFloat(storageOption.price);
                    
                    return (
                        <div key={key}>
                            <div className="cartitems-format">
                                <img src={phone.phone_image} alt="" className="carticon-product-icon" />
                                <p>{modelName}</p>
                                <p>{storage}</p>
                                <p>{color}</p>
                                <p>Rs. {(price).toFixed(2)}</p>
                                <div className="cartitems-remove-icon">
                                    <img
                                        src={remove_icon}
                                        alt="Remove"
                                        onClick={() => removeFromCart(key)}
                                    />
                                </div>
                            </div>
                            <hr />
                        </div>
                    );
                })
            }
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Sub Total</p>
                            <p>Rs. {calculateTotal().toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Rs. {calculateTotal().toFixed(2)}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promocode, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='PromoCode' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
