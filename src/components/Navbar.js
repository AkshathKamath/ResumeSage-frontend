import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <NavbarBrand href="/" className="mx-4">
        ResumeSage
      </NavbarBrand>
      <NavbarBrand href="/summarize" className="fs-6 mx-10">
        Summarize
      </NavbarBrand>
      <NavbarBrand href="#home" className="fs-6">
        JD-Score
      </NavbarBrand>
    </Navbar>
  );
};

export default NavbarComponent;
