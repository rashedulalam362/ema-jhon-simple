import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import  './Shop.css'
const Shop = () => {
  
    const data=fakeData.slice(0,10)
 
    const [products, setProducts]=useState(data)
    const [cart, setCart]=useState([]);
    const handleAddProduct=(product)=>{
      console.log('country add', product);
      const newCart=[...cart, product]
      setCart(newCart)
     const newProduct=[...products, product]
    
     setProducts(newProduct)

    }
    return (
        <div className="shop_conatiner">
         <div className="products_conatiner">
          
          <ul>
           {
            products.map(product =><Product product={product} handleAddProduct={handleAddProduct} ></Product>)   
           }   
          </ul>
        
            </div>
            <div className="cart_container">
               <Cart cart={cart}></Cart> 
            </div>   
         
         
        </div>
    );
};

export default Shop;