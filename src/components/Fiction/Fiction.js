import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {CardBody,CardGroup,CardTitle,CardImg,CardSubtitle,CardText,Button,Card} from "reactstrap";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from '../Header/header';

class Fiction extends Component 
{
    constructor(props){
        super(props);
        this.state = {
            booksData: [],
            fictionData: [] 
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/books')
            .then(response => {
                let Fiction = "Fiction";
                let Response = response.data.books;
                this.setState({booksData: Response});
                this.state.booksData.map(books => {
                   if(books.category == Fiction){
                        let FData = books;
                        this.setState({fictionData: this.state.fictionData.concat(FData)});
                   }
                });
            });
    }

    render() {
        return (
           <React.Fragment>
               <Header/>
                <div className="list">
                    <h1>Fiction Books</h1>
                    {
                        this.state.fictionData.map(book => (
                            <CardGroup style={{borderRadius:"50px",margin:"5%"}} key={book._id}>
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
                                        <Button type="submit">
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

export default withRouter(Fiction);
