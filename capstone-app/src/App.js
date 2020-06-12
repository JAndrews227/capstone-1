import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Cart from './Components/Cart.jsx';
import Products from './Components/Products.jsx';
import Data from './Data/data.json'
import Search from './Components/Search.jsx';


 








      function App() {


        //const to set useStates

        const [products, setProducts] = useState([]);

        const [cart, setCart] = useState([]);

        /*function search(item) {
        console.log(item);

        }*/

        useEffect(() => {

          setProducts(Data);

        },[])

        useEffect(() => {

         // console.log("data in </App>", products);
         // console.log("cart in <App/>", cart)
        
        })
        


        return (

    
          <div className="App">

          <header className="head"><h1>Texas Spirits</h1></header>
          
          
              
                
              
              <nav>
                <Search />

                  <div>
                    
                    <Link to= {"/"} className="navLinks">Home</Link>


                    <Link to= {"/Products"} className="navLinks" >Products</Link>
                    
                    

                    <Link to={"/cart"}className="navLinks" >Cart</Link>
                  
                  </div>  
                
              </nav>
              
          
              <Route exact path="/" render={() => <Home />}/> 

              <Route exact path="/Products">

                <Products products={products} setProducts={setProducts} cart={cart} setCart={setCart} />

              </Route>

              <Route exact path="/cart">

                <Cart cart={cart} setProducts={setProducts} products={products} />

              </Route>
            
              


            


            
          </div>
    

    
  );
}

export default App;

//line 79 calls home page
//line 83 calls products and sets props
//line 89 calls cart and sets props