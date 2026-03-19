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
  nav_get_involved: { en: "Get Involved", vi: "Tham gia ngay" },

  // Hero
  hero_subtitle: {
    en: "May 30 – June 19, 2026 · Taipei · Hanoi · HCM City · Singapore",
    vi: "30 tháng 5 – 19 tháng 6, 2026 · Đài Bắc · Hà Nội · TP. Hồ Chí Minh · Singapore",
  },
  hero_desc: {
    en: "A historic delegation uniting Austin and Vietnamese business and government leaders to forge lasting economic partnerships between two of the world's most dynamic ecosystems.",
    vi: "Phái đoàn lịch sử kết nối các nhà lãnh đạo doanh nghiệp và chính quyền Austin với Việt Nam, kiến tạo quan hệ đối tác kinh tế bền vững giữa hai hệ sinh thái năng động bậc nhất thế giới.",
  },
  hero_countries: { en: "Countries", vi: "Quốc gia" },
  hero_days: { en: "Days", vi: "Ngày" },
  hero_delegates: { en: "Delegates", vi: "Đại biểu" },

  // Intro / GAACC description
  intro_desc: {
    en: "The Greater Austin Asian Chamber of Commerce <strong>(GAACC)</strong> is the leading trusted partner for driving local economic growth and opportunity for businesses with ties to Asia and Asian Americans in Central Texas. In partnership with the City of Austin, GAACC created Access Asia, a program that promotes inbound investment into the Greater Austin region and supports the creation of win-win business collaborations in international investment, trade, technology, innovation, startups, manufacturing, and more.",
    vi: "Phòng Thương mại Châu Á Vùng Austin Mở rộng <strong>(GAACC)</strong> là đối tác uy tín hàng đầu trong việc thúc đẩy tăng trưởng kinh tế và cơ hội cho các doanh nghiệp có liên kết với châu Á và cộng đồng người Mỹ gốc Á tại Central Texas. Phối hợp cùng Thành phố Austin, GAACC đã sáng lập chương trình Access Asia — chương trình xúc tiến đầu tư vào khu vực Austin mở rộng và hỗ trợ xây dựng các hợp tác kinh doanh đôi bên cùng có lợi trong lĩnh vực đầu tư quốc tế, thương mại, công nghệ, đổi mới sáng tạo, khởi nghiệp, sản xuất và nhiều hơn nữa.",
  },

  // About - What is Access Asia?
  about_title: { en: "What is Access Asia?", vi: "Access Asia là gì?" },
  about_p1: {
    en: "Access Asia is a program dedicated to building strong and seamless economic ties between Austin and Asia. For organizations committed to global growth, Access Asia provides the network, insights, intelligence, matchmaking, and infrastructure required to galvanize business between two of the world's most dynamic, growing, and rapidly converging ecosystems.",
    vi: "Access Asia là chương trình chuyên biệt nhằm xây dựng mối liên kết kinh tế vững chắc và liền mạch giữa Austin và châu Á. Đối với các tổ chức cam kết phát triển toàn cầu, Access Asia cung cấp mạng lưới quan hệ, thông tin chuyên sâu, kết nối đối tác và hạ tầng cần thiết để thúc đẩy hoạt động kinh doanh giữa hai hệ sinh thái năng động và hội tụ nhanh chóng bậc nhất thế giới.",
  },
  about_p2: {
    en: "In June 2026, GAACC will be leading an historic 3 week long trip to Taiwan, Vietnam, and Singapore. The delegation will include senior government officials from the City of Austin, and surrounding cities and counties as well as business leaders from the region - including the City of Houston.",
    vi: "Vào tháng 6 năm 2026, GAACC sẽ dẫn đầu một chuyến công du lịch sử kéo dài 3 tuần đến Đài Loan, Việt Nam và Singapore. Phái đoàn sẽ bao gồm các quan chức cấp cao từ Thành phố Austin, các thành phố và quận lân cận, cùng các nhà lãnh đạo doanh nghiệp trong khu vực — bao gồm cả Thành phố Houston.",
  },

  // Access Vietnam section
  av_date: { en: "June 7–13, 2026", vi: "7–13 tháng 6, 2026" },
  av_title: { en: "Access Vietnam", vi: "Access Vietnam" },
  av_subtitle: { en: "Hanoi & Ho Chi Minh City", vi: "Hà Nội & TP. Hồ Chí Minh" },
  av_desc: {
    en: "The visit to Vietnam is a direct result of the deepening business, community and cultural ties between Austin and Vietnam. In fact the Vietnamese population in Austin is one of the fastest growing Asian communities in Greater Austin so this visit reflects our commitment to building on existing ties, deepening mutual understanding, and fostering meaningful international business collaboration.",
    vi: "Chuyến thăm Việt Nam là kết quả trực tiếp từ mối quan hệ kinh doanh, cộng đồng và văn hóa ngày càng sâu sắc giữa Austin và Việt Nam. Cộng đồng người Việt tại Austin là một trong những cộng đồng châu Á phát triển nhanh nhất tại Greater Austin — chuyến thăm này thể hiện cam kết của chúng tôi trong việc củng cố các mối quan hệ hiện có, tăng cường hiểu biết lẫn nhau và thúc đẩy hợp tác kinh doanh quốc tế có ý nghĩa thiết thực.",
  },
  av_purpose_title: { en: "Purpose of the Visit", vi: "Mục đích chuyến thăm" },
  av_purpose_1: {
    en: "Learn more about Vietnam, her people, business and culture",
    vi: "Tìm hiểu sâu hơn về Việt Nam — con người, doanh nghiệp và văn hóa",
  },
  av_purpose_2: {
    en: "Engage with key government organizations in Vietnam and build relationships",
    vi: "Kết nối với các cơ quan chính phủ trọng yếu tại Việt Nam và xây dựng quan hệ đối tác",
  },
  av_purpose_3: {
    en: "Strengthen diplomatic and economic relationships between Vietnam and the City of Austin",
    vi: "Tăng cường quan hệ ngoại giao và kinh tế giữa Việt Nam và Thành phố Austin",
  },
  av_purpose_4: {
    en: "Explore new avenues for trade, investment, and cultural exchange",
    vi: "Khám phá các cơ hội mới trong thương mại, đầu tư và giao lưu văn hóa",
  },
  av_purpose_5: {
    en: "Lay the groundwork for long-term business partnerships that foster collaboration in startups, technology, advanced manufacturing and creative industries",
    vi: "Đặt nền móng cho các quan hệ đối tác kinh doanh dài hạn, thúc đẩy hợp tác trong lĩnh vực khởi nghiệp, công nghệ, sản xuất tiên tiến và công nghiệp sáng tạo",
  },

  // Delegation
  delegation_title: { en: "The Access Vietnam Delegation", vi: "Phái đoàn Access Vietnam" },
  delegation_desc: {
    en: "The delegation will be led by GAACC President & CEO Mark Duval (former President of AmCham China). Delegation members will include business and government leaders representing the City of Austin, the City of Houston and other Central Texas Cities such as Georgetown, Cedar Park, Round Rock, Taylor and Hutto. A total of at least 10-15 delegates (quite possibly more) are expected to join, with that list to be finalized and confirmed by April 30, 2026.",
    vi: "Phái đoàn sẽ do Chủ tịch & CEO GAACC Mark Duval (cựu Chủ tịch AmCham Trung Quốc) dẫn đầu. Thành viên phái đoàn bao gồm các nhà lãnh đạo doanh nghiệp và chính quyền đại diện cho Thành phố Austin, Thành phố Houston và các thành phố khác tại Central Texas như Georgetown, Cedar Park, Round Rock, Taylor và Hutto. Dự kiến sẽ có ít nhất 10–15 đại biểu (có thể nhiều hơn) tham gia, danh sách sẽ được hoàn thiện và xác nhận trước ngày 30 tháng 4 năm 2026.",
  },
  delegation_leader_title: { en: "GAACC President & CEO", vi: "Chủ tịch & CEO GAACC" },
  delegation_delegates: { en: "Delegates", vi: "Đại biểu" },
  delegation_deadline: { en: "Planning Deadline", vi: "Hạn chót đăng ký" },

  // Central Texas
  ct_label: { en: "Central Texas", vi: "Central Texas" },
  ct_title_1: { en: "A Premier Destination", vi: "Điểm đến hàng đầu" },
  ct_title_2: { en: "for Asian Capital", vi: "cho nguồn vốn châu Á" },
  ct_p1: {
    en: "Central Texas has solidified its position as a premier destination for Asian capital. Driven by supply chain diversification and geopolitical de-risking as well as a $3-trillion global AI infrastructure supercycle, companies from Taiwan, Korea, Japan, Singapore, India, and Vietnam are aggressively investing in the United States and the region.",
    vi: "Central Texas đã khẳng định vị thế là điểm đến hàng đầu cho nguồn vốn đầu tư từ châu Á. Được thúc đẩy bởi xu hướng đa dạng hóa chuỗi cung ứng, giảm thiểu rủi ro địa chính trị cùng siêu chu kỳ hạ tầng AI trị giá 3 nghìn tỷ USD toàn cầu, các doanh nghiệp từ Đài Loan, Hàn Quốc, Nhật Bản, Singapore, Ấn Độ và Việt Nam đang đầu tư mạnh mẽ vào Hoa Kỳ và khu vực này.",
  },
  ct_p2: {
    en: "In Greater Austin this shift is anchored by the $37B Samsung Taylor expansion, which has catalyzed a regional \"clustering effect,\" drawing in hundreds of Tier-1 and 2 Samsung suppliers to the Austin-San Antonio corridor. Recent major investments from Korea's LS Electric in Bastrop (near Tesla Gigafactory) and Taiwanese giants Pegatron and Compal in Georgetown and Taylor further signal growing Asian confidence in the region.",
    vi: "Tại Greater Austin, sự chuyển dịch này được neo vào dự án mở rộng Samsung Taylor trị giá 37 tỷ USD, tạo ra \"hiệu ứng cụm\" khu vực, thu hút hàng trăm nhà cung cấp cấp 1 và cấp 2 của Samsung đến hành lang Austin–San Antonio. Các khoản đầu tư lớn gần đây từ LS Electric (Hàn Quốc) tại Bastrop (gần Tesla Gigafactory) cùng các tập đoàn Đài Loan Pegatron và Compal tại Georgetown và Taylor tiếp tục khẳng định niềm tin ngày càng lớn của nhà đầu tư châu Á vào khu vực.",
  },
  ct_investing_nations: { en: "Investing Nations", vi: "Các quốc gia đầu tư" },

  // GAACC section
  gaacc_title: {
    en: "Greater Austin Asian Chamber of Commerce",
    vi: "Phòng Thương mại Châu Á Vùng Austin Mở rộng",
  },
  gaacc_desc: {
    en: 'The Greater Austin Asian Chamber of Commerce (GAACC) engages with members of the Central Texas business community, with governmental entities, and with nonprofit organizations to help drive local economic growth for businesses with ties to Asia and Asian Americans. GAACC works to develop Austin\'s global business and investment connectivity while promoting regional economic equity for all. To learn more, visit',
    vi: 'Phòng Thương mại Châu Á Vùng Austin Mở rộng (GAACC) hợp tác với cộng đồng doanh nghiệp Central Texas, các cơ quan chính phủ và tổ chức phi lợi nhuận nhằm thúc đẩy tăng trưởng kinh tế cho các doanh nghiệp có liên kết với châu Á và cộng đồng người Mỹ gốc Á. GAACC nỗ lực phát triển kết nối đầu tư và kinh doanh toàn cầu của Austin, đồng thời thúc đẩy công bằng kinh tế khu vực cho tất cả mọi người. Tìm hiểu thêm tại',
  },
  gaacc_attendees: { en: "Attendees in 2025", vi: "Người tham dự năm 2025" },
  gaacc_events: { en: "Events in 2025", vi: "Sự kiện năm 2025" },

  // Contact
  contact_title: { en: "Contacts", vi: "Liên hệ" },

  // Footer
  footer_program: {
    en: "A program of the Greater Austin Asian Chamber of Commerce",
    vi: "Chương trình của Phòng Thương mại Châu Á Vùng Austin Mở rộng",
  },
  footer_rights: {
    en: "© 2026 Greater Austin Asian Chamber of Commerce. All rights reserved.",
    vi: "© 2026 Phòng Thương mại Châu Á Vùng Austin Mở rộng. Bảo lưu mọi quyền.",
  },
} as const;

type TranslationKey = keyof typeof translations;

export function useT() {
  const { lang } = useLang();
  return (key: TranslationKey) => translations[key][lang];
}
