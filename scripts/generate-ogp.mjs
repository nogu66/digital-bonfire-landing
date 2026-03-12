import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

// Pixel art bonfire - scaled up version (each pixel = 40px)
function createBonfireSvg(scale = 40) {
  const pixels = [
    // Flame top
    { x: 6, y: 1, fill: "#FFD54F" },
    { x: 5, y: 2, fill: "#FFD54F" },
    { x: 6, y: 2, fill: "#FFF8E1" },
    { x: 7, y: 2, fill: "#FFD54F" },
    { x: 4, y: 3, fill: "#FFD54F" },
    { x: 5, y: 3, fill: "#FFF8E1" },
    { x: 6, y: 3, fill: "#FFF8E1" },
    { x: 7, y: 3, fill: "#FF9800" },
    { x: 3, y: 4, fill: "#FFD54F" },
    { x: 4, y: 4, fill: "#FFF8E1" },
    { x: 5, y: 4, fill: "#FFF8E1" },
    { x: 6, y: 4, fill: "#FFF8E1" },
    { x: 7, y: 4, fill: "#FF9800" },
    { x: 3, y: 5, fill: "#FFD54F" },
    { x: 4, y: 5, fill: "#FFF8E1" },
    { x: 5, y: 5, fill: "#FFF8E1" },
    { x: 6, y: 5, fill: "#FFF8E1" },
    { x: 7, y: 5, fill: "#FF9800" },
    { x: 8, y: 5, fill: "#E65100" },
    { x: 2, y: 6, fill: "#FF9800" },
    { x: 3, y: 6, fill: "#FFD54F" },
    { x: 4, y: 6, fill: "#FFF8E1" },
    { x: 5, y: 6, fill: "#FFF8E1" },
    { x: 6, y: 6, fill: "#FFF8E1" },
    { x: 7, y: 6, fill: "#FF9800" },
    { x: 8, y: 6, fill: "#E65100" },
    { x: 2, y: 7, fill: "#FF9800" },
    { x: 3, y: 7, fill: "#FFD54F" },
    { x: 4, y: 7, fill: "#FFF8E1" },
    { x: 5, y: 7, fill: "#FFF8E1" },
    { x: 6, y: 7, fill: "#FFF8E1" },
    { x: 7, y: 7, fill: "#FF9800" },
    { x: 8, y: 7, fill: "#E65100" },
    { x: 3, y: 8, fill: "#FFD54F" },
    { x: 4, y: 8, fill: "#FFF8E1" },
    { x: 5, y: 8, fill: "#FFF8E1" },
    { x: 6, y: 8, fill: "#FFF8E1" },
    { x: 7, y: 8, fill: "#FF9800" },
    { x: 4, y: 9, fill: "#FF9800" },
    { x: 5, y: 9, fill: "#FF9800" },
    { x: 6, y: 9, fill: "#FF9800" },
    // Wood
    { x: 4, y: 10, fill: "#6D4C41" },
    { x: 5, y: 10, fill: "#6D4C41" },
    { x: 6, y: 10, fill: "#6D4C41" },
    { x: 7, y: 10, fill: "#6D4C41" },
    { x: 8, y: 10, fill: "#6D4C41" },
    { x: 3, y: 11, fill: "#3E2723" },
    { x: 4, y: 11, fill: "#3E2723" },
    { x: 6, y: 11, fill: "#6D4C41" },
    { x: 8, y: 11, fill: "#3E2723" },
    { x: 9, y: 11, fill: "#3E2723" },
    { x: 2, y: 12, fill: "#3E2723" },
    { x: 3, y: 12, fill: "#3E2723" },
    { x: 6, y: 12, fill: "#6D4C41" },
    { x: 9, y: 12, fill: "#3E2723" },
    { x: 10, y: 12, fill: "#3E2723" },
  ];

  const rects = pixels
    .map(
      (p) =>
        `<rect x="${p.x * scale}" y="${p.y * scale}" width="${scale}" height="${scale}" fill="${p.fill}"/>`,
    )
    .join("\n    ");

  return rects;
}

