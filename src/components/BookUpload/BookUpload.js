import React, { Component } from "react";
import { Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";
import './style.css';

class BookUpload extends Component 
{

    render() {
        return (
           <React.Fragment>
               <div className="wrapper">
                <div className="BookForm">
                        <Form style={{paddingLeft:"15%"}}>
                            <h1>Book Upload for review Form:</h1>
                            <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                <Label for="BookName" sm={1}>Book Name:</Label>
                                <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Input  id="BookName" name="BookName" placeholder="Enter Book Name" type="text"/></Col>
                            </FormGroup>
                            <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                <Label for="BookTitle" sm={1}>Book Title:</Label>
                                <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Input id="BookTitle" name="BookTitle" placeholder="Enter Book Title" type="text"/></Col>
                            </FormGroup>
                            <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                <Label for="AuthorName" sm={1}>Author Name:</Label>
                                <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Input id="AuthorName" name="AuthorName" placeholder="Enter Author Name" type="text"/></Col>
                            </FormGroup>
                            <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                <Label for="Publisher" sm={1}>Publisher:</Label>
                                <Col sm={8} style={{backgroundColor: "#FDF6F0"}}><Input id="Publisher" name="Publisher" placeholder="Publisher" type="text"/></Col>
                            </FormGroup>
                            <FormGroup row style={{backgroundColor: "#FDF6F0"}}>
                                <Label for="ReleaseDate"sm={1}>Date:</Label>
                                <Col sm={2} style={{backgroundColor: "#FDF6F0"}}><Input id="ReleaseDate" name="ReleaseDate" placeholder="Release Date" type="date"/></Col>
                                <Col sm={2} style={{backgroundColor: "#FDF6F0"}}><Label for="PosterUrl">Enter Book Poster Url:</Label></Col>
                                <Col sm={2} style={{backgroundColor: "#FDF6F0"}}><Input id="PosterUrl" name="PosterUrl" placeholder="PosterUrl" type="url"/></Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(BookUpload);
