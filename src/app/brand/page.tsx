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
      <Nav active="content" />

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
              text="AI contract review in your cloud — 30 hours to 30 minutes"
            />

            <CopyBlock
              label="Short Description (for G2, Capterra, quick intros)"
              text="Paralegent AI reviews your contracts against your company's rules and tells you exactly which clauses are risky, which need approval, and which are ready to sign — all inside Microsoft Word. 11 specialized AI agents work together to review an 80-page agreement in 30 minutes instead of 30 hours. Your data stays in your cloud. Not a subscription — one-time investment."
              multiline
            />

            <CopyBlock
              label="Long Description (for detailed platform profiles)"
              text={`Every enterprise processes hundreds of master agreements each year. Your legal team spends 20-30 hours on each one — clause by clause, 40-100 pages of legal language. A single overlooked red clause can cost millions.

Paralegent AI changes that. Our 11 specialized AI agents each focus on one area of your contract — warranty, liability, IP, indemnity, compliance, termination, and more. They analyze every clause against your company's own rulebook and classify each one:

GREEN — favorable, ready for signature
ORANGE — needs senior approval, negotiate if possible
RED — unacceptable, reject and replace

The result? 40-50 precise redlines delivered inside Microsoft Word, each with a clear explanation of why it was flagged and suggested replacement language in your preferred terms. Your attorneys review the findings, not 80 pages.

What makes us different: Paralegent deploys directly in your cloud (Azure, AWS, or GCP). Your contracts never touch our servers. Your data never leaves your environment. And it's a one-time investment, not another SaaS subscription.

30 hours of manual review becomes 30 minutes. Your team focuses on negotiation, not repetitive clause-matching.`}
              multiline
            />

            <CopyBlock
              label="Crunchbase Description (Third Person)"
              text={`Paralegent AI is an agentic AI solution for enterprise contract due diligence. The platform deploys 11 specialized AI agents that analyze contracts against an organization's custom rulebook, classifying every clause as favorable (GREEN), conditional (ORANGE), or unacceptable (RED). Each finding includes the rationale, confidence score, and suggested replacement language in the organization's preferred terms — delivered directly inside Microsoft Word.

Unlike SaaS contract review tools, Paralegent deploys in the customer's own cloud environment. Contract data never leaves the customer's infrastructure. The solution supports Azure, AWS, and GCP deployments and works with the customer's choice of language model.

Paralegent reduces contract review time from 20-30 hours to approximately 30 minutes per master agreement, with 40-50 precise redlines per contract. The company operates on a one-time licensing model rather than recurring SaaS subscriptions.`}
              multiline
            />

            <CopyBlock
              label="One-Liner (Mom Test — anyone can understand this)"
              text="AI that reviews your contracts and tells you what's risky — inside Word, in your cloud, in 30 minutes."
            />

            <CopyBlock
              label="Product Hunt Tagline (60 chars)"
              text="AI reviews your contracts in 30 min, not 30 hours"
            />

            <CopyBlock
              label="Elevator Pitch (30 seconds)"
              text="Your legal team spends 30 hours reviewing a single master agreement. Paralegent AI does it in 30 minutes. 11 specialized AI agents analyze every clause against your company's rules and flag what's risky, what needs approval, and what's ready to sign — all inside Microsoft Word. The difference? It runs in your cloud, not ours. Your data never leaves your environment. And it's a one-time investment, not another subscription."
              multiline
            />

            <CopyBlock
              label="Problem Statement (use in content + outreach)"
              text="Enterprise legal teams spend 20-30 hours reviewing a single 80-page master agreement. That's a 10-15 day SLA just to return a redlined version. Deals stall, revenue delays, and your highest-paid attorneys spend their time doing repetitive clause-matching instead of strategic negotiation. Meanwhile, 62% of teams won't use AI tools because of data security concerns."
              multiline
            />

            {/* Key Stats */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Key Stats (Use in Content)</h2>

            <CopyBlock label="AI Agents" text="11 specialized AI agents + 1 orchestrator agent" />
            <CopyBlock label="Legal Categories" text="12 legal categories analyzed" />
            <CopyBlock label="Risk Classification" text="GREEN (favorable) / ORANGE (conditional) / RED (unacceptable)" />
            <CopyBlock label="Review Speed" text="2-8 minutes per contract (vs 30 hours manual)" />
            <CopyBlock label="Matching Speed" text="1,536-dimensional semantic search in 15-20 seconds" />
            <CopyBlock label="Redlines" text="40-50 precise redlines per contract" />
            <CopyBlock label="Rulebook Terms" text="80-150 terms per contract type" />
            <CopyBlock label="Investment" text="$10K license + $50-70K engineering implementation (one-time)" />
            <CopyBlock label="Manual Cost" text="$100K+/month for 4-5 attorneys" />
            <CopyBlock label="Payback Period" text="Month 1" />
            <CopyBlock label="SLA Reduction" text="15 days → 2 days" />
            <CopyBlock label="Time Savings" text="30 hours → 30 minutes per 80-page MSA" />

            {/* Categories for Registrations */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Platform Categories</h2>

            <CopyBlock label="G2 Categories" text="Contract Management, AI Legal Assistant, Contract Review, Legal Tech, Document Analysis" />
            <CopyBlock label="Capterra Categories" text="Contract Management Software, Legal AI Software" />
            <CopyBlock label="Crunchbase Categories" text="Legal Tech, Artificial Intelligence, Enterprise Software, Contract Management" />
            <CopyBlock label="Product Hunt Tags" text="Legal Tech, AI, Developer Tools, Productivity, Enterprise" />
            <CopyBlock label="AlternativeTo — Tag As Alternative To" text="LegalOn, Spellbook, Harvey AI, Luminance, Ironclad" />
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Logos */}
            <h2 className="text-lg font-bold text-[#042729] mb-4">Logos (Click to Download)</h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <a href="/logo.png" download className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                <Image src="/logo.png" alt="Paralegent AI Logo" width={200} height={60} className="object-contain" />
                <span className="text-xs text-gray-500">logo.png (dark bg ready)</span>
                <span className="text-xs text-[#FF4800] font-medium">Click to Download</span>
              </a>
              <a href="/logo-white.png" download className="bg-[#042729] rounded-xl border border-gray-200 p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                <Image src="/logo-white.png" alt="Paralegent AI Logo White" width={200} height={60} className="object-contain" />
                <span className="text-xs text-gray-400">logo-white.png (light bg ready)</span>
                <span className="text-xs text-[#FF4800] font-medium">Click to Download</span>
              </a>
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

            {/* Founder Info */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Founder</h2>

            <CopyBlock label="Name" text="Mudassir Marwat" />
            <CopyBlock label="Title" text="Founder & CEO, Paralegent AI" />
            <CopyBlock label="Bio" text="Builder-first founder with 100+ production AI systems and 50+ GenAI deployments. Built Paralegent AI to bring the same production-grade reliability that powers VectorHire, VORTA, and ProProspect to contract review." multiline />

            <LinkBlock label="LinkedIn (Personal)" url="https://www.linkedin.com/in/mudassir-marwat/" />
            <LinkBlock label="X / Twitter (Personal)" url="https://x.com/mudassir_cog" />
            <LinkBlock label="YouTube (Personal)" url="https://www.youtube.com/@iammudassir_cognilium_ai" />
            <LinkBlock label="Medium" url="https://medium.com/@Mudassir.Marwat" />
            <LinkBlock label="Reddit" url="https://www.reddit.com/user/mudassirmarwat/" />

            {/* Parent Company */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Parent Company</h2>

            <CopyBlock label="Name" text="Cognilium AI" />
            <CopyBlock label="Founded" text="2019" />
            <CopyBlock label="Tagline" text="AI That Works, Scales & Matters" />
            <LinkBlock label="Website" url="https://cognilium.ai" />
            <CopyBlock label="Stats" text="100+ projects | 50+ GenAI deployments | 96% CSAT | 312% avg ROI | 99.9% uptime" />
            <CopyBlock label="Flagship Products" text="VectorHire, VORTA, ProProspect, ProspectVox, Legal Lens AI" />

            {/* Company Details */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Company Details</h2>

            <CopyBlock label="Founded" text="2024" />
            <CopyBlock label="Headquarters" text="Dubai, UAE" />
            <CopyBlock label="Email (General)" text="info@paralegent.ai" />
            <CopyBlock label="Email (Sales)" text="sales@paralegent.ai" />
            <CopyBlock label="Email (Support)" text="support@paralegent.ai" />

            {/* Hashtags */}
            <h2 className="text-lg font-bold text-[#042729] mb-4 mt-8">Hashtags</h2>

            <CopyBlock label="LinkedIn Hashtags (use 3-5 per post)" text="#LegalTech #AIContractReview #ContractManagement #LegalOps #DataSovereignty #EnterpriseAI #MultiAgentAI #ContractReview #LegalAI #InHouseCounsel" multiline />
            <CopyBlock label="Instagram / TikTok Hashtags" text="#LegalTech #AI #ContractReview #Enterprise #LegalAI #DataSovereignty #MultiAgent #LegalOps #Tech #Startup" multiline />
            <CopyBlock label="YouTube Tags" text="AI contract review, contract review automation, legal AI, AI for legal teams, contract redlining AI, multi-agent AI, Paralegent AI, data sovereignty legal" multiline />
          </div>
        </div>
      </div>

      <footer className="bg-[#042729] text-[#F8F5EE]/50 text-center py-6 text-sm">
        Paralegent AI Brand Kit | Everything you need for platform registrations and content
      </footer>
    </main>
  );
}
