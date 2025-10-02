NutriTrack es una aplicación web desarrollada en **React** que permite a los usuarios registrar, visualizar y gestionar su alimentación diaria, con el objetivo de mejorar sus hábitos nutricionales.
Funcionalidades principales
- Registro de usuarios (con roles: **Admin** y **Normal**).
- Inicio de sesión y cierre de sesión.
- Registro y consulta de alimentos consumidos.
- Información nutricional detallada (calorías, proteínas, carbohidratos, grasas).
- Secciones informativas (Acerca de, Misión, Visión, Características).
- Interfaz intuitiva con **Bootstrap** y componentes reutilizables.

  Tecnologías y librerías utilizadas
- React → framework principal para la UI.
- React Bootstrap → estilos y componentes preconstruidos.
- Lucide-react→ íconos vectoriales modernos.
- React Router DOM→ navegación entre páginas.
- Context API → manejo de autenticación y usuarios.
- JSON Server → base de datos local (archivo `db.json`).
- CSS personalizado → estilos propios (secciones y dashboard).

Estructura destacada
- src/Components` → componentes principales (Header, Footer, Hero, Features, About, etc.).
- src/Components/UserContext.jsx` → funciones para CRUD de usuarios.
- db.json` → datos simulados de usuarios y alimentos.
- App.jsx` → enrutamiento principal y renderizado.
- main.jsx` → punto de entrada del proyecto.

Instalación y ejecución
1. Clonar el repositorio  
   bash
   cambiar git clone https://github.com/carletcruzpineda-code/nutritrack.git
   cd nutritrack
 
2. Instalar dependencias  
   bash
   npm install
  
3. Iniciar servidor de React  
   bash
   npm run dev
 
4. Iniciar JSON Server en otra terminal  
 bash
npx json-server --watch db.json --port 3001
   

 Autenticación
- Admin y usuarios normales se gestionan desde `db.json`.
- Admin accede a panel especial, usuarios normales al dashboard personal.

 Autores
Proyecto desarrollado por estudiantes con el propósito de fomentar la educación en nutrición y hábitos saludables.

