// Real content from intereses.lv

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  newsType: "methodical" | "general";
  date: string;
  image?: string;
  author: string;
  authorRole: string;
  readingTime?: number;
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
  status?: "open" | "closed" | "upcoming";
  spotsTotal?: number;
  spotsLeft?: number;
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

export interface TrainingItem {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  spotsTotal: number;
  spotsLeft: number;
  status: "open" | "closed" | "upcoming";
  registrationUrl?: string;
  organizer: string;
  programCode?: string;
}

export const newsCategories = [
  { id: "all", label: "Visi" },
  { id: "competitions", label: "Konkursi" },
  { id: "training", label: "Apmācības" },
  { id: "announcements", label: "Paziņojumi" },
  { id: "projects", label: "Projekti" },
];

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Rīgas bērnu un jauniešu radošās mākslas konkurss 'Neparastās lietas. Ainava'",
    excerpt: "Aicinām skolēnus piedalīties radošās mākslas konkursā, kurā šogad tēma ir 'Ainava'. Darbu iesniegšana notiks no 24. februāra līdz 6. martam.",
    content: "Rīgas bērnu un jauniešu radošās mākslas konkurss 'Neparastās lietas. Ainava' ir ikgadējs konkurss, kurā tiek aicināti piedalīties skolēni no visas Rīgas. Šogad tēma ir 'Ainava', un darbi jāiesniedz no 24. februāra līdz 6. martam. Konkurss tiek organizēts sadarbībā ar Rīgas pilsētas Izglītības, kultūras un sporta departamentu.",
    category: "competitions",
    newsType: "general",
    date: "2026-02-19",
    author: "Mākslas nodaļa",
    authorRole: "RIMC",
    readingTime: 2,
  },
  {
    id: "2",
    title: "Aicinām pieteikties programmai 'Stikla mākslas daudzveidība — tehnikas un to pielietojums'",
    excerpt: "Profesionālās pilnveides programma interešu izglītības pedagogiem. Nodarbības notiks 23. un 30. martā Rīgas Amatniecības vidusskolā.",
    content: "Rīgas Interešu izglītības metodiskais centrs aicina pieteikties profesionālās pilnveides programmai 'Stikla mākslas daudzveidība — tehnikas un to pielietojums'. Programma paredzēta interešu izglītības pedagogiem. Nodarbības notiks 2026. gada 23. un 30. martā Rīgas Amatniecības vidusskolā.",
    category: "training",
    newsType: "methodical",
    date: "2026-02-18",
    author: "Jānis Kalniņš",
    authorRole: "Metodiķis",
    readingTime: 3,
  },
  {
    id: "3",
    title: "Bērnu un jauniešu stikla mākslas konkurss-izstāde 'Anna izzina Rīgu. DURVIS'",
    excerpt: "Pieteikšanās konkursam-izstādei ir atvērta. Darbi jāiesniedz līdz 27. februārim Rīgas Amatniecības vidusskolā.",
    content: "Aicinām skolēnus piedalīties stikla mākslas konkursā-izstādē 'Anna izzina Rīgu. DURVIS'. Darbi jāiesniedz līdz 27. februārim Rīgas Amatniecības vidusskolā. Konkurss tiek rīkots sadarbībā ar Rīgas Amatniecības vidusskolu un Rīgas Interešu izglītības metodisko centru.",
    category: "competitions",
    newsType: "general",
    date: "2026-02-18",
    author: "Mākslas nodaļa",
    authorRole: "RIMC",
    readingTime: 2,
  },
  {
    id: "4",
    title: "Aicinām pieteikties semināram 'Vizuālās identitātes veidošana digitālajā vidē'",
    excerpt: "Seminārs interešu izglītības pedagogiem par mūsdienīgām komunikācijas metodēm digitālajā vidē. Pieteikšanās atvērta.",
    content: "RIMC aicina piedalīties semināram 'Vizuālās identitātes veidošana digitālajā vidē'. Seminārs paredzēts interešu izglītības pedagogiem, kuri vēlas apgūt mūsdienīgas komunikācijas metodes. Pasākums notiks aprīlī.",
    category: "training",
    newsType: "methodical",
    date: "2026-02-17",
    author: "Līga Kalnīna",
    authorRole: "Interešu izglītības metodiķe",
    readingTime: 3,
  },
  {
    id: "5",
    title: "Aicinām pieteikties programmai 'Dramaturģijas pamati — no idejas līdz izrādei'",
    excerpt: "Profesionālās pilnveides programma teātra pedagogiem. Nodarbības notiks 9. un 11. martā Rīgas Skolēnu pilī.",
    content: "Programma 'Dramaturģijas pamati — no idejas līdz izrādei' ir paredzēta teātra pedagogiem un interešu izglītības darbiniekiem. Nodarbības notiks 2026. gada 9. un 11. martā Rīgas Skolēnu pilī.",
    category: "training",
    newsType: "methodical",
    date: "2026-02-17",
    author: "Jānis Kalniņš",
    authorRole: "Metodiķis",
    readingTime: 2,
  },
  {
    id: "6",
    title: "Stikla mākslinieku izstāde, kas veltīta Krišjāņa Valdemāra piemiņai",
    excerpt: "No 18. februāra līdz 15. martam Rīgas Amatniecības vidusskolā apskatāma stikla mākslinieku izstāde, kas veltīta izcilā latviešu sabiedriskā darbinieka piemiņai.",
    content: "No 2026. gada 18. februāra līdz 15. martam Rīgas Amatniecības vidusskolā apskatāma stikla mākslinieku izstāde, kas veltīta Krišjāņa Valdemāra 200. dzimšanas dienai. Izstāde apvieno darbus no Latvijas, Lietuvas un Igaunijas mākslinieku.",
    category: "announcements",
    newsType: "general",
    date: "2026-02-18",
    author: "Anna Bērziņa",
    authorRole: "Direktore",
    readingTime: 2,
  },
  {
    id: "7",
    title: "24 stundu spēļu izstrādes hakatons 'Campfire Riga'",
    excerpt: "Aicinām jauniešus vecumā no 14 līdz 25 gadiem piedalīties spēļu izstrādes hakatonā. Pasākums notiks 21.–22. martā.",
    content: "Hakatons 'Campfire Riga' pulcēs jauniešus no visas Latvijas, lai 24 stundu laikā izstrādātu oriģinālas datorspēles. Pasākums notiks 2026. gada 21.–22. martā. Reģistrācija atvērta līdz 15. martam.",
    category: "projects",
    newsType: "general",
    date: "2026-02-17",
    author: "Mārtiņš Liepiņš",
    authorRole: "Pasākumu koordinators",
    readingTime: 2,
  },
  {
    id: "8",
    title: "Metodiskie ieteikumi interešu izglītības programmu akreditācijai 2026",
    excerpt: "Publicēti atjauninātie metodiskie ieteikumi interešu izglītības programmu akreditācijai. Dokumenti pieejami sadaļā Materiāli.",
    content: "RIMC ir sagatavojis atjauninātus metodiskos ieteikumus interešu izglītības programmu akreditācijai 2026. gadā. Dokumenti ietver jaunas prasības pedagogu kvalifikācijai un programmu saturam.",
    category: "announcements",
    newsType: "methodical",
    date: "2026-02-15",
    author: "Jānis Kalniņš",
    authorRole: "Metodiķis",
    readingTime: 4,
  },
];

