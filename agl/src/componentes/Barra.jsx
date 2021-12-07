import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Barra() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setShow(false);
    }
  }, []);

  const salir = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand={show}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand hidden={show} href="#"> <i class="fas fa-user-tie"></i> Bienvenido: {sessionStorage.getItem('nombre')}</Navbar.Brand>
          <Navbar.Brand hidden={show} href="#" onClick={() =>salir()} to='/' > <i class="fas fa-user-times"></i> Salir </Navbar.Brand>

          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"> Opciones </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body> <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown title="Registro" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/RegistrarServicio">
                                   
                    <i class="fas fa-car"></i>
                    Registrar Servicio
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/RegistrarConductor">
                    <i class="fas fa-user-plus"></i>
                    Registar Conductor
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Reportes" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/VerServicios">
                    <i class="far fa-clipboard"></i>
                    Ver Servicios
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/listarConductores">
                    <i class="fas fa-th-list"></i> Ver Conductor
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
