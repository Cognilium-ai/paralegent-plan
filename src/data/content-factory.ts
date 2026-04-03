// ============================================================
// CONTENT FACTORY — Ready-to-execute briefs for Saqlain + Asad
// ============================================================

// ── PLATFORM PLAYBOOKS ──

export const platformPlaybooks = [
  {
    platform: "LinkedIn (Posts)",
    rules: [
      "Post at 8-9 AM UK time (1-2 PM PKT) — covers UK morning, UAE afternoon",
      "NEVER put external links in post body — gets 40% less reach. Put link in FIRST COMMENT",
      "First 60 minutes are critical — have team leave substantive comments immediately",
      "Educational content outperforms promotional 3:1",
      "Hashtags: 3-5 per post. Mix broad (#LegalTech #AI) + niche (#ContractReview #LegalOps)",
      "Hook must stop the scroll — first 2 lines visible before 'see more'",
      "End every post with a question or CTA to drive comments",
      "Comment on 10-20 target audience posts BEFORE posting your own",
      "80% value content, 20% promotional — never sell in every post",
    ],
    template: `[HOOK — 2 lines that stop the scroll. Use a stat, contrarian take, or bold claim]

[BODY — 3-5 short paragraphs. One idea per paragraph. Use line breaks.]

[KEY INSIGHT — the one thing they should remember]

[CTA — question to drive comments OR 'Link in the comments']

#LegalTech #AIContractReview #ContractManagement #LegalOps #EnterpriseAI`,
  },
  {
    platform: "LinkedIn (Carousels)",
    rules: [
      "7 slides is the sweet spot (18% better engagement than other lengths)",
      "585% more engagement than text posts, 196% more than video",
      "Slide 1 = HOOK (must make them swipe). Use a question, bold stat, or challenge",
      "One idea per slide. Do NOT crowd with text",
      "Pattern interrupt on slide 2 (change color, bold stat)",
      "Final slide MUST have CTA — 30% higher conversion",
      "Upload as PDF for best quality",
      "Brand colors: Deep Teal #042729, Orange #FF4800, Cream #FCFCFA",
    ],
    template: `Slide 1 (Hook): [Bold question or stat — makes them swipe]
Slide 2 (Problem): [The pain point with a surprising stat]
Slide 3 (Insight 1): [First key point from the blog]
Slide 4 (Insight 2): [Second key point]
Slide 5 (Insight 3): [Third key point]
Slide 6 (Solution/Summary): [What to do about it]
Slide 7 (CTA): [Clear action — 'Request a Demo → paralegent.ai/demo']`,
  },
  {
    platform: "LinkedIn (Newsletter)",
    rules: [
      "Name: 'The Contract Intelligence Brief'",
      "Publish under Mudassir's PERSONAL profile (not company page)",
      "40-60% open rates vs 20% for email marketing",
      "Triple notification: email + push + in-app — bypasses algorithm",
      "Biweekly (every 2 weeks) to start",
      "1,000-1,500 words per edition",
      "Every new connection automatically gets subscribe invite",
    ],
    template: `[HEADLINE — specific, not generic. 'Why [specific topic] matters for [specific audience]']

[OPENING — 2-3 sentences on why this topic now]

[SECTION 1 — H2 heading + 2-3 paragraphs]
[SECTION 2 — H2 heading + 2-3 paragraphs]
[SECTION 3 — H2 heading + key takeaway]

[CTA — 'If you're dealing with this, let's talk: paralegent.ai/demo']`,
  },
  {
    platform: "Twitter/X (Threads)",
    rules: [
      "Text-only outperforms links (algorithm penalizes external links)",
      "Thread format: 5-7 tweets",
      "Tweet #1 = HOOK (determines if anyone reads the rest)",
      "Put link ONLY in last tweet or as a reply",
      "Use numbers: '5 reasons why...' or '3 things I learned...'",
      "Each tweet should stand alone but flow as a story",
      "Best for: contrarian takes, industry commentary, data insights",
      "Max 1-2 threads per week — quality over quantity",
    ],
    template: `1/ [HOOK — bold claim or surprising stat + '🧵' to signal thread]

2/ [Context — why this matters right now]

3/ [Insight #1 — the most surprising point]

4/ [Insight #2 — data or example]

5/ [Insight #3 — what most people get wrong]

6/ [What to do about it / our approach]

7/ [CTA — link to blog or demo page]`,
  },
  {
    platform: "YouTube (Long-form)",
    rules: [
      "Title: primary keyword in first 40 chars, under 70 chars total",
      "Description: 200-300 words, keyword in first 25 words, include timestamps",
      "Custom thumbnail: high contrast, human face with expression, 3-4 words max",
      "Hook viewer in FIRST 5 SECONDS — no intros, logos, or 'hey guys'",
      "Include timestamps/chapters (63% of top-ranking videos have them)",
      "Pinned comment: CTA to demo page",
      "End screen: 15-20 sec outro with CTA card",
      "Tags: 'AI contract review,' 'contract review automation,' 'legal AI,' 'AI for legal teams'",
      "Upload as 16:9, 1080p minimum",
      "Create with Veo 3 — use AI-generated visuals + screen recordings",
    ],
    template: `Title: [Primary Keyword]: [Benefit/Hook]
Example: "AI Contract Review: How 11 Agents Analyze Every Clause"

Description:
[Keyword-rich opening — 2 sentences with primary keyword]
[3-5 bullet points of what the video covers]

Timestamps:
0:00 [Hook/Intro]
0:30 [Section 1]
2:00 [Section 2]
4:00 [Section 3]
6:00 [Summary + CTA]

[2-3 sentences about Paralegent]
🔗 Request a Demo: https://paralegent.ai/demo
🔗 Full Blog Post: [link]

Tags: AI contract review, contract review automation, legal AI, AI for legal teams, contract redlining AI, multi-agent AI`,
  },
  {
    platform: "YouTube (Shorts)",
    rules: [
      "15-60 seconds, 9:16 vertical format",
      "Hook in FIRST 1-3 SECONDS",
      "Subtitles mandatory (83% watch with sound off)",
      "80% of Short views come from non-subscribers — discovery engine",
      "Create with Veo 3 — AI-generated visuals work great for Shorts",
      "Repurpose same video to Instagram Reels, TikTok, Facebook",
      "2-3 Shorts per week cut from long-form content or blog content",
    ],
    template: `[SECOND 1-3: Hook — 'Did you know...' or 'Watch this...' or surprising visual]
[SECOND 3-15: The insight or demo clip]
[SECOND 15-30: Why it matters / the result]
[SECOND 30-45: Quick CTA or 'Follow for more']
[Add text overlay + subtitles throughout]`,
  },
  {
    platform: "Medium",
    rules: [
      "Wait 1-2 WEEKS after publishing on paralegent.ai before republishing",
      "ALWAYS set canonical URL to the original paralegent.ai post",
      "Medium has DA 96 — articles can rank for keywords your site hasn't captured",
      "Add 'Originally published on paralegent.ai' at the top",
      "Use Medium-specific title (can be slightly different from blog)",
      "Add 'Read more on paralegent.ai' CTAs within the article",
      "Submit to publications: 'Towards AI' (technical), 'The Startup' (founder stories)",
      "1 republish per week",
    ],
    template: `[Set canonical URL in Medium settings to: paralegent.ai/resources/blog/[slug]]

Originally published on paralegent.ai

[Full blog content — same as original]

[Add 2-3 inline CTAs: 'Want to see this in action? Request a demo at paralegent.ai/demo']

---
[Author bio + link to Paralegent]`,
  },
  {
    platform: "Reddit",
    rules: [
      "ZERO TOLERANCE for promotional content — you WILL get banned",
      "80/20 rule: 80% helpful answers, 20% can mention product IF directly relevant",
      "Build karma for 4-6 weeks before mentioning Paralegent",
      "Subreddits: r/legaltech (primary), r/inhouselegal, r/artificial, r/MachineLearning",
      "NEVER post direct links unless someone specifically asks",
      "Use 'founder' flair — be transparent about who you are",
      "Focus on: detailed answers, honest tool assessments, data-backed insights",
      "Upvote and comment genuinely on other posts first",
    ],
    template: `[Find a question about contract review, legal AI, or AI tools]

[Write a 200-400 word answer that is genuinely helpful]

[Share real knowledge — NOT marketing copy]

[Only mention Paralegent if DIRECTLY relevant, and include honest pros AND cons]

[Link to blog post ONLY if it genuinely answers their question better than your comment]`,
  },
  {
    platform: "Facebook",
    rules: [
      "Cross-post from LinkedIn (adapted format)",
      "Shorter than LinkedIn — 3-4 paragraphs max",
      "Video posts from YouTube Shorts work well",
      "Link posts are OK on Facebook (no penalty like LinkedIn)",
      "Include link directly in post",
      "3 posts per week — minimal effort, maintain presence",
    ],
    template: `[Shorter version of LinkedIn post — 3-4 paragraphs]

[Include blog/demo link directly — Facebook doesn't penalize links]

Read the full guide: [link]

#LegalTech #AI #ContractReview`,
  },
  {
    platform: "Instagram",
    rules: [
      "Reels from YouTube Shorts (same 9:16 video, just repost)",
      "Carousels from LinkedIn carousels (adapt sizing to 1080x1080)",
      "Stories for engagement — polls, behind-the-scenes",
      "Caption: 2-3 sentences + hashtags + 'link in bio'",
      "Update link in bio to latest blog or demo page",
      "2-3 posts per week (Reels + carousels)",
    ],
    template: `[2-3 sentence caption — hook + key insight]

[link in bio]

#LegalTech #AI #ContractReview #Enterprise #LegalAI #DataSovereignty #MultiAgent #LegalOps`,
  },
  {
    platform: "TikTok",
    rules: [
      "Repost YouTube Shorts (same video)",
      "Add trending audio when relevant",
      "Native caption — slightly more casual than LinkedIn",
      "Educational content works — 'Did you know...' format",
      "18% higher completion rate for B2B content (surprising)",
      "1-2 posts per week — repurposed, minimal effort",
    ],
    template: `[Same video as YouTube Short]

Caption: [Casual version of the insight — speak to the person, not the company]

#LegalTech #AI #ContractReview #Tech #Enterprise`,
  },
  {
    platform: "Quora",
    rules: [
      "Find questions with 1,000+ views but few good answers",
      "Write 500-800 word comprehensive answers",
      "Mention Paralegent in 1 out of 5 answers — as ONE option, with honest pros/cons",
      "Link to blog posts (not landing pages)",
      "AI engines (ChatGPT, Gemini) pull answers from Quora — this feeds GEO",
      "2-3 answers per week",
    ],
    template: `[Direct answer to the question in first 2-3 sentences]

[Detailed explanation with data points and examples — 500-800 words]

[If relevant, mention multiple tools including Paralegent as ONE option]

[Link to relevant blog post for 'deeper reading']`,
  },
];

