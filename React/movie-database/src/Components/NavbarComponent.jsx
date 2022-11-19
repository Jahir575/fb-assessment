import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar bg='light' sticky='top'>
            <Container>
                <Navbar.Brand>Movie Database</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent