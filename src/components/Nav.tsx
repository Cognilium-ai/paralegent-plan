import Link from "next/link";

export default function Nav({ active }: { active: "plan" | "research" | "content" | "daily" | "brand" | "assets" | "partnerships" | "buyers" | "calendar" }) {
  const tabs = [
    { href: "/", key: "plan" as const, label: "Plan" },
    { href: "/calendar", key: "calendar" as const, label: "Calendar" },
    { href: "/daily", key: "daily" as const, label: "Daily Tasks" },
    { href: "/buyers", key: "buyers" as const, label: "Buyer Intel" },
    { href: "/content", key: "content" as const, label: "Content" },
    { href: "/brand", key: "brand" as const, label: "Brand Kit" },
    { href: "/assets", key: "assets" as const, label: "Sales Assets" },
    { href: "/partnerships", key: "partnerships" as const, label: "Partnerships" },
    { href: "/research", key: "research" as const, label: "Research" },
  ];

  return (
    <nav className="bg-[#042729] border-b border-white/10 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1 min-w-max">
        {tabs.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            className={`px-3 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
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
