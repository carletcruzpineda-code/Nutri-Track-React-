import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Components/UserContext";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import "../Styles/AboutSection.css";
import "../Styles/DashBoard.css";

function Dashboard() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleAddMeal = () => {
    navigate("/add-meal"); // Asegúrate de tener esta ruta creada
  };

  // Función para obtener nombre seguro del usuario
  const getUserDisplayName = () => {
    if (!user) return "Usuario";

    if (typeof user.name === "string") return user.name;

    if (typeof user.name === "object") {
      const first = user.name.first || "";
      const last = user.name.last || "";
      return (first + " " + last).trim() || user.email || "Usuario";
    }

    return user.email || "Usuario";
  };

  return (
    <Container fluid className="dashboard-wrapper py-4">
      <Row className="mb-4 align-items-center">
        <Col>
          <h2 className="text-success">¡Hola, {getUserDisplayName()}! 👋</h2>
          <p className="text-muted">
            Registra tus comidas y mantén un seguimiento de tu nutrición diaria.
          </p>
        </Col>
        <Col className="text-end">
          <Button variant="outline-success" className="me-2">
            Información Nutricional
          </Button>
          <Button variant="success" className="me-2" onClick={handleAddMeal}>
            + Agregar Comida
          </Button>
          <Button variant="outline-danger" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Col>
      </Row>

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

      <Card className="p-5 text-center shadow-sm">
        <p className="text-muted mb-3">🍽️ No hay comidas registradas</p>
        <p className="mb-4">¡Empieza agregando tu primera comida del día!</p>
        <Button variant="success" onClick={handleAddMeal}>
          + Agregar Primera Comida
        </Button>
      </Card>
    </Container>
  );
}

export default Dashboard;
