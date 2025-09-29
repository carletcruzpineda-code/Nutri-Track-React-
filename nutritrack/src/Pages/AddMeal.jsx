
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Form,
  Button,
  Alert,
  Spinner
} from "react-bootstrap";
import { getFoods, agregarFood, getFoodById } from "../Services/FoodServices";

function AddMeal() {
  const [foods, setFoods] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data = await getFoods();
        setFoods(data);
      } catch (err) {
        console.error("Error al cargar lista de foods:", err);
        setError("No se pudo cargar la lista de comidas.");
      }
    };
    fetchFoods();
  }, []);

  const handleChange = async (e) => {
    const id = e.target.value;
    setSelectedId(id);

    if (id) {
      try {
        const food = await getFoodById(id);
        setSelectedFood(food);
      } catch (err) {
        console.error("Error al obtener comida:", err);
        setError("No se pudo obtener la información de la comida.");
      }
    } else {
      setSelectedFood(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFood) {
      setError("Debes seleccionar una comida.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Guardo la comida seleccionada como nueva entrada en "foods"
      await agregarFood(selectedFood);
      navigate("/dashboard");
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
          Selecciona una comida de la lista
        </p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Seleccionar comida</Form.Label>
            <Form.Select value={selectedId} onChange={handleChange} required>
              <option value="">-- Selecciona una comida --</option>
              {foods.map((food) => (
                <option key={food.id} value={food.id}>
                  {food.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {selectedFood && (
            <Card className="p-3 mb-3 shadow-sm border-success">
              <h5 className="text-success">{selectedFood.name}</h5>
              <p className="mb-1">🔥 Calorías: {selectedFood.calories}</p>
              <p className="mb-1">💪 Proteína: {selectedFood.protein} g</p>
              <p className="mb-1">🌾 Carbohidratos: {selectedFood.carbs} g</p>
              <p className="mb-1">🥑 Grasas: {selectedFood.fat} g</p>
            </Card>
          )}

          <Button
            variant="success"
            type="submit"
            className="w-100"
            disabled={loading || !selectedFood}
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Agregar Comida"}
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
