import React from "react";
import { Container, Button, Card } from "react-bootstrap";
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
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Card className="p-5 shadow-sm text-center dashboard-card" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-success mb-3">¡Bienvenido, {user?.email}!</h2>
        <p className="text-muted mb-4">
          Esta es tu área personal para llevar el control de tu alimentación y hábitos.
        </p>
        <Button variant="danger" onClick={handleLogout}>Cerrar sesión</Button>
      </Card>
    </Container>
  );
}

export default Dashboard;