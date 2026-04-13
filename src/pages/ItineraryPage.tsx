import gaaccLogo from "@assets/GAACC-logo-400x400-1-qyhcmbgu36kdcsai231m2gr6xj1pqen1lbcxra8p_1773649259946.webp";
import logo100b from "@assets/100B_-_TACH_NEN_-2_(1)_1773649286116.png";
import { Link } from "wouter";
import { LangProvider } from "../i18n";

const RED = "#C41230";
const CHARCOAL = "#1A1A1A";
const TEAL = "#0D7377";
const GOLD = "#C9952A";

const hanoiData = [
  { org: "OpenCommerce", desc: "86,700+ sellers, 195 countries, $670M+ GMV; $7M raised; backed by VNG and Do Ventures." },
  { org: "Coolmate", desc: "$150M GMV; $22M+ raised; Series C (2025) led by Vertex Growth Fund; expanding into US market." },
  { org: "MindX", desc: "32+ campuses, 35,000+ graduates; $18.5M raised; places Vietnamese tech talent with global employers." },
  { org: "DLS (E-Commerce)", desc: "$80M annual revenue. Cross-border e-commerce and print-on-demand; #1 on Gearlaunch 2018\u20132019; bootstrapped." },
  { org: "Phuong Dong Asahi", desc: "Hospital group with plans to operate 10,000 beds across Vietnam, plus high-end retirement homes." },
  { org: "National Data Association (NDA)", desc: "Launched March 2025; chaired by Minister of Public Security; building NDAChain (national blockchain)." },
  { org: "National Data Incubator", desc: "Government-backed incubator for data-driven startups; part of Vietnam\u2019s national digital transformation agenda." },
  { org: "People\u2019s Committee of Hanoi", desc: "Governing body of capital city; 8M+ population; housing the central government and key ministries." },
  { org: "Vietnam National Innovation Center (NIC)", desc: "Gov innovation hub \u2013 Ministry of Finance \u2013 NIC Scale X program \u2013 key facility." },
  { org: "Ministry of Science & Technology", desc: "Oversees Vietnam\u2019s S&T policy, startup regulation, and innovation programs; administers the national startup ecosystem support framework." },
  { org: "ThinkZone Ventures", desc: "Seed to Series A; largest locally-funded fund ($60M); backed by IPA, Phu Thai Holdings, Stavian Group." },
  { org: "MISA", desc: "Leading SME ERP/accounting software; 250,000+ business customers; bootstrapped." },
  { org: "VinUniversity", desc: "Flagship university \u2013 engineering/science \u2013 industry partnerships." },
];

const hcmData = [
  { org: "Do Ventures", desc: "$50M early-stage fund; portfolio includes Coolmate, OpenCommerce, MindX." },
  { org: "Metub", desc: "5,000+ creators; $21.5M raised; acquired by WebTVAsia (2024); JV with Virgin Music Group (2025)." },
  { org: "VinMake", desc: "Fashion manufacturing network; design-to-delivery in 15 days for global brands; seed-stage." },
  { org: "AVV", desc: "Seed to Series A; 100+ startups, $1.8B portfolio GMV, 3 unicorns; successor to 500 Startups Vietnam." },
  { org: "Golden Gate Ventures", desc: "Early-stage SEA-focused; 60+ investments." },
  { org: "Fulbright University Vietnam", desc: "Tech education \u2013 startup support \u2013 research commercialization." },
  { org: "BCA / BNI Vietnam", desc: "Network of 10k+ businesses." },
  { org: "Saigon Hi-Tech Park (SHTP)", desc: "913 hectares \u2013 Intel/Samsung/FPT \u2013 group tour available." },
  { org: "Asia Business Builders (ABB)", desc: "Growth equity & M&A; 25+ years; cross-border deals connecting Vietnamese companies to strategic buyers in Japan, Europe, and the US." },
  { org: "Antler Vietnam", desc: "Pre-seed company builder; 21 Vietnam investments in 2024." },
  { org: "Monk\u2019s Hill Ventures", desc: "Series A; $200M Fund III (2023); 50+ portfolio companies across SEA; Temasek-backed." },
];

