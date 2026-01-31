// Mock data for the website

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image?: string;
  author: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  category: string;
  image?: string;
  registrationUrl?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
  date: string;
}

export const newsCategories = [
  { id: "all", label: "Visi" },
  { id: "announcements", label: "Paziņojumi" },
  { id: "competitions", label: "Konkursi" },
  { id: "training", label: "Apmācības" },
  { id: "projects", label: "Projekti" },
];

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Izsludināts jaunais mācību gads interešu izglītībā",
    excerpt: "Rīgas Interešu izglītības metodiskais centrs aicina pieteikties jaunajām programmām 2024./2025. mācību gadam.",
    content: "Pilns raksta saturs...",
    category: "announcements",
    date: "2024-01-28",
    author: "RIMC administrācija",
  },
  {
    id: "2",
    title: "Republikas mēroga zīmēšanas konkurss 'Mans sapnis'",
    excerpt: "Aicinām skolēnus piedalīties ikgadējā zīmēšanas konkursā. Darbu iesniegšana līdz 15. martam.",
    content: "Pilns raksta saturs...",
    category: "competitions",
    date: "2024-01-25",
    author: "Mākslas nodaļa",
  },
  {
    id: "3",
    title: "Pedagogu profesionālās pilnveides kursi",
    excerpt: "Piedāvājam jaunus kursus interešu izglītības pedagogiem par mūsdienu metodēm.",
    content: "Pilns raksta saturs...",
    category: "training",
    date: "2024-01-22",
    author: "Metodiskā nodaļa",
  },
  {
    id: "4",
    title: "Starptautiskais projekts 'Creative Youth'",
    excerpt: "RIMC uzsāk dalību Erasmus+ projektā sadarbībā ar partneriem no 5 Eiropas valstīm.",
    content: "Pilns raksta saturs...",
    category: "projects",
    date: "2024-01-20",
    author: "Projektu nodaļa",
  },
  {
    id: "5",
    title: "Jaunas deju pulciņu grupas",
    excerpt: "Tiek atvērtas jaunas deju grupas bērniem vecumā no 7 līdz 12 gadiem.",
    content: "Pilns raksta saturs...",
    category: "announcements",
    date: "2024-01-18",
    author: "Deju nodaļa",
  },
  {
    id: "6",
    title: "Foto konkurss 'Rīga manās acīs'",
    excerpt: "Aicinām jauniešus piedalīties foto konkursā un parādīt savu redzējumu par galvaspilsētu.",
    content: "Pilns raksta saturs...",
    category: "competitions",
    date: "2024-01-15",
    author: "Foto pulciņš",
  },
];

export const eventItems: EventItem[] = [
  {
    id: "1",
    title: "Metodiskā konference 'Inovācijas interešu izglītībā'",
    description: "Ikgadējā konference pedagogiem ar lekcijām un darbnīcām par jaunākajām metodēm.",
    date: "2024-02-15",
    time: "10:00 - 17:00",
    location: "RIMC konferenču zāle, Kaļķu iela 12",
    category: "training",
  },
  {
    id: "2",
    title: "Skolēnu koncerts 'Pavasara melodijas'",
    description: "Mūzikas pulciņu audzēkņu gada koncerts ar daudzveidīgu programmu.",
    date: "2024-02-20",
    time: "18:00 - 20:00",
    location: "Rīgas Kongresu nams",
    category: "events",
  },
  {
    id: "3",
    title: "Radošā darbnīca 'Keramika iesācējiem'",
    description: "Praktiska nodarbība bērniem un vecākiem kopīgai radošai darbībai.",
    date: "2024-02-25",
    time: "14:00 - 16:00",
    location: "RIMC mākslas studija",
    category: "workshop",
  },
  {
    id: "4",
    title: "Deju festivāls 'Ritma spēks'",
    description: "Deju kolektīvu festivāls ar dalībnieku priekšnesumiem un meistarklasēm.",
    date: "2024-03-05",
    time: "11:00 - 18:00",
    location: "Kultūras pils 'Ziemeļblāzma'",
    category: "events",
  },
  {
    id: "5",
    title: "Vecāku informatīvā sanāksme",
    description: "Tikšanās ar vecākiem par jaunā semestra plāniem un aktivitātēm.",
    date: "2024-03-10",
    time: "18:00 - 19:30",
    location: "RIMC konferenču zāle",
    category: "meeting",
  },
];

export const resourceCategories = [
  { id: "all", label: "Visi resursi" },
  { id: "methodical", label: "Metodiskie materiāli" },
  { id: "documents", label: "Dokumenti" },
  { id: "presentations", label: "Prezentācijas" },
  { id: "videos", label: "Video materiāli" },
];

export const resourceItems: ResourceItem[] = [
  {
    id: "1",
    title: "Metodiskie ieteikumi pulciņu vadītājiem",
    description: "Praktisks ceļvedis interešu izglītības programmu izstrādei un īstenošanai.",
    category: "methodical",
    fileType: "PDF",
    fileSize: "2.4 MB",
    downloadUrl: "#",
    date: "2024-01-15",
  },
  {
    id: "2",
    title: "Normatīvie dokumenti 2024",
    description: "Aktuālie normatīvie akti un noteikumi interešu izglītības jomā.",
    category: "documents",
    fileType: "PDF",
    fileSize: "1.8 MB",
    downloadUrl: "#",
    date: "2024-01-10",
  },
  {
    id: "3",
    title: "Prezentācija: Digitālie rīki mācību procesā",
    description: "Ieskats modernajās tehnoloģijās un to izmantošanā interešu izglītībā.",
    category: "presentations",
    fileType: "PPTX",
    fileSize: "5.2 MB",
    downloadUrl: "#",
    date: "2024-01-05",
  },
  {
    id: "4",
    title: "Video: Labās prakses piemēri",
    description: "Dokumentāls video par veiksmīgiem interešu izglītības projektiem.",
    category: "videos",
    fileType: "MP4",
    fileSize: "120 MB",
    downloadUrl: "#",
    date: "2023-12-20",
  },
];

export const teamMembers = [
  {
    id: "1",
    name: "Anna Bērziņa",
    role: "Direktore",
    description: "Vada centru kopš 2018. gada, fokusējoties uz inovācijām izglītībā.",
  },
  {
    id: "2",
    name: "Jānis Kalniņš",
    role: "Metodiķis",
    description: "Atbildīgs par metodisko materiālu izstrādi un pedagogu atbalstu.",
  },
  {
    id: "3",
    name: "Līga Ozola",
    role: "Projektu vadītāja",
    description: "Koordinē starptautiskos projektus un sadarbību ar partneriem.",
  },
  {
    id: "4",
    name: "Mārtiņš Liepiņš",
    role: "Pasākumu koordinators",
    description: "Organizē konkursus, festivālus un citus pasākumus.",
  },
];
