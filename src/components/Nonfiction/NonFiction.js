import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {CardBody,CardGroup,CardTitle,CardImg,CardSubtitle,CardText,Button,Card} from "reactstrap";
import './style.css'
class NonFiction extends Component 
{
    render() {
        return (
           <React.Fragment>
                <div className="list">
                    <h1>Non-Fiction Books</h1>
                    <CardGroup>
                        <Card style={{display:"flex",flexDirection:"row"}}>
                            <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/256/186"
                            top
                            width="1%"
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
                    </CardGroup>
                    <CardGroup>
                        <Card style={{display:"flex",flexDirection:"row"}}>
                            <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/256/186"
                            top
                            width="1%"
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
                    </CardGroup>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(NonFiction);
