import Nav from "@/components/Nav";

interface Partnership {
  id: string;
  name: string;
  category: string;
  cost: string;
  benefit: string;
  why: string;
  steps: string[];
  timeline: string;
  priority: "P0" | "P1" | "P2";
  status: "not_started" | "applied" | "active";
  owner: string;
}

const partnerships: Partnership[] = [
  // ═══════════════════ MICROSOFT ECOSYSTEM (THE BIG PLAY) ═══════════════════
  {
    id: "ms-1",
    name: "Microsoft for Startups Founders Hub",
    category: "Microsoft Ecosystem",
    cost: "FREE",
    benefit: "$150K Azure credits, GitHub Enterprise, Visual Studio Enterprise, Microsoft 365, technical mentors, path to co-sell status",
    why: "This is step 1 of the Microsoft partnership ladder. $150K in free Azure credits alone pays for months of development. Every subsequent Microsoft opportunity requires this first.",
    steps: [
      "Apply at startups.microsoft.com",
      "You do NOT need to be funded or incorporated to apply",
      "Describe Paralegent: AI contract review using Azure OpenAI, deployed in customer's Azure cloud",
      "Emphasize: Word add-in integration, Azure-native deployment, enterprise customers",
      "Approval typically takes 1-2 weeks",
      "Once approved: activate Azure credits immediately",
    ],
    timeline: "Apply Week 1 → Approved Week 2-3",
    priority: "P0",
    status: "not_started",
    owner: "Ali Ahmed",
  },
  {
    id: "ms-2",
    name: "Microsoft AppSource (Word Add-In Listing)",
    category: "Microsoft Ecosystem",
    cost: "FREE",
    benefit: "Visible to millions of M365 enterprise users. 'Microsoft certified' trust badge. 10-50 inbound inquiries/month. G2 reviews auto-syndicate here.",
    why: "You have a WORD ADD-IN. This is where enterprise users discover Word add-ins. No competitor in AI contract review has a strong AppSource presence. This is your unique advantage.",
    steps: [
      "Create a Microsoft Partner Center account (partner.microsoft.com)",
      "Register as an app developer",
      "Prepare Word add-in manifest (XML) meeting Microsoft validation requirements",
      "Create listing: title, description, screenshots (Word add-in in action), logo",
      "Submit for validation (1-3 weeks review process)",
      "Once approved: listing goes live to all M365 enterprise tenants",
      "Highlight: AI contract review, Azure OpenAI compatible, data sovereignty",
    ],
    timeline: "Submit Week 5-6 → Live Week 7-8 (needs polished add-in)",
    priority: "P0",
    status: "not_started",
    owner: "Ali Ahmed",
  },
  {
    id: "ms-3",
    name: "Azure Marketplace Listing",
    category: "Microsoft Ecosystem",
    cost: "FREE (3% transaction fee on sales)",
    benefit: "Enterprise buyers use EXISTING Azure committed spend to buy. No separate PO needed. No separate budget approval. 40-80% faster deal cycles. Private Offers for custom pricing.",
    why: "When a GC wants to buy Paralegent, instead of going through 3-month procurement, they use their existing Azure budget. This removes the #1 blocker to enterprise deals: procurement friction.",
    steps: [
      "Create Azure Marketplace publisher account in Partner Center",
      "Choose listing type: 'Consulting Services' or 'Managed Application'",
      "For Paralegent: list as 'Consulting Services' (implementation engagement)",
      "Create listing with: description, screenshots, pricing (Private Offers for custom per customer)",
      "Submit for review (1-2 weeks)",
      "Once live: create Private Offers for each prospect with custom pricing",
      "Buyers pay through Azure billing — appears on their existing Azure invoice",
    ],
    timeline: "Submit Week 6-7 → Live Week 8",
    priority: "P0",
    status: "not_started",
    owner: "Ali Ahmed",
  },
  {
    id: "ms-4",
    name: "Microsoft Co-Sell Ready Status",
    category: "Microsoft Ecosystem",
    cost: "FREE",
    benefit: "Microsoft account executives see Paralegent in their catalog. When they talk to a GC about M365, they recommend you. ISVs report 2-5x increase in pipeline.",
    why: "Microsoft has thousands of enterprise sales reps meeting with GCs every day. If you're 'Co-Sell Ready,' those reps can recommend Paralegent during their conversations. Free warm introductions to enterprise buyers.",
    steps: [
      "Requires: 1-3 paying customers first",
      "Requires: active Azure Marketplace or AppSource listing",
      "Create a 'Co-Sell Ready' solution in Partner Center",
      "Provide: customer references, solution architecture, sales collateral",
      "Microsoft reviews and approves",
      "Once approved: your solution appears in Microsoft sellers' CRM",
    ],
    timeline: "Apply after first 1-3 customers (Month 4-6)",
    priority: "P1",
    status: "not_started",
    owner: "Ali Ahmed",
  },
  {
    id: "ms-5",
    name: "Microsoft IP Co-Sell Incentivized",
    category: "Microsoft Ecosystem",
    cost: "FREE",
    benefit: "Microsoft sellers earn RETIREMENT CREDIT for selling your product. They actively push Paralegent to their customers. This is the golden tier.",
    why: "When Microsoft sellers have financial incentive to sell your product, your pipeline explodes. This is how companies go from $1M to $10M ARR through the Microsoft ecosystem.",
    steps: [
      "Requires: $100K+ in Azure consumed revenue from customers",
      "Requires: active Co-Sell Ready status",
      "Apply through Partner Center",
      "Microsoft validates Azure consumption metrics",
      "Once approved: Microsoft sellers earn incentive for every deal",
    ],
    timeline: "Month 8-12 (after significant Azure consumption)",
    priority: "P2",
    status: "not_started",
    owner: "Ali Ahmed",
  },

  // ═══════════════════ AWS ECOSYSTEM ═══════════════════
  {
    id: "aws-1",
    name: "AWS Marketplace — AI Agent Products",
    category: "AWS Ecosystem",
    cost: "FREE (1.5-3% transaction fee)",
    benefit: "New 'AI Agent Products' category specifically for agent-based solutions. Enterprise buyers use existing AWS committed spend. 30% faster time-to-market vs traditional sales.",
    why: "AWS launched a new category just for AI agents in 2025. Paralegent with its 18-agent architecture is a perfect fit. Customers using AWS Bedrock can purchase through their existing billing.",
    steps: [
      "Create AWS Marketplace seller account",
      "Choose listing type: 'Professional Services' or 'SaaS' (for implementation engagements)",
      "List under NEW category: 'AI Agent Products'",
      "Highlight: multi-agent architecture, AWS Bedrock compatible, LLM-agnostic",
      "AI-powered review can approve compliant listings in 30 minutes",
      "Create Private Offers for enterprise custom pricing",
      "Public SaaS fees: 3%; Private offers: 1.5-3%",
    ],
    timeline: "Submit Week 6-8 → Live within days (AI-reviewed)",
    priority: "P1",
    status: "not_started",
    owner: "Ali Ahmed",
  },
  {
    id: "aws-2",
    name: "AWS Activate (Startup Program)",
    category: "AWS Ecosystem",
    cost: "FREE",
    benefit: "Up to $100K in AWS credits, technical support, training, architecture guidance",
    why: "Free cloud credits for customers who deploy on AWS. Also gives Paralegent access to AWS partner network and enterprise buyer introductions.",
    steps: [
      "Apply at aws.amazon.com/activate",
      "Describe: AI contract review platform deployed in customer's AWS environment",
      "Emphasize: uses AWS Bedrock, deploys in customer VPC, enterprise customers",
      "Tier 1 (self-funded): up to $10K credits",
      "Tier 2 (with accelerator/VC backing): up to $100K credits",
    ],
    timeline: "Apply Week 2 → Approved Week 3-4",
    priority: "P1",
    status: "not_started",
    owner: "Ali Ahmed",
  },

  // ═══════════════════ GOOGLE CLOUD ECOSYSTEM ═══════════════════
  {
    id: "gcp-1",
    name: "Google Cloud Marketplace",
    category: "Google Cloud Ecosystem",
    cost: "FREE (3% transaction fee)",
    benefit: "Enterprise buyers use GCP committed spend. Paralegent uses Google ADK — natural fit. Access to Google's enterprise customer base.",
    why: "Paralegent is built on Google ADK (Agent Development Kit). Listing on Google Cloud Marketplace positions you as a Google-native AI solution. Customers using Vertex AI can purchase through GCP billing.",
    steps: [
      "Create Google Cloud Partner account",
      "Submit listing application to Google Cloud Marketplace",
      "Highlight: built on Google ADK, Vertex AI compatible, multi-agent orchestration",
      "Provide: product description, screenshots, architecture diagram",
      "Google reviews listing (2-4 weeks)",
      "Once live: create private pricing plans per customer",
    ],
    timeline: "Submit Week 6-8 → Live Week 8-10",
    priority: "P1",
    status: "not_started",
    owner: "Ali Ahmed",
  },
  {
    id: "gcp-2",
    name: "Google for Startups Cloud Program",
    category: "Google Cloud Ecosystem",
    cost: "FREE",
    benefit: "Up to $200K in Google Cloud credits over 2 years, technical mentorship, Google network access",
    why: "Paralegent uses Google ADK — this makes you a natural candidate. $200K in free credits + technical support from Google engineers who built the ADK you're using.",
    steps: [
      "Apply at cloud.google.com/startup",
      "Describe: AI contract review using Google ADK and Vertex AI",
      "Emphasize: built on Google ADK, multi-agent orchestration, enterprise deployment",
      "Requires: founded within last 10 years, raised up to Series A, not current GCP customer at scale",
      "Approval: 2-4 weeks",
    ],
    timeline: "Apply Week 2 → Approved Week 4-6",
    priority: "P1",
    status: "not_started",
    owner: "Ali Ahmed",
  },

  // ═══════════════════ AI PLATFORM PARTNERSHIPS ═══════════════════
  {
    id: "nvidia-1",
    name: "NVIDIA Inception Program",
    category: "AI Platform",
    cost: "FREE",
    benefit: "GPU credits, technical guidance, NVIDIA DGX Cloud access, co-marketing, investor connections, NVIDIA Inception badge (enterprise credibility)",
    why: "NVIDIA Inception gives you an enterprise credibility badge ('NVIDIA Inception Member') plus GPU credits for model training/inference. Investors and enterprise buyers recognize this badge.",
    steps: [
      "Apply at nvidia.com/inception",
      "Describe: multi-agent AI platform for legal contract review",
      "Emphasize: 18 specialized agents, LLM orchestration, enterprise deployment",
      "No funding requirement — open to AI startups at any stage",
      "Approval: 1-2 weeks",
      "Benefits unlock immediately upon approval",
    ],
    timeline: "Apply Week 2 → Approved Week 3",
    priority: "P1",
    status: "not_started",
    owner: "Ali Ahmed",
  },

  // ═══════════════════ LEGAL TECH PARTNERSHIPS ═══════════════════
  {
    id: "legal-1",
    name: "CLOC Membership (Corporate Legal Operations Consortium)",
    category: "Legal Tech Partnership",
    cost: "$500/year ($42/month)",
    benefit: "Direct access to 3,000+ legal operations professionals at Fortune 500 companies. Vendor directory listing. Access to CLOC Institute conference. Networking with actual buyers.",
    why: "CLOC members are VP Legal Ops, Director Legal Ops, Legal Operations Managers — the people who EVALUATE and CHAMPION legal tech purchases. This puts you in the room with your buyers.",
    steps: [
      "Join at cloc.org as individual member ($500/year)",
      "Complete vendor profile in directory",
      "Attend virtual events and roundtables",
      "Consider sponsoring CLOC Institute (annual conference)",
      "Engage in community discussions — be helpful, not salesy",
    ],
    timeline: "Join Week 3 → Active immediately",
    priority: "P1",
    status: "not_started",
    owner: "Ali Ahmed",
  },
  {
    id: "legal-2",
    name: "Bar Association Partnerships",
    category: "Legal Tech Partnership",
    cost: "Varies (many are free)",
    benefit: "Spellbook became Canadian Bar Association's exclusive AI tool → access to 40,000 lawyers. Same model can work for UK/UAE bar associations.",
    why: "Spellbook's biggest growth hack was partnering with bar associations. If Paralegent becomes the 'recommended AI contract review tool' of a bar association, you get instant credibility + access to thousands of lawyers.",
    steps: [
      "UK: Law Society of England and Wales — explore technology vendor program",
      "UAE: Dubai Legal Affairs Department, DIFC Courts — explore tech partnership",
      "UK: Bar Council of England and Wales — technology section",
      "Approach: offer free/discounted access for members in exchange for 'recommended tool' status",
      "Start with smaller, regional bar associations to build case studies",
    ],
    timeline: "Start conversations Month 2-3 → Formalize Month 4-6",
    priority: "P2",
    status: "not_started",
    owner: "Ali Ahmed",
  },
  {
    id: "legal-3",
    name: "CLM Integrator Partnerships (10% Referral Fee)",
    category: "Legal Tech Partnership",
    cost: "10% referral fee per deal",
    benefit: "CLM consultants advise GCs on which tools to buy. They recommend you to their clients. 10% of first 10 customers come from partnerships.",
    why: "CLM consultants and legal tech advisors have existing relationships with GCs. Instead of cold outreach, they introduce you warmly. A 10% referral fee ($6-8K per deal) is highly motivating.",
    steps: [
      "Identify 10-15 CLM consultants and legal tech advisors on LinkedIn",
      "Targets: people who advise on Ironclad, Icertis, Agiloft implementations",
      "Outreach: 'We built an AI layer that makes CLMs smarter. 10% referral fee for introductions.'",
      "Provide them with: demo video, 1-pager, competitive comparison",
      "Start with 5 conversations in Week 4",
    ],
    timeline: "Start outreach Week 4 → First referrals Month 2-3",
    priority: "P1",
    status: "not_started",
    owner: "Ali Ahmed",
  },

  // ═══════════════════ REGIONAL (UAE / DUBAI) ═══════════════════
  {
    id: "uae-1",
    name: "DIFC Innovation Hub",
    category: "UAE Regional",
    cost: "Varies (subsidized office space, programs)",
    benefit: "DIFC is the financial center of UAE. Innovation Hub provides: office space, mentorship, access to DIFC-regulated companies (banks, law firms, financial institutions). DIFC common law courts = direct fit for Paralegent.",
    why: "UAE is your #2 target market. DIFC firms operate under common law (English law basis). Legal teams here review English-law contracts daily. Being part of DIFC Innovation Hub gives you credibility + warm introductions.",
    steps: [
      "Apply at difc.ae/innovation-hub",
      "Describe: AI contract review for DIFC-regulated entities",
      "Emphasize: data sovereignty (data stays in UAE), common law expertise, Word-native",
      "Program benefits: subsidized space, events, introductions to DIFC members",
    ],
    timeline: "Apply Month 2 → Active Month 3",
    priority: "P2",
    status: "not_started",
    owner: "Ali Ahmed",
  },
  {
    id: "uae-2",
    name: "Hub71 (Abu Dhabi Global Market)",
    category: "UAE Regional",
    cost: "FREE (incentive-based program)",
    benefit: "Up to $500K in incentives: free office space, housing, health insurance, cloud credits (AWS/Azure/GCP), access to Mubadala/ADIA investor network",
    why: "Hub71 is the most generous startup program in the Middle East. $500K in incentives for AI companies. Abu Dhabi is investing billions in AI. Being Hub71-backed = instant UAE credibility.",
    steps: [
      "Apply at hub71.com",
      "Describe: enterprise AI for legal contract review",
      "Emphasize: multi-agent AI, deployed in customer's cloud, UAE HQ",
      "Selection is competitive — strong product + traction helps",
      "If accepted: relocate or set up Abu Dhabi entity",
    ],
    timeline: "Apply Month 2-3 → Cohort start varies",
    priority: "P2",
    status: "not_started",
    owner: "Ali Ahmed",
  },

  // ═══════════════════ STARTUP PROGRAMS ═══════════════════
  {
    id: "sp-1",
    name: "Stripe Atlas (Delaware LLC Setup)",
    category: "Startup Infrastructure",
    cost: "$500 one-time",
    benefit: "Delaware LLC incorporation in 1-2 days. US bank account. Tax ID. Legal docs. Needed for US market sales.",
    why: "You need a US entity to sell to US companies. Delaware LLC is the standard for tech startups. Stripe Atlas handles everything in days instead of weeks.",
    steps: [
      "Apply at atlas.stripe.com",
      "Choose: Delaware LLC",
      "Provide: founder details, company name, description",
      "Stripe handles: incorporation, EIN (tax ID), bank account opening",
      "Timeline: LLC formed in 1-2 days, bank account in 1-2 weeks",
    ],
    timeline: "Apply Week 1 → LLC active Week 2-3",
    priority: "P1",
    status: "not_started",
    owner: "Ali Ahmed",
  },
];

