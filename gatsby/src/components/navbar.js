import React from "react"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Navbar bg="primary" variant="dark" expand="lg" style={{ zIndex: 100 }}>
                <Container>
                    <Navbar.Brand href="#home">Association X</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Accueil</Nav.Link>
                            <Nav.Link href="#donation">Actualités</Nav.Link>
                            <Nav.Link href="#donation">&Eacute;vénements</Nav.Link>
                            <NavDropdown title="L'association" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/history/">Histoire</NavDropdown.Item>
                                <NavDropdown.Item href="/orga">Organigramme</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Adhésion</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.3">&Agrave; propos</NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link href="#donation">Donation</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
    
}