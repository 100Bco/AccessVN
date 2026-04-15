import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "vi";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

const translations = {
  // Navbar
  nav_about: { en: "About", vi: "Giới thiệu" },
  nav_access_vietnam: { en: "Access Vietnam", vi: "Access Vietnam" },
  nav_delegation: { en: "Delegation", vi: "Phái đoàn" },
  nav_central_texas: { en: "Central Texas", vi: "Central Texas" },
  nav_contact: { en: "Contact", vi: "Liên hệ" },
  nav_get_involved: { en: "Itinerary", vi: "Lịch Trình" },
  nav_why_vietnam: { en: "Why Vietnam", vi: "Tại Sao Việt Nam" },

  // Hero
  hero_date: {
    en: "June 6 – June 13, 2026",
    vi: "6 tháng 6 – 13 tháng 6, 2026",
  },
  hero_desc: {
    en: "A historic delegation uniting Austin and Vietnamese business and government leaders to forge lasting economic partnerships between two of the world's most dynamic ecosystems.",
    vi: "Một phái đoàn mang tính lịch sử, quy tụ các nhà lãnh đạo doanh nghiệp và chính quyền từ Austin và Việt Nam, cùng nhau kiến tạo những quan hệ đối tác kinh tế bền vững giữa hai trong số những hệ sinh thái năng động và phát triển nhanh nhất thế giới.",
  },
  hero_countries: { en: "Countries", vi: "Quốc gia" },
  hero_days: { en: "Days", vi: "Ngày" },
  hero_delegates: { en: "Delegates", vi: "Đại biểu" },

  // Intro / GAACC description
  intro_desc: {
    en: "The Greater Austin Asian Chamber of Commerce <strong>(GAACC)</strong> is the leading trusted partner for driving local economic growth and opportunity for businesses with ties to Asia and Asian Americans in Central Texas. In partnership with the City of Austin, GAACC created Access Asia, a program that promotes inbound investment into the Greater Austin region and supports the creation of win-win business collaborations in international investment, trade, technology, innovation, startups, manufacturing, and more.",
    vi: "Greater Austin Asian Chamber of Commerce <strong>(GAACC)</strong> là tổ chức đối tác chiến lược hàng đầu trong việc thúc đẩy tăng trưởng kinh tế địa phương, đồng thời mở ra cơ hội cho các doanh nghiệp có liên kết với châu Á và cộng đồng người Mỹ gốc Á tại Central Texas. Phối hợp cùng City of Austin, GAACC đã khởi xướng chương trình Access Asia — một sáng kiến nhằm thu hút dòng vốn đầu tư vào khu vực Greater Austin, đồng thời thúc đẩy các mối quan hệ hợp tác đôi bên cùng có lợi trong các lĩnh vực: đầu tư quốc tế, thương mại, công nghệ, đổi mới sáng tạo, khởi nghiệp, sản xuất và nhiều ngành trọng điểm khác.",
  },

  // About - What is Access Asia?
  about_title: { en: "What is Access Asia?", vi: "Access Asia là gì?" },
  about_p1: {
    en: "Access Asia is a program dedicated to building strong and seamless economic ties between Austin and Asia. For organizations committed to global growth, Access Asia provides the network, insights, intelligence, matchmaking, and infrastructure required to galvanize business between two of the world's most dynamic, growing, and rapidly converging ecosystems.",
    vi: "Access Asia được xây dựng với sứ mệnh tạo dựng cầu nối kinh tế vững chắc và liền mạch giữa Austin và châu Á. Dành cho các tổ chức hướng tới tăng trưởng toàn cầu, Access Asia cung cấp mạng lưới kết nối chiến lược, thông tin thị trường chuyên sâu, năng lực kết nối đối tác (matchmaking) và hạ tầng hỗ trợ kinh doanh toàn diện — từ đó kích hoạt và thúc đẩy các cơ hội hợp tác giữa hai hệ sinh thái đang tăng trưởng nhanh và hội tụ mạnh mẽ nhất thế giới.",
  },
  about_p2: {
    en: "In June 2026, GAACC will be leading an historic 3 week long trip to Taiwan, Vietnam, and Singapore. The delegation will include senior government officials from the City of Austin, and surrounding cities and counties as well as business leaders from the region - including the City of Houston.",
    vi: "Tháng 6 năm 2026, GAACC sẽ có chuyến hành trình kéo dài 3 tuần đến Taiwan, Việt Nam và Singapore. Phái đoàn quy tụ các lãnh đạo cấp cao từ City of Austin, đại diện các thành phố và quận lân cận, lãnh đạo doanh nghiệp hàng đầu khu vực — bao gồm cả đại diện từ City of Houston.",
  },

  // Access Vietnam section
  av_date: { en: "June 7–13, 2026", vi: "7–13 tháng 6, 2026" },
  av_title: { en: "Access Vietnam", vi: "Access Vietnam" },
  av_subtitle: { en: "Hanoi & Ho Chi Minh City", vi: "Hà Nội & TP. Hồ Chí Minh" },
  av_desc: {
    en: "The visit to Vietnam is a direct result of the deepening business, community and cultural ties between Austin and Vietnam. In fact the Vietnamese population in Austin is one of the fastest growing Asian communities in Greater Austin so this visit reflects our commitment to building on existing ties, deepening mutual understanding, and fostering meaningful international business collaboration.",
    vi: "Chuyến thăm Việt Nam là thành quả trực tiếp từ mối quan hệ ngày càng sâu sắc giữa Austin và Việt Nam trên các phương diện kinh doanh, cộng đồng và văn hoá. Cộng đồng người Việt tại Austin hiện là một trong những cộng đồng người Mỹ gốc Á tăng trưởng nhanh nhất khu vực Greater Austin — và chuyến thăm này thể hiện cam kết mạnh mẽ của chúng tôi trong việc củng cố nền tảng quan hệ hiện có, tăng cường hiểu biết song phương và thúc đẩy hợp tác kinh doanh quốc tế một cách thực chất và bền vững.",
  },
  av_purpose_title: { en: "Purpose of the Visit", vi: "Mục đích chuyến thăm" },
  av_purpose_1: {
    en: "Learn more about Vietnam, her people, business and culture",
    vi: "Tìm hiểu sâu hơn về Việt Nam — đất nước, con người, doanh nghiệp và văn hoá",
  },
  av_purpose_2: {
    en: "Engage with key government organizations in Vietnam and build relationships",
    vi: "Gặp gỡ và thiết lập quan hệ với các cơ quan chính phủ trọng yếu của Việt Nam",
  },
  av_purpose_3: {
    en: "Strengthen diplomatic and economic relationships between Vietnam and the City of Austin",
    vi: "Củng cố quan hệ ngoại giao và kinh tế giữa Việt Nam và City of Austin",
  },
  av_purpose_4: {
    en: "Explore new avenues for trade, investment, and cultural exchange",
    vi: "Mở ra những hướng đi mới trong thương mại, đầu tư và giao lưu văn hoá",
  },
  av_purpose_5: {
    en: "Lay the groundwork for long-term business partnerships that foster collaboration in startups, technology, advanced manufacturing and creative industries",
    vi: "Đặt nền móng cho các quan hệ đối tác dài hạn, thúc đẩy hợp tác trong lĩnh vực khởi nghiệp, công nghệ, sản xuất tiên tiến và các ngành công nghiệp sáng tạo",
  },

  // Delegation
  delegation_title: { en: "The Access Vietnam Delegation", vi: "Phái đoàn Access Vietnam" },
  delegation_desc: {
    en: "The delegation will be led by GAACC President & CEO Mark Duval (former President of AmCham China). Delegation members will include business and government leaders representing the City of Austin, the City of Houston and other Central Texas Cities such as Georgetown, Cedar Park, Round Rock, Taylor and Hutto. A total of at least 10-15 delegates (quite possibly more) are expected to join, with that list to be finalized and confirmed by April 30, 2026.",
    vi: "Phái đoàn được dẫn đầu bởi ông Mark Duval — Chủ tịch & CEO GAACC, nguyên Chủ tịch AmCham China. Thành phần tham gia gồm các nhà lãnh đạo doanh nghiệp và chính quyền đại diện cho City of Austin, City of Houston cùng các đô thị lân cận thuộc vùng trung tâm Texas như Georgetown, Cedar Park, Round Rock, Taylor và Hutto.",
  },
  delegation_leader_title: { en: "GAACC President & CEO", vi: "Chủ tịch & CEO GAACC" },
  delegation_delegates: { en: "Delegates", vi: "Đại biểu" },
  delegation_deadline: { en: "Planning Deadline", vi: "Hạn chót đăng ký" },

  // Central Texas
  ct_label: { en: "Central Texas", vi: "Central Texas" },
  ct_title_1: { en: "A Premier Destination", vi: "Điểm Đến Hàng Đầu" },
  ct_title_2: { en: "for Asian Capital", vi: "Cho Dòng Vốn Châu Á" },
  ct_p1: {
    en: "Central Texas has solidified its position as a premier destination for Asian capital. Driven by supply chain diversification and geopolitical de-risking as well as a $3-trillion global AI infrastructure supercycle, companies from Taiwan, Korea, Japan, Singapore, India, and Vietnam are aggressively investing in the United States and the region.",
    vi: "Central Texas đang khẳng định vị thế là điểm đến chiến lược cho dòng vốn châu Á toàn cầu. Động lực tăng trưởng đến từ xu hướng đa dạng hóa chuỗi cung ứng, chiến lược giảm thiểu rủi ro địa chính trị và chu kỳ đầu tư hạ tầng AI toàn cầu trị giá 3.000 tỷ USD — các tập đoàn từ Taiwan, Hàn Quốc, Nhật Bản, Singapore, Ấn Độ và Việt Nam đang tích cực rót vốn vào Hoa Kỳ, đặc biệt tại Central Texas.",
  },
  ct_p2: {
    en: "In Greater Austin this shift is anchored by the $37B Samsung Taylor expansion, which has catalyzed a regional \"clustering effect,\" drawing in hundreds of Tier-1 and 2 Samsung suppliers to the Austin-San Antonio corridor. Recent major investments from Korea's LS Electric in Bastrop (near Tesla Gigafactory) and Taiwanese giants Pegatron and Compal in Georgetown and Taylor further signal growing Asian confidence in the region.",
    vi: "Tại Greater Austin, làn sóng đầu tư ấy được dẫn dắt bởi dự án mở rộng Samsung Taylor trị giá 37 tỷ USD, tạo hiệu ứng lan toả mạnh mẽ, kéo theo hàng trăm nhà cung cấp cấp 1 và cấp 2 đổ về hành lang Austin–San Antonio. Các khoản đầu tư tiếp theo từ LS Electric (Hàn Quốc) tại Bastrop, cùng hai tập đoàn hàng đầu Taiwan là Pegatron và Compal tại Georgetown và Taylor, càng củng cố niềm tin của châu Á vào tiềm năng của vùng đất này.",
  },
  ct_investing_nations: { en: "Investing Nations", vi: "Các quốc gia đầu tư" },

  // GAACC section
  gaacc_title: {
    en: "Greater Austin Asian Chamber of Commerce",
    vi: "GAACC — Greater Austin Asian Chamber of Commerce",
  },
  gaacc_desc: {
    en: 'The Greater Austin Asian Chamber of Commerce (GAACC) engages with members of the Central Texas business community, with governmental entities, and with nonprofit organizations to help drive local economic growth for businesses with ties to Asia and Asian Americans. GAACC works to develop Austin\'s global business and investment connectivity while promoting regional economic equity for all. To learn more, visit',
    vi: 'GAACC đồng hành cùng cộng đồng doanh nghiệp tại Central Texas, các cơ quan chính phủ và tổ chức phi lợi nhuận nhằm thúc đẩy tăng trưởng kinh tế địa phương, phục vụ các doanh nghiệp có kết nối với châu Á và cộng đồng người Mỹ gốc Á. GAACC không ngừng mở rộng các kết nối kinh doanh và đầu tư quốc tế cho Austin, đồng thời thúc đẩy công bằng kinh tế trong toàn vùng. Tìm hiểu thêm tại',
  },
  gaacc_attendees: { en: "Attendees in 2025", vi: "Người tham dự năm 2025" },
  gaacc_events: { en: "Events in 2025", vi: "Sự kiện năm 2025" },

  // Contact
  contact_title: { en: "Contacts", vi: "Liên hệ" },

  // Footer
  footer_program: {
    en: "A program of the Greater Austin Asian Chamber of Commerce",
    vi: "Chương trình của Greater Austin Asian Chamber of Commerce",
  },
  footer_rights: {
    en: "© 2026 Greater Austin Asian Chamber of Commerce. All rights reserved.",
    vi: "© 2026 Greater Austin Asian Chamber of Commerce. Bảo lưu mọi quyền.",
  },
} as const;

type TranslationKey = keyof typeof translations;

export function useT() {
  const { lang } = useLang();
  return (key: TranslationKey) => translations[key][lang];
}
