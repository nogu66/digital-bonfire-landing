export type Lang = "en" | "ja";

const en = {
  meta: {
    title: "Bonfire: Relax & Focus - Pixel Art Campfire Experience",
    description:
      "Bonfire: Relax & Focus - A cozy pixel art campfire experience. Customize your fire, choose a companion, and relax under the starry night sky. Available on iOS.",
  },
  nav: {
    features: "Features",
    woodTypes: "Wood Types",
    companions: "Companions",
    download: "Download",
  },
  splash: {
    title: "Bonfire: Relax & Focus",
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
    lead: 'Bonfire: Relax & Focus brings <span class="text-primary">warmth</span> to your device. A <span class="text-primary">cozy</span> escape with <span class="text-primary">endless</span> combinations.',
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
    lead: 'Ready to <span class="text-primary">light your fire</span>? Download Bonfire: Relax & Focus and start your <span class="text-primary">cozy journey</span> today.',
    downloadOn: "Download on the",
    appStore: "App Store",
    freeText:
      "Free to download with basic features. Unlock all wood types, companions, and weather effects with a premium subscription.",
    monthly: "Monthly",
    annual: "Annual",
    lifetime: "Lifetime",
  },
  footer: {
    copyright: "Bonfire: Relax & Focus. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  legal: {
    backToHome: "Back to Home",
    privacy: {
      title: "Privacy Policy",
      description: "Privacy Policy for Bonfire: Relax & Focus",
      lastUpdated: "Last updated: February 17, 2026",
      sections: [
        {
          title: "Introduction",
          content:
            'Bonfire: Relax & Focus ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use the Bonfire: Relax & Focus mobile application (the "App").',
        },
        {
          title: "Information We Collect",
          content:
            "Bonfire: Relax & Focus is designed with your privacy in mind. We collect minimal data necessary to provide and improve our service:\n\n• Purchase Information: Subscription and purchase data is handled entirely by Apple through the App Store. We do not directly collect or store your payment information.\n• Usage Analytics: We may collect anonymous, aggregated usage data (such as feature usage frequency) to improve the App. This data cannot be used to identify you personally.\n• Device Information: Basic device information may be collected for crash reporting and performance optimization.",
        },
        {
          title: "Information We Do Not Collect",
          content:
            "We do not collect:\n\n• Personal identification information (name, email, phone number)\n• Location data\n• Contacts or address book data\n• Photos, camera, or microphone data\n• Health or fitness data\n• Browsing history or tracking data",
        },
        {
          title: "Third-Party Services",
          content:
            "The App may use the following third-party services:\n\n• Apple App Store: For processing subscriptions and purchases. Apple's privacy policy applies to payment processing.\n• Analytics Services: We may use privacy-focused analytics to understand how the App is used in aggregate.",
        },
        {
          title: "Data Security",
          content:
            "We take appropriate measures to protect any information processed through the App. Since we collect minimal data, your privacy risk is inherently low.",
        },
        {
          title: "Children's Privacy",
          content:
            "Bonfire: Relax & Focus does not knowingly collect personal information from children under 13. The App is designed to be safe for users of all ages as it does not require any personal information to function.",
        },
        {
          title: "Changes to This Policy",
          content:
            "We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date. We encourage you to review this policy periodically.",
        },
        {
          title: "Contact Us",
          content:
            "If you have any questions about this Privacy Policy, please contact us at:\n\nEmail: shuhary.info@gmail.com",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      description: "Terms of Service for Bonfire: Relax & Focus",
      lastUpdated: "Last updated: February 17, 2026",
      sections: [
        {
          title: "Agreement to Terms",
          content:
            'By downloading, installing, or using Bonfire: Relax & Focus (the "App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.',
        },
        {
          title: "Description of Service",
          content:
            "Bonfire: Relax & Focus is a relaxation and entertainment application that provides a pixel art campfire experience. The App allows users to customize fire types, companions, and weather effects for a calming visual and audio experience.",
        },
        {
          title: "Subscriptions and Purchases",
          content:
            "The App offers both free and premium features:\n\n• Free Features: Basic wood types and companions are available at no cost.\n• Premium Subscription: Additional wood types, companions, and weather effects are available through monthly, annual, or lifetime subscription plans.\n• All purchases and subscriptions are processed through the Apple App Store and are subject to Apple's terms and conditions.\n• Subscription management, including cancellation and renewal, is handled through your Apple ID account settings.\n• Refund requests must be directed to Apple in accordance with their refund policy.",
        },
        {
          title: "Intellectual Property",
          content:
            "All content within the App, including but not limited to pixel art, animations, sound effects, music, and visual designs, is the intellectual property of Bonfire: Relax & Focus and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content in the App without our prior written consent.",
        },
        {
          title: "Acceptable Use",
          content:
            "You agree to use the App only for its intended purpose as a personal relaxation and entertainment tool. You may not:\n\n• Attempt to reverse engineer, decompile, or disassemble the App\n• Use the App for any unlawful purpose\n• Redistribute or resell the App or its content\n• Interfere with or disrupt the App's functionality",
        },
        {
          title: "Disclaimer of Warranties",
          content:
            'The App is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of harmful components.',
        },
        {
          title: "Limitation of Liability",
          content:
            "To the maximum extent permitted by applicable law, Bonfire: Relax & Focus shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the App.",
        },
        {
          title: "Changes to Terms",
          content:
            "We reserve the right to modify these Terms at any time. Changes will be effective when posted on this page. Your continued use of the App after any changes constitutes acceptance of the new Terms.",
        },
        {
          title: "Governing Law",
          content:
            "These Terms shall be governed by and construed in accordance with the laws of Japan, without regard to its conflict of law provisions.",
        },
        {
          title: "Contact Us",
          content:
            "If you have any questions about these Terms, please contact us at:\n\nEmail: shuhary.info@gmail.com",
        },
      ],
    },
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
    privacy: "プライバシーポリシー",
    terms: "利用規約",
  },
  legal: {
    backToHome: "ホームに戻る",
    privacy: {
      title: "プライバシーポリシー",
      description: "Takibiのプライバシーポリシー",
      lastUpdated: "最終更新日：2026年2月17日",
      sections: [
        {
          title: "はじめに",
          content:
            "Takibi（以下「当社」）は、お客様のプライバシーの保護に努めています。本プライバシーポリシーは、Takibiモバイルアプリケーション（以下「本アプリ」）をご利用いただく際の情報の取り扱いについて説明するものです。",
        },
        {
          title: "収集する情報",
          content:
            "Takibiはお客様のプライバシーを最優先に設計されています。サービスの提供と改善に必要な最小限のデータのみを収集します。\n\n・購入情報：サブスクリプションおよび購入データは、App Storeを通じてAppleが完全に処理します。当社がお支払い情報を直接収集・保存することはありません。\n・利用分析：アプリの改善のため、匿名かつ集計された利用データ（機能の使用頻度など）を収集する場合があります。このデータから個人を特定することはできません。\n・デバイス情報：クラッシュレポートおよびパフォーマンス最適化のため、基本的なデバイス情報を収集する場合があります。",
        },
        {
          title: "収集しない情報",
          content:
            "当社は以下の情報を収集しません。\n\n・個人識別情報（氏名、メールアドレス、電話番号）\n・位置情報\n・連絡先またはアドレス帳データ\n・写真、カメラ、マイクのデータ\n・健康またはフィットネスデータ\n・閲覧履歴またはトラッキングデータ",
        },
        {
          title: "第三者サービス",
          content:
            "本アプリは以下の第三者サービスを使用する場合があります。\n\n・Apple App Store：サブスクリプションおよび購入の処理に使用します。決済処理にはAppleのプライバシーポリシーが適用されます。\n・分析サービス：アプリの利用状況を集計的に把握するため、プライバシーに配慮した分析サービスを使用する場合があります。",
        },
        {
          title: "データセキュリティ",
          content:
            "当社は、本アプリを通じて処理される情報を保護するために適切な措置を講じています。収集するデータが最小限であるため、お客様のプライバシーリスクは本質的に低くなっています。",
        },
        {
          title: "お子様のプライバシー",
          content:
            "Takibiは13歳未満のお子様から意図的に個人情報を収集することはありません。本アプリは個人情報を必要としないため、すべての年齢のユーザーが安全にご利用いただけるよう設計されています。",
        },
        {
          title: "ポリシーの変更",
          content:
            "当社は本プライバシーポリシーを随時更新する場合があります。変更がある場合は、改訂日を更新した上で本ページに掲載します。定期的にご確認いただくことをお勧めします。",
        },
        {
          title: "お問い合わせ",
          content:
            "本プライバシーポリシーに関するご質問がございましたら、以下までご連絡ください。\n\nメール：shuhary.info@gmail.com",
        },
      ],
    },
    terms: {
      title: "利用規約",
      description: "Takibiの利用規約",
      lastUpdated: "最終更新日：2026年2月17日",
      sections: [
        {
          title: "規約への同意",
          content:
            "Takibi（以下「本アプリ」）をダウンロード、インストール、または使用することにより、お客様は本利用規約（以下「本規約」）に拘束されることに同意したものとみなされます。本規約に同意いただけない場合は、本アプリをご利用にならないでください。",
        },
        {
          title: "サービスの説明",
          content:
            "Takibiは、ピクセルアートの焚き火体験を提供するリラクゼーション・エンターテインメントアプリケーションです。ユーザーは薪の種類、コンパニオン、天候効果をカスタマイズし、心安らぐ映像と音声の体験をお楽しみいただけます。",
        },
        {
          title: "サブスクリプションと購入",
          content:
            "本アプリは無料機能とプレミアム機能の両方を提供します。\n\n・無料機能：基本的な薪タイプとコンパニオンを無料でご利用いただけます。\n・プレミアムサブスクリプション：追加の薪タイプ、コンパニオン、天候効果は、月額、年額、または買い切りのサブスクリプションプランでご利用いただけます。\n・すべての購入およびサブスクリプションはApple App Storeを通じて処理され、Appleの利用規約が適用されます。\n・サブスクリプションの管理（解約・更新を含む）は、Apple IDのアカウント設定で行ってください。\n・返金のご依頼は、Appleの返金ポリシーに従い、Appleにお問い合わせください。",
        },
        {
          title: "知的財産権",
          content:
            "本アプリ内のすべてのコンテンツ（ピクセルアート、アニメーション、効果音、音楽、ビジュアルデザインを含むがこれらに限定されない）は、Takibiの知的財産であり、著作権およびその他の知的財産権法によって保護されています。当社の事前の書面による同意なく、本アプリのコンテンツを複製、配布、変更、または二次的著作物の作成に使用することはできません。",
        },
        {
          title: "利用上の遵守事項",
          content:
            "お客様は、本アプリを個人のリラクゼーションおよびエンターテインメントという本来の目的にのみ使用することに同意するものとします。以下の行為は禁止されています。\n\n・本アプリのリバースエンジニアリング、逆コンパイル、または逆アセンブルを試みること\n・本アプリを違法な目的に使用すること\n・本アプリまたはそのコンテンツを再配布または転売すること\n・本アプリの機能を妨害または破壊すること",
        },
        {
          title: "保証の免責",
          content:
            "本アプリは「現状のまま」かつ「利用可能な状態で」提供され、明示的または黙示的を問わず、いかなる種類の保証も行いません。当社は、本アプリが中断なく、エラーなく、または有害な要素を含まないことを保証するものではありません。",
        },
        {
          title: "責任の制限",
          content:
            "適用法令で許容される最大限の範囲において、Takibiは、お客様の本アプリの使用または使用不能に起因する間接的、偶発的、特別、結果的、または懲罰的損害について一切の責任を負わないものとします。",
        },
        {
          title: "規約の変更",
          content:
            "当社は、本規約をいつでも変更する権利を有します。変更は本ページに掲載された時点で効力を生じます。変更後も本アプリを継続してご利用いただくことにより、新しい規約に同意したものとみなされます。",
        },
        {
          title: "準拠法",
          content:
            "本規約は、法の抵触に関する規定にかかわらず、日本法に準拠し、日本法に従って解釈されるものとします。",
        },
        {
          title: "お問い合わせ",
          content:
            "本規約に関するご質問がございましたら、以下までご連絡ください。\n\nメール：shuhary.info@gmail.com",
        },
      ],
    },
  },
};

export const translations: Record<Lang, typeof en> = { en, ja };
