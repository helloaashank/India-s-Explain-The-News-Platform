export type Article = {
  slug: string;
  category: string;
  headline: string;
  summary: string;
  published: string;
  publishedDate: string;
  readTime: string;
  trustScore: number;
  sourceCount: number;
  language: string;
  visual: "economy" | "policy" | "tech" | "sports" | "world" | "education";
  explainer: {
    happened: string;
    matters: string;
    affected: string;
    next: string;
  };
  timeline: string[];
  sources: string[];
};

export const languages = [
  "Hindi",
  "English",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Bengali",
  "Marathi"
];

export const chips = [
  "UPSC",
  "IPL",
  "Stock Market",
  "Government Schemes",
  "Technology",
  "International Affairs",
  "Education",
  "Jobs"
];

export const articles: Article[] = [
  {
    slug: "petrol-prices-increased-this-week",
    category: "Economy",
    headline: "Why Petrol Prices Increased This Week",
    summary: "Crude oil costs, taxes and rupee movement pushed pump prices higher in several cities.",
    published: "8 min ago",
    publishedDate: "18 June 2026",
    readTime: "3 min read",
    trustScore: 94,
    sourceCount: 7,
    language: "English",
    visual: "economy",
    explainer: {
      happened: "Petrol prices moved up after global crude benchmarks rose and the rupee weakened slightly against the dollar.",
      matters: "Fuel prices influence transport costs, food prices and household budgets, so even small changes are noticed widely.",
      affected: "Daily commuters, logistics companies, farmers using diesel equipment and small businesses with delivery costs are affected first.",
      next: "Oil marketing companies will keep tracking crude prices, currency rates and tax decisions before the next revision."
    },
    timeline: [
      "Global crude prices rose after supply concerns.",
      "Currency pressure made imports costlier.",
      "Retail prices changed across major metros.",
      "Analysts expect volatility for the next few days."
    ],
    sources: ["Reuters", "The Hindu", "Times of India", "Government Press Releases", "BBC", "Aaj Tak", "Al Jazeera"]
  },
  {
    slug: "new-digital-privacy-rules",
    category: "Technology",
    headline: "India's New Digital Privacy Rules Explained",
    summary: "Companies may need clearer consent, faster breach reporting and simpler data deletion controls.",
    published: "22 min ago",
    publishedDate: "18 June 2026",
    readTime: "4 min read",
    trustScore: 91,
    sourceCount: 6,
    language: "English",
    visual: "tech",
    explainer: {
      happened: "The government released updated privacy compliance guidance for digital services handling user data.",
      matters: "The rules could change how apps collect, store and share personal information in India.",
      affected: "Internet users, startups, large platforms, banks, schools and health apps may all need to adjust.",
      next: "Companies are expected to review consent flows and prepare compliance reports before enforcement begins."
    },
    timeline: [
      "Draft guidance was opened for feedback.",
      "Industry groups requested more clarity.",
      "Updated rules were published.",
      "Compliance teams began reviewing user data flows."
    ],
    sources: ["Government Press Releases", "The Hindu", "Times of India", "Reuters", "BBC", "Aaj Tak"]
  },
  {
    slug: "rbi-loan-policy-impact",
    category: "Business",
    headline: "How RBI's Latest Signal Could Affect Loans",
    summary: "Borrowers may see banks adjust lending rates depending on inflation and liquidity trends.",
    published: "41 min ago",
    publishedDate: "18 June 2026",
    readTime: "3 min read",
    trustScore: 92,
    sourceCount: 8,
    language: "English",
    visual: "policy",
    explainer: {
      happened: "The central bank signalled a cautious stance while monitoring inflation and credit growth.",
      matters: "RBI signals influence home loans, business borrowing, savings rates and investor expectations.",
      affected: "Homebuyers, MSMEs, banks, depositors and market investors will watch rate decisions closely.",
      next: "The next inflation print and credit data will guide how banks price new loans."
    },
    timeline: [
      "Inflation stayed within the target band.",
      "Loan growth remained strong.",
      "RBI used cautious language.",
      "Banks began reviewing deposit and lending rates."
    ],
    sources: ["Reuters", "The Hindu", "Times of India", "Government Press Releases", "BBC", "Al Jazeera", "Aaj Tak", "Moneycontrol"]
  },
  {
    slug: "ipl-playoff-race-simple",
    category: "Sports",
    headline: "IPL Playoff Race: What Each Team Needs",
    summary: "Net run rate, remaining fixtures and head-to-head results are shaping the final week.",
    published: "1 hr ago",
    publishedDate: "18 June 2026",
    readTime: "2 min read",
    trustScore: 89,
    sourceCount: 5,
    language: "English",
    visual: "sports",
    explainer: {
      happened: "Recent results tightened the points table and left multiple teams competing for the final playoff spots.",
      matters: "A single match can change qualification chances because teams are separated by net run rate.",
      affected: "Fans, franchises, broadcasters and players fighting for selection momentum are affected.",
      next: "The next two matches will clarify whether net run rate becomes the deciding factor."
    },
    timeline: [
      "Two top teams secured strong positions.",
      "Mid-table teams exchanged wins and losses.",
      "Net run rate became a major variable.",
      "Remaining fixtures now carry qualification pressure."
    ],
    sources: ["ESPNcricinfo", "Times of India", "Aaj Tak", "The Hindu", "BBC"]
  },
  {
    slug: "education-policy-students",
    category: "Education",
    headline: "What the New Education Update Means for Students",
    summary: "Assessment, skill credits and digital records could change how students plan courses.",
    published: "2 hrs ago",
    publishedDate: "18 June 2026",
    readTime: "4 min read",
    trustScore: 90,
    sourceCount: 6,
    language: "English",
    visual: "education",
    explainer: {
      happened: "Education authorities announced changes around academic credits, digital records and skill-linked learning.",
      matters: "Students may get more flexibility, but colleges must implement systems consistently.",
      affected: "School students, college applicants, teachers, parents and training institutes are affected.",
      next: "Institutions will issue implementation timelines and clarify how credits transfer."
    },
    timeline: [
      "Policy recommendations were reviewed.",
      "Updated guidance was announced.",
      "Universities began internal mapping.",
      "Students await exact rollout dates."
    ],
    sources: ["Government Press Releases", "The Hindu", "Times of India", "Aaj Tak", "BBC", "Indian Express"]
  },
  {
    slug: "global-trade-india-impact",
    category: "World",
    headline: "Why Global Trade Tensions Matter for India",
    summary: "Tariffs, shipping delays and currency movement can affect exports, imports and jobs.",
    published: "3 hrs ago",
    publishedDate: "18 June 2026",
    readTime: "5 min read",
    trustScore: 88,
    sourceCount: 9,
    language: "English",
    visual: "world",
    explainer: {
      happened: "Trade tensions between major economies increased uncertainty around tariffs and supply chains.",
      matters: "India's exporters and importers depend on stable demand, shipping costs and currency movement.",
      affected: "Exporters, manufacturers, port workers, consumers and investors could feel the impact.",
      next: "Negotiations, tariff announcements and shipping data will decide the near-term effect."
    },
    timeline: [
      "Major economies exchanged tariff warnings.",
      "Commodity markets reacted cautiously.",
      "Exporters flagged demand uncertainty.",
      "Policy teams started assessing sector exposure."
    ],
    sources: ["Reuters", "BBC", "Al Jazeera", "The Hindu", "Times of India", "Government Press Releases", "Bloomberg", "Aaj Tak", "Indian Express"]
  }
];

export const relatedExplainers = [
  "Why RBI decisions affect loans",
  "What inflation means",
  "How fuel pricing works",
  "How net run rate changes IPL qualification"
];

export const schemes = [
  "PM Awas Yojana",
  "Ayushman Bharat",
  "PM Kisan",
  "Startup India",
  "Skill India"
];
