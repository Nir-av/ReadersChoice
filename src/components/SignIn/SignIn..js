import React, { Component } from "react";
import { Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";
import RcLogo from '../../Images/rcLogo.png';
import axios from "axios";
import './SignIn.css';
import Header from '../Header/header';

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

    // HANDLE CHANGES FORM ALL THE FIELDS
    handleChange = async (text, type) => {
        switch (type) {
            case 'userEmail':
                await this.setState({ userEmail: text.target.value })
                break
            case 'userPassword':
                await this.setState({ userPassword: text.target.value })
                break
            default:
        }
    }

    // CLEAR FIELDS
    clearFields = () => {
        this.setState({
            userEmail: "",
            userPassword: "",
        })
    }

     // SUBMITTING FORM
    loginBtnClicked = (e) => {
        e.preventDefault();
        if(!this.state.userEmail) {
            this.setState({hasError: true, errorMsg: "E-mail address field should not be empty!"});
        }
        else if(!this.state.userPassword) {
            this.setState({hasError: true, errorMsg: "Password field should not be empty!"});
        }
        else{
            var data = {
                email: this.state.userEmail,
                password: this.state.userPassword
            }
            console.log(data);
            axios.post('http://localhost:8000/users/login', data)
            .then(response => {
                this.setState({noError: true});
                console.log(response);
                console.log("Login success!");
                this.clearFields();
            }) 
            .catch(err => {
                console.log(err);
            })
            this.clearFields();
        }
    }

    canelBtnClicked = () => {
        this.clearFields();
    }

    render() {
        return (
           <React.Fragment>
                    <Header/>
                    <div className="container my-5">
                        <Row className="justify-content-center">
                            <Col md="8" lg="6" xl="5">
                                <Card className="bg-pattern shadow-none">
                                    <CardBody className="background">
                                        <div className="background text-center mt-2">
                                                <Link to="/" className="logo"><img className="logo" src={RcLogo} height="150" alt="rcLogo" /></Link>
                                        </div>
                                        <div className="background p-3">
                                            <h4 className="font-18 text-center">Login</h4>
                                            <p className="text-muted text-center mb-4">Login to continue to Readers Choice.</p>
                                            {
                                                this.state.hasError &&
                                                    <Alert color="danger">
                                                        {this.state.errorMsg}
                                                    </Alert>
                                            }
                                            {
                                                this.state.noError &&
                                                    <Alert color="success">
                                                        Login successful!
                                                    </Alert>
                                            }
                                            <Form className="background form-horizontal">
                                                 <FormGroup className="background">
                                                    <Label for="userEmail">E-mail</Label>
                                                    <Input onChange={(text) => {this.handleChange(text, "userEmail")}} value={this.state.userEmail} type="email" name="userEmail" id="userEmail" placeholder="Enter e-mail address" />
                                                </FormGroup>
                                                <FormGroup className="background">
                                                    <Label for="userPassword">Password</Label>
                                                    <Input onChange={(text) => {this.handleChange(text, "userPassword")}} value={this.state.userPassword} type="password" name="userPassword" id="userPassword" placeholder="Enter password" />
                                                </FormGroup>
                                                <div className="background col-md-12 text-center">
                                                    <Button outline color="success" type="submit" onClick={this.loginBtnClicked}>Login</Button>&nbsp;&nbsp;&nbsp;
                                                    <Button outline color="danger" type="cancel" onClick={this.cancelBtnClicked}>Cancel</Button>
                                                </div>
                                                <Link to="/signup">New to readers choice?</Link>
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
            </React.Fragment>
        );
    }
}

export default withRouter(SignIn);
