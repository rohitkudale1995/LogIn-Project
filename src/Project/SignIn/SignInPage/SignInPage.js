import React, { Component } from 'react';
import  './SignInPage.css';
import axios from '../../../../node_modules/axios';
import logo from '../../../Image/logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import history from '../../../history';
import Spinner from 'react-bootstrap/Spinner';
class SignInPage extends Component {
    state = {
        
            Email: '',
            Password: '',
            userdata:[],
            loading:false,
            msg:'',
            
            name:'',
            id:''
    }  
    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        axios.get('http://5e84f969a8fdea00164acf09.mockapi.io/user/v1/user')
            .then( response => {
              this.setState({userdata :response.data}); 
              let a=this.state.userdata.map(rep=>{
              if(this.state.Email===rep.Email && this.state.Password===rep.Password)
              {this.state.name=rep.Name;
                this.state.Email=rep.Email;
                this.state.id=rep.id;
              return true;
              }else
              {
              return false;
              }         
              });
                let c=0;
                for(let i=0;i<a.length;i++)
                {
                      if(!a[i])
                      {
                       c++;
                      } 
                }
if(c===a.length)
{
  this.setState( { loading:false ,msg:'Invalid Email Or Password'} );
}
else
{ let name1='/HomePage/'+this.state.name+'/'+this.state.Email+'/'+this.state.id;
  
this.props.history.push(name1);
}      
            } )
            .catch( error => {
                this.setState(  );
            } );

    }
    inputChangedHandler = (event, inputIdentifier) => {     
    if(inputIdentifier==="Password"){
        this.setState({Password:event.target.value});
        }
        else
        {
        this.setState({Email:event.target.value});
    }
    }
    render () {
        return (
          
            <div className="SignInPage">
              <div className="titleH ">  
                   <img src={logo} alt="Not Found"/>
                   </div>  
                  <h1 className="heading">Sign In</h1>
  <Form onSubmit={this.orderHandler}>
  <Form.Group controlId="formBasicEmail">
  <Form.Label>Email</Form.Label>
  <Form.Control type="email" placeholder="Enter Email" required={true} value={this.state.Email} onChange={(event) => this.inputChangedHandler(event, "Email")} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required={true} value={this.state.Password} onChange={(event) => this.inputChangedHandler(event, "Password")}/>
  </Form.Group>
  <Form.Text className="text-danger">
    {this.state.msg}
    </Form.Text><br/>
  <Button variant="success" type="submit" >
    {this.state.loading?<Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />: ""}Sign In
  </Button>&nbsp;&nbsp;&nbsp; 
  <Button variant="primary" onClick={() => history.push('/SignUpPage')} >
    SignUp
  </Button>
</Form>
            </div>
        );
    }
}

export default SignInPage;