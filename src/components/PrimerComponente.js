import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export const PrimerComponente = () => {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>FENAMAC</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      <br />

      <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1'>Navbar</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
