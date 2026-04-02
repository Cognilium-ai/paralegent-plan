import {
  planMeta,
  weeklyPlan,
  milestones,
  outreachMetrics,
  salesAssets,
  blogPlan,
  cutItems,
} from "@/data/plan";
import { channelMix } from "@/data/research";
import type { Task, TeamMember, Phase } from "@/data/types";
import Nav from "@/components/Nav";

// ── Helpers ──

const phaseColors: Record<Phase, string> = {
  0: "bg-gray-700",
  1: "bg-blue-600",
  2: "bg-amber-600",
  3: "bg-emerald-600",
  4: "bg-purple-600",
};

const phaseBgLight: Record<Phase, string> = {
  0: "bg-gray-50 border-gray-300",
  1: "bg-blue-50 border-blue-200",
  2: "bg-amber-50 border-amber-200",
  3: "bg-emerald-50 border-emerald-200",
  4: "bg-purple-50 border-purple-200",
};

const priorityColors: Record<string, string> = {
  P0: "bg-red-100 text-red-800",
  P1: "bg-yellow-100 text-yellow-800",
  P2: "bg-gray-100 text-gray-600",
};

const memberColors: Record<TeamMember, string> = {
  Mudassir: "bg-[#042729] text-white",
  Ali: "bg-[#FF4800] text-white",
  Saqlain: "bg-blue-600 text-white",
  Asad: "bg-emerald-600 text-white",
};

const funnelStageLabels: Record<string, string> = {
  awareness: "Awareness",
  outreach: "Outreach",
  demo: "Demo",
  pilot: "Pilot",
  close: "Close",
};

const funnelStageColors: Record<string, string> = {
  awareness: "bg-sky-100 text-sky-800",
  outreach: "bg-orange-100 text-orange-800",
  demo: "bg-violet-100 text-violet-800",
  pilot: "bg-emerald-100 text-emerald-800",
  close: "bg-green-100 text-green-800",
};

function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}

// ── Components ──

