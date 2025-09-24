/* Obtener todos los usuarios */
export async function getUsuarios() {
  try {
    const response = await fetch("http://localhost:3001/usuarios", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
}

/* Obtener usuario por email y contraseña */
export async function getUsuario(email, password) {
  try {
    const response = await fetch(
      `http://localhost:3001/usuarios?email=${email}&password=${password}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    return await response.json(); // Devuelve un array
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    throw error;
  }
}

/* Registrar nuevo usuario */
export async function agregarUsuario(usuarioObj) {
  try {
    const response = await fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuarioObj),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
}