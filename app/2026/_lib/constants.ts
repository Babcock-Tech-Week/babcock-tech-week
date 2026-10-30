export const IMAGES = {
  logo: { src: "/logo.svg", width: 100, height: 100 },
  heroBg: { src: "/images/hero-bg.jpeg", alt: "Tech Week Conference" },
  about: { src: "/images/about.png", alt: "Attendees at Tech Week" },
  venue: { src: "/images/venue.png", alt: "Tech Week Venue" },
  speaker1: { src: "/images/speaker-1.png", alt: "Speaker" },
  stats1: { src: "/images/stats-1.png", alt: "Conference hall crowd" },
  stats2: { src: "/images/stats-2.png", alt: "Speakers on stage" },
  stats3: { src: "/images/stats-3.png", alt: "Exhibition floor" },
  stats4: { src: "/images/stats-4.png", alt: "Audience participation" },
};

export type Sponsor = {
  name: string;
  logo?: string;
  bgClass?: string;
  blend?: boolean;
  paddingClass?: string;
  url?: string;
};

export type Tier = {
  name: string;
  icon: string;
  badgeColor: string;
  cardBg: string;
  cardBorder: string;
  sponsors: Sponsor[];
  cols: string;
  cardSize: string;
  logoSize: string;
  divider?: boolean;
};

export type Partner = {
  name: string;
  description: string;
  logo: string;
  bgClass?: string;
  blend?: boolean;
  paddingClass?: string;
  url?: string;
};

export const PARTNERS: Partner[] = [
  {
    name: "BUCC",
    description: "Babcock University Computer Club",
    logo: "/images/partners/BUCC-logo-original.png",
    blend: true,
    paddingClass: "p-0 md:p-0",
    url: "https://wearebucc.com",
  },
  {
    name: "GDG",
    description: "Google Developer Groups",
    logo: "/images/partners/GDG-On-Campus-Babcock-logo.png",
    paddingClass: "p-0 md:p-0",
    url: "https://www.gdgbabcock.com",
  },
  {
    name: "IEEE",
    description: "Institute of Electrical & Electronics Engineers",
    logo: "/images/partners/ieee.webp",
    paddingClass: "p-0",
    url: "https://www.instagram.com/ieee.bu/",
  },
];

