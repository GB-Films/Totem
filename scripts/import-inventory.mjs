import { execFileSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

const PROJECT_ID = "elgabinete-4c48c";
const BUCKET = "elgabinete-4c48c.firebasestorage.app";
const FIRESTORE_ROOT =
  `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;
const STORAGE_UPLOAD_ROOT = `https://storage.googleapis.com/upload/storage/v1/b/${BUCKET}/o`;
const STORAGE_OBJECT_ROOT = `https://storage.googleapis.com/storage/v1/b/${BUCKET}/o`;

const VALID_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const EXISTING_PRODUCT_ALIASES = new Map([
  ["verano - exteriores/canasto de mimbre - picnic", "001"],
  ["articulos del hogar/pulidora y aspiradora de piso philips", "002"],
  ["deco/relojes/reloj vintage dorado redondo", "003"],
  ["verano - exteriores/cajones amarillos", "004"],
  ["realizaciones/muneco de nieve", "005"],
  ["cocina/cafe - te - mate/taza de te con platito. blanca con flores celestes", "006"],
  ["cocina/caramelera", "007"],
  ["verano - exteriores/conservadora roja", "008"],
  ["verano - exteriores/conservadora rosa", "009"],
  ["grafica - oficina/carteleria", "010"],
  ["grafica - oficina/portasellos con sellito y almohadilla", "011"],
  ["cocina/platos/plato de te con borde azul y florcitas", "012"],
  ["juegos/tiro al blanco (solo deco)", "013"],
  ["grafica - oficina/libros marrones (kit 5)", "014"],
]);

const TOP_LEVEL_CATEGORY = new Map([
  ["grafica - oficina", "Oficina"],
  ["verano - exteriores", "Exterior"],
]);

const COLOR_WORDS = [
  ["negro", "Negro"],
  ["negra", "Negro"],
  ["blanco", "Blanco"],
  ["blanca", "Blanco"],
  ["rojo", "Rojo"],
  ["roja", "Rojo"],
  ["verde", "Verde"],
  ["azul", "Azul"],
  ["celeste", "Celeste"],
  ["naranja", "Naranja"],
  ["rosa", "Rosa"],
  ["lila", "Lila"],
  ["beige", "Beige"],
  ["cremita", "Crema"],
  ["crema", "Crema"],
  ["gris", "Gris"],
  ["marron", "Marrón"],
  ["bordo", "Bordó"],
  ["dorado", "Dorado"],
  ["plateado", "Plateado"],
  ["cromado", "Cromado"],
  ["aluminio", "Aluminio"],
  ["traslucido", "Traslúcido"],
  ["transparente", "Transparente"],
];

const MATERIAL_RULES = [
  [/\b(vidrio|cristal)\b/, "Vidrio"],
  [/\b(bronce|alpaca)\b/, "Metal"],
  [/\b(aluminio|cromad[oa]|metal|metalico|platead[oa]|dorad[oa])\b/, "Metal"],
  [/\b(madera|mimbre|bamboo)\b/, "Madera / fibra natural"],
  [/\b(plastico|acrilico)\b/, "Plástico"],
  [/\b(yeso)\b/, "Yeso"],
  [/\b(peluche|pana|tela)\b/, "Textil"],
  [/\b(taza|tacita|plato|bowl|jarrita|mate)\b/, "Cerámica / material a confirmar"],
];

const LARGE_ITEM_WORDS =
  /\b(aspiradora|pulidora|guitarra|pecera|notebook|macbook|ipad|tablet|fax|maquina de escribir|conservadora|cajones|parlante|lampara atardecer|juguera|tostadora)\b/;
const PREMIUM_ITEM_WORDS =
  /\b(camara|microfono|radio|telefono vintage|posnet|megafono|reloj vintage|calculadora ticket)\b/;
const SET_ITEM_WORDS =
  /\b(kit|juego|set|coleccion|libros|tazas|vasos|copas|cubiertos|broches|frascos|floreros|cuadros|portavelas)\b/;

function parseArgs(argv) {
  const [command = "help", ...rest] = argv;
  const options = { command };
  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = rest[index + 1];
    if (!next || next.startsWith("--")) {
      options[key] = true;
    } else {
      options[key] = next;
      index += 1;
    }
  }
  return options;
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeRelativePath(value) {
  return normalizeText(value.replaceAll("\\", "/"));
}

function stripImageExtensions(value) {
  let result = value;
  while (/\.(?:jpe?g|png|webp)$/i.test(result)) {
    result = result.replace(/\.(?:jpe?g|png|webp)$/i, "");
  }
  return result;
}

function inventoryGroupKey(relativePath) {
  const normalized = normalizeRelativePath(relativePath);
  const withoutExtensions = stripImageExtensions(normalized);
  return withoutExtensions
    .replace(/\s*\(\d+\)\s*$/, "")
    .replace(/\s+-\s*2\s*$/, "")
    .replace(/_+$/g, "")
    .trim();
}

function cleanName(relativePath) {
  const rawBase = stripImageExtensions(path.posix.basename(relativePath.replaceAll("\\", "/")))
    .replace(/\s*\(\d+\)\s*$/, "")
    .replace(/\s+-\s*2\s*$/, "")
    .replaceAll("_", " ")
    .replace(/\s+/g, " ")
    .trim();

  const replacements = [
    [/\bdeco\b/gi, "decorativo"],
    [/\bsolo decorativo\b/gi, "solo utilería"],
    [/\blampara\b/gi, "Lámpara"],
    [/\bmascara\b/gi, "Máscara"],
    [/\bjarron\b/gi, "Jarrón"],
    [/\btelefono\b/gi, "Teléfono"],
    [/\bmicrofono\b/gi, "Micrófono"],
    [/\bcamara\b/gi, "Cámara"],
    [/\bplastico\b/gi, "plástico"],
    [/\bmetalicos\b/gi, "metálicos"],
    [/\btraslucido\b/gi, "traslúcido"],
    [/\bmarron\b/gi, "marrón"],
    [/\bbordo\b/gi, "bordó"],
    [/\bte\b/gi, "té"],
    [/\bcafe\b/gi, "café"],
    [/\bbarilla\b/gi, "varilla"],
    [/\bfaron\b/gi, "Farol"],
    [/\bcob\b/gi, "con"],
    [/\bbodes\b/gi, "bordes"],
  ];

  let name = rawBase;
  for (const [pattern, replacement] of replacements) {
    name = name.replace(pattern, replacement);
  }
  return name.charAt(0).toLocaleUpperCase("es") + name.slice(1);
}

function slugify(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function inferCategory(relativePath) {
  const [topLevel = ""] = normalizeRelativePath(relativePath).split("/");
  return TOP_LEVEL_CATEGORY.get(topLevel) ?? "Utilería";
}

function inferTags(relativePath, name) {
  const segments = relativePath
    .replaceAll("\\", "/")
    .split("/")
    .slice(0, -1)
    .map(normalizeText)
    .filter((tag) => tag && tag !== "deco");

  const normalizedName = normalizeText(name);
  const keywordTags = [
    "vintage",
    "retro",
    "cocina",
    "bano",
    "tecnologia",
    "oficina",
    "juegos",
    "musica",
    "navidad",
    "religion",
    "asia",
    "tocador",
    "relojes",
    "telefonos",
    "camara",
    "video",
    "cine",
    "cafe",
    "te",
    "mate",
    "vasos",
    "copas",
    "platos",
    "botellas",
  ].filter((keyword) => normalizedName.includes(keyword));

  return Array.from(new Set([...segments, ...keywordTags]))
    .map((tag) =>
      tag
        .replace("grafica - oficina", "oficina")
        .replace("verano - exteriores", "exterior")
        .replace("articulos del hogar", "hogar")
        .replace("medicina - labo", "medicina y laboratorio"),
    )
    .filter((tag) => tag !== "decoracion" && tag !== "decorativo")
    .slice(0, 10);
}

function inferColor(name) {
  const normalized = normalizeText(name);
  const colors = [];
  for (const [word, label] of COLOR_WORDS) {
    if (normalized.includes(word) && !colors.includes(label)) colors.push(label);
  }
  return colors.length > 0 ? colors.join(" / ") : "A confirmar";
}

function inferMaterial(name) {
  const normalized = normalizeText(name);
  for (const [pattern, material] of MATERIAL_RULES) {
    if (pattern.test(normalized)) return material;
  }
  return "A confirmar";
}

function inferEraStyle(name, relativePath) {
  const normalized = normalizeText(`${name} ${relativePath}`);
  if (/\b(vintage|analogic|vieja|retro|casette|vhs|nokia|blackberry|olivetti)\b/.test(normalized)) {
    return "Vintage / retro";
  }
  if (/\b(japones|asia|arabe|aladdin|bamboo|abanico)\b/.test(normalized)) {
    return "Oriental / temático";
  }
  if (/\b(navidad|papa noel|muneco de nieve)\b/.test(normalized)) return "Navideño";
  if (/\b(religion|virgen)\b/.test(normalized)) return "Religioso";
  return "Contemporáneo";
}

function roundPrice(value) {
  return Math.max(500, Math.round(value / 500) * 500);
}

function inferWeeklyPrice(name) {
  const normalized = normalizeText(name);
  if (LARGE_ITEM_WORDS.test(normalized)) return 80_000;
  if (PREMIUM_ITEM_WORDS.test(normalized)) return 60_000;
  if (SET_ITEM_WORDS.test(normalized)) return 40_000;
  return 28_000;
}

function deterministicScore(value) {
  const digest = createHash("sha1").update(value).digest();
  return 20 + (digest.readUInt16BE(0) % 81);
}

function createEstimatedProduct({ id, relativePath, sourceFiles }) {
  const name = cleanName(relativePath);
  const weekly = inferWeeklyPrice(name);
  const category = inferCategory(relativePath);
  const collection = relativePath.replaceAll("\\", "/").split("/").slice(0, -1).join(" / ");

  return {
    id,
    name,
    category,
    tags: inferTags(relativePath, name),
    rentalPricePerWeek: weekly,
    description:
      `${name}. Pieza del archivo Totem disponible para cine, TV, publicidad, teatro y contenido.`,
    curiosities: collection ? `Inventariada en ${collection}.` : "Parte del archivo Totem.",
    status: "Muy bueno",
    measurements: "A confirmar",
    material: inferMaterial(name),
    color: inferColor(name),
    eraStyle: inferEraStyle(name, relativePath),
    availability: "Disponible",
    estimatedValue: roundPrice(weekly * 4.5),
    guaranteePercentage: 0.3,
    minimumDeposit: roundPrice(weekly * 0.125),
    featuredScore: deterministicScore(relativePath),
    stock: 1,
    internalNotes:
      `Importado desde Totem Inventario.zip. Datos estimados: verificar medidas, material, estado, stock y valores. Origen: ${sourceFiles.join(" | ")}`,
    images: [],
    visual: {
      tone: category === "Exterior" ? "green" : category === "Oficina" ? "blue" : "paper",
      sigil: "✦",
    },
  };
}

function decodeFirestoreValue(value) {
  if (!value) return undefined;
  if ("nullValue" in value) return null;
  if ("stringValue" in value) return value.stringValue;
  if ("booleanValue" in value) return value.booleanValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return Number(value.doubleValue);
  if ("timestampValue" in value) return value.timestampValue;
  if ("arrayValue" in value) return (value.arrayValue.values ?? []).map(decodeFirestoreValue);
  if ("mapValue" in value) {
    return Object.fromEntries(
      Object.entries(value.mapValue.fields ?? {}).map(([key, nested]) => [
        key,
        decodeFirestoreValue(nested),
      ]),
    );
  }
  return undefined;
}

function decodeFirestoreDocument(document) {
  return Object.fromEntries(
    Object.entries(document.fields ?? {}).map(([key, value]) => [key, decodeFirestoreValue(value)]),
  );
}

function encodeFirestoreValue(value) {
  if (value === null || value === undefined) return { nullValue: null };
  if (typeof value === "string") return { stringValue: value };
  if (typeof value === "boolean") return { booleanValue: value };
  if (typeof value === "number") {
    return Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value };
  }
  if (Array.isArray(value)) {
    return { arrayValue: { values: value.map(encodeFirestoreValue) } };
  }
  if (typeof value === "object") {
    return {
      mapValue: {
        fields: Object.fromEntries(
          Object.entries(value)
            .filter(([, nested]) => nested !== undefined)
            .map(([key, nested]) => [key, encodeFirestoreValue(nested)]),
        ),
      },
    };
  }
  throw new Error(`Unsupported Firestore value: ${typeof value}`);
}

function encodeFirestoreDocument(product) {
  return {
    fields: Object.fromEntries(
      Object.entries(product)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [key, encodeFirestoreValue(value)]),
    ),
  };
}

