import React from 'react';
import './Product.css'
const Products = (props) => {
    const productName = props.products.name;
    const productImage = props.products.img;
    const productPrice = props.products.price;
    const seller = props.products.seller;
    const stock = props.products.stock;

    return (
        <div className='productBody'>
            <div className='productGrid'>
                <img src={productImage} alt="" />
                <div className='prodductDetails'>
                    <h1 className='productTitle'>
                    Titile: {productName}
                    </h1>
                    <p><small>By: {seller}</small></p>
                    <p><small>Only left in stock {stock}</small></p>
                    <h1>Price: {productPrice}$</h1>
                    <button onClick={()=>{props.btn(props.products)}}>Add to cart</button>
                </div>
            </div>
        </div>
            
        
    );
};

export default Products;