C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Components\AboutSection.jsx
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Components\FeaturesSection.jsx
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Components\Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-success text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5>NutriTrack</h5>
            <p className="mb-0">Empoderando tu salud, un paso a la vez.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Components\Header.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";

function Header() {
  const { user, logout } = useUser();

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Components\HeroSection.jsx
// src/Components/HeroSection.jsx
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Components\TransButton.jsx
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Components\UserContext.jsx
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Guarda el objeto usuario completo
  const login = (userData) => setUser(userData);

  // Limpia el usuario
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Pages\DashBoard.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Components/UserContext";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import "../Styles/AboutSection.css";
import "../Styles/DashBoard.css";

function Dashboard() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleAddMeal = () => {
    navigate("/add-meal"); // Asegúrate de tener esta ruta creada
  };

  // Función para obtener nombre seguro del usuario
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

      <Card className="p-4 mb-4 shadow-sm">
        <h5 className="mb-3">Totales Nutricionales del Día</h5>
        <Row className="text-center">
          <Col>
            <h6>🔥 Calorías</h6>
            <p className="fs-4 text-danger">0</p>
            <small>calorías consumidas hoy</small>
          </Col>
          <Col>
            <h6>💪 Proteínas</h6>
            <p className="fs-4 text-warning">0</p>
            <small>gramos consumidos hoy</small>
          </Col>
          <Col>
            <h6>🌾 Carbohidratos</h6>
            <p className="fs-4 text-success">0</p>
            <small>gramos consumidos hoy</small>
          </Col>
          <Col>
            <h6>🥑 Grasas</h6>
            <p className="fs-4 text-info">0</p>
            <small>gramos consumidos hoy</small>
          </Col>
        </Row>

        <Card className="mt-3 p-3 border-success">
          <Row className="text-center">
            <Col>
              <strong>3427 cal</strong>
              <p className="text-muted">Restantes</p>
            </Col>
            <Col>
              <strong>0%</strong>
              <p className="text-muted">Proteína</p>
            </Col>
            <Col>
              <strong>0%</strong>
              <p className="text-muted">Carbohidratos</p>
            </Col>
            <Col>
              <strong>0%</strong>
              <p className="text-muted">Grasas</p>
            </Col>
          </Row>
        </Card>
      </Card>

      <Card className="p-5 text-center shadow-sm">
        <p className="text-muted mb-3">🍽️ No hay comidas registradas</p>
        <p className="mb-4">¡Empieza agregando tu primera comida del día!</p>
        <Button variant="success" onClick={handleAddMeal}>
          + Agregar Primera Comida
        </Button>
      </Card>
    </Container>
  );
}

export default Dashboard;

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Pages\Home.jsx
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Pages\Login.jsx
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Pages\Register.jsx
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

      login(nuevoUsuario); // Guardar en contexto
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Routes\PrivateRoutes.jsx 
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Routes\Routing.jsx
// src/Routes/Routing.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

        {/* Opción: ruta catch-all 404 */}
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </Router>
  );
}

export default Routing;

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Services\FoodServices.jsx
// src/Services/FoodService.js

/* Obtener todos los alimentos */
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

/* Obtener alimento por id */
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

/* Agregar nuevo alimento */
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

/* Actualizar alimento */
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

/* Eliminar alimento por id */
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Services\UserService.jsx
// src/Services/UserService.js

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

