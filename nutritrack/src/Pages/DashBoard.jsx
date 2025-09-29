
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Components/UserContext";
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  Spinner,
  Alert,
  Modal,
  Form
} from "react-bootstrap";
import {
  getFoods,
  eliminarFood,
  actualizarFood
} from "../Services/FoodServices";
import "../Styles/DashBoard.css";

function Dashboard() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado para edición
  const [showModal, setShowModal] = useState(false);
  const [editFood, setEditFood] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetchFoods();
  }, [user, navigate]);

  const fetchFoods = async () => {
    try {
      const data = await getFoods();
      setFoods(data);
    } catch (err) {
      console.error("Error cargando foods:", err);
      setError("No se pudo cargar la información nutricional.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleAddMeal = () => {
    navigate("/add-meal");
  };

  // Editar comida
  const handleEdit = (food) => {
    setEditFood({ ...food });
    setShowModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      await actualizarFood(editFood);
      setShowModal(false);
      fetchFoods();
    } catch (err) {
      console.error("Error al actualizar:", err);
      setError("No se pudo actualizar la comida.");
    }
  };

  // Elimino comida
  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar esta comida?")) return;
    try {
      await eliminarFood(id);
      fetchFoods();
    } catch (err) {
      console.error("Error al eliminar:", err);
      setError("No se pudo eliminar la comida.");
    }
  };

  // Nombre del usuario
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

  // Totales
  const totals = foods.reduce(
    (acc, food) => {
      acc.calories += food.calories || 0;
      acc.protein += food.protein || 0;
      acc.carbs += food.carbs || 0;
      acc.fat += food.fat || 0;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

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

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="success" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <>
          {/* Totales */}
          <Card className="p-4 mb-4 shadow-sm">
            <h5 className="mb-3">Totales Nutricionales del Día</h5>
            <Row className="text-center">
              <Col>
                <h6>🔥 Calorías</h6>
                <p className="fs-4 text-danger">{totals.calories}</p>
                <small>calorías consumidas hoy</small>
              </Col>
              <Col>
                <h6>💪 Proteínas</h6>
                <p className="fs-4 text-warning">{totals.protein} g</p>
                <small>gramos consumidos hoy</small>
              </Col>
              <Col>
                <h6>🌾 Carbohidratos</h6>
                <p className="fs-4 text-success">{totals.carbs} g</p>
                <small>gramos consumidos hoy</small>
              </Col>
              <Col>
                <h6>🥑 Grasas</h6>
                <p className="fs-4 text-info">{totals.fat} g</p>
                <small>gramos consumidos hoy</small>
              </Col>
            </Row>
          </Card>

          {/* Lista de comidas */}
          {foods.length === 0 ? (
            <Card className="p-5 text-center shadow-sm">
              <p className="text-muted mb-3">🍽️ No hay comidas registradas</p>
              <p className="mb-4">
                ¡Empieza agregando tu primera comida del día!
              </p>
              <Button variant="success" onClick={handleAddMeal}>
                + Agregar Primera Comida
              </Button>
            </Card>
          ) : (
            <Card className="p-4 shadow-sm">
              <h5 className="mb-3">Comidas registradas</h5>
              {foods.map((food) => (
                <Row
                  key={food.id}
                  className="py-2 border-bottom align-items-center"
                >
                  <Col md={3} className="fw-bold">
                    {food.name}
                  </Col>
                  <Col md={2}>{food.calories} cal</Col>
                  <Col md={2}>{food.protein} g prot</Col>
                  <Col md={2}>{food.carbs} g carb</Col>
                  <Col md={2}>{food.fat} g grasa</Col>
                  <Col md={1} className="text-end">
                    <Button
                      size="sm"
                      variant="outline-warning"
                      className="me-2"
                      onClick={() => handleEdit(food)}
                    >
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => handleDelete(food.id)}
                    >
                      Eliminar
                    </Button>
                  </Col>
                </Row>
              ))}
            </Card>
          )}
        </>
      )}

      {/* Modal de edición */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar Comida</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editFood && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={editFood.name}
                  onChange={(e) =>
                    setEditFood({ ...editFood, name: e.target.value })
                  }
                />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Calorías</Form.Label>
                    <Form.Control
                      type="number"
                      value={editFood.calories}
                      onChange={(e) =>
                        setEditFood({
                          ...editFood,
                          calories: Number(e.target.value)
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Proteínas (g)</Form.Label>
                    <Form.Control
                      type="number"
                      value={editFood.protein}
                      onChange={(e) =>
                        setEditFood({
                          ...editFood,
                          protein: Number(e.target.value)
                        })
                      }
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
                      value={editFood.carbs}
                      onChange={(e) =>
                        setEditFood({
                          ...editFood,
                          carbs: Number(e.target.value)
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Grasas (g)</Form.Label>
                    <Form.Control
                      type="number"
                      value={editFood.fat}
                      onChange={(e) =>
                        setEditFood({
                          ...editFood,
                          fat: Number(e.target.value)
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleSaveEdit}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Dashboard;
