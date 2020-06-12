import React from 'react';
import '../App.css';




export default function Products(props) {

    //const {cart, setCart, products, setProducts} = props;

    React.useEffect(() => {

    
    })

        const add = (i) => {
            //console.log("add to cart from <Products/>", props.products[i]);

            
        const selectedProducts = {...props.products[i], quantity : 1}; 
        
        const updatedProducts = {...props.products[i], quantity : props.products[i].quantity - 1};

        

            props.setCart([...props.cart, selectedProducts]);


            const productsCopy = [...props.products]

            productsCopy.splice([i], 1, updatedProducts);

            props.setProducts(productsCopy);
            



        }

    return (

        <div className="products">
            

            {props.products.map( (products, i) => {

                return(
                    

                    <div className="container">

                        
                    
                    <h4>{products.title}</h4>
                    <img src= {products.img} alt='bottle' className="images"></img>
                    <p>Distillery: {products.distillery}</p>
                    <p>Located in: {products.location}</p>
                    <p className="price">$ {products.price}</p>
                    <p>Quantity Left: {products.quantity}</p>
                    <p>SKU: {products.SKU}</p>
                    <p>Keyword: {products.keyword}</p>
                    <button onClick={() => add(i)}>Add to Cart</button>

                    </div>
                    )
            })}

        </div>
    )
}









/*function Products() {
    
  return (
   
    <div className="products">
        
        {Stock.map((stockDetail, index)=>{
            return ( 
            
              <div>
                <br></br>
                <br></br>
                <div className="container">
                <h4 className="heading">{stockDetail.title}</h4>
                <img src= {stockDetail.img} alt='bottle' className="images"></img>
                <p>Stock ID: ({stockDetail.id})</p>
                <p>Distillery: {stockDetail.distillery}</p>
                <p>Location: {stockDetail.location}</p>
                <p>${stockDetail.price}</p>
                <p>Qty:  {stockDetail.quantity} Left!</p>
                <p>SKU:  {stockDetail.SKU}</p>
                <p>Keyword(s): {stockDetail.keyword}</p>
                <button className="button" >Add To Cart</button>
                
                    </div>

                    

              </div>

              
            )
                
        })}
        
      
        
      


    </div>


  );
}

export default Products;
*/                
        