// Pixel art stars
function createStars(width, height, count = 25) {
  const stars = [];
  const rng = (seed) => {
    let s = seed;
    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  };
  const rand = rng(42);

  for (let i = 0; i < count; i++) {
    const x = Math.floor(rand() * width);
    const y = Math.floor(rand() * (height * 0.5));
    const size = Math.floor(rand() * 3) + 2;
    const opacity = (rand() * 0.5 + 0.3).toFixed(2);
    stars.push(
      `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="#FFF8E1" opacity="${opacity}"/>`,
    );
  }
  return stars.join("\n    ");
}

function generateOgpSvg({ title, subtitle, tagline, lang }) {
  const width = 1200;
  const height = 630;

  const bonfireScale = 28;
  const bonfireOffsetX = 780;
  const bonfireOffsetY = 80;

  const bonfireRects = createBonfireSvg(bonfireScale);
  const stars = createStars(width, height, 30);

  // Glow effect behind the bonfire
  const glowCx = bonfireOffsetX + 5.5 * bonfireScale;
  const glowCy = bonfireOffsetY + 6 * bonfireScale;

  const fontFamily = "Inter, -apple-system, BlinkMacSystemFont, sans-serif";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF9800" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#FF9800" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#FF9800" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0a0f"/>
      <stop offset="100%" stop-color="#1a1520"/>
    </linearGradient>
    <linearGradient id="titleGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fb923c"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
    <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a1520"/>
      <stop offset="100%" stop-color="#0d0a12"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Stars -->
  ${stars}

  <!-- Ground -->
  <rect x="0" y="${height - 80}" width="${width}" height="80" fill="url(#groundGrad)"/>
  <line x1="0" y1="${height - 80}" x2="${width}" y2="${height - 80}" stroke="#2a2035" stroke-width="1"/>

  <!-- Bonfire glow -->
  <ellipse cx="${glowCx}" cy="${glowCy}" rx="250" ry="220" fill="url(#glow)"/>

  <!-- Bonfire pixels -->
  <g transform="translate(${bonfireOffsetX}, ${bonfireOffsetY})" style="image-rendering:pixelated">
    ${bonfireRects}
  </g>

  <!-- Text content -->
  <text x="80" y="200" font-family="${fontFamily}" font-size="56" font-weight="800" fill="url(#titleGrad)">
    ${title.replace(/&/g, "&amp;")}
  </text>
  <text x="80" y="270" font-family="${fontFamily}" font-size="28" font-weight="400" fill="#d4d4d8">
    ${subtitle}
  </text>
  <text x="80" y="340" font-family="${fontFamily}" font-size="24" font-weight="400" fill="#a1a1aa">
    ${tagline}
  </text>

  <!-- Bottom bar -->
  <rect x="80" y="380" width="60" height="3" fill="#fb923c" rx="1.5"/>

  <!-- URL -->
  <text x="80" y="${height - 40}" font-family="${fontFamily}" font-size="20" font-weight="400" fill="#71717a">
    ${lang === "ja" ? "bonfire.shuhary.com/ja" : "bonfire.shuhary.com"}
  </text>

  <!-- Platform badge -->
  <text x="80" y="440" font-family="${fontFamily}" font-size="18" font-weight="500" fill="#a1a1aa">
    ${lang === "ja" ? "iOS アプリ" : "Available on iOS"}
  </text>
</svg>`;
}

// English OGP
const enSvg = generateOgpSvg({
  title: "Bonfire: Relax & Focus",
  subtitle: "Pixel art campfire experience.",
  tagline: "Light your fire, find your calm.",
  lang: "en",
});

// Japanese OGP
const jaSvg = generateOgpSvg({
  title: "焚き火 - 癒しと集中",
  subtitle: "ピクセルアートの焚き火体験。",
  tagline: "火を灯して、心を落ち着けよう。",
  lang: "ja",
});

async function generatePng(svg, outputPath) {
  await sharp(Buffer.from(svg)).png().toFile(outputPath);
  console.log(`Generated: ${outputPath}`);
}

await Promise.all([
  generatePng(enSvg, join(publicDir, "og-en.png")),
  generatePng(jaSvg, join(publicDir, "og-ja.png")),
]);

console.log("Done!");
