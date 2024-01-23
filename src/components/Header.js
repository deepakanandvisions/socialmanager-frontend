import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import logo from './../shortscreatorlogo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/"><img width="70" height="70" src={logo} alt='Shorts Creator' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        <NavLink to="/privacy" className="nav-link" activeClassName="active">Privacy Policy</NavLink>
                        <NavLink to="/terms" className="nav-link" activeClassName="active">Term Of Use</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
