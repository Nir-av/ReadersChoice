import React, { Component } from "react";
import {Col, Card, CardBody, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import {withRouter } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import './style.css';
import axios from "axios";
import Footer from '../Footer/Footer';
import Header from '../Header/header';

class BookUpload extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            bookTitle: "",
            authorName: "",
            publisher: "",
            releaseDate: "",
            synopsis: "",
            imageURL: "",
            bookCategory: "",
            errorMsg: "",
            hasError: false,
        }
    }

    handleChange = async (text, type) => {
        switch (type) {
            case 'bookTitle':
                await this.setState({ bookTitle: text.target.value })
                break
            case 'authorName':
                await this.setState({ authorName: text.target.value })
                break
            case 'publisher':
                await this.setState({ publisher: text.target.value })
                break
            case 'synopsis':
                await this.setState({ synopsis: text.target.value })
                break
            case 'imageURL':
                await this.setState({ imageURL: text.target.value })
                break
            case 'bookCategory':
                await this.setState({ bookCategory: text.target.value })
                break
            case 'releaseDate':
                await this.setState({ releaseDate: text.target.value })
                break
            default:
        }
    }

    clearField = () => {
        this.setState({
        bookTitle: "",
        authorName: "",
        publisher: "",
        releaseDate: "",
        synopsis: "",
        imageURL: "",
        bookCategory: "",
        cardElement:""
        });
    }

    handleToken = (token) => {
        var details = {
            token,
            amount: 10
        }

        axios.post("http://localhost:8000/payment", details)
            .then(response => {
                const {status} = response
                if(status === 200){
                    console.log(status);
                    if(!this.state.bookTitle){
                        this.setState({hasError: true, errorMsg: "Book Title field should not be empty!"});
                    }
                    else if(!this.state.authorName){
                        this.setState({hasError: true, errorMsg: "Author name field should not be empty!"});
                    }
                    else if(!this.state.publisher){
                        this.setState({hasError: true, errorMsg: "Publisher name field should not be empty!"});
                    }
                    else if(!this.state.synopsis){
                        this.setState({hasError: true, errorMsg: "Synopsis field should not be empty!"});
                    }
                    else if(!this.state.imageURL){
                        this.setState({hasError: true, errorMsg: "Image URL field should not be empty!"});
                    }
                    else if(!this.state.bookCategory){
                        this.setState({hasError: true, errorMsg: "Book category field should not be empty!"});
                    }
                    else if(!this.state.releaseDate){
                        this.setState({hasError: true, errorMsg: "Release date field should not be empty!"});
                    }
                    else {   
                        var data = {
                                title: this.state.bookTitle,
                                authorName: this.state.authorName,
                                publisher: this.state.publisher,
                                synopsis: this.state.synopsis,
                                imageURL: this.state.imageURL,
                                category: this.state.bookCategory,
                                release_date: this.state.releaseDate
                        }
                        axios.post('http://localhost:8000/books', data)
                            .then(response => {
                                this.props.history.push('/');
                                this.clearField();
                            })
                        }
                }
                else{
                    console.log(response);
                }
            });
    }

    render() {
        return (
           <React.Fragment>
            <Header/>
                <div style={{margin: "5%"}}>
                <h2 style={{color: "red", fontWeight: "bold"}}>
                    Disclaimer: This website do-not sell any product. 
                    The payment gateway is purely for educational and demonstration purposes only. 
                    If you are a visitor to website. Please do-not proceed to pay. 
                    Owners of this website will not be liable for any kind of transaction.
                </h2>
                </div>
                <Card>
                    <CardBody>
                    <div className="wrapper">
                        <div className="BookForm">
                                <Form style={{paddingLeft:"15%",paddingRight:"15%"}}>
                                    <h2 className="text-left">Book Upload for review Form:</h2>
                                    {
                                        this.state.hasError && 
                                            <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Alert color="danger">
                                                {this.state.errorMsg}
                                            </Alert></Col>
                                    }
                                    <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                        <Label for="bookTitle">Book Title:</Label>
                                        <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Input onChange={(text) => {this.handleChange(text, "bookTitle")}} value={this.state.bookTitle} id="bookTitle" name="bookTitle" placeholder="Enter Book Title" type="text"/></Col>
                                    </FormGroup>
                                    <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                        <Label for="authorName">Author Name:</Label>
                                        <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Input onChange={(text) => {this.handleChange(text, "authorName")}} value={this.state.authorName} id="authorName" name="authorName" placeholder="Enter Author Name" type="text"/></Col>
                                    </FormGroup>
                                    <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                        <Label for="publisher">Publisher:</Label>
                                        <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Input onChange={(text) => {this.handleChange(text, "publisher")}} value={this.state.publisher} id="publisher" name="publisher" placeholder="Enter Publisher Name" type="text"/></Col>
                                    </FormGroup>
                                    <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                        <Label for="synopsis">Synopsis:</Label>
                                        <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Input onChange={(text) => {this.handleChange(text, "synopsis")}} value={this.state.synopsis} id="synopsis" name="synopsis" placeholder="Enter Synopsis" type="text"/></Col>
                                    </FormGroup>
                                    <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                        <Label for="imageURL">Book Poster Url:</Label>
                                        <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Input onChange={(text) => {this.handleChange(text, "imageURL")}} value={this.state.imageURL} id="imageURL" name="imageURL" placeholder="Enter ImageURL" type="url"/></Col>
                                    </FormGroup>
                                    <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                        <Label for="bookCategory">Book Category:</Label>
                                        <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Input onChange={(text) => {this.handleChange(text, "bookCategory")}} value={this.state.bookCategory} id="bookCategory" name="bookCategory" placeholder="Enter Book's Category" type="url"/></Col>
                                    </FormGroup>
                                    <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                        <Label for="releaseDate">Date:</Label>
                                        <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Input onChange={(text) => {this.handleChange(text, "releaseDate")}} value={this.state.releaseDate} id="releaseDate" name="releaseDate" placeholder="Release Date" type="date"/></Col>
                                    </FormGroup>
                                    <StripeCheckout stripeKey="pk_test_51KjknCJ7Yex7v5ZEHmXAWKGmjgAb6puHMpRArspKUCPBRV49C8MoU1BwrqjIMwupHAITKC1t0fRz0X95Z3DPzzHs00BK7Etw68" token={this.handleToken} amount={10 * 100}>
                                        <Button style={{marginRight:"2%"}} type="submit">Submit</Button> 
                                    </StripeCheckout>
                                    <Button type="reset">Cancel</Button>

                                </Form>
                            </div>
                        </div>    
                    </CardBody>
                </Card>
            <Footer/>
            </React.Fragment>
        );
    }
}

export default withRouter(BookUpload);
