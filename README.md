# TOTEM RENTAL

Aplicación web para recorrer el catálogo, guardar favoritos, elegir fechas, registrar pedidos con seña y administrar la operación del rental.

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

La app está hecha con React, Vite, TypeScript y Firebase. El catálogo y la disponibilidad se actualizan en tiempo real.

## Variables

Copiá `.env.example` a `.env.local` y completá:

- `VITE_FIREBASE_*`: configuración de la app web de Firebase.
- `VITE_WHATSAPP_NUMBER`: número de WhatsApp con código de país, sin `+` ni espacios. Por defecto usa `5491138060642`.

## Datos

- `products`: productos reales cargados desde el panel.
- `bookings`: pedidos privados, visibles sólo para el cliente correspondiente y administradores.
- `reservationRanges`: rangos públicos de disponibilidad, sin datos personales.
- `userProfiles`: datos de contacto de clientes.
- `adminEmails`: emails habilitados para acceder a `/admin`.

Los productos ficticios ya no forman parte del catálogo local. La app muestra únicamente las piezas cargadas en Firebase.

## Administración

El panel vive en `/admin` y permite:

- ver el resumen de operación;
- seguir reservas por pedido y actualizar su estado;
- revisar ocupación en calendario;
- consultar el directorio de clientes;
- crear y editar productos, stock, precios e imágenes.

Para que una cuenta sea administradora, creá `adminEmails/{email}` con `{ "active": true }`.

## Publicación

Antes de publicar cambios de datos o reservas, desplegá reglas y hosting:

```bash
firebase deploy --only firestore:rules,storage,hosting
```

La publicación alternativa en GitHub Pages sigue disponible con:

```bash
npm run deploy
```

Para otro nombre de repositorio, configurá `VITE_BASE_PATH`.
