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
    achievements: { en: "Achievements", ja: "実績" },
    team: { en: "Team", ja: "チーム" },
    contact: { en: "Contact", ja: "お問い合わせ" },
    openMenu: { en: "Open menu", ja: "メニューを開く" },
    closeMenu: { en: "Close menu", ja: "メニューを閉じる" },
    language: { en: "Language", ja: "言語" },
    demo: { en: "Live demo", ja: "デモを見る" },
    menu: { en: "Menu", ja: "メニュー" },
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
      en: "Three pieces, one system — an upper-arm wearable (orange) plus two IoT nodes (white).",
      ja: "3つのピース、1つのシステム — 上腕ウェアラブル（オレンジ）と 2 つの IoT ノード（白）。",
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
    venue: {
      en: "UbiComp / ISWC 2026 Student Challenge · Shanghai, 11–15 October 2026",
      ja: "UbiComp / ISWC 2026 スチューデントチャレンジ・上海 2026 年 10 月 11–15 日",
    },
    title: {
      en: "Aegis: An On-Device Foundation Model Agent for Resolving Conflicting Sensor Evidence in Elderly Bathing",
      ja: "Aegis：高齢者の入浴における矛盾するセンサー情報を解決するオンデバイス基盤モデルエージェント",
    },
    pitch: {
      en: "Aegis can prioritise and explain an alarm, but never silence it.",
      ja: "Aegisはアラームの優先度を判断し、その理由を説明できるが、鳴り止ませることは決してない。",
    },
    authors: "A K M Akaiduzzaman, Ethan Taku Shimada, Joseph Arthur Koo, Ken Argani Toendan, Kawai Rostum, Zilu Liang",
    lab: {
      en: "Ubiquitous and Personal Computing Lab, Kyoto University of Advanced Science, Kyoto, Japan",
      ja: "Ubiquitous and Personal Computing Lab・京都先端科学大学（京都）",
    },
    problemHeading: { en: "The problem", ja: "問題" },
    problem: {
      en: 'Rule M-011 fires when the wearable reports "not worn" while the room still reads occupied for 5 s. A deliberate exit and a collapse produce the same conflict, so a real exit from the bathroom always becomes a false alarm.',
      ja: "ルール M-011 は、ウェアラブルが「未装着」を報告しているにもかかわらず、室内センサーが 5 秒間在室を示し続けると発動する。意図的な退出と昏倒は同じ矛盾を生むため、浴室からの実際の退出は常に誤報になってしまう。",
    },
    observationHeading: { en: "Key observation", ja: "重要な観察" },
    observation: {
      en: "Every genuine exit emptied the room for 10 to 23 s. No simulated collapse did.",
      ja: "実際の退出では、いずれも室内が 10〜23 秒間無人になった。模擬昏倒では一度もそうならなかった。",
    },
    observationNote: {
      en: "The discriminating evidence arrives only after the alarm, in how room occupancy evolves.",
      ja: "判別の手がかりとなる証拠はアラーム発生後にしか得られず、在室状況の推移にそれが表れる。",
    },
    architectureHeading: { en: "Safety-constrained agent", ja: "安全制約付きエージェント" },
    diagram: {
      wearable: { en: "Wearable / Not worn", ja: "ウェアラブル / 未装着" },
      wifiCsi: { en: "WiFi CSI / Occupied", ja: "WiFi CSI / 在室" },
      mmwave: { en: "mmWave radar / Occupied", ja: "mmWave レーダー / 在室" },
      ruleFires: { en: "Rule M-011 fires", ja: "ルール M-011 の発動" },
      originalPath: { en: "Original M-011 alarm path", ja: "元の M-011 アラーム経路" },
      neverBlocked: { en: "never blocked, delayed or suppressed", ja: "遮断・遅延・抑制されない" },
      caregiver: { en: "Caregiver", ja: "介護者" },
      sidecar: {
        en: "Aegis sidecar · advisory · on-device · Qwen2.5 3B",
        ja: "Aegis サイドカー・助言的・オンデバイス・Qwen2.5 3B",
      },
      evidenceBundle: { en: "EvidenceBundle / schema-validated states", ja: "EvidenceBundle / スキーマ検証済みの状態" },
      agentLoop: {
        en: "Agent loop / plan → act → observe, max 4 steps",
        ja: "エージェントループ / 計画 → 行動 → 観察、最大 4 ステップ",
      },
      safetyGate: { en: "Safety gate / deterministic, τ = 0.55", ja: "安全ゲート / 決定論的、τ = 0.55" },
      elevate: {
        en: "Elevate / everything else, incl. errors and timeouts",
        ja: "引き上げ / それ以外すべて（エラーやタイムアウトを含む）",
      },
      maintain: { en: "Maintain / only if exit-consistent and c ≥ τ", ja: "維持 / 退出と整合し、かつ c ≥ τ の場合のみ" },
    },
    invariant: {
      en: "Safety invariant: P(Aegis) ≥ P(M-011). Aegis may raise the alarm priority or leave it unchanged. No action lowers or silences it.",
      ja: "安全不変条件：P(Aegis) ≥ P(M-011)。Aegisはアラームの優先度を引き上げるか、変更せずそのまま保つかのいずれかしかできない。どの動作もそれを引き下げたり抑制したりすることはない。",
    },
    resultsHeading: { en: "Results", ja: "結果" },
    results: {
      headers: {
        method: { en: "Method", ja: "手法" },
        evidence: { en: "Evidence", ja: "エビデンス" },
        exitsFound: { en: "Exits found", ja: "退出検出" },
        falseEscalations: { en: "False escalations", ja: "誤エスカレーション" },
        missedEscalations: { en: "Missed escalations", ja: "エスカレーション漏れ" },
      },
      rows: [
        {
          method: { en: "Always-escalate", ja: "常時エスカレーション" },
          evidence: { en: "none", ja: "なし" },
          exits: "0/4",
          exitsShort: true,
          falseEsc: "4/4",
          falseEscShort: true,
          missedEsc: "0/13",
          missedEscShort: false,
          highlight: false,
        },
        {
          method: { en: "Dempster-Shafer fusion", ja: "Dempster-Shafer 融合" },
          evidence: { en: "+temporal", ja: "+時系列" },
          exits: "4/4",
          exitsShort: false,
          falseEsc: "0/4",
          falseEscShort: false,
          missedEsc: "1/13",
          missedEscShort: true,
          highlight: false,
        },
        {
          method: { en: "Hand-written policy", ja: "人手で設計したポリシー" },
          evidence: { en: "+temporal", ja: "+時系列" },
          exits: "4/4",
          exitsShort: false,
          falseEsc: "0/4",
          falseEscShort: false,
          missedEsc: "0/13",
          missedEscShort: false,
          highlight: false,
        },
        {
          method: { en: "Aegis 3B", ja: "Aegis 3B" },
          evidence: { en: "+temporal", ja: "+時系列" },
          exits: "4/4",
          exitsShort: false,
          falseEsc: "0/4",
          falseEscShort: false,
          missedEsc: "0/13",
          missedEscShort: false,
          highlight: true,
        },
      ] as {
        method: BiText;
        evidence: BiText;
        exits: string;
        exitsShort: boolean;
        falseEsc: string;
        falseEscShort: boolean;
        missedEsc: string;
        missedEscShort: boolean;
        highlight: boolean;
      }[],
    },
    tableCaption: {
      en: "Selected rows from the poster's Table 1 · 17 conflict windows: 4 exits, 3 simulated collapses, 10 indeterminate. Values short of the ideal are coloured.",
      ja: "ポスターの表1から抜粋・17件の競合ウィンドウ（退出4件、模擬昏倒3件、判定不能10件）。理想値に届かない値には色を付けている。",
    },
    summary: {
      en: "Aegis 3B with post-trigger evidence: 4/4 exits found, 0/4 false escalations and 0/13 missed escalations in all five runs.",
      ja: "トリガー後のエビデンスを用いたAegis 3Bは、5 回の実行すべてで退出検出4/4件、誤エスカレーション0/4件、エスカレーション漏れ0/13件だった。",
    },
    limitations: {
      en: "Pilot scale: three participants, 17 scripted windows, simulated collapses. Zero errors here do not estimate real-world or clinical reliability.",
      ja: "パイロット規模：参加者3名、台本に沿ったウィンドウ17件、模擬昏倒によるテスト。ここでのエラー0件は、実世界や臨床現場における信頼性を推定するものではない。",
    },
    videoId: null as string | null,
    videoSoon: { en: "Aegis video coming soon", ja: "Aegis の動画は近日公開" },
    citation: {
      en: "UbiComp Companion '26 · DOI 10.1145/3798063.3837317",
      ja: "UbiComp Companion '26・DOI 10.1145/3798063.3837317",
    },
    paperUrl: null as string | null,
    paperButton: { en: "Read the paper", ja: "論文を読む" },
  },
  achievements: {
    kicker: { en: "Achievements", ja: "実績" },
    heading: { en: "HEALTHINF, iCAN, UbiComp and GCCE 2026", ja: "HEALTHINF・iCAN・UbiComp・GCCE 2026" },
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
    videos: [
      {
        id: "t1nbr8O1m8s",
        title: "Thermal Guardian — conference pitch",
        caption: {
          en: "Conference pitch · the full system, explained in under a few minutes.",
          ja: "学会発表 システムの全体像を数分で説明。",
        },
      },
      {
        id: "U9No2XLw9bI",
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
      { name: "Shimada Ethan Taku", image: "assets/team/shimada.jpg" },
      { name: "Akaiduzzaman A.K.M", image: "assets/team/arthur.jpg" },
    ],
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