// ── REPURPOSING WORKFLOW ──

export const repurposingWorkflow = {
  title: "Blog → All Platforms Repurposing Workflow",
  description: "For EVERY blog published, follow this exact workflow to create all repurposed content. This should take 4-5 hours total per blog.",
  steps: [
    {
      step: 1,
      action: "LinkedIn Post (Mudassir's account)",
      time: "30 min",
      instructions: "Extract the most surprising insight from the blog. Write a hook (2 lines) + body (3-5 paragraphs) + CTA. Put blog link in FIRST COMMENT, not in post body.",
    },
    {
      step: 2,
      action: "LinkedIn Post (Ali's account)",
      time: "20 min",
      instructions: "Different angle from same blog. If Mudassir's post focuses on the problem, Ali's focuses on the solution (or vice versa). Different hook.",
    },
    {
      step: 3,
      action: "LinkedIn Carousel (7 slides)",
      time: "60 min",
      instructions: "Extract 5 key points from blog. Slide 1 = hook, Slides 2-6 = one point each, Slide 7 = CTA. Use brand colors. Upload as PDF.",
    },
    {
      step: 4,
      action: "Twitter/X Thread (5-7 tweets)",
      time: "30 min",
      instructions: "Turn blog into thread. Tweet 1 = hook + 🧵. Each tweet = one key insight. Link only in last tweet. Use stats and data points.",
    },
    {
      step: 5,
      action: "YouTube Short (60 sec) — Veo 3",
      time: "60 min",
      instructions: "Extract the most visual/dramatic point from the blog. Create 60-sec vertical video with Veo 3. Add text overlays + subtitles. Hook in first 3 seconds.",
    },
    {
      step: 6,
      action: "Instagram Reel + TikTok + Facebook Video",
      time: "15 min",
      instructions: "Repost the SAME YouTube Short to all 3 platforms. Just change the caption for each platform's tone.",
    },
    {
      step: 7,
      action: "Facebook Text Post",
      time: "10 min",
      instructions: "Shorter version of LinkedIn post. Include blog link directly (FB doesn't penalize links). 3-4 paragraphs.",
    },
    {
      step: 8,
      action: "Instagram Carousel",
      time: "30 min",
      instructions: "Adapt LinkedIn carousel to 1080x1080 Instagram format. Same content, adjusted sizing.",
    },
    {
      step: 9,
      action: "Quora Answer",
      time: "30 min",
      instructions: "Find a question related to the blog topic. Write a 500-800 word answer using blog content. Only mention Paralegent if directly relevant (1 in 5 answers).",
    },
    {
      step: 10,
      action: "Medium Republish (2 WEEKS AFTER original)",
      time: "20 min",
      instructions: "Copy blog to Medium. Set canonical URL. Add 'Originally published on paralegent.ai'. Submit to relevant publication.",
    },
  ],
  totalTime: "~5 hours per blog → 10 hours/week for 2 blogs",
};

