/* src/Services/UserService.jsx */

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
