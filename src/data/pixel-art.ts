export interface PixelArtDef {
  width: number;
  height: number;
  palette: Record<string, string>;
  grid: string[];
}

// Main bonfire - hero section (12x16)
const bonfire: PixelArtDef = {
  width: 12,
  height: 16,
  palette: {
    "1": "#FFF8E1",
    "2": "#FFD54F",
    "3": "#FF9800",
    "4": "#E65100",
    "5": "#6D4C41",
    "6": "#3E2723",
  },
  grid: [
    "............",
    ".....2......",
    "....232.....",
    "...23132....",
    "..231113....",
    "..2311134...",
    ".23111134...",
    ".231111342..",
    ".231111342..",
    "..2311134...",
    "..231113....",
    "...23332....",
    "...555555...",
    "..66.55.66..",
    ".66..55..66.",
    "............",
  ],
};

// Fire base shape (8x10) - used for wood type variants
const fireBaseGrid = [
  "........",
  "...2....",
  "..232...",
  ".23132..",
  ".231134.",
  "23111342",
  ".23113..",
  "..232...",
  "..555...",
  "........",
];

// Wood type fire palettes
const firePalettes: Record<string, Record<string, string>> = {
  oak: {
    "1": "#FFF8E1", "2": "#FFD54F", "3": "#FF9800", "4": "#E65100", "5": "#6D4C41",
  },
  magic: {
    "1": "#E1BEE7", "2": "#CE93D8", "3": "#7B1FA2", "4": "#4A148C", "5": "#6D4C41",
  },
  wet: {
    "1": "#CFD8DC", "2": "#90A4AE", "3": "#607D8B", "4": "#455A64", "5": "#6D4C41",
  },
  skull: {
    "1": "#C8E6C9", "2": "#81C784", "3": "#4CAF50", "4": "#1B5E20", "5": "#6D4C41",
  },
  cherry: {
    "1": "#FCE4EC", "2": "#F48FB1", "3": "#E91E63", "4": "#880E4F", "5": "#6D4C41",
  },
  frost: {
    "1": "#E1F5FE", "2": "#81D4FA", "3": "#0288D1", "4": "#01579B", "5": "#6D4C41",
  },
};

function makeFireVariant(variant: string): PixelArtDef {
  return {
    width: 8,
    height: 10,
    palette: firePalettes[variant],
    grid: fireBaseGrid,
  };
}

// Black cat (8x10)
const cat: PixelArtDef = {
  width: 8,
  height: 10,
  palette: { a: "#263238", b: "#FFC107" },
  grid: [
    "........",
    ".a....a.",
    ".aaaaaa.",
    ".abaaab.",
    ".aaaaaa.",
    "..aaaa..",
    "..aaaa..",
    ".aaaaaa.",
    "..a..a..",
    "........",
  ],
};

// Wizard (8x12)
const wizard: PixelArtDef = {
  width: 8,
  height: 12,
  palette: { p: "#7B1FA2", f: "#FFCC80", c: "#4A148C" },
  grid: [
    "........",
    "...p....",
    "..ppp...",
    ".ppppp..",
    ".ppppp..",
    "..fff...",
    ".fffff..",
    "..ccc...",
    ".ccccc..",
    ".ccccc..",
    "..c.c...",
    "........",
  ],
};

// Owl (8x10)
const owl: PixelArtDef = {
  width: 8,
  height: 10,
  palette: { b: "#795548", w: "#FFFFFF", p: "#212121" },
  grid: [
    "........",
    "..bbbb..",
    ".bwwwwb.",
    ".bwpwpb.",
    "..bbbb..",
    ".bbbbbb.",
    ".bbbbbb.",
    "..b..b..",
    "..b..b..",
    "........",
  ],
};

// Hooded figure (8x10)
const hooded: PixelArtDef = {
  width: 8,
  height: 10,
  palette: { d: "#37474F", s: "#263238", c: "#546E7A" },
  grid: [
    "........",
    "..dddd..",
    ".dddddd.",
    ".ddssdd.",
    ".ddssdd.",
    "..cccc..",
    ".cccccc.",
    ".cccccc.",
    "..c..c..",
    "........",
  ],
};

// Solo campfire (8x8)
const solo: PixelArtDef = {
  width: 8,
  height: 8,
  palette: { "1": "#FFF8E1", "2": "#FFD54F", "3": "#FF9800", "5": "#6D4C41" },
  grid: [
    "........",
    "...2....",
    "..212...",
    ".21112..",
    ".31113..",
    "..333...",
    "..555...",
    "........",
  ],
};

// Small flame for header (6x8)
const flameSmall: PixelArtDef = {
  width: 6,
  height: 8,
  palette: { "1": "#FFF8E1", "2": "#FFD54F", "3": "#FF9800" },
  grid: [
    "......",
    "..2...",
    ".232..",
    ".2112.",
    "32113.",
    ".333..",
    "......",
    "......",
  ],
};

export const pixelArt: Record<string, PixelArtDef> = {
  bonfire,
  "flame-small": flameSmall,
  "fire-oak": makeFireVariant("oak"),
  "fire-magic": makeFireVariant("magic"),
  "fire-wet": makeFireVariant("wet"),
  "fire-skull": makeFireVariant("skull"),
  "fire-cherry": makeFireVariant("cherry"),
  "fire-frost": makeFireVariant("frost"),
  cat,
  wizard,
  owl,
  hooded,
  solo,
};

// Companion icon name mapping
export const companionIcons: Record<string, string> = {
  Solo: "solo",
  "Black Cat": "cat",
  Wizard: "wizard",
  "Hooded Figure": "hooded",
  Owl: "owl",
};

// Wood type fire variant mapping (by index)
export const woodFireVariants = [
  "fire-oak",
  "fire-magic",
  "fire-wet",
  "fire-skull",
  "fire-cherry",
  "fire-frost",
];
