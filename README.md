# 🌀 Rick & Morty Memory Game

¡Bienvenido al multiverso! Este es un juego de memoria de alto rendimiento desarrollado con **React**, **Vite** y **Node.js v24**, siguiendo los principios de **Clean Architecture** y **SOLID**.

El proyecto desafía a los jugadores a encontrar pares de personajes de la serie en el menor número de intentos posible, utilizando un sistema de autenticación moderno y una lógica de juego desacoplada en Custom Hooks.

---

## 🚀 Tecnologías y Herramientas

- **Frontend:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/) (TypeScript).
- **Runtime:** [Node.js v24.x](https://nodejs.org/).
- **Gestor de Paquetes:** `npm`.
- **Autenticación:** [jose](https://github.com/panva/jose) (JWT para entornos modernos).
- **Testing:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- **Estilos:** CSS3 nativo con Custom Properties y animaciones avanzadas.
- **Variables de Entorno:** `.env.example` con ejemplo de `VITE_JWT_SECRET`.

---

## 📦 Variables de Entorno

Copia el archivo `.env.example` a `.env` y configura tu clave secreta:

```bash
cp .env.example .env
# Editar .env y configurar VITE_JWT_SECRET
```

---

## 🏗️ Arquitectura del Proyecto

El código está organizado siguiendo una separación estricta de capas para garantizar la escalabilidad y facilidad de pruebas:

- **`api/`**: Logica para la implementacion de la API de Rick and Morty.
- **`router/`**: Manejo de URLs y rutas de la aplicación.
- **`components/`**: Componentes reutilizables de la aplicación.
- **`domain/`**: Entidades y lógica de negocio pura (Interfaces, DTOs y utilidades de barajado).
- **`application/`**: Casos de uso y Hooks de orquestación (como `useMemoryGame`).
- **`infrastructure/`**: Implementaciones externas (Servicios de API y Repositorios con sistema de Cache).
- **`presentation/`**: Componentes de React, Screens y estilos visuales.
- **`utils/`**: Guardias de ruta (`PrivateRoute`/`PublicRoute`) y gestión de Storage.

---

## Notas Adicionales

- El juego utiliza una API externa para obtener los personajes de Rick and Morty.
- La autenticación se realiza mediante tokens JWT.
- El juego tiene un sistema de puntuación que se actualiza en tiempo real.

> **PD:** Puedes usar cualquier correo y contraseña para iniciar sesión.

---

## ⚙️ Configuración e Instalación

### Requisitos

- **Node.js v24.x** (Indispensable para compatibilidad con las últimas APIs).
- **npm v10+**.

### Pasos

1.  **Clonar el repositorio:**

    ```bash
    git clone
    cd memory-game-rick
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Iniciar entorno de desarrollo:**
    ```bash
    npm run dev
    ```

---

## 🧪 Suite de Pruebas (Vitest)

Este proyecto incluye pruebas unitarias para asegurar que la lógica de autenticación y el motor del juego funcionen correctamente.

- **Correr pruebas:** `npm run test`
- **Interfaz de Vitest:** `npm run test:ui`
- **Reporte de cobertura:** `npm run coverage`

---

## 🌟 Características Destacadas

- **Asynchronous Auth:** Validación de tokens JWT de forma asíncrona para evitar bloqueos en el hilo principal.
- **Portal Loader:** Interfaz de carga temática inspirada en los portales de Rick.
- **Rank System:** El mensaje de victoria varía según tu desempeño (Nivel Rick, Morty o Jerry).
- **Optimización VDOM:** Uso estratégico de `useMemo` y `useCallback` para renders eficientes.

---

## 📚 Documentación

- **Documentación de la API:** [API Documentation](https://rickandmortyapi.com/documentation)

---

## Figma - Diseño

Inspiración de diseño de la aplicación

- **Diseño:** [Figma Design](figma.com/design/9qbS6fYy2oIZny3Ye8G8DS/Rick-and-Morty?node-id=16-874&t=tHzCB1wpSv9EVl5D-4)

---

## 👤 Autor

- **Carlos Gomez** - _Full Stack Software Engineer_
- LinkedIn: [https://www.linkedin.com/in/carlosmariogomezg/](https://www.linkedin.com/in/carlosmariogomezg/)

---

> Hecho con 💚 y mucha ciencia ficción. ¡Wubba Lubba Dub-Dub!