const categoryColors: Record<string, string> = {
  "Microsoft Ecosystem": "bg-blue-600",
  "AWS Ecosystem": "bg-orange-500",
  "Google Cloud Ecosystem": "bg-red-500",
  "AI Platform": "bg-green-600",
  "Legal Tech Partnership": "bg-purple-600",
  "UAE Regional": "bg-emerald-600",
  "Startup Infrastructure": "bg-gray-600",
};

const priorityStyles = {
  P0: { badge: "bg-red-100 text-red-800", card: "border-l-red-500" },
  P1: { badge: "bg-amber-100 text-amber-800", card: "border-l-amber-500" },
  P2: { badge: "bg-gray-100 text-gray-600", card: "border-l-gray-400" },
};

export default function PartnershipsPage() {
  const categories = [...new Set(partnerships.map(p => p.category))];
  const p0Count = partnerships.filter(p => p.priority === "P0").length;
  const p1Count = partnerships.filter(p => p.priority === "P1").length;
  const totalFreeCredits = "$150K Azure + $100K AWS + $200K GCP + $500K Hub71";

  return (
    <main>
      <header className="bg-[#042729] text-[#F8F5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-[#FF4800] text-sm font-semibold uppercase tracking-wider mb-1">Ali Ahmed&apos;s Domain</p>
          <h1 className="text-3xl font-bold">Strategic Partnerships & Marketplaces</h1>
          <p className="text-[#F8F5EE]/70 mt-1">Enterprise-grade partnerships that drive deals. {partnerships.length} opportunities identified.</p>
        </div>
      </header>
      <Nav active="partnerships" />

      {/* Summary */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-6">
          <div>
            <p className="text-xs text-gray-500">Total Partnerships</p>
            <p className="font-bold text-[#042729]">{partnerships.length}</p>
          </div>
          <div>
            <p className="text-xs text-red-500 font-medium">P0 (Do Now)</p>
            <p className="font-bold text-red-700">{p0Count}</p>
          </div>
          <div>
            <p className="text-xs text-amber-500 font-medium">P1 (Month 1-2)</p>
            <p className="font-bold text-amber-700">{p1Count}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Free Credits Available</p>
            <p className="font-bold text-emerald-700 text-xs">{totalFreeCredits}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Owner</p>
            <p className="font-bold text-[#FF4800]">Ali Ahmed</p>
          </div>
        </div>
      </div>

      {/* Microsoft Ecosystem Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-lg font-bold text-[#042729] mb-4">Microsoft Ecosystem — The 5-Step Ladder</h2>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            {["Founders Hub\n$150K credits", "AppSource\nWord Add-In Listed", "Azure Marketplace\n40-80% Faster Deals", "Co-Sell Ready\n2-5x Pipeline", "IP Co-Sell\nMS Sellers Push You"].map((step, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className="text-center flex-1">
                  <div className={`w-10 h-10 rounded-full mx-auto mb-1 flex items-center justify-center text-white font-bold text-sm ${i < 3 ? "bg-blue-600" : "bg-blue-400"}`}>{i + 1}</div>
                  <p className="text-xs font-medium text-blue-900 whitespace-pre-line">{step}</p>
                </div>
                {i < 4 && <div className="hidden md:block text-blue-300 text-xl">→</div>}
              </div>
            ))}
          </div>
          <p className="text-xs text-blue-700 mt-4 text-center font-medium">Cost: $0 at every step. You have a Word add-in + Azure deployment — this is YOUR ecosystem.</p>
        </div>
      </section>

      {/* Partnerships by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        {categories.map((cat) => {
          const catPartners = partnerships.filter(p => p.category === cat);
          const bgColor = categoryColors[cat] || "bg-gray-600";
          return (
            <div key={cat} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-3 h-3 rounded-full ${bgColor}`} />
                <h2 className="text-lg font-bold text-[#042729]">{cat}</h2>
                <span className="text-xs text-gray-400">({catPartners.length})</span>
              </div>
              <div className="space-y-4">
                {catPartners.map((p) => (
                  <div key={p.id} className={`bg-white rounded-xl border border-gray-200 border-l-4 ${priorityStyles[p.priority].card} overflow-hidden`}>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-semibold text-sm text-[#042729] flex-1">{p.name}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${priorityStyles[p.priority].badge}`}>{p.priority}</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">{p.cost}</span>
                      </div>
                      <p className="text-sm text-emerald-700 font-medium mb-2">{p.benefit}</p>
                      <p className="text-xs text-gray-600 mb-3">{p.why}</p>

                      <details>
                        <summary className="text-xs text-[#FF4800] cursor-pointer font-medium">Steps + Timeline</summary>
                        <div className="mt-3 bg-gray-50 rounded-lg p-3">
                          <ul className="space-y-1 mb-3">
                            {p.steps.map((step, i) => (
                              <li key={i} className="text-xs text-gray-700 flex gap-2">
                                <span className="text-[#FF4800] flex-shrink-0 font-bold">{i + 1}.</span>
                                {step}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs font-medium text-[#042729]">Timeline: {p.timeline}</p>
                        </div>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI | Strategic Partnerships & Marketplaces | Ali Ahmed&apos;s Domain
      </footer>
    </main>
  );
}
