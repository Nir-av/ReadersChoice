import React,{Component} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Label,FormGroup,Col,Input,Button,Form,Row } from "reactstrap";
import { withRouter } from "react-router-dom";
import './style.css';
class Footer extends Component 
{
    render() {
  return (
    <MDBFooter color="#F5C6AA" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" style={{background:"#F5C6AA",paddingLeft:"10%",color:"black",paddingTop:"1%"}}>
            <h5 className="title">Stay Connected</h5>
            <p style={{background:"#F5C6AA"}}>
                <Form style={{background:"#F5C6AA"}}>
                    <FormGroup row style={{background:"#F5C6AA"}}>
                            <Label for="exampleEmail" sm={1}>
                            Email
                            </Label>
                            <Col sm={10} style={{background:"#F5C6AA"}}><Input id="exampleEmail" name="email" placeholder="Email" type="email"/></Col> 
                            <Row style={{background:"#F5C6AA"}}><Button>Subscribe!</Button></Row>
                                 
                    </FormGroup>
                </Form>
            </p>
          </MDBCol>
          
          <MDBCol md="6" style={{background:"#F5C6AA",paddingTop:"2%",paddingLeft:"15%",color:"black"}}>
            <h5 className="title">Quick Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!" style={{color:"black"}}>Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{color:"black"}}>Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{color:"black"}}>Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{color:"black"}}>Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        <MDBRow style={{background:"#F5C6AA", paddingLeft:"10%",color:"black", paddingBottom:"1%"}}>
            <h5 className="title">Social Media</h5>
            <a href="#!" style={{color:"black"}}>Link 2</a>
            <a href="#!" style={{color:"black"}}>Link 2</a>
            <a href="#!" style={{color:"black"}}>Link 2</a>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3" style={{background:"#BED7D1"}} >
        <MDBContainer fluid style={{background:"#BED7D1",color:"black"}}>
          &copy; {new Date().getFullYear()} Copyright: <a href="#" style={{color:"black"}}> ReadersChoice.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
    }
}

export default withRouter(Footer);