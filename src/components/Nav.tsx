import Link from "next/link";

export default function Nav({ active }: { active: "plan" | "research" | "content" | "daily" | "brand" }) {
  const tabs = [
    { href: "/", key: "plan" as const, label: "Execution Plan" },
    { href: "/daily", key: "daily" as const, label: "Daily Tasks" },
    { href: "/content", key: "content" as const, label: "Content Factory" },
    { href: "/brand", key: "brand" as const, label: "Brand Kit" },
    { href: "/research", key: "research" as const, label: "Research" },
  ];

  return (
    <nav className="bg-[#042729] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1">
        {tabs.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              active === tab.key
                ? "text-[#FF4800] border-b-2 border-[#FF4800]"
                : "text-[#F8F5EE]/60 hover:text-[#F8F5EE]"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
