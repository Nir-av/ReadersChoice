import React from 'react';
import { withRouter, Link } from "react-router-dom";
import {CardGroup,CardBody,CardTitle,Card,CardImg,CardSubtitle,CardText,Button,
Accordion,AccordionItem,AccordionHeader,Input,Label,FormGroup,Col} from 'reactstrap';
import './review.css';
import bookImg from '../../Images/book.png';

 

class Review extends React.Component {

  
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
                <CardGroup>
                        <Card>
                            <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                book1
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                fiction
                            </CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </CardText>
                            <Button>
                                Button
                            </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                book2
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                nonfiction
                            </CardSubtitle>
                            <CardText>
                                This card has supporting text below as a natural lead-in to additional content.
                            </CardText>
                            <Button>
                                Button
                            </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                book3
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                children
                            </CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                            </CardText>
                            <Button>
                                Button
                            </Button>
                            </CardBody>
                        </Card>
                </CardGroup>
            </div>
        </div>
    </div>
        
      </React.Fragment>
    );
  }
}
export default withRouter(Review);
    

