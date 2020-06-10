import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Select from 'react-select';





const keyword = [

  {label: "Whiskey", value: 1},
  {label: "Bourbon", value: 2},
  {label: "Blended", value: 3},
  {label: "Vodka", value: 4},
  {label: "Moonshine", value: 5},
];


function App() {
  return (

      <Router>
    <div className="App">

    <header className="headFoot"><h1>Texas Spirits</h1></header>
    <nav>
        
        <h3>Logo</h3>
        <div className="bar">

        
        <Select options={keyword} onChange={opt => 
            console.log(opt.label, opt.value)} />

        </div>

            <ul className="links">

              

              <li><Link to= {'/'} className="navLinks">Home</Link></li>
              
              
              <li><Link to={"/cart"} className="navLinks">Cart</Link></li>

                
            </ul>
        </nav>
    
      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />

      </Switch>


      <footer className="headFoot"><h5>All spirits are distilled in the Lone Star State</h5></footer>
    </div>
    </Router>

    
  );
}

export default App;