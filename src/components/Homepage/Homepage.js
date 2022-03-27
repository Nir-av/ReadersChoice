import React from 'react';
import { withRouter, Link } from "react-router-dom";
import './Homepage.css';
import {CardGroup,Card,CardImg,CardBody,CardTitle,CardText,Button,Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,Input
    } from 'reactstrap'
import RcLogo from '../../Images/rcLogo.png';
import axios from 'axios';
class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        bookdata: [],
        isOpen: false
    };
  }

  componentDidMount() {

    axios.get('http://localhost:8000/books')
        .then(response => {
            let Response = response.data.books;
            this.setState({bookdata: Response});
        });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <React.Fragment>
        <Navbar light expand="md" style={{backgroundColor:'#F5C6AA'}} >
          <Link to="/" className="logo"><img className="logo" src={RcLogo} height="80" style={{borderRadius:'1em'}} alt="rcLogo" /></Link>
          <NavbarToggler onClick={this.toggle}  />
            <Collapse className="justify-content-end"style={{backgroundColor:'#F5C6AA'}}  isOpen={this.state.isOpen} navbar>
              <Nav navbar style={{display: "block ruby"}}>
                <NavItem>
                  <NavLink href="/components/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Upload</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Category
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Non-Fiction
                    </DropdownItem>
                    <DropdownItem>
                      Fiction
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Children
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Login | Signup</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
        <div className='body'>
            <div className="homeimg">
                <form className='search'>
                    <Input style={{width: "40%"}} type="search" placeholder="Search" aria-label="Search"/>&nbsp;&nbsp;
                    <Button type="submit">Search</Button>
                </form>
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
                    {
                      this.state.bookdata.slice(0,3).map(books => (
                        <Card key={books._id}>
                            <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle  tag="h3">
                              {books.title}
                            </CardTitle>
                            <CardTitle tag="h4">
                              Author: {books.authorName}
                            </CardTitle>
                            <CardTitle tag="h5">
                              Publisher: {books.publisher}
                            </CardTitle>
                            <CardText>
                                {books.synopsis}
                            </CardText>
                            <Button>
                                Button
                            </Button>
                            </CardBody>
                        </Card>
                        ))
                    }
                    </CardGroup>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Homepage);
    

