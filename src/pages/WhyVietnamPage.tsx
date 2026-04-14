import gaaccLogo from "@assets/GAACC-logo-400x400-1-qyhcmbgu36kdcsai231m2gr6xj1pqen1lbcxra8p_1773649259946.webp";
import logo100b from "@assets/100B_-_TACH_NEN_-2_(1)_1773649286116.png";
import aiPhoto from "@assets/nvidiachinh-phu-17334469624681083817914.webp";
import semiPhoto from "@assets/vietnam-flag-microchip-processor-electronic-board-important-component-computer-smartphone-vietnam-become-global-manufacturing-supply-chain-replace-china-due-labor-cost-cheap.jpg";
import { Link } from "wouter";
import { LangProvider } from "../i18n";
import { Download } from "lucide-react";

const RED = "#C41230";
const CHARCOAL = "#1A1A1A";

const REPORT_URL =
  "https://cdn.prod.website-files.com/66de662c48797295a3a9949c/6850ee924f1ce0fd63892808_Eng_Vietnam%20Innovation%20%26%20Private%20Capital%20Report%202025_June%2016_compressed.pdf";

/* ── Images ── */
const IMG = {
  hero: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80",
  people: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  digital: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  hcm: "https://images.unsplash.com/photo-1599708153386-62bf3f035c78?w=1400&q=80",
  startup: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
  ai: aiPhoto,
  semiconductor: semiPhoto,
  fintech: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=1400&q=80",
};

/* ── Stat helpers ── */

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-4xl font-bold text-white tracking-tight">{value}</div>
      <div className="text-white/35 text-[10px] sm:text-[12px] mt-1 sm:mt-1.5 uppercase tracking-[0.15em] font-semibold">
        {label}
      </div>
    </div>
  );
}

function StatItem({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: accent ? RED : CHARCOAL }}>
        {value}
      </div>
      <div className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] mt-1 leading-snug" style={{ color: "#999" }}>
        {label}
      </div>
    </div>
  );
}

/* ── Image strip (like About section destination strip) ── */

