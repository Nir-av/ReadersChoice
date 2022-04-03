import React,{Component} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FormGroup,Col,Input,Button,Form } from "reactstrap";
import { withRouter, Link } from "react-router-dom";
import './footer.css';

class Footer extends Component 
{
  constructor(props){
    super(props);
    this.state={
      email:""
    }
  }
  handleChange = async (text, type) => {
    switch (type) {
        case 'email':
            await this.setState({ email: text.target.value })
            break
        default:
    }
  }
  subscribeBtnClicked=(e)=>{
    e.preventDefault();
    if(!this.state.email)
    {
      alert("Please Enter Email ID!!");
    }
    else
    {
      alert("Thanks for subscribing our Readers Choice. Visit Again!!");
      this.setState({email:""});
    }
  }
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
                          <Col sm={13} style={{background:"#F5C6AA"}}><Input id="email" onChange={(text) => {this.handleChange(text, "email")}} value={this.state.email} name="email" placeholder="Email" type="email"/></Col> 
                          <Button style={{backgroundColor:"black"}} onClick={this.subscribeBtnClicked}>Subscribe!</Button>    
                  </FormGroup>
              </Form>
          </MDBCol>
          <MDBCol md="4" style={{background:"#F5C6AA",paddingTop:"1%",paddingLeft:"7%",color:"black"}}>
            <h5 className="title">Quick Links</h5>
            <ul>
              <li className="list-unstyled">
                <Link to="/home" style={{color:"black"}}>Home</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/book_upload" style={{color:"black"}}>Book Upload</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/children" style={{color:"black"}}>Children</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/non_fiction" style={{color:"black"}}>Fiction</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/fiction" style={{color:"black"}}>Non-Fiction</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/signup" style={{color:"black"}}>Login | Sign-Up</Link>
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
          &copy; {new Date().getFullYear()} Copyright: <Link to="/" style={{color:"black"}}> ReadersChoice </Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
    }
}

export default withRouter(Footer);