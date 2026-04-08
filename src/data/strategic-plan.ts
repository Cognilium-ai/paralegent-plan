// ============================================================
// STRATEGIC LAYER — Content-to-Sales, KPIs, Platform Strategies,
// Triggered Tasks, HN Launch, AI Citation, Influencers
// From 8-WEEK-CONTENT-SYSTEM.md strategic sections
// ============================================================

export const contentToSalesSync = [
  { week: 1, blog: "#1 Trust + #2 Data Sovereignty", aliAction: "Add blog links to cold email sequences: 'Here's how we solve the accuracy problem' + 'Your data never leaves'", trigger: "Blogs published Day 1" },
  { week: 2, blog: "#3 Pilots Fail + #4 ROI", aliAction: "Share in LinkedIn DM: 'We noticed your team implemented [competitor]. Here's why pilots fail.' + Attach ROI blog to CFO follow-ups", trigger: "Blogs published Day 1" },
  { week: 3, blog: "#5 Blue Ocean + #6 Redlining", aliAction: "Cold email angle: 'We're the only contract AI that deploys in your cloud'", trigger: "Unique positioning content live" },
  { week: 4, blog: "#7 Complete Guide + #8 vs Manual", aliAction: "Share guide as 'here's a guide we wrote' — positions as thought leader, not vendor", trigger: "Authority content live" },
  { week: 5, blog: "#9 10 Best Tools + #10 vs LegalOn", aliAction: "Send to prospects comparing tools: 'We ranked 10 tools honestly — including our own'", trigger: "Comparison content live" },
  { week: 6, blog: "#11 ChatGPT + #12 Multi-Agent", aliAction: "When prospect says 'we're using ChatGPT' → send Blog #11", trigger: "ChatGPT objection handler ready" },
  { week: 7, blog: "#13 vs Spellbook + #14 GDPR", aliAction: "When prospect mentions Spellbook → send Blog #13. CIO data concerns → send Blog #14", trigger: "Competitor + compliance content ready" },
  { week: 8, blog: "#15 Buyer's Guide + #16 Rulebook", aliAction: "Send Buyer's Guide to evaluation-stage prospects: 'The only guide you need'", trigger: "Decision-stage content ready" },
];

export const weeklyHandoff = {
  monday: "Saqlain/Asad publish blogs + all posts (SURGE DAY) → Ali receives notification: blogs are live",
  tuesday: "Ali adds blog links to outreach sequences in Instantly. Sends cold emails referencing the blog.",
  wednesday: "LinkedIn posts gaining traction → Ali monitors for GC engagement → sends connection requests to engaged GCs",
  ongoing: "Every demo → Mudassir shares relevant blog: CIO worried → Blog #2. CFO wants ROI → Blog #4. Burned by failed tech → Blog #3.",
};

export const platformKPIs = {
  headers: ["Metric", "Week 2", "Week 4", "Week 6", "Week 8"],
  rows: [
    ["Mudassir LinkedIn Followers", "100+", "250+", "500+", "800-1,000"],
    ["Ali LinkedIn Followers", "50+", "150+", "300+", "500+"],
    ["LinkedIn Post Impressions/week", "1,000+", "3,000+", "5,000+", "8,000+"],
    ["LinkedIn Engagement Rate", "3%+", "4%+", "5%+", "5%+"],
    ["YouTube Subscribers", "20+", "100+", "250+", "500+"],
    ["YouTube Views/week", "200+", "500+", "1,000+", "2,000+"],
    ["YouTube Short Views/week", "500+", "2,000+", "5,000+", "10,000+"],
    ["Blog Traffic (organic)", "100+", "500+", "1,500+", "3,000+"],
    ["Quora Answer Views (total)", "500+", "2,000+", "5,000+", "10,000+"],
    ["Medium Reads (total)", "—", "200+", "500+", "1,000+"],
    ["AI Engine Citations", "0", "1-2", "3-5", "5-10"],
    ["Reddit Karma", "10+", "50+", "100+", "200+"],
    ["Twitter/X Followers", "20+", "50+", "100+", "200+"],
    ["Demo Requests (from content)", "0", "1-2", "3-5", "5-10"],
  ],
};