async function listFilesRecursively(root) {
  const output = [];
  async function visit(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) await visit(absolute);
      else if (VALID_EXTENSIONS.has(path.extname(entry.name).toLocaleLowerCase("en"))) output.push(absolute);
    }
  }
  await visit(root);
  return output;
}

async function fetchExistingProducts() {
  const response = await fetch(`${FIRESTORE_ROOT}/products?pageSize=500`);
  if (!response.ok) throw new Error(`Could not read products: ${response.status} ${await response.text()}`);
  const payload = await response.json();
  return new Map(
    (payload.documents ?? []).map((document) => {
      const id = document.name.split("/").at(-1);
      return [id, decodeFirestoreDocument(document)];
    }),
  );
}

function migrateExistingProduct(existing, estimated, sourceFiles) {
  const { rentalPricePerDay: legacyDailyPrice, ...existingWithoutDailyPrice } = existing;
  const shouldUseInferredCategory =
    existing.category === "Decoración" ||
    existing.category === "Decoracion" ||
    estimated.category === "Exterior" ||
    estimated.category === "Oficina";
  const validCategory = shouldUseInferredCategory ? estimated.category : existing.category;

  return {
    ...estimated,
    ...existingWithoutDailyPrice,
    id: estimated.id,
    category: validCategory,
    tags: Array.from(new Set([...(existing.tags ?? []), ...estimated.tags])).filter(
      (tag) => !["deco", "decoración", "decoracion"].includes(normalizeText(tag)),
    ),
    stock: Math.max(1, Number(existing.stock) || 1),
    rentalPricePerWeek:
      Number(existing.rentalPricePerWeek) > 0
        ? Number(existing.rentalPricePerWeek)
        : Number(legacyDailyPrice) > 0
          ? roundPrice(Number(legacyDailyPrice) * 7)
          : estimated.rentalPricePerWeek,
    description:
      typeof existing.description === "string" && existing.description.trim()
        ? existing.description
        : estimated.description,
    curiosities:
      typeof existing.curiosities === "string" && existing.curiosities.trim()
        ? existing.curiosities
        : estimated.curiosities,
    measurements:
      typeof existing.measurements === "string" && existing.measurements.trim()
        ? existing.measurements
        : estimated.measurements,
    material:
      typeof existing.material === "string" && existing.material.trim()
        ? existing.material
        : estimated.material,
    color:
      typeof existing.color === "string" && existing.color.trim()
        ? existing.color
        : estimated.color,
    eraStyle:
      typeof existing.eraStyle === "string" && existing.eraStyle.trim()
        ? existing.eraStyle
        : estimated.eraStyle,
    estimatedValue:
      Number(existing.estimatedValue) > 0
        ? Number(existing.estimatedValue)
        : estimated.estimatedValue,
    guaranteePercentage:
      Number(existing.guaranteePercentage) > 0
        ? Number(existing.guaranteePercentage)
        : estimated.guaranteePercentage,
    minimumDeposit:
      Number(existing.minimumDeposit) > 0
        ? Number(existing.minimumDeposit)
        : estimated.minimumDeposit,
    images: Array.isArray(existing.images) ? existing.images.filter(Boolean) : [],
    internalNotes: [
      existing.internalNotes,
      `Inventario vinculado: ${sourceFiles.join(" | ")}. Verificar datos estimados cuando corresponda.`,
    ]
      .filter(Boolean)
      .join(" "),
  };
}