export const eventItems: EventItem[] = [
  {
    id: "1",
    title: "Rīgas Vokālās mūzikas konkurss 'Balsis 2026' — I kārta",
    description: "Rīgas skolēnu vokālās mūzikas konkursa pirmā kārta. Piedalās solo dziedātāji un ansambļi no Rīgas skolām.",
    date: "2026-02-19",
    time: "10:00 - 18:00",
    location: "Rīgas Skolēnu pils, Raiņa bulvāris 2",
    category: "competitions",
    registrationUrl: "https://www.intereses.lv",
    status: "open",
  },
  {
    id: "2",
    title: "Rīgas Vokālās mūzikas konkurss 'Balsis 2026' — I kārta",
    description: "Rīgas skolēnu vokālās mūzikas konkursa pirmā kārta BJC Altona. Piedalās solo dziedātāji un ansambļi.",
    date: "2026-02-20",
    time: "10:00 - 17:00",
    location: "BJC 'Altona', Rīga",
    category: "competitions",
    registrationUrl: "https://www.intereses.lv",
    status: "open",
  },
  {
    id: "3",
    title: "Mūsdienu deju video konkurss — reģistrācija",
    description: "Aicinām deju kolektīvus pieteikties mūsdienu deju video konkursam. Reģistrācija atvērta līdz 28. februārim.",
    date: "2026-02-28",
    time: "Reģistrācija līdz 23:59",
    location: "Tiešsaistē",
    category: "competitions",
    registrationUrl: "https://www.intereses.lv",
    status: "open",
  },
  {
    id: "4",
    title: "Profesionālās pilnveides programma 'Stikla mākslas daudzveidība'",
    description: "Nodarbību 1. diena. Praktiski piemēri un darbnīcas stikla mākslas tehnikās interešu izglītības pedagogiem.",
    date: "2026-03-23",
    time: "10:00 - 16:00",
    location: "Rīgas Amatniecības vidusskola, Rīga",
    category: "training",
    registrationUrl: "https://www.intereses.lv",
    status: "open",
    spotsTotal: 20,
    spotsLeft: 8,
  },
  {
    id: "5",
    title: "Profesionālās pilnveides programma 'Stikla mākslas daudzveidība'",
    description: "Nodarbību 2. diena. Padziļināta prakse un dalībnieku darbu prezentācijas.",
    date: "2026-03-30",
    time: "10:00 - 16:00",
    location: "Rīgas Amatniecības vidusskola, Rīga",
    category: "training",
    registrationUrl: "https://www.intereses.lv",
    status: "open",
    spotsTotal: 20,
    spotsLeft: 8,
  },
  {
    id: "6",
    title: "Programma 'Dramaturģijas pamati — no idejas līdz izrādei'",
    description: "1. nodarbība. Dramaturģijas teorijas pamati un praktiskās uzdevumi teātra pedagogiem.",
    date: "2026-03-09",
    time: "10:00 - 17:00",
    location: "Rīgas Skolēnu pils, Raiņa bulvāris 2",
    category: "training",
    registrationUrl: "https://www.intereses.lv",
    status: "open",
    spotsTotal: 25,
    spotsLeft: 12,
  },
];

