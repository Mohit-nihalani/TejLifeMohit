import React from 'react';
import {Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import '../App.css';

const Navigation = () => {
  return (
      <>
        <Navbar className="bg-color fixed-top" expand="lg">
      <Container>
        <Navbar.Brand className="text-light" href="#home">Big Spaceship</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  )
}

export default Navigation;