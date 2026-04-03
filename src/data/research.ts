import type {
  KeywordTarget,
  CompetitorGap,
  PlatformStrategy,
  ToolSetup,
  InfluencerTarget,
} from "./types";

// ============================================================
// KEYWORD TARGETS — From MERGED-RESEARCH-FINAL.md
// ============================================================

export const keywordTargets: KeywordTarget[] = [
  // Tier 1: Must-Win
  { keyword: "AI contract review software", volume: "15K+", competition: "Very High", angle: "Multi-agent, not single LLM", action: "Pillar blog + landing page", tier: 1 },
  { keyword: "AI contract redlining", volume: "9K+", competition: "Medium-High", angle: "Word-native, rulebook-driven", action: "Product page + blog", tier: 1 },
  { keyword: "on-premise contract AI / self-hosted", volume: "1-2K", competition: "LOW — BLUE OCEAN", angle: "We're literally the ONLY one", action: "Landing page (blue ocean)", tier: 1 },
  { keyword: "multi-agent AI legal", volume: "3-4K", competition: "Medium", angle: "Category we can own", action: "Technical blog", tier: 1 },
  { keyword: "data sovereignty legal AI", volume: "2-3K", competition: "Medium", angle: "Core differentiator", action: "Landing page", tier: 1 },
  { keyword: "best AI contract review tools 2026", volume: "3K+", competition: "High", angle: "Insert ourselves in listicle", action: "Comparison blog", tier: 1 },
  { keyword: "AI contract review for enterprise", volume: "2-3K", competition: "High", angle: "Cloud-deployed, data sovereignty", action: "Landing page", tier: 1 },
  { keyword: "contract review automation", volume: "6K+", competition: "Medium-High", angle: "30 hrs → 30 min proof", action: "Blog", tier: 1 },
  { keyword: "AI MSA review", volume: "2K+", competition: "Medium", angle: "Exact use case match", action: "Blog + FAQ", tier: 1 },
  // Tier 2: Comparison
  { keyword: "Paralegent vs LegalOn", volume: "New", competition: "None", angle: "Cloud vs SaaS", action: "Comparison page", tier: 2 },
  { keyword: "Paralegent vs Spellbook", volume: "New", competition: "None", angle: "Multi-agent vs single LLM", action: "Comparison page", tier: 2 },
  { keyword: "AI contract review vs manual review", volume: "Medium", competition: "Medium", angle: "ROI data", action: "Educational comparison", tier: 2 },
  { keyword: "SaaS contract AI vs on-premise", volume: "Low", competition: "LOW", angle: "We own this narrative", action: "Thought leadership", tier: 2 },
  { keyword: "ChatGPT for contract review", volume: "High", competition: "Medium", angle: "Why generic AI fails", action: "Educational blog", tier: 2 },
  { keyword: "LegalOn alternatives", volume: "Medium", competition: "Medium", angle: "Capture competitor traffic", action: "Listicle", tier: 2 },
  // Tier 3: Question keywords
  { keyword: "Can AI review contracts accurately?", volume: "High", competition: "Medium", angle: "Real numbers + confidence scoring", action: "Answer blog", tier: 3 },
  { keyword: "How does AI contract redlining work?", volume: "Medium", competition: "Low", angle: "Step-by-step with screenshots", action: "How-to blog", tier: 3 },
  { keyword: "Is AI contract review GDPR compliant?", volume: "Medium", competition: "Low", angle: "Data sovereignty = yes", action: "Trust blog", tier: 3 },
  { keyword: "How much does AI contract review cost?", volume: "Medium", competition: "Medium", angle: "One-time vs SaaS comparison", action: "ROI blog", tier: 3 },
  { keyword: "Can ChatGPT review contracts?", volume: "High", competition: "Medium", angle: "Why generic AI falls short", action: "Comparison blog", tier: 3 },
  { keyword: "What is a contract rulebook?", volume: "Low-Medium", competition: "Very Low", angle: "Own the term", action: "Definition blog", tier: 3 },
  { keyword: "Why do AI contract review pilots fail?", volume: "Medium", competition: "Low", angle: "95% fail — here's why", action: "Thought leadership", tier: 3 },
];

// ============================================================
// COMPETITOR GAPS — Where ALL competitors are weak
// ============================================================