function ImageStrip({ images }: { images: { src: string; label: string }[] }) {
  return (
    <div className="h-[180px] sm:h-[200px] lg:h-[220px] shrink-0" style={{ display: "grid", gridTemplateColumns: `repeat(${images.length}, 1fr)` }}>
      {images.map((img) => (
        <div key={img.label} className="relative overflow-hidden">
          <img src={img.src} alt={img.label} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 100%)" }} />
          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-5">
            <div className="w-4 sm:w-5 h-[2px] mb-1 sm:mb-1.5" style={{ backgroundColor: RED }} />
            <p className="text-white font-bold text-[11px] sm:text-sm leading-tight">{img.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Salary Chart ── */

const SALARY_DATA = [
  { country: "Singapore", value: 5056, flag: "🇸🇬" },
  { country: "Malaysia", value: 679, flag: "🇲🇾" },
  { country: "Thailand", value: 480, flag: "🇹🇭" },
  { country: "Vietnam", value: 373, flag: "🇻🇳" },
  { country: "Indonesia", value: 358, flag: "🇮🇩" },
  { country: "Cambodia", value: 336, flag: "🇰🇭" },
  { country: "Philippines", value: 316, flag: "🇵🇭" },
  { country: "Laos", value: 111, flag: "🇱🇦" },
];

function SalaryChart() {
  const max = SALARY_DATA[0].value;
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-5 sm:p-8">
      <h4 className="text-[13px] sm:text-[15px] font-bold mb-1" style={{ color: CHARCOAL }}>
        Gross Average Monthly Salary of Southeast Asia 2025
      </h4>
      <p className="text-[10px] sm:text-[11px] mb-6" style={{ color: "#999" }}>Unit: USD</p>
      <div className="space-y-3 sm:space-y-3.5">
        {SALARY_DATA.map((d) => {
          const isVN = d.country === "Vietnam";
          const pct = (d.value / max) * 100;
          return (
            <div key={d.country} className="flex items-center gap-3">
              <span
                className="text-[11px] sm:text-[13px] font-semibold w-[85px] sm:w-[100px] text-right shrink-0"
                style={{ color: isVN ? RED : CHARCOAL }}
              >
                {d.country}
              </span>
              <div className="flex-1 h-[22px] sm:h-[26px] rounded-sm overflow-hidden" style={{ backgroundColor: "#f0f0f0" }}>
                <div
                  className="h-full rounded-sm flex items-center justify-end pr-2 transition-all"
                  style={{
                    width: `${Math.max(pct, 4)}%`,
                    backgroundColor: isVN ? RED : "#93C47D",
                  }}
                >
                  {pct > 8 && (
                    <span className="text-white text-[10px] sm:text-[11px] font-bold">
                      {d.value.toLocaleString()}
                    </span>
                  )}
                </div>
                {pct <= 8 && (
                  <span className="text-[10px] sm:text-[11px] font-bold ml-1" style={{ color: "#666" }}>
                    {d.value.toLocaleString()}
                  </span>
                )}
              </div>
              <span className="text-[14px] shrink-0">{d.flag}</span>
            </div>
          );
        })}
      </div>
      <p className="text-[8px] sm:text-[9px] mt-5 tracking-wide" style={{ color: "#ccc" }}>
        *Source: Compiled from various sources (MOM.gov; PSA.gov; Vietnam.gov; etc.)
      </p>
    </div>
  );
}

/* ── Stat sections ── */

function DemographicsSection() {
  const stats = [
    { value: "33.9 yr", label: "Median Age" },
    { value: "69.3%", label: "Working-Age Population" },
    { value: "~690K", label: "STEM Students (+10%/yr)" },
    { value: "1.8M", label: "ICT Workforce" },
    { value: "50K", label: "Semiconductor Engineers (2030 Goal)" },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] shrink-0" style={{ backgroundColor: RED }} />
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: RED }}>
              Demographics & Talent
            </p>
          </div>
          <p className="text-[14px] sm:text-[16px] leading-[1.7] max-w-2xl" style={{ color: "#555" }}>
            A young, highly educated, and tech-ready workforce of 101 million &mdash; the 15th largest population in the world with 94.5% overall literacy.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center sm:text-left border-l-2 pl-4" style={{ borderColor: i === 0 ? RED : "#e5e5e5" }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: CHARCOAL }}>
                  {s.value}
                </div>
                <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] mt-1.5 leading-snug" style={{ color: "#999" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <SalaryChart />
        </div>
        <p className="text-[9px] mt-6 tracking-wide" style={{ color: "#ccc" }}>
          Sources: UN World Population Prospects 2024, Worldometer, DataReportal
        </p>
      </div>
    </section>
  );
}

function DigitalSection() {
  const stats = [
    { value: "79.8M", label: "Internet Users (78.8%)" },
    { value: "84.4%", label: "Smartphone Penetration" },
    { value: "$36B", label: "Digital Economy (2024)", accent: true },
    { value: "+61%", label: "Mobile Speed Growth YoY" },
    { value: "30\u201335%", label: "GDP from Digital (2030 Target)" },
  ];

  return (
    <section style={{ backgroundColor: "#f8f8f8" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] shrink-0" style={{ backgroundColor: RED }} />
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: RED }}>
              Digital Economy
            </p>
          </div>
          <p className="text-[14px] sm:text-[16px] leading-[1.7] max-w-2xl" style={{ color: "#555" }}>
            One of Asia&rsquo;s fastest-growing digital economies, with 500,000+ IT workers and strong government support for AI, semiconductors, and digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8 gap-x-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center sm:text-left border-l-2 pl-4" style={{ borderColor: i === 0 ? RED : "#e5e5e5" }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: s.accent ? RED : CHARCOAL }}>
                {s.value}
              </div>
              <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] mt-1.5 leading-snug" style={{ color: "#999" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9px] mt-8 tracking-wide" style={{ color: "#ccc" }}>
          Sources: DataReportal Digital 2025, World Bank
        </p>
      </div>
    </section>
  );
}

