import {
  keywordTargets,
  competitorGaps,
  platformStrategy,
  toolSetup,
  influencerTargets,
  marketData,
  conversionBenchmarks,
  microsoftEcosystem,
  linkedinInsights,
  geoCitationStrategy,
  designPartnerStrategy,
  channelMix,
} from "@/data/research";
import Nav from "@/components/Nav";

function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="bg-[#042729] text-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <p className="text-[#FF4800] text-sm font-semibold uppercase tracking-wider mb-1">Paralegent AI</p>
        <h1 className="text-3xl font-bold">Research & Intelligence</h1>
        <p className="text-[#F8F5EE]/70 mt-1">Data from 50+ sources — validated and prioritized for execution</p>
      </div>
    </header>
  );
}

function KeywordTargetsSection() {
  const tierColors = { 1: "bg-red-100 text-red-800", 2: "bg-amber-100 text-amber-800", 3: "bg-blue-100 text-blue-800" };
  const tierLabels = { 1: "Must-Win", 2: "Comparison", 3: "Question" };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Keyword Targets ({keywordTargets.length})</h2>
      <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#042729] text-[#F8F5EE]">
              <th className="px-4 py-3 text-left font-semibold">Tier</th>
              <th className="px-4 py-3 text-left font-semibold">Keyword</th>
              <th className="px-4 py-3 text-left font-semibold">Volume</th>
              <th className="px-4 py-3 text-left font-semibold">Competition</th>
              <th className="px-4 py-3 text-left font-semibold">Our Angle</th>
              <th className="px-4 py-3 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {keywordTargets.map((kw) => (
              <tr key={kw.keyword} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <Badge className={tierColors[kw.tier]}>{tierLabels[kw.tier]}</Badge>
                </td>
                <td className="px-4 py-3 font-medium">{kw.keyword}</td>
                <td className="px-4 py-3 text-gray-600">{kw.volume}</td>
                <td className="px-4 py-3">
                  <span className={kw.competition.includes("LOW") ? "text-emerald-700 font-semibold" : "text-gray-600"}>
                    {kw.competition}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{kw.angle}</td>
                <td className="px-4 py-3 text-gray-600">{kw.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CompetitorGapsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Competitor Gaps — Where ALL Competitors Are Weak</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {competitorGaps.map((gap) => (
          <div key={gap.gap} className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold text-sm text-[#042729] mb-1">{gap.gap}</h3>
            <p className="text-xs text-gray-600">{gap.why}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PlatformStrategySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Platform Strategy</h2>
      <div className="space-y-3">
        {platformStrategy.map((p) => {
          const isSkip = p.priority === "SKIP";
          const isMustDo = p.priority.includes("MUST");
          const isHigh = p.priority.includes("HIGH");
          return (
            <div key={p.platform} className={`bg-white rounded-xl border p-5 ${isSkip ? "opacity-50 border-gray-200" : isMustDo ? "border-[#FF4800]/30 bg-orange-50/30" : isHigh ? "border-blue-200" : "border-gray-200"}`}>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge className={isMustDo ? "bg-[#FF4800] text-white" : isHigh ? "bg-blue-600 text-white" : isSkip ? "bg-gray-400 text-white" : "bg-gray-200 text-gray-700"}>
                  {p.priority}
                </Badge>
                <h3 className="font-semibold text-sm">{p.platform}</h3>
                <span className="text-xs text-gray-400 ml-auto">{p.weeklyHours}/week | {p.timeToResults}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-gray-500">Clients:</span>
                <span className={`text-xs font-medium ${p.canBringClients.includes("YES") ? "text-emerald-700" : p.canBringClients === "No" ? "text-red-500" : "text-amber-700"}`}>
                  {p.canBringClients}
                </span>
              </div>
              {!isSkip && <p className="text-xs text-gray-600 mt-1">{p.action}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ConversionBenchmarksSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Conversion Benchmarks (Real Numbers)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sales Funnel */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-sm text-[#042729] mb-3">Sales Funnel</h3>
          <div className="space-y-2">
            {conversionBenchmarks.salesFunnel.map((s) => (
              <div key={s.stage} className="flex justify-between items-baseline">
                <span className="text-xs text-gray-600">{s.stage}</span>
                <span className={`text-sm font-semibold ${s.rate.includes("70") || s.rate.includes("never") ? "text-[#FF4800]" : "text-[#042729]"}`}>
                  {s.rate}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Signal-Based Selling */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-sm text-[#042729] mb-3">Signal-Based Selling</h3>
          <div className="space-y-2">
            {conversionBenchmarks.signalBased.map((s) => (
              <div key={s.metric} className="flex justify-between items-baseline gap-4">
                <span className="text-xs text-gray-600">{s.metric}</span>
                <span className="text-sm font-semibold text-[#042729] text-right whitespace-nowrap">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cold Email */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-sm text-[#042729] mb-3">Cold Email Benchmarks</h3>
          <div className="space-y-2">
            {conversionBenchmarks.coldEmail.map((s) => (
              <div key={s.metric} className="flex justify-between items-baseline gap-4">
                <span className="text-xs text-gray-600">{s.metric}</span>
                <span className="text-sm font-semibold text-[#042729] whitespace-nowrap">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LinkedIn */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-sm text-[#042729] mb-3">LinkedIn Outreach Benchmarks</h3>
          <div className="space-y-2">
            {conversionBenchmarks.linkedin.map((s) => (
              <div key={s.metric} className="flex justify-between items-baseline gap-4">
                <span className="text-xs text-gray-600">{s.metric}</span>
                <span className="text-sm font-semibold text-[#042729] text-right whitespace-nowrap">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Website */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 md:col-span-2">
          <h3 className="font-bold text-sm text-[#042729] mb-3">Website Conversion</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {conversionBenchmarks.website.map((s) => (
              <div key={s.metric} className="flex justify-between items-baseline gap-4">
                <span className="text-xs text-gray-600">{s.metric}</span>
                <span className="text-sm font-semibold text-[#FF4800] whitespace-nowrap">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketDataSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Market Data (For Sales Conversations)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-sm text-[#042729] mb-3">Market Size</h3>
          {marketData.marketSize.map((m) => (
            <div key={m.metric} className="mb-2">
              <p className="text-xs text-gray-500">{m.metric}</p>
              <p className="font-semibold text-[#042729]">{m.value}</p>
              <p className="text-xs text-emerald-600">{m.growth}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-sm text-[#042729] mb-3">Buyer Barriers (Our Answers)</h3>
          {marketData.barriers.map((b) => (
            <div key={b.barrier} className="mb-3">
              <p className="text-xs text-red-600 font-medium">{b.barrier}</p>
              <p className="text-xs text-emerald-700">→ {b.ourAnswer}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-sm text-[#042729] mb-3">Cost Comparison</h3>
          {marketData.costData.map((c) => (
            <div key={c.metric} className="flex justify-between items-baseline mb-2">
              <span className="text-xs text-gray-600">{c.metric}</span>
              <span className="text-sm font-semibold text-[#042729]">{c.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MicrosoftSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Microsoft Ecosystem — Biggest Free Lever</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="space-y-4">
          {microsoftEcosystem.map((step) => (
            <div key={step.step} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#042729] text-white flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-sm">{step.name}</h3>
                  <Badge className="bg-emerald-100 text-emerald-800">{step.cost}</Badge>
                </div>
                <p className="text-xs text-gray-600 mb-1">{step.benefit}</p>
                <p className="text-xs text-[#FF4800]">{step.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkedInSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">LinkedIn Algorithm Intelligence</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-sm text-[#042729] mb-3">Algorithm Rules (2026)</h3>
          <ul className="space-y-2">
            {linkedinInsights.algorithm.map((rule, i) => (
              <li key={i} className="text-xs text-gray-600 flex gap-2">
                <span className="text-[#FF4800] flex-shrink-0">•</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-sm text-[#042729] mb-3">Content Format Rankings</h3>
          <div className="space-y-3">
            {linkedinInsights.contentRanking.map((c, i) => (
              <div key={c.format}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-400">#{i + 1}</span>
                  <span className="text-xs font-semibold">{c.format}</span>
                  <span className="text-xs text-[#FF4800] font-medium ml-auto">{c.engagement}</span>
                </div>
                <p className="text-xs text-gray-500 ml-5">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-sm text-[#042729] mb-3">Posting Rules</h3>
          <ul className="space-y-2">
            {linkedinInsights.postingRules.map((rule, i) => (
              <li key={i} className="text-xs text-gray-600 flex gap-2">
                <span className="text-[#FF4800] flex-shrink-0">•</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-sm text-[#042729] mb-3">Newsletter: {linkedinInsights.newsletter.name}</h3>
          <div className="space-y-2">
            <div className="flex justify-between"><span className="text-xs text-gray-500">Open rate</span><span className="text-sm font-semibold text-[#042729]">{linkedinInsights.newsletter.openRate}</span></div>
            <div className="flex justify-between"><span className="text-xs text-gray-500">Delivery</span><span className="text-xs font-medium text-[#042729]">{linkedinInsights.newsletter.delivery}</span></div>
            <div className="flex justify-between"><span className="text-xs text-gray-500">Frequency</span><span className="text-xs font-medium text-[#042729]">{linkedinInsights.newsletter.frequency}</span></div>
            <p className="text-xs text-[#FF4800] font-medium mt-2">{linkedinInsights.newsletter.rule}</p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100">
            <h4 className="text-xs font-bold text-gray-500 mb-2">LinkedIn Ads (Start Month 3)</h4>
            <div className="space-y-1">
              <div className="flex justify-between"><span className="text-xs text-gray-500">CPC</span><span className="text-xs font-semibold">{linkedinInsights.ads.cpc}</span></div>
              <div className="flex justify-between"><span className="text-xs text-gray-500">CPL</span><span className="text-xs font-semibold">{linkedinInsights.ads.cpl}</span></div>
              <div className="flex justify-between"><span className="text-xs text-gray-500">ROAS</span><span className="text-xs font-semibold text-emerald-700">{linkedinInsights.ads.roas}</span></div>
              <div className="flex justify-between"><span className="text-xs text-gray-500">Return per deal</span><span className="text-xs font-semibold text-[#FF4800]">{linkedinInsights.ads.returnPerDeal}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GEOSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">GEO / AI Citation Strategy</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
        <p className="text-sm font-semibold text-[#FF4800] mb-4">{geoCitationStrategy.criticalFinding}</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {geoCitationStrategy.engines.map((e) => (
            <div key={e.engine} className="text-center">
              <h3 className="font-bold text-sm text-[#042729] mb-1">{e.engine}</h3>
              <p className="text-xs text-gray-600 mb-1">{e.logic}</p>
              <Badge className="bg-[#FCDED2] text-[#042729]">{e.priority}</Badge>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="font-bold text-sm text-[#042729] mb-3">Content Structure Rules for AI Citations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {geoCitationStrategy.contentRules.map((rule, i) => (
            <div key={i} className="text-xs text-gray-600 flex gap-2">
              <span className="text-[#FF4800] flex-shrink-0">•</span>
              {rule}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  const totalMonthly = "$350-520/mo + $500-1000 one-time";
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-1">Tools & Setup</h2>
      <p className="text-sm text-gray-500 mb-4">Total: {totalMonthly}</p>
      <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#042729] text-[#F8F5EE]">
              <th className="px-4 py-3 text-left font-semibold">Tool</th>
              <th className="px-4 py-3 text-left font-semibold">Cost</th>
              <th className="px-4 py-3 text-left font-semibold">Owner</th>
              <th className="px-4 py-3 text-left font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {toolSetup.map((t) => (
              <tr key={t.tool} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{t.tool}</td>
                <td className="px-4 py-3 text-gray-600">{t.cost}</td>
                <td className="px-4 py-3"><Badge className={t.owner === "Ali" ? "bg-[#FF4800] text-white" : t.owner === "Mudassir" ? "bg-[#042729] text-white" : "bg-emerald-600 text-white"}>{t.owner}</Badge></td>
                <td className="px-4 py-3 text-xs text-gray-600">{t.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function DesignPartnerSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Design Partner Strategy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm text-[#042729]">Target: {designPartnerStrategy.target}</h3>
            <Badge className="bg-emerald-100 text-emerald-800">{designPartnerStrategy.expectedConversion} convert to paid</Badge>
          </div>
          <p className="text-xs text-gray-500 mb-3">Term: {designPartnerStrategy.term}</p>
          <h4 className="text-xs font-bold text-gray-500 mb-2">Selection Criteria:</h4>
          <ul className="space-y-1">
            {designPartnerStrategy.criteria.map((c, i) => (
              <li key={i} className="text-xs text-gray-600 flex gap-2"><span className="text-[#FF4800]">•</span>{c}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h4 className="text-xs font-bold text-gray-500 mb-2">What They Give Us:</h4>
          <ul className="space-y-1 mb-4">
            {designPartnerStrategy.inReturn.map((r, i) => (
              <li key={i} className="text-xs text-gray-600 flex gap-2"><span className="text-emerald-600">✓</span>{r}</li>
            ))}
          </ul>
          <h4 className="text-xs font-bold text-gray-500 mb-2">Where to Find:</h4>
          <ul className="space-y-1">
            {designPartnerStrategy.whereToFind.map((w, i) => (
              <li key={i} className="text-xs text-gray-600 flex gap-2"><span className="text-[#FF4800]">→</span>{w}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function InfluencersSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
      <h2 className="text-xl font-bold mb-4">Influencers to Engage</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {influencerTargets.map((inf) => (
          <div key={inf.name} className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-sm">{inf.name}</h3>
              <Badge className="bg-gray-100 text-gray-600">{inf.platform}</Badge>
            </div>
            <p className="text-xs text-gray-500">{inf.role}</p>
            <p className="text-xs text-gray-600 mt-1">{inf.why}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ResearchPage() {
  return (
    <main>
      <Header />
      <Nav active="research" />

      {/* Link to Buyer Intel */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <p className="text-sm text-amber-800"><span className="font-bold">New: Buyer Intelligence</span> — Real objections (60% trust, 57% data, 77% burned), customer language, switching dynamics, buying triggers, competitor weaknesses from G2 reviews. See <a href="/buyers" className="text-[#FF4800] underline font-medium">Buyer Intel page</a></p>
        </div>
      </div>

      <KeywordTargetsSection />
      <CompetitorGapsSection />
      <ConversionBenchmarksSection />
      <MarketDataSection />
      <PlatformStrategySection />
      <LinkedInSection />
      <GEOSection />
      <MicrosoftSection />
      <DesignPartnerSection />
      <ToolsSection />
      <InfluencersSection />
      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI Growth Dashboard | Research from 50+ validated sources
      </footer>
    </main>
  );
}
