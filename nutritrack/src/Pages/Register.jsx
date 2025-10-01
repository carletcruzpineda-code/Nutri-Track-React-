
import React, { useState } from "react";
import { Container, Form, Button, Alert, Card, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Components/UserContext";
import { getUsuarios, agregarUsuario } from "../Services/UserService";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    edad: "",
    email: "",
    password: "",
    peso: "",
    altura: "",
    genero: "",
    condiciones: [],
    alergias: []
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useUser();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value)
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { name, edad, email, password } = formData;
    if (!name || !edad || !email || !password) {
      setError("Por favor llena los campos obligatorios.");
      setLoading(false);
      return;
    }

    try {
      const usuarios = await getUsuarios();

      if (!usuarios || !Array.isArray(usuarios)) {
        throw new Error("No se pudo obtener la lista de usuarios.");
      }

      const yaExiste = usuarios.find((u) => u.email.toLowerCase() === email.toLowerCase());
      if (yaExiste) {
        setError("Este correo ya está registrado.");
        setLoading(false);
        return;
      }

      // aseguramos tipoUsuario = "Normal" por defecto
      const nuevoUsuarioPayload = {
        ...formData,
        tipoUsuario: "Normal"
      };

      const nuevoUsuario = await agregarUsuario(nuevoUsuarioPayload);
      if (!nuevoUsuario || !nuevoUsuario.id) {
        throw new Error("Error al registrar el usuario.");
      }

      login(nuevoUsuario); // Guardo en contexto
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setError("Error al registrar usuario. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow-sm" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-success text-center mb-3">Crear Cuenta</h2>
        <p className="text-center text-muted">Completa tu información para personalizar tu experiencia</p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Edad</Form.Label>
                <Form.Control
                  type="number"
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Peso (kg)</Form.Label>
                <Form.Control
                  type="number"
                  name="peso"
                  value={formData.peso}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Altura (cm)</Form.Label>
                <Form.Control
                  type="number"
                  name="altura"
                  value={formData.altura}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Género</Form.Label>
            <Form.Select name="genero" value={formData.genero} onChange={handleChange}>
              <option value="">Selecciona tu género</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="Otro">Otro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Condiciones Médicas (opcional)</Form.Label>
            <div>
              {["Diabetes", "Hipertensión", "Hipotiroidismo", "Celiaquía"].map((cond) => (
                <Form.Check
                  key={cond}
                  type="checkbox"
                  label={cond}
                  name="condiciones"
                  value={cond}
                  checked={formData.condiciones.includes(cond)}
                  onChange={handleChange}
                />
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Alergias Alimentarias (opcional)</Form.Label>
            <div>
              {["Gluten", "Lactosa", "Nueces", "Mariscos"].map((alergia) => (
                <Form.Check
                  key={alergia}
                  type="checkbox"
                  label={alergia}
                  name="alergias"
                  value={alergia}
                  checked={formData.alergias.includes(alergia)}
                  onChange={handleChange}
                />
              ))}
            </div>
          </Form.Group>

          <Button variant="success" type="submit" className="w-100" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Crear Cuenta"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;
