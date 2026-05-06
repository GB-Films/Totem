# EL GABINETE

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

La app usa rutas de React Router y conserva la selección de productos en `localStorage`. No requiere backend, login ni pagos.