export const SPONSOR_TIERS: Tier[] = [
  {
    name: "HEADLINE SPONSOR",
    icon: "",
    badgeColor:
      "bg-gradient-to-b from-gray-200 to-gray-300 text-black shadow-inner",
    cardBg: "bg-white",
    cardBorder: "border border-stone-300 shadow-sm",
    sponsors: [
      {
        name: "Paystack",
        logo: "/images/sponsors/headline/paystack.svg",
        blend: true,
        paddingClass: "p-6 md:p-10",
        url: "https://paystack.com",
      },
    ],
    cols: "flex flex-wrap justify-center w-full",
    cardSize: "w-full md:w-[480px] h-28 md:h-40",
    logoSize: "text-3xl md:text-4xl",
  },
  {
    name: "GOLD SPONSORS",
    icon: "",
    badgeColor: "bg-[#ffa600] text-black shadow-sm",
    cardBg: "bg-[#fffdf8]",
    cardBorder: "border border-[#ffe3a1] shadow-sm",
    sponsors: [
      {
        name: "MTN",
        logo: "/images/sponsors/gold/mtn.svg",
        blend: true,
        paddingClass: "p-5 md:p-8",
        url: "https://www.mtn.com",
      },
    ],
    cols: "flex flex-wrap justify-center w-full",
    cardSize: "w-[45%] md:w-[320px] h-28 md:h-40",
    logoSize: "text-xl md:text-2xl",
  },
  {
    name: "SILVER SPONSORS",
    icon: "",
    badgeColor: "bg-gray-300 text-gray-900 shadow-sm",
    cardBg: "bg-gray-50",
    cardBorder: "border border-gray-200 shadow-sm",
    sponsors: [
      {
        name: "Arravo",
        logo: "/images/sponsors/silver/arravo.png",
        blend: true,
        paddingClass: "p-5 md:p-8",
        url: "https://arravo.co",
      },
    ],
    cols: "flex flex-wrap justify-center w-full",
    cardSize: "w-[45%] md:w-[320px] h-28 md:h-40",
    logoSize: "text-lg md:text-xl",
  },
  {
    name: "ASSOCIATE SPONSORS",
    icon: "",
    badgeColor: "bg-[#000040] text-white shadow-sm",
    cardBg: "bg-white",
    cardBorder: "border border-gray-200 shadow-sm",
    sponsors: [
      {
        name: "Blue Marina",
        logo: "/images/sponsors/associate/blue-marina.png",
        blend: true,
        paddingClass: "p-4 md:p-6",
        url: "https://bluemarinaam.com",
      },
      {
        name: "Cordros",
        logo: "/images/sponsors/associate/cordros2.png",
        blend: true,
        paddingClass: "p-4 md:p-6",
        url: "https://cordros.com",
      },
      {
        name: "Octico",
        logo: "/images/sponsors/associate/octico.png",
        blend: true,
        paddingClass: "p-4 md:p-6",
        url: "https://www.instagram.com/octicosystems/",
      },
      {
        name: "Bloom Africa",
        logo: "/images/sponsors/associate/bloom-africa.png",
        blend: true,
        paddingClass: "p-2 md:p-2",
        url: "https://thebloomafrica.org",
      },
    ],
    cols: "flex flex-wrap justify-center w-full",
    cardSize: "w-[45%] md:w-[280px] h-28 md:h-40",
    logoSize: "text-lg md:text-xl",
  },
  {
    name: "EXHIBITORS & STRATEGIC PARTNERS",
    icon: "",
    badgeColor: "bg-teal-700 text-white shadow-sm",
    cardBg: "bg-teal-50",
    cardBorder: "border border-teal-200 shadow-sm",
    sponsors: [
      {
        name: "Access Holdings",
        logo: "/images/sponsors/exhibitors-and-strategic/access-holdings.svg",
        bgClass: "bg-teal-950",
        paddingClass: "p-4 md:p-6",
        url: "https://theaccesscorporation.com",
      },
      {
        name: "Afrinvest",
        logo: "/images/sponsors/exhibitors-and-strategic/afrinvest.png",
        blend: true,
        paddingClass: "p-0 md:p-0",
        url: "https://afrinvest.com",
      },
      {
        name: "ARM",
        logo: "/images/sponsors/exhibitors-and-strategic/arm.png",
        blend: true,
        paddingClass: "p-4 md:p-6",
        url: "https://www.arm.com.ng",
      },
      {
        name: "Credit Registry",
        logo: "/images/sponsors/exhibitors-and-strategic/credit-registry.png",
        blend: true,
        paddingClass: "p-3 md:p-5",
        url: "https://www.creditregistry.ng",
      },
      {
        name: "OADC",
        logo: "/images/sponsors/exhibitors-and-strategic/oadc.jpg",
        blend: true,
        paddingClass: "p-0 md:p-0",
        url: "https://openaccessdc.net",
      },
      {
        name: "HOS Ideas",
        logo: "/images/sponsors/exhibitors-and-strategic/Hos-Ideas.png",
        blend: true,
        paddingClass: "p-4 md:p-6",
        url: "https://hosideas.com",
      },
    ],
    cols: "flex flex-wrap justify-center w-full",
    cardSize: "w-[45%] md:w-[240px] h-28 md:h-36",
    logoSize: "text-lg md:text-xl",
  },
  {
    name: "MEDIA PARTNERS",
    icon: "",
    badgeColor: "bg-indigo-700 text-white shadow-sm",
    cardBg: "bg-indigo-50",
    cardBorder: "border border-indigo-200 shadow-sm",
    sponsors: [
      {
        name: "NTBTS",
        logo: "/images/sponsors/media/ntbts3.png",
        paddingClass: "p-2 md:p-3",
        url: "https://ntbts.substack.com",
      },
      {
        name: "The Babcock Torch",
        logo: "/images/sponsors/media/the-babcock-torch.svg",
        blend: true,
        paddingClass: "p-3 md:p-5",
        url: "https://babcocktorch.com",
      },
    ],
    cols: "flex flex-wrap justify-center w-full",
    cardSize: "w-[45%] md:w-[320px] h-28 md:h-40",
    logoSize: "text-lg md:text-xl",
  },
];

export type Speaker = {
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
  category: string;
  role?: string;
};

