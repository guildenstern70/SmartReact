/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import './FixedMenu.css';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnimatedLogo from '../AnimatedLogo';

const FixedMenu: React.FC = () => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <AnimatedLogo width={'70px'} />
                <span className={'MenuTitle'}>SmartReact TS</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/anotherpage">
                        Another Page
                    </Nav.Link>
                    <NavDropdown title="Your Account" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default FixedMenu;
