export type Lang = "en" | "ja";

const en = {
  meta: {
    title: "Digital Bonfire - Pixel Art Campfire Experience",
    description:
      "Digital Bonfire - A cozy pixel art campfire experience. Customize your fire, choose a companion, and relax under the starry night sky. Available on iOS.",
  },
  nav: {
    features: "Features",
    woodTypes: "Wood Types",
    companions: "Companions",
    download: "Download",
  },
  splash: {
    title: "Digital Bonfire",
    subtitle: "Pixel art campfire experience.",
    tagline: "Light your fire, find your calm.",
    downloadBtn: "Download Now",
    learnMoreBtn: "Learn More",
  },
  intro: {
    title: "Your Digital Campfire",
    lead: 'A cozy <span class="text-primary">pixel art</span> campfire experience. Customize your fire, choose your <span class="text-primary">companion</span>, and relax under the <span class="text-primary">starry night sky</span>.',
    woodTypes: { count: "6 Wood Types", desc: "From classic oak to mystical frost wood" },
    companions: { count: "5 Companions", desc: "Black cat, wizard, owl, and more" },
    weather: { count: "4 Weather Effects", desc: "Rain, snow, fireflies, and clear skies" },
  },
  features: {
    title: "Features",
    lead: 'Digital Bonfire brings <span class="text-primary">warmth</span> to your device. A <span class="text-primary">cozy</span> escape with <span class="text-primary">endless</span> combinations.',
    items: [
      {
        title: "Pixel Art Aesthetics",
        description:
          "Beautiful retro-style pixel art with glowing fire effects, animated sparks, and detailed environments that bring warmth to your screen.",
        icon: "mdi:palette",
      },
      {
        title: "Immersive Audio",
        description:
          "Ambient campfire sounds with companion-specific audio: purring cats, mystical shimmers, hooting owls, and gentle crackling flames.",
        icon: "mdi:music-note",
      },
      {
        title: "Full Customization",
        description:
          "Mix and match wood types, companions, and weather effects to create your perfect campfire scene. Thousands of unique combinations.",
        icon: "mdi:tune-variant",
      },
      {
        title: "Weather Effects",
        description:
          "Dynamic particle systems for rain, snow, and dancing fireflies. Each weather type transforms the atmosphere of your bonfire.",
        icon: "mdi:weather-snowy-rainy",
      },
      {
        title: "Relaxation & Mindfulness",
        description:
          "Designed for unwinding. Let the flickering flames and ambient sounds calm your mind after a long day.",
        icon: "mdi:meditation",
      },
      {
        title: "Dark Mode Optimized",
        description:
          "Crafted for nighttime use with a dark interface that lets the bonfire glow take center stage. Easy on the eyes.",
        icon: "mdi:brightness-4",
      },
    ],
  },
  woodTypes: {
    title: "Wood Types",
    lead: 'Choose your <span class="text-primary">flame</span>. Each wood type creates a <span class="text-primary">unique</span> fire with its own <span class="text-primary">color palette</span> and personality.',
    free: "FREE",
    items: [
      { name: "Oak Wood", description: "Classic warm campfire", free: true },
      { name: "Magic Wood", description: "Rainbow flames", free: false },
      { name: "Wet Wood", description: "Smoky, smoldering", free: false },
      { name: "Skull Wood", description: "Eerie green flames", free: false },
      { name: "Cherry Blossom", description: "Soft pink embers", free: false },
      { name: "Frost Wood", description: "Cool blue frost fire", free: false },
    ],
  },
  companions: {
    title: "Companions",
    lead: 'You don\'t have to sit <span class="text-primary">alone</span>. Each companion brings its own <span class="text-primary">ambient sounds</span> and <span class="text-primary">personality</span> to the fireside.',
    items: [
      { name: "Solo", description: "Just you and the fire", sound: "Crackling flames", free: true },
      { name: "Black Cat", description: "Curious feline friend", sound: "Occasional meowing", free: true },
      { name: "Wizard", description: "Mystical sorcerer", sound: "Mystical shimmer", free: false },
      { name: "Hooded Figure", description: "Mysterious stranger", sound: "Deep breathing", free: false },
      { name: "Owl", description: "Wise night bird", sound: "Hooting calls", free: false },
    ],
  },
  download: {
    title: "Download",
    lead: 'Ready to <span class="text-primary">light your fire</span>? Download Digital Bonfire and start your <span class="text-primary">cozy journey</span> today.',
    downloadOn: "Download on the",
    appStore: "App Store",
    freeText:
      "Free to download with basic features. Unlock all wood types, companions, and weather effects with a premium subscription.",
    monthly: "Monthly",
    annual: "Annual",
    lifetime: "Lifetime",
  },
  footer: {
    copyright: "Digital Bonfire. All rights reserved.",
  },
};

