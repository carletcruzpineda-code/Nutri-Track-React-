// src/Pages/AddMeal.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import { agregarFood } from "../Services/FoodServices";

function AddMeal() {
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { name, calories, protein, carbs, fat } = formData;
    if (!name || !calories || !protein || !carbs || !fat) {
      setError("Por favor llena todos los campos.");
      setLoading(false);
      return;
    }

    try {
      const nuevoFood = {
        name,
        calories: Number(calories),
        protein: Number(protein),
        carbs: Number(carbs),
        fat: Number(fat)
      };

      await agregarFood(nuevoFood);
      navigate("/dashboard"); // redirige al dashboard después de guardar
    } catch (err) {
      console.error("Error al agregar comida:", err);
      setError("No se pudo agregar la comida. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="p-4 shadow-sm" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-success text-center mb-3">Agregar Comida</h2>
        <p className="text-muted text-center mb-4">
          Registra los datos nutricionales de tu comida
        </p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la comida</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Ej. Pechuga de Pollo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Calorías</Form.Label>
                <Form.Control
                  type="number"
                  name="calories"
                  placeholder="Ej. 165"
                  value={formData.calories}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Proteínas (g)</Form.Label>
                <Form.Control
                  type="number"
                  name="protein"
                  placeholder="Ej. 31"
                  value={formData.protein}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Carbohidratos (g)</Form.Label>
                <Form.Control
                  type="number"
                  name="carbs"
                  placeholder="Ej. 0"
                  value={formData.carbs}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Grasas (g)</Form.Label>
                <Form.Control
                  type="number"
                  name="fat"
                  placeholder="Ej. 3.6"
                  value={formData.fat}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Button
            variant="success"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Guardar Comida"}
          </Button>

          <Button
            variant="outline-secondary"
            className="w-100 mt-2"
            onClick={() => navigate("/dashboard")}
          >
            Cancelar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default AddMeal;
