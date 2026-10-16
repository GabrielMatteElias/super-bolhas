import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
const anchors = [...html.matchAll(/\bhref="#([^"]+)"/g)].map((match) => match[1]);
const checks = {
  'document language is pt-BR': /<html lang="pt-BR"/.test(html),
  'recipe quantities are present': ['100 ml', '2 colheres', '1 colher'].every((text) => html.includes(text)),
  'redesigned hero and call to action are rendered': ['Prepare a mistura', 'solte a magia!', 'Vamos preparar!'].every((text) => html.includes(text)),
  'tutorial empty state is rendered': html.includes('Estamos preparando vídeos cheios de magia!'),
  'unpublished tutorials load no video embed': !/youtube\.com\/embed|youtu\.be/.test(html),
  'all internal links point to an existing section': anchors.every((id) => ids.has(id)),
  'no placeholder canonical domain is emitted': !html.includes('super-bolhas.vercel.app'),
};

for (const [label, passed] of Object.entries(checks)) {
  console.log(`${passed ? 'PASS' : 'FAIL'} ${label}`);
}

if (Object.values(checks).some((passed) => !passed)) process.exitCode = 1;