export const resourceCategories = [
  { id: "all", label: "Visi materiāli" },
  { id: "methodical", label: "Metodiskie materiāli" },
  { id: "documents", label: "Nolikumi" },
  { id: "presentations", label: "Prezentācijas" },
  { id: "videos", label: "Video lekcijas" },
];

export const resourceItems: ResourceItem[] = [
  {
    id: "1",
    title: "Metodiskie ieteikumi interešu izglītības programmu akreditācijai 2026",
    description: "Atjaunināts ceļvedis programmu akreditācijas procesam ar jaunajām prasībām un paraugiem.",
    category: "methodical",
    fileType: "PDF",
    fileSize: "3.1 MB",
    downloadUrl: "#",
    date: "2026-02-15",
  },
  {
    id: "2",
    title: "Nolikums: Rīgas Vokālās mūzikas konkurss 'Balsis 2026'",
    description: "Konkursa 'Balsis 2026' nolikums, vērtēšanas kritēriji un reģistrācijas kārtība.",
    category: "documents",
    fileType: "PDF",
    fileSize: "1.2 MB",
    downloadUrl: "#",
    date: "2026-02-10",
  },
  {
    id: "3",
    title: "Nolikums: Radošās mākslas konkurss 'Neparastās lietas. Ainava'",
    description: "Konkursa nolikums, darbu iesniegšanas prasības un vērtēšanas kritēriji.",
    category: "documents",
    fileType: "PDF",
    fileSize: "0.9 MB",
    downloadUrl: "#",
    date: "2026-02-12",
  },
  {
    id: "4",
    title: "Prezentācija: Digitālie rīki interešu izglītības pedagogiem",
    description: "Mūsdienu digitālie risinājumi, kas palīdz organizēt darbu ar audzēkņiem.",
    category: "presentations",
    fileType: "PPTX",
    fileSize: "8.4 MB",
    downloadUrl: "#",
    date: "2026-01-20",
  },
  {
    id: "5",
    title: "Video lekcija: Interešu izglītības programmu satura veidošana",
    description: "Lekcija par kvalitatīvu un mērķtiecīgu interešu izglītības programmu izstrādi.",
    category: "videos",
    fileType: "MP4",
    fileSize: "245 MB",
    downloadUrl: "#",
    date: "2026-01-15",
  },
  {
    id: "6",
    title: "Metodiskie ieteikumi darba ar jauniešiem ar īpašām vajadzībām",
    description: "Praktisks ceļvedis iekļaujošas vides veidošanai interešu izglītībā.",
    category: "methodical",
    fileType: "PDF",
    fileSize: "2.8 MB",
    downloadUrl: "#",
    date: "2025-12-10",
  },
];

