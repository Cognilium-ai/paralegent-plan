import { weeklyPlans, dayLabels, hoursSummary } from "@/data/content-calendar";
import type { TaskItem } from "@/data/content-calendar";
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
              <DaySection dayNum={1} label="SURGE" saqlainTasks={week.saqlainDay1} asadTasks={week.asadDay1} saqlainHours={week.week === 1 ? hoursSummary.saqlainDay1 : "6 hrs 20 min"} asadHours={week.week === 1 ? hoursSummary.asadDay1 : "8 hrs 10 min"} />
              <DaySection dayNum={2} label="VIDEO" saqlainTasks={week.saqlainDay2} asadTasks={week.asadDay2} saqlainHours={week.week === 1 ? hoursSummary.saqlainDay2 : "6 hrs 30 min"} asadHours={week.week === 1 ? hoursSummary.asadDay2 : "6 hrs 30 min"} />
              <DaySection dayNum={3} label="SHORTS" saqlainTasks={week.saqlainDay3} asadTasks={week.asadDay3} saqlainHours={week.week === 1 ? hoursSummary.saqlainDay3 : "7 hrs"} asadHours={week.week === 1 ? hoursSummary.asadDay3 : "8 hrs 30 min"} />
              <DaySection dayNum={4} label="BUFFER" saqlainTasks={week.saqlainDay4} asadTasks={week.asadDay4} saqlainHours={week.week === 1 ? hoursSummary.saqlainDay4 : "7 hrs 45 min"} asadHours={week.week === 1 ? hoursSummary.asadDay4 : "8 hrs"} />
              <DaySection dayNum={5} label="BUFFER" saqlainTasks={week.saqlainDay5} asadTasks={week.asadDay5} saqlainHours={week.week === 1 ? hoursSummary.saqlainDay5 : "8 hrs 30 min"} asadHours={week.week === 1 ? hoursSummary.asadDay5 : "8 hrs 30 min"} />
            </div>
          </div>
        ))}

        {/* Weeks 3-8 Placeholder */}
        <div className="bg-amber-50 rounded-xl border-2 border-amber-200 p-6">
          <h3 className="font-bold text-amber-800 mb-2">Weeks 3-8: Same Structure, Different Blogs</h3>
          <p className="text-sm text-amber-700 mb-4">Same day pattern (Surge → Video → Shorts → Buffer × 2). Building after Week 1-2 approved.</p>
          <div className="grid md:grid-cols-3 gap-3 text-xs">
            {[
              { week: 3, saqlain: "#5: On-Premise BLUE OCEAN", asad: "#6: How Redlining Works" },
              { week: 4, saqlain: "#7: Complete Guide", asad: "#8: Paralegent vs Manual" },
              { week: 5, saqlain: "#9: 10 Best Tools", asad: "#10: Paralegent vs LegalOn" },
              { week: 6, saqlain: "#11: ChatGPT vs Dedicated", asad: "#12: Multi-Agent vs Single" },
              { week: 7, saqlain: "#13: vs Spellbook", asad: "#14: Is AI Safe? GDPR" },
              { week: 8, saqlain: "#15: Buyer's Guide", asad: "#16: What Is a Rulebook?" },
            ].map((w) => (
              <div key={w.week} className="bg-white rounded-lg p-3 border border-amber-200">
                <p className="font-bold text-amber-800">Week {w.week}</p>
                <p className="text-blue-700">Saqlain: {w.saqlain}</p>
                <p className="text-emerald-700">Asad: {w.asad}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI | 8-Week Content Calendar | Both blogs same day, both people handle both blogs
      </footer>
    </main>
  );
}
