import { promises as fs } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const config = require('../transloco.config.js');

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const scopedLibs = Array.isArray(config.scopedLibs) ? config.scopedLibs : [];

function logInfo(message) {
  console.log(`[transloco-scoped-libs] ${message}`);
}

function logWarn(message) {
  console.warn(`[transloco-scoped-libs] ${message}`);
}

async function fileExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function readPackageI18nConfig(packageJsonPath) {
  if (!(await fileExists(packageJsonPath))) {
    logWarn(`No se encontró ${path.relative(rootDir, packageJsonPath)}. Se usará la convención por defecto.`);
    return [];
  }

  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
  return Array.isArray(packageJson.i18n) ? packageJson.i18n : [];
}

async function copyScopedLibTranslations() {
  if (scopedLibs.length === 0) {
    logWarn('No hay librerías configuradas en transloco.config.js');
    return;
  }

  let copiedScopes = 0;
  let copiedFiles = 0;

  for (const lib of scopedLibs) {
    const libSource = typeof lib?.src === 'string' ? lib.src : '';
    const destinations = Array.isArray(lib?.dist) ? lib.dist : [];

    if (!libSource || destinations.length === 0) {
      logWarn(`Configuración inválida de scopedLib: ${JSON.stringify(lib)}`);
      continue;
    }

    logInfo(`Procesando ${libSource}`);

    const packageJsonPath = path.resolve(rootDir, libSource, 'package.json');
    const i18nEntries = await readPackageI18nConfig(packageJsonPath);
    const normalizedEntries = i18nEntries.length > 0
      ? i18nEntries
      : [{
          scope: path.basename(libSource),
          path: 'src/i18n',
        }];

    for (const entry of normalizedEntries) {
      const scopeName = typeof entry?.scope === 'string' ? entry.scope : path.basename(libSource);
      const relativeSourcePath = typeof entry?.path === 'string' ? entry.path : 'src/i18n';
      const sourceDir = path.resolve(rootDir, libSource, relativeSourcePath);

      if (!(await fileExists(sourceDir))) {
        logWarn(`No existe el directorio ${path.relative(rootDir, sourceDir)} para el scope ${scopeName}`);
        continue;
      }

      const files = await fs.readdir(sourceDir);
      const jsonFiles = files.filter((name) => name.endsWith('.json'));

      if (jsonFiles.length === 0) {
        logWarn(`No hay JSONs de traducción en ${path.relative(rootDir, sourceDir)} para el scope ${scopeName}`);
        continue;
      }

      copiedScopes += 1;
      copiedFiles += jsonFiles.length * destinations.length;

      for (const destination of destinations) {
        const targetDir = path.resolve(rootDir, destination, scopeName);
        await fs.mkdir(targetDir, { recursive: true });

        await Promise.all(
          jsonFiles.map((fileName) =>
            fs.copyFile(path.join(sourceDir, fileName), path.join(targetDir, fileName)),
          ),
        );

        logInfo(`Scope ${scopeName}: ${jsonFiles.length} fichero(s) copiado(s) a ${path.relative(rootDir, targetDir)}`);
      }
    }
  }

  logInfo(`Extracción completada. Scopes copiados: ${copiedScopes}. Ficheros copiados: ${copiedFiles}.`);
}

copyScopedLibTranslations().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


