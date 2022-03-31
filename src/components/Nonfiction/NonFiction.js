import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {CardBody,CardGroup,CardTitle,CardImg,CardText,Button,Card} from "reactstrap";
import Header from '../Header/header';
import Footer from '../Footer/Footer';

class NonFiction extends Component 
{
    constructor(props){
        super(props);
        this.state = {
            booksData: [],
            nonFictionData: [] 
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/books')
            .then(response => {
                let nFiction = "Non-Fiction";
                let Response = response.data.books;
                this.setState({booksData: Response});
                this.state.booksData.map(books => {
                   if(books.category == nFiction){
                        let nFData = books;
                        this.setState({nonFictionData: this.state.nonFictionData.concat(nFData)});
                   }
                });
            });
    }

    reviewBtnClicked = (book_id, e) => {
        e.preventDefault();
        this.props.history.push('/review/' + book_id);
    }

    render() {
        return (
           <React.Fragment>
            <Header/>
                <div className="list">
                    <h1>Non-Fiction Books</h1>
                    {
                        this.state.nonFictionData.map(book => (
                            <CardGroup style={{margin: "5%",borderRadius:"50px"}} key={book._id}>
                                <Card style={{display:"flex",flexDirection:"row",backgroundColor:"#BED7D1",boxShadow:"5px 10px #888888"}}>
                                    <CardImg alt="Card image cap" src={book.imageURL} style={{maxWidth:"500px",maxHeight:"550px"}}/>
                                    <CardBody style={{backgroundColor:"#BED7D1",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                        <CardTitle tag="h3">
                                            {book.title}
                                        </CardTitle>
                                        <CardTitle tag="h4">
                                        Author Name: {book.authorName}
                                        </CardTitle>
                                        <CardTitle tag="h5">
                                        Publisher: {book.publisher}
                                        </CardTitle>
                                        <CardTitle tag="h5">
                                        Release Date: {book.release_date}
                                        </CardTitle>
                                        <CardText>
                                            {book.synopsis}
                                        </CardText>
                                        <Button type="submit" onClick={(e) => this.reviewBtnClicked(book._id, e)}>
                                            Review
                                        </Button>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        ))
                    }
                </div>
            <Footer/>
            </React.Fragment>
        );
    }
}

export default withRouter(NonFiction);
