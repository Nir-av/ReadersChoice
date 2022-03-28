import React, { Component } from "react";
import { Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";
import RcLogo from '../../Images/rcLogo.png';
import axios from "axios";
import './SignIn.css';

class SignIn extends Component 
{
    constructor(props) {
        super(props);
        this.state  = {
            userEmail: "",
            userPassword: "",
            errorMsg: "",
            hasError: false,
            noError: false
        }
    }

    render() {
        return (
           <React.Fragment>
                    
            </React.Fragment>
        );
    }
}

export default withRouter(SignIn);
