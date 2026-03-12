export interface PixelArtDef {
  width: number;
  height: number;
  palette: Record<string, string>;
  grid: string[];
}

// App RGB → Hex conversions from BonfireModels.swift flameColors
// 1 = brightest (center/peak), 2 = mid-bright, 3 = mid, 4 = dark outer
// 5 = dark log, 6 = light log

// Main bonfire - hero section (12x16)
const bonfire: PixelArtDef = {
  width: 12,
  height: 16,
  palette: {
    "1": "#FFF299", // (1.0, 0.95, 0.6)
    "2": "#FFBF1A", // (1.0, 0.75, 0.1)
    "3": "#FF8000", // (1.0, 0.5, 0.0)
    "4": "#D93300", // (0.85, 0.2, 0.0)
    "5": "#804D26", // light log (0.5, 0.3, 0.15)
    "6": "#59331A", // dark log (0.35, 0.2, 0.1)
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

// Wood type fire palettes - converted from BonfireModels.swift flameColors
const firePalettes: Record<string, Record<string, string>> = {
  oak: {
    "1": "#FFF299", "2": "#FFBF1A", "3": "#FF8000", "4": "#D93300", "5": "#804D26",
  },
  magic: {
    "1": "#FF4DB3", "2": "#00E680", "3": "#0066FF", "4": "#8000CC", "5": "#804D26",
  },
  wet: {
    "1": "#B3B3A6", "2": "#998C73", "3": "#805926", "4": "#66330D", "5": "#804D26",
  },
  skull: {
    "1": "#CCFF80", "2": "#80E633", "3": "#33B31A", "4": "#00801A", "5": "#804D26",
  },
  cherry: {
    "1": "#FFE6EB", "2": "#FFB3BF", "3": "#E66680", "4": "#B3264D", "5": "#804D26",
  },
  frost: {
    "1": "#D9F2FF", "2": "#80CCFF", "3": "#3380E6", "4": "#004DB3", "5": "#804D26",
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

// Black cat - from CompanionImageCache.swift drawCat()
// fur: (0.15, 0.12, 0.12), eyes: (0.4, 0.9, 0.3)
const cat: PixelArtDef = {
  width: 9,
  height: 7,
  palette: { a: "#261F1F", e: "#66E64D" },
  grid: [
    "a...a....",
    "aa.aa....",
    "aaaaa....",
    "aeaea..aa",
    ".aaa.a...",
    ".aaa.....",
    "aa.aa....",
  ],
};

// Wizard - from CompanionImageCache.swift drawWizard()
// hat: (0.3, 0.2, 0.6), brim: (0.25, 0.15, 0.5), skin: (0.9, 0.75, 0.6)
// robe: (0.4, 0.3, 0.7), star: (1.0, 0.9, 0.3)
const wizard: PixelArtDef = {
  width: 8,
  height: 12,
  palette: {
    h: "#4D3399", // hat
    b: "#402680", // hat brim
    f: "#E6BF99", // skin
    r: "#664DB3", // robe
    s: "#FFE64D", // star
    w: "#663319", // wand
  },
  grid: [
    "...h....",
    "..hhh...",
    "..hsh...",
    ".hhhhh..",
    "bbbbbbb.",
    "..fff...",
    "..fff.w.",
    ".rrrrr.w",
    ".rrrrr..",
    ".rrrrr..",
    "rrrrrrr.",
    "........",
  ],
};

// Owl - from CompanionImageCache.swift drawOwl()
// brown: (0.45, 0.3, 0.15), light: (0.6, 0.45, 0.25)
// eyes: (1.0, 0.8, 0.1), beak: (0.8, 0.5, 0.1)
const owl: PixelArtDef = {
  width: 6,
  height: 8,
  palette: {
    b: "#734D26", // brown
    l: "#997340", // light chest
    e: "#FFCC1A", // eyes
    k: "#CC801A", // beak
  },
  grid: [
    "b...b.",
    "bbbbb.",
    "bekeb.",
    "bblbb.",
    ".blb..",
    ".bbb..",
    ".k.k..",
    "......",
  ],
};

// Hooded figure - from CompanionImageCache.swift drawHooded()
// hood: (0.2, 0.15, 0.15), dark: (0.1, 0.08, 0.08), eyes: (0.9, 0.3, 0.2)
const hooded: PixelArtDef = {
  width: 8,
  height: 10,
  palette: { d: "#332626", s: "#1A1414", e: "#E64D33" },
  grid: [
    "..ddd...",
    ".ddddd..",
    ".ddssd..",
    ".desed..",
    ".ddddd..",
    ".ddddd..",
    "ddddddd.",
    "ddddddd.",
    ".dd.dd..",
    "........",
  ],
};

// Solo campfire (8x8) - oak colors
const solo: PixelArtDef = {
  width: 8,
  height: 8,
  palette: {
    "1": "#FFF299",
    "2": "#FFBF1A",
    "3": "#FF8000",
    "5": "#804D26",
  },
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

// Small flame for header (6x8) - oak colors
const flameSmall: PixelArtDef = {
  width: 6,
  height: 8,
  palette: {
    "1": "#FFF299",
    "2": "#FFBF1A",
    "3": "#FF8000",
  },
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
