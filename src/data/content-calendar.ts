// ============================================================
// 8-WEEK CONTENT CALENDAR — System Design (Structure Before Content)
// Every piece mapped: objection, hook, purpose, angle, platform
// Saqlain → Mudassir's LinkedIn + Company Page + Twitter + Quora + Medium + Reddit + Strapi
// Asad → Ali's LinkedIn + YouTube + Instagram + TikTok + Facebook
// ============================================================

export interface BlogWeek {
  week: number;
  blog: {
    number: number;
    title: string;
    objection: string;
    objectionPercent: string;
    keyword: string;
    hookFormula: string;
    hookExample: string;
    contentBlocks: string[];
    customerLanguage: string[];
    buyerStage: string;
    assignedWriter: "Saqlain" | "Asad";
    words: number;
  };
  pieces: {
    platform: string;
    type: string;
    owner: "Saqlain" | "Asad";
    day: number;
    purpose: string;
    angle: string;
    postedOn: string;
  }[];
  videoLong: {
    title: string;
    purpose: string;
    angle: string;
    duration: string;
    owner: "Saqlain" | "Asad";
    day: number;
  };
  shorts: {
    title: string;
    angle: string;
    owner: "Saqlain" | "Asad";
    day: number;
  }[];
}

export const contentCalendar: BlogWeek[] = [
  // ═══════════════════ WEEK 1 ═══════════════════
  // Saqlain: Blog #1 (Trust) — Asad: Blog #2 (Data Sovereignty)
  {
    week: 1,
    blog: {
      number: 1,
      title: "Can Your Legal Team Trust AI Contract Review? The Accuracy Question Answered",
      objection: "#1 — I don't trust the AI output",
      objectionPercent: "60%",
      keyword: "AI contract review accuracy",
      hookFormula: "Curiosity",
      hookExample: "60% of legal teams don't trust AI output. They're right to be skeptical — here's what changes their mind.",
      contentBlocks: ["Definition: What is AI accuracy in contract review", "Stats: 60% trust concern (LawNext), 75% hallucination fear (ABA), 600+ documented cases", "Comparison Table: Generic AI vs Specialized Domain Analysts", "FAQ: 3 questions about accuracy"],
      customerLanguage: ["professional judgment", "hallucination concerns", "undetected inconsistencies", "can't afford errors"],
      buyerStage: "Awareness → Consideration",
      assignedWriter: "Saqlain",
      words: 2500,
    },
    pieces: [
      { platform: "Mudassir's LinkedIn", type: "Text Post", owner: "Saqlain", day: 1, purpose: "Founder credibility on trust. GCs see CEO addressing THEIR #1 concern personally.", angle: "Curiosity hook. Lead with 60% stat. Personal voice: 'Here's what I've learned building AI for legal teams.'" , postedOn: "Mudassir's personal profile" },
      { platform: "LinkedIn Company Page", type: "Text Post", owner: "Saqlain", day: 1, purpose: "Official product credibility. Professional tone.", angle: "Product-focused: 'How confidence scoring solves the trust problem.'", postedOn: "Paralegent AI company page" },
      { platform: "Twitter/X", type: "Thread (5 tweets)", owner: "Saqlain", day: 1, purpose: "Capture legal tech conversation. Data-heavy thread shows depth.", angle: "One stat per tweet. Thread of facts, not opinions.", postedOn: "@paralegentai" },
      { platform: "Quora", type: "Answer (600 words)", owner: "Saqlain", day: 1, purpose: "Feeds AI engines directly. ChatGPT/Gemini cite Quora answers.", angle: "Genuine answer to 'Can AI accurately review legal contracts?' Cite ABA, CLOC data.", postedOn: "Quora" },
      { platform: "Ali's LinkedIn", type: "Text Post", owner: "Asad", day: 1, purpose: "Second LinkedIn profile = 2x reach. Different angle from Mudassir's.", angle: "Value hook: 'How to evaluate AI accuracy (3 questions nobody asks).' Technical angle.", postedOn: "Ali's personal profile" },
      { platform: "LinkedIn Carousel", type: "7 slides", owner: "Asad", day: 1, purpose: "585% more engagement than text. Visual breakdown of trust problem.", angle: "Slide 1: bold stat. Slides 2-6: generic AI problems → specialized solution. Slide 7: CTA.", postedOn: "Ali's personal profile" },
      { platform: "Facebook", type: "Text Post", owner: "Asad", day: 1, purpose: "Maintain presence. Link directly to blog.", angle: "Shorter. Direct link (FB doesn't penalize). Blog summary.", postedOn: "Paralegent AI FB page" },
      { platform: "Instagram", type: "Carousel + Caption", owner: "Asad", day: 1, purpose: "Visual platform. Adapted carousel drives to link in bio.", angle: "Data-visual. Key stats as graphics.", postedOn: "@paralegentai" },
      { platform: "TikTok", type: "Caption (for Short)", owner: "Asad", day: 3, purpose: "Discovery. 18% higher B2B completion rate.", angle: "Casual: 'Did you know 75% of lawyers worry about AI hallucination?'", postedOn: "@paralegentai" },
    ],
    videoLong: {
      title: "Can You Trust AI to Review Your Contracts? (The Accuracy Question)",
      purpose: "29% of buyers search YouTube before contacting sales. Show confidence scoring working — builds trust visually.",
      angle: "NOT a talking head. Show the product: upload contract → findings appear → confidence scores → rationale. 'Watch how every finding is explained.'",
      duration: "5-8 min",
      owner: "Asad",
      day: 2,
    },
    shorts: [
      { title: "60% of Lawyers Don't Trust AI. Here's Why They Should.", angle: "Hook with the stat. Show confidence scoring in 30 seconds. End: 'Every finding explained.'", owner: "Asad", day: 3 },
      { title: "What Confidence Scoring Actually Looks Like in Contract Review", angle: "Demo clip: RED clause → rationale → confidence 94% → suggested revision. Visual proof.", owner: "Asad", day: 3 },
    ],
  },

  // Asad's blog for Week 1
  {
    week: 1,
    blog: {
      number: 2,
      title: "Data Sovereignty in Legal AI: Why Your Contracts Should Never Leave Your Cloud",
      objection: "#2 — My data cannot leave our environment",
      objectionPercent: "57%",
      keyword: "data sovereignty legal AI",
      hookFormula: "Contrarian",
      hookExample: "Every AI contract review tool on the market is SaaS. Your contracts sit on someone else's servers. There's a better way.",
      contentBlocks: ["Definition: What is data sovereignty in legal AI", "Stats: 57% cite data privacy (LawNext), 75% top ethical concern (Deloitte)", "Comparison Table: SaaS vs Customer-Cloud across security/privilege/compliance/control", "FAQ: 3 questions about data safety"],
      customerLanguage: ["can't send our data to another vendor", "security and information governance standards", "privileged client data", "attorney-client privilege"],
      buyerStage: "Consideration",
      assignedWriter: "Asad",
      words: 2500,
    },
    pieces: [
      { platform: "Ali's LinkedIn", type: "Text Post", owner: "Asad", day: 1, purpose: "Ali's profile speaks to the technical buyer (CIO/CISO audience).", angle: "Contrarian hook. 'Every contract AI is SaaS. Here's the problem with that.'", postedOn: "Ali's personal profile" },
      { platform: "LinkedIn Carousel", type: "7 slides", owner: "Asad", day: 1, purpose: "Visual: where your data goes with SaaS vs customer-cloud. Architecture diagram.", angle: "Slide 1: 'Where do your contracts go when you click Review?' Slides: SaaS data flow vs your-cloud flow.", postedOn: "Ali's personal profile" },
      { platform: "Facebook", type: "Text Post", owner: "Asad", day: 1, purpose: "Maintain presence. Direct link.", angle: "Short version. Link to blog.", postedOn: "Paralegent AI FB page" },
      { platform: "Instagram", type: "Carousel + Caption", owner: "Asad", day: 1, purpose: "Visual. Architecture diagram as carousel.", angle: "SaaS vs Your Cloud — visual comparison.", postedOn: "@paralegentai" },
      { platform: "Mudassir's LinkedIn", type: "Text Post", owner: "Saqlain", day: 1, purpose: "Founder voice on data sovereignty. GCs trust CEO on security.", angle: "Story hook: 'A GC told me: If you can't meet our security standards, we can't proceed. 57% say the same.'", postedOn: "Mudassir's personal profile" },
      { platform: "LinkedIn Company Page", type: "Text Post", owner: "Saqlain", day: 1, purpose: "Official stance on data sovereignty.", angle: "Product-focused: 'Deployed in your cloud. Data never leaves.'", postedOn: "Paralegent AI company page" },
      { platform: "Twitter/X", type: "Thread (5 tweets)", owner: "Saqlain", day: 1, purpose: "Legal tech conversation. Data sovereignty thread.", angle: "Thread: 'Every AI contract tool is SaaS. Here's why that's a problem for legal teams. 🧵'", postedOn: "@paralegentai" },
      { platform: "Quora", type: "Answer (600 words)", owner: "Saqlain", day: 1, purpose: "AI engine feed. Answer data safety question.", angle: "'Is AI contract review safe for confidential documents?' Genuine answer.", postedOn: "Quora" },
      { platform: "TikTok", type: "Caption (for Short)", owner: "Asad", day: 3, purpose: "Discovery.", angle: "'Your SaaS AI tool has access to every contract you've ever reviewed. Should it?'", postedOn: "@paralegentai" },
    ],
    videoLong: {
      title: "Where Do Your Contracts Go? SaaS vs Customer-Cloud AI (Data Sovereignty Explained)",
      purpose: "CIOs search YouTube for security evaluations. Visual architecture comparison builds trust.",
      angle: "Side-by-side: SaaS data flow (your contract → vendor servers → vendor LLM → results) vs Customer-cloud (your contract → your cloud → your LLM → results, never leaves).",
      duration: "5-7 min",
      owner: "Asad",
      day: 2,
    },
    shorts: [
      { title: "Your Contract Data Never Leaves Your Cloud. Here's How.", angle: "30-sec architecture animation. Your cloud, your LLM, your data.", owner: "Asad", day: 3 },
      { title: "SaaS vs Your Cloud: Where Does Your Contract Data Actually Go?", angle: "Split screen comparison. SaaS = vendor servers. Customer-cloud = your environment.", owner: "Asad", day: 3 },
    ],
  },

  // ═══════════════════ WEEK 2 ═══════════════════
  {
    week: 2,
    blog: {
      number: 3,
      title: "Why 95% of AI Contract Review Pilots Fail (And How to Avoid It)",
      objection: "#3 — We tried something before and it failed",
      objectionPercent: "77%",
      keyword: "AI contract review pilot failure",
      hookFormula: "Story",
      hookExample: "77% of legal teams have experienced a failed tech implementation. 43% had more than one. Here's what the successful 23% did differently.",
      contentBlocks: ["Definition: What makes an AI pilot fail vs succeed", "Stats: 77% failed (Artificial Lawyer), 95% no measurable impact (MIT/Axiom), 38% too long, 36% too complicated", "Comparison Table: Failed pilot characteristics vs Successful pilot characteristics", "FAQ: 3 questions about implementation"],
      customerLanguage: ["implementation took too long", "too complicated", "didn't match actual needs", "the machine won't do the job autonomously"],
      buyerStage: "Consideration",
      assignedWriter: "Saqlain",
      words: 2500,
    },
    pieces: [
      { platform: "Mudassir's LinkedIn", type: "Text Post", owner: "Saqlain", day: 1, purpose: "Founder addressing the elephant in the room. Shows self-awareness.", angle: "Story: '77% of legal teams have been burned by failed tech. We built our implementation to be different. Here's how.'", postedOn: "Mudassir's personal profile" },
      { platform: "LinkedIn Company Page", type: "Text Post", owner: "Saqlain", day: 1, purpose: "Official: our implementation methodology.", angle: "8-10 weeks, phased, clear success criteria.", postedOn: "Paralegent AI company page" },
      { platform: "Twitter/X", type: "Thread (5 tweets)", owner: "Saqlain", day: 1, purpose: "Thread of failure stats + what works.", angle: "Data thread: each tweet = one failure reason + the fix.", postedOn: "@paralegentai" },
      { platform: "Quora", type: "Answer (600 words)", owner: "Saqlain", day: 1, purpose: "AI engine feed.", angle: "'Why do legal AI projects fail?' Honest answer with data.", postedOn: "Quora" },
      { platform: "Ali's LinkedIn", type: "Text Post", owner: "Asad", day: 1, purpose: "Technical perspective on implementation.", angle: "Value: 'The 3-phase implementation that prevents failure.'", postedOn: "Ali's personal profile" },
      { platform: "LinkedIn Carousel", type: "7 slides", owner: "Asad", day: 1, purpose: "Visual: failed vs successful pilot comparison.", angle: "Slide 1: '95% of AI pilots fail.' Slides: why they fail → what works → our approach.", postedOn: "Ali's personal profile" },
      { platform: "Facebook", type: "Text Post", owner: "Asad", day: 1, purpose: "Presence.", angle: "Short + link.", postedOn: "Paralegent AI FB page" },
      { platform: "Instagram", type: "Carousel + Caption", owner: "Asad", day: 1, purpose: "Visual failure stats.", angle: "Infographic style.", postedOn: "@paralegentai" },
      { platform: "TikTok", type: "Caption (for Short)", owner: "Asad", day: 3, purpose: "Discovery.", angle: "'95% of AI pilots fail. Here's why.'", postedOn: "@paralegentai" },
    ],
    videoLong: {
      title: "Why 95% of Legal AI Pilots Fail — And the Implementation That Works",
      purpose: "Address the burned buyer. Show we understand their past pain.",
      angle: "NOT promotional. Genuine analysis of failure reasons + the structured approach that works.",
      duration: "6-8 min",
      owner: "Asad",
      day: 2,
    },
    shorts: [
      { title: "77% of Legal Teams Had a Failed Tech Implementation", angle: "Stats cascade: 77% failed → 43% more than once → 23% left their jobs. Shock value.", owner: "Asad", day: 3 },
      { title: "The 3 Reasons AI Pilots Fail (38% Too Long, 36% Too Complex, 33% Wrong Fit)", angle: "Quick data breakdown. Each reason in 15 seconds.", owner: "Asad", day: 3 },
    ],
  },

  {
    week: 2,
    blog: {
      number: 4,
      title: "AI Contract Review ROI: The Real Numbers for Enterprise Legal Teams",
      objection: "#4 — Where's the ROI? I can't measure it",
      objectionPercent: "40%",
      keyword: "AI contract review ROI",
      hookFormula: "Value",
      hookExample: "30 hours → 30 minutes. $100K/month → $60-80K once. Only 7% of legal departments track AI ROI. Here's the math they should be doing.",
      contentBlocks: ["Definition: How to calculate contract review ROI", "Stats: 3.1 hrs/contract (LegalOn), 9.2% revenue loss (WCC), 59% no savings yet (ACC)", "Comparison Table: Manual vs SaaS AI vs Customer-Cloud TCO over 3 years", "FAQ: 3 questions about cost and ROI"],
      customerLanguage: ["show me the numbers", "no noticeable savings yet", "can't justify the investment", "payback period"],
      buyerStage: "Consideration → Decision",
      assignedWriter: "Asad",
      words: 2000,
    },
    pieces: [
      { platform: "Ali's LinkedIn", type: "Text Post", owner: "Asad", day: 1, purpose: "Ali speaks to VP Legal Ops (ROI-focused buyer).", angle: "Value hook: 'Only 7% of legal departments use KPIs to track AI value. Here's what they measure.'", postedOn: "Ali's personal profile" },
      { platform: "LinkedIn Carousel", type: "7 slides", owner: "Asad", day: 1, purpose: "Visual ROI math. Scannable numbers.", angle: "Slide 1: '$100K/month question.' Slides: manual cost → AI cost → TCO table → payback. Slide 7: CTA.", postedOn: "Ali's personal profile" },
      { platform: "Facebook", type: "Text Post", owner: "Asad", day: 1, purpose: "Presence.", angle: "Short + link.", postedOn: "Paralegent AI FB page" },
      { platform: "Instagram", type: "Carousel + Caption", owner: "Asad", day: 1, purpose: "Visual cost comparison.", angle: "Before/after numbers.", postedOn: "@paralegentai" },
      { platform: "Mudassir's LinkedIn", type: "Text Post", owner: "Saqlain", day: 1, purpose: "Founder on ROI credibility.", angle: "Curiosity: '59% of in-house attorneys report no savings from AI. Here's why — and what to measure instead.'", postedOn: "Mudassir's personal profile" },
      { platform: "LinkedIn Company Page", type: "Text Post", owner: "Saqlain", day: 1, purpose: "Official ROI messaging.", angle: "Month 1 payback. Real math.", postedOn: "Paralegent AI company page" },
      { platform: "Twitter/X", type: "Thread (5 tweets)", owner: "Saqlain", day: 1, purpose: "ROI data thread.", angle: "Each tweet = one number. $100K → $60-80K. 30 hrs → 30 min. 15 days → 2 days.", postedOn: "@paralegentai" },
      { platform: "Quora", type: "Answer (600 words)", owner: "Saqlain", day: 1, purpose: "AI engine feed.", angle: "'What is the ROI of AI contract review?' With real math.", postedOn: "Quora" },
      { platform: "TikTok", type: "Caption (for Short)", owner: "Asad", day: 3, purpose: "Discovery.", angle: "'$100K/month in attorney time. Or $60-80K once. You choose.'", postedOn: "@paralegentai" },
    ],
    videoLong: {
      title: "The Real ROI of AI Contract Review (With Actual Numbers)",
      purpose: "CFO-friendly. Visual math that gets forwarded from GC to CFO.",
      angle: "Calculator style: input your numbers → see your savings. TCO comparison animated.",
      duration: "5-6 min",
      owner: "Asad",
      day: 2,
    },
    shorts: [
      { title: "$100K/Month in Attorney Time — or $60-80K Once", angle: "Split screen: money burning monthly vs one-time investment. Visual impact.", owner: "Asad", day: 3 },
      { title: "Only 7% of Legal Teams Track AI ROI. Here's What to Measure.", angle: "Quick list: review time, SLA days, consistency score, cost per contract.", owner: "Asad", day: 3 },
    ],
  },

  // ═══════════════════ WEEKS 3-8 (structure only — same format) ═══════════════════
  // Week 3: Blog #5 (On-Premise BLUE OCEAN) + Blog #6 (How Redlining Works)
  // Week 4: Blog #7 (Complete Guide) + Blog #8 (Paralegent vs Manual)
  // Week 5: Blog #9 (10 Best Tools) + Blog #10 (Paralegent vs LegalOn)
  // Week 6: Blog #11 (ChatGPT vs Dedicated) + Blog #12 (Multi-Agent vs Single LLM)
  // Week 7: Blog #13 (Paralegent vs Spellbook) + Blog #14 (Is AI Safe? GDPR)
  // Week 8: Blog #15 (Enterprise Buyer's Guide) + Blog #16 (What Is a Rulebook?)
  // TODO: Build same detailed structure for weeks 3-8
];

// Day labels for the schedule
export const dayLabels = {
  1: "SURGE DAY — Blog publishes + all text posts + carousel",
  2: "VIDEO DAY — YouTube long video + thumbnail + upload",
  3: "SHORTS DAY — 2 Shorts + repost to IG Reel/TikTok/FB Video",
  4: "BUFFER — LinkedIn Article / Newsletter / Medium / Overflow",
  5: "BUFFER — Prep next week / Extra content / Catch up",
};
