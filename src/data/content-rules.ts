// ============================================================
// CONTENT RULES + QUALITY GATES + INTERNAL LINKING
// From 8-WEEK-CONTENT-SYSTEM.md — rules 1-33
// ============================================================

export const contentRules = [
  // Posting Rules
  { id: 1, category: "Posting", rule: "All LinkedIn posts SCHEDULED for 1:00 PM PKT (8:00 AM UK)", source: "Platform Deep Dive (Sprout Social 2026)" },
  { id: 2, category: "Posting", rule: "Link in FIRST COMMENT on LinkedIn, never in post body", source: "Platform Deep Dive — 40% less reach with links in body" },
  { id: 3, category: "Posting", rule: "Engagement BEFORE posting — 2 hrs LinkedIn + 30 min Reddit every morning (8:00-10:30 AM PKT)", source: "Platform Deep Dive" },
  // Blog Writing
  { id: 4, category: "Blog", rule: "Every stat MUST cite the source with link — +40% AI visibility", source: "Princeton GEO Research (AI-SEO skill)" },
  { id: 5, category: "Blog", rule: "Include 1-2 expert quotes per blog — +30% AI visibility", source: "Princeton GEO Research" },
  { id: 6, category: "Blog", rule: "Every blog MUST have 4 content blocks: Definition + Statistics (cited) + Comparison Table + FAQ", source: "AI-SEO skill — 33%+32%+37% of AI citations" },
  { id: 7, category: "Blog", rule: "Definition-first opening under 80 words", source: "GEO-CITATION-RULEBOOK" },
  { id: 8, category: "Blog", rule: "H2 every 300-400 words — AI chunks at H2 boundaries", source: "CLAUDE.md GEO rules" },
  { id: 9, category: "Blog", rule: "2-3 stats per 300 words with source citations", source: "GEO-CITATION-RULEBOOK" },
  { id: 10, category: "Blog", rule: "Question-style headings matching how people prompt AI", source: "AI-SEO skill" },
  { id: 11, category: "Blog", rule: "Visible 'Last Updated' date on every blog", source: "AI-SEO skill — freshness signal" },
  { id: 12, category: "Blog", rule: "NO keyword stuffing — actively HURTS by -10%", source: "Princeton GEO Research" },
  // Schema
  { id: 13, category: "Schema", rule: "All blogs: BlogPosting + FAQPage + BreadcrumbList", source: "CLAUDE.md" },
  { id: 14, category: "Schema", rule: "How-to blogs (Blog #6): add HowTo schema", source: "AI-SEO skill" },
  { id: 15, category: "Schema", rule: "Comparison/listicle blogs (#8,#9,#10,#13): add ItemList schema", source: "AI-SEO skill" },
  // Revenue Connection
  { id: 16, category: "Revenue", rule: "Every blog MUST end with specific demo path: connect blog topic to demo experience", source: "Neil Patel — revenue-driven content" },
  { id: 17, category: "Revenue", rule: "Mid-article CTA after comparison table or ROI section", source: "Neil Patel" },
  // Quality Gate
  { id: 18, category: "Quality", rule: "WE run Seven Sweeps on every blog: Clarity → Voice → So What → Prove It → Specificity → Emotion → Zero Risk", source: "Copy Editing skill" },
  { id: 19, category: "Quality", rule: "'So What' test: every claim must answer 'why should I care?'", source: "Copy Editing skill" },
  { id: 20, category: "Quality", rule: "'Prove It' test: every claim needs evidence — stat, source, quote", source: "Copy Editing skill" },
  // Bing
  { id: 21, category: "Bing", rule: "Exact-match keywords in title and meta description — Bing weights these MORE than Google", source: "GROWTH-CHANNELS-RESEARCH" },
  { id: 22, category: "Bing", rule: "Day 1 SURGE social posts directly boost Bing rankings (social signals)", source: "GROWTH-CHANNELS-RESEARCH" },
  { id: 23, category: "Bing", rule: "Include multimedia — Bing favors images, videos, rich media", source: "GROWTH-CHANNELS-RESEARCH" },
  // Hacker News
  { id: 24, category: "Launch", rule: "Prep 'Show HN' post Week 7-8 — focus TECHNICAL, not sales. 5-15K visitors in 24 hours.", source: "GROWTH-CHANNELS-RESEARCH" },
  // Platform Acknowledgment
  { id: 25, category: "Platform", rule: "FB/IG/TikTok: awareness only, not leads. Research says SKIP for $60-80K deals. We include for presence.", source: "PLATFORM-DEEP-DIVE" },
  // UTM
  { id: 26, category: "Tracking", rule: "Every link MUST have UTM: ?utm_source=[platform]&utm_medium=[type]&utm_campaign=[blog-number]", source: "Marketing Skills: Analytics-Tracking" },
  // Internal Linking
  { id: 27, category: "Blog", rule: "Every blog links to 2-5 other blogs + /demo page with descriptive anchor text", source: "Marketing Skills: Site-Architecture" },
  // Freshness
  { id: 28, category: "Blog", rule: "Every blog shows 'Last Updated: [date]' prominently", source: "Marketing Skills: AI-SEO" },
  // Analytics
  { id: 29, category: "Tracking", rule: "Ali sets up: demo_requested, blog_cta_clicked, pricing_page_viewed, content_downloaded events", source: "Marketing Skills: Analytics-Tracking" },
  // Lead Magnet
  { id: 30, category: "Revenue", rule: "After first 4 blogs: add gated lead magnet (checklist/calculator) on blog pages — email capture", source: "Marketing Skills: Lead-Magnets" },
  // Monthly Audit
  { id: 31, category: "Quality", rule: "Monthly: audit stats freshness, competitor info, broken links, AI citation check", source: "Marketing Skills: Content-Strategy" },
];

