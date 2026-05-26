# TOTEM RENTAL

Aplicación estática en React + Vite + TypeScript + Tailwind CSS para un catálogo de props de producción audiovisual.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run deploy
```

## GitHub Pages

La base de Vite está configurada con la variable `VITE_BASE_PATH`.

Para publicar en un repo de usuario u organización, normalmente alcanza con:

```bash
npm run deploy
```

Para publicar en un repo de proyecto, indicá el nombre del repo como base:

```bash
VITE_BASE_PATH=/nombre-del-repo/ npm run deploy
```

En Windows PowerShell:

```powershell
$env:VITE_BASE_PATH="/nombre-del-repo/"; npm run deploy
```

La app usa rutas de React Router. La selección de carrito se conserva en `localStorage`.

## Firebase

Las reservas confirmadas pueden sincronizarse en Cloud Firestore. Copiá `.env.example` a `.env` y completá las variables de tu app web de Firebase:

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Colecciones usadas:

- `products`: catálogo sincronizado. Cada documento debe tener la misma forma que los objetos de `src/data/products.ts`; el ID del documento se usa como `product.id`.
- `adminEmails`: permisos de administración. Cada documento usa como ID el email autorizado y debe tener `{ "active": true }`.
- `reservations`: reservas confirmadas desde el sitio. Requieren login con Google y bloquean las fechas en el calendario.
- `userProfiles`: datos de usuarios para gestionar reservas: nombre, apellido, DNI y celular. Cada usuario edita su propio perfil; los admins pueden leerlos desde el panel.

El panel de administración vive en `/admin`. Requiere Firebase Authentication con Google y permisos en `adminEmails/{email}`.

Para desplegar reglas:

```bash
npx firebase-tools deploy --only firestore,storage
```

Si las variables no están cargadas, la app usa el catálogo local y almacenamiento local como fallback para desarrollo y GitHub Pages sigue funcionando.

El panel permite subir imágenes a Cloud Storage o pegar URLs públicas de imágenes.
