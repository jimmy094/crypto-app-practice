import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import Body from './Body';
import Prices from './Prices';
import Footer from './Footer';
import Home from "./Home";



function App() {
  return (
    <Router>
      

      <Routes>
    

        
        <Route path='/' element={<Home />}/>
        

        <Route path='/prices' element={<Prices />}/>
          
          {/* <Header />
          <Prices /> */}
        {/* </Route> */}
      
        {/* <Route path='/learn'>
          
          <Learn />
        </Route>

        <Route path='/signin'>
          
          <Signin />
        </Route>

        <Route path='/signup'>
        
        <Signup />
        </Route> */}

      </Routes>
      
    </Router>
     
    
  );
}

export default App;
          

            
        
