C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\Components\AboutSection.jsx
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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\Components\FeaturesSection.jsx
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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\Components\Footer.jsx
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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\Components\Header.jsx

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";

function Header() {
  const { user, logout } = useUser();

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
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
                {user.tipoUsuario === "Admin" ? (
                  <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                )}
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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\Components\HeroSection.jsx
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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\Components\TransButton.jsx
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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\Components\UserContext.jsx


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

export async function getUsuarioById(id) {
  try {
    const response = await fetch(`http://localhost:3001/usuarios/${id}`);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener usuario por id:", error);
    throw error;
  }
}

export async function actualizarUsuario(userObj) {
  try {
    const response = await fetch(`http://localhost:3001/usuarios/${userObj.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj)
    });
    if (!response.ok) {
      throw new Error("No se pudo actualizar el usuario.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    throw error;
  }
}

export async function eliminarUsuario(id) {
  try {
    const response = await fetch(`http://localhost:3001/usuarios/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw new Error("No se pudo eliminar el usuario.");
    }
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    throw error;
  }
}

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\Styles\AboutSection.css

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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\Styles\DashBoard.css
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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\App.css
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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\App.jsx
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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\index.css
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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\src\main.jsx
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

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\.gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\db.json
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
      ],
      "tipoUsuario": "Admin"
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
      ],
      "tipoUsuario": "Normal"
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
      ],
      "tipoUsuario": "Normal"
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
      "alergias": [],
      "tipoUsuario": "Normal"
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
      ],
      "tipoUsuario": "Normal"
    }
  ],
  "foods": [
    {
      "id": "9649",
      "name": "Pechuga de pollo a la plancha",
      "calories": 165,
      "protein": 31,
      "carbs": 0,
      "fat": 3.6
    },
    {
      "id": "da65",
      "name": "Arroz blanco cocido",
      "calories": 130,
      "protein": 2.4,
      "carbs": 28,
      "fat": 0.3
    },
    {
      "id": "3317",
      "name": "Lentejas cocidas",
      "calories": 116,
      "protein": 9,
      "carbs": 20,
      "fat": 0.4
    },
    {
      "id": "44c4",
      "name": "Carne de res magra (filete)",
      "calories": 217,
      "protein": 26,
      "carbs": 0,
      "fat": 12
    },
    {
      "id": "00b4",
      "name": "Salmón al horno",
      "calories": 208,
      "protein": 20,
      "carbs": 0,
      "fat": 13
    },
    {
      "id": "b5a6",
      "name": "Huevo",
      "calories": 143,
      "protein": 48,
      "carbs": 1,
      "fat": 9.5
    },
    {
      "id": "cb05",
      "name": "Brócoli al vapor",
      "calories": 35,
      "protein": 2.8,
      "carbs": 7,
      "fat": 0.4
    },
    {
      "id": "1995",
      "name": "Banana",
      "calories": 89,
      "protein": 1.1,
      "carbs": 23,
      "fat": 0.3
    },
    {
      "id": "b29a",
      "name": "Avena integral cruda",
      "calories": 389,
      "protein": 1.1,
      "carbs": 23,
      "fat": 0.3
    },
    {
      "id": "4e4c",
      "name": "Avena integral cruda",
      "calories": 389,
      "protein": 16.9,
      "carbs": 66,
      "fat": 6.9
    },
    {
      "id": "5cf5",
      "name": "Yogur natural sin grasa",
      "calories": 59,
      "protein": 10,
      "carbs": 3.6,
      "fat": 0.4
    },
    {
      "id": "fb82",
      "name": "Manzana",
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2
    },
    {
      "id": "22b6",
      "name": "Pechuga de pavo sin piel",
      "calories": 135,
      "protein": 29,
      "carbs": 0,
      "fat": 1
    },
    {
      "id": "5341",
      "name": "Quinoa cocida",
      "calories": 120,
      "protein": 4.4,
      "carbs": 21.3,
      "fat": 1.9
    },
    {
      "id": "2c0f",
      "name": "Papa Hervida",
      "calories": 77,
      "protein": 2,
      "carbs": 17,
      "fat": 0.1
    },
    {
      "id": "3f10",
      "name": "Tofu firme",
      "calories": 76,
      "protein": 8,
      "carbs": 1.9,
      "fat": 4.8
    },
    {
      "id": "94e2",
      "name": "Atún en agua (lata)",
      "calories": 116,
      "protein": 26,
      "carbs": 0,
      "fat": 1
    },
    {
      "id": "89f3",
      "name": "Pan integral (1 rebanada, 30g)",
      "calories": 69,
      "protein": 3.6,
      "carbs": 12,
      "fat": 1
    },
    {
      "id": "c9eb",
      "name": "Frijoles",
      "calories": 151,
      "protein": 18.2,
      "carbs": 50.4,
      "fat": 1
    }
  ],
  "consumidos": [
    {
      "id": "8cf0",
      "userId": "4",
      "foodId": "73eb",
      "food": {
        "id": "73eb",
        "name": "prueba2",
        "calories": 3,
        "protein": 5,
        "carbs": 25,
        "fat": 19
      },
      "date": "2025-10-01T23:31:49.775Z"
    },
    {
      "id": "7620",
      "userId": "4",
      "foodId": "5341",
      "food": {
        "id": "5341",
        "name": "Quinoa cocida",
        "calories": 120,
        "protein": 4.4,
        "carbs": 21.3,
        "fat": 1.9
      },
      "date": "2025-10-01T23:43:57.530Z"
    }
  ]
}

C:\Users\Estudiantes\Desktop\Nutri-Track-React-\nutritrack\index.html
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