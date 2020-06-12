import React from 'react';









export default function Cart (props) {

    

React.useEffect(() => {


})



    return(

        
    <div className="container">
    
    {props.cart.map(products => <div> {products.title} / {products.keyword} @ $ {products.price} </div>)}

    <button>Pay Now</button>
        
    </div>


    );
    



}; 