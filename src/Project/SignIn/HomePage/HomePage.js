import React, { Component } from 'react';
import logo from '../../../Image/logo.png';
import Welcome from '../../../Image/welcome.jpg';
import  './HomePage.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import hand from '../../../Image/hand.png'
import Form from 'react-bootstrap/Form';
import history from '../../../history';
class HomePage extends Component {
    
    render () {
        return (
        <div>
       <div className="navDiv ">
           <table className="DashBoard">
               <tr>
                   <th><img src={logo} alt="Not Found" className="Img1"/></th>
                   <th ><th className="DashBoardcolor">DashBoard</th></th>
                    <th >  
                        <Navbar bg="light" expand="sm">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav >
                        <NavDropdown title={this.props.match.params.name} id="basic-nav-dropdown">
                        <NavDropdown.Item >About</NavDropdown.Item>
                        <NavDropdown.Item>Setting</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => history.push('/')}>LogOut</NavDropdown.Item>
                        </NavDropdown> 
                        </Nav>
                        </Navbar.Collapse>
                        </Navbar></th>
             </tr>
             </table>
             </div>
              <div className="BgImage"> 
              <table className="margintr">
              <tr >
                <td ><img src={hand} alt="Not Found" className="Img2"/></td> 
                <td className="textcol">
                    <h2>&nbsp;&nbsp; Hello {this.props.match.params.name}</h2>
                    <p>Welcome To Stack-Avenue</p></td>
                </tr>
                </table>
                </div > 
                <div>
                <Form >
                <table className="infotag">
                <tr>
                <th>
                <Form.Group controlId="formBasicText" >
                <Form.Label>Id</Form.Label>
                <Form.Text className="text-muted">
                {this.props.match.params.id}
                </Form.Text>
                </Form.Group>
                </th>  
                <th>
                <Form.Group controlId="formBasicText" >
                <Form.Label>Name</Form.Label>
                <Form.Text className="text-muted">
                {this.props.match.params.name}
                </Form.Text>
                </Form.Group>
                </th>  
                <th>
                <Form.Group controlId="formBasicText" >
                <Form.Label>Email</Form.Label>
                <Form.Text className="text-danger">
                {this.props.match.params.email}
                </Form.Text>
                </Form.Group>
                </th>  
                </tr>
                </table>
                </Form>

                </div>
                </div>
        );
    }
}
export default HomePage;