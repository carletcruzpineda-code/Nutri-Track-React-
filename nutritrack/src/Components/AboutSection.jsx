import React from "react";
import { Container, Card } from "react-bootstrap";

function AboutSection() {
  return (
    <Container className="py-5" id="about">
      <Card className="p-4 shadow-sm border-0">
        <h3 className="text-center text-success fw-bold">Acerca de Nosotros</h3>
        <p className="text-muted text-center">
          NutriTrack nace de la pasión por mejorar los hábitos alimenticios y
          brindar herramientas digitales que faciliten una vida más saludable.
        </p>
      </Card>
    </Container>
  );
}

export default AboutSection;