export const competitorGaps: CompetitorGap[] = [
  { gap: "No one offers cloud-deployed / on-premise", why: "We're literally the only option. Every competitor is SaaS." },
  { gap: "No one talks about multi-agent orchestration", why: "We have 18 specialized domain analysts. Competitors use 1 generic LLM." },
  { gap: "No one shows rulebook depth", why: "80-150 terms with rationale, examples, confidence scoring — our IP." },
  { gap: "All are SaaS with vendor data control", why: "We offer data sovereignty. Customer data never leaves their environment." },
  { gap: "No one is LLM-agnostic", why: "We work with Azure OpenAI, Bedrock, Vertex AI — customer chooses." },
  { gap: "Generic risk classification", why: "We have GREEN/ORANGE/RED with rationale + confidence scoring." },
  { gap: "YouTube is wide open", why: "Harvey, Spellbook, LegalOn have minimal YouTube presence — first-mover opportunity." },
  { gap: "No one owns 'on-premise contract AI' keyword", why: "1-2K volume, LOW competition — blue ocean keyword we should own." },
];

// ============================================================
// PLATFORM STRATEGY — From PLATFORM-DEEP-DIVE.md
// ============================================================

export const platformStrategy: PlatformStrategy[] = [
  { platform: "LinkedIn (Founder Personal)", priority: "#1 MUST-DO", canBringClients: "YES — directly", weeklyHours: "8-10h", timeToResults: "2-4 months", action: "3-5 posts/week, 10-20 comments/day, Sales Navigator outreach. Carousels get 585% more engagement than text. Personal profiles get 561% more reach than company pages." },
  { platform: "Website (Conversion)", priority: "#2 MUST-DO", canBringClients: "YES — directly", weeklyHours: "5-8h", timeToResults: "1-2 months", action: "Demo page with calendar embed, chat widget, 5-6 field form, <5 min response time. Interactive demo = 2x conversion. Hub-and-spoke blog model." },
  { platform: "LinkedIn (Company + Ads)", priority: "#3 MUST-DO", canBringClients: "YES — directly", weeklyHours: "4-6h", timeToResults: "1-3 months", action: "Company page for credibility. LinkedIn Ads: $2-3K/month after 60-90 days organic. $125 CPL, 121% ROAS — only positive-ROAS B2B ad platform. 66:1 return at $60K deal size." },
  { platform: "YouTube", priority: "#4 HIGH VALUE", canBringClients: "YES — indirect", weeklyHours: "6-8h", timeToResults: "4-8 months", action: "1 video/week + 2-3 Shorts. Competitors aren't doing it — first-mover. 29% of enterprise buyers search YouTube before contacting sales. Product demos > explainers > comparisons." },
  { platform: "LinkedIn Newsletter", priority: "#5 HIGH VALUE", canBringClients: "YES — indirect", weeklyHours: "2-3h", timeToResults: "2-4 months", action: "'The Contract Intelligence Brief' — biweekly. 40-60% open rates vs 20% email. Triple notification system bypasses algorithm. Founder publishes personally, not company page." },
  { platform: "Reddit", priority: "#6 WORTH IT", canBringClients: "Trust-building", weeklyHours: "2-3h", timeToResults: "3-6 months", action: "r/legaltech, r/inhouselegal, r/artificial. Zero promotion — 80/20 rule. Build karma 4-6 weeks first. Harvey did AMA here. Reddit threads rank in Google → boosts SEO + AI citations." },
  { platform: "Medium", priority: "#7 WORTH IT", canBringClients: "Indirect (SEO)", weeklyHours: "1-2h", timeToResults: "2-4 months", action: "Republish every blog 1-2 weeks after original. Canonical URL to paralegent.com. DA 96 backlink. Submit to 'Towards AI' and 'The Startup' publications." },
  { platform: "Hacker News", priority: "#8 WORTH IT", canBringClients: "One-time spike", weeklyHours: "1-2h (one-time)", timeToResults: "Immediate", action: "'Show HN: 18 AI Agents That Review Contracts Inside Microsoft Word' — focus on TECHNICAL, not sales. Tell 'We built this because...' story. Plan for Month 4-6 when demo is polished. Can drive 5-15K visitors in 24 hours." },
  { platform: "Twitter/X", priority: "#9 LOW", canBringClients: "Minimal", weeklyHours: "1-2h", timeToResults: "6+ months", action: "12.73% of B2B leads vs LinkedIn's 80%. 0.69% conversion vs LinkedIn's 4.02%. Use for: legal tech news commentary, threads on insights, engage with Bob Ambrogi and legal tech journalists." },
  { platform: "Quora", priority: "#10 LOW", canBringClients: "Feeds AI engines", weeklyHours: "1h", timeToResults: "3-6 months", action: "2-3 answers/week on high-view questions. 'What is the best AI contract review tool?' feeds directly into ChatGPT/Gemini/Perplexity answers." },
  { platform: "Facebook", priority: "SKIP", canBringClients: "No", weeklyHours: "0", timeToResults: "N/A", action: "GCs don't research $60-80K software on Facebook. Only exception: retargeting ads later." },
  { platform: "Instagram", priority: "SKIP", canBringClients: "No", weeklyHours: "0", timeToResults: "N/A", action: "'If your average deal is above $5,000, use LinkedIn.' Your deal is $60-80K." },
  { platform: "TikTok", priority: "SKIP", canBringClients: "No", weeklyHours: "0", timeToResults: "N/A", action: "GCs are not evaluating $60-80K AI deployments from TikTok videos." },
  { platform: "Pinterest", priority: "SKIP", canBringClients: "No", weeklyHours: "0", timeToResults: "N/A", action: "No natural use case for enterprise legal tech." },
];

