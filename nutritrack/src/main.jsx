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

/* preparar el entorno necesario para que la aplicación funcione correctamente,
 asegurando que tanto los estilos como el control de sesión estén activos desde el primer renderizado. */