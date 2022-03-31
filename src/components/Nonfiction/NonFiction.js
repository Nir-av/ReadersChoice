import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {CardBody,CardGroup,CardTitle,CardImg,CardText,Button,Card} from "reactstrap";
import './style.css'
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

    render() {
        return (
           <React.Fragment>
                <div className="list">
                    <h1>Non-Fiction Books</h1>
                    {
                        this.state.nonFictionData.map(book => (
                            <CardGroup style={{marginBottom: "5%",borderRadius:"50px"}} key={book._id}>
                                <Card style={{display:"flex",flexDirection:"row",backgroundColor:"#FDF6F0",boxShadow:"5px 10px #888888"}}>
                                    <CardImg alt="Card image cap" src={book.imageURL} style={{maxWidth:"500px",maxHeight:"550px"}}/>
                                    <CardBody style={{backgroundColor:"#FDF6F0",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
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
                                        <Button type="submit">
                                            Review
                                        </Button>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        ))
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(NonFiction);