const ja: typeof en = {
  meta: {
    title: "Takibi - ピクセルアート焚き火体験",
    description:
      "Takibi - 心安らぐピクセルアートの焚き火体験。火をカスタマイズし、仲間を選び、星空の下でリラックス。iOSで配信中。",
  },
  nav: {
    features: "機能",
    woodTypes: "薪タイプ",
    companions: "コンパニオン",
    download: "ダウンロード",
  },
  splash: {
    title: "Takibi",
    subtitle: "ピクセルアートの焚き火体験。",
    tagline: "火を灯して、心を落ち着けよう。",
    downloadBtn: "ダウンロード",
    learnMoreBtn: "詳しく見る",
  },
  intro: {
    title: "あなたのデジタル焚き火",
    lead: '心安らぐ<span class="text-primary">ピクセルアート</span>の焚き火体験。火をカスタマイズし、<span class="text-primary">仲間</span>を選んで、<span class="text-primary">星空の下</span>でリラックスしよう。',
    woodTypes: { count: "6種類の薪", desc: "クラシックなオークからフロストウッドまで" },
    companions: { count: "5種類の仲間", desc: "黒猫、魔法使い、フクロウなど" },
    weather: { count: "4種類の天候", desc: "雨、雪、ホタル、晴天" },
  },
  features: {
    title: "機能",
    lead: 'Takibiがデバイスに<span class="text-primary">温もり</span>をお届けします。<span class="text-primary">心安らぐ</span>ひとときを<span class="text-primary">無限</span>の組み合わせで。',
    items: [
      {
        title: "ピクセルアート",
        description:
          "美しいレトロスタイルのピクセルアート。輝く炎のエフェクト、アニメーション付きの火の粉、そして細部まで描き込まれた環境が画面に温かさを届けます。",
        icon: "mdi:palette",
      },
      {
        title: "没入感のあるサウンド",
        description:
          "焚き火のアンビエントサウンドに、仲間ごとの専用オーディオ：猫のゴロゴロ、神秘的なきらめき、フクロウの鳴き声、そして穏やかな薪の爆ぜる音。",
        icon: "mdi:music-note",
      },
      {
        title: "自由なカスタマイズ",
        description:
          "薪の種類、仲間、天候効果を自由に組み合わせて、あなただけの焚き火シーンを作りましょう。何千通りもの組み合わせが可能です。",
        icon: "mdi:tune-variant",
      },
      {
        title: "天候エフェクト",
        description:
          "雨、雪、そして舞い踊るホタルのダイナミックなパーティクルシステム。天候によって焚き火の雰囲気がガラリと変わります。",
        icon: "mdi:weather-snowy-rainy",
      },
      {
        title: "リラクゼーション",
        description:
          "心を落ち着けるためにデザインされたアプリ。揺らめく炎とアンビエントサウンドが、長い一日の疲れを癒します。",
        icon: "mdi:meditation",
      },
      {
        title: "ダークモード最適化",
        description:
          "夜間の使用に最適化されたダークインターフェース。焚き火の輝きが主役になるよう設計されています。目に優しい仕様です。",
        icon: "mdi:brightness-4",
      },
    ],
  },
  woodTypes: {
    title: "薪タイプ",
    lead: '<span class="text-primary">炎</span>を選ぼう。薪の種類ごとに<span class="text-primary">独自</span>の炎が生まれ、それぞれの<span class="text-primary">カラーパレット</span>と個性を持っています。',
    free: "無料",
    items: [
      { name: "オーク", description: "クラシックな暖かい焚き火", free: true },
      { name: "マジックウッド", description: "虹色の炎", free: false },
      { name: "濡れた薪", description: "煙る、くすぶる炎", free: false },
      { name: "スカルウッド", description: "不気味な緑の炎", free: false },
      { name: "桜", description: "柔らかなピンクの残り火", free: false },
      { name: "フロストウッド", description: "冷たい青い霜の炎", free: false },
    ],
  },
  companions: {
    title: "コンパニオン",
    lead: '<span class="text-primary">一人</span>で座る必要はありません。それぞれの仲間が独自の<span class="text-primary">アンビエントサウンド</span>と<span class="text-primary">個性</span>を焚き火のそばに届けます。',
    items: [
      { name: "ソロ", description: "あなたと炎だけ", sound: "薪の爆ぜる音", free: true },
      { name: "黒猫", description: "好奇心旺盛な猫", sound: "時折聞こえる鳴き声", free: true },
      { name: "魔法使い", description: "神秘的な魔術師", sound: "神秘的なきらめき", free: false },
      { name: "フードの人影", description: "謎めいた旅人", sound: "深い呼吸音", free: false },
      { name: "フクロウ", description: "賢い夜の鳥", sound: "ホーホーという鳴き声", free: false },
    ],
  },
  download: {
    title: "ダウンロード",
    lead: '<span class="text-primary">火を灯す</span>準備はできましたか？Takibiをダウンロードして、<span class="text-primary">心安らぐ旅</span>を始めましょう。',
    downloadOn: "からダウンロード",
    appStore: "App Store",
    freeText:
      "基本機能は無料でお楽しみいただけます。プレミアムサブスクリプションで全ての薪タイプ、コンパニオン、天候効果をアンロック。",
    monthly: "月額",
    annual: "年額",
    lifetime: "買い切り",
  },
  footer: {
    copyright: "Takibi. All rights reserved.",
  },
};

export const translations: Record<Lang, typeof en> = { en, ja };
