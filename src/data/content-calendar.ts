// ============================================================
// 8-WEEK CONTENT CALENDAR — System Design (Structure Before Content)
//
// KEY PRINCIPLE: Both blogs publish SAME day. Both people work in PARALLEL.
// Each person handles BOTH blogs on THEIR platforms:
//   Saqlain → Mudassir's LinkedIn, Company Page, Twitter, Quora, Medium, Reddit, Strapi
//   Asad → Ali's LinkedIn, YouTube, Instagram, TikTok, Facebook, Carousel design
//
// Day 1: SURGE (both blogs publish + all text posts)
// Day 2: VIDEO (both long videos)
// Day 3: SHORTS (all 4 Shorts + reposts)
// Day 4-5: BUFFER (Articles, Newsletter, Medium, prep)
// ============================================================

export interface WeekPlan {
  week: number;
  startDate: string;
  blogA: BlogInfo;   // Saqlain writes this blog
  blogB: BlogInfo;   // Asad writes this blog
  saqlainDay1: TaskItem[];  // What Saqlain does Day 1
  asadDay1: TaskItem[];     // What Asad does Day 1
  saqlainDay2: TaskItem[];
  asadDay2: TaskItem[];
  saqlainDay3: TaskItem[];
  asadDay3: TaskItem[];
  saqlainDay4: TaskItem[];
  asadDay4: TaskItem[];
  saqlainDay5: TaskItem[];
  asadDay5: TaskItem[];
}

export interface BlogInfo {
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
  words: number;
}

export interface TaskItem {
  task: string;
  forBlog: number;  // which blog number this serves
  time: string;
  platform: string;
  purpose: string;
  angle: string;
}

