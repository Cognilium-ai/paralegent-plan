import { contentCalendar, dayLabels } from "@/data/content-calendar";
import Nav from "@/components/Nav";

function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>{children}</span>;
}

export default function CalendarPage() {
  return (
    <main>
      <header className="bg-[#042729] text-[#F8F5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-[#FF4800] text-sm font-semibold uppercase tracking-wider mb-1">System Design</p>
          <h1 className="text-3xl font-bold">8-Week Content Calendar</h1>
          <p className="text-[#F8F5EE]/70 mt-1">Every blog, every video, every post — mapped to objection, hook, purpose, angle, platform. Structure before content.</p>
        </div>
      </header>
      <Nav active="daily" />

      {/* Day Type Legend */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs font-bold text-gray-500 uppercase mb-2">Weekly Rhythm (per person, per blog)</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(dayLabels).map(([day, label]) => {
              const colors: Record<string, string> = { "1": "bg-red-100 text-red-800", "2": "bg-blue-100 text-blue-800", "3": "bg-purple-100 text-purple-800", "4": "bg-gray-100 text-gray-600", "5": "bg-gray-100 text-gray-600" };
              return <Badge key={day} className={colors[day]}>Day {day}: {label}</Badge>;
            })}
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {contentCalendar.map((entry, idx) => (
          <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">

            {/* Blog Header */}
            <div className="bg-[#042729] text-[#F8F5EE] px-6 py-4">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge className="bg-[#FF4800] text-white">Week {entry.week}</Badge>
                <Badge className="bg-white/20 text-white">Blog #{entry.blog.number}</Badge>
                <Badge className="bg-red-500/80 text-white">{entry.blog.objection}</Badge>
                <Badge className="bg-white/20 text-white">{entry.blog.objectionPercent}</Badge>
                <Badge className="bg-emerald-500/80 text-white">{entry.blog.assignedWriter}</Badge>
              </div>
              <h2 className="text-lg font-bold">{entry.blog.title}</h2>
              <p className="text-sm text-[#F8F5EE]/60 mt-1">{entry.blog.words} words | Keyword: {entry.blog.keyword} | Stage: {entry.blog.buyerStage}</p>
            </div>

            {/* Blog Details */}
            <div className="p-6 border-b border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">Hook Formula</p>
                  <Badge className="bg-amber-100 text-amber-800 mb-1">{entry.blog.hookFormula}</Badge>
                  <p className="text-xs text-gray-700 italic">&ldquo;{entry.blog.hookExample}&rdquo;</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">Content Blocks</p>
                  <ul className="space-y-1">{entry.blog.contentBlocks.map((b, i) => (
                    <li key={i} className="text-xs text-gray-600">• {b}</li>
                  ))}</ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">Customer Language to Use</p>
                  <ul className="space-y-1">{entry.blog.customerLanguage.map((l, i) => (
                    <li key={i} className="text-xs text-gray-700">&ldquo;{l}&rdquo;</li>
                  ))}</ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">Assigned To</p>
                  <p className="text-sm font-semibold text-[#042729]">{entry.blog.assignedWriter} writes blog</p>
                  <p className="text-xs text-gray-500 mt-1">Saqlain → Mudassir LinkedIn, Company Page, Twitter, Quora, Medium, Reddit, Strapi</p>
                  <p className="text-xs text-gray-500">Asad → Ali LinkedIn, YouTube, IG, TikTok, FB, Carousel</p>
                </div>
              </div>
            </div>

            {/* Day 1: SURGE — All Text Posts */}
            <div className="border-b border-gray-200">
              <div className="bg-red-50 px-6 py-2">
                <p className="text-xs font-bold text-red-800">DAY 1 — SURGE: Blog publishes + all text posts + carousel</p>
              </div>
              <div className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {entry.pieces.filter(p => p.day === 1).map((piece, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={piece.owner === "Saqlain" ? "bg-blue-600 text-white" : "bg-emerald-600 text-white"}>{piece.owner}</Badge>
                        <Badge className="bg-gray-200 text-gray-700">{piece.type}</Badge>
                      </div>
                      <p className="text-xs font-semibold text-[#042729] mb-1">{piece.platform}</p>
                      <p className="text-xs text-gray-500 mb-1"><span className="font-medium text-gray-700">Purpose:</span> {piece.purpose}</p>
                      <p className="text-xs text-gray-500"><span className="font-medium text-[#FF4800]">Angle:</span> {piece.angle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day 2: VIDEO */}
            <div className="border-b border-gray-200">
              <div className="bg-blue-50 px-6 py-2">
                <p className="text-xs font-bold text-blue-800">DAY 2 — VIDEO: YouTube long video + thumbnail + upload</p>
              </div>
              <div className="px-6 py-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-red-500 text-white">YouTube</Badge>
                    <Badge className={entry.videoLong.owner === "Saqlain" ? "bg-blue-600 text-white" : "bg-emerald-600 text-white"}>{entry.videoLong.owner}</Badge>
                    <Badge className="bg-gray-200 text-gray-700">{entry.videoLong.duration}</Badge>
                  </div>
                  <h4 className="font-semibold text-sm text-[#042729] mb-1">{entry.videoLong.title}</h4>
                  <p className="text-xs text-gray-500 mb-1"><span className="font-medium text-gray-700">Purpose:</span> {entry.videoLong.purpose}</p>
                  <p className="text-xs text-gray-500"><span className="font-medium text-[#FF4800]">Angle:</span> {entry.videoLong.angle}</p>
                </div>
              </div>
            </div>

            {/* Day 3: SHORTS */}
            <div>
              <div className="bg-purple-50 px-6 py-2">
                <p className="text-xs font-bold text-purple-800">DAY 3 — SHORTS: 2 YouTube Shorts + repost to IG Reel / TikTok / FB Video</p>
              </div>
              <div className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {entry.shorts.map((short, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className="bg-purple-500 text-white">Short #{i + 1}</Badge>
                        <Badge className={short.owner === "Saqlain" ? "bg-blue-600 text-white" : "bg-emerald-600 text-white"}>{short.owner}</Badge>
                      </div>
                      <h4 className="font-semibold text-xs text-[#042729] mb-1">{short.title}</h4>
                      <p className="text-xs text-gray-500"><span className="font-medium text-[#FF4800]">Angle:</span> {short.angle}</p>
                      <p className="text-xs text-gray-400 mt-1">→ Repost to: IG Reel + TikTok + FB Video</p>
                    </div>
                  ))}
                  {entry.pieces.filter(p => p.day === 3).map((piece, i) => (
                    <div key={`d3-${i}`} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={piece.owner === "Saqlain" ? "bg-blue-600 text-white" : "bg-emerald-600 text-white"}>{piece.owner}</Badge>
                        <Badge className="bg-gray-200 text-gray-700">{piece.type}</Badge>
                      </div>
                      <p className="text-xs font-semibold text-[#042729]">{piece.platform}</p>
                      <p className="text-xs text-gray-500">{piece.angle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Weeks 3-8 Placeholder */}
        <div className="bg-amber-50 rounded-xl border-2 border-amber-200 p-6">
          <h3 className="font-bold text-amber-800 mb-2">Weeks 3-8: Coming Next</h3>
          <p className="text-sm text-amber-700 mb-4">Same detailed structure. Building after Week 1-2 are approved.</p>
          <div className="grid md:grid-cols-3 gap-3 text-xs">
            {[
              { week: 3, blogs: "Blog #5: On-Premise BLUE OCEAN + Blog #6: How Redlining Works" },
              { week: 4, blogs: "Blog #7: Complete Guide + Blog #8: Paralegent vs Manual" },
              { week: 5, blogs: "Blog #9: 10 Best Tools + Blog #10: Paralegent vs LegalOn" },
              { week: 6, blogs: "Blog #11: ChatGPT vs Dedicated + Blog #12: Multi-Agent vs Single" },
              { week: 7, blogs: "Blog #13: vs Spellbook + Blog #14: Is AI Safe? GDPR" },
              { week: 8, blogs: "Blog #15: Enterprise Buyer's Guide + Blog #16: What Is a Rulebook?" },
            ].map((w) => (
              <div key={w.week} className="bg-white rounded-lg p-3 border border-amber-200">
                <p className="font-bold text-amber-800">Week {w.week}</p>
                <p className="text-gray-600">{w.blogs}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI | 8-Week Content Calendar | System Design — Structure Before Content
      </footer>
    </main>
  );
}
