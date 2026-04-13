import gaaccLogo from "@assets/GAACC-logo-400x400-1-qyhcmbgu36kdcsai231m2gr6xj1pqen1lbcxra8p_1773649259946.webp";
import logo100b from "@assets/100B_-_TACH_NEN_-2_(1)_1773649286116.png";
import { Link } from "wouter";
import { LangProvider } from "../i18n";

const RED = "#C41230";
const CHARCOAL = "#1A1A1A";

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
  data,
}: {
  title: string;
  dateRange: string;
  data: { org: string; desc: string }[];
}) {
  return (
    <div>
      {/* Section label */}
      <div className="flex items-center gap-4 mb-5 sm:mb-6">
        <div className="w-8 h-[2px] shrink-0" style={{ backgroundColor: RED }} />
        <div>
          <h3 className="text-lg sm:text-2xl font-bold" style={{ color: CHARCOAL }}>{title}</h3>
          <p className="text-[11px] sm:text-[13px] font-medium tracking-wide mt-0.5" style={{ color: "#999" }}>{dateRange}</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: CHARCOAL }}>
                <th className="text-center px-2 sm:px-3 py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 w-[40px] sm:w-[50px]">
                  #
                </th>
                <th className="text-left px-4 sm:px-6 py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 w-[200px] sm:w-[260px]">
                  Organization
                </th>
                <th className="text-left px-4 sm:px-6 py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="transition-colors hover:bg-gray-50/80"
                  style={{
                    backgroundColor: i % 2 === 0 ? "white" : "#fafafa",
                    borderTop: "1px solid #f0f0f0",
                  }}
                >
                  <td className="text-center px-2 sm:px-3 py-3.5 align-top">
                    <span className="text-[12px] sm:text-[13px] font-bold tabular-nums" style={{ color: RED }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 align-top">
                    <span className="text-[13px] sm:text-[14px] font-semibold" style={{ color: CHARCOAL }}>
                      {row.org}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 text-[13px] sm:text-[14px] leading-[1.65]" style={{ color: "#555" }}>
                    {row.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ItineraryContent() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#C41230] selection:text-white">
      {/* Header */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50" style={{ backdropFilter: "blur(20px)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
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
            className="text-[12px] sm:text-[13px] font-semibold px-4 sm:px-5 py-2 transition-all hover:opacity-90 text-white"
            style={{ backgroundColor: RED }}
          >
            &larr; Home
          </Link>
        </div>
      </nav>

      {/* Hero banner */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(15,15,15,0.92)" }} />
        <div className="relative z-10 py-14 sm:py-20 text-center px-4 sm:px-8">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4">
            ACCESS ASIA &middot; Access Vietnam 2026
          </p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Tentative Itinerary
          </h1>
          <div className="w-10 h-[2px] mx-auto mb-5" style={{ backgroundColor: RED }} />
          <p className="text-[12px] sm:text-[14px] max-w-xl mx-auto leading-relaxed text-white/45">
            <span className="font-semibold text-white/60">NOTE:</span>{" "}
            Detailed itinerary in development. All activities subject to confirmation/change.
          </p>
        </div>
      </div>

      {/* Whitespace breather */}
      <div className="py-10 sm:py-14 bg-white" />

      {/* Tables */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-14 sm:space-y-20" style={{ backgroundColor: "#f8f8f8" }}>
        <ItineraryTable
          title="Hanoi City"
          dateRange="June 6 – June 9, 2026"
          data={hanoiData}
        />
        <ItineraryTable
          title="Ho Chi Minh City"
          dateRange="June 10 – June 12, 2026"
          data={hcmData}
        />
      </div>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-5 mb-4">
            <a href="https://austinasianchamber.org" target="_blank" rel="noopener noreferrer">
              <img src={gaaccLogo} alt="GAACC" className="h-8 w-8 object-contain hover:opacity-80 transition-opacity" />
            </a>
            <div className="h-5 w-px bg-gray-200" />
            <a href="https://100b.co/" target="_blank" rel="noopener noreferrer">
              <img src={logo100b} alt="100B" className="h-5 object-contain hover:opacity-80 transition-opacity" style={{ maxWidth: "72px" }} />
            </a>
          </div>
          <p className="text-gray-400 text-[10px] tracking-[0.15em] uppercase mb-0.5">ACCESS ASIA | Access Vietnam 2026</p>
          <p className="text-gray-300 text-[10px]">
            &copy; 2026 Greater Austin Asian Chamber of Commerce. All rights reserved.
          </p>
          <p className="text-gray-300 text-[10px] mt-1">
            Powered by <a href="https://www.100bold.co/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{ color: RED }}>100Bold</a>
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
