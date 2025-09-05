#!/usr/bin/env node
// Script para crear una ruta Next.js con page y CSS
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Debes indicar el nombre de la ruta. Ejemplo: node create-next-route.js about');
  process.exit(1);
}

const routeName = args[0];
const baseDir = path.join(__dirname, 'src', 'app', routeName);

if (fs.existsSync(baseDir)) {
  console.error('La ruta ya existe:', baseDir);
  process.exit(1);
}

fs.mkdirSync(baseDir, { recursive: true });

const pageContent = `export default function Page() {
  return <div>${routeName} page</div>;
}
`;
const cssContent = `/* Estilos para ${routeName} */\n`;

fs.writeFileSync(path.join(baseDir, 'page.tsx'), pageContent);
fs.writeFileSync(path.join(baseDir, 'page.module.css'), cssContent);

console.log('Ruta creada en:', baseDir);
