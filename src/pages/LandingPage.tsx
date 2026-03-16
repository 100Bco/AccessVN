import gaaccLogo from "@assets/GAACC-logo-400x400-1-qyhcmbgu36kdcsai231m2gr6xj1pqen1lbcxra8p_1773649259946.webp";
import logo100b from "@assets/100B_-_TACH_NEN_-2_(1)_1773649286116.png";
import { useEffect, useRef, useState } from "react";

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

/* ────────────────────────────────────────────────────────────────────────── */
/*  Navbar                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */
function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={ref}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-4">
          <img src={gaaccLogo} alt="GAACC" className="h-12 w-12 object-contain" />
          <div className="h-8 w-px bg-current opacity-20" />
          <img
            src={logo100b}
            alt="100B"
            className="h-8 object-contain hidden sm:block"
            style={{
              filter: scrolled ? "grayscale(100%) brightness(0)" : "grayscale(100%) brightness(10)",
              maxWidth: "96px",
              opacity: 0.8,
            }}
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

        <a
          href="#contact"
          className="text-white text-[13px] font-semibold px-5 py-2 transition-all hover:opacity-90"
          style={{ backgroundColor: RED }}
        >
          Get Involved
        </a>
      </div>
    </nav>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Hero                                                                      */
/* ────────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80')" }}
      />
      <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, rgba(10,10,10,0.75) 0%, rgba(30,30,30,0.60) 100%)` }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-[13px] font-semibold tracking-[0.25em] uppercase mb-5 text-white/50">
          Greater Austin Asian Chamber of Commerce & 100B
        </p>

        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          ACCESS ASIA
        </h1>
        <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-3" style={{ color: RED }}>
          Access Vietnam 2026
        </p>
        <p className="text-white/50 text-[14px] sm:text-[15px] font-medium tracking-wider mb-8">
          June 7–13, 2026 · Hanoi & Ho Chi Minh City
        </p>

        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          A historic delegation uniting Austin and Vietnamese business and government leaders to forge lasting economic partnerships between two of the world's most dynamic ecosystems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#access-vietnam"
            className="text-white font-semibold px-8 py-3.5 text-[13px] tracking-wide hover:brightness-110 transition-all"
            style={{ backgroundColor: RED }}
          >
            Learn About the Mission
          </a>
          <a
            href="#contact"
            className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-8 py-3.5 text-[13px] tracking-wide transition-all"
          >
            Get Involved
          </a>
        </div>

        <div className="grid grid-cols-3 max-w-xl mx-auto border-t border-white/10 pt-8">
          {[
            { value: "3", label: "Countries" },
            { value: "21", label: "Days" },
            { value: "15+", label: "Delegates" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white tracking-tight">{s.value}</div>
              <div className="text-white/35 text-[11px] mt-1.5 uppercase tracking-[0.2em] font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Intro — GAACC + Access Asia introduction                                  */
/* ────────────────────────────────────────────────────────────────────────── */
function IntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <img src={gaaccLogo} alt="GAACC" className="h-16 w-16 object-contain mx-auto mb-10" />
        <div className="w-10 h-px mx-auto mb-10" style={{ backgroundColor: RED }} />
        <p className="text-[17px] sm:text-lg leading-[1.9] tracking-wide" style={{ color: "#333" }}>
          The Greater Austin Asian Chamber of Commerce <strong className="font-bold">(GAACC)</strong> is the leading trusted partner for driving local economic growth and opportunity for businesses with ties to Asia and Asian Americans in Central Texas. In partnership with the City of Austin, GAACC created Access Asia, a program that promotes inbound investment into the Greater Austin region and supports the creation of win-win business collaborations in international investment, trade, technology, innovation, startups, manufacturing, and more.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  What is Access Asia?                                                      */
