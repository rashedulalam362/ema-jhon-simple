import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {
  
 const {name, img,price, stock,seller,key}=props.product
    return (
        <div className="product">
           <img src={img} alt=""/>

          <div className="product_name">
          <h4><Link to={"/product/"+ key}>{name}</Link></h4>
          <br/>
          <p><small>by:{seller}</small></p>
          <p>{price}</p>
           <p><small> only {stock} soon </small></p>
           <button onClick={()=>props.handleAddProduct(props.product)} className="btn"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
          </div>

        </div>
    );
};

export default Product;