export const revenueContentTest = [
  { content: "Blog (website)", path: "GC reads → addresses objection → clicks demo CTA → books demo", connection: "Removes buyer barrier (60% trust, 57% data, etc.)" },
  { content: "LinkedIn Post (Mudassir)", path: "GC sees in feed → visits profile → clicks featured demo video → books", connection: "Founder authority builds trust" },
  { content: "LinkedIn Carousel", path: "585% engagement → GC saves → shares with team → team visits website → demo", connection: "Viral reach to buying committee" },
  { content: "YouTube Long Video", path: "CIO searches 'AI contract review' → watches demo → clicks pinned comment → books", connection: "Captures buyers researching on YouTube (29%)" },
  { content: "YouTube Short", path: "Non-subscriber discovers → visits channel → watches long video → demo", connection: "Top-of-funnel discovery engine" },
  { content: "Quora Answer", path: "AI engine (ChatGPT) cites answer → user asks 'which tools?' → Paralegent mentioned", connection: "Indirect: AI citation pipeline" },
  { content: "LinkedIn Article", path: "Google indexes → ranks for keyword → organic traffic → demo", connection: "SEO + AI citation" },
  { content: "Twitter Thread", path: "Legal tech journalist sees → retweets → broader awareness", connection: "Indirect: awareness" },
  { content: "Medium Republish", path: "DA 96 backlink → boosts website authority → better rankings → traffic", connection: "Indirect: SEO authority" },
  { content: "Facebook/IG/TikTok", path: "Minimal direct pipeline", connection: "Honest: presence, not pipeline. Main revenue from LinkedIn + outreach." },
];

export const hackerNewsLaunch = {
  when: "Week 7-8 (after 6+ weeks of content + polished demo)",
  title: "Show HN: We built 18 AI agents that review contracts inside Microsoft Word",
  focus: "TECHNICAL, not sales. Tell 'We built this because...' story.",
  details: [
    "Mention: multi-agent orchestration, semantic search, dynamic agent creation",
    "Be authentic, not polished — HN audience values honesty",
    "Post Mon-Wed morning US Eastern time",
    "Engage with EVERY comment (harsh feedback = valuable)",
    "Be transparent about limitations",
    "Link to live demo or sandbox if possible",
  ],
  expected: "5-15K visitors in 24 hours",
  prep: "Saqlain drafts Week 7, Mudassir reviews, post Week 8",
};

export const aliTriggeredTasks = [
  { when: "Week 1 Day 2", task: "Add Blog #1 + #2 links to cold email sequences", trigger: "Blogs published Day 1" },
  { when: "Week 2 Day 2", task: "Add Blog #3 + #4 links to sequences", trigger: "Blogs published" },
  { when: "Week 3", task: "Build /compare/vs-legalon website page (prep for Blog #10 Week 5)", trigger: "Blog #10 content outline ready" },
  { when: "Week 5", task: "Build /compare/vs-spellbook website page (prep for Blog #13 Week 7)", trigger: "Blog #13 content outline ready" },
  { when: "Week 5", task: "Launch LinkedIn Ads ($2-3K/month) using carousel content", trigger: "60+ days of organic content built" },
  { when: "Weekly", task: "Monitor LinkedIn for GC engagement on posts → send connection requests", trigger: "Saqlain/Asad posts driving engagement" },
  { when: "Weekly", task: "Check which blog gets most traffic → feature in outreach", trigger: "Analytics from Strapi/GA4" },
  { when: "Week 7-8", task: "Create /pricing.md on website (AI agents need parseable pricing)", trigger: "AI-SEO skill recommendation" },
  { when: "Week 7-8", task: "Submit Word add-in to Microsoft AppSource", trigger: "Add-in polished + AppSource listing ready" },
  { when: "Weekly", task: "Update outreach email sequences with latest blog/content links", trigger: "New content published" },
];

export const mudassirTriggeredTasks = [
  { when: "Week 2", task: "Pitch Artificial Lawyer (Richard Tromans) — 'First cloud-deployed multi-agent contract AI'", trigger: "Blog content as proof of thought leadership" },
  { when: "Week 3", task: "Pitch LawSites (Bob Ambrogi) — offer exclusive hands-on product review", trigger: "More content + growing LinkedIn presence" },
  { when: "Ongoing", task: "Conduct all demo calls booked by Ali", trigger: "Content drives demo bookings" },
  { when: "Ongoing", task: "Share relevant blogs with demo prospects (CIO → Blog #2, CFO → Blog #4, burned → Blog #3)", trigger: "Post-demo follow-up" },
  { when: "Week 5+", task: "Review LinkedIn Ads creative (carousel content from Asad)", trigger: "Carousel content ready for ads" },
  { when: "Week 7-8", task: "Review Hacker News post draft (Saqlain writes, Mudassir adds founder voice)", trigger: "HN prep" },
  { when: "Week 8", task: "Write 'State of Pipeline' retrospective — what worked, conversion rates, next 90-day plan", trigger: "8 weeks of data" },
  { when: "Ongoing", task: "Design partner outreach using blog content to build credibility", trigger: "Share relevant blogs with prospects" },
];

