import { weeklyPlans, dayLabels, hoursSummary, weeks3to8 } from "@/data/content-calendar";
import type { TaskItem } from "@/data/content-calendar";
import { contentRules, qualityGates, internalLinkingMap } from "@/data/content-rules";
import Nav from "@/components/Nav";

function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>{children}</span>;
}

function DaySection({ dayNum, label, saqlainTasks, asadTasks, saqlainHours, asadHours }: {
  dayNum: number; label: string; saqlainTasks: TaskItem[]; asadTasks: TaskItem[]; saqlainHours: string; asadHours: string;
}) {
  const dayColors: Record<number, string> = { 1: "bg-red-50 border-red-200", 2: "bg-blue-50 border-blue-200", 3: "bg-purple-50 border-purple-200", 4: "bg-gray-50 border-gray-200", 5: "bg-gray-50 border-gray-200" };
  const headerColors: Record<number, string> = { 1: "bg-red-600", 2: "bg-blue-600", 3: "bg-purple-600", 4: "bg-gray-600", 5: "bg-gray-600" };

  return (
    <div className={`rounded-xl border-2 overflow-hidden ${dayColors[dayNum]}`}>
      <div className={`${headerColors[dayNum]} text-white px-6 py-3 flex items-center justify-between`}>
        <h4 className="font-bold text-sm">Day {dayNum}: {label}</h4>
        <div className="flex gap-3 text-xs">
          <span>Saqlain: {saqlainHours}</span>
          <span>|</span>
          <span>Asad: {asadHours}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-x divide-gray-200">
        {/* Saqlain Column */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-blue-600" />
            <span className="font-bold text-xs text-blue-900">Saqlain</span>
            <span className="text-xs text-gray-400">(Mudassir LinkedIn, Company Page, Twitter, Quora, Strapi)</span>
          </div>
          <div className="space-y-2">
            {saqlainTasks.map((t, i) => (
              <div key={i} className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-gray-100 text-gray-600">{t.time}</Badge>
                  {t.forBlog > 0 && <Badge className="bg-[#042729] text-white">Blog #{t.forBlog}</Badge>}
                  {t.platform && <Badge className="bg-blue-50 text-blue-700">{t.platform}</Badge>}
                </div>
                <p className="text-xs font-semibold text-gray-800">{t.task}</p>
                {t.purpose && <p className="text-xs text-gray-500 mt-1"><span className="font-medium text-gray-700">Purpose:</span> {t.purpose}</p>}
                {t.angle && <p className="text-xs text-gray-500"><span className="font-medium text-[#FF4800]">Angle:</span> {t.angle}</p>}
              </div>
            ))}
          </div>
        </div>
        {/* Asad Column */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-emerald-600" />
            <span className="font-bold text-xs text-emerald-900">Asad</span>
            <span className="text-xs text-gray-400">(Ali LinkedIn, YouTube, IG, TikTok, FB, Carousel)</span>
          </div>
          <div className="space-y-2">
            {asadTasks.map((t, i) => (
              <div key={i} className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-gray-100 text-gray-600">{t.time}</Badge>
                  {t.forBlog > 0 && <Badge className="bg-[#042729] text-white">Blog #{t.forBlog}</Badge>}
                  {t.platform && <Badge className="bg-emerald-50 text-emerald-700">{t.platform}</Badge>}
                </div>
                <p className="text-xs font-semibold text-gray-800">{t.task}</p>
                {t.purpose && <p className="text-xs text-gray-500 mt-1"><span className="font-medium text-gray-700">Purpose:</span> {t.purpose}</p>}
                {t.angle && <p className="text-xs text-gray-500"><span className="font-medium text-[#FF4800]">Angle:</span> {t.angle}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CalendarPage() {
  return (
    <main>
      <header className="bg-[#042729] text-[#F8F5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-[#FF4800] text-sm font-semibold uppercase tracking-wider mb-1">System Design</p>
          <h1 className="text-3xl font-bold">8-Week Content Calendar</h1>
          <p className="text-[#F8F5EE]/70 mt-1">Day-by-day, hour-by-hour. Both blogs publish same day. Both people handle BOTH blogs on their platforms.</p>
        </div>
      </header>
      <Nav active="calendar" />

      {/* Legend */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {Object.entries(dayLabels).map(([day, label]) => {
              const colors: Record<string, string> = { "1": "bg-red-100 text-red-800", "2": "bg-blue-100 text-blue-800", "3": "bg-purple-100 text-purple-800", "4": "bg-gray-100 text-gray-600", "5": "bg-gray-100 text-gray-600" };
              return <Badge key={day} className={colors[day]}>Day {day}: {label}</Badge>;
            })}
          </div>
          <p className="text-xs text-gray-500">Every day starts with 2 hrs LinkedIn engagement + 30 min Reddit = 2.5 hrs. Remaining 6.5 hrs for content work.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        {weeklyPlans.map((week) => (
          <div key={week.week}>
            {/* Week Header */}
            <div className="bg-[#042729] rounded-t-xl px-6 py-4 text-[#F8F5EE]">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold">Week {week.week} — {week.startDate}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Blog A */}
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-500 text-white">Saqlain writes</Badge>
                    <Badge className="bg-red-500/80 text-white">{week.blogA.objection}</Badge>
                    <Badge className="bg-white/20 text-white">{week.blogA.objectionPercent}</Badge>
                  </div>
                  <h3 className="font-semibold text-sm">Blog #{week.blogA.number}: {week.blogA.title}</h3>
                  <p className="text-xs text-[#F8F5EE]/60 mt-1">KW: {week.blogA.keyword} | {week.blogA.words}w | Hook: {week.blogA.hookFormula}</p>
                  <p className="text-xs text-[#FF4800] mt-1 italic">&ldquo;{week.blogA.hookExample}&rdquo;</p>
                  <div className="mt-2">
                    <p className="text-xs text-[#F8F5EE]/40">Content blocks: {week.blogA.contentBlocks.join(" → ")}</p>
                  </div>
                </div>
                {/* Blog B */}
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-emerald-500 text-white">Asad writes</Badge>
                    <Badge className="bg-red-500/80 text-white">{week.blogB.objection}</Badge>
                    <Badge className="bg-white/20 text-white">{week.blogB.objectionPercent}</Badge>
                  </div>
                  <h3 className="font-semibold text-sm">Blog #{week.blogB.number}: {week.blogB.title}</h3>
                  <p className="text-xs text-[#F8F5EE]/60 mt-1">KW: {week.blogB.keyword} | {week.blogB.words}w | Hook: {week.blogB.hookFormula}</p>
                  <p className="text-xs text-[#FF4800] mt-1 italic">&ldquo;{week.blogB.hookExample}&rdquo;</p>
                  <div className="mt-2">
                    <p className="text-xs text-[#F8F5EE]/40">Content blocks: {week.blogB.contentBlocks.join(" → ")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Days */}
            <div className="space-y-4 mt-4">
              <DaySection dayNum={1} label="SURGE" saqlainTasks={week.saqlainDay1} asadTasks={week.asadDay1} saqlainHours={hoursSummary.saqlainDay1} asadHours={hoursSummary.asadDay1} />
              <DaySection dayNum={2} label="VIDEO + ARTICLE" saqlainTasks={week.saqlainDay2} asadTasks={week.asadDay2} saqlainHours={hoursSummary.saqlainDay2} asadHours={hoursSummary.asadDay2} />
              <DaySection dayNum={3} label="SHORTS" saqlainTasks={week.saqlainDay3} asadTasks={week.asadDay3} saqlainHours={hoursSummary.saqlainDay3} asadHours={hoursSummary.asadDay3} />
              <DaySection dayNum={4} label="FINISH + MEDIUM" saqlainTasks={week.saqlainDay4} asadTasks={week.asadDay4} saqlainHours={hoursSummary.saqlainDay4} asadHours={hoursSummary.asadDay4} />
              <DaySection dayNum={5} label="LIGHT BUFFER" saqlainTasks={week.saqlainDay5} asadTasks={week.asadDay5} saqlainHours={hoursSummary.saqlainDay5} asadHours={hoursSummary.asadDay5} />
            </div>
          </div>
        ))}

        {/* Weeks 3-8 Full */}
        <h2 className="text-xl font-bold text-[#042729] mt-4 mb-4">Weeks 3-8 — Same Daily Pattern, Different Blogs</h2>
        {weeks3to8.map((w) => (
          <div key={w.week} className="mb-6">
            <div className="bg-[#042729] rounded-xl px-6 py-4 text-[#F8F5EE]">
              <h3 className="text-lg font-bold mb-3">Week {w.week} — {w.startDate}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-500 text-white">Saqlain writes</Badge>
                    <Badge className="bg-red-500/80 text-white">{w.saqlain.objection}</Badge>
                  </div>
                  <h4 className="font-semibold text-sm">Blog #{w.saqlain.num}: {w.saqlain.title}</h4>
                  <p className="text-xs text-[#F8F5EE]/60 mt-1">KW: {w.saqlain.keyword} | {w.saqlain.words}w | Hook: {w.saqlain.hook}</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-emerald-500 text-white">Asad writes</Badge>
                    <Badge className="bg-red-500/80 text-white">{w.asad.objection}</Badge>
                  </div>
                  <h4 className="font-semibold text-sm">Blog #{w.asad.num}: {w.asad.title}</h4>
                  <p className="text-xs text-[#F8F5EE]/60 mt-1">KW: {w.asad.keyword} | {w.asad.words}w | Hook: {w.asad.hook}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs font-bold text-[#F8F5EE]/50 mb-2">VIDEOS + SHORTS</p>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="bg-white/10 rounded p-2">
                    <p className="text-xs text-[#FF4800]">Long Video (Saqlain Day 2):</p>
                    <p className="text-xs text-[#F8F5EE]/80">{w.videoA}</p>
                  </div>
                  <div className="bg-white/10 rounded p-2">
                    <p className="text-xs text-[#FF4800]">Long Video (Asad Day 2):</p>
                    <p className="text-xs text-[#F8F5EE]/80">{w.videoB}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  {w.shorts.map((s, i) => (
                    <div key={i} className="bg-white/5 rounded p-2">
                      <p className="text-xs text-purple-300">Short #{i+1}:</p>
                      <p className="text-xs text-[#F8F5EE]/70">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Content Rules */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-[#042729] mb-4">Content Rules ({contentRules.length} research-backed)</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#042729] text-[#F8F5EE]">
                  <th className="px-3 py-2 text-left font-semibold w-8">#</th>
                  <th className="px-3 py-2 text-left font-semibold w-20">Category</th>
                  <th className="px-3 py-2 text-left font-semibold">Rule</th>
                  <th className="px-3 py-2 text-left font-semibold w-40">Source</th>
                </tr>
              </thead>
              <tbody>
                {contentRules.map((r) => (
                  <tr key={r.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-3 py-2 text-xs font-bold text-gray-400">{r.id}</td>
                    <td className="px-3 py-2"><Badge className="bg-gray-100 text-gray-600">{r.category}</Badge></td>
                    <td className="px-3 py-2 text-xs text-gray-700">{r.rule}</td>
                    <td className="px-3 py-2 text-xs text-gray-400">{r.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quality Gates */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-[#042729] mb-4">Quality Gates (check BEFORE giving to team)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualityGates.map((gate) => {
              const colors: Record<string, string> = { Clarity: "border-blue-500 bg-blue-50", Specificity: "border-amber-500 bg-amber-50", Proof: "border-emerald-500 bg-emerald-50", SEO: "border-purple-500 bg-purple-50", "AI Visibility": "border-red-500 bg-red-50", Conversion: "border-[#FF4800] bg-orange-50" };
              return (
                <div key={gate.gate} className={`rounded-xl border-l-4 p-4 ${colors[gate.gate] || "border-gray-500 bg-gray-50"}`}>
                  <h3 className="font-bold text-sm text-[#042729] mb-2">{gate.gate} Gate</h3>
                  <ul className="space-y-1">
                    {gate.checks.map((check, i) => (
                      <li key={i} className="text-xs text-gray-600 flex gap-2">
                        <span className="text-gray-400 flex-shrink-0">□</span>{check}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Internal Linking Map */}
        <div className="mt-8 mb-8">
          <h2 className="text-xl font-bold text-[#042729] mb-4">Internal Linking Map (every blog links to 2-5 others + /demo)</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#042729] text-[#F8F5EE]">
                  <th className="px-3 py-2 text-left font-semibold">Blog</th>
                  <th className="px-3 py-2 text-left font-semibold">Links To</th>
                  <th className="px-3 py-2 text-left font-semibold">Demo CTA</th>
                </tr>
              </thead>
              <tbody>
                {internalLinkingMap.map((link) => (
                  <tr key={link.blog} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-3 py-2 font-medium text-xs">#{link.blog}: {link.title}</td>
                    <td className="px-3 py-2 text-xs">
                      {link.linksTo.map((l) => {
                        const target = internalLinkingMap.find(m => m.blog === l);
                        return <Badge key={l} className="bg-blue-50 text-blue-700 mr-1">#{l} {target?.title}</Badge>;
                      })}
                    </td>
                    <td className="px-3 py-2 text-xs text-[#FF4800] italic">{link.demoPath}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI | Complete 8-Week Content Calendar | 16 blogs, 16 videos, 32 Shorts, 272 pieces
      </footer>
    </main>
  );
}