// NUEVA FUNCIÓN para login: obtener usuario por email y password
export async function getUsuario(email, password) {
  try {
    const response = await fetch(
      `http://localhost:3001/usuarios?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    );
    if (!response.ok) {
      throw new Error("Error en la petición de login");
    }
    return await response.json(); // devuelve array con usuario(s)
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    throw error;
  }
}

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Styles\AboutSection.css
/* src/Styles/AboutSection.css */

/* Estilos específicos para la sección "Sobre nosotros" en pantallas pequeñas */
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\Styles\DashBoard.css
.dashboard-wrapper {
  min-height: 100vh;
  background-color: #f8fdf8;
  padding: 1.5rem;
}

/* Estilos responsive para pantallas pequeñas (≤576px) */
@media (max-width: 576px) {
  .dashboard-wrapper {
    padding: 1rem;
  }

  /* Los botones se apilan en columna para mejor usabilidad móvil */
  .dashboard-wrapper .btn {
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  /* Mejora: solo aplica margen a todos excepto el último */
  .dashboard-wrapper .btn:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  /* Centra el contenido alineado originalmente a la derecha */
  .dashboard-wrapper .text-end {
    text-align: center;
  }
}

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\src\App.jsx
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

C:\Users\Nery\Desktop\Nutri-Track-React-\nutritrack\db.json
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
      "condiciones": ["Hipertensión"],
      "alergias": ["Gluten"]
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
      "condiciones": ["Diabetes"],
      "alergias": ["Lactosa"]
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
      "condiciones": ["Hipotiroidismo"],
      "alergias": ["Nueces", "Mariscos"]
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
      "condiciones": ["Celiaquía"],
      "alergias": ["Gluten"]
    }
  ],
  "foods": [
    {
      "id": "1",
      "name": "Manzana",
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2
    },
    {
      "id": "2",
      "name": "Pechuga de Pollo",
      "calories": 165,
      "protein": 31,
      "carbs": 0,
      "fat": 3.6
    },
    {
      "id": "3",
      "name": "Arroz Blanco",
      "calories": 130,
      "protein": 2.4,
      "carbs": 28,
      "fat": 0.3
    },
    {
      "id": "4",
      "name": "Banana",
      "calories": 89,
      "protein": 1.1,
      "carbs": 23,
      "fat": 0.3
    },
    {
      "id": "5",
      "name": "Huevo",
      "calories": 155,
      "protein": 13,
      "carbs": 1.1,
      "fat": 11
    },
    {
      "id": "6",
      "name": "Pan Integral",
      "calories": 247,
      "protein": 13,
      "carbs": 41,
      "fat": 4.2
    },
    {
      "id": "7",
      "name": "Avena",
      "calories": 389,
      "protein": 16.9,
      "carbs": 66,
      "fat": 6.9
    },
    {
      "id": "8",
      "name": "Leche Descremada (100ml)",
      "calories": 42,
      "protein": 3.4,
      "carbs": 5,
      "fat": 0.1
    },
    {
      "id": "9",
      "name": "Yogur Natural",
      "calories": 59,
      "protein": 10,
      "carbs": 3.6,
      "fat": 0.4
    },
    {
      "id": "10",
      "name": "Salmón",
      "calories": 208,
      "protein": 20,
      "carbs": 0,
      "fat": 13
    },
    {
      "id": "11",
      "name": "Brócoli",
      "calories": 55,
      "protein": 3.7,
      "carbs": 11,
      "fat": 0.6
    },
    {
      "id": "12",
      "name": "Zanahoria",
      "calories": 41,
      "protein": 0.9,
      "carbs": 10,
      "fat": 0.2
    },
    {
      "id": "13",
      "name": "Papa Hervida",
      "calories": 87,
      "protein": 2,
      "carbs": 20,
      "fat": 0.1
    },
    {
      "id": "14",
      "name": "Tomate",
      "calories": 18,
      "protein": 0.9,
      "carbs": 3.9,
      "fat": 0.2
    },
    {
      "id": "15",
      "name": "Queso Fresco",
      "calories": 96,
      "protein": 11,
      "carbs": 2,
      "fat": 5
    },
    {
      "id": "16",
      "name": "Lentejas",
      "calories": 116,
      "protein": 9,
      "carbs": 20,
      "fat": 0.4
    },
    {
      "id": "17",
      "name": "Almendras",
      "calories": 576,
      "protein": 21,
      "carbs": 22,
      "fat": 49
    },
    {
      "id": "18",
      "name": "Aceite de Oliva (10ml)",
      "calories": 88,
      "protein": 0,
      "carbs": 0,
      "fat": 10
    },
    {
      "id": "19",
      "name": "Pasta Cocida",
      "calories": 131,
      "protein": 5,
      "carbs": 25,
      "fat": 1.1
    },
    {
      "id": "20",
      "name": "Atún en Agua",
      "calories": 132,
      "protein": 28,
      "carbs": 0,
      "fat": 1
    }
  ]
}