async function prepareManifest({ source, manifest }) {
  const sourceRoot = path.resolve(source);
  const existingProducts = await fetchExistingProducts();
  const files = await listFilesRecursively(sourceRoot);
  const groups = new Map();

  for (const absolutePath of files) {
    const relativePath = path.relative(sourceRoot, absolutePath).replaceAll("\\", "/");
    const key = inventoryGroupKey(relativePath);
    const group = groups.get(key) ?? { key, relativePath, sourceFiles: [] };
    group.sourceFiles.push(relativePath);
    groups.set(key, group);
  }

  const sortedGroups = [...groups.values()].sort((a, b) =>
    a.relativePath.localeCompare(b.relativePath, "es"),
  );
  const usedIds = new Set(EXISTING_PRODUCT_ALIASES.values());
  let nextNumericId = Math.max(...[...EXISTING_PRODUCT_ALIASES.values()].map(Number));

  const products = sortedGroups.map((group) => {
    const aliasId = EXISTING_PRODUCT_ALIASES.get(group.key);
    let id = aliasId;
    if (!id) {
      do {
        nextNumericId += 1;
        id = String(nextNumericId).padStart(3, "0");
      } while (usedIds.has(id));
    }
    usedIds.add(id);

    const estimated = createEstimatedProduct({
      id,
      relativePath: group.relativePath,
      sourceFiles: group.sourceFiles,
    });
    const existing = aliasId ? existingProducts.get(id) : undefined;
    const product = existing
      ? migrateExistingProduct(existing, estimated, group.sourceFiles)
      : estimated;

    return {
      id,
      existing: Boolean(existing),
      sourceFiles: group.sourceFiles,
      product,
    };
  });

  const payload = {
    generatedAt: new Date().toISOString(),
    sourceRoot,
    projectId: PROJECT_ID,
    bucket: BUCKET,
    imageCount: files.length,
    productCount: products.length,
    existingProductCount: products.filter((entry) => entry.existing).length,
    newProductCount: products.filter((entry) => !entry.existing).length,
    products,
  };

  await fs.mkdir(path.dirname(path.resolve(manifest)), { recursive: true });
  await fs.writeFile(path.resolve(manifest), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(
    `Prepared ${payload.productCount} products from ${payload.imageCount} images ` +
      `(${payload.existingProductCount} existing, ${payload.newProductCount} new).`,
  );
  console.log(`Manifest: ${path.resolve(manifest)}`);
}

function loadFirebaseToolsAuth() {
  const firebaseLib = path.join(
    process.env.APPDATA,
    "npm",
    "node_modules",
    "firebase-tools",
    "lib",
  );
  const authPath = pathToFileURL(path.join(firebaseLib, "auth.js")).href;
  const apiv2Path = pathToFileURL(path.join(firebaseLib, "apiv2.js")).href;
  return Promise.all([import(authPath), import(apiv2Path)]).then(([authModule, apiModule]) => {
    const auth = authModule.default ?? authModule;
    const apiv2 = apiModule.default ?? apiModule;
    const account = auth.getGlobalDefaultAccount();
    if (!account) throw new Error("Firebase CLI is not authenticated. Run firebase login.");
    auth.setActiveAccount({}, account);
    return { account, getAccessToken: () => apiv2.getAccessToken() };
  });
}

async function authenticatedFetch(url, options = {}, getAccessToken) {
  const maxAttempts = 4;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const token = await getAccessToken();
      const headers = new Headers(options.headers ?? {});
      headers.set("Authorization", `Bearer ${token}`);
      const response = await fetch(url, {
        ...options,
        headers,
        signal: options.signal ?? AbortSignal.timeout(60_000),
      });
      if (response.ok) return response;

      const body = await response.text();
      const retryable = response.status === 408 || response.status === 429 || response.status >= 500;
      if (!retryable || attempt === maxAttempts) {
        throw new Error(`${options.method ?? "GET"} ${url} failed: ${response.status} ${body}`);
      }
    } catch (error) {
      if (attempt === maxAttempts) throw error;
      console.warn(
        `Request attempt ${attempt}/${maxAttempts} failed; retrying in ${attempt * 2}s.`,
      );
    }
    await new Promise((resolve) => setTimeout(resolve, attempt * 2_000));
  }
  throw new Error(`Request failed after ${maxAttempts} attempts: ${options.method ?? "GET"} ${url}`);
}

