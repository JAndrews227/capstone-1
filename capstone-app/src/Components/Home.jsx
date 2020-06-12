import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../App.css';






function Home (){

  return(




        
      

        
        <div>
        <h1 className='open-head'>MUST BE 21 TO ENTER!!</h1>

      
        <nav>
        <Link to= {"/Products"} className="navLinks">I am 21 and Over</Link>
        <Link to= {"./Dead"} className="navLinks">I'm not old enough yet!</Link>
        </nav>
        
      


        <Route exact path='./Dead'></Route>

        </div>

      

  )
  
}

export default Home;