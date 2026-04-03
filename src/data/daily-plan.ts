// ============================================================
// DAILY TASK PLAN — Saqlain + Asad — Day by Day
// Starting Monday April 6, 2026
// Each person works 9 hours/day
// ============================================================

export interface DayTask {
  id: string;
  title: string;
  description: string;
  hours: number;
  category: string;
  deliverable: string;
  dependsOn?: string;
}

export interface DayPlan {
  date: string;
  dayLabel: string;
  week: number;
  saqlain: DayTask[];
  asad: DayTask[];
}

export const dailyPlan: DayPlan[] = [
  // ═══════════════════ WEEK 1 ═══════════════════

  // ── MONDAY APRIL 6 ──
  {
    date: "2026-04-06",
    dayLabel: "Monday April 6",
    week: 1,
    saqlain: [
      {
        id: "s-d1-1",
        title: "Write Blog #1: The Complete Guide to AI Contract Review in 2026",
        description: "3,500 words. You researched this on Friday — opening paragraph, TLDR, FAQ answers are drafted. Now write the FULL blog following the outline on the Content Factory dashboard.\n\nKeyword: 'AI contract review software' (15K+ volume)\n\nFollow the exact H2/H3 structure from the brief. Use all stats you verified Friday. Include comparison table (SaaS vs Customer-Cloud vs Generic AI). End with FAQ section (5 questions, 40-60 word answers each).\n\nGEO rules: definition-first opening, H2 every 300-400 words, 2-3 stats per 300 words, question-style headings.\n\nPublish to Strapi CMS → /resources/blog/complete-guide-ai-contract-review\nJSON-LD: BlogPosting + FAQPage + BreadcrumbList",
        hours: 7,
        category: "Blog",
        deliverable: "Blog #1 published on website",
      },
      {
        id: "s-d1-2",
        title: "Write ROI One-Pager Copy",
        description: "Write the copy for the ROI one-pager PDF. Asad designs it tomorrow.\n\nContent:\n• Headline: 'The ROI of AI Contract Review'\n• Manual cost: $100K+/month for 4-5 attorneys at $1,000+/hr\n• Paralegent: $60-80K one-time investment\n• Time savings: 30 hours → 30 minutes per 80-page MSA\n• 3-year TCO comparison table:\n  - Manual: $3.6M (3 years × $100K/month)\n  - SaaS AI (LegalOn/Spellbook): $288K-$518K (3 years × $8K-$14.4K/month)\n  - Paralegent: $60-80K (one-time)\n• Payback period: Month 1\n• Consistency value: eliminate reviewer variance\n• Bottom line: 'Pays for itself with the first contract review cycle'\n\nKeep it scannable. Bullets. Numbers. A CFO reads this in 60 seconds.",
        hours: 2,
        category: "Sales Asset",
        deliverable: "ROI one-pager copy in shared doc → Asad designs tomorrow",
      },
    ],
    asad: [
      {
        id: "a-d1-1",
        title: "Write Blog #2: How AI Contract Redlining Works (Step-by-Step)",
        description: "2,500 words. You studied this brief on Friday. Now write the FULL blog.\n\nKeyword: 'AI contract redlining' (9K+ volume)\n\nFollow the exact outline from Content Factory dashboard:\n1. Definition-first opening\n2. How traditional redlining fails\n3. Step 1: Upload Rulebook\n4. Step 2: AI Agents Parse\n5. Step 3: GREEN/ORANGE/RED\n6. Step 4: Inline Redlines in Word\n7. Step 5: Attorney Reviews Findings\n8. Comparison Table (Manual vs Generic AI vs Rulebook-Driven)\n9. FAQ (3 questions, 40-60 words each)\n\nJSON-LD: BlogPosting + HowTo + FAQPage + BreadcrumbList\nPublish to Strapi CMS → /resources/blog/how-ai-contract-redlining-works",
        hours: 7,
        category: "Blog",
        deliverable: "Blog #2 published on website",
      },
      {
        id: "a-d1-2",
        title: "Design Security One-Pager PDF",
        description: "Saqlain wrote the copy on Friday. Use your PDF template (created Friday) to design it.\n\n5 sections:\n1. WHERE data lives\n2. HOW LLMs are used\n3. WHAT happens to data\n4. COMPLIANCE\n5. NO LOCK-IN\n\nBrand: Teal #042729 headers, Orange #FF4800 accents, Cream #FCFCFA bg, Peach #FCDED2 icons.\nParalegent logo top-left, paralegent.ai/demo bottom-right.\n1 page, scannable in 60 seconds.\n\nExport as PDF. Share with Mudassir for review.",
        hours: 2,
        category: "Sales Asset",
        deliverable: "Security one-pager branded PDF",
        dependsOn: "Saqlain's Friday draft",
      },
    ],
  },

  // ── TUESDAY APRIL 7 ──
  {
    date: "2026-04-07",
    dayLabel: "Tuesday April 7",
    week: 1,
    saqlain: [
      {
        id: "s-d2-1",
        title: "Write Implementation Timeline One-Pager Copy",
        description: "Write the copy for the timeline one-pager. Asad designs today.\n\nContent — visual timeline showing 8-10 week implementation:\n• Week 1-2: Discovery & Rulebook Setup — map existing contract positions, define GREEN/ORANGE/RED criteria\n• Week 3-4: Agent Configuration — configure 18 specialized agents for customer's contract types\n• Week 5-6: Integration & Testing — deploy in customer's cloud, connect to LLM accounts, test\n• Week 7-8: Word Add-In Deployment — install for legal team, configure permissions\n• Week 9-10: Go Live & Training — parallel run, train attorneys, fine-tune confidence\n\nInclude: 3-4 Paralegent engineers involved, customer effort: 10-15 hours total from legal team.",
        hours: 2,
        category: "Sales Asset",
        deliverable: "Timeline one-pager copy → Asad designs today",
      },
      {
        id: "s-d2-2",
        title: "Repurpose Blog #1 → LinkedIn posts (Mudassir + Ali) + Twitter thread",
        description: "Create 3 pieces from Blog #1:\n\n1. LINKEDIN POST — MUDASSIR'S ACCOUNT:\nUse the exact copy from Content Factory dashboard. Hook: 'Your legal team spends 30 hours reviewing a single MSA...' Put link in FIRST COMMENT.\n\n2. LINKEDIN POST — ALI'S ACCOUNT:\nDifferent angle. Hook: '52% of corporate legal departments now use GenAI. But only 39% report quantifiable success.' Put link in FIRST COMMENT.\n\n3. TWITTER THREAD (5 tweets):\nUse the exact copy from Content Factory dashboard. Copy-paste the 5 tweets. Link only in last tweet.\n\nSchedule all 3 to post at 8-9 AM UK time (1-2 PM PKT).",
        hours: 2,
        category: "Repurposing",
        deliverable: "2 LinkedIn posts + 1 Twitter thread scheduled/posted",
        dependsOn: "Blog #1 from yesterday",
      },
      {
        id: "s-d2-3",
        title: "Write LinkedIn Article #1 for Mudassir: 'Why Your Contract Data Shouldn't Live on Someone Else's Cloud'",
        description: "1,200 words. Published under Mudassir's LinkedIn profile (NOT company page).\n\nLinkedIn articles are Google-indexed and cited by AI engines at 50-66% of all LinkedIn AI citations.\n\nContent:\n• Opening: Every SaaS contract AI tool processes your contracts on their servers\n• The risk: data breach, privilege waiver, vendor lock-in\n• GDPR implications for data residency\n• What 'customer-cloud deployment' actually means (architecture explanation for business audience)\n• The alternative: AI that deploys in YOUR cloud, uses YOUR LLM accounts\n• CTA: 'If data sovereignty matters to your legal team, let's talk.'\n\nUse the data sovereignty stats from the research: 62% stalled by data security, 66% worried about IP/confidentiality.",
        hours: 4,
        category: "LinkedIn Article",
        deliverable: "LinkedIn article published on Mudassir's profile",
      },
      {
        id: "s-d2-4",
        title: "Write LinkedIn Newsletter #1: 'The Contract Intelligence Brief'",
        description: "First edition of the biweekly newsletter. Publish under Mudassir's profile.\n\nTitle: 'Why Your Contract Data Shouldn't Live on Someone Else's Cloud'\nLength: 1,000-1,200 words (can adapt from the LinkedIn article with expanded sections)\n\nThis is different from the article — the newsletter goes to subscribers with triple notification (email + push + in-app). 40-60% open rate.\n\nAdd a subscribe CTA at the end: 'Subscribe for biweekly insights on AI contract review, data sovereignty, and legal operations.'",
        hours: 1,
        category: "LinkedIn Newsletter",
        deliverable: "Newsletter #1 published on Mudassir's profile",
      },
    ],
    asad: [
      {
        id: "a-d2-1",
        title: "Design ROI One-Pager + Implementation Timeline One-Pager PDFs",
        description: "Design both PDFs using your template (created Friday).\n\n1. ROI ONE-PAGER — Saqlain wrote copy yesterday\n• 3-year TCO comparison table is the centerpiece\n• Make the payback period stat ($60-80K vs $100K/month) visually prominent\n• Include a simple bar chart or visual comparison\n\n2. IMPLEMENTATION TIMELINE — Saqlain writes copy this morning\n• Visual timeline format (horizontal or vertical)\n• 5 phases with icons\n• Show duration bars\n• Customer effort callout: '10-15 hours total'\n\nBrand colors. 1 page each. PDF export. Share with Mudassir for review.",
        hours: 4,
        category: "Sales Asset",
        deliverable: "ROI PDF + Timeline PDF designed",
        dependsOn: "Saqlain's copy (ROI from yesterday, Timeline from today)",
      },
      {
        id: "a-d2-2",
        title: "Create LinkedIn Carousel from Blog #1 (7 slides)",
        description: "Use your carousel template (created Friday).\n\nSlides — from Content Factory dashboard:\nSlide 1 (Hook): 'AI Contract Review in 2026: What Enterprise Legal Teams Need to Know'\nSlide 2 (Problem): '30 hours per MSA. $100K+/month. Inconsistent risk calls across reviewers.'\nSlide 3 (Shift): 'The 2026 shift: from 1 generic AI to 18 specialized agents'\nSlide 4 (Types): '3 types: SaaS (their cloud) vs Customer-Cloud (your cloud) vs Generic AI'\nSlide 5 (Data): '$1.75-3.1B market. 52% adoption. But 80% cite accuracy barriers.'\nSlide 6 (Features): '5 features to demand: ✓ Rulebook depth ✓ Data sovereignty...'\nSlide 7 (CTA): 'Want AI that deploys in YOUR cloud? → paralegent.ai/demo'\n\nExport as PDF for LinkedIn upload.",
        hours: 2,
        category: "LinkedIn Carousel",
        deliverable: "7-slide carousel PDF uploaded to LinkedIn",
        dependsOn: "Blog #1 published yesterday",
      },
      {
        id: "a-d2-3",
        title: "Repurpose Blog #2 → LinkedIn posts (Mudassir + Ali) + Twitter thread",
        description: "Same process as Saqlain did for Blog #1:\n\n1. LINKEDIN POST — MUDASSIR:\nHook: 'I watched an attorney spend 4 days redlining a single MSA...' (from Content Factory)\n\n2. LINKEDIN POST — ALI:\nHook: 'Most AI contract review tools are just glorified Ctrl+F...' (from Content Factory)\n\n3. TWITTER THREAD:\n5 tweets from Content Factory dashboard. Copy-paste.\n\nSchedule at 8-9 AM UK time.",
        hours: 2,
        category: "Repurposing",
        deliverable: "2 LinkedIn posts + 1 Twitter thread for Blog #2",
        dependsOn: "Blog #2 published yesterday",
      },
      {
        id: "a-d2-4",
        title: "Create email signature banners for Mudassir + Ali",
        description: "Use your template from Friday.\n600x100px. 'AI Contract Review | 30 Hours → 30 Minutes | paralegent.ai/demo'\nBrand colors. 2 versions (one per person).\nExport as PNG + HTML for email clients.",
        hours: 1,
        category: "Design",
        deliverable: "2 email signature banners (PNG + HTML)",
      },
    ],
  },

  // ── WEDNESDAY APRIL 8 ──
  {
    date: "2026-04-08",
    dayLabel: "Wednesday April 8",
    week: 1,
    saqlain: [
      {
        id: "s-d3-1",
        title: "Edit 3-Min Demo Video + 60-Sec Cut (Veo 3)",
        description: "Mudassir recorded raw demo footage Mon-Tue. Edit with Veo 3:\n\n3-MINUTE VERSION:\n• Product working in FIRST 5 SECONDS — no intro, no logo animation\n• Clean cuts, remove dead air\n• Text overlays at key moments: 'Uploading rulebook...', 'RED clause detected', 'Confidence: 94%', 'Suggested revision'\n• Subtitles throughout (85% watch muted on LinkedIn)\n• End card: 'Request a Demo → paralegent.ai/demo'\n\n60-SECOND VERSION:\n• The money shot: fastest path from upload to RED/ORANGE/GREEN highlights\n• Hook in first 2 seconds\n• Same overlays, faster pacing\n• Same end card\n\nExport both as MP4. Upload 3-min to YouTube + website. 60-sec for LinkedIn/Twitter.",
        hours: 6,
        category: "Video (Veo 3)",
        deliverable: "3-min demo video + 60-sec cut (MP4)",
        dependsOn: "Mudassir's raw footage from Mon-Tue",
      },
      {
        id: "s-d3-2",
        title: "Write Facebook posts for Blog #1 + Blog #2",
        description: "2 Facebook posts — use the copy from Content Factory dashboard.\n\nBlog #1 FB post: Shorter version of LinkedIn post. Include blog link directly (Facebook doesn't penalize links).\n\nBlog #2 FB post: Same approach.\n\nPost to Paralegent AI Facebook page.",
        hours: 1,
        category: "Repurposing",
        deliverable: "2 Facebook posts published",
      },
      {
        id: "s-d3-3",
        title: "Write Quora answers for 2 questions (from Friday bookmarks)",
        description: "Answer 2 of the 5 questions you bookmarked Friday.\n\nEach answer: 500-800 words, genuine expertise, data-backed.\nDO NOT promote Paralegent in either — we're building karma first.\nShare knowledge about contract review, AI in legal, industry challenges.\n\nLink to Blog #1 or #2 ONLY if it genuinely answers the question better than your comment.",
        hours: 2,
        category: "Quora",
        deliverable: "2 Quora answers published",
      },
    ],
    asad: [
      {
        id: "a-d3-1",
        title: "Create LinkedIn Carousel from Blog #2 (7 slides)",
        description: "Slides from Content Factory dashboard:\nSlide 1: 'How AI Contract Redlining Actually Works (5 Steps)'\nSlide 2: 'Step 1: Upload Your Rulebook — 80-150 terms with YOUR positions'\nSlide 3: 'Step 2: 18 AI Agents Analyze Every Clause'\nSlide 4: 'Step 3: GREEN / ORANGE / RED Classification'\nSlide 5: 'Step 4: 40-50 Precise Redlines in Word'\nSlide 6: 'Step 5: Attorney Reviews Findings, Not 80 Pages'\nSlide 7: 'Want to see it? → paralegent.ai/demo'\n\nExport as PDF.",
        hours: 2,
        category: "LinkedIn Carousel",
        deliverable: "7-slide carousel PDF for Blog #2",
      },
      {
        id: "a-d3-2",
        title: "Create YouTube Short #1 from Blog #1 (Veo 3)",
        description: "Title: 'AI Reviews a Contract in 8 Minutes (Here's How)'\n60 seconds, 9:16 vertical.\n\nScript from Content Factory:\n• Hook (0-3 sec): 'An 80-page MSA takes your legal team 30 hours. Watch what AI does.'\n• Body (3-30 sec): Quick walkthrough of the 3 steps\n• Close (30-45 sec): 'Multi-agent AI. Your cloud. Link in bio.'\n\nAdd text overlays + subtitles throughout.\nCreate with Veo 3 using blog content + any demo footage available.",
        hours: 3,
        category: "YouTube Short (Veo 3)",
        deliverable: "60-sec YouTube Short uploaded",
      },
      {
        id: "a-d3-3",
        title: "Repurpose YouTube Short #1 → Instagram Reel + TikTok + Facebook Video",
        description: "Same video, different captions:\n\nINSTAGRAM REEL: Caption from Content Factory dashboard. Update link in bio to blog #1.\n\nTIKTOK: Same video. Casual caption from Content Factory.\n\nFACEBOOK VIDEO: Same video. Facebook caption from Content Factory.\n\nThis takes 15 minutes per platform — just repost with different captions.",
        hours: 1,
        category: "Repurposing",
        deliverable: "IG Reel + TikTok + FB Video posted",
      },
      {
        id: "a-d3-4",
        title: "Create YouTube Short #2 from Blog #2 (Veo 3)",
        description: "Title: 'Watch AI Redline a Contract in Real-Time'\n60 seconds.\n\nScript from Content Factory:\n• Hook (0-3 sec): 'Watch 18 AI agents redline a contract in real-time'\n• Body (3-40 sec): Upload contract → agents activate → RED clause → confidence score → revision\n• Close (40-60 sec): 'From 30 hours to 30 minutes. Link in bio.'\n\nCreate with Veo 3.",
        hours: 3,
        category: "YouTube Short (Veo 3)",
        deliverable: "60-sec YouTube Short #2 uploaded",
      },
    ],
  },

  // ── THURSDAY APRIL 9 ──
  {
    date: "2026-04-09",
    dayLabel: "Thursday April 9",
    week: 1,
    saqlain: [
      {
        id: "s-d4-1",
        title: "Write LinkedIn Article #2: '18 AI Agents vs 1 Generic AI: Why Specialization Wins'",
        description: "1,200 words. Published under Mudassir's profile.\n\nContent:\n• Would you want 1 generalist doctor or 18 specialists for a complex diagnosis?\n• How single-LLM fails: context window limits, no specialization, inconsistent outputs\n• Multi-agent architecture: each agent expert in one area\n• The orchestrator: compares findings, resolves conflicts, prioritizes\n• Why this matters for contract review specifically\n• CTA: connect or demo\n\nLinkedIn articles are indexed by Google and cited by AI engines.",
        hours: 4,
        category: "LinkedIn Article",
        deliverable: "LinkedIn article #2 published on Mudassir's profile",
      },
      {
        id: "s-d4-2",
        title: "Write email follow-up sequence templates (3 variants)",
        description: "Ali needs these for his outreach. Write 3 templates:\n\n1. 'NO RESPONSE' #1 (sent Day 3):\nSubject: 'Quick follow-up'\nBody: <80 words. New angle from original email. Share a specific insight.\n\n2. 'NO RESPONSE' #2 (sent Day 7):\nSubject: 'Thought you'd find this useful'\nBody: <80 words. Share the 3-min demo video link. 'Takes 3 min to watch.'\n\n3. 'INTERESTED BUT NOT NOW' (monthly nurture):\nSubject: 'Quick update from Paralegent'\nBody: Share latest blog post or insight. No pressure. Keep relationship warm.\n\n80% of sales need 5+ touchpoints. Most give up after 1.",
        hours: 3,
        category: "Outreach Copy",
        deliverable: "3 email templates in shared doc for Ali",
      },
      {
        id: "s-d4-3",
        title: "Write Instagram captions for Blog #1 + #2 carousels",
        description: "2 Instagram captions (carousel posts).\nUse the copy from Content Factory dashboard.\nInclude hashtags: #LegalTech #AI #ContractReview #Enterprise #LegalAI #DataSovereignty",
        hours: 1,
        category: "Repurposing",
        deliverable: "2 Instagram carousel captions",
      },
      {
        id: "s-d4-4",
        title: "LinkedIn Company Page: Write 3 posts for the week",
        description: "3 posts for Paralegent company page:\n1. Share Blog #1 with company perspective\n2. Share Blog #2 with 'how it works' angle\n3. Product insight: behind-the-scenes of 18 agents\n\nShorter than personal posts. Professional tone. Include demo CTA.",
        hours: 1,
        category: "LinkedIn",
        deliverable: "3 company page posts scheduled",
      },
    ],
    asad: [
      {
        id: "a-d4-1",
        title: "Repurpose YouTube Short #2 → Instagram Reel + TikTok + Facebook Video",
        description: "Same process as Wednesday. Repost with platform-specific captions.",
        hours: 1,
        category: "Repurposing",
        deliverable: "IG Reel + TikTok + FB Video from Short #2",
      },
      {
        id: "a-d4-2",
        title: "Edit Founder Story Video with Veo 3 (2 min)",
        description: "Mudassir recorded this earlier in the week. Edit:\n• Clean edit, 2 min max\n• Subtitles throughout (85% watch muted)\n• No fancy intro — authentic, real\n• End card: Mudassir name + title + paralegent.ai/demo\n\nUpload to YouTube channel + save for LinkedIn.",
        hours: 4,
        category: "Video (Veo 3)",
        deliverable: "2-min founder story video (MP4)",
        dependsOn: "Mudassir's raw footage",
      },
      {
        id: "a-d4-3",
        title: "Create Instagram Carousels from Blog #1 + #2 (adapted from LinkedIn)",
        description: "Adapt both LinkedIn carousels to 1080x1080 Instagram format.\nSame content, adjusted sizing.\nUpload to Instagram with captions from Saqlain.",
        hours: 2,
        category: "Instagram",
        deliverable: "2 Instagram carousel posts",
      },
      {
        id: "a-d4-4",
        title: "Upload all videos to YouTube: Demo (3 min) + Founder Story + 2 Shorts",
        description: "Upload everything created this week to YouTube:\n1. 3-min demo video — use title, description, tags from Content Factory video brief\n2. Founder story — same\n3. Short #1 + Short #2\n\nFor each: custom thumbnail (use your template), keyword-rich description, timestamps for long-form, pinned comment with demo link.\n\nMake sure channel playlists are set up correctly.",
        hours: 2,
        category: "YouTube",
        deliverable: "4 videos live on YouTube",
      },
    ],
  },

  // ── FRIDAY APRIL 10 ──
  {
    date: "2026-04-10",
    dayLabel: "Friday April 10",
    week: 1,
    saqlain: [
      {
        id: "s-d5-1",
        title: "Start Blog #3: On-Premise Contract AI (BLUE OCEAN) — Research + Draft",
        description: "2,500 words due Monday. Start today, finish Monday.\n\nKeyword: 'on-premise contract AI / self-hosted' (1-2K vol, LOW competition — BLUE OCEAN)\nWe're literally the ONLY option ranking for this.\n\nToday: Research + draft first 1,500 words.\n• Research on-premise AI deployment models\n• Draft definition-first opening\n• Write H2 sections: What cloud-deployed means, how it differs from SaaS, why GDPR matters\n• Start the comparison table: SaaS vs Customer-Cloud\n\nFinish the remaining 1,000 words + FAQ + review on Monday.",
        hours: 5,
        category: "Blog",
        deliverable: "Blog #3 draft (60% complete)",
      },
      {
        id: "s-d5-2",
        title: "Write '5 Questions Every GC Should Ask Before Buying AI Contract Review' Checklist",
        description: "1-page PDF content (Asad designs the PDF today).\n\n5 Questions (designed so Paralegent's answers are strongest):\n1. 'Where does my contract data go during review?' → Data sovereignty\n2. 'Can I use my own AI model accounts (Azure OpenAI, AWS Bedrock, Google Vertex AI)?' → Your choice of AI model\n3. 'How many AI agents analyze each contract?' → 18 specialized domain analysts\n4. 'What happens to my data after the review?' → No vendor retention\n5. 'Is this a recurring subscription or one-time investment?' → One-time license\n\nFor each question: the question, why it matters (2 sentences), what the best answer looks like (2 sentences).\n\nThis is an outreach value-add — Ali attaches it to follow-up emails.",
        hours: 2,
        category: "Sales Asset",
        deliverable: "Checklist copy → Asad designs PDF today",
      },
      {
        id: "s-d5-3",
        title: "Medium: Republish setup + schedule Blog #1 for next week",
        description: "Set up the republishing process on Medium (account created Friday).\n\n1. Import Blog #1 to Medium using Import tool (maintains formatting)\n2. SET CANONICAL URL to: paralegent.ai/resources/blog/complete-guide-ai-contract-review\n3. Add 'Originally published on paralegent.ai' at top\n4. Add 2-3 inline CTAs\n5. DO NOT publish yet — schedule for April 20 (2 weeks after original)\n6. Submit to 'Towards AI' publication if possible\n\nThis process takes 20 min per blog. Do it every 2 weeks.",
        hours: 2,
        category: "Medium",
        deliverable: "Blog #1 scheduled for Medium republish April 20",
      },
    ],
    asad: [
      {
        id: "a-d5-1",
        title: "Start Blog #4: Multi-Agent AI vs Single LLM — Research + Draft",
        description: "2,500 words due Monday. Start today, finish Monday.\n\nKeyword: 'multi-agent AI legal' (3-4K vol, Medium comp)\nCategory we can OWN.\n\nToday: Research + draft first 1,500 words.\n• Research multi-agent AI architectures (how multiple specialized agents work together)\n• Draft definition-first opening\n• Write H2: What is multi-agent AI, How single LLM breaks\n• Start comparison table (Single LLM vs Multi-Agent across 8 dimensions)\n\nAnalogy throughout: 18 specialist doctors > 1 generalist.",
        hours: 5,
        category: "Blog",
        deliverable: "Blog #4 draft (60% complete)",
      },
      {
        id: "a-d5-2",
        title: "Design '5 Questions' Checklist PDF",
        description: "Saqlain writes the copy today. Design as branded PDF.\n\nFormat: Clean, professional, 1 page.\n5 numbered questions with 'Why it matters' + 'Best answer' for each.\nBrand colors. Paralegent logo. Demo CTA at bottom.\n\nThis gets attached to outreach emails as a value-add.",
        hours: 2,
        category: "Sales Asset",
        deliverable: "'5 Questions' branded PDF",
        dependsOn: "Saqlain's copy from today",
      },
      {
        id: "a-d5-3",
        title: "Design 'Paralegent At A Glance' Product Summary Sheet",
        description: "1-page product summary — the post-demo leave-behind.\n\nContent:\n• Logo + tagline at top\n• What it is: 1-paragraph description\n• How it works: 3-step visual (Upload Rulebook → AI Reviews → Redlines in Word)\n• Key numbers: 18 agents, 2-8 min review, 40-50 redlines, 80-150 rulebook terms\n• Differentiators: Customer-cloud, works with any AI model, GREEN/ORANGE/RED\n• CTA: Request a Demo\n\nReplace the 'let me send you more info' dead end with something concrete.",
        hours: 2,
        category: "Sales Asset",
        deliverable: "'At A Glance' product summary PDF",
      },
    ],
  },

  // ═══════════════════ WEEK 2 ═══════════════════

  // ── MONDAY APRIL 13 ──
  {
    date: "2026-04-13",
    dayLabel: "Monday April 13",
    week: 2,
    saqlain: [
      {
        id: "s-d6-1",
        title: "Finish Blog #3: On-Premise Contract AI (BLUE OCEAN)",
        description: "You drafted 60% on Friday. Finish the remaining 1,000 words:\n• Complete comparison table (SaaS vs Customer-Cloud)\n• Write: How Customer-Cloud deployment works (architecture for business audience)\n• Attorney-client privilege section\n• Compliance by geography: GDPR, CCPA, UAE Data Law\n• FAQ (3 questions)\n• Final review + publish\n\nThis is our BLUE OCEAN keyword — no competitor ranks for 'on-premise contract AI'. Every word matters.",
        hours: 4,
        category: "Blog",
        deliverable: "Blog #3 published on website",
      },
      {
        id: "s-d6-2",
        title: "Repurpose Blog #3 → LinkedIn (Mudassir + Ali) + Twitter + Facebook",
        description: "Create from Blog #3:\n1. LinkedIn post Mudassir — data sovereignty angle, CIO-focused\n2. LinkedIn post Ali — compliance angle (GDPR/CCPA)\n3. Twitter thread (5 tweets) — 'Every AI contract review tool is SaaS. Here's why that's a problem...' \n4. Facebook post — shorter version with direct link\n\nAll scheduled 8-9 AM UK time.",
        hours: 3,
        category: "Repurposing",
        deliverable: "2 LinkedIn posts + Twitter thread + Facebook post",
      },
      {
        id: "s-d6-3",
        title: "Write Quora answer #3 (from bookmarked questions)",
        description: "Pick a question about data security in AI or contract management.\n500-800 words. Genuine expertise.\nYou can now mention that 'some newer solutions like Paralegent deploy in the customer's own cloud' — as ONE option among several. Keep it balanced.",
        hours: 2,
        category: "Quora",
        deliverable: "1 Quora answer published",
      },
    ],
    asad: [
      {
        id: "a-d6-1",
        title: "Finish Blog #4: Multi-Agent AI vs Single LLM",
        description: "You drafted 60% on Friday. Finish:\n• Complete comparison table (8 dimensions)\n• Real-world example: how 18 agents review an 80-page MSA\n• The architecture explained for business audience — how 18 agents work together\n• FAQ (3 questions)\n• Final review + publish",
        hours: 4,
        category: "Blog",
        deliverable: "Blog #4 published on website",
      },
      {
        id: "a-d6-2",
        title: "Create LinkedIn Carousel from Blog #3 (7 slides) + Repurpose Blog #4",
        description: "Carousel from Blog #3: 'Your SaaS AI Tool Has Access to All Your Contracts. Should It?'\n7 slides — data sovereignty visual.\n\nRepurpose Blog #4:\n1. LinkedIn post Mudassir — 18 specialists vs 1 generalist analogy\n2. LinkedIn post Ali — technical angle, multi-agent architecture\n3. Twitter thread (5 tweets)\n4. Facebook post",
        hours: 5,
        category: "Repurposing",
        deliverable: "1 carousel + 2 LinkedIn posts + 1 Twitter thread + 1 FB post",
      },
    ],
  },

  // ── TUESDAY APRIL 14 ──
  {
    date: "2026-04-14",
    dayLabel: "Tuesday April 14",
    week: 2,
    saqlain: [
      {
        id: "s-d7-1",
        title: "Create YouTube Video: 'How AI Contract Review Works in 2026' (Veo 3)",
        description: "5-8 min explainer. Script from Blog #1 content. Create with Veo 3.\n\nScript outline:\n0:00 Hook: 'What if your legal team could review contracts in minutes?'\n0:30 What is AI contract review (definition)\n1:30 How it works (3 steps)\n3:00 Types of systems (SaaS vs cloud-deployed)\n4:30 Multi-agent vs single LLM\n5:30 Key features to look for\n6:30 CTA\n\nYouTube SEO: 'AI Contract Review' in first 40 chars of title. 200-word description. Timestamps. Tags from Content Factory.\n\nAlso cut 1 Short from this video.",
        hours: 7,
        category: "YouTube (Veo 3)",
        deliverable: "1 YouTube video + 1 Short uploaded",
      },
      {
        id: "s-d7-2",
        title: "Repurpose YouTube Short → IG Reel + TikTok + Facebook Video",
        description: "Repost the Short to all 3 platforms with platform-specific captions. 15 min per platform.",
        hours: 1,
        category: "Repurposing",
        deliverable: "IG Reel + TikTok + FB Video",
      },
      {
        id: "s-d7-3",
        title: "LinkedIn Company Page: 3 posts for the week",
        description: "3 company page posts:\n1. Share Blog #3 (data sovereignty angle)\n2. Share Blog #4 (multi-agent angle)\n3. Demo video announcement\n\nProfessional tone. Demo CTA.",
        hours: 1,
        category: "LinkedIn",
        deliverable: "3 company page posts scheduled",
      },
    ],
    asad: [
      {
        id: "a-d7-1",
        title: "Create LinkedIn Carousel from Blog #4 (7 slides)",
        description: "7 slides on multi-agent AI:\nSlide 1: 'Why 11 AI Specialists Beat 1 Generic AI for Contracts'\nSlide 2: How single LLM fails (context window, no specialization)\nSlide 3: 18 agents — each expert in their area\nSlide 4: How the orchestrator works\nSlide 5: Real example — 80-page MSA\nSlide 6: Results — 40-50 redlines with confidence\nSlide 7: CTA",
        hours: 2,
        category: "LinkedIn Carousel",
        deliverable: "7-slide carousel for Blog #4",
      },
      {
        id: "a-d7-2",
        title: "Create YouTube Short #3 from Blog #3 content (Veo 3) + repurpose",
        description: "Title: 'Your Data Never Leaves Your Cloud — Here's Why That Matters'\n60 sec, Veo 3.\n\nThen repurpose → IG Reel + TikTok + Facebook Video.",
        hours: 4,
        category: "YouTube Short (Veo 3)",
        deliverable: "Short #3 + IG Reel + TikTok + FB Video",
      },
      {
        id: "a-d7-3",
        title: "Create Instagram Carousels from Blog #3 + #4 (adapted from LinkedIn)",
        description: "Adapt LinkedIn carousels to 1080x1080. Same content, Instagram sizing. Post with hashtag captions.",
        hours: 2,
        category: "Instagram",
        deliverable: "2 Instagram carousel posts",
      },
      {
        id: "a-d7-4",
        title: "Design Competitive Comparison One-Pager (PDF)",
        description: "Paralegent vs LegalOn vs Spellbook vs Harvey — 6 dimensions:\n1. Deployment Model\n2. Pricing Model\n3. AI Architecture\n4. Data Handling\n5. Customization\n6. Vendor Lock-in Risk\n\nVisual table format. Brand colors. 1 page.\nThis gets shared when prospects say 'We're looking at LegalOn.'",
        hours: 1,
        category: "Sales Asset",
        deliverable: "Competitive comparison PDF",
      },
    ],
  },

  // ── WEDNESDAY APRIL 15 ──
  {
    date: "2026-04-15",
    dayLabel: "Wednesday April 15",
    week: 2,
    saqlain: [
      {
        id: "s-d8-1",
        title: "Start Blog #5: Data Sovereignty in Legal AI",
        description: "2,500 words. Keyword: 'data sovereignty legal AI' (2-3K vol, Medium comp).\n#1 unique positioning NO competitor owns.\n\nToday: Full draft (finish tomorrow).\nOutline: What is data sovereignty → How SaaS handles your data → How customer-cloud works → Comparison table → Why 62% cite security → Attorney-client privilege → GDPR/CCPA/UAE → Who should choose on-premise → FAQ",
        hours: 7,
        category: "Blog",
        deliverable: "Blog #5 draft (80% complete)",
      },
      {
        id: "s-d8-2",
        title: "Write LinkedIn Newsletter #2: 'The Contract Intelligence Brief'",
        description: "Biweekly edition #2. Topic: '18 AI Agents vs 1 Generic AI: What Every GC Should Know'\n1,000-1,200 words. Publish under Mudassir's profile.\nDraw from Blog #4 content but written in newsletter voice.",
        hours: 2,
        category: "LinkedIn Newsletter",
        deliverable: "Newsletter #2 published",
      },
    ],
    asad: [
      {
        id: "a-d8-1",
        title: "Start Blog #6: AI Contract Review vs Manual Review",
        description: "2,500 words. Keyword: 'AI contract review vs manual review'.\nData-heavy comparison. Today: Full draft (finish tomorrow).\n\nOutline: How manual review works → Where it fails at scale → How AI review works → Comparison table (Time, Cost, Accuracy, Consistency, Scalability) → ROI numbers → FAQ",
        hours: 7,
        category: "Blog",
        deliverable: "Blog #6 draft (80% complete)",
      },
      {
        id: "a-d8-2",
        title: "Create YouTube Short #4 from Blog #4 content (Veo 3) + repurpose",
        description: "Title: 'This Is What 18 AI Agents Reviewing a Contract Looks Like'\n60 sec, Veo 3. Then → IG Reel + TikTok + FB Video.",
        hours: 2,
        category: "YouTube Short (Veo 3)",
        deliverable: "Short #4 + IG + TikTok + FB",
      },
    ],
  },

  // ── THURSDAY APRIL 16 ──
  {
    date: "2026-04-16",
    dayLabel: "Thursday April 16",
    week: 2,
    saqlain: [
      {
        id: "s-d9-1",
        title: "Finish Blog #5 + publish",
        description: "Complete the remaining 20%. Add FAQ, final review, publish.\nJSON-LD: BlogPosting + FAQPage + BreadcrumbList.",
        hours: 2,
        category: "Blog",
        deliverable: "Blog #5 published",
      },
      {
        id: "s-d9-2",
        title: "Repurpose Blog #5 → LinkedIn (Mudassir + Ali) + Twitter + Facebook + Quora",
        description: "1. LinkedIn post Mudassir — 'Why your contract data should never leave your cloud'\n2. LinkedIn post Ali — GDPR compliance angle\n3. Twitter thread (5 tweets)\n4. Facebook post with direct link\n5. Quora answer: find a question about legal AI data security, write 500-800 word answer",
        hours: 4,
        category: "Repurposing",
        deliverable: "2 LinkedIn + Twitter + FB + Quora",
      },
      {
        id: "s-d9-3",
        title: "Write post-demo email templates (3 variants for Ali)",
        description: "Ali needs these NOW — demos are happening.\n\n(a) 'PROSPECT NEEDS CIO INVOLVEMENT':\nSubject: 'Security details for your IT team'\nBody: Attach Security one-pager. Brief note: 'Your data never leaves your cloud.'\n\n(b) 'PROSPECT NEEDS BUDGET APPROVAL':\nSubject: 'ROI analysis for your CFO'\nBody: Attach ROI one-pager. Key stat: 'Pays for itself month 1.'\n\n(c) 'PROSPECT NEEDS TIMELINE CLARITY':\nSubject: 'Implementation timeline'\nBody: Attach Timeline one-pager. '8-10 weeks, live in your cloud.'",
        hours: 3,
        category: "Outreach Copy",
        deliverable: "3 post-demo email templates for Ali",
      },
    ],
    asad: [
      {
        id: "a-d9-1",
        title: "Finish Blog #6 + publish",
        description: "Complete remaining 20%. Add comparison table, FAQ, review, publish.",
        hours: 2,
        category: "Blog",
        deliverable: "Blog #6 published",
      },
      {
        id: "a-d9-2",
        title: "Create LinkedIn Carousels from Blog #5 + #6",
        description: "Two carousels, 7 slides each.\nBlog #5: Data sovereignty visual.\nBlog #6: Manual vs AI comparison with data.",
        hours: 4,
        category: "LinkedIn Carousel",
        deliverable: "2 carousels (14 slides total)",
      },
      {
        id: "a-d9-3",
        title: "Repurpose Blog #6 → LinkedIn (Mudassir + Ali) + Twitter + Facebook",
        description: "Standard repurposing flow. Data-heavy comparison angle.",
        hours: 3,
        category: "Repurposing",
        deliverable: "2 LinkedIn + Twitter + FB for Blog #6",
      },
    ],
  },

  // ── FRIDAY APRIL 17 ──
  {
    date: "2026-04-17",
    dayLabel: "Friday April 17",
    week: 2,
    saqlain: [
      {
        id: "s-d10-1",
        title: "Start Blog #7: 10 Best AI Contract Review Tools 2026 — Research",
        description: "3,000 word listicle. Keyword: 'best AI contract review tools 2026' (3K+ vol).\nListicle pages earn 3-5x more AI citations.\n\nToday: RESEARCH DAY.\n• Research all 10 competitors: LegalOn, Spellbook, Harvey, Luminance, Ironclad, Icertis, Kira/Litera, LexCheck, ThoughtRiver\n• For each: 200-word overview, 3-4 pros, 2-3 cons, pricing range, 'Best For' tag\n• Build the master comparison table (10 tools × 8 features)\n• Draft first 1,500 words\n\nParalegent = #1 for Data Sovereignty and Multi-Agent Architecture.",
        hours: 7,
        category: "Blog",
        deliverable: "Blog #7 research + draft (50% complete)",
      },
      {
        id: "s-d10-2",
        title: "Medium: Schedule Blog #2 for republish + Reddit engagement",
        description: "1. Import Blog #2 to Medium, set canonical URL, schedule for April 21\n2. Browse r/legaltech — read posts, upvote good content. Still building karma. DO NOT promote.",
        hours: 2,
        category: "Medium + Reddit",
        deliverable: "Blog #2 scheduled on Medium + Reddit karma building",
      },
    ],
    asad: [
      {
        id: "a-d10-1",
        title: "Start Blog #8: Paralegent vs LegalOn — Research",
        description: "2,500 words. Keyword: 'Paralegent vs LegalOn / LegalOn alternatives'.\n\nToday: RESEARCH.\n• Deep-dive LegalOn: features, pricing, deployment model, limitations\n• Build 10-row feature comparison table\n• Draft first 1,500 words\n• Focus: cloud-deployed vs SaaS, multi-agent vs single, rulebook depth vs pre-built playbooks",
        hours: 5,
        category: "Blog",
        deliverable: "Blog #8 research + draft (50% complete)",
      },
      {
        id: "a-d10-2",
        title: "Create YouTube Video: 'Data Sovereignty in Legal AI' (Veo 3)",
        description: "5-8 min from Blog #5 content. Veo 3.\nScript: Why data sovereignty matters → How SaaS handles data → Customer-cloud alternative → GDPR implications → CTA.\nCut 1 Short from this video. Repurpose → IG + TikTok + FB.",
        hours: 4,
        category: "YouTube (Veo 3)",
        deliverable: "YouTube video + Short + IG + TikTok + FB",
      },
    ],
  },
];