export const platformStrategies = [
  {
    platform: "LinkedIn — Mudassir's Profile",
    target: "0 → 1,000 followers in 60-90 days",
    owner: "Saqlain manages",
    cadence: "Mon: Blog A post + Blog B cross-post | Wed: LinkedIn Article | Fri: Company Page ×2",
    research: "Personal profiles get 561% more reach. First 60 min critical. Carousels 585% more engagement.",
  },
  {
    platform: "LinkedIn — Ali's Profile",
    target: "0 → 500 followers in 60-90 days",
    owner: "Asad manages",
    cadence: "Mon: Blog B post + carousel + Blog A cross-post + carousel. Fewer but stronger posts.",
    research: "Supports outreach credibility. Prospects check LinkedIn after receiving cold email.",
  },
  {
    platform: "YouTube",
    target: "Own 'AI contract review' video space. 500 subs by Week 8.",
    owner: "Both (each makes their blog's video)",
    cadence: "Day 2: 1 long video each. Day 3: 2 Shorts each. = 2 long + 4 Shorts/week.",
    research: "29% of enterprise buyers search YouTube. Competitors minimal presence — first-mover. Dec 2025: Shorts essential.",
  },
  {
    platform: "Twitter/X",
    target: "Legal tech conversation presence",
    owner: "Saqlain (@paralegentai)",
    cadence: "Mon: 2 threads (Blog A + B). Wed: industry commentary. Fri: reshare best LinkedIn post.",
    research: "Only 12.73% of B2B leads. BUT: 64% UK decision-makers discover perspectives here.",
  },
  {
    platform: "Quora",
    target: "Dominate 10 key questions for AI citation",
    owner: "Saqlain",
    cadence: "2 answers/week from 12 target questions mapped to blogs.",
    research: "AI engines pull from Quora. 54.53% of citations from directories/listings.",
  },
  {
    platform: "Reddit",
    target: "Build karma → AMA Week 8+",
    owner: "Both (daily 30 min)",
    cadence: "Weeks 1-2: Lurk. 3-4: Comment helpfully. 5-6: Gently mention. 7-8: Share if asked.",
    research: "Harvey did AMA on r/legaltech. Reddit ranks in Google. 83% research before speaking to sales.",
  },
  {
    platform: "Medium",
    target: "8 republishes by Week 8. DA 96 backlinks.",
    owner: "Saqlain (Day 4, 15 min each)",
    cadence: "Republish 1 week after original. 2 blogs/week = 2 Medium posts/week (1 week lag).",
    research: "DA 96 backlink. AI engines cite. Canonical URL preserves SEO.",
  },
  {
    platform: "Instagram",
    target: "Maintain presence (not for leads)",
    owner: "Asad",
    cadence: "Mon: 2 carousels (adapted from LinkedIn). Day 3: 2 Reels (from Shorts). Fri: Story.",
    research: "Research says SKIP for $60-80K deals. We include for brand consistency.",
  },
  {
    platform: "TikTok",
    target: "Presence only",
    owner: "Asad",
    cadence: "Day 3 only: repost Shorts with casual captions. 10 min/repost.",
    research: "Research says SKIP. Minimal effort — repurposed Shorts only.",
  },
  {
    platform: "Facebook",
    target: "Presence only",
    owner: "Asad",
    cadence: "Mon: 2 text posts (short + link). Day 3: 2 video posts (from Shorts).",
    research: "Research says SKIP. GCs don't research $60-80K software on Facebook.",
  },
];

export const influencerList = [
  { name: "Mary O'Carroll", role: "Ex-Google Legal Ops, CLOC founder", platform: "LinkedIn", strategy: "Comment on her posts 2x/week with CLOC data points. Her audience IS our buyers." },
  { name: "Casey Flaherty", role: "Legal ops consultant", platform: "LinkedIn", strategy: "Share relevant insights from our blog research. He directly influences which tools GCs evaluate." },
  { name: "Mark Cohen", role: "Legal industry analyst", platform: "LinkedIn", strategy: "Add data to his analysis posts. Wide enterprise reach." },
  { name: "David Curle", role: "Legal tech analyst", platform: "LinkedIn", strategy: "Connect research points to his observations." },
  { name: "Bob Ambrogi", role: "#1 legal tech blogger (LawSites/LawNext)", platform: "LinkedIn + Twitter", strategy: "Engage thoughtfully. Potential for LawSites feature. Mudassir pitches Week 3." },
  { name: "Isabel Parker", role: "Legal innovation (UK/EU)", platform: "LinkedIn", strategy: "GDPR/data sovereignty angle comments. Shapes UK narrative — our #1 market." },
  { name: "Colin Levy", role: "Legal tech advocate", platform: "LinkedIn + Twitter", strategy: "Relationship building for future collaboration. Active community builder." },
];

export const aiCitationQueries = [
  "What is AI contract review?",
  "Best AI contract review tools 2026",
  "Can AI accurately review contracts?",
  "Data sovereignty in legal AI",
  "On-premise contract AI",
  "Paralegent AI",
  "AI contract review vs manual review",
  "Multi-agent AI for legal",
];

export const aiCitationInstructions = "Every 2 weeks, test all 8 queries in ChatGPT, Perplexity, Gemini, and Copilot. Track: Are we cited? Which page? Which AI engine? Screenshot and save. Share results in weekly team meeting.";
