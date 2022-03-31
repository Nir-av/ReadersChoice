import React, { Component } from "react";
import { Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";
import RcLogo from '../../Images/rcLogo.png';
import axios from "axios";
import './SignUp.css';
import Header from '../Header/header';
import Footer from '../Footer/Footer';

class SignUp extends Component 
{
    constructor(props) {
        super(props);
        this.state  = {
            userName: "",
            userEmail: "",
            userPassword: "",
            confirmPassword: "",
            errorMsg: "",
            hasError: false,
            noError: false
        }
        // this.submitBtnClicked = this.submitBtnClicked.bind(this);
        // this.canelBtnClicked = this.canelBtnClicked.bind(this);
    }

    // HANDLE CHANGES FORM ALL THE FIELDS
    handleChange = async (text, type) => {
        switch (type) {
            case 'userName':
                await this.setState({ userName: text.target.value })
                break
            case 'userEmail':
                await this.setState({ userEmail: text.target.value })
                break
            case 'userPassword':
                await this.setState({ userPassword: text.target.value })
                break
            case 'confirmPassword':
                await this.setState({ confirmPassword: text.target.value })
                break
            default:
        }
    }

    // CLEAR FIELDS
    clearFields = () => {
        this.setState({
            userName: "",
            userEmail: "",
            userPassword: "",
            confirmPassword: ""
        })
    }

    // SUBMITTING FORM
    submitBtnClicked = (e) => {
        e.preventDefault();
        if(!this.state.userName){
            this.setState({hasError: true, errorMsg: "User name field should not be empty!"});
        }
        else if(!this.state.userName.match(/^[a-zA-Z]+$/)){
            this.setState({hasError: true, errorMsg: "User name should contains only characters!"});
        }
        else if(!this.state.userEmail) {
            this.setState({hasError: true, errorMsg: "E-mail address field should not be empty!"});
        }
        else if(!this.state.userEmail.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
            this.setState({hasError: true, errorMsg: "Please, enter valid e-mail address!"})
        }
        else if(!this.state.userPassword) {
            this.setState({hasError: true, errorMsg: "Password field should not be empty!"});
        }
        else if(!this.state.confirmPassword){
            this.setState({hasError: true, errorMsg: "Confirm password field should not be empty!"});
        }
        else if(this.state.userPassword.length < 10){
            this.setState({hasError: true, errorMsg: "Your password's length should be greater than 10!"});
        }
        else if (this.state.userPassword !== this.state.confirmPassword){
            this.setState({hasError: true, errorMsg: "Enterd password in password and confirm password does not match!"});
        }
        else{
            var data = {
                username: this.state.userName,
                email: this.state.userEmail,
                password: this.state.userPassword
            }
            axios.post('http://localhost:8000/users/signup', data)
            .then(response => {
                this.setState({noError: true});
                this.props.history.push('/signin');
                console.log(response);
                this.clearFields();
            }) 
            .catch(err => {
                console.log(err);
            })
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
                                            <h4 className="font-18 text-center">Register</h4>
                                            <p className="text-muted text-center mb-4">Sign up to continue to Readers Choice.</p>
                                            {
                                                this.state.hasError && 
                                                    <Alert color="danger">
                                                        {this.state.errorMsg}
                                                    </Alert>
                                            }
                                            {
                                                this.state.noError &&
                                                    <Alert color="success">
                                                        Signed Up Successfully! 
                                                    </Alert>
                                            }
                                            <Form className="background form-horizontal">
                                                <FormGroup className="background">
                                                    <Label for="userName">User Name</Label>
                                                    <Input onChange={(text) => {this.handleChange(text, "userName")}} value={this.state.userName} type="text" name="userName" id="userName" placeholder="Enter user name" />
                                                </FormGroup>
                                                 <FormGroup className="background">
                                                    <Label for="userEmail">E-mail</Label>
                                                    <Input onChange={(text) => {this.handleChange(text, "userEmail")}} value={this.state.userEmail} type="email" name="userEmail" id="userEmail" placeholder="Enter e-mail address" />
                                                </FormGroup>
                                                <FormGroup className="background">
                                                    <Label for="userPassword">Password</Label>
                                                    <Input onChange={(text) => {this.handleChange(text, "userPassword")}} value={this.state.userPassword} type="password" name="userPassword" id="userPassword" placeholder="Enter password" />
                                                </FormGroup>
                                                <FormGroup className="background">
                                                    <Label for="confirmPassword">Confirm Password</Label>
                                                    <Input onChange={(text) => {this.handleChange(text, "confirmPassword")}} value={this.state.confirmPassword} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm the entered password" />
                                                </FormGroup>
                                                <div className="background col-md-12 text-center">
                                                    <Button outline color="success" type="submit" onClick={this.submitBtnClicked}>Submit</Button>&nbsp;&nbsp;&nbsp;
                                                    <Button outline color="danger" type="cancel" onClick={this.canelBtnClicked}>Cancel</Button>
                                                </div>
                                                <Link to="/signin">Click Here!</Link> To Sign In.
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default withRouter(SignUp);
