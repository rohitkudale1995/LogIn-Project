import React, { Component } from 'react';
import logo from '../../../Image/logo.png';
import Welcome from '../../../Image/welcome.jpg';
import  './HomePage.css';
class HomePage extends Component {
    
    render () {
        return (
            <div className="SignInPage">
       
              <div className="titleH ">  
              <img src={logo} alt="Not Found"/>
                   </div>  
               
                <img src={Welcome} className="imgsize" alt="Not Found"/>
                <h1 className="heading">In Stack Avenue</h1>
                </div>
        );
    }
}
export default HomePage;