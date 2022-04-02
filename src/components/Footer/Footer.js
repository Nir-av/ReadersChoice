import React,{Component} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FormGroup,Col,Input,Button,Form,Row } from "reactstrap";
import { withRouter } from "react-router-dom";
import './footer.css';

class Footer extends Component 
{
    render() {
  return (
    <MDBFooter color="#F5C6AA" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4" style={{background:"#F5C6AA",paddingLeft:"10%",color:"black",paddingTop:"1%"}}>
            <h5 className="title">About us</h5>
            
            <p>Reader's Choice will accomplish its goals through consistency, relevancy, and resourcefulness.Reader's Choice will consistently post relevant content with the steeled resolve needed to navigate genre wars and unite the fan of serious literary criticism with the fan of listicles. Regular columns combined with longreads and special features distinguish BBB as a destination for aspiring book bloggers, writers, and readers who just want a more vivid and realized relationship to books.</p>
          </MDBCol>
          <MDBCol style={{background:"#F5C6AA", paddingLeft:"5%",color:"black", paddingTop:"1%"}}>
            <h5 className="title">Stay Connected</h5>
              <Form style={{background:"#F5C6AA"}}>
                  <FormGroup row style={{background:"#F5C6AA"}}>
                          {/* <Label for="exampleEmail" sm={1}>
                          Email
                          </Label> */}
                          <Col sm={13} style={{background:"#F5C6AA"}}><Input id="exampleEmail" name="email" placeholder="Email" type="email"/></Col> 
                          <Button style={{backgroundColor:"black"}}>Subscribe!</Button>    
                  </FormGroup>
              </Form>
          </MDBCol>
          <MDBCol md="4" style={{background:"#F5C6AA",paddingTop:"1%",paddingLeft:"7%",color:"black"}}>
            <h5 className="title">Quick Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/home" style={{color:"black"}}>Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/book_upload" style={{color:"black"}}>Book Upload</a>
              </li>
              <li className="list-unstyled">
                <a href="/children" style={{color:"black"}}>Children</a>
              </li>
              <li className="list-unstyled">
                <a href="/non_fiction" style={{color:"black"}}>Fiction</a>
              </li>
              <li className="list-unstyled">
                <a href="/fiction" style={{color:"black"}}>Non-Fiction</a>
              </li>
              <li className="list-unstyled">
                <a href="/signup" style={{color:"black"}}>Login | Sign-Up</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" style={{background:"#F5C6AA",paddingTop:"2%",paddingLeft:"15%",color:"black"}}>

          </MDBCol>
          <MDBCol style={{background:"#F5C6AA", paddingLeft:"5%",color:"black", paddingBottom:"1%"}}>
            <h5 className="title">Social Media</h5>
            <a href="https://www.facebook.com/" style={{color:"black",paddingLeft:"2%"}}>Facebook</a>
            <a href="https://www.instagram.com/" style={{color:"black",paddingLeft:"2%"}}>Instagram</a>
            <a href="https://www.twitter.com/" style={{color:"black",paddingLeft:"2%"}}>Twitter</a>
          </MDBCol>

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