function EconomySection() {
  const stats = [
    { value: "$514B", label: "GDP Forecast (2025)", accent: true },
    { value: "8.02%", label: "GDP Growth (2025F)" },
    { value: "$405B", label: "Exports (2024)" },
    { value: "$1.1T", label: "GDP Forecast (2035)", accent: true },
    { value: "46%", label: "Middle & Affluent (2030)" },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] shrink-0" style={{ backgroundColor: RED }} />
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: RED }}>
              Economy & Investment
            </p>
          </div>
          <p className="text-[14px] sm:text-[16px] leading-[1.7] max-w-2xl" style={{ color: "#555" }}>
            Remarkable resilience with $25.35B in FDI disbursed in 2024 (all-time high, +9.4% YoY), attracting global players like Samsung, Lego, and Intel. Projected to become a top-25 world economy within the next decade.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8 gap-x-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center sm:text-left border-l-2 pl-4" style={{ borderColor: i === 0 ? RED : "#e5e5e5" }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: s.accent ? RED : CHARCOAL }}>
                {s.value}
              </div>
              <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] mt-1.5 leading-snug" style={{ color: "#999" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9px] mt-8 tracking-wide" style={{ color: "#ccc" }}>
          Sources: Vietnam General Statistics Office, World Bank, Vietnam-Briefing
        </p>
      </div>
    </section>
  );
}

function StartupSection() {
  const stats = [
    { value: "4,000+", label: "Startups (#5 in SEA)" },
    { value: "7", label: "Unicorns", accent: true },
    { value: "$2.3B", label: "VC Investment (2024)", accent: true },
    { value: "$20.7B", label: "Total Raised (All-Time)" },
    { value: "765", label: "AI/ML Startups (8\u00D7 Growth)" },
  ];

  return (
    <section style={{ backgroundColor: "#f8f8f8" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] shrink-0" style={{ backgroundColor: RED }} />
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: RED }}>
              Startup & Innovation Ecosystem
            </p>
          </div>
          <p className="text-[14px] sm:text-[16px] leading-[1.7] max-w-2xl" style={{ color: "#555" }}>
            A vibrant ecosystem with 208 investment funds, 79 incubators, and 35 accelerators. Business automation surged 562% YoY, AI funding rose 8&times;, and nearly 150 VC investors were active in 2024.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8 gap-x-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center sm:text-left border-l-2 pl-4" style={{ borderColor: i === 0 ? RED : "#e5e5e5" }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: s.accent ? RED : CHARCOAL }}>
                {s.value}
              </div>
              <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] mt-1.5 leading-snug" style={{ color: "#999" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9px] mt-8 tracking-wide" style={{ color: "#ccc" }}>
          Sources: Ministry of Science & Technology / Techfest 2025, NIC, Tracxn, StartupBlink
        </p>
      </div>
    </section>
  );
}

