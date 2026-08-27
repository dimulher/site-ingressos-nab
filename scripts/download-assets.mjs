import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const assets = [
  { url: 'https://global-files-nginx.builderall.com/2da6b84b-c91a-4327-a2d6-917f5cbba4f5/bb0517cad0738eb6a24e9b45634ca010d2064b5e2d78b4b285284efb229cb39e.png', name: 'section-0-1-bg.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12613311.png', name: 'hero-01.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12613387.png', name: 'hero-02.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12613385.png', name: 'hero-03.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12613390.png', name: 'hero-04.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12613388.png', name: 'hero-05.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12613389.png', name: 'hero-06.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12614656.png', name: 'divider-band.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12613444.png', name: 'sub-hero-bg.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12614711.png', name: 'cta-3block-bg.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12614926.png', name: 'full-image-bg.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12614960.png', name: 'cta-inscricao-bg.png' },
  { url: 'https://storage.builderall.com//franquias/2/736805/editor-html/12614992.png', name: 'footer-bg.png' },
  { url: 'https://novosautoresbrasil.com.br/favicon.ico', name: 'favicon.ico' },
];

const outDir = path.resolve('public/images');
await mkdir(outDir, { recursive: true });

async function downloadOne(a) {
  try {
    const res = await fetch(a.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) { console.error('FAIL', a.url, res.status); return; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path.join(outDir, a.name), buf);
    console.log('OK', a.name, buf.length, 'bytes');
  } catch (e) {
    console.error('ERR', a.url, e.message);
  }
}

async function run() {
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    await Promise.all(assets.slice(i, i + batchSize).map(downloadOne));
  }
}

run();
