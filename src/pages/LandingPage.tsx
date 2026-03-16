import gaaccLogo from "@assets/GAACC-logo-400x400-1-qyhcmbgu36kdcsai231m2gr6xj1pqen1lbcxra8p_1773649259946.webp";
import logo100b from "@assets/100B_-_TACH_NEN_-2_(1)_1773649286116.png";
import { useEffect, useRef } from "react";

const GAACC_RED = "#C41230";
const DARK_CHARCOAL = "#1A1A1A";
const DARK_GRAY = "#2D2D2D";
const MID_GRAY = "#6B7280";
const LIGHT_GRAY = "#F5F5F5";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Access Vietnam", href: "#access-vietnam" },
  { label: "Delegation", href: "#delegation" },
  { label: "Central Texas", href: "#central-texas" },
  { label: "Contact", href: "#contact" },
];

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
        {/* Logos */}
        <a href="#hero" className="flex items-center gap-4">
          <img
            src={gaaccLogo}
            alt="GAACC Logo"
            className="h-10 w-10 object-contain"
          />
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
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-700 hover:text-[#C41230] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="text-white text-sm font-semibold px-5 py-2 rounded transition-colors hover:opacity-90"
          style={{ backgroundColor: GAACC_RED }}
        >
          Get Involved
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80')",
        }}
      />
      <div 
        className="absolute inset-0 z-0 opacity-55"
        style={{ background: `linear-gradient(135deg, ${DARK_CHARCOAL} 0%, ${DARK_GRAY} 100%)` }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: GAACC_RED }} />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            June 7–13, 2026 · Hanoi & Ho Chi Minh City
          </span>
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
          <a
            href="#access-vietnam"
            className="text-white font-semibold px-8 py-3.5 rounded transition-colors text-sm tracking-wide hover:opacity-90"
            style={{ backgroundColor: GAACC_RED }}
          >
            Learn About the Mission
          </a>
          <a
            href="#contact"
            className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded transition-colors text-sm tracking-wide bg-white/5 hover:bg-white/10 backdrop-blur-sm"
          >
            Get Involved
          </a>
        </div>

        {/* Stats */}
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

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center"
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ color: light ? "#F5F5F5" : GAACC_RED }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl sm:text-4xl font-bold leading-tight"
        style={{ color: light ? "#ffffff" : DARK_CHARCOAL }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : ""}`}
          style={{ color: light ? "rgba(255,255,255,0.70)" : MID_GRAY }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: LIGHT_GRAY }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="About the Program" title="What is Access Asia?" align="center" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: DARK_CHARCOAL }}>
              Access Asia is a program dedicated to building strong and seamless economic ties between Austin and Asia. For organizations committed to global growth, Access Asia provides the network, insights, intelligence, matchmaking, and infrastructure required to galvanize business between two of the world's most dynamic, growing, and rapidly converging ecosystems.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: MID_GRAY }}>
              The Greater Austin Asian Chamber of Commerce (GAACC) is the leading trusted partner for driving local economic growth and opportunity for businesses with ties to Asia and Asian Americans in Central Texas. In partnership with the City of Austin, GAACC created Access Asia to promote inbound investment into the Greater Austin region.
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gray-300" />
              <span className="text-sm font-medium whitespace-nowrap uppercase tracking-wider" style={{ color: GAACC_RED }}>In June 2026</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>
            
            <p className="font-medium text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100" style={{ color: DARK_CHARCOAL }}>
              GAACC will lead a historic 3-week trip to Taiwan, Vietnam, and Singapore — including senior government officials from Austin and surrounding cities, and business leaders from the region.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                  ), title: "Global Network", desc: "Connect with top business leaders and government officials across Asia" },
                { icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                  ), title: "Market Intelligence", desc: "Access insights and intelligence on Asia's fastest-growing markets" },
                { icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                  ), title: "Matchmaking", desc: "Curated introductions to key partners in your sector" },
                { icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  ), title: "Infrastructure", desc: "Proven frameworks for establishing business operations in Asia" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm"
                >
                  <div className="mb-3" style={{ color: GAACC_RED }}>{item.icon}</div>
                  <h3 className="font-semibold text-sm mb-2" style={{ color: DARK_CHARCOAL }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: MID_GRAY }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&q=80" 
              alt="Austin Skyline" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-medium text-lg">Austin, Texas</p>
              <p className="text-white/80 text-sm">A globally connected ecosystem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessVietnamSection() {
  const purposes = [
    "Learn more about Vietnam, her people, business and culture",
    "Engage with key government organizations in Vietnam and build relationships",
    "Strengthen diplomatic and economic relationships between Vietnam and the City of Austin",
    "Explore new avenues for trade, investment, and cultural exchange",
    "Lay the groundwork for long-term business partnerships that foster collaboration in startups, technology, advanced manufacturing and creative industries",
  ];

  return (
    <section
      id="access-vietnam"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80" 
              alt="Hanoi, Vietnam" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-3">
                Destination
              </div>
              <h3 className="text-white text-3xl font-bold mb-2">Hanoi & Ho Chi Minh City</h3>
              <p className="text-white/80">Experiencing the dynamic growth of Vietnam</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader 
              eyebrow="June 7–13, 2026" 
              title="Access Vietnam" 
              align="left"
            />
            <div className="h-1 w-16 mb-8 rounded bg-gray-200" />
            
            <p className="text-lg leading-relaxed mb-8" style={{ color: MID_GRAY }}>
              The visit to Vietnam is a direct result of the deepening business, community and cultural ties between Austin and Vietnam. In fact, the Vietnamese population in Austin is one of the fastest growing Asian communities in Greater Austin — so this visit reflects our commitment to building on existing ties, deepening mutual understanding, and fostering meaningful international business collaboration.
            </p>

            <div className="rounded-xl p-8 text-white mb-10 shadow-lg" style={{ backgroundColor: DARK_CHARCOAL }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold tracking-wider border border-white/20">
                  VN
                </div>
                <div>
                  <p className="font-semibold text-lg">Destination</p>
                  <p className="text-white/60">Hanoi & Ho Chi Minh City</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Duration</p>
                  <p className="font-semibold text-lg">7 Days</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Dates</p>
                  <p className="font-semibold text-lg">June 7–13</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6" style={{ color: DARK_CHARCOAL }}>Purpose of the Visit</h3>
            <div className="space-y-4">
              {purposes.map((purpose, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center mt-0.5 shadow-sm"
                    style={{ backgroundColor: GAACC_RED }}
                  >
                    {i + 1}
                  </div>
                  <p className="leading-relaxed text-sm" style={{ color: DARK_CHARCOAL }}>{purpose}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function DelegationSection() {
  const leaders = [
    {
      name: "Mark Duval",
      title: "GAACC President & CEO",
      role: "Delegation Co-Lead",
      desc: "Leading the Access Vietnam delegation as President & CEO of the Greater Austin Asian Chamber of Commerce, driving GAACC's mission of global economic connectivity.",
      photo: "https://austinasianchamber.org/wp-content/uploads/2025/02/Mark-Duval.webp",
      org: "GAACC",
    },
    {
      name: "Minh Mac",
      title: "Co-Founder, 100B",
      role: "Delegation Co-Lead",
      desc: "Co-leading the delegation as a founding partner of 100B, connecting Vietnamese entrepreneurs and businesses with global markets and the Greater Austin ecosystem.",
      photo: null,
      org: "100B",
    },
  ];

  return (
    <section id="delegation" className="relative">
      {/* Banner Image Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560439513-74b037a25d84?w=1200&q=80')",
        }}
      />
      <div 
        className="absolute inset-0 z-0 opacity-95"
        style={{ backgroundColor: DARK_CHARCOAL }}
      />

      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Access Vietnam Delegation"
            title="Distinguished Leaders, Unified Purpose"
            subtitle="The delegation will be co-led by GAACC and 100B, joined by business and government representatives from across Central Texas."
            light
          />

          {/* Lead delegation co-chairs */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {leaders.map((person) => (
              <div
                key={person.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl"
              >
                <div className="flex items-start gap-6 mb-6">
                  {/* Photo */}
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-24 h-24 rounded-full object-cover object-top flex-shrink-0 border-4 border-white/10 shadow-lg"
                    />
                  ) : (
                    <div
                      className="w-24 h-24 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-3xl border-4 border-white/10 shadow-lg"
                      style={{ backgroundColor: GAACC_RED }}
                    >
                      {person.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                  <div className="pt-2">
                    <span
                      className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-3 bg-white/10 text-white/90 border border-white/20"
                    >
                      {person.role}
                    </span>
                    <h3 className="text-white font-bold text-2xl mb-1">{person.name}</h3>
                    <p className="text-sm font-medium" style={{ color: "#F5F5F5" }}>{person.title}</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{person.desc}</p>

                {/* Org logo pill */}
                <div className="pt-5 border-t border-white/10 flex items-center gap-4">
                  {person.org === "GAACC" ? (
                    <>
                      <div className="bg-white p-1.5 rounded flex items-center justify-center">
                        <img src={gaaccLogo} alt="GAACC" className="h-6 w-6 object-contain" />
                      </div>
                      <span className="text-white/60 text-xs font-medium uppercase tracking-wider">Greater Austin Asian Chamber of Commerce</span>
                    </>
                  ) : (
                    <>
                      <div className="bg-white px-2 py-1.5 rounded flex items-center justify-center">
                        <img src={logo100b} alt="100B" className="h-4 object-contain" style={{ maxWidth: "48px" }} />
                      </div>
                      <span className="text-white/60 text-xs font-medium uppercase tracking-wider">100B Global</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional delegation info */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm">
            <h3 className="text-white font-bold text-xl mb-4">Delegation Members</h3>
            <p className="text-white/70 leading-relaxed mb-8 max-w-4xl">
              Delegation members will include business and government leaders representing the <strong className="text-white font-semibold">City of Austin</strong>, the <strong className="text-white font-semibold">City of Houston</strong>, and other Central Texas cities including Georgetown, Cedar Park, Round Rock, Taylor, and Hutto.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["City of Austin", "City of Houston", "Georgetown", "Cedar Park", "Round Rock", "Taylor", "Hutto"].map((city) => (
                <span key={city} className="inline-block bg-white/10 border border-white/10 text-white/90 text-sm px-4 py-2 rounded-md font-medium tracking-wide">
                  {city}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-8 pt-6 border-t border-white/10">
              <div>
                <div className="text-4xl font-bold text-white mb-1">10–15+</div>
                <div className="text-white/50 text-xs uppercase tracking-wider font-semibold">Expected Delegates</div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <div className="text-white/70 text-sm mb-1">Final list confirmed by</div>
                <div className="text-white font-bold text-lg">April 30, 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CentralTexasSection() {
  const investments = [
    {
      company: "Samsung",
      country: "KR",
      countryName: "South Korea",
      detail: "$37B Taylor expansion — catalyzing a regional 'clustering effect' drawing hundreds of Tier-1 and 2 suppliers to the Austin-San Antonio corridor",
    },
    {
      company: "LS Electric",
      country: "KR",
      countryName: "South Korea",
      detail: "Major investment in Bastrop, near Tesla Gigafactory",
    },
    {
      company: "Pegatron",
      country: "TW",
      countryName: "Taiwan",
      detail: "Growing investment in Georgetown and Taylor, signaling rising Asian confidence in the region",
    },
    {
      company: "Compal",
      country: "TW",
      countryName: "Taiwan",
      detail: "Significant presence in Georgetown and Taylor as part of the broader Taiwanese tech cluster",
    },
  ];

  return (
    <section id="central-texas" className="py-24" style={{ backgroundColor: LIGHT_GRAY }}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <SectionHeader
                eyebrow="About Central Texas"
                title="A Premier Destination for Asian Capital"
                align="left"
              />
              <p className="text-lg leading-relaxed mb-8" style={{ color: MID_GRAY }}>
                Central Texas has solidified its position as one of the most attractive markets in the world for Asian investment — driven by supply chain diversification, geopolitical de-risking, and a $3-trillion global AI infrastructure supercycle.
              </p>
              
              <div className="rounded-xl overflow-hidden shadow-lg h-64 relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" 
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium">Advanced Manufacturing</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { code: "TW", country: "Taiwan" },
                  { code: "KR", country: "South Korea" },
                  { code: "JP", country: "Japan" },
                  { code: "SG", country: "Singapore" },
                  { code: "IN", country: "India" },
                  { code: "VN", country: "Vietnam" },
                ].map((c) => (
                  <div key={c.country} className="flex flex-col items-center justify-center gap-1.5 bg-white border border-gray-200 rounded-lg py-3 text-center shadow-sm">
                    <span className="text-xs font-bold text-gray-400 tracking-widest">{c.code}</span>
                    <span className="text-gray-800 font-semibold text-[10px] uppercase tracking-wider">{c.country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold mb-8" style={{ color: DARK_CHARCOAL }}>Major Recent Investments</h3>
            <div className="space-y-6">
              {investments.map((inv) => (
                <div
                  key={inv.company}
                  className="flex flex-col sm:flex-row items-start gap-6 p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center shadow-inner"
                    style={{ backgroundColor: DARK_CHARCOAL }}
                  >
                    <span className="text-white text-xl font-bold tracking-wider">{inv.company.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h4 className="text-xl font-bold" style={{ color: DARK_CHARCOAL }}>{inv.company}</h4>
                      <span
                        className="text-xs px-2.5 py-1 rounded bg-gray-100 text-gray-600 font-bold uppercase tracking-wider border border-gray-200"
                      >
                        {inv.countryName}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{inv.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function GAACCSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-8 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 shadow-sm">
            <img src={gaaccLogo} alt="GAACC" className="h-16 w-16 object-contain" />
          </div>
          <div className="h-16 w-px bg-gray-200" />
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center justify-center h-[98px]">
            <img src={logo100b} alt="100B" className="h-8 object-contain grayscale opacity-80" style={{ maxWidth: "100px" }} />
          </div>
        </div>
        
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: GAACC_RED }}>
          About GAACC
        </p>
        <h2 className="text-4xl font-bold mb-8" style={{ color: DARK_CHARCOAL }}>
          Greater Austin Asian Chamber of Commerce
        </h2>
        <p className="leading-relaxed text-lg mb-6" style={{ color: DARK_CHARCOAL }}>
          The Greater Austin Asian Chamber of Commerce (GAACC) engages with members of the Central Texas business community, with governmental entities, and with nonprofit organizations to help drive local economic growth for businesses with ties to Asia and Asian Americans. GAACC works to develop Austin's global business and investment connectivity while promoting regional economic equity for all.
        </p>
        <p className="leading-relaxed mb-10" style={{ color: MID_GRAY }}>
          Access Asia is one of many local and international programs, events, workshops and activities presented annually. Over 6,500 attendees joined over 50 GAACC events in 2025 alone.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-10">
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-8 text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: DARK_CHARCOAL }}>6,500+</div>
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: MID_GRAY }}>Attendees in 2025</div>
          </div>
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-8 text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: DARK_CHARCOAL }}>50+</div>
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: MID_GRAY }}>Events in 2025</div>
          </div>
        </div>
        
        <a
          href="https://austinasianchamber.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-md transition-all hover:opacity-90 shadow-md text-sm tracking-wide uppercase"
          style={{ backgroundColor: GAACC_RED }}
        >
          Visit austinasianchamber.org
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function ContactSection() {
  const contacts = [
    {
      name: "Mark Duval",
      title: "GAACC President & CEO",
      phone: "+1-737-733-2073",
      email: "markduval@austinasianchamber.org",
      photo: "https://austinasianchamber.org/wp-content/uploads/2025/02/Mark-Duval.webp",
      org: "GAACC",
    },
    {
      name: "Minh Mac",
      title: "Co-Founder, 100B",
      phone: "+1-757-773-5707",
      email: "global@100b.co",
      photo: null,
      org: "100B",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: DARK_CHARCOAL }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Contacts"
          subtitle="For inquiries about joining the Access Vietnam delegation or learning more about the program, please reach out to our team."
          light
        />

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="bg-[#2D2D2D] border border-white/10 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-start gap-5 mb-8">
                {contact.photo ? (
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0 border-2 border-white/10"
                  />
                ) : (
                  <div
                    className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl border-2 border-white/10"
                    style={{ backgroundColor: GAACC_RED }}
                  >
                    {contact.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
                <div className="pt-2">
                  <h3 className="text-white font-bold text-xl mb-1">{contact.name}</h3>
                  <p className="text-sm font-medium text-white/60 mb-2">{contact.title}</p>
                  <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/20">
                    {contact.org}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-white/10">
                <a
                  href={`tel:${contact.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium tracking-wide">{contact.phone}</span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium tracking-wide break-all">{contact.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center gap-6 mb-10">
          <div className="flex items-center justify-center gap-10">
            <img src={gaaccLogo} alt="GAACC" className="h-16 w-16 object-contain" />
            <div className="h-12 w-px bg-white/15" />
            <div className="bg-white rounded-lg px-4 py-2.5 flex items-center">
              <img src={logo100b} alt="100B" className="h-8 object-contain" style={{ maxWidth: "100px" }} />
            </div>
          </div>
        </div>
        <p className="text-white/30 text-xs mb-3 tracking-widest uppercase">
          ACCESS Asia | Access Vietnam 2026
        </p>
        <p className="text-white/20 text-xs mb-5">
          A program of the Greater Austin Asian Chamber of Commerce
        </p>
        <a
          href="https://austinasianchamber.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-white transition-colors"
          style={{ color: GAACC_RED }}
        >
          www.austinasianchamber.org
        </a>
        <div className="mt-10 pt-8 border-t border-white/8">
          <p className="text-white/15 text-xs">
            © 2026 Greater Austin Asian Chamber of Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen text-gray-900 bg-white font-sans selection:bg-[#C41230] selection:text-white">
      <Navbar />
      <Hero />
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
