/*
 * Copyright (c) Alessio Saltarin 2019-2025
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React  from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    const location = useLocation();
    const isHomeActive = location.pathname === '/';
    const isOtherActive = location.pathname === '/other';
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/index">Smart React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link active={isHomeActive} href="/">Home</Nav.Link>
                            <Nav.Link active={isOtherActive} href="/other">Other</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet/>
            </section>
        </>
    );
}

export default Navigation;

