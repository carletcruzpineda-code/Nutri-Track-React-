C:\Nutri-Track-React-\nutritrack\src\Components
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BookOpen, Target, Eye } from "lucide-react";
import "../Styles/AboutSection.css"; 

function AboutSection() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="g-4">
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#3b82f6",
                }}
              >
                <BookOpen size={28} color="#fff" />
              </div>
              <h5 className="fw-bold">Acerca de Nosotros</h5>
              <p className="text-muted">
                NutriTrack nace de la pasión por democratizar el acceso a una alimentación saludable...
              </p>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                }}
              >
                <Target size={28} color="#fff" />
              </div>
              <h5 className="fw-bold">Nuestra Misión</h5>
              <p className="text-muted">
                Facilitar el acceso a herramientas de nutrición intuitivas y confiables...
              </p>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#8b5cf6",
                }}
              >
                <Eye size={28} color="#fff" />
              </div>
              <h5 className="fw-bold">Nuestra Visión</h5>
              <p className="text-muted">
                Convertirnos en la plataforma digital de referencia para el seguimiento nutricional...
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;

C:\Nutri-Track-React-\nutritrack\src\Components\FeaturesSection.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function FeaturesSection() {
  const features = [
    { title: "Registro Intuitivo", text: "Registra tus comidas de forma rápida y sencilla con nuestra interfaz amigable." },
    { title: "Seguimiento Simple", text: "Visualiza tus progresos con indicadores claros y gráficos fáciles de interpretar." },
    { title: "Información Nutricional", text: "Accede a información detallada y educativa de los alimentos que consumes." }
  ];

  return (
    <Container className="py-5" id="features">
      <h2 className="text-center text-success fw-bold mb-4">
        ¿Por qué elegir NutriTrack?
      </h2>
      <Row>
        {features.map((f, i) => (
          <Col md={4} key={i}>
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-success">{f.title}</Card.Title>
                <Card.Text>{f.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturesSection;

C:\Nutri-Track-React-\nutritrack\src\Components\Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-success text-white py-4 mt-5">
      <Container>
        <Row>
          {/* Marca y eslogan */}
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5>NutriTrack</h5>
            <p className="mb-0">Empoderando tu salud, un paso a la vez.</p>
          </Col>

          {/* Redes sociales y copyright */}
          <Col md={6} className="text-center text-md-end">
            <div className="mb-2 d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <p className="mb-0">
              &copy; {new Date().getFullYear()} NutriTrack. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

C:\Nutri-Track-React-\nutritrack\src\Components\Header.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";

function Header() {
  const { user, logout } = useUser();

  return (
    <Navbar bg="light" expand="lg"  className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-success fw-bold">
          🌱 NutriTrack
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
                <Nav.Link as={Link} to="/register">Registrarse</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link onClick={logout} style={{ cursor: "pointer" }}>
                  Cerrar sesión
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

C:\Nutri-Track-React-\nutritrack\src\Components\HeroSection.jsx

import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TransButton from "./TransButton";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-light py-5 hero">
      <Container className="text-center">
        <h1 className="display-4 fw-bold text-success">Bienvenido a NutriTrack</h1>
        <p className="lead text-muted">
          Transforma tu alimentación y estilo de vida con herramientas personalizadas.
        </p>
        <div
          className="position-relative d-inline-block shadow-lg rounded overflow-hidden mx-auto my-4"
          style={{ maxWidth: "800px", borderRadius: "12px" }}>
            <span
              className="badge bg-warning text-dark position-absolute top-0 start-0 m-3 px-3 py-2 fs-6 fw-semibold"
              style={{ borderRadius: "12px" }}>
              En Vivo
            </span>
            <img
              src="https://thefoodtech.com/wp-content/uploads/2020/07/h%C3%A1bitos-saludables-828x548.jpg"
              alt="Comida saludable"
              className="img-fluid"
              style={{  borderRadius: "12px", width: "500px", height: "auto" }}
            />
        </div>

       
        <div className="mt-3">
          <TransButton
            text="Comenzar mi Transformación"
            onClick={() => navigate("/register")}
          />
        </div>
      </Container>
    </section>
  );
}

C:\Nutri-Track-React-\nutritrack\src\Components\TransButton.jsx
import React from "react";
import { Button } from "react-bootstrap";

function TransButton({ text, onClick }) {
  return (
    <Button variant="outline-success" size="lg" onClick={onClick}>
      {text}
    </Button>
  );
}

export default TransButton;

C:\Nutri-Track-React-\nutritrack\src\Components\UserContext.jsx
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Guardo el objeto usuario completo
  const login = (userData) => setUser(userData);

  // Limpio el usuario
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

C:\Nutri-Track-React-\nutritrack\src\Pages\AddMeal.jsx

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

C:\Nutri-Track-React-\nutritrack\src\Pages\DashBoard.jsx

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

C:\Nutri-Track-React-\nutritrack\src\Pages\Home.jsx
import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeaturesSection";
import AboutSection from "../Components/AboutSection";
import TransButton from "../Components/TransButton";

function Home() {
  return (
    <main className="pt-5 mt-5 text-center">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />

    </main>
  );
}

export default Home;

C:\Nutri-Track-React-\nutritrack\src\Pages\Login.jsx
import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Components/UserContext";
import { getUsuario } from "../Services/UserService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const usuarios = await getUsuario(email, password);

      if (usuarios.length > 0) {
        login(usuarios[0]);
        navigate("/dashboard");
      } else {
        setError("Correo o contraseña incorrectos.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Error al conectar con el servidor. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
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
              minLength={4}
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar sesión"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;

C:\Nutri-Track-React-\nutritrack\src\Pages\Register.jsx
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

      const nuevoUsuario = await agregarUsuario(formData);
      if (!nuevoUsuario || !nuevoUsuario.id) {
        throw new Error("Error al registrar el usuario.");
      }

      login(nuevoUsuario); // Guardo en contexto
      navigate("/dashboard");
    } catch (err) {
      console.error("Error al registrar usuario:", err);
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

C:\Nutri-Track-React-\nutritrack\src\Routes\PrivateRoutes.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../Components/UserContext";

function PrivateRoute({ children }) {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;

C:\Nutri-Track-React-\nutritrack\src\Routes\Routing.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMeal from "../Pages/AddMeal";


import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/DashBoard";
import PrivateRoute from "./PrivateRoutes";
import Header from "../Components/Header";

function Routing() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-meal"
          element={
            <PrivateRoute>
              <AddMeal />
            </PrivateRoute>
          }
        />

        {/*  ruta catch-all 404 */}
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </Router>
  );
}

export default Routing;

C:\Nutri-Track-React-\nutritrack\src\Services\FoodServices.jsx


/* Obtengo todos los alimentos */
export async function getFoods() {
  try {
    const response = await fetch("http://localhost:3001/foods", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al recuperar foods:", error);
    throw error;
  }
}

/* Obtengo alimento por id */
export async function getFoodById(id) {
  try {
    const response = await fetch(`http://localhost:3001/foods/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener food:", error);
    throw error;
  }
}

/* Agrego nuevo alimento */
export async function agregarFood(foodObj) {
  try {
    const response = await fetch("http://localhost:3001/foods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodObj)
    });
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al agregar food:", error);
    throw error;
  }
}

/* Actualizo alimento */
export async function actualizarFood(foodObj) {
  try {
    const response = await fetch(`http://localhost:3001/foods/${foodObj.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodObj)
    });
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar food:", error);
    throw error;
  }
}

/* Elimino alimento por id */
export async function eliminarFood(id) {
  try {
    const response = await fetch(`http://localhost:3001/foods/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
  } catch (error) {
    console.error("Error al eliminar food:", error);
    throw error;
  }
}

C:\Nutri-Track-React-\nutritrack\src\Services\UserService.jsx


export async function getUsuarios() {
  try {
    const response = await fetch("http://localhost:3001/usuarios");
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
}

export async function agregarUsuario(data) {
  try {
    const response = await fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error("No se pudo crear el usuario.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al agregar usuario:", error);
    throw error;
  }
}

//  FUNCIÓN para login: obtener usuario por email y password
export async function getUsuario(email, password) {
  try {
    const response = await fetch(
      `http://localhost:3001/usuarios?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    );
    if (!response.ok) {
      throw new Error("Error en la petición de login");
    }
    return await response.json(); // devuelve array con usuario
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    throw error;
  }
}

C:\Nutri-Track-React-\nutritrack\src\Styles\AboutSection.css

@media (max-width: 576px) {
  .about-section h5 {
    font-size: 1.1rem;
  }

  .about-section p {
    font-size: 0.9rem;
  }

  .about-section .card {
    padding: 1.5rem;
  }
}

C:\Nutri-Track-React-\nutritrack\src\Styles\DashBoard.css
.dashboard-wrapper {
  min-height: 100vh;
  background-color: #f8fdf8;
  padding: 1.5rem;
}

/* Estilos responsive para pantallas pequeñas */
@media (max-width: 576px) {
  .dashboard-wrapper {
    padding: 1rem;
  }

  /* Los botones se apilan en columna  */
  .dashboard-wrapper .btn {
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  /* Mejora margen a todos excepto el último */
  .dashboard-wrapper .btn:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  /*alineado originalmente a la derecha */
  .dashboard-wrapper .text-end {
    text-align: center;
  }
}

C:\Nutri-Track-React-\nutritrack\src\App.css
body {
  font-family: "Poppins", "Segoe UI", Roboto, Arial, sans-serif;
  background: linear-gradient(180deg, #f9fafb 0%, #eef9f3 100%);
  margin: 0;
  padding: 0;
  color: #2c3e50;
}

h1, h2, h3 {
  font-weight: 700;
  color: #1b4332;
  letter-spacing: -0.5px;
}

.hero {
  background: linear-gradient(135deg, #d4f8d4, #f9fafb);
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 1rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
}

.btn-main {
  background-color: #28a745;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-main:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

.card {
  border-radius: 1rem;
  border: none;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, border 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  border: 1px solid #28a745;
}

.card-body {
  font-size: 0.95rem;
  line-height: 1.6;
}

footer {
  font-size: 0.9rem;
  padding: 1.5rem 0;
  color: #fff;
  background-color: #1b4332;
  text-align: center;
}

footer a {
  color: #d4f8d4;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

C:\Nutri-Track-React-\nutritrack\src\App.
import React from "react";
import Routing from "./Routes/Routing";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Routing />
      <Footer />
    </>
  );
}

export default App;

C:\Nutri-Track-React-\nutritrack\src\index.css
body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  padding-top: 70px; 
  font-family: "Poppins", system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #2c3e50;
  background: #f9fafb;
  color-scheme: light dark;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: none;
}

a:hover {
  color: #535bf2;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s, background-color 0.25s;
}

button:focus,
button:focus-visible {
  outline: 3px solid #28a745; 
}

@media (prefers-color-scheme: dark) {
  body {
    color: rgba(255, 255, 255, 0.87);
    background: #242424;
  }

  a:hover {
    color: #747bff;
  }

  button {
    background-color: #1a1a1a;
  }
}

C:\Nutri-Track-React-\nutritrack\src\main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./Components/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

C:\Nutri-Track-React-\nutritrack\db.json
{
  "usuarios": [
    {
      "id": "1",
      "name": "Carlos Pérez",
      "edad": 28,
      "email": "carlos@nutri.com",
      "password": "123456",
      "peso": 72,
      "altura": 175,
      "genero": "Hombre",
      "condiciones": [
        "Hipertensión"
      ],
      "alergias": [
        "Gluten"
      ]
    },
    {
      "id": "2",
      "name": "María López",
      "edad": 34,
      "email": "maria@nutri.com",
      "password": "654321",
      "peso": 60,
      "altura": 162,
      "genero": "Mujer",
      "condiciones": [
        "Diabetes"
      ],
      "alergias": [
        "Lactosa"
      ]
    },
    {
      "id": "3",
      "name": "Javier García",
      "edad": 40,
      "email": "javier@nutri.com",
      "password": "nutri2024",
      "peso": 80,
      "altura": 178,
      "genero": "Hombre",
      "condiciones": [
        "Hipotiroidismo"
      ],
      "alergias": [
        "Nueces",
        "Mariscos"
      ]
    },
    {
      "id": "4",
      "name": "Lucía Fernández",
      "edad": 25,
      "email": "lucia@nutri.com",
      "password": "healthy123",
      "peso": 55,
      "altura": 160,
      "genero": "Mujer",
      "condiciones": [],
      "alergias": []
    },
    {
      "id": "5",
      "name": "Andrés Torres",
      "edad": 31,
      "email": "andres@nutri.com",
      "password": "planfit",
      "peso": 68,
      "altura": 172,
      "genero": "Hombre",
      "condiciones": [
        "Celiaquía"
      ],
      "alergias": [
        "Gluten"
      ]
    }
  ],
  "foods": []
}

C:\Nutri-Track-React-\nutritrack\index.html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NutriTrack</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>