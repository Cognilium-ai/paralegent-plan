"use client";
import Nav from "@/components/Nav";
import Image from "next/image";

function CopyButton({ text, label }: { text: string; label?: string }) {
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); const btn = document.activeElement as HTMLButtonElement; btn.textContent = "Copied!"; setTimeout(() => { btn.textContent = label || "Copy"; }, 1500); }}
      className="px-2 py-1 text-xs font-medium bg-[#FF4800] text-white rounded hover:bg-[#E64100] transition-colors flex-shrink-0 cursor-pointer"
    >
      {label || "Copy"}
    </button>
  );
}

function CopyBlock({ label, text, multiline }: { label: string; text: string; multiline?: boolean }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-gray-500 uppercase">{label}</span>
        <CopyButton text={text} />
      </div>
      {multiline ? (
        <p className="text-sm text-gray-800 whitespace-pre-line leading-relaxed">{text}</p>
      ) : (
        <p className="text-sm text-gray-800 font-medium">{text}</p>
      )}
    </div>
  );
}

function LinkBlock({ label, url }: { label: string; url: string }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 px-4 py-3 mb-2">
      <div>
        <span className="text-xs font-bold text-gray-500">{label}</span>
        <p className="text-sm text-blue-600 break-all">{url}</p>
      </div>
      <CopyButton text={url} />
    </div>
  );
}

function ColorSwatch({ name, hex, usage }: { name: string; hex: string; usage: string }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 px-4 py-3 mb-2">
      <div className="w-10 h-10 rounded-lg flex-shrink-0 border border-gray-200" style={{ backgroundColor: hex }} />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{name}</span>
          <span className="text-xs text-gray-400">{hex}</span>
        </div>
        <p className="text-xs text-gray-500">{usage}</p>
      </div>
      <CopyButton text={hex} />
    </div>
  );
}

