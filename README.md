# Tenpo

Proyecto frontend desarrollado con Vite, TypeScript y Tailwind CSS. Este proyecto consume datos de la API de Rick and Morty para presentar una lista de personajes, con funcionalidades de autenticación ficticia y navegación protegida.

---

## 🚀 Cómo correr el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tenpo.git
cd tenpo
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
VITE_APP_FAKE_USERNAME=admin
VITE_APP_FAKE_PASSWORD=admin
VITE_APP_FAKE_EMAIL=admin@admin.com
VITE_APP_USERS_API_URL=https://rickandmortyapi.com/api/character
```

Estas variables son usadas para autenticación ficticia y para consumir datos de personajes desde la API de Rick and Morty.

### 4. Ejecutar en local

```bash
npm run dev
```

El proyecto correrá en [http://localhost:3000](http://localhost:3000).

---

## 📁 Estructura del proyecto

La estructura general del código fuente se encuentra dentro de la carpeta `src`, organizada de forma modular y escalable:

```
src/
├── assets/
├── base/
├── components/
├── pages/
├── styles/
```

### `assets/`

Contiene recursos estáticos del proyecto.

- `images/`: Imágenes utilizadas en diferentes componentes.
- `lustrations/`: Ilustraciones o SVGs decorativos para vistas o estados vacíos.

---

### `base/`

Contiene la lógica y configuraciones base reutilizables a lo largo del proyecto.

- `constants/`: Variables y valores constantes como rutas, mensajes, colores, etc.
- `context/`: Manejadores de contexto para compartir estado global (por ejemplo, autenticación).
- `hooks/`: Custom hooks como `useAuth`, `useUsers`, etc., para encapsular lógica.
- `services/`: Lógica para consumir APIs externas, como la de Rick and Morty.
- `types/`: Tipos TypeScript compartidos por todo el proyecto.
- `utils/`: Funciones utilitarias o helpers como validadores o formateadores.

---

### `components/`

Componentes reutilizables de UI, organizados por su propósito o contexto.

- `common/`: Componentes genéricos como botones, inputs, modales, etc.
- `layout/`: Componentes estructurales como `Navbar`, `Sidebar`, `Footer`, etc.
- `login/`: Componentes específicos de la vista de login (inputs, formularios, mensajes).
- `skeletons/`: Placeholders para estados de carga (skeleton loaders).
- `users/`: Componentes relacionados con la visualización y manipulación de usuarios.

---

### `pages/`

Vistas principales del sistema, asociadas a rutas.

- `Home.tsx`: Página principal o portada de la aplicación.
- `Login.tsx`: Vista de autenticación con formulario de login.
- `Main.tsx`: Vista general protegida donde se cargan las secciones internas.
- `NotFound.tsx`: Página 404 personalizada.
- `Panel.tsx`: Panel de control o dashboard tras login exitoso.
- `Users.tsx`: Vista que consume la API de usuarios (Rick and Morty) y muestra la lista.

---

### `styles/`

Contiene los estilos globales y configuración de Tailwind.

- `general.css`: Estilos generales personalizados (reset, tipografías, etc.).
- `tailwind.css`: Archivo donde se importan las directivas de Tailwind (`@tailwind base`, `components`, `utilities`).

---

## 🛠️ Scripts disponibles

En el `package.json` tienes disponibles los siguientes scripts:

```json
"scripts": {
  "dev": "vite --port 3000",
  "build": "tsc && vite build",
  "preview": "vite preview"
}
```

- `npm run dev`: Inicia el servidor de desarrollo en el puerto 3000.
- `npm run build`: Compila el proyecto para producción.
- `npm run preview`: Previsualiza el build de producción localmente.

---

## 🧪 Tecnologías utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Rick and Morty API](https://rickandmortyapi.com/)
- [Heroicons](https://github.com/tailwindlabs/heroicons)
- [Axios](https://axios-http.com/)
- [Flowbite](https://flowbite.com/)
- [Flowbite React](https://flowbite-react.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [ts-md5](https://www.npmjs.com/package/ts-md5)
- [usehooks-ts](https://usehooks-ts.com/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Wouter](https://github.com/molefrog/wouter)

---

## 📌 Notas

- El sistema de autenticación es ficticio y solo compara los valores ingresados con las variables definidas en `.env`.
- Los datos de usuarios provienen de una API pública y están sujetos a los límites de la misma.

---
