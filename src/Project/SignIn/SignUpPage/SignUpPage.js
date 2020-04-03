import React, { Component } from 'react';
import logo from '../../../Image/logo.png';
import  './SignUpPage.css';
import axios from '../../../../node_modules/axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import history from '../../../history';
class SignUpPage extends Component {
    state = {
            UserForm: {
            Name: '',
            Mobile: '',
            Email: '',
            Password:'',
            RePassword: '',
    },
        formIsValid: false,
        loading: false,
        msg:'',
    }
    
    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
if(this.state.UserForm.RePassword.localeCompare(this.state.UserForm.Password)){
this.setState({msg:"Password And Repassword Not Match"})
}else{
        axios.post('http://5e84f969a8fdea00164acf09.mockapi.io/user/v1/user', this.state.UserForm )
            .then( response => {
                this.setState( );
                this.props.history.push( '/' );
            } )
            .catch( error => {
                this.setState(  );
            } );
          }
  }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedUserForm = {
            ...this.state.UserForm
        };
        let updatedFormElement = { 
            ...updatedUserForm[inputIdentifier]
        };
        updatedFormElement= event.target.value;
        updatedUserForm[inputIdentifier] = updatedFormElement;
        this.setState({UserForm: updatedUserForm});
    }

    render () {
        return (
   
            <div className="SignUpPage" >
              <div className="titleH ">  
              <img src={logo} alt="Not Found"/>
                   </div>  
                <h1 className="heading">Sign Up</h1>
                <Form onSubmit={this.orderHandler}>
                <Form.Group controlId="formBasicText" >
                <span className="asterisk_input">
    <Form.Label>Name</Form.Label>
    </span>
    <Form.Control type="text" className="requiredlabel" placeholder="Enter Name"   required={true} value={this.state.UserForm.Name}  onChange={(event) => this.inputChangedHandler(event, "Name")}/>
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
  <span className="asterisk_input">
    <Form.Label>Email address</Form.Label>
    </span>
    <Form.Control type="email" placeholder="Enter Email"  required={true} value={this.state.UserForm.Email} onChange={(event) => this.inputChangedHandler(event, "Email")} />
  </Form.Group>
  <Form.Group controlId="formBasicMobile">
  <span className="asterisk_input">
    <Form.Label>Mobile Number</Form.Label>
    </span>
    <Form.Control type="text" pattern="[0-9]{10}" placeholder="Enter Mobile Number" required={true} minLength={10}
                    maxLength={10}  value={this.state.UserForm.Mobile} onChange={(event) => this.inputChangedHandler(event, "Mobile")} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
  <span className="asterisk_input">
    <Form.Label>Password</Form.Label>
    </span>
    <Form.Control type="password" placeholder="Password" required={true} value={this.state.UserForm.Password} onChange={(event) => this.inputChangedHandler(event, "Password")}/>
  </Form.Group>
  <Form.Group controlId="formBasicRePassword">
  <span className="asterisk_input">
    <Form.Label>Re-Password</Form.Label>
    </span>
    <Form.Control type="password" placeholder="Re-Password"  required={true} value={this.state.UserForm.RePassword} onChange={(event) => this.inputChangedHandler(event, "RePassword")}/>
    <Form.Text className="text-danger">
    {this.state.msg}
    </Form.Text>
  </Form.Group>
  <Button variant="success" type="submit" >
    Submit
  
  </Button>&nbsp;&nbsp;&nbsp; 
  <Button variant="primary" onClick={() => history.push('/')} >
    Cancel
  </Button>
</Form>
            </div>
            
        );
    }
}
export default SignUpPage;