export default function BrandPage() {
  return (
    <main>
      <header className="bg-[#042729] text-[#F8F5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-[#FF4800] text-sm font-semibold uppercase tracking-wider mb-1">Brand Kit</p>
          <h1 className="text-3xl font-bold">Paralegent AI — Everything in One Place</h1>
          <p className="text-[#F8F5EE]/70 mt-1">Taglines, descriptions, links, logos, colors. Click &quot;Copy&quot; on anything.</p>
        </div>
      </header>
      <Nav active="brand" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT COLUMN */}
          <div>
            {/* Tagline & Descriptions */}
            <h2 className="text-lg font-bold text-[#042729] mb-4">Tagline & Descriptions</h2>

            <CopyBlock
              label="Tagline (use everywhere)"
              text="AI That Reads Contracts Like Your Best Attorney. In 30 Minutes, Not 30 Hours."
            />

            <CopyBlock
              label="Short Tagline (under 80 chars)"
              text="Agentic contract due diligence — in your cloud, 30 hours to 30 minutes"
            />

            <CopyBlock
              label="Short Description (for G2, Capterra, quick intros)"
              text="Paralegent.ai is an agentic AI application that performs contract due diligence on master agreements and their resulting subcontracts. 18 specialized AI agents analyze every clause, in every section, against a deeply structured rulebook — and surface exactly which terms put your business at risk, which need executive approval, and which are ready for signature. Deployed directly in your cloud, customized to your business rules, and operated by your team. Your data never leaves your environment."
              multiline
            />

            <CopyBlock
              label="Long Description (for detailed platform profiles)"
              text={`Every enterprise processes hundreds of master agreements each year. Master Sales Agreements, Master Purchase Agreements, Master Service Agreements — each one is 40 to 100+ pages of legal language that must be reviewed clause by clause for risk exposure. A single overlooked red clause in a warranty section can cost millions. An undetected liability cap in an indemnification provision can leave your business exposed for years.

Today, your legal team spends 20 to 30 hours on a single master agreement. That's a 10-15 day SLA just to return a redlined version to the counterparty. Meanwhile, deals stall, revenue recognition delays, and your attorneys spend their highest-value hours doing repetitive clause-matching instead of strategic negotiation.

Paralegent.ai is not a chatbot that reads your contract. It's a structured, multi-agent orchestration system that applies institutional legal knowledge with surgical precision.

18 specialized AI agents each focus on one area of your contract — Warranty, Liability, Indemnity, Intellectual Property, Termination, Confidentiality, Force Majeure, and more. They analyze every clause against your company's own rulebook and classify each one:

GREEN — Favorable. Clause protects your commercial interests. Approve and proceed to signature.
ORANGE — Conditional. Carries moderate risk. Escalate for senior approval. Negotiate if possible.
RED — Unacceptable. Materially unfavorable. Reject. Negotiate out or replace with approved fallback language.

The result? 40-50 precise redlines delivered inside Microsoft Word, each tagged with its classification, the rationale explaining why it was flagged, and AI-generated replacement language in your preferred terms. Your attorneys review the findings, not 80 pages. Send a clean redlined version to the counterparty — all within our Word add-in.

We don't sell a generic SaaS subscription. We deploy a production-grade AI accelerator directly into your cloud, customized to your business rules, integrated with your CLM tools, and operated by your team. Your data stays in your infrastructure. Your contracts never touch our servers.`}
              multiline
            />

            <CopyBlock
              label="Crunchbase Description (Third Person)"
              text={`Paralegent.ai is an agentic AI application that performs contract due diligence on master agreements and their resulting subcontracts. The platform deploys 18 specialized AI agents that analyze every clause, in every section, against an organization's deeply structured rulebook — surfacing exactly which terms carry risk, which need executive approval, and which are ready for signature.

For each clause, the system applies a three-tier classification: GREEN (favorable — approve and proceed), ORANGE (conditional — escalate for senior review), or RED (unacceptable — reject and negotiate). Each finding includes the rationale, confidence score, and suggested replacement language in the organization's preferred terms — delivered directly inside Microsoft Word.

Unlike SaaS contract review tools, Paralegent deploys directly in the customer's own cloud environment. Contract data never leaves the customer's infrastructure. The system is customized to each organization's legal positions, integrated with their existing CLM tools, and operated by their team. Paralegent reduces contract review time from 20-30 hours to approximately 30 minutes per master agreement, delivering 40-50 precise redlines per contract.`}
              multiline
            />

            <CopyBlock
              label="One-Liner"
              text="Agentic AI that performs contract due diligence like your best attorney — in 30 minutes, not 30 hours, inside Word, in your cloud."
            />

            <CopyBlock
              label="Product Hunt Tagline (60 chars)"
              text="AI contract due diligence — 30 min, not 30 hours"
            />

            <CopyBlock
              label="Elevator Pitch (30 seconds)"
              text="Your legal team spends 20-30 hours reviewing a single master agreement. That's a 10-15 day SLA just to return a redlined version to the counterparty. Paralegent.ai does it in 30 minutes. 18 specialized AI agents analyze every clause against your company's rulebook and classify each one as GREEN, ORANGE, or RED — with rationale and replacement language, delivered inside Microsoft Word. We deploy directly in your cloud. Your contracts never touch our servers. Your attorneys review the findings, not 80 pages."
              multiline
            />

            <CopyBlock
              label="Problem Statement (use in content + outreach)"
              text="Every enterprise processes hundreds of master agreements each year — each one 40 to 100+ pages of legal language reviewed clause by clause for risk exposure. Your legal team spends 20-30 hours on a single master agreement. That's a 10-15 day SLA just to return a redlined version to the counterparty. A single overlooked red clause in a warranty section can cost millions. An undetected liability cap in an indemnification provision can leave your business exposed for years. Deals stall, revenue recognition delays, and your attorneys spend their highest-value hours doing repetitive clause-matching instead of strategic negotiation."
              multiline
            />

            <CopyBlock
              label="Hero Paragraph (from landing page — use as primary description)"
              text="Paralegent.ai is an agentic AI application that performs contract due diligence on master agreements and their resulting subcontracts. We analyze every clause, in every section, against a deeply structured rulebook — and surface exactly which terms put your business at risk, which need executive approval, and which are ready for signature. We don't sell a generic SaaS subscription. We deploy a production-grade AI accelerator directly into your cloud, customized to your business rules, integrated with your CLM tools, and operated by your team."
              multiline
            />

            {/* Key Stats */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Key Stats (Use in Content)</h2>

            <CopyBlock label="AI Agents" text="18 specialized domain analysts + 1 orchestrator agent (dynamic — scales with your rulebook)" />
            <CopyBlock label="Legal Categories" text="18 contract categories in standard configuration (dynamic — each category gets its own dedicated analyst)" />
            <CopyBlock label="Risk Classification" text="GREEN (favorable) / ORANGE (conditional) / RED (unacceptable)" />
            <CopyBlock label="Review Speed" text="30 minutes per 80-page master agreement (vs 20-30 hours manual)" />
            <CopyBlock label="Contract Matching" text="15-20 second contract matching against your rulebook" />
            <CopyBlock label="Redlines" text="40-50 precise redlines per contract" />
            <CopyBlock label="Rulebook Terms" text="80-150 terms per contract type" />
            <CopyBlock label="Manual Cost" text="$100K+/month for a team of 4-5 legal professionals" />
            <CopyBlock label="Implementation" text="Dedicated pod of 3-4 engineers, typically 8-10 weeks" />
            <CopyBlock label="SLA Reduction" text="15 days → 2 days" />
            <CopyBlock label="Time Savings" text="30 hours → 30 minutes per 80-page MSA" />

            {/* Categories for Registrations */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Platform Categories</h2>

            <CopyBlock label="G2 Categories" text="Contract Management, AI Legal Assistant, Contract Review, Legal Tech, Document Analysis" />
            <CopyBlock label="Capterra Categories" text="Contract Management Software, Legal AI Software" />
            <CopyBlock label="Crunchbase Categories" text="Legal Tech, Artificial Intelligence, Enterprise Software, Contract Management" />
            <CopyBlock label="Product Hunt Tags" text="Legal Tech, AI, Developer Tools, Productivity, Enterprise" />
            <CopyBlock label="AlternativeTo — Tag As Alternative To" text="LegalOn, Spellbook, Harvey AI, Luminance, Ironclad" />

            {/* Proprietary Terms */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Proprietary Terms (Use Consistently)</h2>

            <CopyBlock label="Product Category" text="Agentic Contract Due Diligence" />
            <CopyBlock label="Core Process" text="Playbook-Driven Contract Redlining" />
            <CopyBlock label="Word Integration" text="Word-Native AI Review" />
            <CopyBlock label="AI Team" text="18 AI Specialists + Orchestrator Agent" />
            <CopyBlock label="Classification System" text="THREE-TIER: GREEN (favorable) / ORANGE (conditional) / RED (unacceptable)" />
            <CopyBlock label="Matching" text="15-20 Second Contract Matching" />
            <CopyBlock label="Output" text="Compliance Explanations — rationale for every flagged clause with suggested replacement language" />

            {/* Contract Types */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Contract Types We Cover</h2>

            <CopyBlock label="Tier 1 (Master Agreements)" text="Master Sales Agreements (MSA), Master Purchase Agreements (MPA), Master Service Agreements" />
            <CopyBlock label="Tier 2 (Sub-Contracts)" text="Sales Contracts & Orders, Purchase Contracts & Orders, Statements of Work (SOWs) & Service Contracts" />
            <CopyBlock label="Full List (copy for platform profiles)" text="Master Sales Agreements (MSA), Master Purchase Agreements (MPA), Master Service Agreements, Sales Contracts & Orders, Purchase Contracts & Orders, Statements of Work (SOWs) & Service Contracts — including cross-validation of subcontracts against both the master agreement terms and the rulebook." multiline />

            {/* Industries */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Industries (from Landing Page)</h2>

            <CopyBlock label="All 8 Industries" text="Manufacturing & Industrial, Retail & Consumer Goods, Technology & Software, Energy Oil & Gas, Transportation & Logistics, Pharmaceuticals & Healthcare, Construction & Engineering, Financial Services & Insurance" multiline />
            <CopyBlock label="Short Version (for platform profiles)" text="Manufacturing, Retail, Technology, Energy, Transportation, Healthcare, Construction, Financial Services" />

            {/* 5 Differentiators */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">5 Differentiators (from Landing Page)</h2>

            <CopyBlock label="1. Deployed in Your Cloud" text="Deployed in the customer's cloud — their data never leaves their environment." />
            <CopyBlock label="2. Custom Rulebook Architecture" text="Not generic playbooks, but deeply structured rules with rationale, examples, and confidence scoring." />
            <CopyBlock label="3. Multi-Agent Orchestration" text="Specialized agents per contract section with an orchestrator agent that resolves conflicts and ranks by confidence." />
            <CopyBlock label="4. Accelerator Model" text="Not a subscription; a production-grade AI accelerator deployed, customized, and operated by your team." />
            <CopyBlock label="5. Enterprise-Grade Engineering" text="Built on open, auditable AI frameworks — not black-box proprietary models." />
            <CopyBlock label="All 5 (paragraph format)" text="Paralegent.ai takes a fundamentally different approach from SaaS contract AI tools: (1) Deployed in the customer's cloud — data never leaves their environment. (2) Custom rulebook architecture — deeply structured rules with rationale, examples, and confidence scoring. (3) Multi-agent orchestration — 18 specialized agents per contract section with an orchestrator that resolves conflicts. (4) Accelerator model — a production-grade system deployed, customized, and operated by your team. (5) Enterprise-grade engineering — built on open, auditable AI frameworks." multiline />
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Logos */}
            <h2 className="text-lg font-bold text-[#042729] mb-4">Logos (Click to Download)</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <a href="/logo.png" download className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                <Image src="/logo.png" alt="Paralegent AI Logo" width={200} height={60} className="object-contain" />
                <span className="text-xs text-gray-500">logo.png — horizontal</span>
                <span className="text-xs text-[#FF4800] font-medium">Click to Download</span>
              </a>
              <a href="/logo-white.png" download className="bg-[#042729] rounded-xl border border-gray-200 p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                <Image src="/logo-white.png" alt="Paralegent AI Logo White" width={200} height={60} className="object-contain" />
                <span className="text-xs text-gray-400">logo-white.png — horizontal (dark bg)</span>
                <span className="text-xs text-[#FF4800] font-medium">Click to Download</span>
              </a>
            </div>

            <h3 className="text-sm font-bold text-[#042729] mb-3">SVG Logos (vector — scalable, for print & design)</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <a href="/logo-black-text.svg" download className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                <Image src="/logo-black-text.svg" alt="Paralegent AI SVG Black Text" width={200} height={60} className="object-contain" />
                <span className="text-xs text-gray-500">SVG — black text (for light backgrounds)</span>
                <span className="text-xs text-[#FF4800] font-medium">Download SVG</span>
              </a>
              <a href="/logo-white-text.svg" download className="bg-[#042729] rounded-xl border border-gray-200 p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                <Image src="/logo-white-text.svg" alt="Paralegent AI SVG White Text" width={200} height={60} className="object-contain" />
                <span className="text-xs text-gray-400">SVG — white text (for dark backgrounds)</span>
                <span className="text-xs text-[#FF4800] font-medium">Download SVG</span>
              </a>
            </div>

            <h3 className="text-sm font-bold text-[#042729] mb-3">Square Logos (for platform profiles)</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <a href="/logo-icon-red.png" download className="bg-white rounded-xl border-2 border-[#FF4800] p-4 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                <Image src="/logo-icon-red.png" alt="Paralegent AI Icon — Profile Picture" width={120} height={120} className="object-contain rounded-lg" />
                <span className="text-xs text-gray-500 text-center">Profile Icon (use this for ALL social platform profile pictures)</span>
                <span className="text-xs text-[#FF4800] font-medium">Download</span>
              </a>
              <a href="/logo-square-white.jpg" download className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                <Image src="/logo-square-white.jpg" alt="Paralegent AI Square Logo White BG" width={120} height={120} className="object-contain rounded-lg" />
                <span className="text-xs text-gray-500 text-center">Square + text (white bg)</span>
                <span className="text-xs text-[#FF4800] font-medium">Download</span>
              </a>
              <a href="/logo-square-light.jpg" download className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                <Image src="/logo-square-light.jpg" alt="Paralegent AI Square Logo Light BG" width={120} height={120} className="object-contain rounded-lg" />
                <span className="text-xs text-gray-500 text-center">Square + text (light bg)</span>
                <span className="text-xs text-[#FF4800] font-medium">Download</span>
              </a>
            </div>

            <div className="bg-amber-50 rounded-lg border border-amber-200 p-3 mb-6">
              <p className="text-xs text-amber-800"><span className="font-bold">Profile Picture Guide:</span> Use the red &quot;P&quot; icon (logo-icon-red.png) as the profile picture on ALL platforms: LinkedIn, YouTube, X, Facebook, Instagram, TikTok, Pinterest, G2, Capterra, Crunchbase, Product Hunt, Medium, Reddit, Quora. Use the square logo with text for channel banners and cover images.</p>
            </div>

            {/* Brand Colors */}
            <h2 className="text-lg font-bold text-[#042729] mb-4">Brand Colors</h2>

            <ColorSwatch name="Primary Orange" hex="#FF4800" usage="CTA buttons, accents, highlights" />
            <ColorSwatch name="Primary Hover" hex="#E64100" usage="Button hover state" />
            <ColorSwatch name="Deep Teal" hex="#042729" usage="Hero sections, dark backgrounds, headers" />
            <ColorSwatch name="Cream" hex="#FCFCFA" usage="Alternate section backgrounds" />
            <ColorSwatch name="Light Peach" hex="#FCDED2" usage="Icon containers, soft accents" />
            <ColorSwatch name="Text on Dark" hex="#F8F5EE" usage="White text on teal backgrounds" />
            <ColorSwatch name="Card Borders" hex="rgba(0,0,0,0.06)" usage="Subtle card borders" />

            {/* Company Links */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Company Links</h2>

            <LinkBlock label="Website" url="https://paralegent.ai" />
            <LinkBlock label="Demo Page" url="https://paralegent.ai/demo" />
            <LinkBlock label="Blog" url="https://paralegent.ai/resources/blog" />

            {/* Company Socials */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Company Socials</h2>

            <LinkBlock label="LinkedIn (Company)" url="https://www.linkedin.com/company/paralegentai" />
            <LinkBlock label="X / Twitter" url="https://x.com/paralegentai" />
            <LinkBlock label="YouTube" url="https://www.youtube.com/@paralegentai" />
            <LinkBlock label="Facebook" url="https://www.facebook.com/paralegentai" />
            <LinkBlock label="Instagram" url="https://www.instagram.com/paralegentai/" />
            <LinkBlock label="TikTok" url="https://www.tiktok.com/@paralegentai" />
            <LinkBlock label="Pinterest" url="https://www.pinterest.com/paralegentai/" />

            {/* ══════════ FOUNDER PROFILE ══════════ */}
            <div className="mt-8 mb-4 bg-[#042729] rounded-xl p-4">
              <h2 className="text-lg font-bold text-[#F8F5EE]">Founder Profile — Mudassir Marwat</h2>
              <p className="text-xs text-[#F8F5EE]/60">Complete profile for G2, Crunchbase, LinkedIn, and all platform registrations</p>
            </div>

            <CopyBlock label="Full Name" text="Mudassir Marwat" />
            <CopyBlock label="Title (for Paralegent)" text="Founder & CEO, Paralegent AI" />
            <CopyBlock label="Title (for Cognilium)" text="Founder & CEO, Cognilium AI" />
            <CopyBlock label="Title (combined)" text="Founder & CEO — Cognilium AI | Creator of Paralegent AI" />

            <CopyBlock label="Email (Personal)" text="m.mudassir2015@gmail.com" />
            <CopyBlock label="Email (Work)" text="mudassir@cognilium.ai" />

            <CopyBlock
              label="Short Bio (for platform profiles)"
              text="Tech entrepreneur and AI consultant with nearly a decade of experience in AI product development. Founder & CEO of Cognilium AI. Built 100+ production AI systems and 50+ GenAI deployments across enterprise clients in US, UAE, and Pakistan. Creator of Paralegent AI — bringing production-grade AI to contract due diligence, helping legal teams review master agreements in 30 minutes instead of 30 hours."
              multiline
            />

            <CopyBlock
              label="Long Bio (for detailed profiles)"
              text={`Mudassir Marwat is a tech entrepreneur and AI consultant with nearly a decade of experience in AI product development, specializing in Generative AI, data engineering, cloud architectures, and AI-driven automation. As Founder & CEO of Cognilium AI (est. 2019), he combines an engineer-first approach with a builder mindset — focused on outcomes over features, reliability over theatrics, and execution over hype.

Under his leadership, Cognilium AI has delivered 100+ production AI systems and 50+ GenAI deployments across enterprise clients in US, UAE, and Pakistan, maintaining a 96% client satisfaction rate and 312% average ROI for clients.

Mudassir has built 4 flagship AI products: Paralegent AI (agentic contract due diligence), VectorHire (AI recruiting platform), VORTA (AI customer support), and ProspectVox AI (voice AI sales automation).

Paralegent AI, his latest product, deploys 18 specialized AI agents that perform contract due diligence on master agreements — analyzing every clause against a company's rulebook and classifying each one as GREEN, ORANGE, or RED. The system deploys directly in the customer's cloud, and data never leaves their environment.

His philosophy: "If it doesn't run in production, it doesn't count. We built Paralegent with the same reliability standards that power our 100+ production AI systems."`}
              multiline
            />

            <CopyBlock
              label="Crunchbase Bio (Third Person)"
              text={`Mudassir Marwat is the Founder & CEO of Cognilium AI and the creator of Paralegent AI. He is a tech entrepreneur with nearly a decade of experience in AI product development, Generative AI, and enterprise software. Under his leadership, Cognilium AI has delivered 100+ production AI systems and 50+ GenAI deployments across enterprise clients globally, with a 96% client satisfaction rate.

Marwat has built four flagship AI products: Paralegent AI (agentic contract due diligence), VectorHire (AI recruiting), VORTA (AI customer support), and ProspectVox AI (voice AI sales). Paralegent AI deploys 18 specialized domain analysts that review contracts against a company's rulebook inside Microsoft Word, with data that never leaves the customer's cloud environment.

He operates across the US, UAE, and Pakistan, serving 12+ industries including legal tech, fintech, healthcare, and manufacturing.`}
              multiline
            />

            <CopyBlock
              label="G2 / Product Profile — Founder Description"
              text="Mudassir Marwat, Founder & CEO. Nearly a decade building production AI systems. 100+ AI deployments, 50+ GenAI systems, 96% client satisfaction rate. Built Paralegent AI to solve the contract review bottleneck — 18 specialized agents that perform due diligence on master agreements in 30 minutes, deployed in the customer's cloud."
              multiline
            />

            <CopyBlock
              label="Key Quote #1"
              text="If it doesn't run in production, it doesn't count."
            />
            <CopyBlock
              label="Key Quote #2"
              text="I kept seeing the same pattern: teams wanted AI, but got slide decks and prototypes that never shipped. So I built."
            />
            <CopyBlock
              label="Key Quote #3"
              text="We bring a founder's mindset into every build. We don't just deliver features; we deliver outcomes."
            />

            <h3 className="text-sm font-bold text-[#042729] mt-6 mb-3">Founder Stats (use in content)</h3>
            <CopyBlock label="Experience" text="Nearly a decade in AI product development" />
            <CopyBlock label="Production AI Systems" text="100+ delivered" />
            <CopyBlock label="GenAI Deployments" text="50+" />
            <CopyBlock label="Client Satisfaction" text="96% CSAT" />
            <CopyBlock label="Avg Client ROI" text="312%" />
            <CopyBlock label="Flagship Products Built" text="4 (Paralegent AI, VectorHire, VORTA, ProspectVox AI)" />
            <CopyBlock label="Industries Served" text="12+ (Legal Tech, FinTech, Healthcare, E-commerce, SaaS, Real Estate, Manufacturing, Logistics, Insurance, EdTech, Energy, Government)" />
            <CopyBlock label="Regions" text="US, UAE, Pakistan" />

            <h3 className="text-sm font-bold text-[#042729] mt-6 mb-3">Products by Mudassir (for credibility)</h3>
            <CopyBlock label="Paralegent AI" text="Agentic contract due diligence — 18 specialized AI agents review master agreements inside Microsoft Word, deployed in customer's cloud" />
            <CopyBlock label="VectorHire" text="AI recruiting platform — precision matching, reduced hiring time by 60%, high-volume daily candidate screening" />
            <CopyBlock label="VORTA" text="AI customer support — LLM-powered GenAI assistant, high first-call resolution, multi-million document RAG systems" />
            <CopyBlock label="ProspectVox AI" text="Voice AI sales automation — multi-agent system for intelligent outbound calling at scale" />

            <h3 className="text-sm font-bold text-[#042729] mt-6 mb-3">Founder Social Links</h3>
            <LinkBlock label="LinkedIn (Personal)" url="https://www.linkedin.com/in/mudassir-marwat/" />
            <LinkBlock label="X / Twitter (Personal)" url="https://x.com/mudassir_cog" />
            <LinkBlock label="YouTube (Personal)" url="https://www.youtube.com/@iammudassir_cognilium_ai" />
            <LinkBlock label="Medium" url="https://medium.com/@Mudassir.Marwat" />
            <LinkBlock label="Instagram (Personal)" url="https://www.instagram.com/mudassirmarwat/" />
            <LinkBlock label="Facebook (Personal)" url="https://www.facebook.com/mudassir.marwat" />
            <LinkBlock label="Reddit" url="https://www.reddit.com/user/mudassirmarwat/" />
            <LinkBlock label="Upwork" url="https://www.upwork.com/freelancers/~01812b2392115e495e" />
            <LinkBlock label="F6S" url="https://www.f6s.com/member/mudassir-marwat" />
            <LinkBlock label="Cognilium Founder Page" url="https://cognilium.ai/founder" />
            <LinkBlock label="Booking Link (Meetings)" url="https://outlook.office.com/bookwithme/user/62978aeac3e34ac29cf4a3e35e9823ac@cognilium.ai/meetingtype/HKCHzBfhXUCW0P6D9Pmvmg2?anonymous&ep=mlink" />

            {/* ══════════ PARENT COMPANY ══════════ */}
            <div className="mt-8 mb-4 bg-[#042729] rounded-xl p-4">
              <h2 className="text-lg font-bold text-[#F8F5EE]">Parent Company — Cognilium AI</h2>
              <p className="text-xs text-[#F8F5EE]/60">Company behind Paralegent AI</p>
            </div>

            <CopyBlock label="Name" text="Cognilium AI" />
            <CopyBlock label="Founded" text="2019" />
            <CopyBlock label="Tagline" text="AI That Works, Scales & Matters" />
            <CopyBlock label="Description" text="Cognilium AI is an AI engineering company that builds production-grade AI systems for enterprises. Founded in 2019 by Mudassir Marwat, the company has delivered 100+ AI projects and 50+ GenAI deployments across US, UAE, and Pakistan, with a 96% client satisfaction rate and 312% average ROI for clients." multiline />
            <LinkBlock label="Website" url="https://cognilium.ai" />
            <LinkBlock label="LinkedIn (Company)" url="https://www.linkedin.com/company/cognilium-ai/" />
            <LinkBlock label="X / Twitter (Company)" url="https://x.com/Cognilium_ai" />
            <LinkBlock label="YouTube (Company)" url="https://www.youtube.com/@Cogniliumai" />
            <LinkBlock label="Facebook (Company)" url="https://www.facebook.com/Cognilium" />
            <LinkBlock label="Instagram (Company)" url="https://www.instagram.com/cognilium.ai/" />
            <CopyBlock label="Stats" text="100+ projects | 50+ GenAI deployments | 96% CSAT | 312% avg ROI | 99.9% uptime" />
            <CopyBlock label="Flagship Products" text="Paralegent AI, VectorHire, VORTA, ProspectVox AI" />
            <CopyBlock label="Team Size" text="10-50 AI engineering experts" />
            <CopyBlock label="Regions" text="US, UAE, Pakistan" />
            <CopyBlock label="Industries" text="12+ industries including Legal Tech, FinTech, Healthcare, E-commerce, SaaS, Real Estate, Manufacturing, Logistics" />

            {/* ══════════ PARALEGENT COMPANY DETAILS ══════════ */}
            <div className="mt-8 mb-4 bg-[#042729] rounded-xl p-4">
              <h2 className="text-lg font-bold text-[#F8F5EE]">Paralegent AI — Company Details</h2>
            </div>

            <CopyBlock label="Company Name" text="Paralegent AI" />
            <CopyBlock label="Parent Company" text="Cognilium AI" />
            <CopyBlock label="Founded" text="2026" />
            <CopyBlock label="Headquarters" text="Dubai, UAE" />
            <CopyBlock label="Website" text="https://paralegent.ai" />
            <CopyBlock label="Email (General)" text="info@paralegent.ai" />
            <CopyBlock label="Email (Sales)" text="sales@paralegent.ai" />
            <CopyBlock label="Email (Support)" text="support@paralegent.ai" />
            <CopyBlock label="Email (Hello)" text="hello@paralegent.ai" />
            <CopyBlock label="Founder Email (Personal)" text="m.mudassir2015@gmail.com" />
            <CopyBlock label="Founder Email (Work)" text="mudassir@cognilium.ai" />

            {/* Hashtags */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Hashtags</h2>

            <CopyBlock label="LinkedIn Hashtags (use 3-5 per post)" text="#LegalTech #ContractDueDiligence #AIContractReview #ContractManagement #LegalOps #DataSovereignty #GeneralCounsel #InHouseCounsel #EnterpriseAI #LegalAI" multiline />
            <CopyBlock label="Instagram / TikTok Hashtags" text="#LegalTech #ContractDueDiligence #AI #ContractReview #Enterprise #LegalAI #DataSovereignty #GeneralCounsel #LegalOps #MultiAgent" multiline />
            <CopyBlock label="YouTube Tags" text="AI contract due diligence, AI contract review, contract redlining AI, legal AI, AI for general counsel, AI for legal teams, multi-agent AI, data sovereignty legal, contract due diligence automation, Paralegent AI, legal due diligence" multiline />
          </div>
        </div>
      </div>

      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI Brand Kit | Everything you need for platform registrations and content
      </footer>
    </main>
  );
}
