import React, { useState } from "react";
import Link from 'next/link'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Nav,
  Button,
  NavItem,
} from "reactstrap";
import { navbarItems } from "../constants/navbarItems";

const Page = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='height-100'>
      <Navbar color="dark" dark expand="md" className="p-3">
        <NavbarBrand className="fw-bold fs-3">Nesh Amlani</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="mr-auto" navbar>
            {navbarItems.map((item) => (
              <NavItem key={item.path}>
                <Link href={item.path} passHref>
                  <Button
                    type="button"
                    className="btn btn-dark"
                  >
                    {item.title}
                  </Button>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
      <div className="w-100 bg-dark text-white container-height">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
};

export default Page;