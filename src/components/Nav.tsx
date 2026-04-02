import Link from "next/link";

export default function Nav({ active }: { active: "plan" | "research" }) {
  return (
    <nav className="bg-[#042729] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1">
        <Link
          href="/"
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            active === "plan"
              ? "text-[#FF4800] border-b-2 border-[#FF4800]"
              : "text-[#F8F5EE]/60 hover:text-[#F8F5EE]"
          }`}
        >
          Execution Plan
        </Link>
        <Link
          href="/research"
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            active === "research"
              ? "text-[#FF4800] border-b-2 border-[#FF4800]"
              : "text-[#F8F5EE]/60 hover:text-[#F8F5EE]"
          }`}
        >
          Research & Intelligence
        </Link>
      </div>
    </nav>
  );
}
