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
      action: "Go to Objection → Content Map above. Pick the objection for this week's blog.",
      example: "This week: Objection #1 — 'I don't trust AI output' (60% of buyers say this)",
      tools: "Objection → Content Map section",
    },
    {
      step: 2,
      title: "Choose Your Hook (HOW you stop the scroll)",
      time: "5 min",
      color: "bg-amber-600",
      description: "Pick one of the 4 hook formulas. The hook is the first 2 lines — it determines if anyone reads the rest.",
      action: "Match the hook formula to the objection. Curiosity and Contrarian work best for trust objections. Value works for ROI. Story works for failed tech.",
      example: "Objection #1 (trust) → Curiosity hook: '60% of legal teams don't trust AI output. They're right to be skeptical — here's why.'",
      tools: "Hook Formulas section",
    },
    {
      step: 3,
      title: "Write the Blog Using Content Blocks (WHAT to write)",
      time: "6-8 hours",
      color: "bg-blue-600",
      description: "Structure the blog using content blocks that AI engines can extract and cite. Every blog MUST have: Definition Block + Statistic Block + Comparison Table + FAQ Block.",
      action: "Follow the blog brief from the Content Factory. Use the content block templates. Cite sources with every stat (+40% AI visibility). Include comparison table (33% of AI citations). End with FAQ (32% of AI citations).",
      example: "Blog: 'Can Your Legal Team Trust AI Contract Review?' → Definition block (what is AI accuracy) → Stat block (60% trust concern, 75% hallucination fear — cite ABA, LawNext) → Comparison table (generic AI vs specialized agents) → FAQ (3 questions about accuracy)",
      tools: "Content Blocks for AI Citation section",
    },
    {
      step: 4,
      title: "30-Min Engagement Routine (BEFORE you post anything)",
      time: "30 min",
      color: "bg-emerald-600",
      description: "EVERY day before posting. Comment on 10 GC/legal ops posts. The algorithm rewards creators who engage first. This is NOT optional.",
      action: "Follow the engagement routine: 5 min respond to comments → 15 min comment on 10 target posts → 5 min engage influencers → 5 min check DMs. Use substantive comments, not 'Great post!'",
      example: "Comment on a GC's post about contract backlogs: 'This aligns with CLOC's finding that 83% expect demand to increase while headcount flattens. The consistency gap across reviewers is often the hidden cost.'",
      tools: "Daily Engagement Routine section",
    },
    {
      step: 5,
      title: "Post on LinkedIn (WHERE + formatting)",
      time: "30 min",
      color: "bg-indigo-600",
      description: "Post the LinkedIn version of your blog content. Hook in first 2 lines. Link in FIRST COMMENT, not body. 8-9 AM UK time.",
      action: "Use the hook from Step 2. Write 3-5 short paragraphs. End with question or CTA. Put blog link in first comment. Add 3-5 hashtags.",
      example: "Hook: '60% of legal teams don't trust AI output. They're right to be skeptical.' → Body (3 paragraphs from blog) → CTA: 'What's your team's biggest concern about AI accuracy? Link in comments.'",
      tools: "Platform Playbooks → LinkedIn (Posts) section",
    },
    {
      step: 6,
      title: "Create LinkedIn Carousel (7 slides)",
      time: "2 hours",
      color: "bg-indigo-600",
      description: "585% more engagement than text posts. Extract 5 key points from blog. One idea per slide.",
      action: "Slide 1: Hook (bold question/stat). Slides 2-6: One key point each. Slide 7: CTA to demo page. Brand colors. Upload as PDF.",
      example: "Slide 1: 'Can You Trust AI to Review Your Contracts?' → Slide 2: '60% of GCs say no' → Slide 3: 'The hallucination problem' → Slide 4: 'How confidence scoring changes everything' → Slide 5: 'Specialized vs generic AI accuracy' → Slide 6: 'What to look for in AI contract review' → Slide 7: 'See it in action → paralegent.ai/demo'",
      tools: "Platform Playbooks → LinkedIn (Carousels) section",
    },
    {
      step: 7,
      title: "Create YouTube Video + Shorts (Veo 3 + ElevenLabs)",
      time: "4-5 hours",
      color: "bg-red-500",
      description: "1 long-form (5-8 min) from blog content + cut 2-3 Shorts (60 sec). Competitors aren't doing YouTube — first-mover advantage.",
      action: "Script from blog. Create with Veo 3 + ElevenLabs voiceover. Hook in first 5 seconds. Timestamps. Custom thumbnail. Pinned comment with demo link. Cut Shorts from best moments.",
      example: "Video: 'Can You Trust AI Contract Review? The Accuracy Question Answered' (6 min) → Short #1: 'Why 60% of lawyers don't trust AI' (60 sec) → Short #2: 'Confidence scoring explained in 45 seconds'",
      tools: "Platform Playbooks → YouTube sections",
    },
    {
      step: 8,
      title: "Repurpose to ALL Platforms (same content, different formats)",
      time: "2 hours",
      color: "bg-purple-600",
      description: "Take the blog + video and distribute everywhere. This is NOT creating new content — it's reformatting what you already made.",
      action: "YouTube Shorts → same video to IG Reel + TikTok + FB Video (15 min each). Twitter thread from blog (5-7 tweets). Facebook text post with link. Instagram carousel (adapt from LinkedIn). Quora answer using blog knowledge.",
      example: "Short → IG Reel (change caption) → TikTok (casual caption) → FB Video (same). Twitter thread: 5 tweets from blog key points. Quora: answer 'Can AI accurately review contracts?' with blog content.",
      tools: "Repurposing Workflow section + Platform Playbooks for each platform",
    },
    {
      step: 9,
      title: "Medium Republish (2 weeks later)",
      time: "30 min",
      color: "bg-green-600",
      description: "Republish blog on Medium with canonical URL. DA 96 backlink. AI engines cite Medium content.",
      action: "Wait 2 weeks after original publish. Import to Medium. Set canonical URL to paralegent.ai. Add 'Originally published on paralegent.ai' at top. Submit to 'Towards AI' publication.",
      example: "Blog published April 8 → Medium republish April 22. Canonical: paralegent.ai/resources/blog/can-you-trust-ai-contract-review",
      tools: "Platform Playbooks → Medium section",
    },
    {
      step: 10,
      title: "Reddit + Quora Engagement (ongoing, low effort)",
      time: "1 hour/week",
      color: "bg-gray-600",
      description: "Build karma on Reddit (NO promotion). Answer questions on Quora (feeds AI engines). These are long-term plays, not immediate results.",
      action: "Reddit: browse r/legaltech, upvote, comment helpfully. Quora: find high-view questions, write 500-800 word genuine answers. Mention Paralegent only in 1/5 answers.",
      example: "Quora question: 'Can AI review legal contracts accurately?' → Write 600-word answer using blog research. Cite ABA, CLOC data. Mention 'newer solutions like Paralegent use specialized agents with confidence scoring' as ONE option among several.",
      tools: "Platform Playbooks → Reddit + Quora sections",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">The Content Creation Flow — Step by Step</h2>
        <p className="text-sm text-gray-500">Follow this flow top to bottom for every piece of content. Each step references a section in the Layers tab.</p>
      </div>

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

      {/* Weekly Summary */}
      <div className="mt-8 bg-[#042729] rounded-xl p-6 text-[#F8F5EE]">
        <h3 className="font-bold text-lg mb-4">Weekly Rhythm (per person)</h3>
        <div className="grid md:grid-cols-5 gap-4 text-center">
          {[
            { day: "MON", tasks: "Write blog (Steps 1-3)", hours: "9h" },
            { day: "TUE", tasks: "Finish blog + YouTube video (Steps 3, 7)", hours: "9h" },
            { day: "WED", tasks: "Shorts + carousel + repurpose (Steps 6-8)", hours: "9h" },
            { day: "THU", tasks: "LinkedIn + Twitter + Quora + IG + FB (Steps 4-5, 8)", hours: "9h" },
            { day: "FRI", tasks: "Medium + Reddit + prep next blog (Steps 9-10, 1)", hours: "9h" },
          ].map((d) => (
            <div key={d.day} className="bg-white/10 rounded-lg p-3">
              <p className="text-[#FF4800] font-bold text-sm mb-1">{d.day}</p>
              <p className="text-xs text-[#F8F5EE]/70 mb-1">{d.tasks}</p>
              <p className="text-xs text-[#F8F5EE]/50">{d.hours}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#F8F5EE]/50 mt-4 text-center">+ 30 min engagement routine EVERY day before posting (Step 4)</p>
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
