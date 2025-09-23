import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-success text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5>NutriTrack</h5>
            <p className="mb-0">Empoderando tu salud, un paso a la vez.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} NutriTrack. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;