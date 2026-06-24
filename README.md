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
- [Contribuciones](#contribuciones-)
- [Licencia](#licencia-)
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