export const SPEAKERS: Speaker[] = [
  {
    name: "Ayotunde Coker",
    title: "Chief Executive Officer",
    company: "Open Access Data Centres (OADC)",
    image: "/images/speakers/ayotunde-coker.jpeg",
    category: "Opening Keynote Panel",
    bio: "Dr. Ayotunde Coker is one of Africa's foremost leaders in the development of the data centre industry, and served as founding Chairperson of the Africa Data Centres Association (ADCA). As CEO of Open Access Data Centres (OADC), he leads the construction and operation of a pan-African network of world-class, Tier III certified data centre facilities.\n\nBefore joining OADC, Dr. Coker built Rack Centre into a household name in Nigeria and a leading data centre brand across Africa, earning global recognition and numerous prestigious international awards. His distinguished career spans senior leadership roles in finance, energy, management consulting, and the UK Government.\n\nHe holds an MSc from Cranfield Institute of Technology, where he was also recognised with the Distinguished Manufacturing Alumni Award in 2020, and was named one of the Global Top 30 Edge Computing Leaders by Data Economy Magazine that same year.",
  },
  {
    name: "Fatumata Soukouna Coker",
    title: "Chairman, Board of Directors",
    company: "CreditRegistry & Afrinvest West Africa",
    image: "/images/speakers/fatumata-coker.jpeg",
    category: "Opening Keynote Panel",
    bio: "Dr. Fatumata Soukouna Coker is a distinguished technology executive and Chairman of the Board of Directors at CreditRegistry, Nigeria's pioneer and largest credit bureau. She brings over 20 years of global leadership experience at Fortune 500 companies including IBM and Microsoft, where she led Microsoft's partner ecosystem across West, Central, and East Africa.\n\nA specialist in emerging markets, she has driven transformative growth across the USA, Africa, and the Middle East, and served as CEO of Soft Solutions Limited. In addition to her role at CreditRegistry, she is Chairman of Afrinvest West Africa and founder of Ygroup Holdings. She co-founded the Centre for Women and Children Empowerment (CEWCE) and actively mentors future leaders through institutions including Lagos Business School and Emory University.",
  },
  {
    name: "Ayo Adegboye",
    title: "Group Chief Executive Officer",
    company: "Arravo Technology Limited",
    image: "/images/speakers/ayo-adegboye.jpeg",
    category: "Opening Keynote Panel",
    bio: "Dr. Ayo Adegboye is the Group CEO of Arravo Technology Limited, one of Nigeria's leading global systems integrators and managed services providers. He was appointed Managing Director of BCX Nigeria in August 2016 and subsequently led the management buyout that transformed the company into Arravo — now operating across Nigeria, Kenya, Ghana, and Côte d'Ivoire.\n\nBefore Arravo, he held senior roles at Schneider Electric as Vice President of ITB for West Africa, at IBM as ITS Business Leader, at Samsung as Director of B2B, and at MTN as Enterprise Business Manager. He is a Fellow of the Institute of Information Management Africa and the Institute of Strategic Management Nigeria, and has completed executive programmes at IESE Business School in Barcelona.",
  },
  {
    name: "Chijioke Iteghete",
    title: "Group Chief Information Officer",
    company: "ARM Holding Company Limited (ARM HoldCo)",
    image: "/images/speakers/chijioke-iteghete.jpeg",
    category: "Opening Keynote Panel",
    bio: "Chijioke Iteghete is a seasoned digital and technology executive with over 16 years of experience across banking, asset management, pensions, and capital markets. As Group CIO of ARM Holding Company, he leads the organisation's enterprise-wide technology and digital transformation agenda across multiple regulated businesses.\n\nHe has a strong track record of building and commercialising digital platforms at scale — including a unified investment super-app and transaction platforms that processed over ₦40 billion within months of deployment. Prior to ARM, he served as CIO/CDO at Coronation Registrars and CTO at Secured Records Management Solutions. He holds a degree in Information Management Technology from the Federal University of Technology, Owerri, and has completed executive programmes at Cambridge Judge Business School and Lagos Business School.",
  },
  {
    name: "Obata Onyelukachukwu",
    title: "Head of Partnerships & External Relations",
    company: "Babcock Tech Week",
    image: "/images/speakers/KachiObata.jpeg",
    category: "Opening Keynote Panel",
    role: "Panel Moderator",
    bio: "Obata Onyelukachukwu is a Computer Science student in his second year at Babcock University, a technology strategist, and student leader with a strong interest in building platforms that connect talent, innovation, and opportunity. His work spans partnerships, program development, and the execution of initiatives that expand access, visibility, and real-world opportunities for young people.\n\nHe is a key driver behind Babcock Tech Week, helping shape it into an interdisciplinary platform that connects students with industry leaders, practical knowledge, and emerging opportunities. His broader interests lie at the intersection of technology, entrepreneurship, community building, and digital products, with a focus on creating meaningful systems that empower young people to learn, build, and lead.",
  },
  {
    name: "Olumuyiwa Bamgbade",
    title: "VP, Head of Institutional Sales",
    company: "CORDROS Securities",
    image: "/images/speakers/MuyiwaCordros1.jpeg",
    category: "Fintech Track Fireside",
    bio: "Olumuyiwa Bamgbade is a capital markets and institutional sales professional at Cordros, where he serves as Vice President and Head of Institutional Sales. In this role, he works at the intersection of investment strategy, client relationship management, and market execution, helping institutional clients navigate opportunities within Nigeria's financial markets.\n\nOver the course of his career, he has built experience in institutional engagement, sales leadership, and the broader investment ecosystem, with a strong focus on connecting investors to value across the capital market landscape. His professional background reflects a deep understanding of market dynamics, client needs, and the role of financial institutions in driving economic growth.",
  },
  {
    name: "Obata Onyelukachukwu",
    title: "Head of Partnerships & External Relations",
    company: "Babcock Tech Week",
    image: "/images/speakers/KachiObata.jpeg",
    category: "Fintech Track Fireside",
    role: "Fireside Moderator",
    bio: "Obata Onyelukachukwu is a Computer Science student in his second year at Babcock University, a technology strategist, and student leader with a strong interest in building platforms that connect talent, innovation, and opportunity. His work spans partnerships, program development, and the execution of initiatives that expand access, visibility, and real-world opportunities for young people.\n\nHe is a key driver behind Babcock Tech Week, helping shape it into an interdisciplinary platform that connects students with industry leaders, practical knowledge, and emerging opportunities. His broader interests lie at the intersection of technology, entrepreneurship, community building, and digital products, with a focus on creating meaningful systems that empower young people to learn, build, and lead.",
  },
  {
    name: "Victor Ndukauba",
    title: "Deputy Managing Director",
    company: "Afrinvest West Africa",
    image: "/images/speakers/VictorNdukauba.jpeg",
    category: "Fintech Track Fireside",
    bio: "Victor Ndukauba is the Deputy Managing Director of Afrinvest West Africa, one of Nigeria's leading investment banking and financial advisory firms. In his role, he supports the Group's strategy and business development and provides senior oversight for the firm's Information Technology, Finance, Risk, and Controls functions. He also continues to play a leading role in the origination and execution of investment banking transactions, drawing on experience in corporate and project finance advisory as well as capital raising.\n\nOver the course of his career, he has built strong expertise across investment banking, financial strategy, and institutional leadership, contributing to Afrinvest's position as a major player in West Africa's capital markets. Public profiles and company leadership information identify him as a key member of the firm's executive team.",
  },
  {
    name: "Dunmade Majuyi O. D.",
    title: "Convener",
    company: "Babcock Tech Week",
    image: "/images/speakers/Mujuyi.jpeg",
    category: "Fintech Track Fireside",
    role: "Fireside Moderator",
    bio: "Dunmade Majuyi O. D. is a purpose-driven Computer Science student in his final year, passionate about using technology to transform and expand access to quality education and skill-building initiatives. As a full-stack engineer, program manager, and student leader, he is committed to building systems, communities, and opportunities that create meaningful impact.\n\nHe has led technical programs at GDG Babcock, where he pioneered the DSA Track to strengthen problem-solving culture on campus. As Vice President of Administration of the Babcock University Computer Club (BUCC), he has helped drive structure, partnerships, and major initiatives within the student tech ecosystem. His interests span software engineering, AI/ML, education, and technology-driven impact across Nigeria, Africa, and beyond, with a strong focus on creating practical solutions, supporting talent development, and contributing to long-term change.",
  },
  {
    name: "Λnthony Λzekwoh",
    title: "Artist and Author",
    company: "",
    image: "/images/speakers/AnthonyAzekwoh.jpg",
    category: "CreativeTech Track Fireside",
    bio: "Λnthony Λzekwoh is a Nigerian contemporary artist and author based in Lagos, known for a multidisciplinary practice that spans digital painting, sculpture, and writing. Drawing deeply from African folklore and mythology, his work reimagines culture, history, and identity through bold visual storytelling.\n\nΛzekwoh is widely recognized for pushing the boundaries of digital art from Africa onto the global stage. Entirely self-taught, he has created work seen by millions, collaborated with major brands and musicians, and built a body of work that bridges traditional artistic influence with contemporary digital expression. His acclaimed piece The Red Man marked a major turning point in his rise, helping cement his reputation as a leading voice in a new generation of African visual storytellers.",
  },
  {
    name: "Obata Onyelukachukwu",
    title: "Head of Partnerships & External Relations",
    company: "Babcock Tech Week",
    image: "/images/speakers/KachiObata.jpeg",
    category: "CreativeTech Track Fireside",
    role: "Fireside Moderator",
    bio: "Obata Onyelukachukwu is a Computer Science student in his second year at Babcock University, a technology strategist, and student leader with a strong interest in building platforms that connect talent, innovation, and opportunity. His work spans partnerships, program development, and the execution of initiatives that expand access, visibility, and real-world opportunities for young people.\n\nHe is a key driver behind Babcock Tech Week, helping shape it into an interdisciplinary platform that connects students with industry leaders, practical knowledge, and emerging opportunities. His broader interests lie at the intersection of technology, entrepreneurship, community building, and digital products, with a focus on creating meaningful systems that empower young people to learn, build, and lead.",
  },
  {
    name: "Jordan Aiyemo",
    title: "Artist",
    company: "",
    image: "/images/Team-Photos/jordan-aiyemo.png",
    category: "CreativeTech Track Fireside",
    bio: "",
  },
];