function Header() {
  return (
    <header className="bg-[#042729] text-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#FF4800] text-sm font-semibold uppercase tracking-wider mb-1">
              Paralegent AI
            </p>
            <h1 className="text-3xl font-bold">{planMeta.name}</h1>
            <p className="text-[#F8F5EE]/70 mt-1 max-w-2xl">{planMeta.thesis}</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-sm text-[#F8F5EE]/50">Version {planMeta.version}</p>
            <p className="text-sm text-[#F8F5EE]/50">Updated {planMeta.updated}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function RevenueModel() {
  const { revenueModel } = planMeta;
  const steps = [
    { label: "Outreach", value: revenueModel.outreachVolume, sub: `${revenueModel.replyRate} reply rate` },
    { label: "Conversations", value: revenueModel.conversations, sub: `${revenueModel.demoRate} demo rate` },
    { label: "Demos", value: revenueModel.demos, sub: `${revenueModel.pilotRate} pilot rate` },
    { label: "Paid Pilots", value: revenueModel.pilots, sub: `${revenueModel.closeRate} close rate` },
    { label: "Closed Deals", value: revenueModel.deals, sub: revenueModel.expectedRevenue },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Revenue Funnel Math</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3 md:gap-0 flex-1">
              <div className="text-center flex-1">
                <p className="text-2xl font-bold text-[#042729]">{step.value}</p>
                <p className="text-sm font-semibold text-gray-700">{step.label}</p>
                <p className="text-xs text-gray-500">{step.sub}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block text-gray-300 text-2xl px-2">&rarr;</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-6">
          <div>
            <span className="text-sm text-gray-500">Pipeline Value</span>
            <p className="text-lg font-bold text-[#042729]">{revenueModel.pipelineValue}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Expected Revenue</span>
            <p className="text-lg font-bold text-[#FF4800]">{revenueModel.expectedRevenue}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GeoPriority() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Geographic Priority</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {planMeta.geoPriority.map((geo) => (
          <div key={geo.region} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-bold text-[#042729]">#{geo.order}</span>
              <span className="text-lg font-semibold">{geo.region}</span>
            </div>
            <p className="text-sm text-gray-600">{geo.why}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeamOverview() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {planMeta.team.map((member) => (
          <div key={member.name} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-3 mb-2">
              <Badge className={memberColors[member.name as TeamMember]}>{member.name}</Badge>
              <span className="text-sm font-medium text-gray-700">{member.role}</span>
            </div>
            <p className="text-sm text-gray-600">{member.focus}</p>
            <p className="text-xs text-gray-400 mt-2">{member.hoursPerDay}h/day</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChannelMixSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Channel Mix — What Drives First 10 Customers</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="space-y-4">
          {channelMix.map((ch) => (
            <div key={ch.channel} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 text-right">
                <span className="text-2xl font-bold text-[#042729]">{ch.percentage}%</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-sm">{ch.channel}</h3>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FF4800] rounded-full"
                      style={{ width: `${ch.percentage * 2.5}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-600">{ch.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhaseOverview() {
  const phases = [
    { phase: 1 as Phase, weeks: "1-2", title: "Build the Arsenal", desc: "Create every sales asset before a single outreach message. Demo video, one-pagers, prospect list, outreach infra." },
    { phase: 2 as Phase, weeks: "3-4", title: "Launch Outbound Engine", desc: "Full-speed outreach: 50 touches/week. First demos. G2 + Capterra. Comparison + data sovereignty content." },
    { phase: 3 as Phase, weeks: "5-6", title: "Convert Pipeline", desc: "Push for paid pilots ($5-10K). Content from real demo feedback. Re-engage cold leads. Comparison pages." },
    { phase: 4 as Phase, weeks: "7-8", title: "Close Deals + Systematize", desc: "Convert pilots to $60-80K deals. Capture testimonials. Document playbooks for scale." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">4 Phases</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {phases.map((p) => (
          <div key={p.phase} className={`rounded-xl border p-5 ${phaseBgLight[p.phase]}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-8 h-8 rounded-lg ${phaseColors[p.phase]} text-white flex items-center justify-center text-sm font-bold`}>
                {p.phase}
              </span>
              <div>
                <p className="text-xs text-gray-500">Weeks {p.weeks}</p>
                <p className="font-semibold text-sm">{p.title}</p>
              </div>
            </div>
            <p className="text-xs text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OutreachPipeline() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Pipeline Projections</h2>
      <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#042729] text-[#F8F5EE]">
              <th className="px-4 py-3 text-left font-semibold">Week</th>
              <th className="px-4 py-3 text-right font-semibold">Sent</th>
              <th className="px-4 py-3 text-right font-semibold">Conversations</th>
              <th className="px-4 py-3 text-right font-semibold">Demos</th>
              <th className="px-4 py-3 text-right font-semibold">Pilots</th>
              <th className="px-4 py-3 text-right font-semibold">Deals</th>
              <th className="px-4 py-3 text-right font-semibold">Pipeline</th>
            </tr>
          </thead>
          <tbody>
            {outreachMetrics.map((m) => (
              <tr key={m.week} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">Week {m.week}</td>
                <td className="px-4 py-3 text-right">{m.sent}</td>
                <td className="px-4 py-3 text-right">{m.conversations}</td>
                <td className="px-4 py-3 text-right">{m.demos}</td>
                <td className="px-4 py-3 text-right">{m.pilots > 0 ? m.pilots : "-"}</td>
                <td className="px-4 py-3 text-right font-semibold text-[#FF4800]">
                  {m.deals > 0 ? m.deals : "-"}
                </td>
                <td className="px-4 py-3 text-right font-medium">{m.pipelineValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function SalesAssetsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Sales Assets ({salesAssets.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {salesAssets.map((asset) => (
          <div key={asset.id} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-2">
              <Badge className={memberColors[asset.assignee]}>{asset.assignee}</Badge>
              <span className="text-xs text-gray-400">Week {asset.week}</span>
            </div>
            <h3 className="font-semibold text-sm mb-1">{asset.name}</h3>
            <Badge className="bg-gray-100 text-gray-600">{asset.type}</Badge>
            <p className="text-xs text-gray-600 mt-2">{asset.purpose}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlogPlanSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Content Map — 7 Blogs, All Sales-Connected</h2>
      <div className="space-y-4">
        {blogPlan.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-lg font-bold text-[#042729]">#{blog.id.split("-")[1]}</span>
              <Badge className={funnelStageColors[blog.funnelStage]}>
                {funnelStageLabels[blog.funnelStage]}
              </Badge>
              <span className="text-xs text-gray-400">Week {blog.week} | {blog.words} words</span>
            </div>
            <h3 className="font-semibold mb-1">{blog.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium text-gray-700">Sales function:</span> {blog.salesFunction}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gray-100 text-gray-600">KW: {blog.keyword}</Badge>
              {blog.repurposeTo.map((r) => (
                <Badge key={r} className="bg-[#FCDED2] text-[#042729]">{r}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Badge className={memberColors[task.assignee]}>{task.assignee}</Badge>
          <Badge className={priorityColors[task.priority]}>{task.priority}</Badge>
          {task.funnelStage && (
            <Badge className={funnelStageColors[task.funnelStage]}>
              {funnelStageLabels[task.funnelStage]}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          {task.day && <span>{task.day}</span>}
          <span>{task.hours}h</span>
        </div>
      </div>
      <h4 className="font-semibold text-sm mb-1">{task.title}</h4>
      <p className="text-xs text-gray-600 mb-2 whitespace-pre-line leading-relaxed">
        {task.description}
      </p>
      <div className="border-t border-gray-100 pt-2 mt-2">
        <p className="text-xs">
          <span className="font-medium text-[#FF4800]">Sales connection:</span>{" "}
          <span className="text-gray-600">{task.salesConnection}</span>
        </p>
        <p className="text-xs mt-1">
          <span className="font-medium text-[#042729]">Deliverable:</span>{" "}
          <span className="text-gray-600">{task.deliverable}</span>
        </p>
        {task.dependsOn && task.dependsOn.length > 0 && (
          <p className="text-xs mt-1">
            <span className="font-medium text-gray-500">Depends on:</span>{" "}
            <span className="text-gray-400">{task.dependsOn.join(", ")}</span>
          </p>
        )}
      </div>
    </div>
  );
}

function WeeklyBreakdown() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-6">Weekly Breakdown</h2>
      <div className="space-y-8">
        {weeklyPlan.map((week) => {
          const tasksByMember: Record<string, Task[]> = {};
          week.tasks.forEach((t) => {
            if (!tasksByMember[t.assignee]) tasksByMember[t.assignee] = [];
            tasksByMember[t.assignee].push(t);
          });

          return (
            <div key={week.week} className={`rounded-xl border-2 overflow-hidden ${phaseBgLight[week.phase]}`}>
              <div className={`${phaseColors[week.phase]} text-white px-6 py-4`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-75">Phase {week.phase}: {week.phaseTitle}</p>
                    <h3 className="text-xl font-bold">Week {week.week}</h3>
                  </div>
                  <p className="text-sm opacity-75 max-w-md text-right">{week.goal}</p>
                </div>
              </div>
              <div className="p-6">
                {(["Mudassir", "Ali", "Saqlain", "Asad"] as TeamMember[]).map((member) => {
                  const tasks = tasksByMember[member];
                  if (!tasks || tasks.length === 0) return null;
                  const totalHours = tasks.reduce((sum, t) => sum + t.hours, 0);
                  return (
                    <div key={member} className="mb-6 last:mb-0">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={memberColors[member]}>{member}</Badge>
                        <span className="text-xs text-gray-500">{totalHours}h total this week</span>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ml-2">
                        {tasks.map((task) => (
                          <TaskCard key={task.id} task={task} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CutItemsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
      <h2 className="text-xl font-bold mb-4">What We Cut (And Why)</h2>
      <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-red-50">
              <th className="px-4 py-3 text-left font-semibold text-red-800">Cut</th>
              <th className="px-4 py-3 text-left font-semibold text-emerald-800">Replaced With</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Reason</th>
            </tr>
          </thead>
          <tbody>
            {cutItems.map((item) => (
              <tr key={item.item} className="border-t border-gray-100">
                <td className="px-4 py-3 text-red-700 line-through">{item.item}</td>
                <td className="px-4 py-3 text-emerald-700 font-medium">{item.replacement}</td>
                <td className="px-4 py-3 text-gray-600">{item.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function MilestonesSection() {
  const weekGroups = [2, 4, 6, 8];
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Milestones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {weekGroups.map((w) => {
          const weekMilestones = milestones.filter((m) => m.week === w);
          return (
            <div key={w} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-[#042729] mb-3">Week {w}</h3>
              <div className="space-y-2">
                {weekMilestones.map((m, i) => (
                  <div key={i} className="flex justify-between items-baseline">
                    <span className="text-xs text-gray-600">{m.metric}</span>
                    <span className="text-sm font-semibold text-[#042729]">{m.target}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── Main Page ──

export default function Home() {
  const totalTasks = weeklyPlan.reduce((sum, w) => sum + w.tasks.length, 0);

  return (
    <main>
      <Header />
      <Nav active="plan" />

      {/* Quick Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-6">
          <div>
            <p className="text-xs text-gray-500">Duration</p>
            <p className="font-bold text-[#042729]">8 Weeks</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Total Tasks</p>
            <p className="font-bold text-[#042729]">{totalTasks}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Team Size</p>
            <p className="font-bold text-[#042729]">4 people</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Revenue Target</p>
            <p className="font-bold text-[#FF4800]">$75-250K</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Pipeline Target</p>
            <p className="font-bold text-[#042729]">$240-480K</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Blogs</p>
            <p className="font-bold text-[#042729]">7 (targeted)</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Sales Assets</p>
            <p className="font-bold text-[#042729]">{salesAssets.length}</p>
          </div>
        </div>
      </div>

      <RevenueModel />
      <ChannelMixSection />
      <GeoPriority />
      <TeamOverview />
      <PhaseOverview />
      <OutreachPipeline />
      <MilestonesSection />
      <SalesAssetsSection />
      <BlogPlanSection />
      <WeeklyBreakdown />
      <CutItemsSection />

      {/* Footer */}
      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI Growth Dashboard | Built for internal team review
      </footer>
    </main>
  );
}