// ── WEEK 1 CONTENT BRIEFS ──

export const week1Content = {
  blogs: [
    {
      id: "blog-1",
      title: "The Complete Guide to AI Contract Review in 2026",
      keyword: "AI contract review software",
      secondaryKeywords: ["AI contract review", "contract review automation", "AI for legal teams", "how AI reviews contracts"],
      wordCount: 3500,
      assignee: "Saqlain",
      outline: [
        {
          heading: "H1: The Complete Guide to AI Contract Review in 2026",
          notes: "Definition-first opening (<80 words): 'AI contract review is the use of artificial intelligence to analyze legal contracts, identify risks, and suggest modifications — replacing what traditionally took attorneys 30+ hours per agreement with automated analysis in minutes. In 2026, the technology has evolved from basic keyword matching to multi-agent orchestration systems that deploy specialized AI for each contract section.'",
        },
        {
          heading: "TLDR Box",
          notes: "5 bullets: (1) AI contract review market is $1.75-3.1B, growing 25-30% CAGR (2) 52% of corporate legal departments now use GenAI (3) Multi-agent systems with 11+ specialized agents outperform single-LLM tools (4) Customer-cloud deployment solves the #1 barrier: data security (5) ROI: 30 hours → 30 minutes per MSA, payback in month 1",
        },
        {
          heading: "H2: What Is AI Contract Review?",
          notes: "H3: Definition and How It Differs from Manual Review — contrast manual (30 hrs, inconsistent, expensive) with AI (minutes, consistent, one-time cost).\nH3: The Shift from Single-LLM to Multi-Agent Architectures — explain why 1 AI trying to do everything fails vs 11 specialists.",
        },
        {
          heading: "H2: How AI Contract Review Works (Step-by-Step)",
          notes: "H3: Document Ingestion and Clause Extraction — upload contract, AI parses sections.\nH3: Rule Application and Risk Classification — match against rulebook, GREEN/ORANGE/RED.\nH3: Redline Generation and Human Review — AI suggests changes, attorney approves.\nStat: 1,536-dimensional semantic search matches in 15-20 seconds.",
        },
        {
          heading: "H2: Types of AI Contract Review Systems",
          notes: "COMPARISON TABLE: SaaS Platforms (LegalOn, Spellbook) vs Customer-Cloud Deployed (Paralegent) vs Generic AI (ChatGPT). Compare across: data location, accuracy, customization, cost model, lock-in.\nH3: SaaS Platforms vs Customer-Cloud Deployment\nH3: Single Model vs Multi-Agent Orchestration\nH3: Generic AI (ChatGPT) vs Purpose-Built Legal AI",
        },
        {
          heading: "H2: Key Features Enterprise Legal Teams Need",
          notes: "H3: Rulebook/Playbook Support — 80-150 terms with rationale, examples, confidence.\nH3: Data Sovereignty and Privacy — 62% stalled by data security fears.\nH3: Word-Native Integration — no new platform to adopt.\nH3: LLM Flexibility — Azure OpenAI, Bedrock, Vertex AI.",
        },
        {
          heading: "H2: The Market in 2026",
          notes: "Stats: $1.75-3.1B market, 52% adoption (up from 23% in 2024), 91% of large firms use AI for research, 80% accuracy concern, 62% data security barrier, 95% of pilots fail at integration, top firm rates crossed $1,000/hr.",
        },
        {
          heading: "H2: How to Evaluate AI Contract Review Tools",
          notes: "Evaluation checklist: deployment model, AI architecture, rulebook depth, Word integration, LLM flexibility, data handling, pricing model, implementation timeline.",
        },
        {
          heading: "Mid-article CTA",
          notes: "'Request a Demo → paralegent.ai/demo'",
        },
        {
          heading: "H2: FAQ (5 questions)",
          notes: "1. Can AI accurately review legal contracts? (40-60 words — yes, with specialized agents + confidence scoring)\n2. How long does AI contract review take compared to manual? (30 hrs → 2-8 minutes)\n3. Is AI contract review safe for confidential documents? (customer-cloud = data never leaves)\n4. What is multi-agent AI contract review? (11 specialized agents, each expert in one area)\n5. Can AI contract review work inside Microsoft Word? (yes, Word add-in)",
        },
        {
          heading: "Final CTA + Schema",
          notes: "Final CTA: 'Request a Demo'. JSON-LD: BlogPosting + FAQPage + BreadcrumbList. Internal links to blogs #2, #3, #5.",
        },
      ],
      linkedinMudassir: {
        hook: "Your legal team spends 30 hours reviewing a single MSA.\n\nAI does it in under 8 minutes.",
        body: "But here's what most people get wrong about AI contract review in 2026:\n\nIt's not about one AI model trying to understand everything. That's like asking a general practitioner to perform heart surgery.\n\nThe shift is to multi-agent architectures — 11 specialized AI agents, each expert in one area: scope, liability, IP, compliance, termination...\n\nAnd the biggest gap? Every tool on the market is SaaS. Your contracts sit on their servers.\n\nWhat if the AI deployed in YOUR cloud? Your data never leaves.\n\nI wrote the complete guide to AI contract review in 2026. Covers:\n→ How multi-agent AI actually works\n→ SaaS vs customer-cloud deployment\n→ The real market numbers ($1.75-3.1B)\n→ How to evaluate tools\n\nLink in the comments 👇",
        hashtags: "#LegalTech #AIContractReview #ContractManagement #LegalOps #DataSovereignty",
        linkInComment: "Full guide: paralegent.ai/resources/blog/complete-guide-ai-contract-review",
      },
      linkedinAli: {
        hook: "52% of corporate legal departments now use GenAI.\n\nBut only 39% report quantifiable success.",
        body: "Why the gap? I dug into the data:\n\n1. Most teams use generic AI (ChatGPT) — it summarizes, but can't redline against your company's standards\n\n2. SaaS tools process your contracts on their servers — 62% of teams stall on data security alone\n\n3. Single-LLM tools miss nuance — one model can't be expert in scope, IP, liability, and compliance simultaneously\n\nThe solution? Purpose-built, multi-agent AI that deploys in your cloud.\n\nWe put together a complete guide covering everything enterprises need to know about AI contract review in 2026.\n\nLink in comments 👇",
        hashtags: "#LegalTech #AI #ContractReview #Enterprise #LegalAI",
        linkInComment: "Read the full guide: paralegent.ai/resources/blog/complete-guide-ai-contract-review",
      },
      twitterThread: [
        "Your legal team spends 30 hours on a single MSA. AI does it in 8 minutes.\n\nHere's how AI contract review actually works in 2026: 🧵",
        "There are 3 types of AI contract review:\n\n① SaaS platforms (LegalOn, Spellbook) — your data on their servers\n② Customer-cloud deployed — data never leaves your environment\n③ Generic AI (ChatGPT) — can summarize, can't redline\n\nThe difference matters more than you think.",
        "The 2026 shift: from single-LLM to multi-agent architectures.\n\nInstead of 1 AI trying to understand everything, 11 specialized agents each focus on their area:\n\n→ Scope specialist\n→ Liability specialist\n→ IP specialist\n→ Compliance specialist\n→ ...7 more\n\nLike 11 expert lawyers working simultaneously.",
        "The market numbers:\n\n• $1.75-3.1B market, growing 25-30% CAGR\n• 52% of corporate legal use GenAI (up from 23% in 2024)\n• But 80% cite accuracy as top barrier\n• And 62% are stalled by data security fears\n\nAccuracy + security = the two problems to solve.",
        "The complete guide covers:\n\n→ How multi-agent AI works (step-by-step)\n→ SaaS vs customer-cloud deployment\n→ Key features enterprise teams need\n→ How to evaluate tools\n→ The real market data\n\nFull guide: paralegent.ai/resources/blog/complete-guide-ai-contract-review",
      ],
      carouselSlides: [
        "Slide 1 (Hook): 'AI Contract Review in 2026: What Enterprise Legal Teams Need to Know'",
        "Slide 2 (Problem): '30 hours per MSA. $100K+/month. Inconsistent risk calls across reviewers. Sound familiar?'",
        "Slide 3 (Shift): 'The 2026 shift: from 1 generic AI to 11 specialized agents — each expert in their contract section'",
        "Slide 4 (Types): '3 types of AI contract review: SaaS (their cloud) vs Customer-Cloud (your cloud) vs Generic AI (doesn't work)'",
        "Slide 5 (Data): '$1.75-3.1B market. 52% adoption. But 80% cite accuracy and 62% cite data security as barriers.'",
        "Slide 6 (Features): '5 features to demand: ✓ Rulebook depth ✓ Data sovereignty ✓ Word integration ✓ LLM flexibility ✓ Multi-agent architecture'",
        "Slide 7 (CTA): 'Want AI contract review that deploys in YOUR cloud? 11 agents. Your data never leaves. → paralegent.ai/demo'",
      ],
      youtubeShort: {
        title: "AI Reviews a Contract in 8 Minutes (Here's How)",
        script: "Hook (0-3 sec): 'An 80-page MSA takes your legal team 30 hours to review. Watch what happens when 11 AI agents do it.'\nBody (3-30 sec): Quick walkthrough — upload rulebook, click review, GREEN/ORANGE/RED highlights appear, suggested revisions in Word.\nClose (30-45 sec): 'Multi-agent AI. Your cloud. Your data never leaves. Link in bio.'",
      },
      facebookPost: "AI contract review has evolved dramatically in 2026. Gone are the days of one AI model trying to understand everything — the shift is to multi-agent architectures with 11 specialized agents.\n\nBut here's the gap most teams miss: every tool on the market is SaaS, meaning your confidential contracts sit on someone else's servers.\n\nWe wrote the complete guide covering the market, the technology, and how to evaluate tools.\n\nRead it here: paralegent.ai/resources/blog/complete-guide-ai-contract-review",
      instagramCaption: "30 hours → 8 minutes ⚡\n\nAI contract review isn't just faster — it's fundamentally different in 2026. 11 specialized agents, each expert in their contract section, working in YOUR cloud.\n\nSwipe for the complete breakdown →\n\nLink in bio for the full guide\n\n#LegalTech #AI #ContractReview #Enterprise #LegalAI #DataSovereignty",
      tiktokCaption: "Your legal team reviews contracts for 30 HOURS. 11 AI agents do it in 8 MINUTES. Here's the difference between generic AI and purpose-built contract review AI in 2026 🧵 #LegalTech #AI #ContractReview",
    },
    {
      id: "blog-2",
      title: "How AI Contract Redlining Works (Step-by-Step)",
      keyword: "AI contract redlining",
      secondaryKeywords: ["how does AI redline contracts", "automated contract redlining", "AI redlining Microsoft Word", "contract redlining software"],
      wordCount: 2500,
      assignee: "Asad",
      outline: [
        {
          heading: "H1: How AI Contract Redlining Works (Step-by-Step)",
          notes: "Definition-first (<80 words): 'AI contract redlining is the automated process of reviewing legal contracts against a predefined set of rules (a rulebook), identifying clauses that deviate from acceptable terms, and generating precise modification suggestions — all within Microsoft Word. Unlike manual redlining, which relies on individual attorney judgment, AI redlining applies consistent standards across every contract.'",
        },
        {
          heading: "H2: What Is AI Contract Redlining?",
          notes: "Explain the concept for someone who's never seen it. Clear, simple language.",
        },
        {
          heading: "H2: How Traditional Redlining Works (And Why It Fails at Scale)",
          notes: "Attorney reads every page, marks changes manually, inconsistent across team, takes 30+ hours per MSA, $1,000+/hr rates.",
        },
        {
          heading: "H2: Step 1 — Upload Your Rulebook (80-150 Terms with Rationale)",
          notes: "Explain rulebook: definitions + preferred position + rationale + examples + confidence scoring per rule. This is the 'brain' of the system.",
        },
        {
          heading: "H2: Step 2 — AI Agents Parse and Classify Each Clause",
          notes: "11 specialized agents analyze simultaneously. 1,536-dimensional semantic search. 15-20 second matching. Each agent expert in their area.",
        },
        {
          heading: "H2: Step 3 — GREEN/ORANGE/RED Risk Classification",
          notes: "THREE-TIER: GREEN (favorable, auto-approve) / ORANGE (conditional, needs approval) / RED (unacceptable, negotiate out). With rationale and confidence score.",
        },
        {
          heading: "H2: Step 4 — Inline Redlines with Replacement Language",
          notes: "40-50 precise redlines appear in Word. Suggested revision text in your company's preferred language. Attorney reviews findings, not 80 pages.",
        },
        {
          heading: "H2: Step 5 — Attorney Reviews Findings, Not 80 Pages",
          notes: "The key shift: from reading everything to reviewing AI-flagged items. 30 hours → 30 minutes.",
        },
        {
          heading: "COMPARISON TABLE",
          notes: "Manual Redlining vs Generic AI (ChatGPT) vs Rulebook-Driven AI (Paralegent). Compare: time, accuracy, consistency, customization, data security, cost.",
        },
        {
          heading: "H2: Why Rulebook-Driven Redlining Produces Consistent Results",
          notes: "Same rules applied every time. No reviewer variance. Confidence scoring flags uncertain matches.",
        },
        {
          heading: "H2: FAQ (3 questions)",
          notes: "1. How accurate is AI contract redlining? (confidence scoring, 11 agents)\n2. Can AI redline complex clauses like indemnification and limitation of liability? (specialized agents for each)\n3. Does AI contract redlining work in Microsoft Word? (yes, Word add-in, no new platform)",
        },
        {
          heading: "Schema",
          notes: "JSON-LD: BlogPosting + HowTo + FAQPage + BreadcrumbList. Internal links to blog #1, #4.",
        },
      ],
      linkedinMudassir: {
        hook: "I watched an attorney spend 4 days redlining a single MSA.\n\n80 pages. 47 clauses flagged. 30+ hours.",
        body: "Then I watched 11 AI agents do the same work in 7 minutes.\n\nHere's what people miss about AI redlining:\n\nIt's not about finding keywords. It's about understanding INTENT.\n\nEach of our 11 agents specializes in one area — scope, liability, IP, compliance, termination...\n\nThey match every clause against your company's rulebook. Not generic rules. YOUR rules. YOUR preferred language.\n\nThen they classify: GREEN (good), ORANGE (needs review), RED (negotiate out).\n\nThe attorney's job shifts from reading 80 pages to reviewing 15 flagged items.\n\nI wrote a step-by-step guide to how AI redlining actually works.\n\nLink in comments 👇",
        hashtags: "#ContractRedlining #LegalTech #AI #LegalOps #ContractManagement",
        linkInComment: "Full step-by-step: paralegent.ai/resources/blog/how-ai-contract-redlining-works",
      },
      linkedinAli: {
        hook: "Most AI 'contract review' tools are just glorified Ctrl+F.\n\nHere's the difference:",
        body: "Ctrl+F finds words. AI redlining understands context.\n\nA rulebook-driven system doesn't just find 'indemnification' — it understands whether YOUR indemnification clause protects you or exposes you.\n\nThen it suggests YOUR preferred replacement language.\n\nAnd it does this for every clause in the contract, simultaneously, with 11 specialized agents.\n\nThe result? 40-50 precise redlines in Word. With GREEN/ORANGE/RED classification.\n\nWe wrote the step-by-step breakdown.\n\nLink in comments 👇",
        hashtags: "#LegalTech #ContractReview #AI #Redlining #Enterprise",
        linkInComment: "Read: paralegent.ai/resources/blog/how-ai-contract-redlining-works",
      },
      twitterThread: [
        "Most AI 'contract review' is just glorified Ctrl+F.\n\nReal AI redlining is completely different. Here's how it works, step by step: 🧵",
        "Step 1: Upload your rulebook.\n\nNot generic rules — YOUR company's 80-150 preferred contract positions.\n\nEach rule has: the definition, YOUR preferred language, rationale, examples, and a confidence score.\n\nThis is the AI's 'brain.'",
        "Step 2: 11 specialized agents analyze every clause.\n\nNot 1 AI trying to understand everything.\n\n11 specialists — scope, IP, liability, compliance, termination... each expert in their area.\n\n1,536-dimensional semantic matching in 15-20 seconds.",
        "Step 3: GREEN / ORANGE / RED classification.\n\n🟢 GREEN = favorable, auto-approve\n🟠 ORANGE = conditional, needs senior review\n🔴 RED = unacceptable, negotiate out\n\nWith rationale and confidence scores for every finding.",
        "Step 4: 40-50 precise redlines appear in Word.\n\nSuggested replacement text in YOUR preferred language.\n\nThe attorney's job: review 15 flagged items, not 80 pages.\n\n30 hours → 30 minutes.\n\nFull guide: paralegent.ai/resources/blog/how-ai-contract-redlining-works",
      ],
      carouselSlides: [
        "Slide 1: 'How AI Contract Redlining Actually Works (5 Steps)'",
        "Slide 2: 'Step 1: Upload Your Rulebook — 80-150 terms with YOUR preferred positions, rationale, and examples'",
        "Slide 3: 'Step 2: 11 AI Agents Analyze Every Clause — each specialist in their area (scope, IP, liability...)'",
        "Slide 4: 'Step 3: GREEN / ORANGE / RED Classification — with rationale and confidence scores'",
        "Slide 5: 'Step 4: 40-50 Precise Redlines in Word — suggested replacement in YOUR language'",
        "Slide 6: 'Step 5: Attorney Reviews Findings, Not 80 Pages — 30 hours → 30 minutes'",
        "Slide 7: 'Want to see it in action? → paralegent.ai/demo'",
      ],
      youtubeShort: {
        title: "Watch AI Redline a Contract in Real-Time",
        script: "Hook (0-3 sec): 'Watch 11 AI agents redline a contract in real-time'\nBody (3-40 sec): Screen recording — upload contract, agents activate, RED clause detected, confidence 94%, suggested revision appears in Word, GREEN/ORANGE/RED summary.\nClose (40-60 sec): 'From 30 hours to 30 minutes. Link in bio.'",
      },
      facebookPost: "How does AI contract redlining actually work? It's not about finding keywords — it's about understanding whether each clause protects your company or exposes it.\n\nWe broke it down into 5 steps: from uploading your rulebook to getting 40-50 precise redlines in Word, classified as GREEN (favorable), ORANGE (needs review), or RED (unacceptable).\n\nFull step-by-step guide: paralegent.ai/resources/blog/how-ai-contract-redlining-works",
      instagramCaption: "5 steps from 80-page contract to AI-powered redlines 📋→⚡\n\n1️⃣ Upload your rulebook\n2️⃣ 11 agents analyze every clause\n3️⃣ GREEN / ORANGE / RED classification\n4️⃣ 40-50 redlines in Word\n5️⃣ Attorney reviews findings, not 80 pages\n\nFull guide → link in bio\n\n#LegalTech #ContractReview #AI #Redlining #LegalOps",
      tiktokCaption: "How AI redlines a contract in 5 steps 👀 From 30 hours of manual review to 30 minutes of AI-assisted review. 11 specialized agents. Your cloud. Your rules. #LegalTech #AI #ContractReview #Redlining",
    },
  ],
  videoBriefs: [
    {
      id: "video-demo",
      title: "Paralegent AI Demo: Watch 11 Agents Review a Contract in Minutes",
      type: "Product Demo",
      length: "3-5 min",
      platform: "YouTube + Website + LinkedIn",
      assignee: "Saqlain (edits Mudassir's raw footage with Veo 3)",
      script: [
        "0:00-0:10 — Hook: 'What if your legal team could review an 80-page MSA in under 8 minutes? Watch.' (NO intro, NO logo — straight to product)",
        "0:10-0:30 — Show the Word add-in. Open a real contract. Click 'Review.'",
        "0:30-1:30 — Watch the agents work. Show the loading/processing. Text overlay: '11 specialized agents analyzing simultaneously'",
        "1:30-2:30 — Results appear. Walk through 3-4 flagged clauses: one GREEN, one ORANGE, one RED. Show the rationale, confidence score, and suggested revision.",
        "2:30-3:00 — Show the summary view. 40-50 redlines. GREEN/ORANGE/RED breakdown.",
        "3:00-3:30 — Quick architecture shot: 'Deploys in YOUR cloud. Data never leaves your environment. Works with Azure OpenAI, Bedrock, or Vertex AI.'",
        "3:30-3:45 — CTA: 'Request a demo at paralegent.ai/demo'",
      ],
      thumbnail: "Split screen: left = stressed attorney with stack of papers, right = Word doc with GREEN/ORANGE/RED highlights. Text: 'AI Reviews Contract in 8 Min'",
      tags: "AI contract review demo, contract review automation, legal AI demo, AI redlining, Paralegent AI",
    },
    {
      id: "video-founder",
      title: "Why I Built Paralegent AI — Founder Story",
      type: "Founder Story",
      length: "2 min",
      platform: "LinkedIn + YouTube + Website About Page",
      assignee: "Asad (edits Mudassir's raw footage with Veo 3)",
      script: [
        "0:00-0:15 — 'I've deployed over 50 GenAI systems. But one pattern kept coming up...'",
        "0:15-0:40 — 'Legal teams were drowning. 100+ contracts a month. 30 hours per MSA. Inconsistent results. And they were terrified of sending their data to another SaaS vendor.'",
        "0:40-1:10 — 'So we built something different. 11 specialized AI agents — each expert in one area of a contract. And it deploys in THEIR cloud. Their data never touches our servers.'",
        "1:10-1:30 — 'The result? 80-page MSAs reviewed in under 8 minutes. GREEN, ORANGE, RED classification. 40-50 precise redlines in Word.'",
        "1:30-1:50 — 'We're not a SaaS. We're a production accelerator. One-time investment. Your cloud. Your control.'",
        "1:50-2:00 — 'I'm Mudassir. This is Paralegent AI. Let's talk.' + CTA overlay",
      ],
      thumbnail: "Mudassir headshot with text: 'Why I Built 11 AI Agents for Contracts'",
      tags: "Paralegent AI, founder story, legal tech startup, AI contract review, multi-agent AI",
    },
  ],
};
