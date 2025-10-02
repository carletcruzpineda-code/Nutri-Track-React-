
export async function getConsumidos() {
  try {
    const response = await fetch("http://localhost:3001/consumidos", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al recuperar consumidos:", error);
    throw error;
  }
}

export async function getConsumidosByUser(userId) {
  try {
    const response = await fetch(`http://localhost:3001/consumidos?userId=${encodeURIComponent(userId)}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al recuperar consumidos por usuario:", error);
    throw error;
  }
}

export async function getConsumidoById(id) {
  try {
    const response = await fetch(`http://localhost:3001/consumidos/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener consumido:", error);
    throw error;
  }
}

export async function agregarConsumido(consumidoObj) {
  try {
    const response = await fetch("http://localhost:3001/consumidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(consumidoObj)
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al agregar consumido:", error);
    throw error;
  }
}

export async function actualizarConsumido(consumidoObj) {
  try {
    const response = await fetch(`http://localhost:3001/consumidos/${consumidoObj.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(consumidoObj)
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar consumido:", error);
    throw error;
  }
}

export async function eliminarConsumido(id) {
  try {
    const response = await fetch(`http://localhost:3001/consumidos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    
  } catch (error) {
    console.error("Error al eliminar consumido:", error);
    throw error;
  }
}
