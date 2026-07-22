export const features = [
  {
    title: "Zero transaction fee",
    desc: "Invest without paying us a rupee in commission. Direct plans, transparent pricing.",
    icon: "wallet",
  },
  {
    title: "Tailor-made portfolio",
    desc: "Every portfolio is hand-crafted around your risk appetite, horizon and goals.",
    icon: "sliders",
  },
  {
    title: "Goal based investment",
    desc: "House, education, wedding or that dream trip — we reverse-engineer the plan.",
    icon: "target",
  },
  {
    title: "All investment under one roof",
    desc: "Mutual funds, insurance, NPS, P2P and more — managed from a single dashboard.",
    icon: "layers",
  },
  {
    title: "Starts from Rs. 500",
    desc: "Great investing shouldn't need deep pockets. Begin your SIP with just Rs. 500.",
    icon: "coins",
  },
  {
    title: "Financial planning",
    desc: "Cash-flow, tax, emergency fund and beyond — a complete map of your money.",
    icon: "compass",
  },
  {
    title: "Retirement planning",
    desc: "Build a corpus that lets you retire on your terms, not your employer's.",
    icon: "sunset",
  },
  {
    title: "Superior risk-adjusted return",
    desc: "We optimise for return per unit of risk, not just headline numbers.",
    icon: "trending",
  },
];

export type Logo = { name: string; src?: string; bg?: string };

const mf = "/partners/mf/";
const ins = "/partners/ins/";
const health = "/partners/health/";
const p2p = "/partners/p2p/";

export type PartnerGroup = {
  label: string;
  accent: string;
  blurb: string;
  logos: Logo[];
};