export const weeklyPlans: WeekPlan[] = [
  // ═══════════════════ WEEK 1: April 9-13 ═══════════════════
  {
    week: 1,
    startDate: "April 9 (Wed)",
    blogA: {
      number: 1,
      title: "Can Your Legal Team Trust AI Contract Review? The Accuracy Question Answered",
      objection: "#1 — I don't trust the AI output",
      objectionPercent: "60%",
      keyword: "AI contract review accuracy",
      hookFormula: "Curiosity",
      hookExample: "60% of legal teams don't trust AI output. They're right to be skeptical — here's what changes their mind.",
      contentBlocks: ["Definition: What is AI accuracy in contract review", "Stats: 60% trust (LawNext), 75% hallucination (ABA), 600+ cases", "Comparison Table: Generic AI vs Specialized Domain Analysts", "FAQ: 3 questions about accuracy"],
      customerLanguage: ["professional judgment", "hallucination concerns", "undetected inconsistencies", "can't afford errors"],
      buyerStage: "Awareness → Consideration",
      words: 2500,
    },
    blogB: {
      number: 2,
      title: "Data Sovereignty in Legal AI: Why Your Contracts Should Never Leave Your Cloud",
      objection: "#2 — My data cannot leave our environment",
      objectionPercent: "57%",
      keyword: "data sovereignty legal AI",
      hookFormula: "Contrarian",
      hookExample: "Every AI contract review tool on the market is SaaS. Your contracts sit on someone else's servers. There's a better way.",
      contentBlocks: ["Definition: What is data sovereignty in legal AI", "Stats: 57% cite data privacy (LawNext), 75% ethical concern (Deloitte)", "Comparison Table: SaaS vs Customer-Cloud", "FAQ: 3 questions about data safety"],
      customerLanguage: ["can't send our data to another vendor", "security and information governance standards", "privileged client data", "attorney-client privilege"],
      buyerStage: "Consideration",
      words: 2500,
    },

    // ── DAY 1: SURGE ── Saqlain handles both blogs on HIS platforms
    saqlainDay1: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Respond to comments, comment on 10 GC/legal ops posts, engage influencers, check DMs", angle: "Substantive comments using buyer language" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Browse r/legaltech, upvote, comment helpfully", angle: "Build karma, no promotion" },
      { task: "Publish Blog #1 to Strapi", forBlog: 1, time: "30 min", platform: "Website", purpose: "Blog #1 goes LIVE — triggers all other posts", angle: "Format, images, schema, JSON-LD" },
      { task: "Post Blog #1 on Mudassir's LinkedIn", forBlog: 1, time: "20 min", platform: "Mudassir's LinkedIn", purpose: "Founder credibility on trust. GCs see CEO addressing THEIR #1 concern.", angle: "Curiosity hook: '60% of legal teams don't trust AI output...'" },
      { task: "Post Blog #1 on Company Page", forBlog: 1, time: "20 min", platform: "Company Page", purpose: "Official product credibility", angle: "Product-focused: 'How confidence scoring solves the trust problem'" },
      { task: "Post Blog #1 Twitter thread", forBlog: 1, time: "30 min", platform: "Twitter/X", purpose: "Legal tech conversation. Data-heavy thread.", angle: "One stat per tweet. Thread of facts." },
      { task: "Post Blog #1 Quora answer", forBlog: 1, time: "30 min", platform: "Quora", purpose: "Feeds AI engines. ChatGPT/Gemini cite Quora.", angle: "'Can AI accurately review contracts?' Genuine 600-word answer." },
      { task: "Post Blog #2 on Mudassir's LinkedIn", forBlog: 2, time: "20 min", platform: "Mudassir's LinkedIn", purpose: "Founder voice on data sovereignty. GCs trust CEO on security.", angle: "Story hook: 'A GC told me: If you can't meet our security standards, we can't proceed.'" },
      { task: "Post Blog #2 on Company Page", forBlog: 2, time: "20 min", platform: "Company Page", purpose: "Official data sovereignty stance", angle: "'Deployed in your cloud. Data never leaves.'" },
      { task: "Post Blog #2 Twitter thread", forBlog: 2, time: "30 min", platform: "Twitter/X", purpose: "Data sovereignty thread", angle: "'Every AI contract tool is SaaS. Here's why that's a problem. 🧵'" },
      { task: "Post Blog #2 Quora answer", forBlog: 2, time: "30 min", platform: "Quora", purpose: "AI engine feed", angle: "'Is AI contract review safe for confidential documents?' Genuine answer." },
    ],
    // Saqlain Day 1 Total: 2h + 30m + 30m + 20m + 20m + 30m + 30m + 20m + 20m + 30m + 30m = 6 hrs 20 min ✓

    // ── DAY 1: SURGE ── Asad handles both blogs on HIS platforms
    asadDay1: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Respond to comments, comment on 10 posts, engage influencers, check DMs", angle: "Substantive comments on legal ops / CIO posts" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Browse, upvote, comment", angle: "Build karma" },
      { task: "Post Blog #2 on Ali's LinkedIn", forBlog: 2, time: "20 min", platform: "Ali's LinkedIn", purpose: "Ali's profile speaks to technical buyer (CIO/CISO).", angle: "Contrarian: 'Every contract AI is SaaS. Here's the problem.'" },
      { task: "Design Blog #2 LinkedIn carousel (7 slides)", forBlog: 2, time: "1 hr", platform: "Ali's LinkedIn", purpose: "585% more engagement. Visual architecture comparison.", angle: "Slide 1: 'Where do your contracts go?' Slides: SaaS flow vs your-cloud flow." },
      { task: "Adapt Blog #2 carousel → IG", forBlog: 2, time: "30 min", platform: "Instagram", purpose: "Visual platform. Architecture diagram as carousel.", angle: "SaaS vs Your Cloud visual." },
      { task: "Post Blog #2 Facebook", forBlog: 2, time: "20 min", platform: "Facebook", purpose: "Presence. Direct link.", angle: "Short version + link." },
      { task: "Post Blog #2 Instagram caption", forBlog: 2, time: "20 min", platform: "Instagram", purpose: "Drive to link in bio.", angle: "Data-visual angle." },
      { task: "Post Blog #2 TikTok", forBlog: 2, time: "20 min", platform: "TikTok", purpose: "Discovery.", angle: "'Your SaaS AI has access to every contract you've reviewed. Should it?'" },
      { task: "Post Blog #1 on Ali's LinkedIn", forBlog: 1, time: "20 min", platform: "Ali's LinkedIn", purpose: "Second profile = 2x reach. Different angle from Mudassir's.", angle: "Value: 'How to evaluate AI accuracy (3 questions nobody asks).'" },
      { task: "Design Blog #1 LinkedIn carousel (7 slides)", forBlog: 1, time: "1 hr", platform: "Ali's LinkedIn", purpose: "Visual trust breakdown.", angle: "Slide 1: bold stat. Slides: generic AI problems → specialized solution." },
      { task: "Adapt Blog #1 carousel → IG", forBlog: 1, time: "30 min", platform: "Instagram", purpose: "Visual.", angle: "Key stats as graphics." },
      { task: "Post Blog #1 Facebook", forBlog: 1, time: "20 min", platform: "Facebook", purpose: "Presence.", angle: "Short + link." },
      { task: "Post Blog #1 Instagram caption", forBlog: 1, time: "20 min", platform: "Instagram", purpose: "Drive to bio.", angle: "Trust angle." },
      { task: "Post Blog #1 TikTok", forBlog: 1, time: "20 min", platform: "TikTok", purpose: "Discovery.", angle: "'Did you know 75% of lawyers worry about AI hallucination?'" },
    ],
    // Asad Day 1 Total: 2h + 30m + 20m + 1h + 30m + 20m + 20m + 20m + 20m + 1h + 30m + 20m + 20m + 20m = 8 hrs 10 min ✓

    // ── DAY 2: VIDEO ── Each makes 1 long video for their blog
    saqlainDay2: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Daily engagement", angle: "" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Daily", angle: "" },
      { task: "Make Blog #1 YouTube Long Video (Veo 3 + ElevenLabs)", forBlog: 1, time: "3 hrs", platform: "YouTube", purpose: "29% of buyers search YouTube. Show confidence scoring working — builds trust visually.", angle: "Show product: upload → findings → confidence scores → rationale. 'Watch how every finding is explained.'" },
      { task: "Make Blog #1 YouTube thumbnail", forBlog: 1, time: "30 min", platform: "YouTube", purpose: "Thumbnail drives clicks (89% of top videos use custom)", angle: "High contrast, text: 'Can You Trust AI Contract Review?'" },
      { task: "Upload Blog #1 video to YouTube", forBlog: 1, time: "30 min", platform: "YouTube", purpose: "SEO: keyword in title, description, tags, pinned comment", angle: "Title: 'Can You Trust AI Contract Review? The Accuracy Question'" },
    ],
    // Saqlain Day 2 Total: 2h + 30m + 3h + 30m + 30m = 6 hrs 30 min (2.5 hrs buffer)

    asadDay2: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Daily engagement", angle: "" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Daily", angle: "" },
      { task: "Make Blog #2 YouTube Long Video (Veo 3 + ElevenLabs)", forBlog: 2, time: "3 hrs", platform: "YouTube", purpose: "CIOs search YouTube for security evaluations. Visual architecture comparison.", angle: "Side-by-side: SaaS data flow vs Customer-cloud. 'Your data never leaves.'" },
      { task: "Make Blog #2 YouTube thumbnail", forBlog: 2, time: "30 min", platform: "YouTube", purpose: "Thumbnail", angle: "Split screen: SaaS cloud vs Your cloud" },
      { task: "Upload Blog #2 video to YouTube", forBlog: 2, time: "30 min", platform: "YouTube", purpose: "SEO", angle: "Title: 'Where Do Your Contracts Go? SaaS vs Customer-Cloud AI'" },
    ],
    // Asad Day 2 Total: 2h + 30m + 3h + 30m + 30m = 6 hrs 30 min (2.5 hrs buffer)

    // ── DAY 3: SHORTS ── Each makes 2 Shorts + reposts for BOTH blogs
    saqlainDay3: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Daily engagement", angle: "" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Daily", angle: "" },
      { task: "Make Blog #1 Short #1 (Veo 3)", forBlog: 1, time: "2 hrs", platform: "YouTube", purpose: "Discovery — 80% views from non-subscribers", angle: "'60% of Lawyers Don't Trust AI. Here's Why They Should.'" },
      { task: "Make Blog #1 Short #2 (Veo 3)", forBlog: 1, time: "2 hrs", platform: "YouTube", purpose: "Different angle from Short #1", angle: "'What Confidence Scoring Actually Looks Like in Contract Review'" },
      { task: "Upload both Shorts to YouTube", forBlog: 1, time: "30 min", platform: "YouTube", purpose: "Upload + titles + descriptions", angle: "" },
    ],
    // Saqlain Day 3 Total: 2h + 30m + 2h + 2h + 30m = 7 hrs (2 hrs buffer)

    asadDay3: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Daily engagement", angle: "" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Daily", angle: "" },
      { task: "Make Blog #2 Short #1 (Veo 3)", forBlog: 2, time: "2 hrs", platform: "YouTube", purpose: "Discovery", angle: "'Your Contract Data Never Leaves Your Cloud. Here's How.'" },
      { task: "Make Blog #2 Short #2 (Veo 3)", forBlog: 2, time: "2 hrs", platform: "YouTube", purpose: "Different angle", angle: "'SaaS vs Your Cloud: Where Does Your Contract Data Actually Go?'" },
      { task: "Upload both Shorts + Repost all 4 Shorts (Blog #1 + #2) → IG Reel + TikTok + FB Video", forBlog: 0, time: "2 hrs", platform: "IG/TikTok/FB", purpose: "Repost all 4 Shorts across platforms (15 min each × 4 Shorts × 3 platforms = ~12 reposts)", angle: "Platform-specific captions for each" },
    ],
    // Asad Day 3 Total: 2h + 30m + 2h + 2h + 2h = 8 hrs 30 min ✓

    // ── DAY 4: BUFFER ──
    saqlainDay4: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Daily", angle: "" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Daily", angle: "" },
      { task: "Write + Publish LinkedIn Article on Mudassir's profile (adapt from Blog #1)", forBlog: 1, time: "3 hrs", platform: "Mudassir's LinkedIn", purpose: "LinkedIn Articles are Google-indexed + cited by AI engines (50-66% of LinkedIn AI citations)", angle: "Adapted from blog, not copy-paste. Newsletter voice." },
      { task: "LinkedIn Newsletter 'The Contract Intelligence Brief' (biweekly — if applicable)", forBlog: 1, time: "2 hrs", platform: "Mudassir's LinkedIn", purpose: "40-60% open rate. Triple notification bypasses algorithm.", angle: "Topic: 'Why 60% of Legal Teams Don't Trust AI — And What Changes Their Mind'" },
      { task: "Medium republish of older blog (if any from previous weeks)", forBlog: 0, time: "15 min", platform: "Medium", purpose: "DA 96 backlink", angle: "Canonical URL to website" },
    ],
    // Saqlain Day 4 Total: 2h + 30m + 3h + 2h + 15m = 7 hrs 45 min ✓

    asadDay4: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Daily", angle: "" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Daily", angle: "" },
      { task: "Repost remaining Shorts to platforms (if not finished Day 3)", forBlog: 0, time: "1 hr", platform: "IG/TikTok/FB", purpose: "Catch up on any remaining reposts", angle: "" },
      { task: "Extra YouTube Short from Blog #2 (bonus content)", forBlog: 2, time: "2 hrs", platform: "YouTube", purpose: "Extra discovery content", angle: "Different angle from Day 3 Shorts" },
      { task: "Review next week's content package from us (when available)", forBlog: 0, time: "2 hrs", platform: "—", purpose: "Prepare for next week's execution", angle: "Read briefs, understand objectives, plan execution" },
    ],
    // Asad Day 4 Total: 2h + 30m + 1h + 2h + 2h = 7 hrs 30 min ✓

    // ── DAY 5: BUFFER ──
    saqlainDay5: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Daily", angle: "" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Daily", angle: "" },
      { task: "Review next week's content package from us", forBlog: 0, time: "2 hrs", platform: "—", purpose: "Prepare for next week", angle: "Read Blog #3 brief, understand pilot failure objection" },
      { task: "Extra engagement — comment on high-performing posts from this week", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Boost posts that are gaining traction", angle: "Respond to every comment, engage with sharers" },
      { task: "Catch up on any missed posts or overflow", forBlog: 0, time: "2 hrs", platform: "Various", purpose: "Buffer", angle: "" },
    ],
    // Saqlain Day 5 Total: 2h + 30m + 2h + 2h + 2h = 8 hrs 30 min ✓

    asadDay5: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Daily", angle: "" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Daily", angle: "" },
      { task: "Review next week's content package from us", forBlog: 0, time: "2 hrs", platform: "—", purpose: "Prepare for next week", angle: "Read Blog #4 brief, understand ROI objection" },
      { task: "Extra YouTube Short or Reel (bonus content)", forBlog: 0, time: "2 hrs", platform: "YouTube/IG", purpose: "Extra content", angle: "Trending angle or behind-the-scenes" },
      { task: "Catch up on any missed posts or overflow", forBlog: 0, time: "2 hrs", platform: "Various", purpose: "Buffer", angle: "" },
    ],
    // Asad Day 5 Total: 2h + 30m + 2h + 2h + 2h = 8 hrs 30 min ✓
  },

  // ═══════════════════ WEEK 2: April 14-18 ═══════════════════
  {
    week: 2,
    startDate: "April 14 (Mon)",
    blogA: {
      number: 3,
      title: "Why 95% of AI Contract Review Pilots Fail (And How to Avoid It)",
      objection: "#3 — We tried something before and it failed",
      objectionPercent: "77%",
      keyword: "AI contract review pilot failure",
      hookFormula: "Story",
      hookExample: "77% of legal teams have experienced a failed tech implementation. 43% had more than one. Here's what the successful 23% did differently.",
      contentBlocks: ["Definition: What makes an AI pilot fail vs succeed", "Stats: 77% failed (Artificial Lawyer), 95% no impact (MIT/Axiom)", "Comparison Table: Failed vs Successful pilot characteristics", "FAQ: 3 questions about implementation"],
      customerLanguage: ["implementation took too long", "too complicated", "didn't match actual needs"],
      buyerStage: "Consideration",
      words: 2500,
    },
    blogB: {
      number: 4,
      title: "AI Contract Review ROI: The Real Numbers for Enterprise Legal Teams",
      objection: "#4 — Where's the ROI? I can't measure it",
      objectionPercent: "40%",
      keyword: "AI contract review ROI",
      hookFormula: "Value",
      hookExample: "30 hours → 30 minutes. $100K/month → $60-80K once. Only 7% of legal departments track AI ROI. Here's the math they should be doing.",
      contentBlocks: ["Definition: How to calculate contract review ROI", "Stats: 3.1 hrs/contract (LegalOn), 9.2% revenue loss (WCC)", "Comparison Table: Manual vs SaaS AI vs Customer-Cloud TCO 3 years", "FAQ: 3 questions about cost"],
      customerLanguage: ["show me the numbers", "no noticeable savings yet", "payback period"],
      buyerStage: "Consideration → Decision",
      words: 2000,
    },

    // Week 2 follows SAME day structure as Week 1
    // Saqlain: Blog #3 on his platforms + Blog #4 cross-posts
    // Asad: Blog #4 on his platforms + Blog #3 cross-posts
    saqlainDay1: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Daily", angle: "" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Daily", angle: "" },
      { task: "Publish Blog #3 to Strapi", forBlog: 3, time: "30 min", platform: "Website", purpose: "Blog #3 goes LIVE", angle: "" },
      { task: "Post Blog #3 on Mudassir's LinkedIn", forBlog: 3, time: "20 min", platform: "Mudassir's LinkedIn", purpose: "Founder addressing the elephant in the room — shows self-awareness", angle: "Story: '77% of legal teams have been burned by failed tech. We built differently.'" },
      { task: "Post Blog #3 on Company Page", forBlog: 3, time: "20 min", platform: "Company Page", purpose: "Official: our implementation methodology", angle: "8-10 weeks, phased, clear success criteria" },
      { task: "Post Blog #3 Twitter thread", forBlog: 3, time: "30 min", platform: "Twitter/X", purpose: "Failure stats thread", angle: "Each tweet = one failure reason + the fix" },
      { task: "Post Blog #3 Quora answer", forBlog: 3, time: "30 min", platform: "Quora", purpose: "AI engine feed", angle: "'Why do legal AI projects fail?' Honest answer." },
      { task: "Post Blog #4 on Mudassir's LinkedIn", forBlog: 4, time: "20 min", platform: "Mudassir's LinkedIn", purpose: "Founder on ROI credibility", angle: "Curiosity: '59% report no savings from AI. Here's why — and what to measure.'" },
      { task: "Post Blog #4 on Company Page", forBlog: 4, time: "20 min", platform: "Company Page", purpose: "Official ROI messaging", angle: "Month 1 payback. Real math." },
      { task: "Post Blog #4 Twitter thread", forBlog: 4, time: "30 min", platform: "Twitter/X", purpose: "ROI data thread", angle: "Each tweet = one number. $100K → $60-80K." },
      { task: "Post Blog #4 Quora answer", forBlog: 4, time: "30 min", platform: "Quora", purpose: "AI engine feed", angle: "'What is the ROI of AI contract review?' Real math." },
    ],

    asadDay1: [
      { task: "Engagement routine", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Daily", angle: "" },
      { task: "Reddit engagement", forBlog: 0, time: "30 min", platform: "Reddit", purpose: "Daily", angle: "" },
      { task: "Post Blog #4 on Ali's LinkedIn", forBlog: 4, time: "20 min", platform: "Ali's LinkedIn", purpose: "Ali speaks to VP Legal Ops (ROI buyer)", angle: "Value: 'Only 7% track AI ROI. Here's what to measure.'" },
      { task: "Design Blog #4 LinkedIn carousel", forBlog: 4, time: "1 hr", platform: "Ali's LinkedIn", purpose: "Visual ROI math. Scannable numbers.", angle: "Slide 1: '$100K/month question.' Slides: cost breakdown → payback." },
      { task: "Adapt Blog #4 carousel → IG", forBlog: 4, time: "30 min", platform: "Instagram", purpose: "Visual cost comparison", angle: "Before/after numbers" },
      { task: "Post Blog #4 Facebook", forBlog: 4, time: "20 min", platform: "Facebook", purpose: "Presence", angle: "Short + link" },
      { task: "Post Blog #4 Instagram caption", forBlog: 4, time: "20 min", platform: "Instagram", purpose: "Bio link", angle: "ROI visual" },
      { task: "Post Blog #4 TikTok", forBlog: 4, time: "20 min", platform: "TikTok", purpose: "Discovery", angle: "'$100K/month in attorney time. Or $60-80K once. You choose.'" },
      { task: "Post Blog #3 on Ali's LinkedIn", forBlog: 3, time: "20 min", platform: "Ali's LinkedIn", purpose: "Technical implementation perspective", angle: "Value: 'The 3-phase implementation that prevents failure.'" },
      { task: "Design Blog #3 LinkedIn carousel", forBlog: 3, time: "1 hr", platform: "Ali's LinkedIn", purpose: "Visual: failed vs successful pilot", angle: "Slide 1: '95% fail.' Slides: why → what works → our approach." },
      { task: "Adapt Blog #3 carousel → IG", forBlog: 3, time: "30 min", platform: "Instagram", purpose: "Visual failure stats", angle: "Infographic style" },
      { task: "Post Blog #3 Facebook", forBlog: 3, time: "20 min", platform: "Facebook", purpose: "Presence", angle: "Short + link" },
      { task: "Post Blog #3 Instagram caption", forBlog: 3, time: "20 min", platform: "Instagram", purpose: "Bio link", angle: "Failure stats visual" },
      { task: "Post Blog #3 TikTok", forBlog: 3, time: "20 min", platform: "TikTok", purpose: "Discovery", angle: "'95% of AI pilots fail. Here's why.'" },
    ],

    // Days 2-5 follow same pattern as Week 1
    saqlainDay2: [
      { task: "Engagement + Reddit", forBlog: 0, time: "2.5 hrs", platform: "LinkedIn/Reddit", purpose: "Daily", angle: "" },
      { task: "Make Blog #3 YouTube Long Video (Veo 3 + ElevenLabs)", forBlog: 3, time: "3 hrs", platform: "YouTube", purpose: "Address burned buyer. Show structured implementation.", angle: "NOT promotional. Genuine failure analysis + what works." },
      { task: "Thumbnail + Upload", forBlog: 3, time: "1 hr", platform: "YouTube", purpose: "SEO", angle: "Title: 'Why 95% of Legal AI Pilots Fail'" },
    ],
    asadDay2: [
      { task: "Engagement + Reddit", forBlog: 0, time: "2.5 hrs", platform: "LinkedIn/Reddit", purpose: "Daily", angle: "" },
      { task: "Make Blog #4 YouTube Long Video (Veo 3 + ElevenLabs)", forBlog: 4, time: "3 hrs", platform: "YouTube", purpose: "CFO-friendly. Visual ROI math.", angle: "Calculator style: input numbers → see savings. TCO comparison animated." },
      { task: "Thumbnail + Upload", forBlog: 4, time: "1 hr", platform: "YouTube", purpose: "SEO", angle: "Title: 'The Real ROI of AI Contract Review'" },
    ],
    saqlainDay3: [
      { task: "Engagement + Reddit", forBlog: 0, time: "2.5 hrs", platform: "LinkedIn/Reddit", purpose: "Daily", angle: "" },
      { task: "Make Blog #3 Short #1 (Veo 3)", forBlog: 3, time: "2 hrs", platform: "YouTube", purpose: "Discovery", angle: "'77% Had a Failed Tech Implementation' — shock stat" },
      { task: "Make Blog #3 Short #2 (Veo 3)", forBlog: 3, time: "2 hrs", platform: "YouTube", purpose: "Different angle", angle: "'3 Reasons AI Pilots Fail (38% Too Long, 36% Too Complex, 33% Wrong Fit)'" },
      { task: "Upload Shorts", forBlog: 3, time: "30 min", platform: "YouTube", purpose: "Upload", angle: "" },
    ],
    asadDay3: [
      { task: "Engagement + Reddit", forBlog: 0, time: "2.5 hrs", platform: "LinkedIn/Reddit", purpose: "Daily", angle: "" },
      { task: "Make Blog #4 Short #1 (Veo 3)", forBlog: 4, time: "2 hrs", platform: "YouTube", purpose: "Discovery", angle: "'$100K/Month in Attorney Time — or $60-80K Once'" },
      { task: "Make Blog #4 Short #2 (Veo 3)", forBlog: 4, time: "2 hrs", platform: "YouTube", purpose: "Different angle", angle: "'Only 7% of Legal Teams Track AI ROI. Here's What to Measure.'" },
      { task: "Repost all 4 Shorts → IG/TikTok/FB", forBlog: 0, time: "2 hrs", platform: "IG/TikTok/FB", purpose: "Reposts", angle: "Platform captions" },
    ],
    saqlainDay4: [
      { task: "Engagement + Reddit", forBlog: 0, time: "2.5 hrs", platform: "LinkedIn/Reddit", purpose: "Daily", angle: "" },
      { task: "LinkedIn Article (adapt from Blog #3)", forBlog: 3, time: "3 hrs", platform: "Mudassir's LinkedIn", purpose: "Google-indexed + AI-cited", angle: "Why pilots fail — founder perspective" },
      { task: "Medium republish Blog #1 (2 weeks after April 9)", forBlog: 1, time: "15 min", platform: "Medium", purpose: "DA 96 backlink", angle: "Canonical to website" },
      { task: "Buffer / overflow", forBlog: 0, time: "2 hrs", platform: "Various", purpose: "Catch up", angle: "" },
    ],
    asadDay4: [
      { task: "Engagement + Reddit", forBlog: 0, time: "2.5 hrs", platform: "LinkedIn/Reddit", purpose: "Daily", angle: "" },
      { task: "Extra Short or Reel", forBlog: 0, time: "2 hrs", platform: "YouTube/IG", purpose: "Extra content", angle: "Trending or bonus angle" },
      { task: "Review next week's content package", forBlog: 0, time: "2 hrs", platform: "—", purpose: "Prep", angle: "" },
      { task: "Buffer / overflow", forBlog: 0, time: "1.5 hrs", platform: "Various", purpose: "Catch up", angle: "" },
    ],
    saqlainDay5: [
      { task: "Engagement + Reddit", forBlog: 0, time: "2.5 hrs", platform: "LinkedIn/Reddit", purpose: "Daily", angle: "" },
      { task: "Review next week's content package", forBlog: 0, time: "2 hrs", platform: "—", purpose: "Prep Blog #5", angle: "On-premise BLUE OCEAN" },
      { task: "Extra engagement on high-performing posts", forBlog: 0, time: "2 hrs", platform: "LinkedIn", purpose: "Boost traction", angle: "" },
      { task: "Buffer / overflow", forBlog: 0, time: "2 hrs", platform: "Various", purpose: "Catch up", angle: "" },
    ],
    asadDay5: [
      { task: "Engagement + Reddit", forBlog: 0, time: "2.5 hrs", platform: "LinkedIn/Reddit", purpose: "Daily", angle: "" },
      { task: "Review next week's content package", forBlog: 0, time: "2 hrs", platform: "—", purpose: "Prep Blog #6", angle: "How Redlining Works" },
      { task: "Extra Short or bonus content", forBlog: 0, time: "2 hrs", platform: "YouTube/IG", purpose: "Extra", angle: "" },
      { task: "Buffer / overflow", forBlog: 0, time: "2 hrs", platform: "Various", purpose: "Catch up", angle: "" },
    ],
  },
];