function ItineraryTable({
  title,
  dateRange,
  color,
  data,
}: {
  title: string;
  dateRange: string;
  color: string;
  data: { org: string; desc: string }[];
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4" style={{ backgroundColor: color }}>
        <h3 className="text-white text-lg sm:text-xl font-bold">{title}</h3>
        <p className="text-white/80 text-sm">{dateRange}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ backgroundColor: `${color}20` }}>
              <th className="text-left px-4 sm:px-6 py-3 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider" style={{ color: CHARCOAL }}>
                Organization
              </th>
              <th className="text-left px-4 sm:px-6 py-3 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider" style={{ color: CHARCOAL }}>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className="border-t border-gray-100 transition-colors hover:bg-gray-50"
                style={{ backgroundColor: i % 2 === 0 ? "white" : "#fafafa" }}
              >
                <td className="px-4 sm:px-6 py-3.5 text-[13px] sm:text-[14px] font-semibold align-top whitespace-nowrap" style={{ color: CHARCOAL }}>
                  {row.org}
                </td>
                <td className="px-4 sm:px-6 py-3.5 text-[13px] sm:text-[14px] leading-relaxed" style={{ color: "#555" }}>
                  {row.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ItineraryContent() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans selection:bg-[#C41230] selection:text-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 sm:gap-4">
            <img src={gaaccLogo} alt="GAACC" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
            <div className="h-8 w-px bg-gray-200" />
            <img
              src={logo100b}
              alt="100B"
              className="h-7 sm:h-8 object-contain"
              style={{ maxWidth: "96px", filter: "grayscale(100%) brightness(0)", opacity: 0.8 }}
            />
          </Link>
          <Link
            href="/"
            className="text-[12px] sm:text-[13px] font-semibold px-4 py-2 rounded transition-colors hover:opacity-90 text-white"
            style={{ backgroundColor: RED }}
          >
            &larr; Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-14 text-center">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase mb-3" style={{ color: RED }}>
            ACCESS ASIA &middot; Access Vietnam 2026
          </p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: CHARCOAL }}>
            Tentative Itinerary
          </h1>
          <div className="w-10 h-[2px] mx-auto mb-5" style={{ backgroundColor: RED }} />
          <p className="text-[13px] sm:text-[15px] max-w-2xl mx-auto leading-relaxed" style={{ color: "#888" }}>
            <span className="font-semibold" style={{ color: "#666" }}>NOTE:</span>{" "}
            Detailed itinerary in development. All activities subject to confirmation/change.
          </p>
        </div>
      </div>

      {/* Tables */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10 sm:space-y-14">
        <ItineraryTable
          title="Hanoi City"
          dateRange="June 6 \u2013 June 9, 2026"
          color={TEAL}
          data={hanoiData}
        />

        <ItineraryTable
          title="Ho Chi Minh City"
          dateRange="June 10 \u2013 June 12, 2026"
          color={GOLD}
          data={hcmData}
        />
      </div>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-5 mb-4">
            <img src={gaaccLogo} alt="GAACC" className="h-8 w-8 object-contain" />
            <div className="h-5 w-px bg-gray-200" />
            <img src={logo100b} alt="100B" className="h-5 object-contain" style={{ maxWidth: "72px" }} />
          </div>
          <p className="text-gray-400 text-[10px] tracking-[0.15em] uppercase mb-0.5">ACCESS ASIA | Access Vietnam 2026</p>
          <p className="text-gray-300 text-[10px]">
            &copy; 2026 Greater Austin Asian Chamber of Commerce. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function ItineraryPage() {
  return (
    <LangProvider>
      <ItineraryContent />
    </LangProvider>
  );
}
