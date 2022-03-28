import React from "react";
import { Col, Container, Row, Form, FormGroup,Label,Input } from "reactstrap";
import { withRouter } from "react-router-dom";

class Footer extends React.Component {
    
    render() {
      return (
          <Footer color="blue" className="font-small pt-4 mt-4">
            <Container fluid className="text-center text-md-left">
            <Row>
                <Col md="6">
                <h5 className="title">Stay Connected</h5>
                <p>
                  <Form inline>
                      <FormGroup>
                          <Label
                          for="exampleEmail"
                          hidden
                          >
                          Email
                          </Label>
                          <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="Email"
                          type="email"
                          />
                      </FormGroup>
                  </Form>
                </p>
                </Col>
                <Col md="6">
                <h5 className="title">Links</h5>
                <ul>
                    <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                    </li>
                    <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                    </li>
                    <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                    </li>
                    <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                    </li>
                </ul>
                </Col>
            </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
            <Container fluid>
                &copy; {new Date().getFullYear()} Copyright: readerschoice
            </Container>
            </div>
        </Footer>
      );
    }
  }
  export default withRouter(Footer);
