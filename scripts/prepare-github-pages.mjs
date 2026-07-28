import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const distDirectory = resolve("dist");
const indexFile = resolve(distDirectory, "index.html");
const staticRoutes = [
  "catalogo",
  "colecciones",
  "como-funciona",
  "sobre-nosotros",
  "cuenta",
  "contacto",
  "admin",
];

await copyFile(indexFile, resolve(distDirectory, "404.html"));

await Promise.all(
  staticRoutes.map(async (route) => {
    const routeDirectory = resolve(distDirectory, route);
    await mkdir(routeDirectory, { recursive: true });
    await copyFile(indexFile, resolve(routeDirectory, "index.html"));
  }),
);