export const qualityGates = [
  {
    gate: "Clarity",
    checks: [
      "Non-expert understands main point in 10 seconds",
      "No jargon without explanation",
      "Average sentence under 20 words",
      "One idea per paragraph",
    ],
  },
  {
    gate: "Specificity",
    checks: [
      "No vague claims ('improve efficiency' → 'cut review time by 70%')",
      "Numbers and timeframes included",
      "Concrete examples (not hypothetical)",
    ],
  },
  {
    gate: "Proof",
    checks: [
      "Every major claim has a cited source",
      "Statistics have dates and attribution",
      "Expert quotes attributed with name + role",
    ],
  },
  {
    gate: "SEO",
    checks: [
      "Target keyword in: title, H1, first 100 words, URL",
      "Meta description 150-160 chars with keyword",
      "H1 and title are different",
      "2-5 internal links to other blogs + /demo",
      "Schema markup specified",
    ],
  },
  {
    gate: "AI Visibility",
    checks: [
      "Definition block in first paragraph (<80 words)",
      "Statistics with sources cited (+40%)",
      "Comparison table included (+33%)",
      "FAQ section at bottom (+32%)",
      "'Last Updated' date shown",
      "Author name + credentials visible",
      "No keyword stuffing (-10%)",
    ],
  },
  {
    gate: "Conversion",
    checks: [
      "Mid-article CTA after comparison/ROI section",
      "End-of-article CTA specific to blog topic → demo",
      "CTA communicates value ('See confidence scoring' not 'Learn more')",
    ],
  },
];

export const internalLinkingMap = [
  { blog: 1, title: "Trust/Accuracy", linksTo: [5, 11], demoPath: "See confidence scoring in action" },
  { blog: 2, title: "Data Sovereignty", linksTo: [5, 14], demoPath: "See how Paralegent deploys in YOUR cloud" },
  { blog: 3, title: "Why Pilots Fail", linksTo: [4, 7], demoPath: "See our structured 8-10 week implementation" },
  { blog: 4, title: "ROI Numbers", linksTo: [3, 8], demoPath: "See the math for YOUR team" },
  { blog: 5, title: "Blue Ocean (On-Premise)", linksTo: [2, 14, 1], demoPath: "The only cloud-deployed contract AI" },
  { blog: 6, title: "How Redlining Works", linksTo: [7, 12], demoPath: "Watch 18 domain analysts review a contract" },
  { blog: 7, title: "Complete Guide", linksTo: [1, 2, 6, 9], demoPath: "See AI contract review in action" },
  { blog: 8, title: "vs Manual Review", linksTo: [4, 7], demoPath: "See the before/after for YOUR contracts" },
  { blog: 9, title: "10 Best Tools", linksTo: [10, 13, 7], demoPath: "See why Paralegent ranks #1 for data sovereignty" },
  { blog: 10, title: "vs LegalOn", linksTo: [9, 5], demoPath: "See how Paralegent compares — live" },
  { blog: 11, title: "ChatGPT Can't Do This", linksTo: [12, 1], demoPath: "See generic AI vs 18 specialists" },
  { blog: 12, title: "Multi-Agent vs Single", linksTo: [11, 6], demoPath: "See 18 specialists work simultaneously" },
  { blog: 13, title: "vs Spellbook", linksTo: [9, 10], demoPath: "See deep customization in action" },
  { blog: 14, title: "GDPR Safety", linksTo: [2, 5], demoPath: "See how Paralegent meets compliance requirements" },
  { blog: 15, title: "Buyer's Guide", linksTo: [9, 7, 1, 2], demoPath: "Evaluating AI contract review? Start here" },
  { blog: 16, title: "What Is a Rulebook", linksTo: [6, 12], demoPath: "See a rulebook in action — your rules, your agents" },
];
