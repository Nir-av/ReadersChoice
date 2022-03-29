import React from 'react';
import { withRouter} from "react-router-dom";
import {CardGroup,CardBody,CardTitle,Card,CardImg,CardSubtitle,CardText,Button,
Accordion,AccordionItem,AccordionHeader,Input,Label,FormGroup,Col} from 'reactstrap';
import './review.css';
import bookImg from '../../Images/book.png';
import axios from 'axios'; 

class Review extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            booksData: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/books')
            .then(response => {
                let Response = response.data.books;
                this.setState({booksData: Response});
            })
        
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

                <div className='userreviews'>
                    <h3> Add reviews </h3>
                    <div>
                        <FormGroup row>
                        <Label
                        for="username"
                        sm={2}
                        >
                        Username:
                        </Label>
                        <Col sm={10}>
                        <Input
                            id="username"
                            name="username"
                            placeholder="enter your username "
                            type="text"
                        />
                        </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label
                            for="review"
                            sm={2}
                            >
                            Add Review
                            </Label>
                            <Col sm={10}>
                            <Input
                                id="addreview"
                                name="addreview"
                                type="textarea"
                            />
                            </Col>
                        </FormGroup>
                        <Button>
                            Submit
                        </Button>
                    </div>
                </div>

                <div className='reviews'>
                    <Accordion
                        open="1"
                        toggle={function noRefCheck(){}}
                    >
                        <AccordionItem>
                        <AccordionHeader targetId="1">
                            Accordion Item 1
                        </AccordionHeader>
                        <AccordionItem accordionid="1">
                            <strong>
                            This is the first item's accordion body.
                            </strong>
                            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                            <code>
                            .accordion-body
                            </code>
                            , though the transition does limit overflow.
                        </AccordionItem>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="2">
                            Accordion Item 2
                        </AccordionHeader>
                        <AccordionItem accordionid="2">
                            <strong>
                            This is the second item's accordion body.
                            </strong>
                            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                            <code>
                            .accordion-body
                            </code>
                            , though the transition does limit overflow.
                        </AccordionItem>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="3">
                            Accordion Item 3
                        </AccordionHeader>
                        <AccordionItem accordionid="3">
                            <strong>
                            This is the third item's accordion body.
                            </strong>
                            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                            <code>
                            .accordion-body
                            </code>
                            , though the transition does limit overflow.
                        </AccordionItem>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>

            <div className='part-3'>
                <div className ='suggestedbooks'>
                    <h3>Suggestedbooks</h3>
                    {
                        this.state.booksData.slice(3,7).map(books => (
                            <CardGroup>
                                <Card key={books._id}>
                                    <CardImg
                                    alt="Card image cap"
                                    src={books.imageURL}
                                    top
                                    width="100%"
                                    />
                                    <CardBody>
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
                                        <Button>
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
    

