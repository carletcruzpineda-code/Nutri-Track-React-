import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-success text-white py-4 mt-5">
      <Container>
        <Row>
          {/* Marca y eslogan */}
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5>NutriTrack</h5>
            <p className="mb-0">Empoderando tu salud, un paso a la vez.</p>
          </Col>

          {/* Redes sociales y copyright */}
          <Col md={6} className="text-center text-md-end">
            <div className="mb-2 d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>

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
