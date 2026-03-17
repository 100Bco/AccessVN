import gaaccLogo from "@assets/GAACC-logo-400x400-1-qyhcmbgu36kdcsai231m2gr6xj1pqen1lbcxra8p_1773649259946.webp";
import logo100b from "@assets/100B_-_TACH_NEN_-2_(1)_1773649286116.png";
import minhMacPhoto from "@assets/Minh Mac CEO.jpeg";
import { useEffect, useRef, useState } from "react";
import { Plane } from "lucide-react";

const RED = "#C41230";
const CHARCOAL = "#1A1A1A";
const GRAY = "#6B7280";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Access Vietnam", href: "#access-vietnam" },
  { label: "Delegation", href: "#delegation" },
  { label: "Central Texas", href: "#central-texas" },
  { label: "Contact", href: "#contact" },
];

/* ── Navbar ── */
function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={ref}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled || menuOpen ? "rgba(255,255,255,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 sm:gap-4">
            <img src={gaaccLogo} alt="GAACC" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
            <div className="h-8 w-px bg-current opacity-20" />
            <img
              src={logo100b}
              alt="100B"
              className="h-7 sm:h-8 object-contain"
              style={{ filter: scrolled ? "grayscale(100%) brightness(0)" : "grayscale(100%) brightness(10)", maxWidth: "96px", opacity: 0.8 }}
            />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium tracking-wide transition-colors"
                style={{ color: scrolled ? CHARCOAL : "rgba(255,255,255,0.85)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = RED)}
                onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? CHARCOAL : "rgba(255,255,255,0.85)")}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="text-white text-[11px] sm:text-[13px] font-semibold px-4 sm:px-5 py-2 transition-all hover:opacity-90" style={{ backgroundColor: RED }}>
              Get Involved
            </a>
            {/* Hamburger button - mobile only */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-5 h-[2px] transition-all duration-300" style={{ backgroundColor: scrolled || menuOpen ? CHARCOAL : "white", transform: menuOpen ? "rotate(45deg) translate(2.5px, 2.5px)" : "none" }} />
              <span className="block w-5 h-[2px] transition-all duration-300" style={{ backgroundColor: scrolled || menuOpen ? CHARCOAL : "white", opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-5 h-[2px] transition-all duration-300" style={{ backgroundColor: scrolled || menuOpen ? CHARCOAL : "white", transform: menuOpen ? "rotate(-45deg) translate(2.5px, -2.5px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="absolute top-[60px] inset-x-0 bg-white shadow-xl py-6 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium py-2 border-b border-gray-100 transition-colors"
                  style={{ color: CHARCOAL }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80')" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(10,10,10,0.75) 0%, rgba(30,30,30,0.60) 100%)" }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6 text-center pt-[70px] sm:pt-[80px]">
        <h1 className="text-white text-3xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">ACCESS ASIA</h1>
        <p className="text-2xl sm:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4" style={{ color: RED }}>Access Vietnam 2026</p>
        <p className="text-white/50 text-[12px] sm:text-base font-medium tracking-wider mb-6 sm:mb-10">May 30 – June 19, 2026 · Taipei · Hanoi · Ho Chi Minh City · Singapore</p>
        <p className="text-white/60 text-sm sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12">
          A historic delegation uniting Austin and Vietnamese business and government leaders to forge lasting economic partnerships between two of the world's most dynamic ecosystems.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-14">
          <a href="#contact" className="text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 text-[12px] sm:text-[13px] tracking-wide hover:brightness-110 transition-all" style={{ backgroundColor: RED }}>Get Involved</a>
        </div>
        <div className="grid grid-cols-3 max-w-xs sm:max-w-xl mx-auto border-t border-white/10 pt-6 sm:pt-8 w-full">
          {[{ value: "3", label: "Countries" }, { value: "21", label: "Days" }, { value: "15+", label: "Delegates" }].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-white tracking-tight">{s.value}</div>
              <div className="text-white/35 text-[10px] sm:text-[13px] mt-1 sm:mt-1.5 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Intro ── */
function IntroSection() {
  const STOPS = ["Austin", "Taipei", "Hanoi", "Ho Chi Minh", "Singapore", "Austin"];
  const COUNTRIES = ["Texas, USA", "Taiwan", "Vietnam", "Vietnam", "Singapore", "Texas, USA"];
  const DATES = ["5/30", "5/31", "6/6", "6/9", "6/13", "6/19"];
  const [litCount, setLitCount] = useState(1);
  const [planePct, setPlanePct] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const measurePositions = () => {
    if (!containerRef.current) return [];
    const cRect = containerRef.current.getBoundingClientRect();
    return nodeRefs.current.map(el => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      return ((r.left + r.width / 2 - cRect.left) / cRect.width) * 100;
    });
  };

  useEffect(() => {
    let cancelled = false;
    const delay = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
    const run = async () => {
      while (!cancelled) {
        const positions = measurePositions();
        setLitCount(1);
        if (positions[0] !== undefined) setPlanePct(positions[0]);
        await delay(800);
        for (let i = 1; i < STOPS.length; i++) {
          if (cancelled) return;
          const pos = measurePositions();
          if (pos[i] !== undefined) setPlanePct(pos[i]);
          await delay(1000);
          if (cancelled) return;
          setLitCount(i + 1);
          await delay(1000);
        }
        await delay(1500);
      }
    };
    const t = setTimeout(run, 400);
    return () => { cancelled = true; clearTimeout(t); };
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <img src={gaaccLogo} alt="GAACC" className="h-12 w-12 sm:h-14 sm:w-14 object-contain mx-auto mb-5 sm:mb-6" />
        <div className="w-8 h-px mx-auto mb-5 sm:mb-6" style={{ backgroundColor: RED }} />
        <p className="text-base sm:text-lg leading-[1.8] mb-10 sm:mb-12" style={{ color: "#333" }}>
          The Greater Austin Asian Chamber of Commerce <strong>(GAACC)</strong> is the leading trusted partner for driving local economic growth and opportunity for businesses with ties to Asia and Asian Americans in Central Texas. In partnership with the City of Austin, GAACC created Access Asia, a program that promotes inbound investment into the Greater Austin region and supports the creation of win-win business collaborations in international investment, trade, technology, innovation, startups, manufacturing, and more.
        </p>

        {/* Flight route animation */}
        <div ref={containerRef} className="relative max-w-2xl mx-auto">
          <div
            className="absolute z-10 pointer-events-none"
            style={{
              left: `${planePct}%`,
              top: "0px",
              transform: "translateX(-50%) translateY(-18px)",
              transition: "left 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
              color: RED,
            }}
          >
            <Plane size={13} className="rotate-45" />
          </div>
          <div className="flex items-end justify-between pt-6">
            {STOPS.map((city, i) => {
              const lit = i < litCount;
              return (
                <div key={city} className="flex items-center flex-1 last:flex-none">
                  <div ref={el => { nodeRefs.current[i] = el; }} className="flex flex-col items-center shrink-0">
                    <div
                      className="w-2 h-2 rounded-full mb-2 transition-all duration-500"
                      style={{ backgroundColor: lit ? RED : "#d1d5db" }}
                    />
                    <p
                      className="font-semibold text-[11px] sm:text-[13px] transition-colors duration-500"
                      style={{ color: lit ? CHARCOAL : "#9ca3af" }}
                    >
                      {city}
                    </p>
                    <p
                      className="text-[9px] sm:text-[11px] mt-0.5 transition-colors duration-500"
                      style={{ color: lit ? GRAY : "#d1d5db" }}
                    >
                      {COUNTRIES[i]}
                    </p>
                    <p
                      className="text-[10px] sm:text-[12px] font-bold mt-0.5 transition-colors duration-500"
                      style={{ color: lit ? RED : "#d1d5db" }}
                    >
                      {DATES[i]}
                    </p>
                  </div>
                  {i < STOPS.length - 1 && (
                    <div className="flex-1 pb-10 px-1">
                      <div
                        className="w-full"
                        style={{
                          height: "1px",
                          backgroundImage: "repeating-linear-gradient(90deg, #e5e7eb 0px, #e5e7eb 4px, transparent 4px, transparent 9px)",
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── What is Access Asia? ── */
function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center py-12 sm:py-0" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <h2 className="text-xl sm:text-3xl font-bold leading-tight mb-4 sm:mb-5" style={{ color: CHARCOAL }}>What is Access Asia?</h2>
          <p className="text-[15px] sm:text-[17px] leading-[1.75] mb-4" style={{ color: "#333" }}>
            Access Asia is a program dedicated to building strong and seamless economic ties between Austin and Asia. For organizations committed to global growth, Access Asia provides the network, insights, intelligence, matchmaking, and infrastructure required to galvanize business between two of the world's most dynamic, growing, and rapidly converging ecosystems.
          </p>
          <p className="text-[15px] sm:text-[17px] leading-[1.75]" style={{ color: "#333" }}>
            In June 2026, GAACC will be leading an historic 3 week long trip to Taiwan, Vietnam, and Singapore. The delegation will include senior government officials from the City of Austin, and surrounding cities and counties as well as business leaders from the region - including the City of Houston.
          </p>
        </div>
      </div>

      {/* Destination strip */}
      <div className="grid grid-cols-3 h-[220px] sm:h-[300px] shrink-0">
        {[
          { country: "Taiwan", img: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=800&q=80" },
          { country: "Vietnam", img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80" },
          { country: "Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80" },
        ].map((d) => (
          <div key={d.country} className="relative overflow-hidden">
            <img src={d.img} alt={d.country} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.05) 50%)" }} />
            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-6">
              <div className="w-4 sm:w-5 h-[2px] mb-1.5 sm:mb-2" style={{ backgroundColor: RED }} />
              <p className="text-white font-bold text-sm sm:text-lg leading-tight">{d.country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Access Vietnam ── */
function AccessVietnamSection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=1400&q=80", caption: "Hanoi" },
    { src: "https://images.unsplash.com/photo-1599708153386-62bf3f035c78?w=1400&q=80", caption: "Ho Chi Minh City" },
    { src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1400&q=80", caption: "Da Nang" },
  ];
  const [cur, setCur] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCur((p) => (p + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, [images.length]);

  const purposes = [
    "Learn more about Vietnam, her people, business and culture",
    "Engage with key government organizations in Vietnam and build relationships",
    "Strengthen diplomatic and economic relationships between Vietnam and the City of Austin",
    "Explore new avenues for trade, investment, and cultural exchange",
    "Lay the groundwork for long-term business partnerships that foster collaboration in startups, technology, advanced manufacturing and creative industries",
  ];

  return (
    <section id="access-vietnam">
      {/* Carousel hero */}
      <div className="relative h-[45vh] sm:h-[50vh] overflow-hidden">
        {images.map((img, i) => (
          <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === cur ? 1 : 0 }}>
            <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.6) 100%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/50 mb-3">June 7–13, 2026</p>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Access Vietnam</h2>
          <div className="w-10 h-[2px] mb-3" style={{ backgroundColor: RED }} />
          <p className="text-white/55 text-sm tracking-wider">Hanoi & Ho Chi Minh City</p>
        </div>
        <div className="absolute bottom-0 inset-x-0 flex">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCur(i)} className="flex-1 h-[3px] transition-all" style={{ backgroundColor: i === cur ? RED : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="py-10 sm:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <p className="text-[15px] sm:text-[17px] leading-[1.75] mb-8 sm:mb-10" style={{ color: "#333" }}>
            The visit to Vietnam is a direct result of the deepening business, community and cultural ties between Austin and Vietnam. In fact the Vietnamese population in Austin is one of the fastest growing Asian communities in Greater Austin so this visit reflects our commitment to building on existing ties, deepening mutual understanding, and fostering meaningful international business collaboration.
          </p>

          <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4 sm:mb-5" style={{ color: RED }}>Purpose of the Visit</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
            {purposes.map((p, i) => (
              <div key={i} className="flex items-baseline gap-3 sm:gap-4 py-3" style={{ borderBottom: "1px solid #eee" }}>
                <span className="text-[12px] font-bold tabular-nums shrink-0" style={{ color: RED }}>0{i + 1}</span>
                <p className="text-[14px] sm:text-[15px] leading-[1.7]" style={{ color: "#333" }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Delegation ── */
function DelegationSection() {
  return (
    <section id="delegation" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560439513-74b037a25d84?w=1400&q=80')" }} />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(15,15,15,0.93)" }} />

      <div className="relative z-10 min-h-screen flex items-center py-20 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 w-full">
          {/* Header + text */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-3xl font-bold text-white leading-tight mb-3 sm:mb-4">The Access Vietnam Delegation</h2>
            <div className="w-8 h-[2px] mx-auto mb-4 sm:mb-6" style={{ backgroundColor: RED }} />
            <p className="text-white/60 text-[14px] sm:text-[17px] leading-[1.75] max-w-3xl mx-auto">
              The delegation will be led by GAACC President & CEO Mark Duval (former President of AmCham China). Delegation members will include business and government leaders representing the City of Austin, the City of Houston and other Central Texas Cities such as Georgetown, Cedar Park, Round Rock, Taylor and Hutto. A total of at least 10-15 delegates (quite possibly more) are expected to join, with that list to be finalized and confirmed by April 30, 2026.
            </p>
          </div>

          {/* Leaders + cities + stats in a compact row */}
          <div className="grid md:grid-cols-12 gap-6 items-start">
            {/* Leader */}
            <div className="md:col-span-5 flex justify-center">
              <div className="flex flex-col items-center">
                <img src="https://austinasianchamber.org/wp-content/uploads/2025/02/Mark-Duval.webp" alt="Mark Duval" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover object-top mb-3 sm:mb-4" />
                <h3 className="text-white font-bold text-base sm:text-lg mb-0.5">Mark Duval</h3>
                <p className="text-white/40 text-[12px] sm:text-[13px]">GAACC President & CEO</p>
              </div>
            </div>

            {/* Cities + stats */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["Austin", "Houston", "Georgetown", "Cedar Park", "Round Rock", "Taylor", "Hutto"].map((c) => (
                  <span key={c} className="text-white/70 text-[11px] sm:text-[13px] font-medium px-2.5 py-1 rounded border border-white/10 bg-white/5">{c}</span>
                ))}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-6 sm:gap-8 pt-5 border-t border-white/8">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white tracking-tight">10–15+</div>
                  <div className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mt-0.5 font-semibold">Delegates</div>
                </div>
                <div className="h-8 w-px bg-white/8" />
                <div>
                  <div className="text-white font-bold text-[13px] sm:text-sm">April 30, 2026</div>
                  <div className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mt-0.5 font-semibold">Planning Deadline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Central Texas ── */
function CentralTexasSection() {
  return (
    <section id="central-texas">
      <div className="relative h-[35vh] sm:h-[50vh]">
        <img src="https://images.unsplash.com/photo-1625278152200-ae2d1fc87c5f?w=1400&q=80" alt="Austin, Texas" className="w-full h-full object-cover object-[center_30%]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)" }} />
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-10">
          <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-white/45 mb-1.5 sm:mb-2">Central Texas</p>
          <h2 className="text-white text-lg sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">A Premier Destination<br />for Asian Capital</h2>
        </div>
      </div>

      <div className="py-10 sm:py-14" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <p className="text-[15px] sm:text-[17px] leading-[1.75] mb-5" style={{ color: "#333" }}>
            Central Texas has solidified its position as a premier destination for Asian capital. Driven by supply chain diversification and geopolitical de-risking as well as a $3-trillion global AI infrastructure supercycle, companies from Taiwan, Korea, Japan, Singapore, India, and Vietnam are aggressively investing in the United States and the region.
          </p>
          <p className="text-[15px] sm:text-[17px] leading-[1.75] mb-6 sm:mb-8" style={{ color: "#333" }}>
            In Greater Austin this shift is anchored by the $37B Samsung Taylor expansion, which has catalyzed a regional "clustering effect," drawing in hundreds of Tier-1 and 2 Samsung suppliers to the Austin-San Antonio corridor. Recent major investments from Korea's LS Electric in Bastrop (near Tesla Gigafactory) and Taiwanese giants Pegatron and Compal in Georgetown and Taylor further signal growing Asian confidence in the region.
          </p>
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-center pt-6 border-t border-gray-200 mb-5" style={{ color: GRAY }}>Investing Nations</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 items-center justify-items-center gap-y-4">
            {[
              { name: "Taiwan", code: "tw" },
              { name: "Korea", code: "kr" },
              { name: "Japan", code: "jp" },
              { name: "Singapore", code: "sg" },
              { name: "India", code: "in" },
              { name: "Vietnam", code: "vn" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2">
                <img src={`https://flagcdn.com/w80/${c.code}.png`} srcSet={`https://flagcdn.com/w160/${c.code}.png 2x`} alt={c.name} className="w-10 sm:w-14 h-7 sm:h-10 object-cover rounded-md shadow-sm" />
                <span className="text-[9px] sm:text-[11px] font-semibold tracking-wide" style={{ color: CHARCOAL }}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── GAACC ── */
function GAACCSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <img src={gaaccLogo} alt="GAACC" className="h-14 w-14 sm:h-[72px] sm:w-[72px] object-contain mx-auto mb-4 sm:mb-5" />
        <h2 className="text-xl sm:text-3xl font-bold mb-5 sm:mb-6" style={{ color: CHARCOAL }}>Greater Austin Asian Chamber of Commerce</h2>

        <p className="text-[15px] sm:text-[17px] leading-[1.75] mb-4" style={{ color: "#333" }}>
          The Greater Austin Asian Chamber of Commerce (GAACC) engages with members of the Central Texas business community, with governmental entities, and with nonprofit organizations to help drive local economic growth for businesses with ties to Asia and Asian Americans. GAACC works to develop Austin's global business and investment connectivity while promoting regional economic equity for all. To learn more, visit{" "}
          <a href="https://austinasianchamber.org" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: RED }}>www.austinasianchamber.org</a>.
        </p>

        <div className="inline-flex items-center gap-6 sm:gap-10 pt-5 sm:pt-6 border-t border-gray-100">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: CHARCOAL }}>6,500+</div>
            <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] mt-1" style={{ color: GRAY }}>Attendees in 2025</div>
          </div>
          <div className="h-8 w-px bg-gray-100" />
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: CHARCOAL }}>50+</div>
            <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] mt-1" style={{ color: GRAY }}>Events in 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Contacts ── */
function ContactSection() {
  const contacts = [
    { name: "Mark Duval", phone: "+1-737-733-2073", email: "markduval@austinasianchamber.org", photo: "https://austinasianchamber.org/wp-content/uploads/2025/02/Mark-Duval.webp" },
    { name: "Minh Mac", phone: "+1-757-773-5707", email: "global@100b.co", photo: minhMacPhoto },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16" style={{ backgroundColor: CHARCOAL }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <h2 className="text-xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-10">Contacts</h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {contacts.map((c) => (
            <div key={c.name} className="flex flex-col items-center py-6 sm:py-8 px-3 sm:px-6 rounded-lg border border-white/8 bg-white/[0.03]">
              {c.photo ? (
                <img src={c.photo} alt={c.name} className="w-[100px] h-[100px] sm:w-[125px] sm:h-[125px] rounded-full object-cover object-top mb-4 border-2 border-white/8" />
              ) : (
                <div className="w-[100px] h-[100px] sm:w-[125px] sm:h-[125px] rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl sm:text-2xl border-2 border-white/8" style={{ backgroundColor: RED }}>
                  {c.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
              <h3 className="text-white font-bold text-base sm:text-lg mb-3">{c.name}</h3>
              <div className="space-y-1.5 text-center">
                <a href={`tel:${c.phone.replace(/\D/g, "")}`} className="block text-white/45 hover:text-white transition-colors text-[12px] sm:text-[13px]">{c.phone}</a>
                <a href={`mailto:${c.email}`} className="block font-semibold hover:text-white transition-colors text-[10px] sm:text-[13px] break-all" style={{ color: RED }}>{c.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="py-6 sm:py-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="flex items-center justify-center gap-5 mb-5">
          <a href="https://austinasianchamber.org" target="_blank" rel="noopener noreferrer"><img src={gaaccLogo} alt="GAACC" className="h-8 w-8 object-contain hover:opacity-80 transition-opacity" /></a>
          <div className="h-5 w-px bg-gray-200" />
          <a href="https://100b.co/" target="_blank" rel="noopener noreferrer"><img src={logo100b} alt="100B" className="h-5 object-contain hover:opacity-80 transition-opacity" style={{ maxWidth: "72px" }} /></a>
        </div>
        <p className="text-gray-400 text-[10px] tracking-[0.15em] uppercase mb-0.5">ACCESS ASIA | Access Vietnam 2026</p>
        <p className="text-gray-300 text-[10px] mb-3">A program of the Greater Austin Asian Chamber of Commerce</p>
        <a href="https://austinasianchamber.org" target="_blank" rel="noopener noreferrer" className="text-[12px] hover:opacity-80 transition-colors" style={{ color: RED }}>
          www.austinasianchamber.org
        </a>
        <div className="mt-5 pt-4 border-t border-gray-100">
          <p className="text-gray-300 text-[10px]">© 2026 Greater Austin Asian Chamber of Commerce. All rights reserved.</p>
          <p className="text-gray-300 text-[10px] mt-1">Powered by <a href="https://www.100bold.co/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{ color: RED }}>100Bold</a></p>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ── */
export default function LandingPage() {
  return (
    <div className="min-h-screen text-gray-900 bg-white font-sans selection:bg-[#C41230] selection:text-white">
      <Navbar />
      <Hero />
      <IntroSection />
      <AboutSection />
      <AccessVietnamSection />
      <DelegationSection />
      <CentralTexasSection />
      <GAACCSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
