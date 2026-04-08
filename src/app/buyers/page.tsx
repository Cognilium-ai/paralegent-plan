import {
  buyerObjections,
  buyerTriggers,
  customerLanguage,
  switchingDynamics,
  competitorWeaknesses,
  antiPersonas,
  blogOrderByObjection,
  salesAssetsByMoment,
} from "@/data/buyer-insights";
import Nav from "@/components/Nav";

function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>{children}</span>;
}

export default function BuyersPage() {
  return (
    <main>
      <header className="bg-[#042729] text-[#F8F5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-[#FF4800] text-sm font-semibold uppercase tracking-wider mb-1">Foundation</p>
          <h1 className="text-3xl font-bold">Buyer Intelligence</h1>
          <p className="text-[#F8F5EE]/70 mt-1">Real research on how GCs think, talk, object, and buy. Every piece of content starts here.</p>
        </div>
      </header>
      <Nav active="research" />

      {/* Objections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-xl font-bold mb-4">Top 5 Buyer Objections (Real Data)</h2>
        <div className="space-y-4">
          {buyerObjections.map((obj) => (
            <div key={obj.rank} className="bg-white rounded-xl border-2 border-l-4 border-l-red-500 border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-red-600">#{obj.rank}</span>
                <h3 className="font-semibold text-sm flex-1">&ldquo;{obj.objection}&rdquo;</h3>
                <Badge className="bg-red-100 text-red-800">{obj.percentage}</Badge>
                <Badge className="bg-gray-100 text-gray-600">{obj.source}</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">What they actually say:</p>
                  {obj.verbatim.map((v, i) => (
                    <p key={i} className="text-xs text-gray-600 italic mb-1">&ldquo;{v}&rdquo;</p>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-700 uppercase mb-2">Our answer:</p>
                  <p className="text-xs text-gray-700">{obj.ourAnswer}</p>
                  <p className="text-xs text-[#FF4800] mt-2 font-medium">Content needed: {obj.contentNeeded}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sales Assets by Deal Moment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <h2 className="text-xl font-bold mb-4">Sales Assets Mapped to Deal Moments</h2>
        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#042729] text-[#F8F5EE]">
                <th className="px-4 py-3 text-left font-semibold">Moment</th>
                <th className="px-4 py-3 text-left font-semibold">Trigger</th>
                <th className="px-4 py-3 text-left font-semibold">Asset</th>
                <th className="px-4 py-3 text-left font-semibold">Who</th>
              </tr>
            </thead>
            <tbody>
              {salesAssetsByMoment.map((sa, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-[#042729]">{sa.moment}</td>
                  <td className="px-4 py-3 text-xs text-gray-600">{sa.trigger}</td>
                  <td className="px-4 py-3 text-xs font-medium">{sa.asset}</td>
                  <td className="px-4 py-3"><Badge className={sa.whoSends === "Ali" ? "bg-[#FF4800] text-white" : "bg-[#042729] text-white"}>{sa.whoSends}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Blog Order by Objection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <h2 className="text-xl font-bold mb-4">Blog Calendar — Ordered by Buyer Objections</h2>
        <p className="text-sm text-gray-500 mb-4">Blogs reordered: trust first (60% objection), then data sovereignty (57%), then failed tech (77%), then ROI. NOT keyword volume.</p>
        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#042729] text-[#F8F5EE]">
                <th className="px-4 py-3 text-left font-semibold">Week</th>
                <th className="px-4 py-3 text-left font-semibold">Blog Title</th>
                <th className="px-4 py-3 text-left font-semibold">Objection It Addresses</th>
                <th className="px-4 py-3 text-left font-semibold">Keyword</th>
              </tr>
            </thead>
            <tbody>
              {blogOrderByObjection.map((blog, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-[#042729]">{blog.week}</td>
                  <td className="px-4 py-3 font-medium text-sm">{blog.blog}</td>
                  <td className="px-4 py-3"><Badge className="bg-red-50 text-red-700">{blog.objection}</Badge></td>
                  <td className="px-4 py-3 text-xs text-gray-500">{blog.keyword}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Buying Triggers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <h2 className="text-xl font-bold mb-4">Buying Triggers — When GCs Are Ready to Buy</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {buyerTriggers.map((t) => (
            <div key={t.trigger} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-sm text-[#042729] mb-2">{t.trigger}</h3>
              <p className="text-xs text-gray-600 mb-2">{t.detail}</p>
              <p className="text-xs"><span className="font-medium text-[#FF4800]">Signal to watch:</span> <span className="text-gray-600">{t.signal}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Language */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <h2 className="text-xl font-bold mb-4">Customer Language — Use THEIR Words</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-xs font-bold text-red-700 uppercase mb-3">How they describe the PROBLEM</h3>
            <ul className="space-y-1">
              {customerLanguage.problemPhrases.map((p, i) => (
                <li key={i} className="text-sm text-gray-700">&ldquo;{p}&rdquo;</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-xs font-bold text-emerald-700 uppercase mb-3">How they describe what they WANT</h3>
            <ul className="space-y-1">
              {customerLanguage.wantPhrases.map((p, i) => (
                <li key={i} className="text-sm text-gray-700">&ldquo;{p}&rdquo;</li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-5">
            <h3 className="text-xs font-bold text-emerald-800 uppercase mb-3">Words they TRUST</h3>
            <ul className="space-y-1">
              {customerLanguage.trustWords.map((w, i) => (
                <li key={i} className="text-sm text-emerald-800 font-medium">{w}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl border border-red-200 p-5">
            <h3 className="text-xs font-bold text-red-800 uppercase mb-3">Words that KILL trust</h3>
            <ul className="space-y-1">
              {customerLanguage.killWords.map((w, i) => (
                <li key={i} className="text-sm text-red-700">{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Switching Dynamics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <h2 className="text-xl font-bold mb-4">Switching Dynamics — Four Forces</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-xl border border-red-200 p-5">
            <h3 className="text-xs font-bold text-red-800 uppercase mb-3">PUSH (Away from manual)</h3>
            <ul className="space-y-1">{switchingDynamics.push.map((p, i) => <li key={i} className="text-xs text-gray-700 flex gap-2"><span className="text-red-500">&#x2192;</span>{p}</li>)}</ul>
          </div>
          <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-5">
            <h3 className="text-xs font-bold text-emerald-800 uppercase mb-3">PULL (Toward Paralegent)</h3>
            <ul className="space-y-1">{switchingDynamics.pull.map((p, i) => <li key={i} className="text-xs text-gray-700 flex gap-2"><span className="text-emerald-500">&#x2190;</span>{p}</li>)}</ul>
          </div>
          <div className="bg-amber-50 rounded-xl border border-amber-200 p-5">
            <h3 className="text-xs font-bold text-amber-800 uppercase mb-3">HABIT (What keeps them stuck)</h3>
            <ul className="space-y-1">{switchingDynamics.habit.map((p, i) => <li key={i} className="text-xs text-gray-700 flex gap-2"><span className="text-amber-500">&#x25CF;</span>{p}</li>)}</ul>
          </div>
          <div className="bg-purple-50 rounded-xl border border-purple-200 p-5">
            <h3 className="text-xs font-bold text-purple-800 uppercase mb-3">ANXIETY (Fear of switching)</h3>
            <ul className="space-y-1">{switchingDynamics.anxiety.map((p, i) => <li key={i} className="text-xs text-gray-700 flex gap-2"><span className="text-purple-500">&#x26A0;</span>{p}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* Competitor Weaknesses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <h2 className="text-xl font-bold mb-4">Competitor Weaknesses (From Real Users)</h2>
        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#042729] text-[#F8F5EE]">
                <th className="px-4 py-3 text-left font-semibold">Competitor</th>
                <th className="px-4 py-3 text-left font-semibold">Price</th>
                <th className="px-4 py-3 text-left font-semibold">Real User Complaints</th>
              </tr>
            </thead>
            <tbody>
              {competitorWeaknesses.map((c) => (
                <tr key={c.competitor} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium">{c.competitor}</td>
                  <td className="px-4 py-3 text-[#FF4800] font-medium">{c.price}</td>
                  <td className="px-4 py-3 text-xs text-gray-600">{c.weakness}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Anti-Personas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="text-xl font-bold mb-4">Anti-Personas — Who is NOT a Fit</h2>
        <div className="bg-red-50 rounded-xl border border-red-200 p-5">
          <ul className="space-y-2">
            {antiPersonas.map((ap, i) => (
              <li key={i} className="text-sm text-red-800 flex gap-2"><span className="font-bold">&#x2717;</span>{ap}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI | Buyer Intelligence | From CLOC, FTI, Gartner, ABA, G2, Thomson Reuters
      </footer>
    </main>
  );
}
