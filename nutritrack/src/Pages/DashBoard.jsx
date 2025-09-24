import React from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { useUser } from "../Components/UserContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Container fluid className="py-4" style={{ minHeight: "100vh", backgroundColor: "#f8fdf8" }}>
      {/* Header */}
      <Row className="mb-4 align-items-center">
        <Col>
          <h2 className="text-success">
            ¡Hola, {user?.name || user?.email}! 👋
          </h2>
          <p className="text-muted">
            Registra tus comidas y mantén un seguimiento de tu nutrición diaria
          </p>
        </Col>
        <Col className="text-end">
          <Button variant="outline-success" className="me-2">
            Información Nutricional
          </Button>
          <Button variant="success">+ Agregar Comida</Button>
          <Button variant="outline-danger" className="ms-2" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Col>
      </Row>

      {/* Totales Nutricionales */}
      <Card className="p-4 mb-4 shadow-sm">
        <h5 className="mb-3">Totales Nutricionales del Día</h5>
        <Row className="text-center">
          <Col>
            <h6>🔥 Calorías</h6>
            <p className="fs-4 text-danger">0</p>
            <small>calorías consumidas hoy</small>
          </Col>
          <Col>
            <h6>💪 Proteínas</h6>
            <p className="fs-4 text-warning">0</p>
            <small>gramos consumidos hoy</small>
          </Col>
          <Col>
            <h6>🌾 Carbohidratos</h6>
            <p className="fs-4 text-success">0</p>
            <small>gramos consumidos hoy</small>
          </Col>
          <Col>
            <h6>🥑 Grasas</h6>
            <p className="fs-4 text-info">0</p>
            <small>gramos consumidos hoy</small>
          </Col>
        </Row>

        {/* Resumen del día */}
        <Card className="mt-3 p-3 border-success">
          <Row className="text-center">
            <Col>
              <strong>3427 cal</strong>
              <p className="text-muted">Restantes</p>
            </Col>
            <Col>
              <strong>0%</strong>
              <p className="text-muted">Proteína</p>
            </Col>
            <Col>
              <strong>0%</strong>
              <p className="text-muted">Carbohidratos</p>
            </Col>
            <Col>
              <strong>0%</strong>
              <p className="text-muted">Grasas</p>
            </Col>
          </Row>
        </Card>
      </Card>

      {/* Lista de comidas */}
      <Card className="p-5 text-center shadow-sm">
        <p className="text-muted mb-3">🍽️ No hay comidas registradas</p>
        <p className="mb-4">¡Empieza agregando tu primera comida del día!</p>
        <Button variant="success">+ Agregar Primera Comida</Button>
      </Card>
    </Container>
  );
}

export default Dashboard;