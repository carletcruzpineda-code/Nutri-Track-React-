import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Components/UserContext";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError("Por favor llena todos los campos");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((user) => user.email === email)) {
      setError("Este correo ya está registrado");
      return;
    }
    const newUser = { email, name, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    login(email);
    navigate("/dashboard");
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow-sm" style={{ maxWidth: "420px", width: "100%" }}>
        <h2 className="text-success text-center mb-4">Crear cuenta</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="registerName">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="registerEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="correo@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="registerPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100">Registrarse</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;