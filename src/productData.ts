export type ProductContent = {
  id: string;
  label: string;
  tagline: string;
  intro: string;
  sections: { heading: string; body?: string; bullets?: string[] }[];
  chips?: { title: string; items: string[] }[];
};

export const productContent: ProductContent[] = [
  {
    id: "mutual-fund",
    label: "Mutual Funds",
    tagline: "Professionally managed, diversified investing",
    intro:
      "A mutual fund is a trust that pools money from many investors sharing a common objective, then invests it across equities, bonds, money-market instruments and other securities. Each investor holds units representing a share of the fund, and gains are distributed proportionately based on the scheme's Net Asset Value (NAV). It is one of the most accessible ways for everyday investors to own a diversified, professionally managed portfolio at low cost.",
    sections: [
      {
        heading: "Regulated & monitored",
        body: "Mutual funds in India are regulated by SEBI, which works to protect investors' interests. AMFI represents the industry alongside the RBI, SEBI and the finance ministry, spreading awareness and conducting investor-education workshops.",
      },
      {
        heading: "Why invest in mutual funds?",
        body: "As interest rates on savings accounts and fixed deposits keep falling, mutual funds remain a strong choice for long-term wealth creation and beating inflation.",
        bullets: [
          "Easy to understand — no economics or market expertise required",
          "Easy to buy and get started",
          "Broad market exposure and instant diversification from a single fund",
          "Available across many categories and asset classes (stocks, bonds, cash)",
          "Low minimums — most funds start at just Rs. 500",
          "Often lower management cost than a self-built portfolio",
          "A team of professionals researches investments for you",
          "Flexible: SIP, SWP, lump-sum and more",
        ],
      },
      {
        heading: "Tax benefit",
        body: "ELSS funds qualify for a deduction of up to Rs. 1.5 lakh under Section 80C of the Income Tax Act, helping you save tax while building wealth.",
      },
    ],
    chips: [
      { title: "By structure", items: ["Open-ended", "Close-ended", "Interval funds"] },
      {
        title: "By objective",
        items: ["Growth", "Dividend", "Balanced", "Hybrid", "Value", "Debt", "Index", "Gilt"],
      },
      {
        title: "Others",
        items: ["Tax-saving (ELSS)", "Special funds", "ETFs", "Fund of Funds", "Thematic"],
      },
    ],
  },
  {
    id: "insurance",
    label: "Insurance",
    tagline: "Protection for you and your family",
    intro:
      "Insurance is a legal agreement between an insurer and an individual. In return for a premium, the insurance company promises to cover the insured's losses if an insured contingency — such as death or damage to property — occurs. Because such events are uncertain, insurance offers financial security against life's unexpected turns.",
    sections: [
      {
        heading: "Life insurance",
        body: "Life insurance secures your dependents financially in the event of your untimely demise. It is especially important if you are the sole breadwinner or your family relies heavily on your income.",
      },
      {
        heading: "Health insurance",
        body: "Health insurance covers medical costs for expensive treatments. Different policies protect against a wide range of diseases and ailments, shielding your savings from medical emergencies.",
      },
      {
        heading: "Car insurance",
        body: "Car insurance protects you against accidents and, with some policies, damage from natural calamities such as floods or earthquakes. It also covers third-party liability for damage to other vehicles.",
      },
    ],
  },
  {
    id: "nps",
    label: "NPS",
    tagline: "A voluntary, long-term retirement plan",
    intro:
      "The National Pension Scheme (NPS) is a voluntary, long-term retirement investment plan regulated by the Pension Fund Regulatory and Development Authority (PFRDA) and the Central Government. It encourages regular contributions to a pension account during your working years. After retirement you can withdraw part of the corpus, while the balance funds a monthly pension. Originally for Central Government employees, NPS is now open to all Indian citizens on a voluntary basis.",
    sections: [
      {
        heading: "Tax efficiency",
        body: "You can claim a deduction of up to Rs. 1.5 lakh for NPS contributions. Section 80CCD(1) covers your own contribution (part of Section 80C) — up to 10% of salary for the salaried, or 20% of gross income for the self-employed. Section 80CCD(2) covers the employer's contribution, over and above Section 80C (not available to self-employed taxpayers).",
      },
      {
        heading: "Withdrawal rules after 60",
        body: "You cannot withdraw the entire corpus at retirement. At least 40% must be used to purchase an annuity from a PFRDA-registered insurer to provide a regular pension. As per the latest government update, the remaining withdrawal corpus is exempt from tax.",
      },
    ],
  },
  {
    id: "p2p",
    label: "P2P Lending",
    tagline: "Fixed-income returns through peer lending",
    intro:
      "Peer-to-peer lending platforms let you invest in high-quality retail loans and earn attractive fixed-income style returns. Our partner LiquiLoans has maintained a 100% success rate since inception in meeting indicated yields of up to 9.35% XIRR.",
    sections: [
      {
        heading: "Track record",
        body: "Total disbursals of Rs. 908+ Crore, gross NPA of just 0.71%, 273,000+ borrowers, 20,900+ lenders, and an indicative gross yield to investors of up to 9.35% XIRR.",
      },
      {
        heading: "Prime retail loans",
        body: "Invest in high-quality retail loans — largely zero-cost EMI loans across healthcare, up-skilling education and home-decor segments — extended to creditworthy borrowers.",
      },
      {
        heading: "RBI regulated & monitored",
        body: "Funds flow only through an escrow bank and are managed by an independent trustee, adding a strong layer of oversight.",
      },
      {
        heading: "100% alignment of interest",
        body: "The platform earns a fee only when your portfolio return exceeds the indicative yield. If returns fall short, the fee is zero — creating a strong incentive to recover every EMI.",
      },
      {
        heading: "Borrower profile & payouts",
        bullets: [
          "Largely salaried individuals with high credit scores (avg. 700+)",
          "Based in Tier I & Tier II cities",
          "Choice of monthly interest payout or cumulative payout",
        ],
      },
    ],
  },
  {
    id: "invoice-discounting",
    label: "Invoice Discounting",
    tagline: "Short-tenure, asset-backed fixed income",
    intro:
      "Invoice discounting lets you invest in the unpaid invoices of established businesses. Companies raise short-term working capital by selling their receivables at a small discount, and you earn the difference when the invoice is paid by the buyer. It is a short-tenure, asset-backed avenue that can offer attractive returns with relatively low correlation to equity markets.",
    sections: [
      {
        heading: "How it works",
        body: "A business with a confirmed invoice from a creditworthy buyer needs cash before the payment is due. You fund that invoice today at a discount; when the buyer settles it on the due date, you receive the full amount — the gap is your return.",
      },
      {
        heading: "Why investors consider it",
        bullets: [
          "Short investment horizons — typically 30 to 90 days",
          "Backed by real invoices from vetted, established companies",
          "Attractive, predictable yields on completed deals",
          "Diversifies away from purely market-linked instruments",
          "Reinvest as deals mature to keep money working",
        ],
      },
      {
        heading: "Things to keep in mind",
        body: "Returns depend on the buyer paying on time, so credit quality and diligence matter. We partner with curated platforms that assess borrowers and structure deals carefully, but as with any investment, returns are not guaranteed and are subject to counterparty and default risk.",
      },
    ],
  },
  {
    id: "other-services",
    label: "Other Services",
    tagline: "Advanced products for active investors",
    intro:
      "Beyond funds and insurance, we offer a range of specialised investment services for traders and high-net-worth investors — from equity, currency and commodity trading to professionally managed portfolios and alternative investment funds.",
    sections: [
      {
        heading: "Trading & investment calls",
        body: "Trade and invest across Equity, Currency and Commodity markets with research-backed guidance.",
        bullets: [
          "Value investment calls",
          "Tech positional calls",
          "Intraday calls",
          "Pivot & momentum trader calls",
          "BTST / STBT calls",
        ],
      },
      {
        heading: "Intelligent Advisory Portfolio (IAP)",
        body: "A diverse range of pre-packaged equity products for traders and investors who want market participation without the time to manage a portfolio.",
        bullets: [
          "Guided advisory by RIAs",
          "Personalized insights",
          "Regular monitoring",
          "Time saving & money management",
          "Active participation",
        ],
      },
      {
        heading: "Portfolio Management Service (PMS)",
        body: "A professional service where skilled portfolio managers and market experts manage your equity portfolio with a dedicated research team — a customised avenue for High and Ultra-High Net Worth clients.",
      },
      {
        heading: "Alternative Investment Fund (AIF)",
        body: "We manage fixed-income AIFs running highly diversified credit portfolios that connect global and domestic capital with promising enterprises powering India's growth, employment and innovation.",
      },
    ],
  },
];