export const partnerGroups: PartnerGroup[] = [
  {
    label: "Mutual Funds",
    accent: "#1f7a5a",
    blurb: "Access India's leading asset management companies — 38 fund houses, one platform.",
    logos: [
      { name: "Axis Mutual Fund", src: mf + "axis_logo.svg", bg: "#b5245d" },
      { name: "SBI Mutual Fund", src: mf + "sbi-mf-logo.png" },
      { name: "ICICI Prudential", src: mf + "icici-logo.png" },
      { name: "Kotak Mahindra", src: mf + "KotakLogo.svg", bg: "#da251c" },
      { name: "Tata Mutual Fund", src: mf + "tata-mf-logo.png" },
      { name: "Canara Robeco", src: mf + "Canara-Robeco-Logo.svg" },
      { name: "HDFC Mutual Fund", src: mf + "hdfc_logo.svg" },
      { name: "Parag Parikh", src: mf + "parag-parikh-logo.png" },
      { name: "PGIM India", src: mf + "pgim-logo.svg" },
      { name: "Franklin Templeton", src: mf + "franklin-templation-investment_logo.webp" },
      { name: "Nippon India", src: mf + "reliance-nippon-mutual-fund.png" },
      { name: "UTI Mutual Fund", src: mf + "uti_logo.png" },
      { name: "Aditya Birla Capital", src: mf + "aditya-birla-capital-logo.png", bg: "#c7222a" },
      { name: "Mirae Asset", src: mf + "mirae-asset-mutual-fund-logo.jpg" },
      { name: "Invesco", src: mf + "invesco_mf_logo.jpg" },
      { name: "HSBC Mutual Fund", src: mf + "hsbc-logo.svg" },
      { name: "LIC Mutual Fund", src: mf + "LIC-Logo.png" },
      { name: "Edelweiss", src: mf + "edelweiss-logo.png", bg: "#2857a4" },
      { name: "Motilal Oswal AMC", src: mf + "motilal-oswal-amc-logo.png" },
      { name: "IDBI Mutual Fund", src: mf + "IDBI-MF-Logo.jpg" },
      { name: "DSP", src: mf + "dsp-logo.png" },
      { name: "Union Mutual Fund", src: mf + "Union-MF-Logo.jpg" },
      { name: "Bank of India", src: mf + "boi-mf-logo.png", bg: "#1f7ec4" },
      { name: "Baroda BNP Paribas", src: mf + "baroda-bnp-logo.jpg" },
      { name: "Quant Mutual Fund", src: mf + "quant-logo.png" },
      { name: "Principal", src: mf + "principal-logo.png" },
      { name: "ITI Mutual Fund", src: mf + "iti-mf-logo.png" },
      { name: "Navi", src: mf + "navi-logo.svg" },
      { name: "Mahindra Manulife", src: mf + "mahindra-mf-logo.jpg" },
      { name: "Trust Mutual Fund", src: mf + "trust-logo.png" },
      { name: "Samco", src: mf + "samco-logo.png" },
      { name: "Sundaram", src: mf + "SundaramMutual-Logo.png" },
      { name: "Bajaj Finserv AMC", src: mf + "Bajaj_Asset_Management_Logo.png" },
      { name: "360 ONE Asset", src: mf + "360_ONE_Asset_logo.svg" },
      { name: "Groww Mutual Fund", src: mf + "groww-mutual-fund-logo.svg" },
      { name: "Helios", src: mf + "Helios-Mutual-fund-Logo.png" },
      { name: "The Wealth Company", src: mf + "the-wealth-company-mf-logo.svg" },
      { name: "Abakkus", src: mf + "abakkus-logo.svg" },
      { name: "Quantum Mutual Fund", src: mf + "quantum-logo.jpg", bg: "#1a5bb0" },
      { name: "WhiteOak Capital", src: mf + "whiteoak-logo.jpg" },
      { name: "Bandhan Mutual Fund", src: mf + "bandhan-logo.jpg" },
    ],
  },
  {
    label: "Life Insurance",
    accent: "#16523d",
    blurb: "Secure your family's future with trusted life insurance providers.",
    logos: [
      { name: "Bajaj Allianz Life", src: ins + "bajaj-logo.png", bg: "#0071bb" },
      { name: "ICICI Prudential Life", src: ins + "icici-prudential-life-insurance-logo.png" },
      { name: "HDFC Life", src: ins + "HDFC_life_insurance_logo.svg" },
      { name: "Tata AIA Life", src: ins + "tata-aia-life-insurance-logo.png" },
      { name: "Edelweiss Tokio Life", src: ins + "edelweiss-tokio-life-insurance-logo.webp" },
    ],
  },
  {
    label: "Health Insurance",
    accent: "#c8a24a",
    blurb: "Comprehensive health cover from specialised health insurers.",
    logos: [
      { name: "Star Health", src: health + "start-health-ins-logo.png" },
      { name: "Galaxy Health", src: health + "galaxy-health-ins-logo.webp" },
    ],
  },
  {
    label: "NPS",
    accent: "#1f7a5a",
    blurb: "Build a tax-efficient retirement corpus with the National Pension System.",
    logos: [{ name: "ICICI Prudential Pension", src: "/partners/nps/icici-prud-logo.png" }],
  },
  {
    label: "P2P Lending",
    accent: "#16523d",
    blurb: "Earn attractive fixed returns through curated peer-to-peer lending platforms.",
    logos: [
      { name: "PerAnnum", src: p2p + "per-annum-logo.svg", bg: "#ffffff" },
    ],
  },
  {
    label: "Specialized Investment Funds",
    accent: "#1f7a5a",
    blurb:
      "Access SEBI's new Specialized Investment Fund (SIF) category — advanced strategies that sit between mutual funds and PMS.",
    logos: [
      { name: "APEX", src: "/partners/sif/apex.jpg" },
      { name: "INFINITY", src: "/partners/sif/infinity.jpg" },
      { name: "DIVINITY", src: "/partners/sif/diviniti.jpg", bg: "#000000" },
      { name: "ALTIVA", src: "/partners/sif/altiva.png" },
      { name: "ARTHYA", src: "/partners/sif/arthaya.jpg" },
      { name: "ARUDHA", src: "/partners/sif/arudha.jpg", bg: "#1b3b5f" },
      { name: "DYNA", src: "/partners/sif/dyna.png" },
      { name: "ISIF", src: "/partners/sif/isif.jpg", bg: "#f7941e" },
      { name: "MAGNUM", src: "/partners/sif/magnum.jpg", bg: "#000000" },
      { name: "PLATINUM", src: "/partners/sif/platinum.png" },
      { name: "QSIF", src: "/partners/sif/qsif.png" },
      { name: "REDHEX", src: "/partners/sif/redhex.jpg", bg: "#eaecf6" },
      { name: "SAPPHIRE", src: "/partners/sif/sapphire.png" },
      { name: "SUMMIT", src: "/partners/sif/summit.jpg", bg: "#dfeaf7" },
      { name: "TITANUM", src: "/partners/sif/titanium.jpg", bg: "#000000" },
      { name: "WSIF", src: "/partners/sif/wsif.png" },
    ],
  },
  {
    label: "Business Associate",
    accent: "#16523d",
    blurb: "Strategic partnerships that expand what we can offer you.",
    logos: [{ name: "Motilal Oswal", src: "/partners/ba/motilal-logo.jpeg", bg: "#feae17" }],
  },
  {
    label: "Invoice Discounting",
    accent: "#1f7a5a",
    blurb: "Short-tenure, asset-backed investments via invoice discounting.",
    logos: [{ name: "Amplio", src: "/partners/invd/amplio-logo.png" }],
  },
];

export const certifications: Logo[] = [
  { name: "IRDA", src: "/partners/cert/irda_logo.png" },
  { name: "AMFI", src: "/partners/cert/amfi_logo.png" },
];

export const appFeatures = [
  "Buy, sell & switch schemes instantly",
  "Track and manage all your funds",
  "100% paperless transactions",
  "Invest anytime, anywhere",
];

export const stats = [
  { value: 6, prefix: "", suffix: "+", label: "Years of experience" },
  { value: 200, prefix: "", suffix: "+", label: "Client relationships" },
  { value: 50, prefix: "", suffix: "+", label: "Families" },
  { value: 45, prefix: "₹", suffix: " Cr+", label: "Assets advised" },
  { value: 6000, prefix: "", suffix: "+", label: "Investment accounts" },
];

export const quickStats = [
  { value: 500, prefix: "Rs.", suffix: "", label: "Minimum to start" },
  { value: 0, prefix: "", suffix: "%", label: "Transaction fee" },
  { value: 50, prefix: "", suffix: "+", label: "Trusted partners" },
  { value: 8, prefix: "", suffix: "", label: "Product categories" },
];
