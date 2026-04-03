import { dailyPlan } from "@/data/daily-plan";
import type { DayTask } from "@/data/daily-plan";
import Nav from "@/components/Nav";

function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>{children}</span>;
}

const categoryColors: Record<string, string> = {
  "Blog": "bg-blue-100 text-blue-800",
  "Sales Asset": "bg-red-100 text-red-800",
  "Repurposing": "bg-purple-100 text-purple-800",
  "LinkedIn Carousel": "bg-indigo-100 text-indigo-800",
  "LinkedIn Article": "bg-indigo-100 text-indigo-800",
  "LinkedIn Newsletter": "bg-indigo-100 text-indigo-800",
  "LinkedIn": "bg-indigo-100 text-indigo-800",
  "YouTube (Veo 3)": "bg-red-100 text-red-800",
  "YouTube Short (Veo 3)": "bg-red-100 text-red-800",
  "YouTube": "bg-red-100 text-red-800",
  "Video (Veo 3)": "bg-red-100 text-red-800",
  "Instagram": "bg-pink-100 text-pink-800",
  "Quora": "bg-orange-100 text-orange-800",
  "Medium": "bg-green-100 text-green-800",
  "Medium + Reddit": "bg-green-100 text-green-800",
  "Design": "bg-emerald-100 text-emerald-800",
  "Outreach Copy": "bg-amber-100 text-amber-800",
};

function TaskCard({ task, color }: { task: DayTask; color: string }) {
  return (
    <div className={`rounded-lg border-l-4 ${color} bg-white p-4 shadow-sm`}>
      <div className="flex items-center justify-between mb-2">
        <Badge className={categoryColors[task.category] || "bg-gray-100 text-gray-600"}>{task.category}</Badge>
        <span className="text-xs font-bold text-gray-500">{task.hours}h</span>
      </div>
      <h4 className="font-semibold text-sm text-gray-900 mb-2">{task.title}</h4>
      <details>
        <summary className="text-xs text-[#FF4800] cursor-pointer font-medium">View full brief</summary>
        <div className="mt-2 space-y-2">
          <p className="text-xs text-gray-600 whitespace-pre-line leading-relaxed">{task.description}</p>
          <div className="border-t border-gray-100 pt-2">
            <p className="text-xs"><span className="font-medium text-[#042729]">Deliverable:</span> <span className="text-gray-600">{task.deliverable}</span></p>
            {task.dependsOn && <p className="text-xs mt-1"><span className="font-medium text-gray-500">Depends on:</span> <span className="text-gray-400">{task.dependsOn}</span></p>}
          </div>
        </div>
      </details>
    </div>
  );
}

function DayView({ day }: { day: typeof dailyPlan[0] }) {
  const saqlainHours = day.saqlain.reduce((sum, t) => sum + t.hours, 0);
  const asadHours = day.asad.reduce((sum, t) => sum + t.hours, 0);

  const weekColors: Record<number, string> = {
    1: "bg-blue-600",
    2: "bg-amber-600",
    3: "bg-emerald-600",
    4: "bg-purple-600",
    5: "bg-pink-600",
    6: "bg-cyan-600",
    7: "bg-orange-600",
    8: "bg-violet-600",
  };

  return (
    <div className="mb-8">
      {/* Day Header */}
      <div className={`${weekColors[day.week] || "bg-gray-600"} text-white rounded-t-xl px-6 py-3 flex items-center justify-between`}>
        <div>
          <h3 className="text-lg font-bold">{day.dayLabel}</h3>
          <p className="text-xs text-white/70">Week {day.week}</p>
        </div>
        <div className="text-right text-xs text-white/70">
          Saqlain: {saqlainHours}h | Asad: {asadHours}h | Total: {saqlainHours + asadHours}h
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-t-0 rounded-b-xl overflow-hidden" style={{ borderColor: "rgb(229 231 235)" }}>
        {/* Saqlain Column */}
        <div className="border-r border-gray-200 p-4 bg-blue-50/30">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-blue-600" />
            <span className="font-bold text-sm text-blue-900">Saqlain</span>
            <span className="text-xs text-gray-500">{saqlainHours}h</span>
          </div>
          <div className="space-y-3">
            {day.saqlain.map((task) => (
              <TaskCard key={task.id} task={task} color="border-blue-500" />
            ))}
          </div>
        </div>

        {/* Asad Column */}
        <div className="p-4 bg-emerald-50/30">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-emerald-600" />
            <span className="font-bold text-sm text-emerald-900">Asad</span>
            <span className="text-xs text-gray-500">{asadHours}h</span>
          </div>
          <div className="space-y-3">
            {day.asad.map((task) => (
              <TaskCard key={task.id} task={task} color="border-emerald-500" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WeekSummary({ week }: { week: number }) {
  const weekDays = dailyPlan.filter((d) => d.week === week);
  const totalSaqlain = weekDays.reduce((sum, d) => sum + d.saqlain.reduce((s, t) => s + t.hours, 0), 0);
  const totalAsad = weekDays.reduce((sum, d) => sum + d.asad.reduce((s, t) => s + t.hours, 0), 0);
  const totalTasks = weekDays.reduce((sum, d) => sum + d.saqlain.length + d.asad.length, 0);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6 flex flex-wrap items-center gap-6">
      <h2 className="text-lg font-bold text-[#042729]">Week {week}</h2>
      <div className="flex gap-4 text-sm">
        <span><span className="font-semibold text-blue-700">Saqlain:</span> {totalSaqlain}h</span>
        <span><span className="font-semibold text-emerald-700">Asad:</span> {totalAsad}h</span>
        <span><span className="font-semibold text-gray-700">Tasks:</span> {totalTasks}</span>
        <span><span className="font-semibold text-[#FF4800]">Total:</span> {totalSaqlain + totalAsad}h</span>
      </div>
    </div>
  );
}

export default function DailyPage() {
  const weeks = [...new Set(dailyPlan.map((d) => d.week))];

  return (
    <main>
      <header className="bg-[#042729] text-[#F8F5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-[#FF4800] text-sm font-semibold uppercase tracking-wider mb-1">Saqlain + Asad</p>
          <h1 className="text-3xl font-bold">Daily Task View</h1>
          <p className="text-[#F8F5EE]/70 mt-1">Day-by-day breakdown. Open your day, follow the tasks, deliver by end of day.</p>
        </div>
      </header>
      <Nav active="daily" />

      {/* Quick Stats */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-6">
          <div>
            <p className="text-xs text-gray-500">Total Days Planned</p>
            <p className="font-bold text-[#042729]">{dailyPlan.length}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Total Tasks</p>
            <p className="font-bold text-[#042729]">{dailyPlan.reduce((sum, d) => sum + d.saqlain.length + d.asad.length, 0)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Start Date</p>
            <p className="font-bold text-[#042729]">Monday April 6</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Saqlain + Asad</p>
            <p className="font-bold text-[#042729]">9h/day each</p>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {weeks.map((week) => (
          <div key={week}>
            <WeekSummary week={week} />
            {dailyPlan.filter((d) => d.week === week).map((day) => (
              <DayView key={day.date} day={day} />
            ))}
          </div>
        ))}
      </section>

      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI | Daily Task View for Saqlain + Asad | Starting Monday April 6, 2026
      </footer>
    </main>
  );
}