async function uploadImage({ absolutePath, objectName, getAccessToken }) {
  const content = await fs.readFile(absolutePath);
  const extension = path.extname(absolutePath).toLocaleLowerCase("en");
  const contentType =
    extension === ".png"
      ? "image/png"
      : extension === ".webp"
        ? "image/webp"
        : "image/jpeg";
  return uploadContent({
    content,
    contentType,
    objectName,
    getAccessToken,
    metadata: { inventorySource: "Totem Inventario.zip" },
  });
}

async function uploadContent({
  content,
  contentType,
  objectName,
  getAccessToken,
  metadata = {},
}) {
  const uploadUrl = `${STORAGE_UPLOAD_ROOT}?uploadType=media&name=${encodeURIComponent(objectName)}`;

  await authenticatedFetch(
    uploadUrl,
    {
      method: "POST",
      headers: { "Content-Type": contentType },
      body: content,
    },
    getAccessToken,
  );

  const downloadToken = randomUUID();
  await authenticatedFetch(
    `${STORAGE_OBJECT_ROOT}/${encodeURIComponent(objectName)}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cacheControl: "public,max-age=31536000,immutable",
        metadata: {
          firebaseStorageDownloadTokens: downloadToken,
          ...metadata,
        },
      }),
    },
    getAccessToken,
  );

  return (
    `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/` +
    `${encodeURIComponent(objectName)}?alt=media&token=${downloadToken}`
  );
}

async function createWebVariant(absolutePath, width, quality) {
  return sharp(absolutePath)
    .rotate()
    .resize({
      width,
      height: width,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality, effort: 5, smartSubsample: true })
    .toBuffer();
}

async function saveProduct(product, getAccessToken) {
  await authenticatedFetch(
    `${FIRESTORE_ROOT}/products/${encodeURIComponent(product.id)}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(encodeFirestoreDocument(product)),
    },
    getAccessToken,
  );
}

