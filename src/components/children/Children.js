import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {CardBody,CardGroup,CardTitle,CardImg,CardSubtitle,CardText,Button,Card} from "reactstrap";
import axios from "axios";
import Header from '../Header/header';
import Footer from '../Footer/Footer';
class Children extends Component 
{
    constructor(props){
        super(props);
        this.state = {
            booksData: [],
            childrenData: [] 
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/books')
            .then(response => {
                let children = "Children";
                let Response = response.data.books;
                this.setState({booksData: Response});
                this.state.booksData.map(books => {
                   if(books.category === children){
                        let childrenD = books;
                        this.setState({childrenData: this.state.childrenData.concat(childrenD)});
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
                    <h1>Children Books</h1>
                    {
                        this.state.childrenData.map(book => (
                            <CardGroup style={{margin: "5%",borderRadius:"50px"}} key={book._id}>
                                <Card style={{display:"flex",flexDirection:"row",backgroundColor:"#BED7D1",boxShadow:"5px 10px #888888"}}>
                                    <CardImg
                                    alt="Card image cap"
                                    src={book.imageURL}
                                    top
                                    width="100%"
                                    style={{maxWidth:"500px",maxHeight:"550px"}}
                                    />
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

export default withRouter(Children);
