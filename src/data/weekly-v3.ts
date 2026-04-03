import type { WeekData } from "./types";

// ============================================================
// FULL v3 WEEKLY BREAKDOWN — 8 Weeks Starting Monday April 7, 2026
// Saqlain + Asad = interchangeable, 50/50 split
// All platforms, 2 blogs/week, Veo 3 videos, outbound engine
// ============================================================

export const weeklyPlan: WeekData[] = [
  // ═══════════════════════════ WEEK 1: April 7-11 ═══════════════════════════
  {
    week: 1,
    phase: 1,
    phaseTitle: "Build the Arsenal",
    goal: "Sales assets + platform registrations (P0) + first 2 blogs + LinkedIn optimization + outreach infra",
    tasks: [
      // ── MUDASSIR ──
      {
        id: "w1-m1", title: "Record raw product demo video", assignee: "Mudassir", week: 1, day: "Mon-Tue", hours: 8, priority: "P0", status: "not_started", phase: 1, category: "Sales Asset",
        description: "Screen record a REAL contract review in Word: upload rulebook → click review → watch GREEN/ORANGE/RED highlights appear. Multiple takes. No slides — just the product working. Raw footage goes to Saqlain for editing with Veo 3.",
        salesConnection: "GCs rank demo video #2 before buying. Every outreach email links to this.", deliverable: "Raw demo footage (15-20 min) → Saqlain edits to 3 min + 60 sec", funnelStage: "outreach",
      },
      {
        id: "w1-m2", title: "Write 3 Founder Letter cold email templates", assignee: "Mudassir", week: 1, day: "Wed", hours: 4, priority: "P0", status: "not_started", phase: 1, category: "Outreach",
        description: "Personal emails from CEO. 3 variants:\n1. Manufacturing: supply chain contracts, vendor agreements\n2. Technology: MSAs, IP clauses, deal velocity\n3. Energy: compliance, long-term service agreements\nEach: <80 words, pain-focused, demo video link.",
        salesConnection: "Founder letter converts 3-5x vs marketing emails. Harvey founder messaged THOUSANDS.", deliverable: "3 email templates in shared doc", funnelStage: "outreach",
      },
      {
        id: "w1-m3", title: "Write ROI one-pager content + LinkedIn outreach playbook", assignee: "Mudassir", week: 1, day: "Thu-Fri", hours: 8, priority: "P0", status: "not_started", phase: 1, category: "Sales Asset",
        description: "ROI one-pager: $100K/month manual → $60-80K one-time, 30hrs→30min, 3-year TCO comparison.\n\nLinkedIn playbook: 3 connection request variants + 3-touch follow-up sequence. Signal-based, content-based, and direct approaches.",
        salesConnection: "ROI one-pager goes GC→CFO for budget. LinkedIn outreach = 287% higher results combined with email.", deliverable: "ROI copy + LinkedIn playbook in shared doc", funnelStage: "outreach",
      },
      {
        id: "w1-m4", title: "Optimize LinkedIn profile", assignee: "Mudassir", week: 1, day: "Fri", hours: 2, priority: "P0", status: "not_started", phase: 1, category: "LinkedIn",
        description: "Headline: 'Building AI That Reviews Contracts in Your Own Cloud | 11 Specialized Agents | Data Never Leaves Your Environment'\nAbout: Founder story — WHY this problem matters. CTA to connect.\nFeatured: Demo video (when ready), articles.\nBanner: Product screenshot.",
        salesConnection: "Prospects CHECK founder profile after receiving outreach. Profile = first impression.", deliverable: "Optimized LinkedIn profile", funnelStage: "awareness",
      },
      // ── ALI ──
      {
        id: "w1-a1", title: "Build 200-contact UK prospect list", assignee: "Ali", week: 1, day: "Mon-Tue", hours: 12, priority: "P0", status: "not_started", phase: 1, category: "Outreach",
        description: "LinkedIn Sales Navigator + Crunchbase + press releases.\nTarget: GCs, CLOs, VP Legal, Director Legal Ops\nRevenue: $200M-$5B | Industries: Manufacturing, Tech, Energy | Geography: UK\nLegal team: 5+ attorneys | Contract volume: 50+ MSAs/year\nCapture: name, title, company, revenue, email (Hunter.io/Apollo), LinkedIn URL, recent trigger event.",
        salesConnection: "UK first: GDPR tailwind for data sovereignty pitch. 2-4 month sales cycles.", deliverable: "200-contact spreadsheet", funnelStage: "outreach",
      },
      {
        id: "w1-a2", title: "Set up outreach infrastructure", assignee: "Ali", week: 1, day: "Wed-Thu", hours: 10, priority: "P0", status: "not_started", phase: 1, category: "Outreach",
        description: "1. Buy + warm outreach email domains (2-3 domains)\n2. Configure Instantly: add domains, set warm-up 20/day increasing, create campaigns\n3. Set up Clay for lead enrichment + signal monitoring\n4. LinkedIn Sales Navigator: save lead lists, set alerts\n5. Create tracking spreadsheet: Contact | Company | Email Sent | LinkedIn Sent | Status | Reply | Demo\n6. Set up Google Alerts for funded companies, GC hires, M&A in target industries",
        salesConnection: "Cold email from cold domain = spam. Domain warming takes 4-6 weeks — start NOW.", deliverable: "Instantly + Clay + Sales Nav configured, tracking spreadsheet", funnelStage: "outreach",
      },
      {
        id: "w1-a3", title: "Platform registrations: G2 + Capterra + Crunchbase", assignee: "Ali", week: 1, day: "Fri", hours: 6, priority: "P0", status: "not_started", phase: 1, category: "Platform Registration",
        description: "Register on all 3 P0 platforms using the exact copy from platform registrations data. Saqlain helps with copy review. Upload logo, screenshots, fill all fields. See dashboard for step-by-step.",
        salesConnection: "54.53% of AI citation sources come from directory listings. G2 profiles appear in ChatGPT answers.", deliverable: "3 platform profiles live", funnelStage: "awareness",
      },
      {
        id: "w1-a4", title: "Optimize Ali's LinkedIn profile", assignee: "Ali", week: 1, day: "Fri", hours: 1, priority: "P1", status: "not_started", phase: 1, category: "LinkedIn",
        description: "Headline: 'Growth Lead @ Paralegent AI | AI Contract Review That Deploys in Your Cloud'\nAbout: Role at Paralegent, what the product does, CTA.\nThis is personal account #2 for outreach and content.",
        salesConnection: "Two personal LinkedIn accounts = 2x reach. Ali's profile supports outreach credibility.", deliverable: "Optimized Ali LinkedIn profile", funnelStage: "awareness",
      },
      // ── SAQLAIN ──
      {
        id: "w1-s1", title: "Write Blog #1: Complete Guide to AI Contract Review", assignee: "Saqlain", week: 1, day: "Mon-Tue", hours: 10, priority: "P0", status: "not_started", phase: 1, category: "Blog",
        description: "3,500 words. Keyword: 'AI contract review software' (15K+ volume).\nStructure: Definition-first opening (<80 words) → TLDR box → Problem (with stats) → How It Works (step-by-step) → Types of Systems → Comparison Table → Key Features → Market in 2026 → How to Evaluate → FAQ (5 questions, 40-60 words each) → CTA.\nGEO rules: H2 every 300-400 words, 2-3 stats per 300 words, question-style headings.\nJSON-LD: BlogPosting + FAQPage + BreadcrumbList.",
        salesConnection: "Pillar content. Links in every outreach email. Foundation for all other content.", deliverable: "Published blog on paralegent.ai/resources/blog", funnelStage: "awareness", pillar: "Education",
      },
      {
        id: "w1-s2", title: "Write Security & Data Sovereignty one-pager", assignee: "Saqlain", week: 1, day: "Wed", hours: 5, priority: "P0", status: "not_started", phase: 1, category: "Sales Asset",
        description: "One page (NOT whitepaper). CIO scans in 60 seconds:\n1. WHERE data lives: Customer's own cloud\n2. HOW LLMs used: Customer's own accounts\n3. WHAT happens to data: Processed locally, no vendor retention\n4. COMPLIANCE: GDPR-ready, no vendor data retention\n5. NO LOCK-IN: Customer owns deployment\nCopy goes to Asad for design.",
        salesConnection: "62% of deals stall on data security. This unblocks the CIO/CISO.", deliverable: "Security one-pager copy → Asad designs PDF", funnelStage: "demo",
      },
      {
        id: "w1-s3", title: "Write Implementation Timeline one-pager", assignee: "Saqlain", week: 1, day: "Thu", hours: 4, priority: "P0", status: "not_started", phase: 1, category: "Sales Asset",
        description: "Visual timeline: Week 1-2 Discovery → Week 3-4 Agent Config → Week 5-6 Integration → Week 7-8 Word Add-In → Week 9-10 Go Live.\nInclude: team involved, customer effort required (10-15 hrs total).",
        salesConnection: "'How long until we're live?' is Q#2 after every demo.", deliverable: "Timeline copy → Asad designs PDF", funnelStage: "demo",
      },
      {
        id: "w1-s4", title: "Edit 3-min demo video + 60-sec cut (Veo 3)", assignee: "Saqlain", week: 1, day: "Fri", hours: 6, priority: "P0", status: "not_started", phase: 1, category: "Sales Asset",
        description: "From Mudassir's raw footage, create with Veo 3:\n3-MIN: Clean cuts, text overlays ('RED clause detected', 'Confidence: 94%'), product working in first 5 seconds, subtitles, end card.\n60-SEC: Money shot highlight reel for LinkedIn/Twitter.",
        salesConnection: "THE most important asset. Goes on website, in emails, on LinkedIn.", deliverable: "3-min demo + 60-sec cut (MP4)", funnelStage: "outreach", dependsOn: ["w1-m1"],
      },
      // ── ASAD ──
      {
        id: "w1-d1", title: "Write Blog #2: How AI Contract Redlining Works", assignee: "Asad", week: 1, day: "Mon-Tue", hours: 10, priority: "P0", status: "not_started", phase: 1, category: "Blog",
        description: "2,500 words. Keyword: 'AI contract redlining' (9K+ volume).\nStructure: Definition → How Traditional Redlining Fails → Step 1: Upload Rulebook → Step 2: AI Agents Parse → Step 3: GREEN/ORANGE/RED → Step 4: Inline Redlines → Step 5: Attorney Reviews → Comparison Table (Manual vs Generic AI vs Rulebook-Driven) → FAQ (3 questions).\nJSON-LD: BlogPosting + HowTo + FAQPage + BreadcrumbList.",
        salesConnection: "Product explanation blog. Send to prospects who ask 'how does it actually work?'", deliverable: "Published blog on website", funnelStage: "outreach", pillar: "Solution",
      },
      {
        id: "w1-d2", title: "Design 3 branded PDF one-pagers", assignee: "Asad", week: 1, day: "Wed-Thu", hours: 10, priority: "P0", status: "not_started", phase: 1, category: "Sales Asset",
        description: "Design ROI, Security, and Implementation Timeline as branded PDFs.\nBrand: Deep Teal #042729 headers, Orange #FF4800 accents, White/Cream #FCFCFA bg, Light Peach #FCDED2 icons.\nEach: 1 page, scannable in 60 seconds, Fortune 500 CIO-ready.",
        salesConnection: "Email attachments + LinkedIn DM follow-ups. Professional design = professional product.", deliverable: "3 branded PDFs", funnelStage: "demo", dependsOn: ["w1-s2", "w1-s3", "w1-m3"],
      },
      {
        id: "w1-d3", title: "Product Hunt 'Coming Soon' page + blog visuals", assignee: "Asad", week: 1, day: "Fri", hours: 6, priority: "P0", status: "not_started", phase: 1, category: "Platform Registration",
        description: "1. Set up Product Hunt Coming Soon page: logo (240x240), thumbnail, gallery images (1270x760), tagline (60 chars). DO NOT launch yet.\n2. Create hero images + process diagrams for Blog #1 and Blog #2.\n3. Create LinkedIn carousel (7 slides) from Blog #1 content.",
        salesConnection: "PH prep for Month 4-6 launch. Blog visuals get 94% more views.", deliverable: "PH Coming Soon live + blog visuals + 1 LinkedIn carousel", funnelStage: "awareness",
      },
    ],
  },

  // ═══════════════════════════ WEEK 2: April 14-18 ═══════════════════════════
  {
    week: 2,
    phase: 1,
    phaseTitle: "Build the Arsenal",
    goal: "Complete assets + first outreach (50) + blogs #3-4 (blue ocean) + platform registrations (P1) + LinkedIn posting starts + YouTube channel",
    tasks: [
      // ── MUDASSIR ──
      {
        id: "w2-m1", title: "Record founder story video + start LinkedIn posting", assignee: "Mudassir", week: 2, day: "Mon", hours: 4, priority: "P0", status: "not_started", phase: 1, category: "Content",
        description: "Record 2-min 'Why I Built Paralegent' — authentic, not scripted. Key: 50+ GenAI systems deployed, legal teams drowning, 11 specialized agents.\nStart posting on LinkedIn: 3-5 posts this week. Mix of text + share blog content.",
        salesConnection: "Founder authenticity converts. Prospects see this when checking your profile.", deliverable: "Raw founder video → Asad edits + 3-5 LinkedIn posts published", funnelStage: "awareness",
      },
      {
        id: "w2-m2", title: "20 personal LinkedIn warm-up connections + design partner outreach", assignee: "Mudassir", week: 2, day: "Tue-Fri", hours: 20, priority: "P0", status: "not_started", phase: 1, category: "Sales",
        description: "LinkedIn warm-up: Connect with 20 GCs, legal ops directors, CLM consultants. No pitch — engage with their posts.\n\nDesign partners: Identify and reach out to 3-5 candidates from personal network + Cognilium clients. Offer: 40% discount for case study + logo + reference calls.\n25% of first 10 customers come from design partners. 60-80% convert to paid.",
        salesConnection: "Design partners = fastest path to first revenue + case study + social proof.", deliverable: "20 connections + 3-5 design partner conversations", funnelStage: "pilot",
      },
      // ── ALI ──
      {
        id: "w2-a1", title: "Expand list to 300 (UAE) + demo booking flow", assignee: "Ali", week: 2, day: "Mon-Tue", hours: 10, priority: "P0", status: "not_started", phase: 1, category: "Outreach",
        description: "Add 100 UAE/GCC contacts. Manufacturing + energy companies with large procurement teams.\nSet up Calendly/Cal.com → Google Calendar → auto-confirmation with demo video link. One-click booking from any outreach touchpoint.",
        salesConnection: "UAE = HQ geography. One-click demo booking eliminates friction.", deliverable: "300 total contacts + booking flow live", funnelStage: "outreach",
      },
      {
        id: "w2-a2", title: "FIRST OUTREACH BATCH: 50 messages", assignee: "Ali", week: 2, day: "Wed-Thu", hours: 10, priority: "P0", status: "not_started", phase: 1, category: "Outreach",
        description: "Send 25 emails + 25 LinkedIn connections to UK prospects. Use Mudassir's founder letter templates.\nMulti-channel sequence per prospect:\nDay 1: LinkedIn connection (personalized)\nDay 2: Cold email #1 (pain-focused, <80 words, demo video link)\nTrack everything in spreadsheet.",
        salesConnection: "Pipeline starts NOW. 10% reply rate = 5 conversations from 50 touches.", deliverable: "50 outreach messages sent + tracking started", funnelStage: "outreach",
      },
      {
        id: "w2-a3", title: "Platform registrations: AlternativeTo + Clutch + AngelList + Legal Tech Hub", assignee: "Ali", week: 2, day: "Fri", hours: 5, priority: "P1", status: "not_started", phase: 1, category: "Platform Registration",
        description: "Register on 4 P1 platforms. Reuse G2 copy and assets. See dashboard for step-by-step instructions per platform.\nAlternativeTo: tag as alternative to LegalOn, Spellbook, Harvey, Luminance, Ironclad.",
        salesConnection: "AlternativeTo captures competitor comparison traffic. Clutch = enterprise buyer reviews.", deliverable: "4 platform profiles live", funnelStage: "awareness",
      },
      {
        id: "w2-a4", title: "Start Ali's LinkedIn posting (3x/week)", assignee: "Ali", week: 2, day: "Mon-Fri", hours: 3, priority: "P1", status: "not_started", phase: 1, category: "LinkedIn",
        description: "3 posts this week on Ali's personal account. Content: share blog posts with personal take, product insights, legal tech industry comments. Build credibility for outreach.",
        salesConnection: "Prospects check your LinkedIn after receiving outreach. Active profile = credible.", deliverable: "3 LinkedIn posts published on Ali's account", funnelStage: "awareness",
      },
      // ── SAQLAIN ──
      {
        id: "w2-s1", title: "Write Blog #3: On-Premise Contract AI (BLUE OCEAN)", assignee: "Saqlain", week: 2, day: "Mon-Tue", hours: 10, priority: "P0", status: "not_started", phase: 1, category: "Blog",
        description: "2,500 words. Keyword: 'on-premise contract AI / self-hosted' (1-2K vol, LOW competition — BLUE OCEAN).\nWe're literally the ONLY option for this keyword. This is category-creating content.\nCover: What cloud-deployed means, how it differs from SaaS, why it matters for GDPR/privilege, architecture diagram, comparison table.\nJSON-LD: BlogPosting + FAQPage + BreadcrumbList.",
        salesConnection: "BLUE OCEAN — no competitor ranks for this. Share with CIOs. Landing page material.", deliverable: "Published blog", funnelStage: "demo", pillar: "Trust",
      },
      {
        id: "w2-s2", title: "Repurpose Blogs #1 + #2 to ALL platforms", assignee: "Saqlain", week: 2, day: "Wed-Thu", hours: 10, priority: "P0", status: "not_started", phase: 1, category: "Repurposing",
        description: "For EACH blog, create:\n- LinkedIn text post (Mudassir's account) with key insight\n- LinkedIn text post (Ali's account) with different angle\n- Twitter thread (5-7 tweets)\n- Medium republish with canonical URL (wait 1-2 weeks from publish)\n- Facebook post\n- Instagram caption for carousel/reel\n- TikTok caption\n- Quora answer (find relevant question, write 500-800 word answer mentioning blog)\n- Reddit comment on r/legaltech (if relevant thread exists — DO NOT promote)",
        salesConnection: "1 blog → 9 platform pieces = 18 total from 2 blogs. Neil Patel: repurpose across 10+ channels.", deliverable: "18 repurposed pieces across all platforms", funnelStage: "awareness",
      },
      {
        id: "w2-s3", title: "Write email follow-up sequences + LinkedIn newsletter #1", assignee: "Saqlain", week: 2, day: "Fri", hours: 6, priority: "P0", status: "not_started", phase: 1, category: "Outreach",
        description: "Email sequences:\n1. 'No response' #1 (Day 3): New angle, short\n2. 'No response' #2 (Day 7): Share demo video\n3. 'Interested but not now' nurture: Monthly check-in\n\nLinkedIn Newsletter #1: 'The Contract Intelligence Brief' — biweekly. Topic: 'Why Your Contract Data Shouldn't Live on Someone Else's Cloud.' Publish under Mudassir's profile.",
        salesConnection: "80% of sales need 5+ touchpoints. Newsletter: 40-60% open rates, bypasses algorithm.", deliverable: "3 email templates + newsletter #1 published", funnelStage: "outreach",
      },
      // ── ASAD ──
      {
        id: "w2-d1", title: "Write Blog #4: Multi-Agent AI vs Single LLM", assignee: "Asad", week: 2, day: "Mon-Tue", hours: 10, priority: "P0", status: "not_started", phase: 1, category: "Blog",
        description: "2,500 words. Keyword: 'multi-agent AI legal' (3-4K vol, Medium comp).\nCategory we can own. Analogy: 11 specialist doctors > 1 generalist.\nCover: What is multi-agent, how single LLM breaks, how orchestration works, comparison table (8 dimensions), real-world example (80-page MSA), architecture (LangGraph + ADK).\nJSON-LD: BlogPosting + FAQPage.",
        salesConnection: "Differentiates from EVERY competitor. Send to technical buyers (CIOs, CTOs).", deliverable: "Published blog", funnelStage: "demo", pillar: "Solution",
      },
      {
        id: "w2-d2", title: "Edit founder story video (Veo 3) + YouTube channel setup", assignee: "Asad", week: 2, day: "Wed", hours: 6, priority: "P0", status: "not_started", phase: 1, category: "Content",
        description: "Edit Mudassir's founder story: clean edit, 2 min max, subtitles.\nSet up YouTube channel: logo, banner, about section, 'Visit Website' button → /demo, create playlists ('AI Contract Review Demos', 'Legal AI Explained').\nUpload demo video + founder story as first 2 videos.",
        salesConnection: "YouTube = first-mover opportunity. Competitors have minimal presence.", deliverable: "Polished founder video + YouTube channel live with 2 videos", funnelStage: "awareness",
      },
      {
        id: "w2-d3", title: "Create 2 LinkedIn carousels + email signature banners + Veo 3 YouTube Short", assignee: "Asad", week: 2, day: "Thu-Fri", hours: 10, priority: "P0", status: "not_started", phase: 1, category: "Content",
        description: "Carousel 1: From Blog #2 'How AI Redlining Works' (7 slides)\nCarousel 2: From Blog #3 'On-Premise Contract AI' (7 slides)\nEmail banners: 'AI Contract Review | 30 Hours → 30 Minutes | paralegent.ai/demo' for Mudassir + Ali\nYouTube Short: 60-sec 'Watch AI flag a risky clause in 3 seconds' from demo footage, created with Veo 3.",
        salesConnection: "Carousels = 585% more engagement than text on LinkedIn. Shorts = discovery engine.", deliverable: "2 carousels + 2 email banners + 1 YouTube Short", funnelStage: "awareness",
      },
    ],
  },

  // ═══════════════════════════ WEEK 3: April 21-25 ═══════════════════════════
  {
    week: 3,
    phase: 2,
    phaseTitle: "Launch the Engine",
    goal: "Outreach at 100/week + first demos + blogs #5-6 + platform registrations (P2 batch 1) + YouTube regular + all social active",
    tasks: [
      {
        id: "w3-m1", title: "Full-time demos + founder outreach (10/day) + pitch Artificial Lawyer", assignee: "Mudassir", week: 3, day: "Mon-Fri", hours: 40, priority: "P0", status: "not_started", phase: 2, category: "Sales",
        description: "Respond to all outreach replies. Conduct all booked demos. 10 personal hand-written LinkedIn messages/day. Comment on 5 GC/legal ops posts daily.\nPitch Artificial Lawyer (Richard Tromans): email editor@artificiallawyer.com with 'First cloud-deployed multi-agent contract AI' angle. Offer hands-on demo.",
        salesConnection: "CEO outreach = 3-5x conversion. Artificial Lawyer feature = instant GC credibility.", deliverable: "50 personal messages + demos + Artificial Lawyer pitch", funnelStage: "demo",
      },
      {
        id: "w3-a1", title: "100 outreach + follow-ups + update /demo page", assignee: "Ali", week: 3, day: "Mon-Fri", hours: 35, priority: "P0", status: "not_started", phase: 2, category: "Outreach",
        description: "50 new (25 email + 25 LinkedIn) + follow up ALL Week 2 non-responders.\nUpdate /demo page: embed 3-min demo video, add Calendly booking, add downloadable PDFs (security, ROI, timeline).\nAdd 50 new contacts from signal tracking (funded companies, GC job changes).",
        salesConnection: "Demo page = conversion point for all outreach. Every message points here.", deliverable: "100 outreach + /demo page updated", funnelStage: "outreach",
      },
      {
        id: "w3-a2", title: "Platform registrations: ILTA + ACC + SourceForge + SaaSHub + LawSites pitch", assignee: "Ali", week: 3, day: "Wed-Thu", hours: 6, priority: "P1", status: "not_started", phase: 2, category: "Platform Registration",
        description: "Register on ILTA, ACC Buyer's Guide, SourceForge, SaaSHub.\nPitch LawSites (Bob Ambrogi): offer exclusive hands-on product review. Mudassir sends the email, Ali preps the materials.",
        salesConnection: "ILTA + ACC = where GCs browse for tools. Bob Ambrogi review = massive legal tech traffic.", deliverable: "4 platforms registered + LawSites pitch sent", funnelStage: "awareness",
      },
      {
        id: "w3-a3", title: "Ali LinkedIn: 3 posts + company page 3 posts", assignee: "Ali", week: 3, day: "Mon-Fri", hours: 3, priority: "P1", status: "not_started", phase: 2, category: "LinkedIn",
        description: "3 posts on Ali's personal account + 3 posts on Paralegent company page. Share blog insights, product updates, industry commentary.",
        salesConnection: "Consistent LinkedIn presence supports outreach credibility.", deliverable: "6 LinkedIn posts", funnelStage: "awareness",
      },
      {
        id: "w3-s1", title: "Write Blog #5: Data Sovereignty in Legal AI", assignee: "Saqlain", week: 3, day: "Mon-Tue", hours: 10, priority: "P0", status: "not_started", phase: 2, category: "Blog",
        description: "2,500 words. Keyword: 'data sovereignty legal AI' (2-3K vol, Medium comp).\n#1 unique positioning NO competitor owns. Cite GDPR, EU AI Act, CCPA, attorney-client privilege implications.\nComparison table: SaaS vs customer-cloud across security, privilege, compliance, cost, control.",
        salesConnection: "Send to CIOs when data concerns come up in demos. Our strongest differentiator.", deliverable: "Published blog", funnelStage: "demo", pillar: "Trust",
      },
      {
        id: "w3-s2", title: "Repurpose Blogs #3 + #4 + write '5 Questions' checklist", assignee: "Saqlain", week: 3, day: "Wed-Thu", hours: 10, priority: "P0", status: "not_started", phase: 2, category: "Repurposing",
        description: "Repurpose both blogs to ALL platforms (9 pieces each = 18 total).\nWrite '5 Questions Every GC Should Ask Before Buying AI Contract Review Software' PDF — outreach value-add attachment. Questions designed so Paralegent's answers are strongest.",
        salesConnection: "Give before asking. Positions as thought leader, not vendor.", deliverable: "18 repurposed pieces + 5 Questions PDF copy → Asad designs", funnelStage: "outreach",
      },
      {
        id: "w3-s3", title: "Create YouTube video: 'How AI Contract Review Works' (Veo 3)", assignee: "Saqlain", week: 3, day: "Fri", hours: 6, priority: "P1", status: "not_started", phase: 2, category: "YouTube",
        description: "5-8 min explainer using Veo 3. Script from Blog #1 content. Visual walkthrough of the 3-step process.\nYouTube SEO: keyword in title first 40 chars, 200-word description, timestamps, tags, custom thumbnail.\nAlso cut 2 Shorts from this video.",
        salesConnection: "29% of enterprise buyers search YouTube before contacting sales. First-mover in AI contract review keywords.", deliverable: "1 YouTube video + 2 Shorts uploaded", funnelStage: "awareness",
      },
      {
        id: "w3-d1", title: "Write Blog #6: AI vs Manual Contract Review", assignee: "Asad", week: 3, day: "Mon-Tue", hours: 10, priority: "P0", status: "not_started", phase: 2, category: "Blog",
        description: "2,500 words. Keyword: 'AI contract review vs manual review'.\nData-heavy comparison. Real numbers: 30 hours vs 30 minutes, $100K/month vs $60-80K one-time.\nComparison table, time analysis, cost analysis, accuracy comparison, consistency analysis.",
        salesConnection: "Comparison content converts 2-3x vs educational. Share with prospects weighing options.", deliverable: "Published blog", funnelStage: "demo", pillar: "Comparison",
      },
      {
        id: "w3-d2", title: "Design '5 Questions' PDF + 'At a Glance' summary + 2 LinkedIn carousels", assignee: "Asad", week: 3, day: "Wed-Thu", hours: 10, priority: "P0", status: "not_started", phase: 2, category: "Content",
        description: "Design '5 Questions GCs Should Ask' as branded PDF.\nDesign 'Paralegent At A Glance' product summary (post-demo leave-behind).\n2 LinkedIn carousels from Blogs #4 and #5.",
        salesConnection: "Post-demo follow-up assets. Carousels = highest LinkedIn engagement format.", deliverable: "2 PDFs + 2 carousels", funnelStage: "demo",
      },
      {
        id: "w3-d3", title: "Create Veo 3 YouTube Short + Instagram Reels + TikTok batch", assignee: "Asad", week: 3, day: "Fri", hours: 6, priority: "P1", status: "not_started", phase: 2, category: "Content",
        description: "Create 2 YouTube Shorts from blog content using Veo 3.\nRepurpose Shorts to Instagram Reels (same video, IG captions).\nRepurpose Shorts to TikTok (same video, TikTok captions).\nRepurpose Shorts to Facebook video posts.",
        salesConnection: "Shorts = discovery engine. 80% of views from non-subscribers. Present on ALL platforms.", deliverable: "2 Shorts + 2 IG Reels + 2 TikToks + 2 FB videos", funnelStage: "awareness",
      },
    ],
  },

  // ═══════════════════════════ WEEK 4: April 28 - May 2 ═══════════════════════════
  {
    week: 4,
    phase: 2,
    phaseTitle: "Launch the Engine",
    goal: "Outreach optimization + G2/Capterra + blogs #7-8 (listicle + competitor) + LinkedIn Ads prep + LinkedIn newsletter #2",
    tasks: [
      {
        id: "w4-m1", title: "Demos + objection scripts + partnership outreach (5 CLM consultants)", assignee: "Mudassir", week: 4, day: "Mon-Fri", hours: 40, priority: "P0", status: "not_started", phase: 2, category: "Sales",
        description: "Continue demos + personal outreach. Document top 3 objections → write response scripts.\nReach out to 5 CLM consultants and legal tech advisors: 10% referral fee offer.\nContinue LinkedIn posting 3-5/week.",
        salesConnection: "Real objections → next round of content. 10% of customers from partnerships.", deliverable: "Objection scripts + 5 partnership conversations + LinkedIn posts", funnelStage: "demo",
      },
      {
        id: "w4-a1", title: "100 outreach + metrics analysis + Gartner Peer Insights registration", assignee: "Ali", week: 4, day: "Mon-Fri", hours: 35, priority: "P0", status: "not_started", phase: 2, category: "Outreach",
        description: "100 more messages (50 new + 50 follow-ups). Analyze: which subject lines, industries, messaging work best? Adjust.\nRegister on Gartner Peer Insights (last P2 platform). All 15 platforms should now be complete.\nContinue LinkedIn 3/week + company page 3/week.",
        salesConnection: "Data-driven optimization. If manufacturing responds 15% but tech 5%, shift volume.", deliverable: "100 outreach + optimized templates + Gartner registered", funnelStage: "outreach",
      },
      {
        id: "w4-s1", title: "Write Blog #7: 10 Best AI Contract Review Tools 2026", assignee: "Saqlain", week: 4, day: "Mon-Tue", hours: 12, priority: "P0", status: "not_started", phase: 2, category: "Blog",
        description: "3,000 words. Keyword: 'best AI contract review tools 2026' (3K+, High comp).\nListicle pages earn 3-5x more AI citations. Master comparison table (10 tools × 8 features).\nParalegent #1 for data sovereignty. Each: 200-word overview, pros, cons, pricing.\nJSON-LD: BlogPosting + FAQPage.",
        salesConnection: "Listicle = highest AI citation rate. Captures comparison-stage buyers.", deliverable: "Published blog", funnelStage: "awareness", pillar: "Comparison",
      },
      {
        id: "w4-s2", title: "Repurpose Blogs #5 + #6 + LinkedIn newsletter #2 + post-demo email templates", assignee: "Saqlain", week: 4, day: "Wed-Fri", hours: 14, priority: "P0", status: "not_started", phase: 2, category: "Repurposing",
        description: "Repurpose both blogs to ALL platforms (18 pieces).\nLinkedIn Newsletter #2: 'The Contract Intelligence Brief' — topic from Mudassir's demo objections.\n3 post-demo email variants:\n(a) Needs CIO → security PDF\n(b) Needs budget → ROI PDF\n(c) Needs timeline → timeline PDF",
        salesConnection: "Post-demo follow-up within 24h is where deals are won or lost.", deliverable: "18 repurposed + newsletter #2 + 3 email templates", funnelStage: "demo",
      },
      {
        id: "w4-d1", title: "Write Blog #8: Paralegent vs LegalOn", assignee: "Asad", week: 4, day: "Mon-Tue", hours: 10, priority: "P0", status: "not_started", phase: 2, category: "Blog",
        description: "2,500 words. Keyword: 'Paralegent vs LegalOn / LegalOn alternatives'.\nCapture competitor traffic. 10-row feature comparison. Also becomes a website /compare/vs-legalon page.\nFocus: cloud-deployed vs SaaS, multi-agent vs single, rulebook depth vs pre-built playbooks.",
        salesConnection: "Send when prospects mention LegalOn. Comparison pages have highest conversion.", deliverable: "Published blog + website comparison page", funnelStage: "demo", pillar: "Comparison",
      },
      {
        id: "w4-d2", title: "Competitive comparison PDF + YouTube video + Veo 3 Shorts batch", assignee: "Asad", week: 4, day: "Wed-Thu", hours: 10, priority: "P0", status: "not_started", phase: 2, category: "Content",
        description: "Design Competitive Comparison one-pager: Paralegent vs LegalOn/Spellbook/Harvey across 6 dimensions.\nYouTube video: 'Paralegent vs Manual Review' (5 min comparison from Blog #6), Veo 3.\n2 YouTube Shorts → repurpose to IG Reels + TikTok + FB.",
        salesConnection: "Comparison PDF for when prospects say 'We're also looking at LegalOn.'", deliverable: "Comparison PDF + YouTube video + 2 Shorts + 2 Reels + 2 TikToks", funnelStage: "demo",
      },
      {
        id: "w4-d3", title: "2 LinkedIn carousels from Blogs #6 + #7", assignee: "Asad", week: 4, day: "Fri", hours: 5, priority: "P1", status: "not_started", phase: 2, category: "LinkedIn",
        description: "Carousel from 'AI vs Manual Review' blog (7 slides, data-heavy).\nCarousel from 'Best 10 Tools' blog (7 slides, comparison format).",
        salesConnection: "Carousels = 585% more engagement than text, 196% more than video on LinkedIn.", deliverable: "2 LinkedIn carousels", funnelStage: "awareness",
      },
    ],
  },

  // ═══════════════════════════ WEEK 5: May 5-9 ═══════════════════════════
  {
    week: 5,
    phase: 3,
    phaseTitle: "Convert Pipeline",
    goal: "Push for paid pilots + US expansion + blogs #9-10 (answer posts for GEO/AEO) + LinkedIn Ads launch",
    tasks: [
      {
        id: "w5-m1", title: "Close paid pilots ($5-10K) + record 'Lessons from Demos'", assignee: "Mudassir", week: 5, day: "Mon-Fri", hours: 40, priority: "P0", status: "not_started", phase: 3, category: "Sales",
        description: "Push $5-10K paid pilot commitments with 4-week scope. Paid = 70%+ close rate. Free = almost never.\nRecord 'Lessons from First Demos' reflection — raw material for content.\nApply to Microsoft for Startups Founders Hub ($150K Azure credits).\nContinue LinkedIn 3-5/week.",
        salesConnection: "Paid pilots = revenue + validation. Microsoft Founders Hub = free $150K + path to co-sell.", deliverable: "Pilot proposals sent + demo lessons recorded + MS Founders Hub application", funnelStage: "pilot",
      },
      {
        id: "w5-a1", title: "100 outreach + US expansion + LinkedIn Ads launch", assignee: "Ali", week: 5, day: "Mon-Fri", hours: 40, priority: "P0", status: "not_started", phase: 3, category: "Outreach",
        description: "100 outreach (50 new + 50 follow-ups). Open US market: add 100 US contacts (Manufacturing, Tech, Healthcare/Finance — data sovereignty).\nLaunch LinkedIn Ads: $2-3K/month budget. Target: GC, VP Legal Ops, CLO + 500-5000 employees + UK/UAE/US. Lead Gen Forms (2-3x higher conversion). Carousel ads from existing content.",
        salesConnection: "LinkedIn Ads = 121% ROAS, only positive B2B ad platform. 66:1 return per deal.", deliverable: "100 outreach + US contacts + LinkedIn Ads live", funnelStage: "outreach",
      },
      {
        id: "w5-s1", title: "Write Blog #9: Can AI Review Contracts Accurately?", assignee: "Saqlain", week: 5, day: "Mon-Tue", hours: 8, priority: "P0", status: "not_started", phase: 3, category: "Blog",
        description: "1,500 words. Answer post for GEO/AEO. Keyword: 'Can AI review contracts accurately?' (High vol).\nAddresses #1 buyer barrier (80% cite accuracy). Definition-first, direct answer in first 3 lines, then expand.\nInclude: confidence scoring, 11 specialized agents, comparison with generic AI accuracy.",
        salesConnection: "AI engines pull answers from this. Perplexity, ChatGPT, Gemini will cite this.", deliverable: "Published blog", funnelStage: "awareness", pillar: "Education",
      },
      {
        id: "w5-s2", title: "Repurpose Blogs #7 + #8 + LinkedIn newsletter #3 + Reddit AMA prep", assignee: "Saqlain", week: 5, day: "Wed-Fri", hours: 14, priority: "P0", status: "not_started", phase: 3, category: "Repurposing",
        description: "Repurpose both blogs to ALL platforms (18 pieces).\nLinkedIn Newsletter #3.\nPrep for Reddit AMA: draft Mudassir's intro for r/legaltech, 20 likely questions with draft answers. Harvey's founders did AMA here — proven tactic.",
        salesConnection: "Reddit AMA = massive credibility. Harvey proved this works for legal tech.", deliverable: "18 repurposed + newsletter #3 + AMA prep doc", funnelStage: "awareness",
      },
      {
        id: "w5-d1", title: "Write Blog #10: Can ChatGPT Review Contracts?", assignee: "Asad", week: 5, day: "Mon-Tue", hours: 8, priority: "P0", status: "not_started", phase: 3, category: "Blog",
        description: "1,500 words. Keyword: 'Can ChatGPT review contracts?' (High vol).\nCaptures huge search intent. Position: 'ChatGPT can summarize, not redline. Here's why purpose-built AI is different.'\nComparison table: ChatGPT vs dedicated tools across 8 dimensions.",
        salesConnection: "Captures people trying to use ChatGPT for contracts and redirects to proper solution.", deliverable: "Published blog", funnelStage: "awareness", pillar: "Comparison",
      },
      {
        id: "w5-d2", title: "Edit 'Lessons from Demos' video + case study template + YouTube video + Shorts batch", assignee: "Asad", week: 5, day: "Wed-Fri", hours: 14, priority: "P0", status: "not_started", phase: 3, category: "Content",
        description: "Edit Mudassir's demo lessons → 2-min LinkedIn video (Veo 3, subtitled).\nDesign case study template PDF (ready to fill when first pilot completes).\nYouTube video: 'Multi-Agent AI Explained' (from Blog #4), Veo 3.\n2 Shorts → IG Reels + TikTok + FB.\n2 LinkedIn carousels from Blogs #8 + #9.",
        salesConnection: "Case study template ready for first pilot results. Founder demo lessons = authenticity.", deliverable: "LinkedIn video + case study PDF + YouTube video + 2 Shorts + 2 carousels + 2 Reels + 2 TikToks", funnelStage: "demo",
      },
    ],
  },

  // ═══════════════════════════ WEEK 6: May 12-16 ═══════════════════════════
  {
    week: 6,
    phase: 3,
    phaseTitle: "Convert Pipeline",
    goal: "Nurture pipeline + comparison pages + blogs #11-12 (ROI + thought leadership) + Microsoft AppSource prep",
    tasks: [
      {
        id: "w6-m1", title: "Continue closing + pilot management + Reddit AMA", assignee: "Mudassir", week: 6, day: "Mon-Fri", hours: 40, priority: "P0", status: "not_started", phase: 3, category: "Sales",
        description: "Active pipeline: 2-4 pilot discussions, 5-10 demo stage, 20+ outreach stage.\nDo the Reddit AMA on r/legaltech (Saqlain prepped in Week 5).\nContinue LinkedIn 3-5/week.",
        salesConnection: "Reddit AMA = credibility + karma + citations. Pipeline management = deals don't die.", deliverable: "Pipeline progressed + Reddit AMA completed", funnelStage: "pilot",
      },
      {
        id: "w6-a1", title: "100 outreach + re-engage + build 'vs LegalOn' comparison page", assignee: "Ali", week: 6, day: "Mon-Fri", hours: 40, priority: "P0", status: "not_started", phase: 3, category: "Outreach",
        description: "100 new + re-engage Week 2-3 non-responders with new angle (share data sovereignty blog or demo video).\nBuild 'Paralegent vs LegalOn' comparison page on website (content from Blog #8).\nOptimize LinkedIn Ads based on Week 5 data.",
        salesConnection: "Non-responders from 4 weeks ago aren't dead — new touchpoint = second chance.", deliverable: "100 outreach + comparison page live + ads optimized", funnelStage: "outreach",
      },
      {
        id: "w6-s1", title: "Write Blog #11: AI Contract Review ROI", assignee: "Saqlain", week: 6, day: "Mon-Tue", hours: 8, priority: "P0", status: "not_started", phase: 3, category: "Blog",
        description: "2,000 words. Keyword: 'AI contract review cost / ROI'.\nBOFU content. Real competitor pricing (Harvey $1,200/lawyer/month, Spellbook $20-179/user/month) vs Paralegent one-time.\n3-year TCO comparison table. Payback period analysis.",
        salesConnection: "BOFU — addresses pricing conversation. Gets forwarded GC → CFO.", deliverable: "Published blog", funnelStage: "pilot", pillar: "ROI",
      },
      {
        id: "w6-s2", title: "Repurpose Blogs #9 + #10 + LinkedIn newsletter #4", assignee: "Saqlain", week: 6, day: "Wed-Fri", hours: 12, priority: "P0", status: "not_started", phase: 3, category: "Repurposing",
        description: "Repurpose both blogs to ALL platforms (18 pieces).\nLinkedIn Newsletter #4: 'The Contract Intelligence Brief'.\nMedium republish blogs #5-6 (2 weeks after original publish).",
        salesConnection: "Consistent multi-channel presence compounds over time.", deliverable: "18 repurposed + newsletter #4 + 2 Medium posts", funnelStage: "awareness",
      },
      {
        id: "w6-d1", title: "Write Blog #12: Why 95% of AI Pilots Fail", assignee: "Asad", week: 6, day: "Mon-Tue", hours: 8, priority: "P0", status: "not_started", phase: 3, category: "Blog",
        description: "2,000 words. Keyword: 'Why do AI contract review pilots fail?' (Medium vol).\nThought leadership. 95% fail at integration/scaling. Position our implementation model as the answer.\nInclude: 5 failure reasons, how each is solved, comparison table.",
        salesConnection: "Addresses prospect fear. Share pre-pilot to build confidence in our approach.", deliverable: "Published blog", funnelStage: "demo", pillar: "Problem",
      },
      {
        id: "w6-d2", title: "Architecture diagram + YouTube video + Shorts + 2 carousels", assignee: "Asad", week: 6, day: "Wed-Fri", hours: 14, priority: "P0", status: "not_started", phase: 3, category: "Content",
        description: "Create the '18 agents' architecture diagram (reusable across everything).\nYouTube: 'Data Sovereignty in Legal AI' (from Blog #5), Veo 3.\n2 Shorts → IG + TikTok + FB.\n2 LinkedIn carousels from Blogs #10 + #11.",
        salesConnection: "Architecture diagram = single most reused visual. YouTube builds authority.", deliverable: "Architecture diagram + YouTube video + 2 Shorts + 2 carousels + Reels + TikToks", funnelStage: "demo",
      },
    ],
  },

  // ═══════════════════════════ WEEK 7: May 19-23 ═══════════════════════════
  {
    week: 7,
    phase: 4,
    phaseTitle: "Close Deals + Systematize",
    goal: "Convert pilots to $60-80K deals + capture testimonials + blogs #13-14 + Hacker News prep + sales deck",
    tasks: [
      {
        id: "w7-m1", title: "CLOSE deals + capture testimonials", assignee: "Mudassir", week: 7, day: "Mon-Fri", hours: 40, priority: "P0", status: "not_started", phase: 4, category: "Sales",
        description: "Convert paid pilots to full $60-80K engagements. ANY customer quote/testimonial = capture NOW.\nEven a 2-sentence LinkedIn recommendation is gold. First social proof unlocks everything.",
        salesConnection: "Payoff week. First testimonial goes on website, outreach, LinkedIn, sales deck.", deliverable: "Signed deals + testimonials captured", funnelStage: "close",
      },
      {
        id: "w7-a1", title: "100 outreach + 'vs Spellbook' page + Microsoft AppSource submission", assignee: "Ali", week: 7, day: "Mon-Fri", hours: 40, priority: "P0", status: "not_started", phase: 4, category: "Outreach",
        description: "Continue 100/week with best-performing messaging. 500+ total contacts.\nBuild 'Paralegent vs Spellbook' comparison page.\nSubmit Word add-in to Microsoft AppSource (takes 1-3 weeks for validation). 10-50 inbound inquiries/month once listed.",
        salesConnection: "AppSource = visible to millions of M365 enterprise users. Free 'Microsoft certified' badge.", deliverable: "100 outreach + comparison page + AppSource submission", funnelStage: "outreach",
      },
      {
        id: "w7-s1", title: "Write Blog #13: Paralegent vs Spellbook", assignee: "Saqlain", week: 7, day: "Mon-Tue", hours: 10, priority: "P0", status: "not_started", phase: 4, category: "Blog",
        description: "2,500 words. Multi-agent orchestration vs single LLM. Cloud-deployed vs SaaS. Rulebook depth vs pre-built playbooks. Feature comparison table.",
        salesConnection: "Capture Spellbook comparison traffic. Send when prospects mention Spellbook.", deliverable: "Published blog + website comparison page", funnelStage: "demo", pillar: "Comparison",
      },
      {
        id: "w7-s2", title: "Repurpose Blogs #11 + #12 + Hacker News launch prep", assignee: "Saqlain", week: 7, day: "Wed-Fri", hours: 12, priority: "P0", status: "not_started", phase: 4, category: "Repurposing",
        description: "Repurpose both blogs to ALL platforms (18 pieces).\nPrep Hacker News launch: Write 'Show HN' post — focus on TECHNICAL (LangGraph, multi-agent, 1536-dim semantic search), tell 'We built this because...' story. Draft in doc for Mudassir review.",
        salesConnection: "HN launch can drive 5-15K visitors in 24 hours. Credibility + backlinks.", deliverable: "18 repurposed + HN post draft", funnelStage: "awareness",
      },
      {
        id: "w7-d1", title: "Write Blog #14: Is AI Contract Review Safe? GDPR, Privilege, Data Sovereignty", assignee: "Asad", week: 7, day: "Mon-Tue", hours: 8, priority: "P0", status: "not_started", phase: 4, category: "Blog",
        description: "2,000 words. Trust content for CISOs. Addresses 62% data security barrier + 66% IP concern.\nGDPR, CCPA, EU AI Act, attorney-client privilege implications. Comparison: SaaS data flow vs customer-cloud.",
        salesConnection: "Trust content sent to CISOs + compliance teams blocking deals.", deliverable: "Published blog", funnelStage: "demo", pillar: "Trust",
      },
      {
        id: "w7-d2", title: "Sales deck + testimonial asset + YouTube video + Shorts + 2 carousels", assignee: "Asad", week: 7, day: "Wed-Fri", hours: 14, priority: "P0", status: "not_started", phase: 4, category: "Content",
        description: "Sales deck (5-7 slides): demo video, one-pagers, comparison data, customer quotes.\nIf testimonial exists: polished graphic/video.\nYouTube: 'AI Contract Review ROI' (from Blog #11), Veo 3.\n2 Shorts → IG + TikTok + FB. 2 carousels from Blogs #12 + #13.",
        salesConnection: "Sales deck = everything learned in 7 weeks. Testimonial = unlock for everything.", deliverable: "Sales deck + testimonial asset + YouTube video + 2 Shorts + 2 carousels", funnelStage: "close",
      },
    ],
  },

  // ═══════════════════════════ WEEK 8: May 26-30 ═══════════════════════════
  {
    week: 8,
    phase: 4,
    phaseTitle: "Close Deals + Systematize",
    goal: "Close remaining deals + blogs #15-16 (buyer's guide + category definition) + Hacker News launch + document everything for Q2",
    tasks: [
      {
        id: "w8-m1", title: "Close deals + 'State of the Pipeline' + Hacker News launch", assignee: "Mudassir", week: 8, day: "Mon-Fri", hours: 40, priority: "P0", status: "not_started", phase: 4, category: "Sales",
        description: "Continue closing. Write retrospective: what worked, conversion rates, best industries, best messaging, next 90-day plan.\nLaunch on Hacker News (Saqlain prepped in Week 7). Engage with EVERY comment. Be authentic.",
        salesConnection: "State of Pipeline = Q2 plan based on real data. HN = 5-15K visitors.", deliverable: "Revenue + pipeline doc + HN launch", funnelStage: "close",
      },
      {
        id: "w8-a1", title: "100 outreach + document outreach playbook + Azure Marketplace listing", assignee: "Ali", week: 8, day: "Mon-Fri", hours: 40, priority: "P0", status: "not_started", phase: 4, category: "Outreach",
        description: "Continue 100/week. Document entire system: templates, sequences, criteria, tools, metrics. Playbook onboards new hires in days.\nSubmit Azure Marketplace listing with Private Offers. Enterprise buyers use existing Azure committed spend (40-80% faster deals).",
        salesConnection: "Systematize for scale. Azure Marketplace = enterprise procurement shortcut.", deliverable: "100 outreach + documented playbook + Azure Marketplace submitted", funnelStage: "outreach",
      },
      {
        id: "w8-s1", title: "Write Blog #15: Enterprise Buyer's Guide to AI Contract Review 2026", assignee: "Saqlain", week: 8, day: "Mon-Tue", hours: 12, priority: "P0", status: "not_started", phase: 4, category: "Blog",
        description: "3,500 words. Pillar content. The definitive comparison piece.\nSpellbook's version dominates search — we need ours. Evaluation criteria, feature matrix, deployment models, pricing models, recommendation by company size.",
        salesConnection: "Buyer's guide = highest-traffic content in legal tech. Top-of-funnel capture.", deliverable: "Published blog", funnelStage: "awareness", pillar: "Education",
      },
      {
        id: "w8-s2", title: "Repurpose Blogs #13 + #14 + document content system", assignee: "Saqlain", week: 8, day: "Wed-Fri", hours: 12, priority: "P0", status: "not_started", phase: 4, category: "Repurposing",
        description: "Repurpose both blogs to ALL platforms (18 pieces).\nDocument the content system: blog templates, repurposing workflow, editorial calendar for Q2, keyword targets remaining.\nMedium republish blogs #9-10.",
        salesConnection: "Systematize so content machine runs without rebuilding every quarter.", deliverable: "18 repurposed + content playbook + 2 Medium posts", funnelStage: "awareness",
      },
      {
        id: "w8-d1", title: "Write Blog #16: What Is a Contract Rulebook? (Own the Term)", assignee: "Asad", week: 8, day: "Mon-Tue", hours: 8, priority: "P0", status: "not_started", phase: 4, category: "Blog",
        description: "2,000 words. Very low competition — OWN this term. Define 'rulebook' vs 'playbook'. How it works, why it's deeper, examples.\nEvery AI engine that cites this = category creation for Paralegent.",
        salesConnection: "Category-defining content. Own 'contract rulebook' in every AI engine.", deliverable: "Published blog", funnelStage: "awareness", pillar: "Education",
      },
      {
        id: "w8-d2", title: "Traction visual + final YouTube video + Shorts + 2 carousels + case study (if ready)", assignee: "Asad", week: 8, day: "Wed-Fri", hours: 14, priority: "P0", status: "not_started", phase: 4, category: "Content",
        description: "'First 60 Days' traction visual: demos, pilots, industries, geographies. Mudassir's next big LinkedIn post.\nYouTube: 'Why AI Pilots Fail' (from Blog #12), Veo 3.\n2 Shorts → IG + TikTok + FB. 2 carousels from Blogs #14 + #15.\nIf pilot results exist: first case study (fill template from Week 5).",
        salesConnection: "Traction visual = social proof even without massive numbers. Shows momentum.", deliverable: "Traction visual + YouTube video + 2 Shorts + 2 carousels + case study (if ready)", funnelStage: "awareness",
      },
    ],
  },
];
