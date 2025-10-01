/* src/Pages/DashBoard.jsx */
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
import "../Styles/DashBoard.css";
import {
  getConsumidosByUser,
  eliminarConsumido,
  actualizarConsumido
} from "../Services/ConsumidosService";
import { getFoods } from "../Services/FoodServices";

function Dashboard() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const [consumidos, setConsumidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado para edición de consumido
  const [showModal, setShowModal] = useState(false);
  const [editConsumido, setEditConsumido] = useState(null);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    // si es admin, llevar al panel admin
    if (user.tipoUsuario === "Admin") {
      navigate("/admin");
      return;
    }
    fetchConsumidos();
    fetchFoodsCatalog();
    // eslint-disable-next-line
  }, [user, navigate]);

  const fetchConsumidos = async () => {
    setLoading(true);
    try {
      const data = await getConsumidosByUser(user.id);
      setConsumidos(data || []);
    } catch (err) {
      console.error("Error cargando consumidos:", err);
      setError("No se pudo cargar tus consumos.");
    } finally {
      setLoading(false);
    }
  };

  const fetchFoodsCatalog = async () => {
    try {
      const f = await getFoods();
      setFoods(f || []);
    } catch (err) {
      console.error("Error cargando catálogo de foods:", err);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleAddMeal = () => {
    navigate("/add-meal");
  };

  const handleEdit = (cons) => {
    setEditConsumido({ ...cons }); // cons contains nested food object
    setShowModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      // En el caso que se haya modificado la comida completa, aseguramos estructura
      await actualizarConsumido(editConsumido);
      setShowModal(false);
      fetchConsumidos();
    } catch (err) {
      console.error("Error al actualizar consumido:", err);
      setError("No se pudo actualizar el registro.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este registro de consumo?")) return;
    try {
      await eliminarConsumido(id);
      fetchConsumidos();
    } catch (err) {
      console.error("Error al eliminar consumido:", err);
      setError("No se pudo eliminar el registro.");
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

  // Totales a partir de consumidos
  const totals = consumidos.reduce(
    (acc, c) => {
      const f = c.food || {};
      acc.calories += Number(f.calories || 0);
      acc.protein += Number(f.protein || 0);
      acc.carbs += Number(f.carbs || 0);
      acc.fat += Number(f.fat || 0);
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
                <small>calorías consumidas</small>
              </Col>
              <Col>
                <h6>💪 Proteínas</h6>
                <p className="fs-4 text-warning">{totals.protein} g</p>
                <small>gramos consumidos</small>
              </Col>
              <Col>
                <h6>🌾 Carbohidratos</h6>
                <p className="fs-4 text-success">{totals.carbs} g</p>
                <small>gramos consumidos</small>
              </Col>
              <Col>
                <h6>🥑 Grasas</h6>
                <p className="fs-4 text-info">{totals.fat} g</p>
                <small>gramos consumidos</small>
              </Col>
            </Row>
          </Card>

          {/* Lista de consumidos */}
          {consumidos.length === 0 ? (
            <Card className="p-5 text-center shadow-sm">
              <p className="text-muted mb-3">🍽️ No has registrado comidas</p>
              <p className="mb-4">¡Empieza agregando tu primera comida del día!</p>
              <Button variant="success" onClick={handleAddMeal}>+ Agregar Comida</Button>
            </Card>
          ) : (
            <Card className="p-4 shadow-sm">
              <h5 className="mb-3">Tus consumos</h5>
              {consumidos.map((c) => {
                const f = c.food || {};
                return (
                  <Row key={c.id} className="py-2 border-bottom align-items-center">
                    <Col md={3} className="fw-bold">{f.name}</Col>
                    <Col md={2}>{Number(f.calories || 0)} cal</Col>
                    <Col md={2}>{Number(f.protein || 0)} g prot</Col>
                    <Col md={2}>{Number(f.carbs || 0)} g carb</Col>
                    <Col md={2}>{Number(f.fat || 0)} g grasa</Col>
                    <Col md={1} className="text-end">
                      <Button size="sm" variant="outline-warning" className="me-2" onClick={() => handleEdit(c)}>Editar</Button>
                      <Button size="sm" variant="outline-danger" onClick={() => handleDelete(c.id)}>Eliminar</Button>
                    </Col>
                  </Row>
                );
              })}
            </Card>
          )}
        </>
      )}

      {/* Modal de edición de consumido */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar registro de consumo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editConsumido && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={editConsumido.food?.name || ""}
                  onChange={(e) => setEditConsumido({ ...editConsumido, food: { ...(editConsumido.food || {}), name: e.target.value } })}
                />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Calorías</Form.Label>
                    <Form.Control
                      type="number"
                      value={editConsumido.food?.calories || 0}
                      onChange={(e) => setEditConsumido({ ...editConsumido, food: { ...(editConsumido.food || {}), calories: Number(e.target.value) } })}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Proteínas (g)</Form.Label>
                    <Form.Control
                      type="number"
                      value={editConsumido.food?.protein || 0}
                      onChange={(e) => setEditConsumido({ ...editConsumido, food: { ...(editConsumido.food || {}), protein: Number(e.target.value) } })}
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
                      value={editConsumido.food?.carbs || 0}
                      onChange={(e) => setEditConsumido({ ...editConsumido, food: { ...(editConsumido.food || {}), carbs: Number(e.target.value) } })}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Grasas (g)</Form.Label>
                    <Form.Control
                      type="number"
                      value={editConsumido.food?.fat || 0}
                      onChange={(e) => setEditConsumido({ ...editConsumido, food: { ...(editConsumido.food || {}), fat: Number(e.target.value) } })}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="success" onClick={handleSaveEdit}>Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Dashboard;