export const dayLabels = {
  1: "SURGE — Both blogs publish + all text posts + carousels (both people handle BOTH blogs on their platforms)",
  2: "VIDEO — Each person makes 1 YouTube long video for their blog",
  3: "SHORTS — Each person makes 2 Shorts + Asad reposts all to IG/TikTok/FB",
  4: "BUFFER — LinkedIn Article, Newsletter, Medium republish, overflow",
  5: "BUFFER — Prep next week, extra content, catch up",
};

export const hoursSummary = {
  saqlainDay1: "6 hrs 50 min",
  asadDay1: "7 hrs 30 min",
  saqlainDay2: "7 hrs 15 min",
  asadDay2: "6 hrs 30 min",
  saqlainDay3: "7 hrs",
  asadDay3: "9 hrs",
  saqlainDay4: "7 hrs",
  asadDay4: "7 hrs",
  saqlainDay5: "Light (buffer)",
  asadDay5: "Light (buffer)",
};

// Weeks 3-8 blog summaries (same daily pattern as Weeks 1-2)
export const weeks3to8 = [
  {
    week: 3, startDate: "April 21",
    saqlain: { num: 5, title: "On-Premise Contract AI: Deploy in Your Own Cloud", objection: "#2 deep — BLUE OCEAN", keyword: "on-premise contract AI (LOW comp)", hook: "Contrarian", words: 2500 },
    asad: { num: 6, title: "How AI Contract Redlining Works: From 30 Hours to 30 Minutes", objection: "Solution explanation", keyword: "AI contract redlining (9K+)", hook: "Value", words: 2500 },
    videoA: "How Customer-Cloud AI Deployment Actually Works",
    videoB: "Watch 18 Domain Analysts Review a Contract in Real Time",
    shorts: ["Your Data Path: Your Cloud → Your LLM → Your Results", "Every Other Tool: Vendor Cloud. Us: Your Cloud.", "30 Hours → 30 Minutes: Watch AI Redline a Contract", "GREEN, ORANGE, or RED? How AI Classifies Contract Risk"],
  },
  {
    week: 4, startDate: "April 28",
    saqlain: { num: 7, title: "The Complete Guide to AI Contract Review in 2026", objection: "Education + authority", keyword: "AI contract review software (15K+)", hook: "Value", words: 3500 },
    asad: { num: 8, title: "Paralegent vs Manual Contract Review: Time, Cost, and Accuracy", objection: "#4 ROI comparison", keyword: "AI vs manual contract review", hook: "Value", words: 2500 },
    videoA: "Everything You Need to Know About AI Contract Review in 2026",
    videoB: "AI vs Manual Contract Review: The Numbers Side by Side",
    shorts: ["52% Use GenAI. Only 39% See Results.", "9.2% of Revenue Lost to Bad Contracts", "200 Working Days Consumed by Contract Review", "3.1 Hours Per Contract × 500 = The Problem"],
  },
  {
    week: 5, startDate: "May 5",
    saqlain: { num: 9, title: "The 10 Best AI Contract Review Tools in 2026 (Compared)", objection: "Capture comparison traffic", keyword: "best AI contract review tools 2026 (3K+)", hook: "Value", words: 3000 },
    asad: { num: 10, title: "Paralegent vs LegalOn: Cloud-Deployed vs SaaS", objection: "Competitor comparison", keyword: "Paralegent vs LegalOn", hook: "Curiosity", words: 2500 },
    videoA: "We Ranked 10 AI Contract Review Tools — Here's What We Found",
    videoB: "Paralegent vs LegalOn: The Honest Comparison",
    shorts: ["We Ranked 10 Tools. #1 Surprised Us.", "Best Tool for Data Sovereignty? Only 1 Option.", "LegalOn's Biggest Limitation (57% Can't Accept)", "'Not Plug-and-Play' — The #1 G2 Complaint"],
  },
  {
    week: 6, startDate: "May 12",
    saqlain: { num: 11, title: "Can ChatGPT Review Contracts? Why Generic AI Falls Short", objection: "#1 Trust — generic AI", keyword: "Can ChatGPT review contracts (High)", hook: "Contrarian", words: 1500 },
    asad: { num: 12, title: "Multi-Agent AI vs Single LLM: Why Specialized Beats Generic", objection: "Technical differentiation", keyword: "multi-agent AI legal (3-4K)", hook: "Story", words: 2500 },
    videoA: "Can ChatGPT Review Your Contracts? (We Tested It)",
    videoB: "Why 18 Specialists Beat 1 Generic AI for Contract Review",
    shorts: ["ChatGPT: Summarize Yes. Redline? No.", "600+ AI Hallucination Cases on Record", "1 Generalist vs 18 Specialists — The Doctor Analogy", "How an Orchestrator Resolves Conflicts Between 18 Agents"],
  },
  {
    week: 7, startDate: "May 19",
    saqlain: { num: 13, title: "Paralegent vs Spellbook: Deep Customization vs Pre-Built Playbooks", objection: "Competitor comparison #2", keyword: "Paralegent vs Spellbook", hook: "Curiosity", words: 2500 },
    asad: { num: 14, title: "Is AI Contract Review Safe? GDPR, Privilege, and Data Sovereignty", objection: "#2 Data — compliance", keyword: "AI contract review GDPR", hook: "Value", words: 2000 },
    videoA: "Paralegent vs Spellbook: Deep Customization vs Pre-Built",
    videoB: "Is AI Contract Review Safe? The GDPR Compliance Guide",
    shorts: ["Spellbook Users: 'Irrelevant Changes, Tedious'", "Our Honest Comparison — Strengths AND Weaknesses", "GDPR Says Your Data Stays Home", "Privilege Waiver Risk in SaaS AI"],
  },
  {
    week: 8, startDate: "May 26",
    saqlain: { num: 15, title: "Enterprise Buyer's Guide to AI Contract Review Software (2026)", objection: "Decision-stage authority", keyword: "AI contract review enterprise (2-3K)", hook: "Value", words: 3500 },
    asad: { num: 16, title: "What Is a Contract Rulebook? The AI-Optimized Alternative to Playbooks", objection: "Category creation — own the term", keyword: "contract rulebook (Low, Very Low comp)", hook: "Curiosity", words: 2000 },
    videoA: "The Enterprise Buyer's Guide to AI Contract Review (2026)",
    videoB: "What Is a Contract Rulebook? (And Why It's Better Than a Playbook)",
    shorts: ["The Only Evaluation Checklist You Need", "How to Choose: 5 Questions for Every Vendor", "Playbook vs Rulebook: What's the Difference?", "Your Rules. Your Agents. Your Cloud."],
  },
];
