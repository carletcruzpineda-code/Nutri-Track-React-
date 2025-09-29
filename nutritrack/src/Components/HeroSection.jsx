
import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TransButton from "./TransButton";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-light py-5 hero">
      <Container className="text-center">
        <h1 className="display-4 fw-bold text-success">Bienvenido a NutriTrack</h1>
        <p className="lead text-muted">
          Transforma tu alimentación y estilo de vida con herramientas personalizadas.
        </p>
        <div
          className="position-relative d-inline-block shadow-lg rounded overflow-hidden mx-auto my-4"
          style={{ maxWidth: "800px", borderRadius: "12px" }}>
            <span
              className="badge bg-warning text-dark position-absolute top-0 start-0 m-3 px-3 py-2 fs-6 fw-semibold"
              style={{ borderRadius: "12px" }}>
              En Vivo
            </span>
            <img
              src="https://thefoodtech.com/wp-content/uploads/2020/07/h%C3%A1bitos-saludables-828x548.jpg"
              alt="Comida saludable"
              className="img-fluid"
              style={{  borderRadius: "12px", width: "500px", height: "auto" }}
            />
        </div>

       
        <div className="mt-3">
          <TransButton
            text="Comenzar mi Transformación"
            onClick={() => navigate("/register")}
          />
        </div>
      </Container>
    </section>
  );
}