async function mapWithConcurrency(items, concurrency, worker) {
  let cursor = 0;
  const results = new Array(items.length);
  async function run() {
    while (true) {
      const index = cursor;
      cursor += 1;
      if (index >= items.length) return;
      results[index] = await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, run));
  return results;
}

async function uploadManifest({
  manifest,
  offset = 0,
  limit,
  concurrency = 3,
  "skip-complete": skipComplete = false,
  "only-existing": onlyExisting = false,
  "data-only": dataOnly = false,
}) {
  const manifestPath = path.resolve(manifest);
  const payload = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const sourceRoot = payload.sourceRoot;
  const start = Math.max(0, Number(offset) || 0);
  const requestedLimit = limit === undefined ? payload.products.length : Math.max(0, Number(limit));
  let selected = payload.products.slice(start, start + requestedLimit);
  if (onlyExisting) selected = selected.filter((entry) => entry.existing);
  if (skipComplete) {
    const currentProducts = await fetchExistingProducts();
    selected = selected.filter((entry) => {
      const images = currentProducts.get(entry.id)?.images;
      return !Array.isArray(images) || !images.some((url) => url.includes("inventory-"));
    });
  }
  const { account, getAccessToken } = await loadFirebaseToolsAuth();

  console.log(
    `Uploading ${selected.length} products starting at offset ${start} ` +
      `as ${account.user.email} with concurrency ${concurrency}.`,
  );

  await mapWithConcurrency(selected, Number(concurrency) || 3, async (entry, batchIndex) => {
    const uploadedUrls = [];
    for (
      let imageIndex = 0;
      !dataOnly && imageIndex < entry.sourceFiles.length;
      imageIndex += 1
    ) {
      const relativePath = entry.sourceFiles[imageIndex];
      const absolutePath = path.join(sourceRoot, ...relativePath.split("/"));
      const extension = path.extname(relativePath).toLocaleLowerCase("en");
      const objectName =
        `products/${entry.id}/inventory-${slugify(cleanName(relativePath))}` +
        `${entry.sourceFiles.length > 1 ? `-${imageIndex + 1}` : ""}${extension}`;
      const url = await uploadImage({ absolutePath, objectName, getAccessToken });
      uploadedUrls.push(url);
    }

    const product = {
      ...entry.product,
      images: Array.from(new Set([...(entry.product.images ?? []), ...uploadedUrls])),
    };
    await saveProduct(product, getAccessToken);
    console.log(
      `[${start + batchIndex + 1}/${payload.productCount}] ${entry.id} ${product.name} ` +
        `(${uploadedUrls.length} image${uploadedUrls.length === 1 ? "" : "s"})`,
    );
  });

  console.log(`Completed offset ${start}, count ${selected.length}.`);
}

