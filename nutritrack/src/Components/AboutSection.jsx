import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BookOpen, Target, Eye } from "lucide-react"; // Íconos modernos

function AboutSection() {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#f0fdf4" }}>
      <Container>
        <Row className="g-4">
          {/* Card 1 */}
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
                NutriTrack nace de la pasión por democratizar el acceso a una
                alimentación saludable. Somos un equipo dedicado a crear herramientas
                digitales que simplifican el seguimiento nutricional y empoderan a las
                personas para tomar decisiones alimentarias informadas.
              </p>
            </Card>
          </Col>

          {/* Card 2 */}
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
                Facilitar el acceso a herramientas de nutrición intuitivas y confiables
                que permitan a cada persona construir hábitos alimentarios sostenibles,
                mejorando su calidad de vida a través de decisiones nutricionales
                conscientes e informadas.
              </p>
            </Card>
          </Col>

          {/* Card 3 */}
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
                Convertirnos en la plataforma digital de referencia para el seguimiento
                nutricional, creando una comunidad global donde la alimentación saludable
                sea accesible, comprensible y parte natural del estilo de vida de cada
                persona.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Ajustes responsivos extras */}
      <style jsx>{`
        @media (max-width: 576px) {
          h5 {
            font-size: 1.1rem;
          }
          p {
            font-size: 0.9rem;
          }
          .card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default AboutSection;