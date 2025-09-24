import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Components/UserContext";
import { getUsuario } from "../Services/UserService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuarios = await getUsuario(email, password);
      if (usuarios.length > 0) {
        login(usuarios[0]); // Pasamos todo el objeto usuario
        navigate("/dashboard");
      } else {
        setError("Correo o contraseña incorrectos");
      }
    } catch (err) {
      setError("Error al conectar con la base de datos");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow-sm" style={{ maxWidth: "420px", width: "100%" }}>
        <h2 className="text-success text-center mb-4">Iniciar sesión</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100">
            Iniciar sesión
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;