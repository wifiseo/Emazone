import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Products from '../Products/Products';
import Sitebar from '../Sitebar/Sitebar';
const Shop = () => {
    const [cart, setCart] = useState([]);

    
    const handleCart = (product)=> {
        const newCart = [...cart, product ];
        setCart(newCart);
    }



    const names = fakeData.map(
        Allpd => <Products btn={handleCart} products={Allpd}></Products>);


    return (
        <div className='ShopContainer'>
            <div className='productContainer'>
                {names}
            </div>
            <div className='cartSiteBar'>
                <Sitebar cart={cart}></Sitebar>
            </div>
        </div>
    );
};

export default Shop;