function ReportSection() {
  const highlights = [
    "Vietnam recorded $2.3B across 141 deals in 2024 \u2014 deal count held steady, signaling sustained investor confidence.",
    "Mid-sized PE deals ($100M\u2013$300M) rebounded 2.7\u00D7 YoY to $700M, indicating growing appetite for scalable platforms.",
    "Early-stage VC revival: 57 deals under $0.5M, seeding the next generation of Vietnamese startups.",
    "AgriTech investments jumped 9\u00D7; GreenTech deals more than doubled, backed by strong ESG mandates.",
    "Government\u2019s National Master Plan (2021\u20132030) emphasizes digital, green, and hi-tech economy pillars.",
  ];

  return (
    <section style={{ backgroundColor: CHARCOAL }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-[2px] shrink-0" style={{ backgroundColor: RED }} />
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: RED }}>
            Featured Report
          </p>
        </div>

        <div className="sm:flex sm:items-start sm:gap-10">
          <div className="flex-1 mb-8 sm:mb-0">
            <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight mb-2">
              Vietnam Innovation &<br />Private Capital Report 2025
            </h3>
            <p className="text-white/40 text-[13px] sm:text-[14px] leading-relaxed mb-6">
              Comprehensive analysis of Vietnam&rsquo;s private capital landscape, startup ecosystem, and investment opportunities.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[11px] font-bold mt-0.5 shrink-0" style={{ color: RED }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/55 text-[12px] sm:text-[13px] leading-[1.6]">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:w-[240px] shrink-0 flex flex-col items-center sm:items-start">
            <div className="w-full rounded-lg overflow-hidden border border-white/10 bg-white/5 p-6 sm:p-8 text-center mb-4">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: RED }}>
                <Download className="w-5 h-5 text-white" />
              </div>
              <p className="text-white text-[13px] font-semibold mb-1">Download PDF</p>
              <p className="text-white/30 text-[10px]">Full Report &middot; 2025 Edition</p>
            </div>
            <a
              href={REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-white text-[12px] sm:text-[13px] font-semibold px-6 py-3 transition-all hover:opacity-90 rounded"
              style={{ backgroundColor: RED }}
            >
              View Report &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */

function WhyVietnamContent() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#C41230] selection:text-white">
      {/* Nav */}
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
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/itinerary"
              className="text-[11px] sm:text-[13px] font-semibold px-3 sm:px-4 py-2 transition-all hover:opacity-80 rounded"
              style={{ color: CHARCOAL, border: "1px solid #e0e0e0" }}
            >
              Itinerary
            </Link>
            <Link
              href="/"
              className="text-[11px] sm:text-[13px] font-semibold px-3 sm:px-4 py-2 transition-all hover:opacity-90 text-white rounded"
              style={{ backgroundColor: RED }}
            >
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero + Image strip = one full screen */}
      <div className="flex flex-col" style={{ height: "calc(100vh - 60px)" }}>
        {/* Hero */}
        <div className="relative overflow-hidden flex-1">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.hero}')` }} />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(15,15,15,0.93)" }} />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4">
              ACCESS ASIA &middot; Access Vietnam 2026
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">
              Why Vietnam?
            </h1>
            <div className="w-10 h-[2px] mx-auto mb-5" style={{ backgroundColor: RED }} />
            <p className="text-[13px] sm:text-[15px] max-w-2xl mx-auto leading-relaxed text-white/45 mb-10 sm:mb-14">
              One of the world&rsquo;s fastest-growing economies, with a young tech-ready workforce, booming digital ecosystem, and a vibrant startup scene attracting global capital.
            </p>

            {/* Headline stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 max-w-3xl mx-auto border-t border-white/10 pt-6 sm:pt-8 gap-y-5 w-full">
              <HeroStat value="$476B" label="GDP (2024)" />
              <HeroStat value="101M" label="Population" />
              <HeroStat value="7.09%" label="GDP Growth (2024)" />
              <HeroStat value="$25.35B" label="FDI (All-Time High)" />
            </div>
          </div>
        </div>

        {/* Image strip */}
        <ImageStrip
          images={[
            { src: IMG.ai, label: "AI & Technology" },
            { src: IMG.semiconductor, label: "Semiconductors" },
            { src: IMG.fintech, label: "Finance & FinTech" },
          ]}
        />
      </div>

      {/* Stat sections with side images */}
      <DemographicsSection />
      <DigitalSection />
      <EconomySection />
      <StartupSection />

      {/* Report */}
      <ReportSection />

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
            Powered by{" "}
            <a href="https://www.100bold.co/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{ color: RED }}>
              100Bold
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function WhyVietnamPage() {
  return (
    <LangProvider>
      <WhyVietnamContent />
    </LangProvider>
  );
}