async function optimizeManifest({
  manifest,
  offset = 0,
  limit,
  concurrency = 2,
  "skip-complete": skipComplete = false,
}) {
  const payload = JSON.parse(await fs.readFile(path.resolve(manifest), "utf8"));
  const sourceRoot = payload.sourceRoot;
  const currentProducts = await fetchExistingProducts();
  const start = Math.max(0, Number(offset) || 0);
  const requestedLimit = limit === undefined ? payload.products.length : Math.max(0, Number(limit));
  let selected = payload.products.slice(start, start + requestedLimit);

  if (skipComplete) {
    selected = selected.filter((entry) => {
      const current = currentProducts.get(entry.id);
      return (
        !Array.isArray(current?.thumbnailImages) ||
        current.thumbnailImages.length < entry.sourceFiles.length ||
        !Array.isArray(current?.detailImages) ||
        current.detailImages.length < entry.sourceFiles.length
      );
    });
  }

  const { account, getAccessToken } = await loadFirebaseToolsAuth();
  let sourceBytes = 0;
  let thumbnailBytes = 0;
  let detailBytes = 0;

  console.log(
    `Optimizing ${selected.length} products starting at offset ${start} ` +
      `as ${account.user.email} with concurrency ${concurrency}.`,
  );

  await mapWithConcurrency(selected, Number(concurrency) || 2, async (entry, batchIndex) => {
    const current = currentProducts.get(entry.id);
    if (!current) throw new Error(`Product ${entry.id} does not exist in Firestore.`);

    const thumbnailImages = [];
    const detailImages = [];

    for (let imageIndex = 0; imageIndex < entry.sourceFiles.length; imageIndex += 1) {
      const relativePath = entry.sourceFiles[imageIndex];
      const absolutePath = path.join(sourceRoot, ...relativePath.split("/"));
      const sourceStats = await fs.stat(absolutePath);
      const [thumbnail, detail] = await Promise.all([
        createWebVariant(absolutePath, 640, 76),
        createWebVariant(absolutePath, 1600, 82),
      ]);
      const suffix = String(imageIndex + 1).padStart(2, "0");
      const [thumbnailUrl, detailUrl] = await Promise.all([
        uploadContent({
          content: thumbnail,
          contentType: "image/webp",
          objectName: `products/${entry.id}/web/card-${suffix}.webp`,
          getAccessToken,
          metadata: {
            inventorySource: "Totem Inventario.zip",
            variant: "card",
            width: "640",
          },
        }),
        uploadContent({
          content: detail,
          contentType: "image/webp",
          objectName: `products/${entry.id}/web/detail-${suffix}.webp`,
          getAccessToken,
          metadata: {
            inventorySource: "Totem Inventario.zip",
            variant: "detail",
            width: "1600",
          },
        }),
      ]);

      sourceBytes += sourceStats.size;
      thumbnailBytes += thumbnail.length;
      detailBytes += detail.length;
      thumbnailImages.push(thumbnailUrl);
      detailImages.push(detailUrl);
    }

    await saveProduct(
      {
        ...current,
        id: entry.id,
        thumbnailImages,
        detailImages,
      },
      getAccessToken,
    );
    console.log(
      `[${start + batchIndex + 1}/${payload.productCount}] ${entry.id} ${current.name} ` +
        `(${entry.sourceFiles.length} image${entry.sourceFiles.length === 1 ? "" : "s"})`,
    );
  });

  const megabytes = (bytes) => (bytes / 1024 / 1024).toFixed(1);
  const optimizedBytes = thumbnailBytes + detailBytes;
  console.log(`Original source: ${megabytes(sourceBytes)} MB`);
  console.log(`Card variants: ${megabytes(thumbnailBytes)} MB`);
  console.log(`Detail variants: ${megabytes(detailBytes)} MB`);
  console.log(
    `Web variants total: ${megabytes(optimizedBytes)} MB ` +
      `(${((1 - optimizedBytes / sourceBytes) * 100).toFixed(1)}% smaller than originals)`,
  );
}