/* ────────────────────────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about">
      {/* Text portion */}
      <div className="py-24" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: RED }}>About the Program</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-10" style={{ color: CHARCOAL }}>What is Access Asia?</h2>

          <p className="text-[17px] leading-[1.85] mb-8" style={{ color: "#333" }}>
            Access Asia is a program dedicated to building strong and seamless economic ties between Austin and Asia. For organizations committed to global growth, Access Asia provides the network, insights, intelligence, matchmaking, and infrastructure required to galvanize business between two of the world's most dynamic, growing, and rapidly converging ecosystems.
          </p>
          <p className="text-[17px] leading-[1.85]" style={{ color: "#333" }}>
            In June 2026, GAACC will be leading an historic 3 week long trip to Taiwan, Vietnam, and Singapore. The delegation will include senior government officials from the City of Austin, and surrounding cities and counties as well as business leaders from the region - including the City of Houston.
          </p>
        </div>
      </div>

      {/* Full-bleed destination strip */}
      <div className="grid grid-cols-3 h-[280px] sm:h-[360px]">
        {[
          { city: "Taipei", country: "Taiwan", img: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=800&q=80" },
          { city: "Hanoi", country: "Vietnam", img: "https://images.unsplash.com/photo-1599708153386-62bf3f035c78?w=800&q=80" },
          { city: "Singapore", country: "Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80" },
        ].map((d) => (
          <div key={d.city} className="relative overflow-hidden">
            <img src={d.img} alt={d.city} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)" }} />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <div className="w-6 h-[2px] mb-3" style={{ backgroundColor: RED }} />
              <p className="text-white font-bold text-lg sm:text-2xl leading-tight">{d.city}</p>
              <p className="text-white/50 text-[11px] font-semibold tracking-[0.2em] uppercase mt-1">{d.country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Access Vietnam                                                            */
/* ────────────────────────────────────────────────────────────────────────── */
function AccessVietnamSection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1599708153386-62bf3f035c78?w=1400&q=80", caption: "Hanoi" },
    { src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1400&q=80", caption: "Ho Chi Minh City" },
    { src: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1400&q=80", caption: "Vietnamese Heritage" },
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
      {/* Cinematic hero image with overlay text */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        {images.map((img, i) => (
          <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === cur ? 1 : 0 }}>
            <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 100%)" }} />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/50 mb-4">June 7–13, 2026</p>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Access Vietnam</h2>
          <div className="w-12 h-[2px] mb-6" style={{ backgroundColor: RED }} />
          <p className="text-white/60 text-sm tracking-wider">Hanoi & Ho Chi Minh City</p>
        </div>

        {/* Minimal progress bar */}
        <div className="absolute bottom-0 inset-x-0 flex">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCur(i)} className="flex-1 h-[3px] transition-all" style={{ backgroundColor: i === cur ? RED : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-[17px] leading-[1.85] mb-16" style={{ color: "#333" }}>
            The visit to Vietnam is a direct result of the deepening business, community and cultural ties between Austin and Vietnam. In fact the Vietnamese population in Austin is one of the fastest growing Asian communities in Greater Austin so this visit reflects our commitment to building on existing ties, deepening mutual understanding, and fostering meaningful international business collaboration.
          </p>

          <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-8" style={{ color: RED }}>Purpose of the Visit</p>

          <div className="space-y-0">
            {purposes.map((p, i) => (
              <div key={i} className="flex items-baseline gap-6 py-5" style={{ borderBottom: "1px solid #eee" }}>
                <span className="text-[13px] font-bold tabular-nums shrink-0" style={{ color: RED }}>0{i + 1}</span>
                <p className="text-[15px] leading-[1.7]" style={{ color: "#333" }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Delegation                                                                */
/* ────────────────────────────────────────────────────────────────────────── */
function DelegationSection() {
  return (
    <section id="delegation" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560439513-74b037a25d84?w=1400&q=80')" }} />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(15,15,15,0.93)" }} />

      <div className="relative z-10 py-24">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: RED }}>The Delegation</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">The Access Vietnam Delegation</h2>
          <div className="w-10 h-[2px] mx-auto mb-10" style={{ backgroundColor: RED }} />

          <p className="text-white/65 text-[17px] leading-[1.85] mb-16">
            The delegation will be led by GAACC Chairman Minh Tran and GAACC President & CEO Mark Duval. Delegation members will include business and government leaders representing the City of Austin, the City of Houston and other Central Texas Cities such as Georgetown, Cedar Park, Round Rock, Taylor and Hutto. A total of at least 10-15 delegates (quite possibly more) are expected to join, with that list to be finalized and confirmed by April 30, 2026.
          </p>
        </div>

        {/* Leaders — minimal, dignified */}
        <div className="max-w-2xl mx-auto px-8 mb-16">
          <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            {[
              { name: "Minh Tran", title: "GAACC Chairman", photo: null },
              { name: "Mark Duval", title: "GAACC President & CEO", photo: "https://austinasianchamber.org/wp-content/uploads/2025/02/Mark-Duval.webp" },
            ].map((p) => (
              <div key={p.name} className="flex flex-col items-center py-10 px-6" style={{ backgroundColor: "rgba(15,15,15,0.95)" }}>
                {p.photo ? (
                  <img src={p.photo} alt={p.name} className="w-24 h-24 rounded-full object-cover object-top mb-5 border-2 border-white/10" />
                ) : (
                  <div className="w-24 h-24 rounded-full mb-5 flex items-center justify-center text-white font-bold text-2xl border-2 border-white/10" style={{ backgroundColor: RED }}>
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
                <h3 className="text-white font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-white/45 text-[13px]">{p.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div className="max-w-3xl mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            {["Austin", "Houston", "Georgetown", "Cedar Park", "Round Rock", "Taylor", "Hutto"].map((c) => (
              <span key={c} className="text-white/40 text-[13px] font-medium tracking-wide">{c}</span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-10 pt-8 border-t border-white/8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white tracking-tight">10–15+</div>
              <div className="text-white/30 text-[11px] uppercase tracking-[0.2em] mt-1 font-semibold">Delegates</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-white/40 text-[13px]">Finalized by</div>
              <div className="text-white font-bold">April 30, 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Central Texas                                                             */
/* ────────────────────────────────────────────────────────────────────────── */
function CentralTexasSection() {
  return (
    <section id="central-texas">
      {/* Full-bleed image */}
      <div className="relative h-[40vh] sm:h-[50vh]">
        <img
          src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1400&q=80"
          alt="Austin, Texas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)" }} />
        <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/50 mb-3">About Central Texas</p>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">A Premier Destination<br />for Asian Capital</h2>
        </div>
      </div>

      {/* Body */}
      <div className="py-20" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-[17px] leading-[1.85] mb-8" style={{ color: "#333" }}>
            Central Texas has solidified its position as a premier destination for Asian capital. Driven by supply chain diversification and geopolitical de-risking as well as a $3-trillion global AI infrastructure supercycle, companies from Taiwan, Korea, Japan, Singapore, India, and Vietnam are aggressively investing in the United States and the region.
          </p>
          <p className="text-[17px] leading-[1.85] mb-14" style={{ color: "#333" }}>
            In Greater Austin this shift is anchored by the $37B Samsung Taylor expansion, which has catalyzed a regional "clustering effect," drawing in hundreds of Tier-1 and 2 Samsung suppliers to the Austin-San Antonio corridor. Recent major investments from Korea's LS Electric in Bastrop (near Tesla Gigafactory) and Taiwanese giants Pegatron and Compal in Georgetown and Taylor further signal growing Asian confidence in the region.
          </p>

          {/* Countries — minimal inline list */}
          <div className="flex flex-wrap items-center justify-center gap-x-1 text-[13px] pt-8 border-t border-gray-200">
            {["Taiwan", "Korea", "Japan", "Singapore", "India", "Vietnam"].map((c, i) => (
              <span key={c}>
                <span className="font-semibold" style={{ color: CHARCOAL }}>{c}</span>
                {i < 5 && <span className="mx-2 text-gray-300">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  About GAACC                                                               */
/* ────────────────────────────────────────────────────────────────────────── */
function GAACCSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <img src={gaaccLogo} alt="GAACC" className="h-14 w-14 object-contain mx-auto mb-8" />
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: RED }}>About GAACC</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10" style={{ color: CHARCOAL }}>Greater Austin Asian Chamber of Commerce</h2>

        <p className="text-[17px] leading-[1.85] mb-6" style={{ color: "#333" }}>
          The Greater Austin Asian Chamber of Commerce (GAACC) engages with members of the Central Texas business community, with governmental entities, and with nonprofit organizations to help drive local economic growth for businesses with ties to Asia and Asian Americans. GAACC works to develop Austin's global business and investment connectivity while promoting regional economic equity for all. To learn more, visit{" "}
          <a href="https://austinasianchamber.org" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: RED }}>
            www.austinasianchamber.org
          </a>.
        </p>
        <p className="text-[17px] leading-[1.85] mb-14" style={{ color: GRAY }}>
          Access Asia is one of many local and international programs, events, workshops and activities presented annually. Over 6,500 attendees joined over 50 GAACC events in 2025 alone.
        </p>

        <div className="inline-flex items-center gap-12 pt-8 border-t border-gray-100">
          <div className="text-center">
            <div className="text-3xl font-bold tracking-tight" style={{ color: CHARCOAL }}>6,500+</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] mt-1" style={{ color: GRAY }}>Attendees in 2025</div>
          </div>
          <div className="h-10 w-px bg-gray-100" />
          <div className="text-center">
            <div className="text-3xl font-bold tracking-tight" style={{ color: CHARCOAL }}>50+</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] mt-1" style={{ color: GRAY }}>Events in 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Contacts                                                                  */
/* ────────────────────────────────────────────────────────────────────────── */
function ContactSection() {
  const contacts = [
    { name: "Mark Duval", phone: "+1-737-733-2073", email: "markduval@austinasianchamber.org", photo: "https://austinasianchamber.org/wp-content/uploads/2025/02/Mark-Duval.webp" },
    { name: "Minh Mac", phone: "+1-757-773-5707", email: "global@100b.co", photo: null },
  ];

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: CHARCOAL }}>
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: RED }}>Contacts</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
          {contacts.map((c) => (
            <div key={c.name} className="flex flex-col items-center py-12 px-8" style={{ backgroundColor: CHARCOAL }}>
              {c.photo ? (
                <img src={c.photo} alt={c.name} className="w-28 h-28 rounded-full object-cover object-top mb-6 border-2 border-white/8" />
              ) : (
                <div className="w-28 h-28 rounded-full mb-6 flex items-center justify-center text-white font-bold text-3xl border-2 border-white/8" style={{ backgroundColor: RED }}>
                  {c.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
              <h3 className="text-white font-bold text-xl mb-5">{c.name}</h3>
              <div className="space-y-2 text-center">
                <a href={`tel:${c.phone.replace(/\D/g, "")}`} className="block text-white/50 hover:text-white transition-colors text-[14px]">
                  {c.phone}
                </a>
                <a href={`mailto:${c.email}`} className="block font-semibold hover:text-white transition-colors text-[14px]" style={{ color: RED }}>
                  {c.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Footer                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="flex items-center justify-center gap-6 mb-8">
          <img src={gaaccLogo} alt="GAACC" className="h-10 w-10 object-contain opacity-60" />
          <div className="h-6 w-px bg-white/10" />
          <div className="bg-white/90 rounded px-3 py-1.5">
            <img src={logo100b} alt="100B" className="h-5 object-contain" style={{ maxWidth: "64px" }} />
          </div>
        </div>
        <p className="text-white/20 text-[11px] tracking-[0.2em] uppercase mb-1">ACCESS ASIA | Access Vietnam 2026</p>
        <p className="text-white/12 text-[11px] mb-4">A program of the Greater Austin Asian Chamber of Commerce</p>
        <a href="https://austinasianchamber.org" target="_blank" rel="noopener noreferrer" className="text-[13px] hover:text-white transition-colors" style={{ color: RED }}>
          www.austinasianchamber.org
        </a>
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-white/10 text-[11px]">© 2026 Greater Austin Asian Chamber of Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                      */
/* ────────────────────────────────────────────────────────────────────────── */
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
