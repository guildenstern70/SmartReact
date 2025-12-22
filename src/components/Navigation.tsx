/*
 * Copyright (c) Alessio Saltarin 2019-2025
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    const location = useLocation();

    const menuStyleBold = {
        color: "white",
        fontWeight: "bold",
    };

    const linkStyle = (path: string) => ({
        // active link: light gray, inactive: black
        color: location.pathname === path ? '#d3d3d3' : '#000000',
    });

    return (
        <>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand style={menuStyleBold} href="/index">Smart React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={location.pathname} className="me-auto">
                            <Nav.Link href="/" style={linkStyle('/')}>Home</Nav.Link>
                            <Nav.Link href="/other" style={linkStyle('/other')}>Other</Nav.Link>
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