// ============================================================
// TOOLS & SETUP — Monthly costs from CUSTOMER-ACQUISITION-RESEARCH.md
// ============================================================

export const toolSetup: ToolSetup[] = [
  { tool: "Clay", cost: "$149-349/mo", purpose: "Lead enrichment, ICP list building, signal monitoring (funding, job changes, M&A)", owner: "Ali", week: 0 },
  { tool: "Instantly", cost: "$30-97/mo", purpose: "Cold email sequences, domain warming, A/B testing, analytics", owner: "Ali", week: 0 },
  { tool: "LinkedIn Sales Navigator", cost: "$99/mo", purpose: "312% ROI over 3 years. Lead lists, buying triggers, InMail. MUST-HAVE.", owner: "Ali", week: 0 },
  { tool: "Cold email domains (2-3)", cost: "$20-30/mo", purpose: "Separate domains for outreach (not main domain). Start warming 4-6 weeks before sending.", owner: "Ali", week: 0 },
  { tool: "Calendly / Cal.com", cost: "$0-12/mo", purpose: "Demo booking with auto-confirmation. One-click from any outreach touchpoint.", owner: "Ali", week: 1 },
  { tool: "Chat widget (Crisp/Intercom)", cost: "$50-100/mo", purpose: "2-3x higher conversion among engaged visitors. AI + human hybrid. High-intent pages only.", owner: "Ali", week: 3 },
  { tool: "Video editing (Descript/CapCut)", cost: "$30-50/mo", purpose: "Demo video editing, subtitles (85% watch muted), YouTube content", owner: "Asad", week: 1 },
  { tool: "Delaware LLC (one-time)", cost: "$500-1000", purpose: "US entity for US market sales. Stripe Atlas or registered agent.", owner: "Mudassir", week: 0 },
  { tool: "CLOC membership", cost: "$500/yr ($42/mo)", purpose: "Direct access to legal ops buyers. Join as individual member.", owner: "Ali", week: 4 },
  { tool: "Microsoft Founders Hub", cost: "FREE", purpose: "$150K Azure credits, path to co-sell status, GitHub Enterprise free", owner: "Ali", week: 0 },
];

// ============================================================
// INFLUENCERS TO ENGAGE — From MERGED-RESEARCH-FINAL.md
// ============================================================

export const influencerTargets: InfluencerTarget[] = [
  { name: "Mary O'Carroll", platform: "LinkedIn", role: "Former Google Legal Ops, CLOC founder", why: "Top legal ops voice — shapes enterprise buying decisions" },
  { name: "Casey Flaherty", platform: "LinkedIn", role: "Legal ops consultant", why: "Directly influences which tools GCs evaluate" },
  { name: "Mark Cohen", platform: "LinkedIn", role: "Legal industry analyst", why: "Thought leader with wide enterprise reach" },
  { name: "David Curle", platform: "LinkedIn", role: "Legal tech analyst", why: "Industry research that GCs read" },
  { name: "Bob Ambrogi", platform: "Twitter + LawSites", role: "#1 legal tech blogger", why: "Pitch for product review — drives massive legal tech traffic" },
  { name: "Richard Tromans", platform: "Artificial Lawyer", role: "Editor, Artificial Lawyer", why: "Pitch: 'Only multi-agent contract AI that deploys in customer's cloud'" },
  { name: "Nikki Shaver", platform: "Twitter", role: "Legal innovation leader", why: "Active in legal tech discourse" },
  { name: "Colin Levy", platform: "Twitter + LinkedIn", role: "Legal tech advocate", why: "Active community builder in legal AI space" },
  { name: "Isabel Parker", platform: "Twitter + LinkedIn", role: "Legal innovation", why: "Shapes UK/EU legal tech narrative — our #1 market" },
];

