import React from 'react';
import { withRouter} from "react-router-dom";
import {CardGroup, Alert, CardBody, CardTitle, Card, CardImg, CardText, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Input,Label,FormGroup,Col} from 'reactstrap';
import './review.css';
import bookImg from '../../Images/book.png';
import axios from 'axios'; 

class Review extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            booksData: [],
            bookreviews: [],
            userName: "",
            addReview: "",
            hasError: false,
            errorMsg: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/books')
            .then(response => {
                let Response = response.data.books;
                this.setState({booksData: Response});
            });
        
        axios.get('http://localhost:8000/booksReview')
            .then(response => {
                let Reviews = response.data.reviews;
                this.setState({bookreviews: Reviews})
            })
        
    }

    handleChange = async (text, type) => {
        switch (type) {
            case 'userName':
                await this.setState({ userName: text.target.value })
                break
            case 'addReview':
                await this.setState({ addReview: text.target.value })
                break
            default:
        }
    }
    
    submitBtnClicked = (e) => {
        e.preventDefault();
        if(!this.state.userName){
            this.setState({hasError: true, errorMsg: "User name field should not be empty!"});
        }
        else if(!this.state.addReview){
            this.setState({hasError: true, errorMsg: "Review field should not be empty!"});
        }
        else{
            var data = {
                userName: this.state.userName,
                addReview: this.state.addReview
            }
            console.log(data);
            axios.post('http://localhost:8000/booksReview', data)
                .then(response => console.log(response))
        }
    }

    render() {
        return (  
        <React.Fragment>
            <div className='container'>
                <div className ='part1'>
                    <div className='bookimage'>
                        <img src={bookImg} alt='book'/>
                    </div>
                    <div className='synopsis'>
                        <h1>Synopsis</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc. Augue neque gravida in fermentum et sollicitudin ac orci. Posuere morbi leo urna molestie at elementum eu facilisis sed. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Tincidunt lobortis feugiat vivamus at. Odio euismod lacinia at quis risus sed vulputate odio ut. Dolor purus non enim praesent elementum facilisis leo. Donec adipiscing tristique risus nec feugiat. Elit sed vulputate mi sit amet mauris. Ultricies lacus sed turpis tincidunt id. Eu non diam phasellus vestibulum lorem sed risus ultricies. Eros in cursus turpis massa tincidunt dui ut. Elit ullamcorper dignissim cras tincidunt lobortis. Egestas maecenas pharetra convallis posuere morbi leo.</p>
                    </div>
                </div>

                <div className='part-2'>
                    <div className='info'>
                        <h2>Rating</h2>
                        <h2>Author Name</h2>
                        <h2>Publisher</h2>
                        <h2>Date of release</h2>

                    </div>

                    <div className='userreviews' style={{margin: "5% auto",padding:'20px',border:'2px solid black',backgroundColor:'cadetblue'}}>
                        <h3 style={{fontWeight: "700",textAlign: "center",marginBottom: "4%"}}> Add reviews </h3>
                        <div className='reviewForm' style={{backgroundColor:'cadetblue'}}>
                            {
                                this.state.hasError && 
                                    <Alert color="danger">
                                        {this.state.errorMsg}
                                    </Alert>
                            }
                            <FormGroup row>
                                <Label for="userName" sm={2} style={{fontWeight:'500'}}>Username:</Label>
                                <Col sm={10}><Input onChange={(text) => {this.handleChange(text, "userName")}} value={this.state.userName}  id="userName" name="userName" placeholder="Enter your user name" type="text"/></Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="addReview" sm={2} style={{fontWeight:'500'}}>Add Review:</Label>
                                <Col sm={10}><Input onChange={(text) => {this.handleChange(text, "addReview")}} value={this.state.addReview}  id="addReview" name="addReview" placeholder="Enter review" type="textarea"/></Col>
                            </FormGroup>
                            <Button style={{marginRight: "2%",backgroundColor:'black',color:'whitesmoke'}} type='submit' onClick={this.submitBtnClicked}>Submit</Button>
                            <Button type='cancel' style={{backgroundColor:'black',color:'whitesmoke'}}>Cancel</Button>
                        </div>
                    </div>

                    <div className='reviews' style={{marginTop: "10%"}}>
                        <h3>User Reviews</h3>
                        <ListGroup>
                            {
                                this.state.bookreviews.map(reviews => (
                                <ListGroupItem key={reviews._id}>
                                    <ListGroupItemHeading>
                                        {reviews.userName}
                                    </ListGroupItemHeading>
                                    <ListGroupItemText>
                                        {reviews.addReview}
                                    </ListGroupItemText>
                                </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </div>

                <div className='part-3' style={{marginTop: "10%"}}>
                <h2>Suggestedbooks</h2>
                    <div className ='suggestedbooks'>
                        {
                            this.state.booksData.slice(3,6).map(books => (
                                <CardGroup key={books._id}>
                                    <Card style={{display:"flex",flexDirection:"row",marginBottom:"20px" ,border:"5px solid black",boxShadow:"5px 10px"}}>
                                        <CardImg alt="Card image cap" src={books.imageURL} top width="100%" style={{maxWidth:"250px",maxHeight:"350px" }}/>
                                        <CardBody style={{display:"flex",flexDirection:"column",justifyContent:"space-between" }}>
                                            <CardTitle tag="h3">
                                                {books.title}
                                            </CardTitle>
                                            <CardTitle tag="h4">
                                            Author Name: {books.authorName}
                                            </CardTitle>
                                            <CardTitle tag="h5">
                                            Publisher: {books.publisher}
                                            </CardTitle>
                                            <CardTitle tag="h6">
                                            Release Date: {books.release_date}
                                            </CardTitle>
                                            <CardText>
                                                {books.synopsis}
                                            </CardText>
                                            <Button style={{width:"30%"}}>
                                                Review
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </CardGroup>
                            ))
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}
export default withRouter(Review);
    

