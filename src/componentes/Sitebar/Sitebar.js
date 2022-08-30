import React from 'react';
import './Sitbar.css'

const Sitebar = (props) => {

    const productsInCart = props.cart;
    //const totalPrice = productsInCart.reduce((total, prd) => total + prd.price, 0)'
    let totalPrice = 0;
    for (let i = 0; i<productsInCart.length; i++){
        const productElements = productsInCart[i];
        totalPrice = totalPrice + productElements.price;
    }
    let shipping = 0;
    if (totalPrice > 400){
        shipping = 65
    }

    const grandTotal = (totalPrice + shipping).toFixed(0);
    return (
        <div className='productSiteBar'>
            <h1>You added {productsInCart.length} products</h1>
            <h2><small>Shipping Charge: {shipping}</small></h2>
            <h2><small>vat + tex: 0</small></h2>
            <h2>Total Price: ${grandTotal}</h2>
        </div>
    );
};

export default Sitebar;