// ============================================================
// MARKET DATA — For sales conversations and content
// ============================================================

export const marketData = {
  marketSize: [
    { metric: "AI in Legal Services (2025)", value: "$1.75-3.1B", growth: "25-30% CAGR" },
    { metric: "CLM Software Market", value: "$3B → $12B by 2033", growth: "13.5% CAGR" },
    { metric: "Legal tech funding (2025)", value: "$6B+", growth: "Accelerating" },
  ],
  adoption: [
    { stat: "52% of corporate legal departments now use GenAI", source: "Up from 23% in 2024" },
    { stat: "91% of large firms (500+ attorneys) use AI for research", source: "But only for research, not contract review" },
    { stat: "Only 39% report quantifiable success from AI tools", source: "Most are disappointed → opportunity" },
    { stat: "78% plan to bring more contract work in-house", source: "Moving away from outside counsel" },
  ],
  barriers: [
    { barrier: "80% cite accuracy concerns", ourAnswer: "18 specialized domain analysts + confidence scoring" },
    { barrier: "62% stalled by data security fears", ourAnswer: "Customer-cloud deployment, data never leaves" },
    { barrier: "66% worried about IP/confidentiality", ourAnswer: "Attorney-client privilege preserved" },
    { barrier: "95% of AI pilots fail at integration", ourAnswer: "8-10 week implementation with 3-4 engineers" },
    { barrier: "40% of AI agent projects fail by 2027", ourAnswer: "Production-proven multi-agent architecture" },
  ],
  costData: [
    { metric: "Top firm hourly rates", value: "$1,000+/hour" },
    { metric: "Manual review per 80-page MSA", value: "30 hours" },
    { metric: "Paralegent review per 80-page MSA", value: "2-8 minutes" },
    { metric: "Manual cost per month (4-5 attorneys)", value: "$100K+" },
    { metric: "Paralegent one-time investment", value: "$60-80K" },
    { metric: "Payback period", value: "~1 month" },
  ],
};

// ============================================================
// CONVERSION BENCHMARKS — From CUSTOMER-ACQUISITION-RESEARCH.md
// ============================================================

export const conversionBenchmarks = {
  coldEmail: [
    { metric: "Average reply rate", value: "3.4%", topPerformers: "10.7%+" },
    { metric: "With personalization", value: "Up to 18%", topPerformers: "—" },
    { metric: "Optimal email length", value: "Under 80 words", topPerformers: "—" },
    { metric: "First email generates", value: "58% of all replies", topPerformers: "—" },
    { metric: "Optimal touchpoints", value: "4-7 emails per sequence", topPerformers: "—" },
    { metric: "Best launch day", value: "Monday", topPerformers: "—" },
    { metric: "Domain warm-up needed", value: "4-6 weeks", topPerformers: "—" },
  ],
  linkedin: [
    { metric: "Connection acceptance rate", value: "26.4%", topPerformers: "—" },
    { metric: "Reply rate (personalized)", value: "9.36%", topPerformers: "—" },
    { metric: "Legal industry reply rate", value: "10.42% (HIGHEST of any industry)", topPerformers: "—" },
    { metric: "InMail response rate", value: "18-25%", topPerformers: "—" },
    { metric: "Multi-touch vs single-touch", value: "5.26% vs 1.07%", topPerformers: "—" },
    { metric: "Email + LinkedIn combined", value: "287% higher results", topPerformers: "—" },
  ],
  signalBased: [
    { metric: "Contact funded companies within 48h", value: "400% higher conversion" },
    { metric: "71% of funded companies finalize vendors within", value: "90 days" },
    { metric: "New executive hires convert at", value: "2.5x higher rate in first 3 months" },
    { metric: "First seller to reach after trigger", value: "5x more likely to win" },
    { metric: "Multi-signal stacked outreach", value: "25-40% reply rates" },
  ],
  salesFunnel: [
    { stage: "Email → Reply", rate: "3-10%" },
    { stage: "LinkedIn → Reply", rate: "10%" },
    { stage: "Reply → Demo booked", rate: "30-40%" },
    { stage: "Demo → Pilot/POC", rate: "25-35%" },
    { stage: "Paid pilot → Closed deal", rate: "70%+" },
    { stage: "Free pilot → Closed deal", rate: "Almost never" },
  ],
  website: [
    { metric: "Response within 5 min", value: "21x more effective than 30 min" },
    { metric: "Same-day demo attendance", value: "88-94% vs 45-55% for 7+ day" },
    { metric: "Demo request-to-opportunity", value: "28-40% (top: 48%+)" },
    { metric: "Interactive demo conversion", value: "2x better, 20-25% faster close" },
    { metric: "Chat widget conversion lift", value: "2-3x higher among engaged visitors" },
  ],
};

// ============================================================
// MICROSOFT ECOSYSTEM — Biggest free lever
// ============================================================

export const microsoftEcosystem = [
  { step: 1, name: "Microsoft for Startups Founders Hub", cost: "FREE", benefit: "$150K Azure credits, GitHub Enterprise, VS Enterprise. Path to co-sell.", action: "Apply now at microsoft.com/startups", week: 0 },
  { step: 2, name: "List Word Add-in on AppSource", cost: "FREE", benefit: "Visible to millions of M365 users. 'Microsoft certified' trust badge. 10-50 inbound inquiries/month.", action: "Submit after polished add-in ready", week: 6 },
  { step: 3, name: "Azure Marketplace Listing", cost: "FREE (3% fee)", benefit: "Enterprise buyers use existing Azure committed spend. No separate PO. 40-80% faster deals.", action: "List with Private Offers for custom pricing", week: 6 },
  { step: 4, name: "Co-Sell Ready Status", cost: "FREE", benefit: "Microsoft sellers see you in their catalog. When they talk to a GC about M365, they recommend you. 2-5x pipeline increase.", action: "Apply after 1-3 customers", week: 12 },
  { step: 5, name: "IP Co-Sell Incentivized", cost: "FREE", benefit: "Microsoft sellers earn RETIREMENT CREDIT for selling your product. They actively push you.", action: "After $100K Azure consumed revenue", week: 20 },
];

// ============================================================
// LINKEDIN ALGORITHM INSIGHTS — From PLATFORM-DEEP-DIVE.md
// ============================================================

export const linkedinInsights = {
  algorithm: [
    "Transformer-based 3-stage system: Quality → 90-min test → Personalization",
    "Average post reach: 8-12% of followers (down from 15-20%)",
    "First 60 minutes determine everything — have 3-5 people ready to comment",
    "Company page reach collapsed to 1.6% — personal profiles get 561% more reach",
    "External links get 40% less reach — put links in comments instead",
    "Carousels get 585% more engagement than text, 196% more than video",
  ],
  contentRanking: [
    { format: "Carousels / PDF Documents", engagement: "7.00%", note: "King of LinkedIn. 7 slides is sweet spot." },
    { format: "Native Video (<30 sec)", engagement: "6.47%", note: "Short outperforms long. Must be native upload." },
    { format: "Multi-Image Posts", engagement: "~5%", note: "Drive more likes across the board." },
    { format: "Polls", engagement: "4.40%", note: "Better for pages with 50K+ followers." },
    { format: "Text-Only Posts", engagement: "Lowest", note: "Still valuable for hooks/stories." },
  ],
  postingRules: [
    "3-5 posts/week for founder (2-5 posts/week confirmed optimal by 2M+ post analysis)",
    "Best times: Tue-Thu 8-11 AM local time of target market",
    "Post at 8-9 AM UK time (covers UK morning, UAE afternoon, US late night)",
    "Comment on 10-20 target audience posts daily BEFORE posting your own",
    "80/20 rule: 80% engaging others' content, 20% creating your own",
    "Educational content outperforms promotional 3:1",
    "Ideal mix: 50% carousel/video, 30% text, 20% images/documents",
    "Less than 25 targeted connection requests per week (doubles success rate)",
  ],
  newsletter: {
    name: "The Contract Intelligence Brief",
    openRate: "40-60% (vs 20% email marketing)",
    delivery: "Triple notification: email + push + in-app — bypasses algorithm",
    frequency: "Biweekly to start, weekly once sustainable",
    rule: "Founder publishes personally, NOT from company page",
  },
  ads: {
    cpc: "$6.40 for senior decision-makers",
    cpl: "$125 for Software/IT",
    roas: "121% — only major ad platform with positive B2B ROAS",
    returnPerDeal: "66:1 at $60K deal size",
    startBudget: "$2-3K/month",
    startWhen: "After 60-90 days of organic content",
  },
  growth: "0 → 1,000 followers in 60-90 days with consistent execution",
};

// ============================================================
// GEO / AI CITATION STRATEGY — From GROWTH-CHANNELS-RESEARCH.md
// ============================================================

export const geoCitationStrategy = {
  engines: [
    { engine: "Perplexity", logic: "Easiest to get cited. Real-time web search. Well-structured SEO content gets picked up first.", priority: "SEO + structure" },
    { engine: "ChatGPT", logic: "Blends training data with web browsing. 3-6 months for training data inclusion. Favors recent content.", priority: "Freshness + authority" },
    { engine: "Gemini", logic: "Inherits Google Search logic. Favors official brand websites and authoritative sources.", priority: "Google rankings" },
    { engine: "Claude", logic: "Cites user-generated content at 2-4x rate of other models. Reviews matter 10x more.", priority: "Reviews + UGC" },
    { engine: "Copilot", logic: "Bing-based. Prioritize Bing submission, tables/lists, FAQ schema.", priority: "Bing SEO + schema" },
  ],
  criticalFinding: "Listings represent 54.53% of distinct citation sources across ALL AI models. Directory accuracy (G2, Crunchbase) is critical.",
  contentRules: [
    "Definition-first opening: Lead every page with '[Entity] is a [category] that [differentiator]'",
    "First paragraph under 80 words",
    "Direct-answer blocks: 40-60 word paragraphs after H2 headings",
    "Fact density: 2-3 data points per 300 words",
    "Question-style headings matching how people prompt AI",
    "Answer in first 2-3 lines under each heading, then expand",
    "Comparison pages = highest-impact content type for AI citations",
    "Listicle pages earn 3-5x more AI citations than long-form",
    "FAQ section at bottom of every page — 32% of AI citations come from FAQs",
  ],
};

// ============================================================
// DESIGN PARTNER STRATEGY — From CUSTOMER-ACQUISITION-RESEARCH.md
// ============================================================

export const designPartnerStrategy = {
  target: "5 companies",
  term: "3-6 months free access",
  expectedConversion: "60-80% convert to paid ($60-80K deals)",
  criteria: [
    "Representative — matches ICP (mid-market, 500-5000 employees)",
    "Urgent — has a real contract review pain (not just curious)",
    "Capable — can dedicate a person to the pilot",
  ],
  inReturn: [
    "Biweekly 30-min feedback calls",
    "Permission to create case study",
    "Reference calls for future prospects",
    "Letter of intent to buy if product meets criteria",
    "Review 10-20 of their actual contracts through the system",
  ],
  whereToFind: [
    "Personal network (even loosely connected)",
    "LinkedIn outreach to mid-market GCs",
    "CLOC and ACC communities",
    "The 'Harvey tactic' — find someone whose contracts you can improve and show them",
  ],
};

// ============================================================
// CHANNEL MIX — What drives first 10 customers
// ============================================================

export const channelMix = [
  { channel: "Cold Outreach (Email + LinkedIn)", percentage: 40, description: "MAIN engine. 200-300 emails/week + 100-150 LinkedIn requests/week at scale." },
  { channel: "Design Partners → Paid", percentage: 25, description: "5 design partners → 3-4 paying customers. 60-80% conversion rate." },
  { channel: "Signal-Based Selling", percentage: 15, description: "Funded companies within 48h (400% higher conversion), new GC hires (2.5x). Highest reply rates (25-40%), lowest volume." },
  { channel: "Partnerships (Microsoft, bar assoc, consultants)", percentage: 10, description: "Slower to build but compounds. Microsoft co-sell = 2-5x pipeline. CLM consultants = 10% referral fee." },
  { channel: "Inbound (Blog, LinkedIn organic, demo page)", percentage: 10, description: "Foundation supporting everything. SEO/GEO takes 3-6 months. Not a primary driver in first 8 weeks." },
];
