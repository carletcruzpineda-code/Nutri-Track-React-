/* src/Pages/AdminPanel.jsx */
import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Alert,
  Spinner
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Components/UserContext";
import {
  getUsuarios,
  actualizarUsuario,
  eliminarUsuario
} from "../Services/UserService";
import {
  getFoods,
  agregarFood,
  actualizarFood,
  eliminarFood
} from "../Services/FoodServices";

export default function AdminPanel() {
  const { user } = useUser();
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [error, setError] = useState(null);

  // usuarios edit modal
  const [showUserModal, setShowUserModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  // foods management
  const [foods, setFoods] = useState([]);
  const [foodForm, setFoodForm] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: ""
  });
  const [loadingFoods, setLoadingFoods] = useState(true);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (user.tipoUsuario !== "Admin") {
      navigate("/dashboard");
      return;
    }
    fetchUsers();
    fetchFoods();
   
  }, [user]);

  const fetchUsers = async () => {
    setLoadingUsers(true);
    try {
      const data = await getUsuarios();
      setUsuarios(data || []);
    } catch (error) {
      console.error("Error cargando usuarios:", error);
      setError("No se pudieron cargar los usuarios.");
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchFoods = async () => {
    setLoadingFoods(true);
    try {
      const data = await getFoods();
      setFoods(data || []);
    } catch (error) {
      console.error("Error cargando foods:", error);
      setError("No se pudieron cargar las comidas.");
    } finally {
      setLoadingFoods(false);
    }
  };

  const handleEditUser = (u) => {
    setEditUser({ ...u });
    setShowUserModal(true);
  };

  const handleSaveUser = async () => {
    try {
      setBusy(true);
      await actualizarUsuario(editUser);
      setShowUserModal(false);
      fetchUsers();
    } catch (error) {
      console.error("Error actualizando usuario:", error);
      setError("No se pudo actualizar el usuario.");
    } finally {
      setBusy(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("¿Eliminar usuario permanentemente?")) return;
    try {
      await eliminarUsuario(id);
      fetchUsers();
    } catch (error) {
      console.error("Error eliminando usuario:", error);
      setError("No se pudo eliminar el usuario.");
    }
  };

  // Foods form handlers
  const handleFoodChange = (e) => {
    const { name, value } = e.target;
    setFoodForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddFood = async (e) => {
    e.preventDefault();
    const { name, calories, protein, carbs, fat } = foodForm;
    if (!name || calories === "") {
      setError("Por favor llena el nombre y calorías de la comida.");
      return;
    }
    try {
      setBusy(true);
      const newFood = {
        name,
        calories: Number(calories),
        protein: Number(protein || 0),
        carbs: Number(carbs || 0),
        fat: Number(fat || 0)
      };
      await agregarFood(newFood);
      setFoodForm({ name: "", calories: "", protein: "", carbs: "", fat: "" });
      fetchFoods();
    } catch (error) {
      console.error("Error agregando food:", error);
      setError("No se pudo agregar la comida.");
    } finally {
      setBusy(false);
    }
  };

  const handleDeleteFood = async (id) => {
    if (!window.confirm("Eliminar comida del catálogo?")) return;
    try {
      await eliminarFood(id);
      fetchFoods();
    } catch (error) {
      console.error("Error eliminando food:", error);
      setError("No se pudo eliminar la comida.");
    }
  };

  return (
    <Container className="py-4">
      <Row className="mb-3 align-items-center">
        <Col>
          <h2 className="text-success">Panel de Administración</h2>
          <p className="text-muted">Gestiona usuarios y catálogo de comidas</p>
        </Col>
      </Row>

      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        <Col md={6}>
          <Card className="p-3 mb-4 shadow-sm">
            <h5>Usuarios registrados</h5>
            {loadingUsers ? (
              <div className="text-center py-3">
                <Spinner animation="border" />
              </div>
            ) : usuarios.length === 0 ? (
              <p className="text-muted">No hay usuarios.</p>
            ) : (
              usuarios.map((u) => (
                <Row key={u.id} className="py-2 border-bottom align-items-center">
                  <Col md={4}>
                    <strong>{u.name || u.email}</strong>
                    <div className="text-muted small">{u.email}</div>
                  </Col>
                  <Col md={3}>{u.password}</Col>
                  <Col md={2}>{u.tipoUsuario || "Normal"}</Col>
                  <Col md={3} className="text-end">
                    <Button size="sm" variant="outline-warning" className="me-2" onClick={() => handleEditUser(u)}>Editar</Button>
                    <Button size="sm" variant="outline-danger" onClick={() => handleDeleteUser(u.id)}>Eliminar</Button>
                  </Col>
                </Row>
              ))
            )}
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-3 mb-4 shadow-sm">
            <h5>Agregar comida al catálogo (foods)</h5>
            <Form onSubmit={handleAddFood}>
              <Form.Group className="mb-2">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="name" value={foodForm.name} onChange={handleFoodChange} required />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Calorías</Form.Label>
                    <Form.Control name="calories" type="number" value={foodForm.calories} onChange={handleFoodChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Proteína (g)</Form.Label>
                    <Form.Control name="protein" type="number" value={foodForm.protein} onChange={handleFoodChange} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Carbohidratos (g)</Form.Label>
                    <Form.Control name="carbs" type="number" value={foodForm.carbs} onChange={handleFoodChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Grasas (g)</Form.Label>
                    <Form.Control name="fat" type="number" value={foodForm.fat} onChange={handleFoodChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="success" type="submit" disabled={busy} className="mt-2">
                {busy ? <Spinner animation="border" size="sm" /> : "Agregar comida al catálogo"}
              </Button>
            </Form>
          </Card>

          <Card className="p-3 shadow-sm">
            <h5>Comidas en catálogo</h5>
            {loadingFoods ? (
              <div className="text-center py-2"><Spinner animation="border" /></div>
            ) : foods.length === 0 ? (
              <p className="text-muted">No hay comidas en catálogo.</p>
            ) : (
              foods.map((f) => (
                <Row key={f.id} className="py-2 border-bottom align-items-center">
                  <Col md={6}><strong>{f.name}</strong></Col>
                  <Col md={3}>{f.calories} cal</Col>
                  <Col md={3} className="text-end">
                    <Button size="sm" variant="outline-danger" onClick={() => handleDeleteFood(f.id)}>Eliminar</Button>
                  </Col>
                </Row>
              ))
            )}
          </Card>
        </Col>
      </Row>

      {/* Edit user modal */}
      <Modal show={showUserModal} onHide={() => setShowUserModal(false)} centered>
        <Modal.Header closeButton><Modal.Title>Editar usuario</Modal.Title></Modal.Header>
        <Modal.Body>
          {editUser && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Nombre</Form.Label>
                <Form.Control value={editUser.name || ""} onChange={(e) => setEditUser({ ...editUser, name: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control value={editUser.email || ""} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control value={editUser.password || ""} onChange={(e) => setEditUser({ ...editUser, password: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Tipo de usuario</Form.Label>
                <Form.Select value={editUser.tipoUsuario || "Normal"} onChange={(e) => setEditUser({ ...editUser, tipoUsuario: e.target.value })}>
                  <option value="Normal">Normal</option>
                  <option value="Admin">Admin</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUserModal(false)}>Cancelar</Button>
          <Button variant="success" onClick={handleSaveUser} disabled={busy}>
            {busy ? <Spinner animation="border" size="sm" /> : "Guardar cambios"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

