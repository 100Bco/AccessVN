import gaaccLogo from "@assets/GAACC-logo-400x400-1-qyhcmbgu36kdcsai231m2gr6xj1pqen1lbcxra8p_1773649259946.webp";
import logo100b from "@assets/100B_-_TACH_NEN_-2_(1)_1773649286116.png";
import { useEffect, useRef, useState } from "react";

const GAACC_RED = "#C41230";
const DARK_CHARCOAL = "#1A1A1A";
const MID_GRAY = "#6B7280";
const LIGHT_GRAY = "#F5F5F5";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Access Vietnam", href: "#access-vietnam" },
  { label: "Delegation", href: "#delegation" },
  { label: "Central Texas", href: "#central-texas" },
  { label: "Contact", href: "#contact" },
];

/* ─── Navbar ─── */
function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add("shadow-md");
          navRef.current.style.backgroundColor = "rgba(255,255,255,0.98)";
        } else {
          navRef.current.classList.remove("shadow-md");
          navRef.current.style.backgroundColor = "rgba(255,255,255,0.92)";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200 transition-all duration-300"
      style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-4">
          <img src={gaaccLogo} alt="GAACC Logo" className="h-10 w-10 object-contain" />
          <div className="hidden sm:block h-7 w-px bg-gray-300" />
          <img
            src={logo100b}
            alt="100B Logo"
            className="h-7 object-contain hidden sm:block"
            style={{ filter: "grayscale(100%) contrast(0) brightness(0)", maxWidth: "80px" }}
          />
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-gray-700 hover:text-[#C41230] font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="text-white text-sm font-semibold px-5 py-2 rounded transition-colors hover:opacity-90" style={{ backgroundColor: GAACC_RED }}>
          Get Involved
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 z-0 opacity-65" style={{ background: `linear-gradient(135deg, ${DARK_CHARCOAL} 0%, #2D2D2D 100%)` }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: GAACC_RED }} />
          <span className="text-white/90 text-sm font-medium tracking-wide">June 7–13, 2026 · Hanoi & Ho Chi Minh City</span>
        </div>

        <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 text-white/80">
          Greater Austin Asian Chamber of Commerce & 100B
        </p>

        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          ACCESS Asia
          <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2" style={{ color: GAACC_RED }}>
            Access Vietnam 2026
          </span>
        </h1>

        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          A historic delegation uniting Austin and Vietnamese business and government leaders to forge lasting economic partnerships between two of the world's most dynamic ecosystems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#access-vietnam" className="text-white font-semibold px-8 py-3.5 rounded transition-colors text-sm tracking-wide hover:opacity-90" style={{ backgroundColor: GAACC_RED }}>
            Learn About the Mission
          </a>
          <a href="#contact" className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded transition-colors text-sm tracking-wide bg-white/5 hover:bg-white/10 backdrop-blur-sm">
            Get Involved
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/20 pt-10 pb-24 max-w-2xl mx-auto">
          {[
            { value: "3", label: "Countries" },
            { value: "21", label: "Days" },
            { value: "15+", label: "Delegates" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Intro Section (GAACC + Access Asia intro) ─── */
function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-10">
          <img src={gaaccLogo} alt="GAACC" className="h-20 w-20 object-contain" />
        </div>
        <p className="text-lg sm:text-xl leading-relaxed text-center" style={{ color: DARK_CHARCOAL }}>
          The Greater Austin Asian Chamber of Commerce <strong>(GAACC)</strong> is the leading trusted partner for driving local economic growth and opportunity for businesses with ties to Asia and Asian Americans in Central Texas. In partnership with the City of Austin, GAACC created Access Asia, a program that promotes inbound investment into the Greater Austin region and supports the creation of win-win business collaborations in international investment, trade, technology, innovation, startups, manufacturing, and more.
        </p>
      </div>
    </section>
  );
}

/* ─── Section Header helper ─── */
function SectionHeader({
  eyebrow, title, subtitle, light = false, align = "center",
}: {
  eyebrow?: string; title: string; subtitle?: string; light?: boolean; align?: "left" | "center";
}) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: light ? "#F5F5F5" : GAACC_RED }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: light ? "#ffffff" : DARK_CHARCOAL }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${align === "center" ? "max-w-3xl mx-auto" : ""}`} style={{ color: light ? "rgba(255,255,255,0.70)" : MID_GRAY }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── What is Access Asia? ─── */
function AboutSection() {
  const destinations = [
    { name: "Taipei", country: "Taiwan", image: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=600&q=80" },
    { name: "Hanoi", country: "Vietnam", image: "https://images.unsplash.com/photo-1599708153386-62bf3f035c78?w=600&q=80" },
    { name: "Singapore", country: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80" },
  ];

  return (
    <section id="about" className="py-24" style={{ backgroundColor: LIGHT_GRAY }}>
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="About the Program" title="What is Access Asia?" />

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed mb-6" style={{ color: DARK_CHARCOAL }}>
            Access Asia is a program dedicated to building strong and seamless economic ties between Austin and Asia. For organizations committed to global growth, Access Asia provides the network, insights, intelligence, matchmaking, and infrastructure required to galvanize business between two of the world's most dynamic, growing, and rapidly converging ecosystems.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: DARK_CHARCOAL }}>
            In June 2026, GAACC will be leading an historic 3 week long trip to Taiwan, Vietnam, and Singapore. The delegation will include senior government officials from the City of Austin, and surrounding cities and counties as well as business leaders from the region - including the City of Houston.
          </p>
        </div>

        {/* Destination strip — editorial magazine layout */}
        <div className="grid grid-cols-12 gap-3 h-[420px]">
          {/* Taiwan — tall left column */}
          <div className="col-span-4 relative rounded-lg overflow-hidden group">
            <img src={destinations[0].image} alt={destinations[0].name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="w-8 h-px mb-3" style={{ backgroundColor: GAACC_RED }} />
              <p className="text-white font-bold text-2xl leading-tight">{destinations[0].name}</p>
              <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mt-1">{destinations[0].country}</p>
            </div>
          </div>

          {/* Vietnam — large center */}
          <div className="col-span-5 relative rounded-lg overflow-hidden group">
            <img src={destinations[1].image} alt={destinations[1].name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="w-8 h-px mb-3" style={{ backgroundColor: GAACC_RED }} />
              <p className="text-white font-bold text-2xl leading-tight">{destinations[1].name}</p>
              <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mt-1">{destinations[1].country}</p>
            </div>
          </div>

          {/* Singapore — right column */}
          <div className="col-span-3 relative rounded-lg overflow-hidden group">
            <img src={destinations[2].image} alt={destinations[2].name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="w-8 h-px mb-3" style={{ backgroundColor: GAACC_RED }} />
              <p className="text-white font-bold text-2xl leading-tight">{destinations[2].name}</p>
              <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mt-1">{destinations[2].country}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Access Vietnam ─── */
function AccessVietnamSection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1200&q=80", caption: "Hanoi, Vietnam" },
    { src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80", caption: "Ho Chi Minh City" },
    { src: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80", caption: "Vietnamese Culture & Heritage" },
    { src: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=1200&q=80", caption: "Business & Innovation" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const purposes = [
    "Learn more about Vietnam, her people, business and culture",
    "Engage with key government organizations in Vietnam and build relationships",
    "Strengthen diplomatic and economic relationships between Vietnam and the City of Austin",
    "Explore new avenues for trade, investment, and cultural exchange",
    "Lay the groundwork for long-term business partnerships that foster collaboration in startups, technology, advanced manufacturing and creative industries",
  ];

  return (
    <section id="access-vietnam" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="June 7–13, 2026" title="Access Vietnam" />

        {/* Carousel */}
        <div className="relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl mb-14">
          {images.map((img, i) => (
            <div key={i} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === current ? 1 : 0 }}>
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-semibold text-lg">{img.caption}</p>
              </div>
            </div>
          ))}
          {/* Dots */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{ backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.4)" }}
              />
            ))}
          </div>
        </div>

        {/* Body text */}
        <div className="max-w-4xl mx-auto mb-14">
          <p className="text-lg leading-relaxed" style={{ color: DARK_CHARCOAL }}>
            The visit to Vietnam is a direct result of the deepening business, community and cultural ties between Austin and Vietnam. In fact the Vietnamese population in Austin is one of the fastest growing Asian communities in Greater Austin so this visit reflects our commitment to building on existing ties, deepening mutual understanding, and fostering meaningful international business collaboration.
          </p>
        </div>

        {/* Purpose of the Visit — horizontal cards */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold mb-8 text-center" style={{ color: DARK_CHARCOAL }}>Purpose of the Visit</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {purposes.map((purpose, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex-shrink-0 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5" style={{ backgroundColor: GAACC_RED }}>
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: DARK_CHARCOAL }}>{purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── The Access Vietnam Delegation ─── */
function DelegationSection() {
  return (
    <section id="delegation" className="relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560439513-74b037a25d84?w=1200&q=80')" }}
      />
      <div className="absolute inset-0 z-0 opacity-95" style={{ backgroundColor: DARK_CHARCOAL }} />

      <div className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader eyebrow="The Delegation" title="The Access Vietnam Delegation" light />

          <div className="max-w-4xl mx-auto">
            <p className="text-white/80 text-lg leading-relaxed mb-10 text-center">
              The delegation will be led by GAACC Chairman Minh Tran and GAACC President & CEO Mark Duval. Delegation members will include business and government leaders representing the City of Austin, the City of Houston and other Central Texas Cities such as Georgetown, Cedar Park, Round Rock, Taylor and Hutto. A total of at least 10-15 delegates (quite possibly more) are expected to join, with that list to be finalized and confirmed by April 30, 2026.
            </p>
          </div>

          {/* Leaders */}
          <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
            {[
              {
                name: "Minh Tran",
                title: "GAACC Chairman",
                role: "Delegation Lead",
                photo: null,
                org: "GAACC",
              },
              {
                name: "Mark Duval",
                title: "GAACC President & CEO",
                role: "Delegation Lead",
                photo: "https://austinasianchamber.org/wp-content/uploads/2025/02/Mark-Duval.webp",
                org: "GAACC",
              },
            ].map((person) => (
              <div key={person.name} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md flex items-center gap-5">
                {person.photo ? (
                  <img src={person.photo} alt={person.name} className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0 border-2 border-white/10" />
                ) : (
                  <div className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl border-2 border-white/10" style={{ backgroundColor: GAACC_RED }}>
                    {person.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
                <div>
                  <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/15 mb-2">
                    {person.role}
                  </span>
                  <h3 className="text-white font-bold text-xl">{person.name}</h3>
                  <p className="text-white/60 text-sm">{person.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cities & stats */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["City of Austin", "City of Houston", "Georgetown", "Cedar Park", "Round Rock", "Taylor", "Hutto"].map((city) => (
                <span key={city} className="inline-block bg-white/10 border border-white/10 text-white/90 text-sm px-4 py-2 rounded-md font-medium">
                  {city}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10–15+</div>
                <div className="text-white/50 text-xs uppercase tracking-wider font-semibold mt-1">Expected Delegates</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="text-center">
                <div className="text-white/60 text-sm">Confirmed by</div>
                <div className="text-white font-bold text-lg">April 30, 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About Central Texas ─── */
function CentralTexasSection() {
  return (
    <section id="central-texas" className="py-24" style={{ backgroundColor: LIGHT_GRAY }}>
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="About Central Texas" title="A Premier Destination for Asian Capital" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: DARK_CHARCOAL }}>
              Central Texas has solidified its position as a premier destination for Asian capital. Driven by supply chain diversification and geopolitical de-risking as well as a $3-trillion global AI infrastructure supercycle, companies from Taiwan, Korea, Japan, Singapore, India, and Vietnam are aggressively investing in the United States and the region.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: DARK_CHARCOAL }}>
              In Greater Austin this shift is anchored by the $37B Samsung Taylor expansion, which has catalyzed a regional "clustering effect," drawing in hundreds of Tier-1 and 2 Samsung suppliers to the Austin-San Antonio corridor. Recent major investments from Korea's LS Electric in Bastrop (near Tesla Gigafactory) and Taiwanese giants Pegatron and Compal in Georgetown and Taylor further signal growing Asian confidence in the region.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                alt="Advanced Manufacturing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Advanced Manufacturing & Technology</p>
              </div>
            </div>
            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&q=80"
                alt="Austin Texas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Austin, Texas — Global Innovation Hub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investing countries */}
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-3">
          {[
            { code: "TW", name: "Taiwan" },
            { code: "KR", name: "Korea" },
            { code: "JP", name: "Japan" },
            { code: "SG", name: "Singapore" },
            { code: "IN", name: "India" },
            { code: "VN", name: "Vietnam" },
          ].map((c) => (
            <div key={c.code} className="flex flex-col items-center gap-1.5 bg-white border border-gray-200 rounded-lg py-3 shadow-sm">
              <span className="text-xs font-bold text-gray-400 tracking-widest">{c.code}</span>
              <span className="text-gray-800 font-semibold text-[10px] uppercase tracking-wider">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About GAACC ─── */
function GAACCSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 shadow-sm">
            <img src={gaaccLogo} alt="GAACC" className="h-14 w-14 object-contain" />
          </div>
        </div>

        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: GAACC_RED }}>About GAACC</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: DARK_CHARCOAL }}>Greater Austin Asian Chamber of Commerce</h2>

        <p className="leading-relaxed text-lg mb-6" style={{ color: DARK_CHARCOAL }}>
          The Greater Austin Asian Chamber of Commerce (GAACC) engages with members of the Central Texas business community, with governmental entities, and with nonprofit organizations to help drive local economic growth for businesses with ties to Asia and Asian Americans. GAACC works to develop Austin's global business and investment connectivity while promoting regional economic equity for all. To learn more, visit{" "}
          <a href="https://austinasianchamber.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: GAACC_RED }}>
            www.austinasianchamber.org
          </a>.
        </p>
        <p className="leading-relaxed mb-10" style={{ color: MID_GRAY }}>
          Access Asia is one of many local and international programs, events, workshops and activities presented annually. Over 6,500 attendees joined over 50 GAACC events in 2025 alone.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-8 text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: DARK_CHARCOAL }}>6,500+</div>
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: MID_GRAY }}>Attendees in 2025</div>
          </div>
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-8 text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: DARK_CHARCOAL }}>50+</div>
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: MID_GRAY }}>Events in 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contacts ─── */
function ContactSection() {
  const contacts = [
    {
      name: "Mark Duval",
      phone: "+1-737-733-2073",
      email: "markduval@austinasianchamber.org",
      photo: "https://austinasianchamber.org/wp-content/uploads/2025/02/Mark-Duval.webp",
    },
    {
      name: "Minh Mac",
      phone: "+1-757-773-5707",
      email: "global@100b.co",
      photo: null,
    },
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: DARK_CHARCOAL }}>
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center" style={{ color: GAACC_RED }}>
          Contacts
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact) => (
            <div key={contact.name} className="text-center">
              {/* Large photo */}
              {contact.photo ? (
                <img
                  src={contact.photo}
                  alt={contact.name}
                  className="w-32 h-32 rounded-full object-cover object-top mx-auto mb-5 border-4 border-white/10 shadow-lg"
                />
              ) : (
                <div
                  className="w-32 h-32 rounded-full mx-auto mb-5 flex items-center justify-center text-white font-bold text-4xl border-4 border-white/10 shadow-lg"
                  style={{ backgroundColor: GAACC_RED }}
                >
                  {contact.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
              <h3 className="text-white font-bold text-xl mb-4">{contact.name}</h3>
              <div className="space-y-2">
                <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="block text-white/70 hover:text-white transition-colors text-sm font-medium">
                  {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="block hover:text-white transition-colors text-sm font-semibold" style={{ color: GAACC_RED }}>
                  {contact.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-8 mb-8">
          <img src={gaaccLogo} alt="GAACC" className="h-12 w-12 object-contain" />
          <div className="h-8 w-px bg-white/15" />
          <div className="bg-white rounded-lg px-3 py-2 flex items-center">
            <img src={logo100b} alt="100B" className="h-6 object-contain" style={{ maxWidth: "80px" }} />
          </div>
        </div>
        <p className="text-white/30 text-xs mb-2 tracking-widest uppercase">ACCESS Asia | Access Vietnam 2026</p>
        <p className="text-white/20 text-xs mb-4">A program of the Greater Austin Asian Chamber of Commerce</p>
        <a href="https://austinasianchamber.org" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors" style={{ color: GAACC_RED }}>
          www.austinasianchamber.org
        </a>
        <div className="mt-8 pt-6 border-t border-white/8">
          <p className="text-white/15 text-xs">© 2026 Greater Austin Asian Chamber of Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
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
