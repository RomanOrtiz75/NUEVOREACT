import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../components/media/Logofenamac.png'
import {
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export const PrimerComponente = () => {
  return (
    <>
      <Navbar variant="dark" style={{ background: "linear-gradient(180deg, rgba(172, 54, 61,1) 35%, rgba(95,52,52,1) 100%)" }}>
        <Container>
        <MDBNavbarBrand href='#'>
          <img
            src={logo}
            height= '80px'
            alt='logo'
          />
        </MDBNavbarBrand>
          <Navbar.Brand href="https://www.fenamacajedrez.com/" 
                        style={{
                          fontSize: '50px',
                          fontFamily: 'Roboto,sans-serif',
                          fontWeight: 'bold',
                      }}
          >FENAMAC</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#https://www.fenamacajedrez.com/" style={{
              fontFamily: 'Roboto,sans-serif',

            }}
            >PAGINA PRINCIPAL</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

