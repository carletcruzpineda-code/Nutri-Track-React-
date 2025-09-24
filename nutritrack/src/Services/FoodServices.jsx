/* Obtener todos los alimentos */
export async function getFoods() {
  try {
    const response = await fetch("http://localhost:3001/foods", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
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
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar food:", error);
    throw error;
  }
}

/* Eliminar alimento por id */
export async function eliminarFood(id) {
  try {
    await fetch(`http://localhost:3001/foods/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error al eliminar food:", error);
    throw error;
  }
}
