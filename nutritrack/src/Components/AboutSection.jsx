import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BookOpen, Target, Eye } from "lucide-react";
import "../Styles/AboutSection.css"; // ✅ Importa tu CSS

function AboutSection() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="g-4">
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#3b82f6",
                }}
              >
                <BookOpen size={28} color="#fff" />
              </div>
              <h5 className="fw-bold">Acerca de Nosotros</h5>
              <p className="text-muted">
                NutriTrack nace de la pasión por democratizar el acceso a una alimentación saludable...
              </p>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                }}
              >
                <Target size={28} color="#fff" />
              </div>
              <h5 className="fw-bold">Nuestra Misión</h5>
              <p className="text-muted">
                Facilitar el acceso a herramientas de nutrición intuitivas y confiables...
              </p>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#8b5cf6",
                }}
              >
                <Eye size={28} color="#fff" />
              </div>
              <h5 className="fw-bold">Nuestra Visión</h5>
              <p className="text-muted">
                Convertirnos en la plataforma digital de referencia para el seguimiento nutricional...
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