export const trainingItems: TrainingItem[] = [
  {
    id: "1",
    title: "Stikla mākslas daudzveidība — tehnikas un to pielietojums",
    description: "Profesionālās pilnveides programma interešu izglītības pedagogiem. Apgūsiet dažādas stikla mākslas tehnikas: vitražu, stikla apgleznošanu, fuzingu un citas. Programma ietver teoriju un praksi.",
    date: "2026-03-23",
    endDate: "2026-03-30",
    time: "10:00 - 16:00",
    location: "Rīgas Amatniecības vidusskola",
    spotsTotal: 20,
    spotsLeft: 8,
    status: "open",
    registrationUrl: "https://www.intereses.lv",
    organizer: "RIMC sadarbībā ar Rīgas Amatniecības vidusskolu",
    programCode: "RIMC-2026-03",
  },
  {
    id: "2",
    title: "Dramaturģijas pamati — no idejas līdz izrādei",
    description: "Profesionālās pilnveides programma teātra pedagogiem un interešu izglītības darbiniekiem. Apgūsiet dramaturģijas teoriju, lomu sadalījumu, režijas pamatus un izrādes noformējumu.",
    date: "2026-03-09",
    endDate: "2026-03-11",
    time: "10:00 - 17:00",
    location: "Rīgas Skolēnu pils",
    spotsTotal: 25,
    spotsLeft: 12,
    status: "open",
    registrationUrl: "https://www.intereses.lv",
    organizer: "RIMC",
    programCode: "RIMC-2026-04",
  },
  {
    id: "3",
    title: "Vizuālās identitātes veidošana digitālajā vidē",
    description: "Seminārs par vizuālās komunikācijas principiem un mūsdienu digitālajiem rīkiem pedagoga darbā. Apgūsiet Canva, Adobe Express un citu rīku lietošanu.",
    date: "2026-04-15",
    time: "10:00 - 16:00",
    location: "RIMC, Kaļķu iela 12, Rīga",
    spotsTotal: 30,
    spotsLeft: 18,
    status: "open",
    registrationUrl: "https://www.intereses.lv",
    organizer: "RIMC",
    programCode: "RIMC-2026-05",
  },
  {
    id: "4",
    title: "Mūzikas teorija un solfedžo modernā pedagoģijā",
    description: "Kursi mūzikas pedagogiem, kuri vēlas atjaunināt zināšanas mūzikas teorijā un apgūt mūsdienīgas mācīšanas metodes. 3 nodarbības.",
    date: "2026-04-22",
    endDate: "2026-05-06",
    time: "14:00 - 18:00",
    location: "RIMC mūzikas studija",
    spotsTotal: 15,
    spotsLeft: 0,
    status: "closed",
    organizer: "RIMC",
    programCode: "RIMC-2026-06",
  },
];

export const teamMembers = [
  {
    id: "1",
    name: "Anna Bērziņa",
    role: "Direktore",
    email: "anna.berzina@rimc.lv",
    phone: "+371 67 012 346",
    description: "Vada centru, koordinē sadarbību ar Rīgas pilsētas izglītības iestādēm un partneri.",
  },
  {
    id: "2",
    name: "Jānis Kalniņš",
    role: "Metodiķis",
    email: "janis.kalnins@rimc.lv",
    phone: "+371 67 012 347",
    description: "Atbildīgs par metodisko materiālu izstrādi un pedagogu profesionālo pilnveidi.",
  },
  {
    id: "3",
    name: "Līga Kalnīna",
    role: "Interešu izglītības metodiķe",
    email: "liga.kalnina@rimc.lv",
    phone: "+371 67 012 348",
    description: "Koordinē interešu izglītības programmu īstenošanu un sniedz atbalstu pedagogiem.",
  },
  {
    id: "4",
    name: "Mārtiņš Liepiņš",
    role: "Pasākumu koordinators",
    email: "martins.liepins@rimc.lv",
    phone: "+371 67 012 349",
    description: "Organizē konkursus, festivālus un citus RIMC rīkotus pasākumus.",
  },
];

export const quickLinks = [
  {
    id: "training",
    title: "Apmācības pedagogiem",
    description: "Profesionālās pilnveides kursi un semināri",
    href: "/talakizglitiba",
    icon: "GraduationCap",
  },
  {
    id: "calendar",
    title: "Pasākumu kalendārs",
    description: "Konkursi, festivāli un citi pasākumi",
    href: "/pasakumi",
    icon: "Calendar",
  },
  {
    id: "materials",
    title: "Digitālie materiāli",
    description: "Metodiskie materiāli un nolikumi",
    href: "/materiali",
    icon: "BookOpen",
  },
  {
    id: "competitions",
    title: "Konkursi",
    description: "Aktuālie konkursi skolēniem",
    href: "/jaunumi?category=competitions",
    icon: "Award",
  },
];
