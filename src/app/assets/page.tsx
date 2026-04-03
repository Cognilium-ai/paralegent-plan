import Nav from "@/components/Nav";

interface SalesAssetItem {
  id: string;
  name: string;
  type: string;
  purpose: string;
  whatToCollect: string[];
  usedWhen: string;
  status: "needed" | "in_progress" | "done";
  priority: "P0" | "P1" | "P2";
}

const salesAssets: SalesAssetItem[] = [
  // P0 — Must have before first outreach
  {
    id: "sa-1",
    name: "3-Minute Product Demo Video",
    type: "Video",
    purpose: "Linked in every outreach email + LinkedIn + website /demo page. GCs rank demo video #2 before buying.",
    whatToCollect: [
      "Mudassir records raw screen recording of real contract review in Word",
      "Show: upload rulebook → click review → GREEN/ORANGE/RED highlights appear → suggested revision → confidence score",
      "Edit with Veo 3 or video tool: clean cuts, text overlays, subtitles",
      "3-min full version + 60-sec highlight cut",
      "Export as MP4 (1080p minimum)",
    ],
    usedWhen: "Every cold email, LinkedIn DM, website /demo page, YouTube",
    status: "needed",
    priority: "P0",
  },
  {
    id: "sa-2",
    name: "Security & Data Sovereignty One-Pager",
    type: "PDF (1 page)",
    purpose: "CIO/CISO blocker removal. 62% of deals stall on data security. This unblocks them.",
    whatToCollect: [
      "5 sections: WHERE data lives, HOW LLMs used, WHAT happens to data, COMPLIANCE, NO LOCK-IN",
      "Copy written by Saqlain (Friday prep task)",
      "Design as branded PDF using AI tool (Canva/v0/Gamma)",
      "Must be scannable in 60 seconds by a CIO",
      "Include stat: '62% of legal AI deals stall on data security'",
    ],
    usedWhen: "After demo when prospect says 'I need to involve our CIO/IT team'",
    status: "needed",
    priority: "P0",
  },
  {
    id: "sa-3",
    name: "ROI One-Pager",
    type: "PDF (1 page)",
    purpose: "Gets forwarded from GC → CFO for budget approval. Shows the math.",
    whatToCollect: [
      "Manual cost: $100K+/month for 4-5 attorneys at $1,000+/hr",
      "Paralegent: $60-80K one-time investment",
      "Time: 30 hours → 30 minutes per 80-page MSA",
      "3-year TCO table: Manual ($3.6M) vs SaaS AI ($288-518K) vs Paralegent ($60-80K)",
      "Payback period: Month 1",
      "Design as branded PDF using AI tool",
    ],
    usedWhen: "After demo when prospect says 'I need budget approval from CFO'",
    status: "needed",
    priority: "P0",
  },
  {
    id: "sa-4",
    name: "Implementation Timeline One-Pager",
    type: "PDF (1 page)",
    purpose: "'How long until we're live?' is question #2 after every demo.",
    whatToCollect: [
      "Visual timeline: Week 1-2 Discovery → Week 3-4 Config → Week 5-6 Integration → Week 7-8 Word Add-In → Week 9-10 Go Live",
      "Team: 3-4 Paralegent engineers",
      "Customer effort: 10-15 hours total from legal team",
      "Design as branded PDF using AI tool",
    ],
    usedWhen: "After demo when prospect asks 'How long does implementation take?'",
    status: "needed",
    priority: "P0",
  },
  {
    id: "sa-5",
    name: "Mudassir's 3 Cold Email Templates",
    type: "Text (email copy)",
    purpose: "Founder letter converts 3-5x vs marketing emails. Used for all cold outreach.",
    whatToCollect: [
      "Variant 1 — Manufacturing: supply chain contracts, vendor agreements, procurement volume",
      "Variant 2 — Technology: MSAs, IP clauses, rapid deal velocity",
      "Variant 3 — Energy: compliance, long-term service agreements, regulatory burden",
      "Each: <80 words, pain-focused opening, one CTA (15-min call or watch demo video)",
      "Include demo video link in each",
    ],
    usedWhen: "Ali uses these as templates for all cold email via Instantly",
    status: "needed",
    priority: "P0",
  },
  {
    id: "sa-6",
    name: "LinkedIn Outreach Playbook",
    type: "Text (message templates)",
    purpose: "Multi-channel (email + LinkedIn) = 287% higher results. Legal industry LinkedIn reply rate: 10.42%.",
    whatToCollect: [
      "3 connection request variants (value-first, not pitchy)",
      "1. Signal-based: 'Saw your company just raised $X...'",
      "2. Content-based: 'Read your post about [topic]...'",
      "3. Direct: 'Working with GCs who review 100+ contracts/month...'",
      "3-touch follow-up sequence for accepted connections",
    ],
    usedWhen: "Ali uses for all LinkedIn outreach via Sales Navigator",
    status: "needed",
    priority: "P0",
  },
  // P0 — Need within Week 2
  {
    id: "sa-7",
    name: "Founder Story Video (2 min)",
    type: "Video",
    purpose: "Founder authenticity converts. Goes on LinkedIn, website, email signatures.",
    whatToCollect: [
      "Mudassir records authentic 2-min video: why this problem matters, 50+ GenAI systems, 18 specialized agents",
      "NOT scripted — real, authentic",
      "Edit with Veo 3: subtitles, clean edit, end card",
    ],
    usedWhen: "LinkedIn post, website /about page, YouTube channel",
    status: "needed",
    priority: "P0",
  },
  {
    id: "sa-8",
    name: "Email Signature Banners (Mudassir + Ali)",
    type: "Image (600x100px)",
    purpose: "Every email sent is a branding touchpoint.",
    whatToCollect: [
      "'AI Contract Review | 30 Hours → 30 Minutes | paralegent.ai/demo'",
      "Brand colors: Teal + Orange",
      "2 versions (one per person)",
      "Export as PNG + HTML",
    ],
    usedWhen: "Every email Mudassir and Ali send",
    status: "needed",
    priority: "P0",
  },
  // P1 — Need by Week 3
  {
    id: "sa-9",
    name: "'5 Questions Every GC Should Ask' Checklist",
    type: "PDF (1 page)",
    purpose: "Outreach value-add. Give before asking. Questions designed so our answers are strongest.",
    whatToCollect: [
      "5 questions: Where does data go? Can I use my own LLMs? How many AI models? What happens after review? Subscription or one-time?",
      "For each: the question + why it matters + what the best answer looks like",
      "Design as branded PDF using AI tool",
    ],
    usedWhen: "Ali attaches to follow-up emails as free resource. Positions as thought leader, not vendor.",
    status: "needed",
    priority: "P1",
  },
  {
    id: "sa-10",
    name: "'Paralegent At A Glance' Product Summary",
    type: "PDF (1 page)",
    purpose: "Post-demo leave-behind. Replaces 'let me send you more info' dead end.",
    whatToCollect: [
      "Logo + tagline",
      "1-paragraph description",
      "3-step visual: Upload Rulebook → AI Reviews → Redlines in Word",
      "Key numbers: 18 agents, 2-8 min, 40-50 redlines, 80-150 terms",
      "Differentiators: customer-cloud, works with any AI model, GREEN/ORANGE/RED",
      "CTA: Request a Demo",
    ],
    usedWhen: "After every demo — send within 24 hours",
    status: "needed",
    priority: "P1",
  },
  {
    id: "sa-11",
    name: "Competitive Comparison One-Pager",
    type: "PDF (1 page)",
    purpose: "Shared when prospects say 'We're also looking at LegalOn / Spellbook'.",
    whatToCollect: [
      "Paralegent vs LegalOn vs Spellbook vs Harvey — 6 dimensions:",
      "1. Deployment Model (customer-cloud vs SaaS)",
      "2. Pricing Model (one-time vs subscription)",
      "3. AI Architecture (18 agents vs single LLM)",
      "4. Data Handling (your cloud vs vendor cloud)",
      "5. Customization (rulebook depth vs pre-built playbooks)",
      "6. Vendor Lock-in (none vs high)",
      "Visual table format. Brand colors.",
    ],
    usedWhen: "When prospect mentions a competitor during or after demo",
    status: "needed",
    priority: "P1",
  },
  {
    id: "sa-12",
    name: "3 Post-Demo Email Templates",
    type: "Text (email copy)",
    purpose: "Post-demo follow-up within 24h. Different variant based on what the prospect needs next.",
    whatToCollect: [
      "(a) 'Needs CIO involvement' → attach Security one-pager",
      "(b) 'Needs budget approval' → attach ROI one-pager",
      "(c) 'Needs timeline clarity' → attach Implementation Timeline",
      "Each: brief, professional, attach the relevant PDF",
    ],
    usedWhen: "Within 24 hours after every demo",
    status: "needed",
    priority: "P1",
  },
  {
    id: "sa-13",
    name: "Email Follow-Up Sequences (3 templates)",
    type: "Text (email copy)",
    purpose: "80% of sales need 5+ touchpoints. Most people give up after 1.",
    whatToCollect: [
      "'No response' #1 (Day 3): New angle, <80 words",
      "'No response' #2 (Day 7): Share demo video link",
      "'Interested but not now' nurture: Monthly check-in template",
    ],
    usedWhen: "Ali loads into Instantly for automated follow-up sequences",
    status: "needed",
    priority: "P1",
  },
  // P2 — Need by Week 5+
  {
    id: "sa-14",
    name: "Case Study Template (Ready to Fill)",
    type: "PDF template",
    purpose: "GCs rank case studies #3 before buying. Template ready for first pilot results.",
    whatToCollect: [
      "Template structure: Company Background → Challenge → Solution → Implementation → Results → Quote",
      "Branded PDF template — fill in the blanks when first pilot completes",
      "Keep it to 1-2 pages",
    ],
    usedWhen: "The moment first pilot produces positive results — fill and distribute immediately",
    status: "needed",
    priority: "P2",
  },
  {
    id: "sa-15",
    name: "Sales Deck (5-7 slides)",
    type: "Slide deck",
    purpose: "Mudassir's demo support deck. Incorporates everything learned over first weeks.",
    whatToCollect: [
      "Slide 1: Problem (contract review is broken — stats)",
      "Slide 2: Solution (18 agents, rulebook-driven, Word-native)",
      "Slide 3: How it works (3-step visual)",
      "Slide 4: Differentiators (customer-cloud, works with any AI model)",
      "Slide 5: ROI (30hrs → 30min, $100K/month → $60-80K one-time)",
      "Slide 6: Social proof (testimonial/case study when available)",
      "Slide 7: CTA (next steps, pricing, timeline)",
    ],
    usedWhen: "Mudassir uses during demo calls. Also sent as follow-up.",
    status: "needed",
    priority: "P2",
  },
  {
    id: "sa-16",
    name: "Product Screenshots (3-5)",
    type: "Images (PNG, multiple sizes)",
    purpose: "Needed for ALL 15 platform registrations, website, sales deck, social media.",
    whatToCollect: [
      "1. Word add-in interface (before review)",
      "2. Contract with GREEN/ORANGE/RED highlights (after review)",
      "3. RED clause with rationale + confidence score + suggested revision",
      "4. Summary view showing all findings",
      "5. Architecture diagram: 18 agents → orchestrator → Word",
      "Sizes: 1920x1080, 1270x760 (PH), 500x500 (logo)",
    ],
    usedWhen: "Every platform registration, website, sales materials",
    status: "needed",
    priority: "P0",
  },
];

