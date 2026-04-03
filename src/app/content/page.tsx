import { platformPlaybooks, repurposingWorkflow, week1Content } from "@/data/content-factory";
import Nav from "@/components/Nav";

function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>{children}</span>;
}

function Header() {
  return (
    <header className="bg-[#042729] text-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <p className="text-[#FF4800] text-sm font-semibold uppercase tracking-wider mb-1">Content Factory</p>
        <h1 className="text-3xl font-bold">Ready-to-Execute Content Briefs</h1>
        <p className="text-[#F8F5EE]/70 mt-1">Everything Saqlain + Asad need to execute Monday. Open this, follow the briefs, go.</p>
      </div>
    </header>
  );
}

function PlaybooksSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h2 className="text-xl font-bold mb-2">Platform Playbooks</h2>
      <p className="text-sm text-gray-500 mb-6">One-time reference. HOW to post on each platform — rules, templates, best practices.</p>
      <div className="space-y-4">
        {platformPlaybooks.map((pb) => (
          <details key={pb.platform} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 font-semibold text-sm flex items-center justify-between">
              {pb.platform}
              <span className="text-xs text-gray-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="mt-4">
                <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Rules</h4>
                <ul className="space-y-1">
                  {pb.rules.map((rule, i) => (
                    <li key={i} className="text-xs text-gray-600 flex gap-2">
                      <span className="text-[#FF4800] flex-shrink-0">•</span>{rule}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Template</h4>
                <pre className="text-xs text-gray-700 bg-gray-50 rounded-lg p-4 whitespace-pre-wrap font-sans">{pb.template}</pre>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function RepurposingSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-2">{repurposingWorkflow.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{repurposingWorkflow.description}</p>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="space-y-4">
          {repurposingWorkflow.steps.map((step) => (
            <div key={step.step} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF4800] text-white flex items-center justify-center text-sm font-bold">{step.step}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm">{step.action}</h3>
                  <Badge className="bg-gray-100 text-gray-600">{step.time}</Badge>
                </div>
                <p className="text-xs text-gray-600 mt-1">{step.instructions}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm font-semibold text-[#042729]">Total: {repurposingWorkflow.totalTime}</p>
        </div>
      </div>
    </section>
  );
}

function BlogBriefCard({ blog }: { blog: typeof week1Content.blogs[0] }) {
  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
      <div className="bg-[#042729] text-[#F8F5EE] px-6 py-4">
        <div className="flex items-center gap-2 mb-1">
          <Badge className="bg-[#FF4800] text-white">{blog.assignee}</Badge>
          <Badge className="bg-white/20 text-white">{blog.wordCount} words</Badge>
        </div>
        <h3 className="text-lg font-bold">{blog.title}</h3>
        <p className="text-sm text-[#F8F5EE]/70 mt-1">Primary KW: {blog.keyword}</p>
        <p className="text-xs text-[#F8F5EE]/50">Secondary: {blog.secondaryKeywords.join(", ")}</p>
      </div>

      {/* Blog Outline */}
      <div className="p-6">
        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Blog Outline (follow this structure exactly)</h4>
        <div className="space-y-3">
          {blog.outline.map((section, i) => (
            <div key={i} className="border-l-2 border-[#FF4800] pl-3">
              <p className="text-sm font-semibold text-[#042729]">{section.heading}</p>
              <p className="text-xs text-gray-600 whitespace-pre-line mt-1">{section.notes}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LinkedIn Post — Mudassir */}
      <div className="border-t border-gray-200 p-6">
        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">LinkedIn Post — Mudassir&apos;s Account</h4>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm font-semibold text-gray-900 whitespace-pre-line">{blog.linkedinMudassir.hook}</p>
          <p className="text-xs text-gray-700 whitespace-pre-line mt-2">{blog.linkedinMudassir.body}</p>
          <p className="text-xs text-blue-600 mt-2">{blog.linkedinMudassir.hashtags}</p>
          <p className="text-xs text-gray-500 mt-1 italic">First comment: {blog.linkedinMudassir.linkInComment}</p>
        </div>
      </div>

      {/* LinkedIn Post — Ali */}
      <div className="border-t border-gray-200 p-6">
        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">LinkedIn Post — Ali&apos;s Account</h4>
        <div className="bg-orange-50 rounded-lg p-4">
          <p className="text-sm font-semibold text-gray-900 whitespace-pre-line">{blog.linkedinAli.hook}</p>
          <p className="text-xs text-gray-700 whitespace-pre-line mt-2">{blog.linkedinAli.body}</p>
          <p className="text-xs text-blue-600 mt-2">{blog.linkedinAli.hashtags}</p>
          <p className="text-xs text-gray-500 mt-1 italic">First comment: {blog.linkedinAli.linkInComment}</p>
        </div>
      </div>

      {/* Twitter Thread */}
      <div className="border-t border-gray-200 p-6">
        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Twitter/X Thread (copy-paste ready)</h4>
        <div className="space-y-2">
          {blog.twitterThread.map((tweet, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-700 whitespace-pre-line">{tweet}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LinkedIn Carousel */}
      <div className="border-t border-gray-200 p-6">
        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">LinkedIn Carousel (7 slides)</h4>
        <div className="space-y-2">
          {blog.carouselSlides.map((slide, i) => (
            <div key={i} className="bg-[#FCDED2] rounded-lg p-3">
              <p className="text-xs text-[#042729]">{slide}</p>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Short */}
      <div className="border-t border-gray-200 p-6">
        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">YouTube Short (Veo 3)</h4>
        <div className="bg-red-50 rounded-lg p-4">
          <p className="text-sm font-semibold text-gray-900">{blog.youtubeShort.title}</p>
          <p className="text-xs text-gray-700 whitespace-pre-line mt-2">{blog.youtubeShort.script}</p>
        </div>
      </div>

      {/* Facebook + Instagram + TikTok */}
      <div className="border-t border-gray-200 p-6">
        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Facebook / Instagram / TikTok (copy-paste)</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-xs font-bold text-blue-800 mb-1">Facebook</p>
            <p className="text-xs text-gray-700">{blog.facebookPost}</p>
          </div>
          <div className="bg-pink-50 rounded-lg p-3">
            <p className="text-xs font-bold text-pink-800 mb-1">Instagram</p>
            <p className="text-xs text-gray-700">{blog.instagramCaption}</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-3">
            <p className="text-xs font-bold text-white mb-1">TikTok</p>
            <p className="text-xs text-gray-300">{blog.tiktokCaption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoBriefsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-4">Week 1 Video Briefs</h2>
      <div className="space-y-4">
        {week1Content.videoBriefs.map((video) => (
          <div key={video.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-red-600 text-white px-6 py-4">
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-white/20 text-white">{video.type}</Badge>
                <Badge className="bg-white/20 text-white">{video.length}</Badge>
                <Badge className="bg-white/20 text-white">{video.platform}</Badge>
              </div>
              <h3 className="text-lg font-bold">{video.title}</h3>
              <p className="text-sm text-white/70 mt-1">Assignee: {video.assignee}</p>
            </div>
            <div className="p-6">
              <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Script / Shot List</h4>
              <div className="space-y-2">
                {video.script.map((line, i) => (
                  <div key={i} className="border-l-2 border-red-400 pl-3">
                    <p className="text-xs text-gray-700">{line}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase mb-1">Thumbnail</h4>
                  <p className="text-xs text-gray-600">{video.thumbnail}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase mb-1">Tags</h4>
                  <p className="text-xs text-gray-600">{video.tags}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Week1BlogsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-2">Week 1 Blog Briefs + All Repurposed Content</h2>
      <p className="text-sm text-gray-500 mb-6">Complete briefs for both blogs. Each includes: full outline + LinkedIn posts (Mudassir + Ali) + Twitter thread + carousel outline + YouTube Short + Facebook + Instagram + TikTok. Copy-paste ready.</p>
      <div className="space-y-8">
        {week1Content.blogs.map((blog) => (
          <BlogBriefCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default function ContentPage() {
  return (
    <main>
      <Header />
      <Nav active="content" />
      <PlaybooksSection />
      <RepurposingSection />
      <Week1BlogsSection />
      <VideoBriefsSection />
      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI Content Factory | Week 1 Ready for Monday April 7
      </footer>
    </main>
  );
}
