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
      <Navbar variant="dark" style={{ background: "linear-gradient(0deg, rgba(89,52,59,1) 0%, rgba(174,54,63,1) 100%)",
      minheight: '84px',
    }}>
        <Container>
        <MDBNavbarBrand href='#'>
          <img
            src={logo}
            height= '60px'
            alt='logo'
          />
        </MDBNavbarBrand>
          <Navbar.Brand href="https://www.fenamacajedrez.com/" 
                        style={{
                          fontSize: '40px',
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