async function verifyImport({ manifest }) {
  const payload = JSON.parse(await fs.readFile(path.resolve(manifest), "utf8"));
  const products = await fetchExistingProducts();
  const expectedIds = new Set(payload.products.map((entry) => entry.id));
  const missing = [...expectedIds].filter((id) => !products.has(id));
  const invalidCategories = [...products.entries()]
    .filter(([, product]) => product.category === "Decoración" || product.category === "Decoracion")
    .map(([id]) => id);
  const withoutImages = [...expectedIds].filter(
    (id) => !Array.isArray(products.get(id)?.images) || products.get(id).images.length === 0,
  );
  const withoutCompleteThumbnails = payload.products
    .filter((entry) => {
      const images = products.get(entry.id)?.thumbnailImages;
      return !Array.isArray(images) || images.length < entry.sourceFiles.length;
    })
    .map((entry) => entry.id);
  const withoutCompleteDetails = payload.products
    .filter((entry) => {
      const images = products.get(entry.id)?.detailImages;
      return !Array.isArray(images) || images.length < entry.sourceFiles.length;
    })
    .map((entry) => entry.id);

  console.log(`Firestore products: ${products.size}`);
  console.log(`Expected products: ${expectedIds.size}`);
  console.log(`Missing expected IDs: ${missing.length}${missing.length ? ` (${missing.join(", ")})` : ""}`);
  console.log(
    `Invalid decoration categories: ${invalidCategories.length}` +
      `${invalidCategories.length ? ` (${invalidCategories.join(", ")})` : ""}`,
  );
  console.log(
    `Expected products without images: ${withoutImages.length}` +
      `${withoutImages.length ? ` (${withoutImages.join(", ")})` : ""}`,
  );
  console.log(
    `Products without complete card variants: ${withoutCompleteThumbnails.length}` +
      `${withoutCompleteThumbnails.length ? ` (${withoutCompleteThumbnails.join(", ")})` : ""}`,
  );
  console.log(
    `Products without complete detail variants: ${withoutCompleteDetails.length}` +
      `${withoutCompleteDetails.length ? ` (${withoutCompleteDetails.join(", ")})` : ""}`,
  );
  if (
    missing.length ||
    invalidCategories.length ||
    withoutImages.length ||
    withoutCompleteThumbnails.length ||
    withoutCompleteDetails.length
  ) {
    process.exitCode = 1;
  }
}

function printHelp() {
  console.log(`
Usage:
  node scripts/import-inventory.mjs prepare --source <folder> --manifest <file>
  node scripts/import-inventory.mjs upload --manifest <file> [--offset N] [--limit N] [--concurrency N]
  node scripts/import-inventory.mjs optimize --manifest <file> [--offset N] [--limit N] [--concurrency N]
  node scripts/import-inventory.mjs verify --manifest <file>
`);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.command === "prepare") {
    if (!options.source || !options.manifest) return printHelp();
    await prepareManifest(options);
    return;
  }
  if (options.command === "upload") {
    if (!options.manifest) return printHelp();
    await uploadManifest(options);
    return;
  }
  if (options.command === "optimize") {
    if (!options.manifest) return printHelp();
    await optimizeManifest(options);
    return;
  }
  if (options.command === "verify") {
    if (!options.manifest) return printHelp();
    await verifyImport(options);
    return;
  }
  printHelp();
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack : error);
  process.exitCode = 1;
});
