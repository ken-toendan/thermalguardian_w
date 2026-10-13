export type Lang = "en" | "ja";

export interface BiText {
  en: string;
  ja: string;
}

export const content = {
  meta: {
    title: {
      en: "Thermal Guardian — Preventing silent bathroom deaths",
      ja: "サーマルガーディアン — 静かな入浴事故を防ぐ",
    },
    description: {
      en: "A wearable safety system for elderly bathing — built to prevent the 19,000 silent deaths that happen in Japanese bathtubs every year.",
      ja: "高齢者のための入浴事故予防 ウェアラブルシステム — 毎年日本の浴室で起きる19,000件の静かな入浴関連死を防ぐために。",
    },
  },
  nav: {
    problem: { en: "The Problem", ja: "問題" },
    system: { en: "System", ja: "システム" },
    aegis: { en: "Aegis", ja: "Aegis" },
    achievements: { en: "Achievements", ja: "実績" },
    talks: { en: "Talks", ja: "発表動画" },
    team: { en: "Team", ja: "チーム" },
    contact: { en: "Contact", ja: "お問い合わせ" },
    openMenu: { en: "Open menu", ja: "メニューを開く" },
    closeMenu: { en: "Close menu", ja: "メニューを閉じる" },
    language: { en: "Language", ja: "言語" },
    demo: { en: "Live demo", ja: "デモを見る" },
    menu: { en: "Menu", ja: "メニュー" },
    china: { en: "China", ja: "China" },
    chinaHint: { en: "China version: videos play from Bilibili", ja: "中国版：動画は Bilibili で再生" },
  },
  video: {
    // China version on phones, where Bilibili's embedded player fails: the video opens on Bilibili instead.
    watchOnBilibili: { en: "Watch on Bilibili", ja: "Bilibili で見る" },
  },
  hero: {
    kicker: {
      en: "Preventing silent bathroom deaths",
      ja: "静かな入浴事故を防ぐ",
    },
    headlineBefore: {
      en: "A wearable safety system for elderly bathing — built to prevent ",
      ja: "高齢者のための入浴事故予防 ウェアラブルシステム — 毎年",
    },
    headlineAfter: {
      en: " silent deaths every year",
      ja: "の入浴関連死を防ぐために",
    },
    accent: {
      en: "19,000",
      ja: "19,000件",
    },
    sub: {
      en: "Multi-modal sensing. Stage-aware safety logic. Runs privately, locally, and alerts caregivers the moment things go wrong.",
      ja: "マルチモーダルセンシング。入浴の各段階を理解するスマートな安全アルゴリズム。ローカルで処理し、異常を検知した瞬間に介護者と家族へアラートを送ります。",
    },
    ctaPrimary: { en: "Contact information", ja: "お問い合わせ" },
    ctaSecondary: { en: "See how it works", ja: "仕組みを見る" },
    venuesLabel: {
      en: "Presented and recognised at",
      ja: "発表・受賞歴",
    },
    venues: [
      { en: "HEALTHINF 2026", ja: "HEALTHINF 2026" },
      { en: "iCAN 2026 · 2nd place", ja: "iCAN 2026 第2位" },
      { en: "UbiComp / ISWC 2026", ja: "UbiComp / ISWC 2026" },
      { en: "IEEE GCCE 2026", ja: "IEEE GCCE 2026" },
      { en: "KUAS", ja: "KUAS" },
    ] as BiText[],
    metaItems: [
      {
        en: "R&D since Oct 2025",
        ja: "2025年10月から研究開発",
      },
    ] as BiText[],
  },
  problem: {
    kicker: { en: "The Problem", ja: "問題" },
    heading: { en: "A hidden danger in every Japanese bathroom", ja: "日本の浴室に潜む、見えない危険" },
    intro: {
      en: "Deaths in bathtubs are one of the most under-reported preventable risks for elderly Japanese — a cultural bathing norm colliding with aging circulatory systems.",
      ja: "入浴関連の事故は、日本の高齢者にとって最も見過ごされてきた予防可能なリスクの一つ。入浴文化と加齢による循環器系の変化が重なって発生する、深刻な問題。",
    },
    stats: [
      {
        value: "19,000",
        countTo: 19000,
        suffix: "",
        label: { en: "deaths per year in Japan", ja: "日本での入浴関連死・年間" },
        accent: "red" as "red" | undefined,
      },
      {
        value: "90%",
        countTo: 90,
        suffix: "%",
        label: { en: "of victims are 65 or older", ja: "被害者のうち65歳以上の高齢者" },
        accent: undefined as "red" | undefined,
      },
      {
        value: "4×",
        countTo: 4,
        suffix: "×",
        label: { en: "annual Japanese traffic deaths", ja: "交通事故による死亡者数の約4倍" },
        accent: undefined as "red" | undefined,
      },
    ],
    risksHeading: { en: "Three overlapping risk categories", ja: "3つの重なるリスク" },
    risks: [
      {
        label: { en: "Physiological", ja: "生理的" },
        body: {
          en: "Blood-pressure swings, heatstroke, cardiac stress — the body's own response to hot immersion turns hostile in older circulatory systems.",
          ja: "急な血圧の変化、熱中症、心臓や血管へのストレス — 熱い湯への身体反応そのものが、加齢した循環器系では危険な方向に働く。",
        },
        accent: "red" as const,
      },
      {
        label: { en: "Kinematic", ja: "動作的" },
        body: {
          en: "Fainting, slipping, and silent drowning. Elderly victims tend to slide under water without a struggle, so the window for rescue closes fast.",
          ja: "意識障害、転倒、声なき溺れ。高齢者は抵抗なく静かに沈むことが多く、救助の猶予は急速に閉じる。",
        },
        accent: "amber" as const,
      },
      {
        label: { en: "Environmental", ja: "環境的" },
        body: {
          en: 'Sudden cold-to-hot temperature transitions — known as "heat shock" — trigger the blood-pressure cascade that starts most fatal events.',
          ja: "急な温度の変化 — いわゆる「ヒートショック」 — が血圧の急変を引き起こし、致命的な事故の多くを誘発する。",
        },
        accent: "sky" as const,
      },
    ],
    pullquote: {
      en: "Response window is 3–4 minutes to brain damage, 4–6 to death. Reaction isn't enough — prevention is.",
      ja: "対応可能時間は、脳障害まで3〜4分、死亡まで4〜6分。事後対応では足りない — 必要なのは予防。",
    },
  },
  wedge: {
    kicker: { en: "Why existing solutions fall short", ja: "既存のソリューションでは足りない理由" },
    heading: {
      en: "Most systems watch one thing. Bathing accidents happen when three fail together",
      ja: "ほとんどのシステムは一つの側面しか見ていない。入浴事故は3つが重なって発生する",
    },
    intro: {
      en: "Existing wearables, nurse-call systems, and smart bathroom devices each solve part of the problem. None of them see how the pieces interact.",
      ja: "既存のウェアラブル、ナースコール、スマート浴室機器はそれぞれ問題の一部しか解決しない。3 つの信号の相互作用を見ているものはない。",
    },
    cards: [
      {
        icon: "heart",
        title: { en: "Body-only monitors", ja: "身体のみのモニター" },
        body: {
          en: "Track heart rate or SpO2, but miss the fall itself and the hot-water context that caused it.",
          ja: "心拍や SpO₂ は測るが、転倒そのものや、それを招いた熱水環境は見えていない。",
        },
      },
      {
        icon: "activity",
        title: { en: "Motion-only cameras", ja: "動作検知カメラのみ" },
        body: {
          en: "See a body go limp, but can't tell stroke from sleep, and introduce privacy problems in a bathroom.",
          ja: "倒れた身体は捉えられるが、脳卒中と睡眠を区別できず、浴室ではプライバシー上の問題を生む。",
        },
      },
      {
        icon: "thermometer",
        title: { en: "Room-only thermometers", ja: "室内温度計のみ" },
        body: {
          en: "Know the water is 42 °C but don't know who's in it or whether they're still conscious.",
          ja: "湯温が 42 °C であることは分かっても、誰が入っているのか、意識があるのかは分からない。",
        },
      },
    ],
    close: {
      en: "Thermal Guardian combines all three signals, stage-aware — so a high heart rate during immersion means something different than a high heart rate after exit.",
      ja: "サーマルガーディアンは3つの信号すべてを段階対応で統合する — 入浴中の高心拍と退出後の高心拍では、意味がまったく異なる。",
    },
  },
  how: {
    kicker: { en: "How it works", ja: "仕組み" },
    heading: {
      en: "Three layers. One local hub. No camera in the bathroom",
      ja: "3 つの層、1 つのローカルハブ、浴室にカメラはない",
    },
    intro: {
      en: "Sensors watch the body and the room. A hub in the home interprets context. Caregivers get alerts — with a fallback to emergency services if nobody is reachable.",
      ja: "センサーが身体と室内を監視し、家庭内のハブが状況を解釈する。介護者と家族へアラートを送り、連絡がつかない場合のみ救急サービスへフォールバックする。",
    },
    hardwareCaption: {
      en: "One system: an upper-arm wearable, an mmWave radar node, a Raspberry Pi hub and two temperature nodes for the bathroom and changing room.",
      ja: "1つのシステム：上腕ウェアラブル、mmWave レーダーノード、Raspberry Pi ハブ、浴室と脱衣所の温度ノード 2 台。",
    },
    callouts: [
      {
        tag: { en: "Wearable", ja: "ウェアラブル" },
        title: { en: "IPX7 armband", ja: "IPX7 防水アームバンド" },
        body: {
          en: "6-axis IMU · PPG heart-rate · skin-temp · env temp + humidity · haptic motor for local alerts.",
          ja: "6軸IMU、PPG心拍、皮膚温、環境温湿度、ローカル通知用の触覚モーター。",
        },
      },
      {
        tag: { en: "Radar node", ja: "レーダーノード" },
        title: { en: "mmWave presence radar", ja: "ミリ波（mmWave）在室レーダー" },
        body: {
          en: "HLK-LD2410C radar with about 6 m range. Detects whether someone is present and whether they are moving or still, with no camera.",
          ja: "検知範囲約 6 m の HLK-LD2410C レーダー。カメラを使わずに、人の在室と、動いているか静止しているかを検知する。",
        },
      },
      {
        tag: { en: "Bathroom node", ja: "浴室 IoT センサー" },
        title: { en: "Ambient watcher with voice", ja: "環境モニター + 音声警告" },
        body: {
          en: "Tracks bathroom air temperature and humidity. Onboard speaker delivers multilingual voice alerts during immersion.",
          ja: "浴室の気温と湿度をモニタリング。内蔵スピーカーが入浴中に多言語の音声警告を再生する。",
        },
      },
      {
        tag: { en: "Changing-room node", ja: "脱衣所 IoT センサー" },
        title: { en: "Heat-shock sentinel", ja: "ヒートショック検知" },
        body: {
          en: "Measures the cold-to-hot differential that starts most fatal events. Triggers a warning when the temperature gap crosses the 15 °C threshold.",
          ja: "致命的な事故の多くを引き起こす寒暖差を計測。温度差が 15 °C を超えると警告を発する。",
        },
      },
      {
        tag: { en: "Hub", ja: "ハブ" },
        title: { en: "Raspberry Pi home hub", ja: "Raspberry Pi 家庭内ハブ" },
        body: {
          en: "Every device reports to it over MQTT. It runs the safety rules locally and raises alerts, so readings don't need to leave the home.",
          ja: "すべてのデバイスが MQTT でデータを送る。安全ルールをローカルで実行して警告を出すため、測定データを家の外に出す必要がない。",
        },
      },
    ],
    steps: [
      {
        lead: {
          en: "Sensors read body and environment continuously.",
          ja: "センサーが身体と環境を継続的に計測する。",
        },
        body: {
          en: "Heart rate, motion, skin and air temperature, humidity — all at once, all while the user bathes.",
          ja: "心拍、動作、皮膚温、気温、湿度 — 入浴中ずっと、すべてを同時に。",
        },
      },
      {
        lead: {
          en: "The local hub interprets context and confirms risk on-device.",
          ja: "ローカルハブが状況を解釈し、オンデバイスでリスクを確定する。",
        },
        body: {
          en: "No camera, no cloud round-trip for alert decisions. It knows whether the user is in pre-bath, immersed, or exiting, and applies thresholds accordingly.",
          ja: "カメラもクラウド往復もない。入浴前・入浴中・退出後のどの段階かを把握し、段階ごとにしきい値を適用する。",
        },
      },
      {
        lead: {
          en: "Caregivers get alerts instantly.",
          ja: "介護者と家族へ即座に通知。",
        },
        body: {
          en: "Emergency services are a fallback only when nobody is reachable — the default path is human, not 119.",
          ja: "誰にも連絡がつかない場合のみ救急サービスへフォールバックする — 標準経路は 119 ではなく人間。",
        },
      },
    ],
    diagramNodes: {
      monitoring: { en: "Monitoring Devices", ja: "モニタリングデバイス" },
      monitoringSub1: { en: "Wearable + environmental IoT", ja: "ウェアラブル + 環境 IoT ×2" },
      monitoringSub2: { en: "Haptic + voice alerts", ja: "触覚 + 音声警告" },
      csi: { en: "WiFi CSI Node", ja: "WiFi CSI ノード" },
      csiSub1: { en: "Passive RF sensing", ja: "受動 RF センシング" },
      csiSub2: { en: "Presence + WiFi HR", ja: "在室検知・WiFi 心拍" },
      radar: { en: "mmWave Radar", ja: "mmWave レーダー" },
      radarSub1: { en: "LD2410C · 24 GHz", ja: "LD2410C · 24 GHz" },
      radarSub2: { en: "Presence · Breath · Distance", ja: "在室・呼吸・距離" },
      hub: { en: "Data Processing", ja: "データ処理" },
      hubSub1: { en: "Raspberry Pi hub", ja: "ラズベリーパイ ハブ" },
      hubSub2: { en: "Stage-aware safety logic", ja: "段階対応の安全ロジック" },
      hubSub3: { en: "Local-first · on-device", ja: "ローカル優先 オンデバイス" },
      cloud: { en: "Cloud", ja: "クラウド" },
      cloudSub1: { en: "Encrypted storage", ja: "暗号化ストレージ" },
      cloudSub2: { en: "Longitudinal records", ja: "履歴データ" },
      app: { en: "Web + Mobile App", ja: "ウェブ・モバイルアプリ" },
      appSub1: { en: "Live dashboard", ja: "ライブダッシュボード" },
      appSub2: { en: "React + Flutter", ja: "React + Flutter" },
      caregivers: { en: "Caregivers & Family", ja: "介護者と家族" },
      caregiversSub1: { en: "Instant alerts", ja: "即時アラート通知" },
      wirelessLabel: { en: "Wireless transmission via MQTT", ja: "MQTT による無線通信" },
    },
    measurementsLabel: { en: "Measurement items", ja: "計測項目" },
    measurementsIntro: {
      en: "What the system continuously measures across the wearable, the environmental IoT nodes, and the contactless sensors.",
      ja: "ウェアラブル、環境 IoT ノード、そして非接触センサーを通じてシステムが継続的に計測する項目。",
    },
    measurements: [
      { en: "Heart rate", ja: "心拍数" },
      { en: "Body motion & posture", ja: "体の動きと姿勢" },
      { en: "Body temperature", ja: "体温" },
      { en: "Env. temperature & humidity", ja: "環境温度と湿度" },
      { en: "Presence", ja: "在室検知" },
      { en: "Breathing", ja: "呼吸" },
      { en: "Distance", ja: "距離" },
    ] as BiText[],
  },
  liveMonitor: {
    kicker: { en: "Live system preview", ja: "ライブシステムプレビュー" },
    heading: { en: "The product, working", ja: "実際に動くシステム" },
    intro: {
      en: "A simulated run of the stage-aware safety logic — cycling through pre-bath, immersion, and exit as the sensors would see them in the home.",
      ja: "段階対応型の安全アルゴリズムを擬似動作で再現 — 入浴前、入浴中、退出後のセンサーが家庭内で見る信号の流れを表示。",
    },
    stageLabel: { en: "Stage", ja: "段階" },
    statusLabel: { en: "Status", ja: "ステータス" },
    ecgLabel: { en: "ECG signal (simulated)", ja: "ECG 信号 (模擬)" },
    caption: {
      en: "Representative values for each stage. Thermal Guardian raises alerts when readings exceed the stage-specific thresholds — not absolute ones.",
      ja: "各段階の代表的な値を表示。サーマルガーディアンは絶対値ではなく段階ごとのしきい値を超えたときに警告を発します。",
    },
    metrics: {
      hr: { en: "Heart rate", ja: "心拍" },
      skin: { en: "Skin temp", ja: "皮膚温" },
      bath: { en: "Bath temp", ja: "湯温" },
    },
    stages: [
      { key: "pre", en: "Pre-bath", ja: "入浴前" },
      { key: "imm", en: "Immersion", ja: "入浴中" },
      { key: "exit", en: "Exit", ja: "退出後" },
    ],
    risk: {
      safe: { en: "Safe", ja: "安全" },
      monitor: { en: "Monitoring", ja: "モニタリング" },
      alert: { en: "Alert", ja: "警告" },
    },
  },
  novelties: {
    kicker: { en: "What makes it different", ja: "私たちの独自性" },
    heading: { en: "Three things set Thermal Guardian apart", ja: "サーマルガーディアンを他と分ける 3 つの特徴" },
    items: [
      {
        title: { en: "Multi-modal sensing", ja: "マルチモーダルセンシング" },
        body: {
          en: "Body, motion, and environment are combined in a single system. Most competitors pick one. We need all three to distinguish a nap from a collapse, or a hot bath from heatstroke.",
          ja: "身体、動き、環境を一つのシステムに統合。競合は一つに絞りがちだが、昼寝と崩落、熱い湯と熱中症を区別するには3つすべてが必要。",
        },
      },
      {
        title: { en: "Stage-aware safety logic", ja: "スマートな安全アルゴリズム" },
        body: {
          en: "The system recognises where you are in the bathing ritual — pre-bath, immersion, post-exit — and adjusts its thresholds for each stage. A high pulse during immersion is expected; the same pulse after exit is an alert.",
          ja: "入浴の各段階（入浴前・入浴中・退出後）をシステムが認識し、段階ごとにしきい値を調整する。入浴中の速い脈は想定内、退出後の同じ脈は警告。",
        },
      },
      {
        title: { en: "Private by design", ja: "プライバシーに配慮した設計" },
        body: {
          en: "No cameras. Risk decisions run on-device at the local hub. Data only leaves the home when the caregiver asks for it. Compliance and dignity, by default.",
          ja: "カメラは一切使用しない。リスク判定はローカルハブでオンデバイスに動作し、データが家庭外に出るのは介護者が要求したときのみ。コンプライアンスと尊厳を両立。",
        },
      },
    ],
  },
  aegis: {
    // Source: Aegis_explained.md (team write-up, 26 Sep 2026) + the UbiComp/ISWC 2026 poster.
    // Follows the write-up's "claims to make / avoid" list: no accuracy claims (the Pi time is the team's
    // own measurement, added Oct 2026),
    // occupancy idea credited to Trinh et al. 2026, pilot caveats kept.
    kicker: { en: "Aegis", ja: "Aegis" },
    heading: {
      en: "An on-device AI that explains alarms, and can never silence them",
      ja: "アラームの理由を説明し、決して鳴り止ませないオンデバイス AI",
    },
    intro: {
      en: "Aegis is a small language model that runs on Thermal Guardian's home hub. When a safety rule fires but the sensors disagree, it looks at what happened next, decides how urgent the alarm is, and tells the caregiver why in English and Japanese. By design it can raise an alarm's priority or leave it unchanged. It cannot lower or silence one.",
      ja: "Aegis は、サーマルガーディアンの家庭内ハブ上で動作する小規模な言語モデルである。安全ルールが発動してもセンサー同士の判断が食い違うとき、その後に起きたことを確かめてアラームの緊急度を判断し、その理由を英語と日本語で介護者に伝える。設計上、Aegis にできるのはアラームの優先度を引き上げるか、そのまま維持することだけで、引き下げたり鳴り止ませたりすることはできない。",
    },
    badges: [
      { en: "UbiComp / ISWC 2026 Student Challenge · Shanghai, 11–15 Oct", ja: "UbiComp / ISWC 2026 スチューデントチャレンジ・上海 10 月 11–15 日" },
      { en: "Runs locally · Qwen2.5 3B", ja: "ローカルで動作・Qwen2.5 3B" },
      { en: "Research prototype", ja: "研究プロトタイプ" },
    ] as BiText[],

    problem: {
      heading: { en: "One alarm, two opposite situations", ja: "1 つのアラーム、正反対の 2 つの状況" },
      body: {
        en: "Bathing accidents are a major risk for older adults, with an estimated 19,000 deaths a year in Japan. Thermal Guardian watches the bath with an arm-worn wearable and contact-free room sensing (WiFi CSI and mmWave radar), and a Raspberry Pi hub checks the readings against threshold-based medical rules. One of them, M-011, fires when the wearable reports it isn't being worn while the room sensors still detect someone for 5 seconds. That can mean two very different things.",
        ja: "入浴中の事故は高齢者にとって大きなリスクであり、日本では年間約 19,000 人が亡くなっていると推計されている。サーマルガーディアンは、腕に装着するウェアラブルと非接触の室内センシング（WiFi CSI とミリ波レーダー）で入浴を見守り、Raspberry Pi のハブがしきい値に基づく医療ルールで計測値を判定する。そのひとつ M-011 は、ウェアラブルが「未装着」を報告しているにもかかわらず、室内センサーが 5 秒間在室を示し続けると発動する。これは正反対の 2 つの状況を意味しうる。",
      },
      exit: {
        title: { en: "Deliberate exit", ja: "意図的な退出" },
        body: {
          en: "The person took the wearable off and walked out of the bathroom. Harmless.",
          ja: "ウェアラブルを外して浴室から出た。危険はない。",
        },
      },
      collapse: {
        title: { en: "Collapse", ja: "昏倒" },
        body: {
          en: "The person collapsed and the wearable came off. An emergency.",
          ja: "昏倒し、その際にウェアラブルが外れた。緊急事態である。",
        },
      },
      sameLabel: {
        en: "In both cases, at the moment the rule fires",
        ja: "どちらの場合も、ルール発動の瞬間のセンサーは同じ",
      },
      sameStates: [
        { en: "Wearable: not worn", ja: "ウェアラブル：未装着" },
        { en: "Room: occupied", ja: "室内：在室" },
        { en: "Movement: low", ja: "動き：少ない" },
      ] as BiText[],
      consequence: {
        en: "Because the two look identical, today's system treats every trigger as an emergency, and every harmless exit becomes a false alarm.",
        ja: "両者は見分けがつかないため、現在のシステムはすべての発動を緊急事態として扱い、無害な退出もすべて誤報になる。",
      },
    },

    challenge: {
      heading: { en: "Why this is hard", ja: "なぜ難しいのか" },
      items: [
        {
          title: { en: "The trigger moment can't tell them apart", ja: "発動の瞬間には見分けられない" },
          body: {
            en: "When M-011 fires, both events give identical evidence: wearable off, room occupied. Combining the same observations more cleverly cannot separate them. From that moment alone, classical fusion (Dempster–Shafer) and Aegis 3B both recognise 0 of 4 exits.",
            ja: "M-011 が発動した瞬間、2 つの状況はまったく同じ証拠を示す。ウェアラブルは外れ、室内は在室。同じ観測をどれだけ工夫して組み合わせても両者は区別できず、その瞬間の情報だけでは従来の統合手法（Dempster–Shafer）も Aegis 3B も、4 件の退出を 1 件も認識できない。",
          },
        },
        {
          title: { en: "The answer arrives after the alarm", ja: "答えはアラームの後に現れる" },
          body: {
            en: "The evidence that separates them only appears afterwards, in how room occupancy changes over the following seconds.",
            ja: "両者を分ける証拠は、その後の数秒間に室内の在室状況がどう変わるかという形で、アラームの後になって初めて現れる。",
          },
        },
        {
          title: { en: "An AI in a safety path can fail", ja: "安全に関わる経路の AI は失敗しうる" },
          body: {
            en: "A language model can be wrong, slow or return malformed output, and a wrong action could contribute to a missed emergency.",
            ja: "言語モデルは誤ることも、遅れることも、形式の崩れた出力を返すこともある。誤った行動は緊急事態の見逃しにつながりかねない。",
          },
        },
      ],
      requirementTitle: { en: "The requirement", ja: "求められる条件" },
      requirementBody: {
        en: "Use the evidence that arrives after the alarm, while limiting what the AI is allowed to do, so that no model output can weaken the original alarm.",
        ja: "アラームの後に得られる証拠を活かしつつ AI に許す権限を限定し、モデルのどんな出力も元のアラームを弱められないようにすること。",
      },
    },

    insight: {
      heading: { en: "What happens next tells them apart", ja: "その後の数秒が両者を見分ける" },
      body: {
        en: "In recorded trials on the real hardware, movement at the moment of the alarm overlapped between exits and collapses. What separated them was the next few seconds: after every genuine exit the room read empty for 10 to 23 seconds, and after every simulated collapse it never emptied.",
        ja: "実機での記録試験では、アラーム発生時点の動きは退出と昏倒で重なっていた。両者を分けたのはその後の数秒だった。実際の退出ではいずれも室内が 10〜23 秒間無人になり、模擬昏倒では一度も無人にならなかった。",
      },
      keyObservation: {
        en: "Key observation: every genuine exit emptied the room for 10 to 23 s. No simulated collapse did.",
        ja: "重要な観察：実際の退出ではすべて室内が 10〜23 秒間無人になった。模擬昏倒では一度もそうならなかった。",
      },
      occupied: { en: "occupied", ja: "在室" },
      empty: { en: "empty", ja: "無人" },
      occupancyLegend: { en: "room occupancy", ja: "在室状況" },
      motionLegend: { en: "radar motion energy", ja: "レーダーの動きの強さ" },
      timeAxis: { en: "time within the labelled window (s)", ja: "ウィンドウ内の経過時間（秒）" },
      exitTitle: { en: "Deliberate exit, participant S1", ja: "意図的な退出（参加者 S1）" },
      exitNote: { en: "room empty for 11 s", ja: "11 秒間 無人" },
      collapseTitle: { en: "Simulated collapse, participant S1", ja: "模擬昏倒（参加者 S1）" },
      collapseNote: { en: "occupancy persists, no vacancy detected", ja: "在室が続き、無人の時間は検出されない" },
      allTitle: { en: "All 17 conflict windows, three participants", ja: "全 17 件の矛盾ウィンドウ（参加者 3 名）" },
      allRows: [
        { label: { en: "Deliberate exit (n = 4)", ja: "意図的な退出（n = 4）" }, note: { en: "10 to 23 s", ja: "10〜23 秒" } },
        { label: { en: "Simulated collapse (n = 3)", ja: "模擬昏倒（n = 3）" }, note: { en: "0 s in all 3 windows", ja: "3 件すべて 0 秒" } },
        { label: { en: "Indeterminate (n = 10)", ja: "判定不能（n = 10）" }, note: { en: "0 s in all 10 windows", ja: "10 件すべて 0 秒" } },
      ],
      allAxis: {
        en: "longest continuous vacancy after wearable contact is lost (s)",
        ja: "ウェアラブルが外れた後、連続して無人だった最長の時間（秒）",
      },
      caption: {
        en: "Real recordings on the Thermal Guardian hardware: room occupancy and radar motion after wearable contact is lost, for one exit and one simulated collapse by the same participant, and the longest vacancy in all 17 windows. Motion is noisy in both cases and does not separate them. Occupancy does.",
        ja: "サーマルガーディアンの実機での実際の記録。同じ参加者による退出 1 件と模擬昏倒 1 件について、ウェアラブルが外れた後の在室状況とレーダーの動きを示し、あわせて全 17 件の最長無人時間を示す。動きはどちらでもばらつきが大きく両者を分けられないが、在室状況は分けられる。",
      },
      credit: {
        en: "Using room occupancy after a fall is not a new idea (Trinh et al., 2026). What Aegis adds is using it as evidence inside a fail-safe agent that resolves a wearable-versus-room conflict.",
        ja: "転倒後の在室状況を用いる考え方自体は新しいものではない（Trinh et al., 2026）。Aegis の新しさは、それをウェアラブルと室内センサーの矛盾を解決するフェイルセーフなエージェントの判断材料として使う点にある。",
      },
    },

    how: {
      heading: { en: "How Aegis works", ja: "Aegis の仕組み" },
      steps: [
        {
          title: { en: "Summarise", ja: "要約する" },
          body: {
            en: "The hub packs the situation into one checked record, like a nurse's handover note: states, trends and durations only. No raw signals, audio, video or personal identifiers, and heart rate appears only as a trend. A record that fails the check never reaches the model.",
            ja: "ハブが状況を 1 つの検証済みの記録にまとめる。看護師の申し送りのように状態・傾向・継続時間だけを含み、生の信号・音声・映像・個人を特定する情報は含まない。心拍も傾向としてのみ扱う。検証を通らない記録はモデルに届かない。",
          },
        },
        {
          title: { en: "Investigate", ja: "確かめる" },
          body: {
            en: "Before deciding, the model (Qwen2.5 3B) can call two grounded tools, recent sensor history and clinical knowledge, repeating plan, act and observe for up to four steps. It returns a state, a confidence and a caregiver-facing explanation.",
            ja: "判断の前に、モデル（Qwen2.5 3B）は直近のセンサー履歴と臨床知識という 2 つのツールを使える。計画 → 実行 → 観察を最大 4 ステップ繰り返し、状態・確信度・介護者向けの説明を返す。",
          },
        },
        {
          title: { en: "Decide inside a safety gate", ja: "安全ゲートの中で判断する" },
          body: {
            en: "A fixed rule, not the model, turns that answer into one of two actions: Elevate or Maintain. Maintain is allowed only when the evidence is consistent with an exit and confidence is at least 0.55. Errors, timeouts and malformed output all become Elevate.",
            ja: "その答えを、モデルではなく固定のルールが 2 つの行動のどちらかに変換する。「引き上げ」か「維持」である。「維持」が許されるのは、証拠が退出と整合し、確信度が 0.55 以上の場合だけである。エラー・タイムアウト・不正な出力はすべて「引き上げ」になる。",
          },
        },
        {
          title: { en: "Explain", ja: "説明する" },
          body: {
            en: "The caregiver receives the priority with a short explanation in English and Japanese.",
            ja: "介護者は優先度とともに、英語と日本語の短い説明を受け取る。",
          },
        },
      ],
      guaranteeTitle: { en: "The original alarm never waits", ja: "元のアラームは決して待たない" },
      guaranteeBody: {
        en: "M-011's alarm fires on its own 5-second timer whatever Aegis decides, and it follows its own path without waiting for the model. So after triage, its priority is never below the one M-011 gave it. “Silence” is not a rejected answer: the model's output format has no way to express it. In the worst case, the system behaves exactly as it does today.",
        ja: "M-011 のアラームは、Aegis の判断に関係なく独自の 5 秒タイマーで発動し、モデルを待たずに独立した経路で届く。そのためトリアージ後の優先度が、M-011 が付けた優先度を下回ることはない。「鳴り止ませる」は却下される答えではなく、モデルの出力形式にそもそも存在しない。最悪の場合でも、システムの動作は現在とまったく同じである。",
      },
      diagram: {
        sensingLabel: { en: "Multimodal sensing", ja: "マルチモーダルセンシング" },
        sensors: [
          { name: { en: "Wearable", ja: "ウェアラブル" }, state: { en: "not worn", ja: "未装着" } },
          { name: { en: "WiFi CSI", ja: "WiFi CSI" }, state: { en: "occupied", ja: "在室" } },
          { name: { en: "mmWave radar", ja: "ミリ波レーダー" }, state: { en: "occupied", ja: "在室" } },
        ],
        rule: {
          title: { en: "Rule M-011 fires", ja: "ルール M-011 が発動" },
          body: {
            en: "Wearable off while the room stays occupied for 5 s. At this instant an exit and a collapse look the same.",
            ja: "室内が在室のまま、ウェアラブルが 5 秒間外れている。この瞬間、退出と昏倒は同じに見える。",
          },
        },
        alarm: {
          title: { en: "Original M-011 alarm path", ja: "元の M-011 アラーム経路" },
          body: {
            en: "Goes straight to the caregiver, independent of the model: never blocked, delayed or suppressed.",
            ja: "モデルとは独立して介護者へ直接届く。遮られることも、遅れることも、抑えられることもない。",
          },
        },
        sidecar: {
          title: { en: "Aegis sidecar", ja: "Aegis サイドカー" },
          tag: { en: "advisory · on-device · Qwen2.5 3B", ja: "助言のみ・端末内で動作・Qwen2.5 3B" },
        },
        boxes: [
          {
            title: { en: "EvidenceBundle", ja: "EvidenceBundle" },
            body: { en: "Schema-checked, interpreted sensor states, not raw signals", ja: "スキーマで検証された解釈済みのセンサー状態。生の信号は含まない" },
          },
          {
            title: { en: "Agent loop", ja: "エージェントループ" },
            body: {
              en: "Plan → act → observe, at most 4 steps. Returns state y, confidence c and explanation e",
              ja: "計画 → 実行 → 観察を最大 4 ステップ。状態 y・確信度 c・説明 e を返す",
            },
          },
          {
            title: { en: "Safety gate G(y, c)", ja: "安全ゲート G(y, c)" },
            body: {
              en: "A fixed mapping of (y, c) to one of two actions, threshold τ = 0.55",
              ja: "(y, c) を 2 つの行動のどちらかに固定的に対応付ける。しきい値 τ = 0.55",
            },
          },
        ],
        tools: { en: "Tools: sensor history · clinical knowledge", ja: "ツール：センサー履歴・臨床知識" },
        actionsLabel: { en: "The only two actions", ja: "許される行動は 2 つだけ" },
        elevate: {
          title: { en: "Elevate", ja: "引き上げ" },
          body: { en: "Everything else, including errors, timeouts and c < τ", ja: "それ以外すべて（エラー、タイムアウト、c < τ を含む）" },
        },
        maintain: {
          title: { en: "Maintain", ja: "維持" },
          body: { en: "Only if exit-consistent and c ≥ τ", ja: "退出と整合し、かつ c ≥ τ の場合のみ" },
        },
        caregiver: {
          title: { en: "Caregiver", ja: "介護者" },
          body: {
            en: "Gets the alarm at once. The priority and a written explanation follow after triage.",
            ja: "アラームはすぐに届く。優先度と説明文はトリアージの後に届く。",
          },
        },
        invariant: {
          title: { en: "Safety rule: Aegis's priority ≥ M‑011's priority", ja: "安全の原則：Aegis の優先度 ≥ M‑011 の優先度" },
          body: {
            en: "Aegis may raise the alarm's priority or leave it unchanged. No action lowers or silences it.",
            ja: "Aegis はアラームの優先度を引き上げるか、そのままにすることしかできない。下げたり鳴り止ませたりする行動は存在しない。",
          },
        },
        caption: {
          en: "Aegis adds a reasoning layer after M-011 fires. The alarm path is independent of the model and the gate admits only two actions, so Aegis can prioritise and explain an alarm but never silence it.",
          ja: "Aegis は M-011 の発動後に推論の層を加える。アラーム経路はモデルから独立し、ゲートは 2 つの行動しか認めない。そのため Aegis はアラームに優先度を付けて説明することはできても、鳴り止ませることはできない。",
        },
      },
    },

    design: {
      heading: { en: "How we tested it", ja: "検証の方法" },
      items: [
        {
          title: { en: "Data", ja: "データ" },
          body: {
            en: "Three adult participants performed scripted deliberate exits, simulated collapses and sensor dropouts on the real hardware, giving 17 M-011 conflict windows: 4 exits, 3 simulated collapses and 10 indeterminate.",
            ja: "成人参加者 3 名が実機で、台本に沿った意図的な退出・模擬昏倒・センサーの途絶を行い、M-011 の矛盾ウィンドウを 17 件得た。内訳は退出 4 件、模擬昏倒 3 件、判定不能 10 件。",
          },
        },
        {
          title: { en: "Two kinds of evidence", ja: "2 種類の証拠" },
          body: {
            en: "Instant is the sensor snapshot at the moment of the trigger. +temporal adds the occupancy trajectory that follows.",
            ja: "「instant」は発動の瞬間のセンサーの状態。「+temporal」は、その後の在室状況の推移を加えたもの。",
          },
        },
        {
          title: { en: "Methods compared", ja: "比較した手法" },
          body: {
            en: "Always-escalate (the deployed status quo), Dempster–Shafer fusion, a hand-written temporal policy, and Aegis with Qwen2.5 at 1.5B, 3B and 7B, each run three to five times.",
            ja: "常にエスカレーション（現在運用中の方式）、Dempster–Shafer による統合、人手で書いた時間方向のルール、そして Qwen2.5 の 1.5B・3B・7B による Aegis。それぞれ 3〜5 回繰り返して実行した。",
          },
        },
        {
          title: { en: "Main safety measure", ja: "主な安全指標" },
          body: {
            en: "Missed escalations: collapse or indeterminate windows wrongly given Maintain.",
            ja: "エスカレーションの見逃し：昏倒または判定不能のウィンドウに誤って「維持」が付いた件数。",
          },
        },
      ],
    },

    results: {
      heading: { en: "Results from a real-hardware pilot", ja: "実機パイロット試験の結果" },
      statsLabel: {
        en: "Aegis 3B with the occupancy signal, in all five repeated runs",
        ja: "在室の推移を用いた Aegis 3B（5 回の繰り返し実行すべてで）",
      },
      stats: [
        { value: "4/4", label: { en: "exits recognised", ja: "退出を正しく認識" } },
        { value: "0/4", label: { en: "exits wrongly escalated", ja: "退出の誤エスカレーション" } },
        { value: "0/13", label: { en: "emergencies missed", ja: "緊急事態の見逃し" } },
      ],
      tableHeading: { en: "Every method on the same 17 windows", ja: "同じ 17 件での全手法の結果" },
      columns: {
        method: { en: "Method", ja: "手法" },
        evidence: { en: "Evidence", ja: "証拠" },
        exits: { en: "Exits found ↑", ja: "退出の認識 ↑" },
        falseEsc: { en: "False escalations ↓", ja: "誤エスカレーション ↓" },
        missed: { en: "Missed escalations ↓", ja: "エスカレーションの見逃し ↓" },
      },
      evidence: {
        none: { en: "none", ja: "なし" },
        instant: { en: "instant", ja: "instant" },
        temporal: { en: "+temporal", ja: "+temporal" },
      },
      // Values short of the ideal (4/4 exits found, 0/4 false, 0/13 missed) are coloured in the table.
      rows: [
        { method: { en: "Always-escalate (today's system)", ja: "常にエスカレーション（現在のシステム）" }, evidence: "none", exits: "0/4", falseEsc: "4/4", missed: "0/13", highlight: false },
        { method: { en: "Dempster–Shafer fusion", ja: "Dempster–Shafer による統合" }, evidence: "instant", exits: "0/4", falseEsc: "4/4", missed: "2/13", highlight: false },
        { method: { en: "Dempster–Shafer fusion", ja: "Dempster–Shafer による統合" }, evidence: "temporal", exits: "4/4", falseEsc: "0/4", missed: "1/13", highlight: false },
        { method: { en: "Hand-written policy", ja: "人手で書いたルール" }, evidence: "temporal", exits: "4/4", falseEsc: "0/4", missed: "0/13", highlight: false },
        { method: { en: "Aegis 1.5B", ja: "Aegis 1.5B" }, evidence: "temporal", exits: "2–3/4", falseEsc: "1–2/4", missed: "6–8/13", highlight: false },
        { method: { en: "Aegis 3B", ja: "Aegis 3B" }, evidence: "instant", exits: "0/4", falseEsc: "4/4", missed: "0–3/13", highlight: false },
        { method: { en: "Aegis 3B", ja: "Aegis 3B" }, evidence: "temporal", exits: "4/4", falseEsc: "0/4", missed: "0/13", highlight: true },
        { method: { en: "Aegis 7B", ja: "Aegis 7B" }, evidence: "temporal", exits: "4/4", falseEsc: "0/4", missed: "0/13", highlight: false },
      ] as { method: BiText; evidence: "none" | "instant" | "temporal"; exits: string; falseEsc: string; missed: string; highlight: boolean }[],
      tableNote: {
        en: "Ranges are minimum to maximum over repeated runs. Arrows give the better direction. Values short of the ideal are coloured.",
        ja: "範囲は繰り返し実行での最小〜最大。矢印は良い方向を示す。理想に届かない値は色付きで示す。",
      },
      findingsHeading: { en: "What the results show", ja: "結果からわかること" },
      findings: [
        {
          en: "Trigger-instant evidence is not enough: Dempster–Shafer fusion and Aegis 3B both find 0 of 4 exits.",
          ja: "発動の瞬間の証拠だけでは足りない。Dempster–Shafer による統合も Aegis 3B も、退出を 4 件中 0 件しか見つけられない。",
        },
        {
          en: "Occupancy after the trigger resolves the exits: both then find 4 of 4, with 0 of 4 false escalations.",
          ja: "発動後の在室状況で退出を見分けられる。どちらも 4 件中 4 件を見つけ、誤エスカレーションは 4 件中 0 件になる。",
        },
        {
          en: "The gate keeps the remaining errors safe. Dempster–Shafer fusion misses 1 of 13 escalations and cannot say “I don't know”, and the 1.5B model misses 6 to 8. Aegis 3B misses none.",
          ja: "ゲートが残りの誤りを安全側にとどめる。Dempster–Shafer による統合はエスカレーションを 13 件中 1 件見逃し、「判断できない」と答えることもできない。1.5B モデルは 6〜8 件を見逃す。Aegis 3B の見逃しは 0 件。",
        },
        {
          en: "3B is the best trade-off we observed: 7B matches it, but runs at 17 to 22 tokens/s against 82 to 89.",
          ja: "観測した中で最もバランスが良いのは 3B。7B も同じ結果だが、処理速度は 3B の毎秒 82〜89 トークンに対し 17〜22 トークンにとどまる。",
        },
        {
          en: "A hand-written temporal policy ties Aegis on this single rule, but a person had to find the deciding signal first. Aegis adds the explanation for the caregiver.",
          ja: "人手で書いた時間方向のルールは、この 1 つのルールに限れば Aegis と同等。ただし決め手となる信号を人が先に見つける必要があった。Aegis はさらに介護者への説明を加える。",
        },
      ] as BiText[],
    },

    edge: {
      heading: { en: "Running on the hub", ja: "ハブでの動作" },
      body: {
        en: "Everything runs locally. A slow or timed-out model changes only the priority and the explanation, never the M-011 alarm: under the 45-second timeout, five CPU-only 3B windows defaulted to Elevate.",
        ja: "すべてローカルで動作する。モデルが遅れたりタイムアウトしたりしても変わるのは優先度と説明だけで、M-011 のアラームは変わらない。45 秒のタイムアウトのもとで、CPU のみで動かした 3B では 5 件のウィンドウが自動的に「引き上げ」になった。",
      },
      columns: {
        platform: { en: "Platform", ja: "プラットフォーム" },
        model: { en: "Model", ja: "モデル" },
        latency: { en: "Agent-loop time", ja: "エージェントループの所要時間" },
      },
      rows: [
        { platform: { en: "Desktop GPU, RTX 3070", ja: "デスクトップ GPU（RTX 3070）" }, model: "Qwen2.5 3B", latency: { en: "5.4–6.1 s", ja: "5.4〜6.1 秒" }, pending: false },
        { platform: { en: "Desktop, CPU only", ja: "デスクトップ（CPU のみ）" }, model: "Qwen2.5 3B", latency: { en: "42 s", ja: "42 秒" }, pending: false },
        { platform: { en: "Desktop, CPU only", ja: "デスクトップ（CPU のみ）" }, model: "Qwen2.5 1.5B", latency: { en: "23 s", ja: "23 秒" }, pending: false },
        { platform: { en: "Raspberry Pi 5, CPU only", ja: "Raspberry Pi 5（CPU のみ）" }, model: "Qwen2.5 3B", latency: { en: "~62 s", ja: "約 62 秒" }, pending: false },
      ],
    },

    limits: {
      heading: { en: "Limitations and next steps", ja: "限界と今後の課題" },
      limitsLabel: { en: "Limitations", ja: "限界" },
      limits: [
        {
          en: "Pilot scale: three participants, 17 scripted windows and simulated collapses. Zero errors here do not estimate real-world or clinical reliability, and Aegis has not been tested with older adults.",
          ja: "パイロット規模：参加者 3 名、台本に沿った 17 件のウィンドウ、模擬的な昏倒。ここでの誤りゼロは実環境や臨床での信頼性を示すものではなく、高齢者での検証もまだ行っていない。",
        },
        {
          en: "The threshold τ = 0.55 is not calibrated, and on the Raspberry Pi hub the 3B agent loop takes about 62 s, against 5.4–6.1 s on a desktop GPU.",
          ja: "しきい値 τ = 0.55 は較正されていない。また Raspberry Pi のハブでは 3B のエージェントループに約 62 秒かかる（デスクトップ GPU では 5.4〜6.1 秒）。",
        },
      ] as BiText[],
      nextLabel: { en: "Next steps", ja: "今後の課題" },
      next: [
        {
          en: "Test whether one reusable reasoning layer holds across more medical rules and sensor conflicts. On M-011 alone, a fixed rule already suffices.",
          ja: "1 つの再利用可能な推論の層が、より多くの医療ルールやセンサー間の矛盾にも通用するかを検証する。M-011 だけなら固定のルールで十分である。",
        },
        {
          en: "Deploy on the Raspberry Pi hub, with optimisation and fine-tuning of smaller models.",
          ja: "Raspberry Pi のハブに実装し、より小さなモデルの最適化とファインチューニングを進める。",
        },
        {
          en: "Study with caregivers whether the explanations are useful and trusted.",
          ja: "説明が役に立ち、信頼されるかを介護者とともに検証する。",
        },
      ] as BiText[],
    },

    video: {
      heading: { en: "See it in action", ja: "動作の様子" },
      soon: { en: "Aegis video coming soon", ja: "Aegis の動画は近日公開" },
      // Self-hosted MP4 (YouTube is blocked in mainland China): 720p H.264, ≤ 25 MB,
      // in webapp/public/assets/video/.
      src: "assets/video/aegis.mp4" as string | null,
      poster: "assets/video/aegis-poster.jpg" as string | null,
      // Bilibili BV id for the China version.
      bilibiliId: "BV17op96VERk" as string | null, // Bilibili: "Aegis Demo"
    },
    paperTitle: "Aegis: An On-Device Foundation Model Agent for Resolving Conflicting Sensor Evidence in Elderly Bathing",
    citation: {
      en: "To appear in UbiComp Companion '26 · October 11–15, 2026, Shanghai, China · DOI 10.1145/3798063.3837317 · CC BY 4.0",
      ja: "UbiComp Companion '26 に掲載予定・2026 年 10 月 11–15 日、中国・上海・DOI 10.1145/3798063.3837317・CC BY 4.0",
    },
    // Set once the DOI resolves (it returned 404 on 26 Sep 2026).
    paperUrl: null as string | null,
    readPaper: { en: "Read the paper", ja: "論文を読む" },
    authorsLabel: { en: "Authors", ja: "著者" },
    authors: "A K M Akaiduzzaman, Ethan Taku Shimada, Joseph Arthur Koo, Ken Argani Toendan, Kawai Rostum, Zilu Liang",
    authorsNote: {
      en: "Zilu Liang is the faculty supervisor · Ubiquitous and Personal Computing Lab, Kyoto University of Advanced Science",
      ja: "Zilu Liang（指導教員）・京都先端科学大学 Ubiquitous and Personal Computing Lab",
    },
  },
  achievements: {
    kicker: { en: "Achievements", ja: "実績" },
    heading: { en: "HEALTHINF, iCAN, UbiComp, CUHK‑X and GCCE 2026", ja: "HEALTHINF・iCAN・UbiComp・CUHK‑X・GCCE 2026" },
    intro: { en: "The venues where the system is being presented in 2026.", ja: "2026 年にシステムを発表している場。" },
    items: [
      {
        label: { en: "Academic · Accepted", ja: "学術 採択" },
        title: { en: "HEALTHINF 2026 — abstract accepted", ja: "HEALTHINF 2026 アブストラクト採択" },
        place: {
          en: "Marbella, Spain · 2–4 March 2026 (online presentation)",
          ja: "スペイン・マルベーリャ 2026 年 3 月 2–4 日（オンライン発表）",
        },
        body: {
          en: "Part of the BIOSTEC 2026 joint track.",
          ja: "BIOSTEC 2026 共同学会の一部。",
        },
        url: "https://healthinf.scitevents.org/?y=2026",
        image: "assets/achievements/healthinf-banner.png",
        imageStyle: "banner" as const,
      },
      {
        label: { en: "Industry · Japan Preliminary", ja: "産業 日本予選" },
        title: { en: "iCAN 2026 — Japan Preliminary", ja: "iCAN 2026 日本予選" },
        place: {
          en: "Tohoku University, Japan · 26 April 2026",
          ja: "東北大学 2026 年 4 月 26 日",
        },
        body: {
          en: "Presented the system at the International Contest of Innovation.",
          ja: "International Contest of Innovation にてシステムを発表。",
        },
        url: "https://www.mu-sic.tohoku.ac.jp/ican/ican2026/summary.html",
        image: "assets/achievements/ican-logo.jpg",
        imageStyle: "logo" as const,
      },
      {
        label: { en: "Industry · 2nd Place", ja: "産業 第2位" },
        title: { en: "iCAN 2026 — 2nd place, Japan Preliminary", ja: "iCAN 2026 日本予選 第2位" },
        place: {
          en: "Tohoku University, Japan · 26 April 2026",
          ja: "東北大学 2026 年 4 月 26 日",
        },
        body: {
          en: "Awarded 2nd place at the Japan Preliminary. Advancing to the iCAN international finals.",
          ja: "日本予選で第2位を受賞。iCAN 国際決勝大会に進出。",
        },
        url: "https://youtu.be/U9No2XLw9bI",
        image: "assets/achievements/ican-winning-jp.jpg",
        imageStyle: "photo" as const,
      },
      {
        label: { en: "Industry · International Final", ja: "産業 国際決勝" },
        title: { en: "iCAN 2026 — international final", ja: "iCAN 2026 国際決勝大会" },
        place: {
          en: "Hosted under ELEKTRONIKA · venue to be announced",
          ja: "ELEKTRONIKA にて開催 会場は追って発表",
        },
        body: {
          en: "Qualified for the iCAN international final.",
          ja: "iCAN 国際決勝大会への出場が決定。",
        },
        url: "https://www.mu-sic.tohoku.ac.jp/ican/ican2026/summary.html",
        image: "assets/achievements/ican-logo.jpg",
        imageStyle: "logo" as const,
      },
      {
        label: { en: "Academic · Accepted", ja: "学術 採択" },
        title: { en: "UbiComp/ISWC 2026 — Student Challenge accepted", ja: "UbiComp/ISWC 2026 スチューデントチャレンジ採択" },
        place: {
          en: "Shanghai, China · 11–15 October 2026",
          ja: "中国・上海 2026 年 10 月 11–15 日",
        },
        body: {
          en: "Accepted to the Student Challenge track of ACM UbiComp/ISWC 2026.",
          ja: "ACM UbiComp/ISWC 2026 スチューデントチャレンジに採択。",
        },
        url: "https://www.ubicomp.org/ubicomp-iswc-2026/student-challenge-2026/",
        image: "assets/achievements/ubicomp-2026-logo.png",
        imageStyle: "banner" as const,
      },
      {
        label: { en: "Academic · Award", ja: "学術 受賞" },
        title: { en: "CUHK-X 2026 — award received", ja: "CUHK-X 2026 受賞" },
        place: {
          en: "UbiComp/ISWC 2026 · Shanghai, China · October 2026",
          ja: "UbiComp/ISWC 2026・中国・上海 2026 年 10 月",
        },
        body: {
          en: "Received an award at the CUHK-X Multimodal Human Activity Challenge (Small Model Track), organised by the AIoT Lab at The Chinese University of Hong Kong.",
          ja: "香港中文大学 AIoT Lab 主催の CUHK-X Multimodal Human Activity Challenge（Small Model Track）で受賞。",
        },
        url: "https://www.ubicomp.org/ubicomp-iswc-2026/cuhk-x-competition/",
        image: "assets/achievements/ubicomp-2026-logo.png",
        imageStyle: "banner" as const,
      },
      {
        label: { en: "Academic · Accepted", ja: "学術 採択" },
        title: { en: "IEEE GCCE 2026 — accepted", ja: "IEEE GCCE 2026 採択" },
        place: {
          en: "Kobe International Conference Center, Japan · 26–29 October 2026",
          ja: "神戸国際会議場 2026 年 10 月 26–29 日",
        },
        body: {
          en: "Accepted to the IEEE Global Conference on Consumer Electronics.",
          ja: "IEEE Global Conference on Consumer Electronics に採択。",
        },
        url: "https://www.ieee-gcce.org/2026/",
        image: "assets/achievements/gcce-2026-banner.png",
        imageStyle: "banner" as const,
      },
    ],
  },
  resources: {
    kicker: { en: "Resources", ja: "資料" },
    heading: { en: "Watch the talks", ja: "発表動画を見る" },
    intro: {
      en: "Two short talks covering the problem, the system, and the clinical logic behind it.",
      ja: "問題、システム、そして背景にある医学的ロジックを2本の短い発表で解説。",
    },
    // Shown in the China version instead of a video until its Bilibili id is set.
    chinaSoon: { en: "Video on Bilibili coming soon", ja: "Bilibili 版の動画は近日公開" },
    // id = YouTube (international version); bilibiliId = BV id (China version).
    videos: [
      {
        id: "t1nbr8O1m8s",
        bilibiliId: "BV1P6aR6jEfr" as string | null, // Bilibili: "Thermal Guardian | HEALTHINF 2026"
        title: "Thermal Guardian — conference pitch",
        caption: {
          en: "Conference pitch · the full system, explained in under a few minutes.",
          ja: "学会発表 システムの全体像を数分で説明。",
        },
      },
      {
        id: "U9No2XLw9bI",
        bilibiliId: "BV1s6aR6jEGZ" as string | null, // Bilibili: "Thermal Guardian | iCAN'26 Japan Preliminary"
        title: "Thermal Guardian — iCAN 2026 presentation",
        caption: {
          en: "iCAN 2026 Japan Preliminary presentation · awarded 2nd place.",
          ja: "iCAN 2026 日本予選プレゼンテーション 第2位受賞。",
        },
      },
    ],
  },
  team: {
    kicker: { en: "Team", ja: "チーム" },
    heading: { en: "The people behind Thermal Guardian", ja: "サーマルガーディアンを支えるチーム" },
    members: [
      { name: "Joseph Arthur Koo", image: "assets/team/joseph.jpg" },
      { name: "Ken Argani Toendan", image: "assets/team/ken.jpg" },
      { name: "Ethan Taku Shimada", image: "assets/team/shimada.jpg" },
      { name: "A K M Akaiduzzaman", image: "assets/team/arthur.jpg" },
      { name: "Kawai Rostum", image: null },
    ] as { name: string | null; image: string | null }[],
    placeholderName: { en: "New member", ja: "新メンバー" },
    placeholderNote: { en: "Profile coming soon", ja: "プロフィール準備中" },
  },
  contact: {
    kicker: { en: "Contact", ja: "お問い合わせ" },
    heading: { en: "Talk to us", ja: "ご連絡ください" },
    intro: {
      en: "Investors, partners, and press — we welcome briefings, collaboration proposals, and clinical-partner introductions. We typically reply within two working days.",
      ja: "投資家、パートナー、報道関係者へ — 資料請求、協業のご提案、臨床パートナーのご紹介を歓迎します。通常 2 営業日以内にご返信いたします。",
    },
    email: "kuas.thermalguardian@gmail.com",
    basedInLabel: { en: "Based in", ja: "拠点" },
    basedInLocation: { en: "Kyoto, Japan · KUAS · ubicomp lab", ja: "京都、日本 KUAS ubicomp lab" },
  },
  footer: {
    developedAt: { en: "Developed at", ja: "開発元" },
    labName: { en: "Ubicomp Lab", ja: "Ubicomp Lab" },
    labLocation: { en: "Kyoto, Japan", ja: "京都、日本" },
    legal: {
      en: "© 2026 Thermal Guardian · All rights reserved.",
      ja: "© 2026 サーマルガーディアン All rights reserved.",
    },
  },
} as const;

export function t(text: BiText, lang: Lang): string {
  return text[lang];
}
