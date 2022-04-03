import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,Button } from 'reactstrap';

import { Link, withRouter } from "react-router-dom";
import RcLogo from '../../Images/rcLogo.png';

class Header extends React.Component {
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
        <Navbar light expand="md" style={{backgroundColor:'#F5C6AA'}}>
          <Link to="/" className="logo"><img className="logo" src={RcLogo} height="80" style={{borderRadius:'1em'}} alt="rcLogo" /></Link>
          <NavbarToggler onClick={this.toggle} />
            <Collapse className="justify-content-end" style={{backgroundColor:'#F5C6AA'}}  isOpen={this.state.isOpen} navbar>
              <Nav navbar style={{display: "block ruby"}}>
              <NavItem>
                  <NavLink href="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/book_upload">Upload</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Category
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>
                    <NavLink href="/children">Childrern</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href="/fiction">Fiction</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href="/non_fiction">Non-Fiction</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/signin">Login | Signup</NavLink>
                </NavItem>
                  <Input className="mr-sm-2" style={{width: "30%"}} type="search" placeholder="Search" aria-label="Search"/>&nbsp;&nbsp;
                  <Button className="btn my-2 my-sm-0"   type="submit">Search</Button>
              </Nav>
            </Collapse>
        </Navbar>
      
    );
  }
}
export default withRouter(Header);