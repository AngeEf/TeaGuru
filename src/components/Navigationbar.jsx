import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navigationbar({ currUser, logOutHandler }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src="/images/logo.png" alt="logo" style={{ width: 150, height: 150 }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/" style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: 20}}>Home</NavLink>

            <span className="nav-link">
              {!currUser.id ? <NavLink className="nav-link" to="/user/registration">registration</NavLink> : currUser.name }
            </span>

            {currUser.id ? (
              <NavLink className="nav-link" onClick={logOutHandler}>Logout</NavLink>
            ) : (
              <NavLink className="nav-link" to="/user/authorization">authorization</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
