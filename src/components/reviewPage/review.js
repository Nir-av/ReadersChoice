import React from 'react';
import { withRouter} from "react-router-dom";
import {CardGroup, Alert, CardBody, CardTitle, Card, CardImg, CardText, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Input,Label,FormGroup,Col} from 'reactstrap';
import './review.css';
import axios from 'axios'; 
import Header from '../Header/header';
import Footer from '../Footer/Footer';

class Review extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            booksData: [],
            bookReviews: [],
            filteredReview: [],
            book: [],
            userName: "",
            addReview: "",
            hasError: false,
            errorMsg: ""
        }
    }

    componentDidMount() {

        let book_id = this.props.match.params.book_id;

        axios.get('https://readerschoice-api.herokuapp.com/books')
            .then(response => {
                let Response = response.data.books;
                this.setState({booksData: Response});
        });
        
        axios.get('https://readerschoice-api.herokuapp.com/booksReview')
            .then(response => {
                let Reviews = response.data.reviews;
                this.setState({bookReviews: Reviews});
                this.state.bookReviews.map(review => {
                    if (review.bookId === book_id) {
                        this.setState({filteredReview: this.state.filteredReview.concat(review)});
                    }
                    return review;
                })  
        });
        
        axios.get('https://readerschoice-api.herokuapp.com/books/' + book_id)
            .then(response => {
                let Response = response.data.book;
                this.setState({book: Response});
        });
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
                bookId: this.props.match.params.book_id,
                addReview: this.state.addReview
            }
            console.log(data);
            axios.post('https://readerschoice-api.herokuapp.com/booksReview', data)
                .then(response => window.location.reload(true))
        }
    }

    reviewBtnClicked = (book_id, e) => {
        e.preventDefault();
        console.log("Clicked!", book_id)
        this.props.history.push('/review/' + book_id);
        window.location.reload(true);
    }

    render() {
        return (  
        <React.Fragment>
        <Header/>
            <div className='container'>
                <div className ='part1'>
                    <div className='bookimage'>
                        <img src={this.state.book.imageURL} alt='book'/>
                    </div>
                    <div className='synopsis'>
                        <h1>{this.state.book.title}</h1>
                        <p>{this.state.book.synopsis}</p>
                    </div>
                </div>

                <div className='part-2'>
                    <div className='info'>
                        <h4>Author Name: {this.state.book.authorName}</h4>
                        <h4>Publisher: {this.state.book.publisher}</h4>
                        <h4>Date of release: {this.state.book.release_date}</h4>
                    </div>

                    <div className='userreviews' style={{marginTop: "10%"}}>
                        <h3> Add reviews </h3>
                        <div>
                            {
                                this.state.hasError && 
                                    <Alert color="danger">
                                        {this.state.errorMsg}
                                    </Alert>
                            }
                            <FormGroup row>
                                <Label for="userName" sm={2}>Username:</Label>
                                <Col sm={10}><Input onChange={(text) => {this.handleChange(text, "userName")}} value={this.state.userName}  id="userName" name="userName" placeholder="Enter your user name" type="text"/></Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="addReview" sm={2}>Add Review:</Label>
                                <Col sm={10}><Input onChange={(text) => {this.handleChange(text, "addReview")}} value={this.state.addReview}  id="addReview" name="addReview" placeholder="Enter review" type="textarea"/></Col>
                            </FormGroup>
                            <Button style={{marginRight: "2%"}} type='submit' onClick={this.submitBtnClicked}>Submit</Button>
                            <Button type='cancel'>Cancel</Button>
                        </div>
                    </div>

                    <div className='reviews' style={{marginTop: "10%"}}>
                        <h3>User Reviews</h3>
                        <ListGroup style={{borderRadius:"15px"}}>
                            {
                                this.state.filteredReview.map(reviews => (
                                <ListGroupItem style={{marginBottom:"1%",borderRadius:"15px"}} key={reviews._id}>
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
                    {/* <div className ='suggestedbooks'> */}
                    <CardGroup>
                        {
                            this.state.booksData.slice(3,6).map(books => (
                                    <Card style={{display:"flex",flexDirection:"column",margin:"1%"}} key={books._id}>
                                        <CardImg alt="Card image cap" src={books.imageURL} top width="100%" height="50%" style={{maxWidth:"500px",maxHeight:"550px"}}/>
                                        <CardBody style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
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
                                            <Button type="submit" onClick={(e) => this.reviewBtnClicked(books._id, e)}>
                                                Review
                                            </Button>
                                        </CardBody>
                                    </Card>
                                
                            ))
                        }
                    </CardGroup>
                    {/* </div> */}
                </div>
            </div>
        <Footer/>
        </React.Fragment>
        );
    }
}
export default withRouter(Review);
    