const priorityStyles = {
  P0: { badge: "bg-red-100 text-red-800 border-red-200", card: "border-l-red-500" },
  P1: { badge: "bg-amber-100 text-amber-800 border-amber-200", card: "border-l-amber-500" },
  P2: { badge: "bg-gray-100 text-gray-600 border-gray-200", card: "border-l-gray-400" },
};

const statusStyles = {
  needed: { badge: "bg-red-50 text-red-700", label: "Needed" },
  in_progress: { badge: "bg-yellow-50 text-yellow-700", label: "In Progress" },
  done: { badge: "bg-green-50 text-green-700", label: "Done" },
};

const typeIcons: Record<string, string> = {
  "Video": "🎬",
  "PDF (1 page)": "📄",
  "PDF template": "📄",
  "Text (email copy)": "✉️",
  "Text (message templates)": "💬",
  "Image (600x100px)": "🖼️",
  "Images (PNG, multiple sizes)": "🖼️",
  "Slide deck": "📊",
};

export default function AssetsPage() {
  const p0 = salesAssets.filter(a => a.priority === "P0");
  const p1 = salesAssets.filter(a => a.priority === "P1");
  const p2 = salesAssets.filter(a => a.priority === "P2");
  const needed = salesAssets.filter(a => a.status === "needed").length;

  return (
    <main>
      <header className="bg-[#042729] text-[#F8F5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-[#FF4800] text-sm font-semibold uppercase tracking-wider mb-1">Sales Arsenal</p>
          <h1 className="text-3xl font-bold">Sales Assets Checklist</h1>
          <p className="text-[#F8F5EE]/70 mt-1">Everything we need to collect and create before outreach starts. {needed} of {salesAssets.length} still needed.</p>
        </div>
      </header>
      <Nav active="content" />

      {/* Summary */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-6">
          <div>
            <p className="text-xs text-gray-500">Total Assets</p>
            <p className="font-bold text-[#042729]">{salesAssets.length}</p>
          </div>
          <div>
            <p className="text-xs text-red-500 font-medium">P0 (Before Outreach)</p>
            <p className="font-bold text-red-700">{p0.length}</p>
          </div>
          <div>
            <p className="text-xs text-amber-500 font-medium">P1 (Week 2-3)</p>
            <p className="font-bold text-amber-700">{p1.length}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">P2 (Week 5+)</p>
            <p className="font-bold text-gray-600">{p2.length}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Still Needed</p>
            <p className="font-bold text-[#FF4800]">{needed}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* P0 */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-red-800 mb-1">P0 — Must Have Before First Outreach</h2>
          <p className="text-sm text-gray-500 mb-4">Without these, don&apos;t send a single email.</p>
          <div className="space-y-4">
            {p0.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>

        {/* P1 */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-amber-800 mb-1">P1 — Need by Week 2-3</h2>
          <p className="text-sm text-gray-500 mb-4">Supports demos and follow-ups. Build as demos start happening.</p>
          <div className="space-y-4">
            {p1.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>

        {/* P2 */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-600 mb-1">P2 — Need by Week 5+</h2>
          <p className="text-sm text-gray-500 mb-4">Build after first pilots and real market feedback.</p>
          <div className="space-y-4">
            {p2.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI | Sales Assets Checklist | Collect these before outreach
      </footer>
    </main>
  );
}

function AssetCard({ asset }: { asset: SalesAssetItem }) {
  const pStyle = priorityStyles[asset.priority];
  const sStyle = statusStyles[asset.status];

  return (
    <div className={`bg-white rounded-xl border border-gray-200 border-l-4 ${pStyle.card} overflow-hidden`}>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{typeIcons[asset.type] || "📦"}</span>
          <h3 className="font-semibold text-sm text-[#042729] flex-1">{asset.name}</h3>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${pStyle.badge}`}>{asset.priority}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${sStyle.badge}`}>{sStyle.label}</span>
        </div>
        <p className="text-xs text-gray-500 mb-1"><span className="font-medium">Type:</span> {asset.type}</p>
        <p className="text-xs text-gray-600 mb-3">{asset.purpose}</p>

        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <p className="text-xs font-bold text-gray-500 uppercase mb-2">What to collect / create:</p>
          <ul className="space-y-1">
            {asset.whatToCollect.map((item, i) => (
              <li key={i} className="text-xs text-gray-700 flex gap-2">
                <span className="text-[#FF4800] flex-shrink-0">□</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-gray-500">
          <span className="font-medium text-[#042729]">Used when:</span> {asset.usedWhen}
        </p>
      </div>
    </div>
  );
}
