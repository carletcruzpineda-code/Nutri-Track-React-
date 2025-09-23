import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TransButton from "./TransButton";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-light py-5">
      <Container className="text-center">
        <h1 className="display-4 fw-bold text-success">Bienvenido a NutriTrack</h1>
        <p className="lead text-muted">
          Transforma tu alimentación y estilo de vida con herramientas personalizadas.
        </p>
        <div className="mt-3">
          <TransButton text="Comenzar" onClick={() => navigate("/register")} />
        </div>
      </Container>
    </section>
  );
}