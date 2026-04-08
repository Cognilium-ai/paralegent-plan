"use client";
import { useState } from "react";
import { platformPlaybooks, repurposingWorkflow, week1Content, hookFormulas, engagementRoutine, contentBlocks, objectionContentMap } from "@/data/content-factory";
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

function HookFormulasSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-2">Hook Formulas (4 Proven Types)</h2>
      <p className="text-sm text-gray-500 mb-6">Every LinkedIn post, Twitter thread, and YouTube video starts with a hook. Use these formulas — they&apos;re backed by engagement data.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hookFormulas.map((hf) => (
          <div key={hf.type} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-sm text-[#042729]">{hf.type}</h3>
              <Badge className="bg-red-50 text-red-700">{hf.objectionMatch}</Badge>
            </div>
            <p className="text-xs text-gray-600 mb-3">{hf.formula}</p>
            <p className="text-xs font-bold text-gray-500 uppercase mb-2">Examples:</p>
            <ul className="space-y-1 mb-3">
              {hf.examples.map((ex, i) => (
                <li key={i} className="text-xs text-gray-700 italic">&ldquo;{ex}&rdquo;</li>
              ))}
            </ul>
            <p className="text-xs text-emerald-700"><span className="font-medium">Best for:</span> {hf.bestFor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EngagementSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-2">Daily Engagement Routine (30 min BEFORE posting)</h2>
      <p className="text-sm text-gray-500 mb-6">{engagementRoutine.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {[engagementRoutine.saqlainRoutine, engagementRoutine.asadRoutine].map((routine) => (
          <div key={routine.owner} className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-sm text-[#042729] mb-3">{routine.owner}</h3>
            <div className="space-y-2">
              {routine.steps.map((step, i) => (
                <div key={i} className="flex gap-3">
                  <Badge className="bg-gray-100 text-gray-600 flex-shrink-0">{step.time}</Badge>
                  <p className="text-xs text-gray-700">{step.action}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Influencers to Engage</h4>
          <ul className="space-y-1">{engagementRoutine.influencersToEngage.map((inf, i) => (
            <li key={i} className="text-xs text-gray-700"><span className="font-medium">{inf.name}</span> — {inf.role}</li>
          ))}</ul>
        </div>
        <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-5">
          <h4 className="text-xs font-bold text-emerald-800 uppercase mb-2">What to Comment (DO)</h4>
          <ul className="space-y-1">{engagementRoutine.whatToComment.map((c, i) => (
            <li key={i} className="text-xs text-gray-700">{c}</li>
          ))}</ul>
        </div>
        <div className="bg-red-50 rounded-xl border border-red-200 p-5">
          <h4 className="text-xs font-bold text-red-800 uppercase mb-2">Never Comment (DON&apos;T)</h4>
          <ul className="space-y-1">{engagementRoutine.neverComment.map((c, i) => (
            <li key={i} className="text-xs text-red-700">{c}</li>
          ))}</ul>
        </div>
      </div>
    </section>
  );
}

function ContentBlocksSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-2">Content Blocks for AI Citation (GEO/AEO)</h2>
      <p className="text-sm text-gray-500 mb-6">{contentBlocks.description}</p>
      <div className="space-y-4">
        {contentBlocks.blocks.map((block) => (
          <details key={block.type} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 font-semibold text-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                {block.type}
                <Badge className="bg-emerald-100 text-emerald-800">{block.boost}</Badge>
              </div>
              <span className="text-xs text-gray-400">Click to expand</span>
            </summary>
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="mt-4">
                <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Template</h4>
                <pre className="text-xs text-gray-700 bg-gray-50 rounded-lg p-4 whitespace-pre-wrap font-sans">{block.template}</pre>
              </div>
              <div className="mt-4">
                <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Example (Paralegent)</h4>
                <pre className="text-xs text-gray-700 bg-blue-50 rounded-lg p-4 whitespace-pre-wrap font-sans">{block.example}</pre>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function ObjectionContentSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
      <h2 className="text-xl font-bold mb-2">Objection → Content Map</h2>
      <p className="text-sm text-gray-500 mb-6">Every piece of content addresses a specific buyer objection. Use this to pick which content to create next.</p>
      <div className="space-y-4">
        {objectionContentMap.map((obj) => (
          <div key={obj.objection} className="bg-white rounded-xl border-2 border-l-4 border-l-red-500 border-gray-200 p-5">
            <h3 className="font-bold text-sm text-[#042729] mb-3">{obj.objection}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">Blog Topics</p>
                <ul className="space-y-1">{obj.blogTopics.map((t, i) => (
                  <li key={i} className="text-xs text-gray-700">• {t}</li>
                ))}</ul>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">LinkedIn Hooks</p>
                <ul className="space-y-1">{obj.linkedinHooks.map((h, i) => (
                  <li key={i} className="text-xs text-gray-700 italic">{h}</li>
                ))}</ul>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">YouTube Ideas</p>
                <ul className="space-y-1">{obj.youtubeIdeas.map((y, i) => (
                  <li key={i} className="text-xs text-gray-700">• {y}</li>
                ))}</ul>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">Quora Questions</p>
                <ul className="space-y-1">{obj.quoraQuestions.map((q, i) => (
                  <li key={i} className="text-xs text-gray-700">&ldquo;{q}&rdquo;</li>
                ))}</ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FlowSection() {
  const steps = [
    {
      step: 1,
      title: "Pick the Buyer Objection (WHY this content exists)",
      time: "2 min",
      color: "bg-red-600",
      description: "Every piece of content addresses ONE buyer objection. Don't create content without knowing which objection it solves.",
      action: "Go to Buyer Intel page → Blog Calendar. Check which blog is assigned to you this week. Note the objection it addresses.",
      example: "Week 1 Saqlain: Blog #1 'Can Your Legal Team Trust AI Contract Review?' → addresses Objection #1 (trust, 60%)",
      tools: "Buyer Intel page → Blog Calendar Ordered by Objections",
    },
    {
      step: 2,
      title: "Choose Your Hook (HOW you stop the scroll)",
      time: "5 min",
      color: "bg-amber-600",
      description: "Pick one of the 4 hook formulas. The hook is the first 2 lines — it determines if anyone reads the rest. Match the formula to the objection.",
      action: "Curiosity + Contrarian → trust/accuracy objections. Value → ROI/setup objections. Story → failed tech/costly mistakes. Check the Objection → Content Map for pre-written hooks for each objection.",
      example: "Objection #1 (trust) → Curiosity hook: '60% of legal teams don't trust AI output. They're right to be skeptical — here's why.'",
      tools: "Layers tab → Hook Formulas + Objection → Content Map (has pre-written hooks per objection)",
    },
    {
      step: 3,
      title: "Write the Blog (follow the brief + use content blocks)",
      time: "6-8 hours",
      color: "bg-blue-600",
      description: "Two things work together: (1) The BLOG BRIEF gives you the outline — title, keyword, H2/H3 structure, stats to include, FAQ questions. (2) CONTENT BLOCKS give you the format — how to structure each section so AI engines can cite it.",
      action: "Open the blog brief (Layers tab → Week 1 Blog Briefs). Follow the H2/H3 outline exactly. For EACH section, use a content block: start with Definition Block, add Statistic Blocks (cite sources!), include Comparison Table, end with FAQ Block. Every blog MUST have all 4 block types.",
      example: "Blog brief says H2: 'What Is AI Accuracy in Contract Review?' → Use Definition Block template. Next H2: 'The Real Numbers' → Use Statistic Block with cited sources (ABA, CLOC, LawNext). Then H2: 'Generic AI vs Specialized Agents' → Use Comparison Table block. End: FAQ with 3 questions.",
      tools: "Layers tab → Content Blocks for AI Citation (templates) + Week 1 Blog Briefs (outlines). NOTE: Blog briefs need updating to match new blog order from Buyer Intel page.",
    },
    {
      step: 4,
      title: "Create YouTube Video from Blog (Veo 3 + ElevenLabs)",
      time: "4-5 hours",
      color: "bg-red-500",
      description: "Turn your blog into a 5-8 min YouTube video. The script comes directly from the blog — you're NOT writing new content. Then cut 2-3 Shorts from the best moments.",
      action: "Blog-to-video process: (1) Pull 5-6 key sections from blog → these become video chapters. (2) Write voiceover script from blog text — simplify, make conversational. (3) Create visuals with Veo 3 matching each section. (4) Add ElevenLabs voiceover. (5) Add timestamps, thumbnail, tags. (6) Cut 2-3 best moments as 60-sec Shorts.",
      example: "Blog 'Can You Trust AI Contract Review?' → Video chapters: 0:00 Hook (the 60% stat) → 0:30 The hallucination problem → 2:00 Generic vs specialized AI → 3:30 How confidence scoring works → 5:00 What to look for → 6:00 CTA. Short #1: 'Why 60% don't trust AI' (0:00-1:00). Short #2: 'Confidence scoring in 45 seconds' (3:30-4:30).",
      tools: "Layers tab → Platform Playbooks → YouTube (Long-form) + YouTube (Shorts)",
    },
    {
      step: 5,
      title: "Create LinkedIn Carousel (7 slides)",
      time: "2 hours",
      color: "bg-indigo-600",
      description: "585% more engagement than text. Extract 5 key points from blog. One idea per slide. This is the HIGHEST engagement format on LinkedIn.",
      action: "Slide 1: Hook from Step 2 (bold question/stat). Slides 2-6: One key point each from blog. Slide 7: CTA to paralegent.ai/demo. Brand colors (Teal #042729, Orange #FF4800). Upload as PDF.",
      example: "Slide 1: 'Can You Trust AI to Review Your Contracts?' → Slide 2: '60% of GCs say no — here's why' → Slide 3: 'The hallucination problem (600+ documented cases)' → Slide 4: 'How confidence scoring changes everything' → Slide 5: 'Specialized vs generic: the accuracy difference' → Slide 6: '3 questions to ask any AI vendor' → Slide 7: 'See confidence scoring in action → paralegent.ai/demo'",
      tools: "Layers tab → Platform Playbooks → LinkedIn (Carousels)",
    },
    {
      step: 6,
      title: "Post LinkedIn + Twitter (use the hook)",
      time: "1 hour",
      color: "bg-indigo-600",
      description: "Post LinkedIn text post (with hook from Step 2) + Twitter thread (5-7 tweets from blog key points). Remember: link in FIRST COMMENT on LinkedIn, not in post body.",
      action: "LinkedIn: Hook (2 lines) → Body (3-5 short paragraphs from blog) → CTA question → Hashtags. Link in first comment. Post at 8-9 AM UK time (1-2 PM PKT). Twitter: Thread of 5-7 tweets, each tweet stands alone, link only in last tweet.",
      example: "LinkedIn: '60% of legal teams don't trust AI output. They're right to be skeptical...' [3 paragraphs] 'What's your team's biggest concern about AI accuracy?' First comment: link to blog. Twitter: 1/ The 60% stat 🧵 → 2/ Hallucination problem → 3/ Specialized vs generic → 4/ Confidence scoring → 5/ Link to blog.",
      tools: "Layers tab → Platform Playbooks → LinkedIn (Posts) + Twitter/X (Threads)",
    },
    {
      step: 7,
      title: "Repurpose Shorts → IG Reel + TikTok + FB Video + FB Post + IG Carousel",
      time: "2 hours",
      color: "bg-purple-600",
      description: "Take what you already made and put it everywhere. YouTube Shorts → same video on IG/TikTok/FB. LinkedIn carousel → adapted to IG. Blog → short FB text post. NOT creating new content.",
      action: "Each Short → post to IG Reel (IG caption + hashtags) + TikTok (casual caption) + FB Video (FB caption). LinkedIn carousel → adapt to 1080x1080 for IG carousel. Blog → short FB text post with direct link. Quora → find related question, answer using blog knowledge (500-800 words).",
      example: "Short 'Why 60% don't trust AI' → IG Reel + TikTok + FB Video (3 posts in 30 min). LinkedIn carousel → IG carousel (resize). Blog summary → FB text post with link. Quora: answer 'Can AI review contracts accurately?' using blog data.",
      tools: "Layers tab → Repurposing Workflow + Platform Playbooks (each platform)",
    },
    {
      step: 8,
      title: "Medium Republish (2 weeks after original blog)",
      time: "30 min",
      color: "bg-green-600",
      description: "Republish the blog on Medium. DA 96 backlink. AI engines cite Medium. MUST wait 2 weeks and MUST set canonical URL.",
      action: "Import blog to Medium. Set canonical URL to paralegent.ai original. Add 'Originally published on paralegent.ai' at top. Add 2-3 inline CTAs. Submit to 'Towards AI' or 'The Startup' publications.",
      example: "Blog published April 8 → Medium republish April 22. Canonical: paralegent.ai/resources/blog/can-you-trust-ai-contract-review",
      tools: "Layers tab → Platform Playbooks → Medium",
    },
    {
      step: 9,
      title: "Reddit + Quora (ongoing, daily/weekly)",
      time: "1 hour/week",
      color: "bg-gray-600",
      description: "Reddit: build karma (NO promotion for first 4-6 weeks). Quora: answer high-view questions (feeds AI engines directly). Both are long-term plays.",
      action: "Reddit: browse r/legaltech daily (15 min), upvote, comment helpfully. Quora: 2-3 answers/week on questions with 1,000+ views. Only mention Paralegent in 1 out of 5 answers. Cite real data.",
      example: "Quora: 'Can AI review legal contracts accurately?' → 600-word answer citing ABA (75% hallucination concern), CLOC (83% demand increase), real accuracy data. Mention 'newer solutions like Paralegent use specialized domain analysts with confidence scoring' as ONE option.",
      tools: "Layers tab → Platform Playbooks → Reddit + Quora",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">The Content Creation Flow — Step by Step</h2>
        <p className="text-sm text-gray-500">Follow this flow for every piece of content. Each step references a section in the Layers tab.</p>
      </div>

      {/* DAILY: Engagement Routine — shown FIRST as a banner */}
      <div className="bg-emerald-600 text-white rounded-xl p-5 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">!</span>
          <h3 className="font-semibold text-sm">DAILY — 30-Min Engagement Routine (8:00-8:30 AM EVERY morning)</h3>
        </div>
        <p className="text-sm text-white/80 mb-3">Do this BEFORE any other work. The algorithm rewards creators who engage first. Not optional.</p>
        <div className="grid md:grid-cols-4 gap-3">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xs font-bold">5 min</p>
            <p className="text-xs text-white/70">Respond to comments on yesterday&apos;s posts</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xs font-bold">15 min</p>
            <p className="text-xs text-white/70">Comment on 10 GC/legal ops posts (substantive, not &apos;Great post!&apos;)</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xs font-bold">5 min</p>
            <p className="text-xs text-white/70">Engage with 3-5 influencer posts (Mary O&apos;Carroll, Casey Flaherty, etc.)</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xs font-bold">5 min</p>
            <p className="text-xs text-white/70">Check + respond to DMs</p>
          </div>
        </div>
        <p className="text-xs text-white/50 mt-2">Layers tab → Daily Engagement Routine for full details + influencer list + comment examples</p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.step} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className={`${s.color} text-white px-6 py-3 flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">{s.step}</span>
                <h3 className="font-semibold text-sm">{s.title}</h3>
              </div>
              <Badge className="bg-white/20 text-white">{s.time}</Badge>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-700 mb-3">{s.description}</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-blue-800 uppercase mb-1">What to do</p>
                  <p className="text-xs text-gray-700">{s.action}</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-amber-800 uppercase mb-1">Example</p>
                  <p className="text-xs text-gray-700 italic">{s.example}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">Reference</p>
                  <p className="text-xs text-[#FF4800] font-medium">{s.tools}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Rhythm */}
      <div className="mt-8 bg-[#042729] rounded-xl p-6 text-[#F8F5EE]">
        <h3 className="font-bold text-lg mb-2">Weekly Rhythm (per person)</h3>
        <p className="text-xs text-[#FF4800] font-medium mb-4">8:00-8:30 AM — Engagement routine EVERY day (respond to comments, comment on 10 posts, engage influencers, check DMs)</p>
        <div className="grid md:grid-cols-5 gap-4 text-center">
          {[
            { day: "MON", tasks: "Pick objection + hook → Write blog (Steps 1-3)", hours: "8:30-5:30" },
            { day: "TUE", tasks: "Finish blog + publish → Create YouTube video (Steps 3-4)", hours: "8:30-5:30" },
            { day: "WED", tasks: "Cut Shorts → Create carousel → Repurpose Shorts to IG/TikTok/FB (Steps 4-5-7)", hours: "8:30-5:30" },
            { day: "THU", tasks: "Post LinkedIn + Twitter → FB post → IG carousel → Quora answer (Steps 6-7)", hours: "8:30-5:30" },
            { day: "FRI", tasks: "Medium republish (older blog) → Reddit → Research next week's blog (Steps 8-9, Step 1)", hours: "8:30-5:30" },
          ].map((d) => (
            <div key={d.day} className="bg-white/10 rounded-lg p-3">
              <p className="text-[#FF4800] font-bold text-sm mb-1">{d.day}</p>
              <p className="text-xs text-[#F8F5EE]/70 mb-1">{d.tasks}</p>
              <p className="text-xs text-[#F8F5EE]/40">{d.hours}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContentPage() {
  const [tab, setTab] = useState<"flow" | "layers">("flow");

  return (
    <main>
      <Header />
      <Nav active="content" />

      {/* Tab Switcher */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-0">
          <button
            onClick={() => setTab("flow")}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "flow" ? "border-[#FF4800] text-[#FF4800]" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            The Flow (Start Here)
          </button>
          <button
            onClick={() => setTab("layers")}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "layers" ? "border-[#FF4800] text-[#FF4800]" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Layers (Reference)
          </button>
        </div>
      </div>

      {tab === "flow" && <FlowSection />}

      {tab === "layers" && (
        <>
          <HookFormulasSection />
          <EngagementSection />
          <ContentBlocksSection />
          <ObjectionContentSection />
          <PlaybooksSection />
          <RepurposingSection />
          <Week1BlogsSection />
          <VideoBriefsSection />
        </>
      )}

      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI Content Factory | The Flow + Layers Reference
      </footer>
    </main>
  );
}
