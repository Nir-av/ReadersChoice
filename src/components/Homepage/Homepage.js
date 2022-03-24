import React from 'react';
import { withRouter } from "react-router-dom";
import './Homepage.css';
import {CardGroup,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap'
// import homeimg from '../../Images/Homeimg.jpg';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        // <body>
        //     <main>
        <React.Fragment>
            <div className='body'>
                <div className="homeimg">
                    <h1>A room without books is like a body without a soul.</h1>
                </div>
                <div className='homecontent'>
                    <div className='introduction'>
                        <h1>Introduction : </h1>
                        <p>Find and read books by seeing user reviews on the book, and keep track of the book you want to read. Be Part of the community of book lovers on Reader's Choice.</p>
                    </div>
                    <div className='featured'>
                        <h1>Our featured Books</h1>
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
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
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
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
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
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
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
    //         </main>
    //     </body>
    );
  }
}
export default withRouter(Homepage);
    

