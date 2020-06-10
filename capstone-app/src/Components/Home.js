import React from 'react';
import Stock from '../Data/data.json';


function Home() {
    
  return (
   
    <div className="products">
        
        {Stock.map((stockDetail, index)=>{
            return <div>
                <h4 className="heading">{stockDetail.title}</h4>
                <div className="container">
                <img src= {stockDetail.img} alt='bottle' className="images"></img>
                <p>Stock ID: ({stockDetail.id})</p>
                <p>Distillery: {stockDetail.distillery}</p>
                <p>Location: {stockDetail.location}</p>
                <p>${stockDetail.price}</p>
                <p>Qty:  {stockDetail.quantity} Left!</p>
                <p>Keyword(s): {stockDetail.keyword}</p>
                <button className="button">Add To Cart</button>
                    </div>

                    

                </div>
                
        })}
        
      

      


    </div>
  );
}

export default Home;
