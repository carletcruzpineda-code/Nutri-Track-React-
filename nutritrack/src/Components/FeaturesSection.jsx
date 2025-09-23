import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function FeaturesSection() {
  const features = [
    { title: "Registro Intuitivo", text: "Registra tus comidas de forma rápida y sencilla con nuestra interfaz amigable." },
    { title: "Seguimiento Simple", text: "Visualiza tus progresos con indicadores claros y gráficos fáciles de interpretar." },
    { title: "Información Nutricional", text: "Accede a información detallada y educativa de los alimentos que consumes." }
  ];

  return (
    <Container className="py-5" id="features">
      <h2 className="text-center text-success fw-bold mb-4">
        ¿Por qué elegir NutriTrack?
      </h2>
      <Row>
        {features.map((f, i) => (
          <Col md={4} key={i}>
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-success">{f.title}</Card.Title>
                <Card.Text>{f.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturesSection;