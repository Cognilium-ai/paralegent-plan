// ============================================================
// BUYER INSIGHTS — Real research from CLOC, FTI, Gartner, ABA, G2
// The foundation data that all content should reference
// ============================================================

export const buyerObjections = [
  {
    rank: 1,
    objection: "I don't trust the AI output",
    percentage: "60%",
    source: "LawNext 2025",
    verbatim: [
      "Ultimately, there's still going to be a need for the experience and reasoned judgment that lawyers provide.",
      "AI may give us the bare bones of a draft, but it is absolutely no substitute for our professional judgment.",
    ],
    ourAnswer: "Every finding includes: rationale, confidence score, exact rulebook rule matched, and suggested replacement language. Not a black box — your attorneys review 15 flagged items, not 80 pages.",
    contentNeeded: "Blog about accuracy + trust, demo showing confidence scores, case study with accuracy metrics",
  },
  {
    rank: 2,
    objection: "My data cannot leave our environment",
    percentage: "57%",
    source: "LawNext 2025 + Deloitte",
    verbatim: [
      "If you can't meet our security and information governance standards, we can't proceed.",
      "Most attorneys don't trust public LLMs with privileged client data.",
    ],
    ourAnswer: "Customer-cloud deployment. Data never touches our servers. Your LLM accounts (Azure OpenAI, Bedrock, Vertex AI). Your infrastructure. Attorney-client privilege preserved.",
    contentNeeded: "Security one-pager, data sovereignty blog, architecture diagram showing data flow",
  },
  {
    rank: 3,
    objection: "We tried something before and it failed",
    percentage: "77%",
    source: "Artificial Lawyer",
    verbatim: [
      "Implementation took too long (38%), too complicated (36%), didn't match actual needs (33%).",
      "The machine won't do the job autonomously once installed.",
    ],
    ourAnswer: "8-10 week structured implementation. Dedicated engineering pod. Phased rollout. Clear success criteria defined before we start. We build the rulebook WITH your team.",
    contentNeeded: "Blog: Why 95% of AI pilots fail. Implementation timeline one-pager. Phased rollout plan.",
  },
  {
    rank: 4,
    objection: "Where's the ROI? I can't measure it",
    percentage: "40%",
    source: "ACC / Missouri Lawyers Media",
    verbatim: [
      "59% of in-house attorneys report no noticeable savings yet from AI tools.",
      "Only 7% of legal departments use specific KPIs to track AI value.",
    ],
    ourAnswer: "30 hours → 30 minutes per MSA. $100K/month manual → $60-80K one-time. Month 1 payback. Track: review time, SLA days, reviewer consistency.",
    contentNeeded: "ROI one-pager, ROI blog with real math, TCO comparison table",
  },
  {
    rank: 5,
    objection: "It's not plug-and-play / setup is hard",
    percentage: "Common (G2 reviews)",
    source: "G2 LegalOn Reviews",
    verbatim: [
      "The biggest hurdle was the initial time investment to build our playbooks. It's not plug-and-play.",
    ],
    ourAnswer: "We build the rulebook WITH your team. 10-15 hours of your legal team's input over 8-10 weeks. Our engineers do the heavy lifting.",
    contentNeeded: "Implementation timeline one-pager, blog about rulebook setup process",
  },
];

export const buyerTriggers = [
  { trigger: "Budget squeeze", detail: "Outside counsel budget cut but work volume rising. Spend expectations dropped 21 points (58% → 37%). Only 32% expect headcount growth.", signal: "Company announces cost-cutting, restructuring, or outside counsel RFP" },
  { trigger: "End-of-quarter bottleneck", detail: "Recurring quarterly crisis where contract backlog threatens deal closings. Often THE moment a GC says 'we need to fix this.'", signal: "Q3/Q4 approach, company has large deal pipeline" },
  { trigger: "Costly mistake or near-miss", detail: "Missed clause → lawsuit. Unflagged liability cap → years of exposure. 9.2% revenue loss when CFO runs the math.", signal: "Legal dispute in news, company settles claim" },
  { trigger: "Board/C-suite pressure to modernize", detail: "66% plan to increase legal tech spend. But only 29% confident it'll help. Mandate from above.", signal: "New CTO/CIO hire, digital transformation initiative, board meeting cycle" },
  { trigger: "Competitor adopted AI", detail: "AI-enabled firms developing structural advantage. 75% YoY growth in contract review AI adoption.", signal: "Competitor announces AI partnership, industry report on AI adoption" },
  { trigger: "New GC/CLO hired", detail: "New legal leaders buy in first 3 months. 2.5x higher conversion rate.", signal: "LinkedIn job change alert, press announcement" },
  { trigger: "Recent funding", detail: "Contact within 48 hours = 400% higher conversion. 71% finalize vendors within 90 days.", signal: "Crunchbase funding alert, press release" },
];

export const customerLanguage = {
  problemPhrases: [
    "Do more with less",
    "Our team is drowning",
    "Contract backlog",
    "End-of-quarter dread",
    "Deals are stalling in legal review",
    "Inconsistent review across the team",
    "Every lawyer reviews differently",
    "We can't send our data to another vendor",
    "The technology roadmap suffers because we're buried in substantive work",
    "There is more data, which makes the process more expensive",
  ],
  wantPhrases: [
    "Operational efficiency",
    "Prove our value to the board",
    "Strategic work, not clause-matching",
    "Faster turnaround without sacrificing quality",
    "Consistency across all reviewers",
    "Something that works inside our existing tools",
    "Control over our data",
    "Measurable ROI",
  ],
  trustWords: [
    "Production-grade",
    "Structured implementation",
    "Confidence scoring",
    "Your rulebook",
    "Deployed in your cloud",
    "Rationale for every finding",
  ],
  killWords: [
    "Revolutionary / Disruptive / Game-changing",
    "Leverage / Synergy / Optimize",
    "AI agents (they hear 'black box')",
    "LangGraph / Google ADK / framework names",
    "LLM-agnostic (jargon)",
    "Best / Most advanced / State of the art",
  ],
};

export const switchingDynamics = {
  push: [
    "9.2% annual revenue lost to poor contracts",
    "Outside counsel budgets slashed (dropped 21 points)",
    "78% increased project volume + 77% growing complexity",
    "97% difficulty hiring quality talent",
    "46% of legal professionals actively job searching",
    "3.1 hours per contract at scale = unsustainable",
    "End-of-quarter bottlenecks threatening deal closings",
  ],
  pull: [
    "30 hours → 30 minutes per MSA",
    "2x to 6x faster task completion",
    "Consistent results across all reviewers",
    "Data never leaves their environment",
    "One-time investment, not another subscription",
    "Works inside Word — zero workflow disruption",
  ],
  habit: [
    "Attorneys are risk averse — AI is disruptive",
    "Partners built careers on billable hours from document review",
    "Need to hear about something seven times before it sticks",
    "77% burned by failed tech — cautious about trying again",
    "Cultural inertia: prefer what they already know",
  ],
  anxiety: [
    "76% fear AI will lead to job displacement",
    "85% believe AI requires new skills and roles",
    "Transformation fatigue from constant AI push",
    "Associates worry about losing training opportunities",
    "Someone still needs to review the output",
  ],
};

export const competitorWeaknesses = [
  { competitor: "Harvey AI", price: "$288K/year (20-seat min)", weakness: "Users can't tell difference from ChatGPT. 'Pushy and obnoxious' sales. 'Elements of snake oil.'" },
  { competitor: "LegalOn", price: "$3,000+/month min", weakness: "'Not plug-and-play' — playbook setup takes significant time. Works only when contracts match their types." },
  { competitor: "Spellbook", price: "$20-179/user/month", weakness: "'Suggests irrelevant changes, tedious.' No accuracy metrics published. Limited scope." },
  { competitor: "Luminance", price: "Enterprise pricing", weakness: "Focused on M&A due diligence, not general contract review. SaaS only." },
  { competitor: "Ironclad", price: "Enterprise pricing", weakness: "CLM platform, not focused on review. Heavy implementation." },
];

export const antiPersonas = [
  "Companies with <50 contracts/year — can't justify $60-80K",
  "Solo practitioners or firms with <5 attorneys",
  "Pre-Series A startups — use $200-500/month self-serve tools",
  "Companies without a legal team — use outside counsel",
  "Standard-form contract businesses (retail, hospitality) — low complexity",
  "Companies that haven't implemented basic CLM yet — need foundational tech first",
];

// Blog order rewritten based on buyer objections (not keywords)
export const blogOrderByObjection = [
  { week: 1, blog: "Can Your Legal Team Trust AI Contract Review? The Accuracy Question Answered", objection: "#1 Trust (60%)", keyword: "AI contract review accuracy", pillar: "Trust" },
  { week: 1, blog: "Data Sovereignty in Legal AI: Why Your Contracts Should Never Leave Your Cloud", objection: "#2 Data (57%)", keyword: "data sovereignty legal AI", pillar: "Trust" },
  { week: 2, blog: "Why 95% of AI Contract Review Pilots Fail (And How to Avoid It)", objection: "#3 Failed Tech (77%)", keyword: "AI contract review pilot failure", pillar: "Problem" },
  { week: 2, blog: "AI Contract Review ROI: The Real Numbers for Enterprise Legal Teams", objection: "#4 ROI (40%)", keyword: "AI contract review ROI", pillar: "ROI" },
  { week: 3, blog: "On-Premise Contract AI: Deploy in Your Own Cloud (BLUE OCEAN)", objection: "#2 Data — deep dive", keyword: "on-premise contract AI", pillar: "Trust" },
  { week: 3, blog: "How AI Contract Redlining Works: From 30 Hours to 30 Minutes", objection: "Explains the solution", keyword: "AI contract redlining", pillar: "Solution" },
  { week: 4, blog: "The Complete Guide to AI Contract Review in 2026", objection: "Education + authority", keyword: "AI contract review software", pillar: "Education" },
  { week: 4, blog: "Paralegent vs Manual Contract Review: Time, Cost, and Accuracy", objection: "#4 ROI — comparison", keyword: "AI vs manual contract review", pillar: "Comparison" },
  { week: 5, blog: "The 10 Best AI Contract Review Tools in 2026 (Compared)", objection: "Capture comparison traffic", keyword: "best AI contract review tools 2026", pillar: "Comparison" },
  { week: 5, blog: "Paralegent vs LegalOn: Cloud-Deployed vs SaaS", objection: "Competitor comparison", keyword: "Paralegent vs LegalOn", pillar: "Comparison" },
  { week: 6, blog: "Can ChatGPT Review Contracts? Why Generic AI Falls Short", objection: "#1 Trust — generic AI", keyword: "Can ChatGPT review contracts", pillar: "Comparison" },
  { week: 6, blog: "Multi-Agent AI vs Single LLM: Why Specialized Beats Generic", objection: "Technical differentiation", keyword: "multi-agent AI legal", pillar: "Solution" },
  { week: 7, blog: "Paralegent vs Spellbook: Deep Customization vs Pre-Built Playbooks", objection: "Competitor comparison", keyword: "Paralegent vs Spellbook", pillar: "Comparison" },
  { week: 7, blog: "Is AI Contract Review Safe? GDPR, Privilege, and Data Sovereignty", objection: "#2 Data — compliance", keyword: "AI contract review GDPR", pillar: "Trust" },
  { week: 8, blog: "Enterprise Buyer's Guide to AI Contract Review Software (2026)", objection: "Decision-stage authority", keyword: "AI contract review enterprise", pillar: "Education" },
  { week: 8, blog: "What Is a Contract Rulebook? The AI-Optimized Alternative to Playbooks", objection: "Category creation", keyword: "contract rulebook", pillar: "Education" },
];

// Sales assets mapped to DEAL MOMENTS (not just a list)
export const salesAssetsByMoment = [
  {
    moment: "Cold outreach email",
    trigger: "Ali sends first email",
    asset: "3-min demo video link",
    format: "Video (embedded link)",
    whoSends: "Ali",
  },
  {
    moment: "Prospect shows interest",
    trigger: "Replies to email or LinkedIn",
    asset: "5 Questions Every GC Should Ask checklist",
    format: "PDF attachment",
    whoSends: "Ali",
  },
  {
    moment: "Pre-demo warm-up",
    trigger: "Demo booked, 24h before call",
    asset: "Relevant blog link (based on their industry/concern)",
    format: "Email link",
    whoSends: "Ali",
  },
  {
    moment: "During demo",
    trigger: "Mudassir runs live demo",
    asset: "Product working in Word (live)",
    format: "Live demo",
    whoSends: "Mudassir",
  },
  {
    moment: "Post-demo: needs CIO approval",
    trigger: "Prospect says 'I need to involve our IT team'",
    asset: "Security & Data Sovereignty one-pager",
    format: "PDF attachment",
    whoSends: "Mudassir",
  },
  {
    moment: "Post-demo: needs budget approval",
    trigger: "Prospect says 'I need budget approval'",
    asset: "ROI one-pager + TCO comparison",
    format: "PDF attachment",
    whoSends: "Mudassir",
  },
  {
    moment: "Post-demo: needs timeline clarity",
    trigger: "Prospect asks 'How long until we're live?'",
    asset: "Implementation Timeline one-pager",
    format: "PDF attachment",
    whoSends: "Mudassir",
  },
  {
    moment: "Prospect mentions competitor",
    trigger: "They say 'We're also looking at LegalOn/Spellbook/Harvey'",
    asset: "Competitive Comparison one-pager",
    format: "PDF attachment",
    whoSends: "Mudassir",
  },
  {
    moment: "Prospect ready for pilot",
    trigger: "Verbal agreement to try",
    asset: "At A Glance summary + Pilot proposal",
    format: "PDF + proposal doc",
    whoSends: "Mudassir",
  },
  {
    moment: "Pilot running",
    trigger: "4-week pilot in progress",
    asset: "Biweekly check-in template",
    format: "Email template",
    whoSends: "Mudassir",
  },
  {
    moment: "Pilot success → close deal",
    trigger: "Positive results from pilot",
    asset: "Case study template (fill immediately)",
    format: "PDF",
    whoSends: "Mudassir",
  },
  {
    moment: "No response after 3 days",
    trigger: "Prospect doesn't reply to initial outreach",
    asset: "Follow-up email #1 (new angle)",
    format: "Email",
    whoSends: "Ali",
  },
  {
    moment: "No response after 7 days",
    trigger: "Still no reply after follow-up #1",
    asset: "Follow-up email #2 (share demo video)",
    format: "Email",
    whoSends: "Ali",
  },
  {
    moment: "Interested but not now",
    trigger: "Prospect says 'not right now' or 'maybe next quarter'",
    asset: "Monthly nurture email (latest blog/insight)",
    format: "Email",
    whoSends: "Ali",
  },
];
