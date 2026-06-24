# MoviesFinder 🎬

Una plataforma web donde los usuarios pueden compartir sus películas favoritas con calificaciones, posters y más.

[![Estado del Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/Ar-06/MoviesFinder)
[![Versión](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/Ar-06/MoviesFinder/releases)
[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-yellow)](https://opensource.org/licenses/MIT)

## Tabla de Contenidos

- [Descripción](#descripción-)
- [Características](#características-)
- [Stack Tecnológico](#stack-tecnológico-)
- [Instalación](#instalación-)
- [Uso](#uso-)
- [Estructura del Proyecto](#estructura-del-proyecto-)
- [Referencia de la API](#referencia-de-la-api-)
- [Enlaces Importantes](#enlaces-importantes-)

---

## Descripción 📝

MoviesFinder es una aplicación web dinámica construida con el stack MERN (MongoDB, Express, React, Node.js). Permite a los usuarios descubrir, compartir y gestionar sus películas favoritas. Los usuarios pueden crear una cuenta, iniciar sesión y luego compartir recomendaciones de películas incluyendo su calificación, año de lanzamiento y una imagen de poster opcional. La plataforma también proporciona funciones para visualizar y gestionar tus propias recomendaciones.

---

## Características ✨

- **Autenticación de Usuarios:** Sistema seguro de registro e inicio de sesión utilizando JWT para la autenticación.
- **Recomendaciones de Películas:** Los usuarios pueden agregar sus películas favoritas con título, calificación y año.
- **Carga de Imágenes:** Soporte para subir imágenes de posters de películas a través de Cloudinary.
- **Perfil Personalizado:** Visualiza y gestiona tus propias recomendaciones de películas en tu página de perfil.
- **Búsqueda de Películas:** Funcionalidad de búsqueda para encontrar películas dentro de la plataforma.
- **Diseño Responsivo:** Una interfaz de usuario moderna y responsiva impulsada por Tailwind CSS.
- **Modo Oscuro:** Soporte para un tema oscuro para una experiencia de visualización cómoda.
- **Dockerización:** La aplicación backend está contenedorizada con Docker para facilitar su despliegue.

---

## Stack Tecnológico 🚀

- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Zod (para validación), JWT (jsonwebtoken), bcryptjs, Cloudinary (para almacenamiento de imágenes).
- **Frontend:** React, Vite, React Router DOM, Tailwind CSS, Axios, React Hook Form, Toastify, Framer Motion, Lucide React.
- **Herramientas de Desarrollo:** ESLint, Docker.

---

## Instalación 🛠️

Este proyecto consta de un backend y un frontend. Ambos deben ser configurados.

### Prerrequisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cuenta de Cloudinary](https://cloudinary.com/)

### Configuración del Backend

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Ar-06/MoviesFinder.git](https://github.com/Ar-06/MoviesFinder.git)
   cd MoviesFinder
2. **Navegar al directorio del backend e instalar las dependencias:**
    ```bash
    cd backend
    npm install
3. **Crear un archivo .env en el directorio backend y configurar tus variables de entorno:
    ```bash
    PORT=3000
    JWT_SECRET=tu_clave_super_secreta
    MONGO_URI=mongodb://localhost:27017/moviesfinder
    CLOUDINARY_CLOUD_NAME=tu_cloudinary_cloud_name
    CLOUDINARY_API_KEY=tu_cloudinary_api_key
    CLOUDINARY_API_SECRET=tu_cloudinary_api_secret
4. **Ejecutar el servidor backend:**
   ```bash
   npm run dev
### Configuración del Frontend
1. **Navegar al directorio del frontend e instalar las dependencias:**
     ```bash
      cd ../frontend
      npm install
2. **Crear un archivo .env en el directorio frontend y configurar tus variables de entorno:**
     ```bash
      VITE_API_URL=http://localhost:3000
3. **Ejecutar el servidor de desarrollo del frontend:**
    ```bash
    npm run dev
### Uso 🚀
Una vez que tanto el frontend como el backend estén corriendo, puedes acceder a la aplicación MoviesFinder en tu navegador (normalmente en http://localhost:5173).
Acciones Clave:

- **Registro/Login:** Navega a la página de autenticación para crear una cuenta o iniciar sesión con credenciales existentes.
- **Agregar Película:** Después de iniciar sesión, haz clic en el botón "Agregar" en la barra de navegación para abrir un modal y añadir una nueva recomendación. Puedes subir una imagen, ingresar el título,  año y calificación.
- **Ver Películas:** La página de inicio muestra todas las películas recomendadas. Puedes buscar películas usando la barra de búsqueda.
- **Ver Tus Películas:** Navega a tu página de perfil para ver todas las películas que has recomendado.
- **Eliminar Película:** En tu página de perfil, puedes eliminar tus recomendaciones de películas.
- **Cerrar Sesión:** Cierra sesión desde tu cuenta a través de la página de perfil o el menú desplegable.

### Estructura del proyecto 📁
   ```text
   MoviesFinder/
   ├── backend/
   │   ├── src/
   │   │   ├── controllers/
   │   │   ├── db/
   │   │   ├── libs/
   │   │   ├── middlewares/
   │   │   ├── models/
   │   │   ├── routes/
   │   │   ├── schemas/
   │   │   └── app.js
   │   │   └── index.js
   │   ├── Dockerfile
   │   ├── .env
   │   └── package.json
   ├── frontend/
   │   ├── public/
   │   ├── src/
   │   │   ├── api/
   │   │   ├── components/
   │   │   ├── context/
   │   │   ├── pages/
   │   │   ├── App.jsx
   │   │   ├── main.jsx
   │   │   └── index.css
   │   ├── index.html
   │   ├── package.json
   │   ├── vite.config.js
   │   ├── .env
   │   └── vercel.json
   └── docker-compose.yml

### Referencia de la API 🌐
**Rutas de Autenticación**

- POST /auth/register : Registrar un nuevo usuario.
- POST /auth/login : Iniciar sesión de un usuario.
- POST /auth/logout : Cerrar sesión del usuario actual.
- GET /auth/profile : Obtener el perfil del usuario autenticado (requiere token).
- GET /auth/verify : Verificar el token del usuario.


**Rutas de Películas**
- POST /movies/register : Registrar una nueva recomendación de película (requiere token).
- GET /movies : Obtener todas las películas.
- GET /me : Obtener las películas recomendadas por el usuario autenticado (requiere token).
- DELETE /:id : Eliminar una película específica por ID (requiere token).

### Enlances Importantes 🔗

- Demo en Vivo (Frontend): MoviesFinder Frontend en Vercel
- API en Producción (Backend): MoviesFinder API en Render (Si inicia, espere unos segundos para que despierte el servidor).
