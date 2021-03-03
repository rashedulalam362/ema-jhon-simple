import React from 'react';

const Cart = (props) => {
 console.log(props);
    const cart=props.cart
    const total=cart.reduce((total,pd)=>total+pd.price,0)
   let shipping=0;

   if(total>35){
      shipping=0; 
   }
   else if(total>15){
       shipping=4.99
   }
   else if (total>0){
     shipping=12.99
};

const tax=(total/10).toFixed(2);
 const grandToatl=(total+shipping+Number(tax)).toFixed(2);
 const formatNumber=(num)=>{
 const prcision=num.toFixed(2);
 return Number(prcision) 

 }
    return (
        <div>
            <h4>Order Summary:</h4>
            <p>Itmes:{cart.length}</p>
            <p>product name:{props.cart.name}</p>
            <p>Product Price:{formatNumber(total)}</p>
            <p><small>shipping Cost:{shipping}</small></p>
            <p><small>Tax& vat:{tax}</small></p>
            <p>total price:{grandToatl}</p>
        </div>
    );
};

export default Cart;