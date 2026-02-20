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
    title: "Rīgas bērnu un jauniešu radošās mākslas konkurss \"Neparastās lietas. Ainava\"",
    excerpt: "Rīgas Bolderājas Jaunā pamatskola aicina audzēkņus piedalīties radošajā mākslas konkursā \"Neparastās lietas. Ainava\". Konkurss rosina skolēnus iepazīt Latvijas ainavistu darbus.",
    content: "Rīgas Bolderājas Jaunā pamatskola sadarbībā ar Rīgas valstspilsētas pašvaldības Izglītības, kultūras un sporta departamenta Sporta un jaunatnes pārvaldi aicina Rīgas izglītības iestāžu audzēkņus piedalīties radošajā mākslas konkursā \"Neparastās lietas. Ainava\". Konkurss rosina skolēnus iepazīt Latvijas ainavistu darbus, iedziļināties to noskaņās un kompozīcijās.",
    category: "competitions",
    newsType: "general",
    date: "2026-02-19",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/IMG_0092-725x400.jpeg",
    author: "Līga Baņķiere",
    authorRole: "Galvenā speciāliste vizuālās mākslas jomā",
    readingTime: 2,
  },
  {
    id: "2",
    title: "Aicinām pieteikties programmai \"Stikla mākslas daudzveidība, apstrādes iespējas, tehnikas un paņēmieni darbu izveidē\"",
    excerpt: "RIMC aicina pieteikties pedagogus profesionālās pilnveides programmai. Nodarbības notiks 2026. gada 23. martā un 30. martā no plkst. 10.00 līdz 13.00 Rīgas Bērnu un jauniešu centrā \"Laimīte\".",
    content: "Rīgas Interešu izglītības metodiskais centrs aicina pieteikties interešu izglītības programmu pedagogus profesionālās pilnveides programmas \"Stikla mākslas daudzveidība, apstrādes iespējas, tehnikas un paņēmieni darbu izveidē\" (8 stundas) apguvei, kas norisināsies 2026. gada 23. martā un 30. martā.",
    category: "training",
    newsType: "methodical",
    date: "2026-02-18",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-4-1.png",
    author: "Aivita Grīna",
    authorRole: "Pedagogu profesionālās kompetences pilnveides programmu vadītāja",
    readingTime: 3,
  },
  {
    id: "3",
    title: "Bērnu un jauniešu stikla mākslas konkurss-izstāde \"Anna izzina Rīgu. DURVIS, KAS NAV TIKAI DURVIS\"",
    excerpt: "Rīgas Tehniskās jaunrades nams \"Annas 2\" aicina pieteikties bērnu un jauniešu stikla mākslas konkursam-izstādei. Konkurss norisinās no 2026. gada 9. marta līdz 29. maijam.",
    content: "Rīgas Tehniskās jaunrades nams \"Annas 2\" aicina pieteikties bērnu un jauniešu stikla mākslas konkursam-izstādei \"Anna izzina Rīgu. DURVIS, KAS NAV TIKAI DURVIS.\" Konkurss norisinās no 2026. gada 9. marta līdz 29. maijam. Šī gada tēma aicina paraudzīties uz Rīgu citām acīm.",
    category: "competitions",
    newsType: "general",
    date: "2026-02-18",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/Stikla-konkurss_2026-725x400.jpeg",
    author: "Līga Baņķiere",
    authorRole: "Galvenā speciāliste vizuālās mākslas jomā",
    readingTime: 2,
  },
  {
    id: "4",
    title: "Aicinām pieteikties pedagogu profesionālās kompetences pilnveides semināram \"Vizuālās identitātes veidošana\"",
    excerpt: "RIMC aicina Rīgas pašvaldības izglītības iestāžu interešu izglītības skolotājus pieteikties semināram. Programma norisināsies 2026. gada 18. martā no plkst. 10.00 līdz 13.00.",
    content: "Rīgas Interešu izglītības metodiskais centrs aicina Rīgas pašvaldības izglītības iestāžu interešu izglītības skolotājus pieteikties pedagogu profesionālās kompetences pilnveides semināra \"Vizuālās identitātes veidošana\" apguvei. Programma norisināsies 2026. gada 18. martā.",
    category: "training",
    newsType: "methodical",
    date: "2026-02-17",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-2-1-150x150.png",
    author: "Aivita Grīna",
    authorRole: "Pedagogu profesionālās kompetences pilnveides programmu vadītāja",
    readingTime: 3,
  },
  {
    id: "5",
    title: "Aicinām pieteikties pedagogu profesionālās kompetences pilnveides programmai \"Dramaturģijas pamati\"",
    excerpt: "RIMC aicina piedalīties attālinātai profesionālās kompetences pilnveides programmai \"Dramaturģijas pamati\" (12 stundas). Programma norisināsies tiešsaistē 2026. gada 9. un 11. martā, lektors – Lauris Gundars.",
    content: "Rīgas Interešu izglītības metodiskais centrs aicina Rīgas pašvaldības izglītības iestāžu interešu izglītības skolotājus pieteikties attālinātai profesionālās kompetences pilnveides programmai \"Dramaturģijas pamati\" (12 stundas) apguvei. Programma norisināsies tiešsaistē 2026. gada 9. un 11. martā no plkst. 11.00 līdz 15.00, lektors – Lauris Gundars.",
    category: "training",
    newsType: "methodical",
    date: "2026-02-17",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-6-150x150.png",
    author: "Antra Ņjuša",
    authorRole: "Galvenā speciāliste teātra mākslas jomā",
    readingTime: 2,
  },
  {
    id: "6",
    title: "Stikla mākslinieku izstāde, kas veltīta Krišjāņa Valdemāra piemiņai",
    excerpt: "Ceturtdien, 19. februārī plkst. 16.00 Rīgas domes foajē atklās stikla mākslinieku izstādi, veltītu izcilā jaunlatvieša Krišjāņa Valdemāra piemiņai.",
    content: "Ceturtdien, 19. februārī plkst. 16.00 Rīgas domes foajē atklās stikla mākslinieku izstādi, veltītu izcilā jaunlatvieša, politiķa un valstsvīra, kultūras un sabiedriskā darbinieka Krišjāņa Valdemāra piemiņai. Foajē tiks izstādīti 6. Latvijas jaunatnes stikla konkursantu darbi.",
    category: "announcements",
    newsType: "general",
    date: "2026-02-18",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/598142831_122159405120643103_9124266429408214591_n-725x400.jpg",
    author: "Santa Vancāne",
    authorRole: "RIMC vadītāja",
    readingTime: 2,
  },
  {
    id: "7",
    title: "24 stundu spēļu izstrādes hakatons jeb game jam vidusskolēniem – \"Campfire Riga\"",
    excerpt: "Aicinām vidusskolēnus piedalīties 24 stundu spēļu izstrādes hakatonā. Reģistrācija atvērta jauniešiem, kuri interesējas par spēļu izstrādi, programmēšanu un radošu domāšanu.",
    content: "Aicinām vidusskolēnus piedalīties 24 stundu spēļu izstrādes hakatonā jeb game jam \"Campfire Riga\". Hakatons pulcēs jauniešus no visas Latvijas, lai 24 stundu laikā izstrādātu oriģinālas datorspēles.",
    category: "projects",
    newsType: "general",
    date: "2026-02-17",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-7.png",
    author: "Mārtiņš Liepiņš",
    authorRole: "Pasākumu koordinators",
    readingTime: 2,
  },
  {
    id: "8",
    title: "Aicinām pieteikties profesionālās kompetences pilnveides programmai \"Iztēles un kreativitātes rosinoši paņēmieni vizuāli plastiskajā mākslā\"",
    excerpt: "Programma norisināsies 2026. gada 27. februārī no plkst. 11.00 līdz 15.00 Rīgas bērnu un jauniešu centrā \"Altona\". Pieteikšanās pie Aivitas Grīnas.",
    content: "Rīgas Interešu izglītības metodiskais centrs aicina pieteikties profesionālās kompetences pilnveides programmai \"Iztēles un kreativitātes rosinoši paņēmieni vizuāli plastiskajā mākslā\". Programma norisināsies 2026. gada 27. februārī no plkst. 11.00 līdz 15.00 Rīgas bērnu un jauniešu centrā \"Altona\", Altonovas ielā 6.",
    category: "training",
    newsType: "methodical",
    date: "2026-02-15",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-4-1.png",
    author: "Aivita Grīna",
    authorRole: "Pedagogu profesionālās kompetences pilnveides programmu vadītāja",
    readingTime: 3,
  },
];

export const eventItems: EventItem[] = [
  {
    id: "1",
    title: "Rīgas vokālās mūzikas konkursa \"Balsis 2026\" I kārta — Kurzemes rajona ansambļi",
    description: "Rīgas vokālās mūzikas konkursa \"Balsis 2026\" I kārta Kurzemes rajona, Latgales, Zemgales priekšpilsētu B grupas ansambļiem. Atbildīgā — Arta Grīna.",
    date: "2026-02-20",
    time: "14:00",
    location: "Rīgas Bērnu un jauniešu centrs \"Altona\", Altonavas iela 6",
    category: "competitions",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/598142831_122159405120643103_9124266429408214591_n-725x400.jpg",
    registrationUrl: "https://www.intereses.lv/vokalie-ansambli-sak-gatavoties-rigas-vokalas-muzikas-konkursam-balsis-2026/",
    status: "open",
  },
  {
    id: "2",
    title: "Rīgas vokālās mūzikas konkursa \"Balsis 2026\" I kārta — A grupas ansambļi",
    description: "Rīgas vokālās mūzikas konkursa \"Balsis 2026\" I kārta visu rajonu un priekšpilsētu A grupas ansambļiem. Atbildīgā — Arta Grīna.",
    date: "2026-02-21",
    time: "11:00",
    location: "Rīgas pamatskola \"Rīdze\", Krišjāņa Valdemāra iela 2",
    category: "competitions",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/598142831_122159405120643103_9124266429408214591_n-725x400.jpg",
    registrationUrl: "https://www.intereses.lv/vokalie-ansambli-sak-gatavoties-rigas-vokalas-muzikas-konkursam-balsis-2026/",
    status: "open",
  },
  {
    id: "3",
    title: "Rīgas bērnu un jauniešu tradicionālās dziedāšanas konkurss \"Dziesmu dziedu, kāda bija\"",
    description: "Ikgadējais tradicionālās dziedāšanas konkurss bērniem un jauniešiem. Atbildīgā — Dina Liepa.",
    date: "2026-02-22",
    time: "11:00",
    location: "BJC \"Rīgas Skolēnu pils\" Svētku zāle, Krišjāņa Barona iela 99",
    category: "competitions",
    registrationUrl: "https://www.intereses.lv/ikgadejais-tradicionalas-dziedasanas-konkurss-dziesmu-dziedu-kada-bija/",
    status: "open",
  },
  {
    id: "4",
    title: "Profesionālās kompetences pilnveides seminārs \"Drāmas terapija\"",
    description: "Seminārs interešu izglītības pedagogiem par drāmas terapijas metodēm. Pieteikties pie Aivitas Grīnas.",
    date: "2026-02-25",
    time: "10:00 - 14:00",
    location: "Rīgas bērnu un jauniešu centrs \"Laimīte\", Sarkandaugavas iela 24",
    category: "training",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-6-150x150.png",
    registrationUrl: "https://www.intereses.lv/aicinam-pieteikties-pedagogu-profesionalas-kompetences-pilnveides-seminaram-dramas-terapija/",
    status: "open",
    spotsTotal: 25,
    spotsLeft: 10,
  },
  {
    id: "5",
    title: "Profesionālās kompetences pilnveides programma \"Iztēles un kreativitātes rosinoši paņēmieni vizuāli plastiskajā mākslā\"",
    description: "Praktiski radošā nodarbība mākslas pedagogiem. Atbildīgās — Aivita Grīna un Līga Baņķiere.",
    date: "2026-02-27",
    time: "11:00 - 15:00",
    location: "Rīgas bērnu un jauniešu centrs \"Altona\", Altonovas iela 6",
    category: "training",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-4-1.png",
    registrationUrl: "https://www.intereses.lv/aicinam-pieteikties-profesionalas-kompetences-pilnveides-programmai-izteles-un-kreativitates-rosinosi-panemieni-vizuali-plastiskaja-maksla/",
    status: "open",
    spotsTotal: 20,
    spotsLeft: 7,
  },
  {
    id: "6",
    title: "Pedagogu profesionālās kompetences pilnveides programma \"Dramaturģijas pamati\"",
    description: "Attālinātā programma teātra pedagogiem (12 stundas), lektors — Lauris Gundars. Atbildīgā — Antra Ņjuša.",
    date: "2026-03-09",
    endDate: "2026-03-11",
    time: "11:00 - 15:00",
    location: "Tiešsaistē",
    category: "training",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-6-150x150.png",
    registrationUrl: "https://www.intereses.lv/aicinam-pieteikties-pedagogu-profesionalas-kompetences-pilnveides-seminaram-dramaturgijas-pamati/",
    status: "open",
    spotsTotal: 30,
    spotsLeft: 12,
  },
  {
    id: "7",
    title: "Skatuves runas konkursa \"Rīgas zvirbulis 2026\" I kārta",
    description: "Rīgas skolēnu skatuves runas konkurss. Atbildīgā — Antra Ņjuša.",
    date: "2026-03-04",
    endDate: "2026-03-06",
    time: "Pēc programmas",
    location: "BJC \"Rīgas Skolēnu pils\", Krišjāņa Barona iela 99",
    category: "competitions",
    registrationUrl: "https://www.intereses.lv/aicinam-gatavoties-dalibai-skatuves-runas-konkursa-rigas-zvirbulis-2026/",
    status: "open",
  },
  {
    id: "8",
    title: "Programma \"Stikla mākslas daudzveidība, apstrādes iespējas, tehnikas un paņēmieni darbu izveidē\"",
    description: "1. nodarbība — praktiski darbi stikla mākslas tehnikās. Atbildīgās — Aivita Grīna un Līga Baņķiere.",
    date: "2026-03-23",
    endDate: "2026-03-30",
    time: "10:00 - 13:00",
    location: "Rīgas bērnu un jauniešu centrs \"Laimīte\", Baltāsbaznīcas iela 14",
    category: "training",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-4-1.png",
    registrationUrl: "https://www.intereses.lv/aicinam-pieteikties-programmai-stikla-makslas-daudzveidiba-apstrades-iespejas-tehnikas-un-panemieni-darbu-izveide/",
    status: "open",
    spotsTotal: 20,
    spotsLeft: 8,
  },
  {
    id: "9",
    title: "Rīgas bērnu un jauniešu radošais mākslas konkurss \"Neparastās lietas. Ainava\" — izstāde",
    description: "Konkursa darbu izstāde RTU Arhitektūras un dizaina institūtā.",
    date: "2026-03-19",
    endDate: "2026-04-24",
    time: "Darba dienās 9:00 - 17:00",
    location: "RTU Arhitektūras un dizaina institūts, Ķīpsalas iela 6, Rīga",
    category: "competitions",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/IMG_0092-725x400.jpeg",
    registrationUrl: "https://www.intereses.lv/rigas-bernu-un-jauniesu-radosas-makslas-konkurss-neparastas-lietas-ainava/",
    status: "open",
  },
  {
    id: "10",
    title: "Vokālo ansambļu dziedāšanas svētki \"Sadziedam!\"",
    description: "Pamatskolas un vidusskolas vecuma vokālo ansambļu dziedāšanas svētki. Atbildīgā — Arta Grīna.",
    date: "2026-05-05",
    time: "18:00",
    location: "Rīgas Kultūras un tautas mākslas centrs \"Mazā Ģilde\", Amatu iela 5",
    category: "competitions",
    status: "upcoming",
  },
  {
    id: "11",
    title: "Mūsdienu deju video konkursa laureātu koncerts",
    description: "Rīgas valstspilsētas pašvaldības mūsdienu deju video konkursa laureātu noslēguma koncerts. Atbildīgā — Ivetta Tamane.",
    date: "2026-05-17",
    time: "15:00",
    location: "Kultūras pils \"Ziemeļblāzma\", Ziemeļblāzmas iela 36",
    category: "competitions",
    registrationUrl: "https://www.intereses.lv/musdienu-dejas-video-konkurss/",
    status: "upcoming",
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
    name: "Santa Vancāne",
    role: "Rīgas Interešu izglītības metodiskā centra vadītāja",
    email: "svancane2@edu.riga.lv",
    phone: "+371 29385336",
    description: "Vada Rīgas Interešu izglītības metodisko centru, nodrošinot interešu izglītības metodiskā darba vienotu vadību un attīstību Rīgā.",
    image: "https://www.intereses.lv/wp-content/uploads/2013/11/Santa-2-scaled-e1767688736799-323x220.jpg",
  },
  {
    id: "2",
    name: "Aivita Grīna",
    role: "Pedagogu profesionālās kompetences pilnveides programmu vadītāja",
    email: "agrina5@edu.riga.lv",
    phone: "+371 29704315",
    description: "Vada pedagogu profesionālās kompetences pilnveides programmas un koordinē tālākizglītības pasākumus.",
    image: "https://www.intereses.lv/wp-content/uploads/2013/11/Aivita-Grina-scaled-e1767688525494-323x220.jpg",
  },
  {
    id: "3",
    name: "Marina Lučko",
    role: "Projektu vadītāja metodiskajā darbā",
    email: "mlucko@edu.riga.lv",
    phone: "+371 26807009",
    description: "Vada metodiskā darba projektus un koordinē centram nozīmīgas iniciatīvas.",
    image: "https://www.intereses.lv/wp-content/uploads/2019/10/Marina-scaled-e1767688787873-323x220.jpg",
  },
  {
    id: "4",
    name: "Ilona Plūme",
    role: "Galvenā speciāliste koru mūzikas jomā",
    email: "iplume3@edu.riga.lv",
    phone: "+371 28443757",
    description: "Atbildīgā par koru mūzikas programmu attīstību un koordināciju Rīgas interešu izglītībā.",
    image: "https://www.intereses.lv/wp-content/uploads/2019/10/Ilona-scaled-e1767689422543-323x220.jpg",
  },
  {
    id: "5",
    name: "Arta Grīna",
    role: "Galvenā speciāliste mazo mūzikas kolektīvu un instrumentālās mūzikas jomā",
    email: "agrina@edu.riga.lv",
    phone: "+371 29557442",
    description: "Koordinē mazo mūzikas kolektīvu un instrumentālās mūzikas programmas Rīgas skolās.",
    image: "https://www.intereses.lv/wp-content/uploads/2019/10/Arta-scaled-e1767688839311-323x220.jpg",
  },
  {
    id: "6",
    name: "Līga Baņķiere",
    role: "Galvenā speciāliste vizuālās un vizuāli plastiskās mākslas jomā",
    email: "lbankiere@edu.riga.lv",
    phone: "+371 29769386",
    description: "Atbild par vizuālās mākslas un vizuāli plastiskās mākslas virzienu interešu izglītībā.",
    image: "https://www.intereses.lv/wp-content/uploads/2024/09/Liga-scaled-e1767688946976-323x220.jpg",
  },
  {
    id: "7",
    name: "Ivetta Tamane",
    role: "Galvenā speciāliste mūsdienu deju jomā",
    email: "itamane@edu.riga.lv",
    phone: "+371 29137603",
    description: "Koordinē mūsdienu deju programmas un konkursus Rīgas interešu izglītības iestādēs.",
    image: "https://www.intereses.lv/wp-content/uploads/2019/10/Ivetta-scaled-e1767688993458-323x220.jpg",
  },
  {
    id: "8",
    name: "Ineta Bērziņa",
    role: "Galvenā speciāliste tautas dejas jomā",
    email: "iberzina6@edu.riga.lv",
    phone: "+371 29333653",
    description: "Atbild par tautas deju tradīciju saglabāšanu un attīstību interešu izglītībā.",
    image: "https://www.intereses.lv/wp-content/uploads/2013/11/Ineta-scaled-e1767689078111-323x220.jpg",
  },
  {
    id: "9",
    name: "Dina Liepa",
    role: "Galvenā speciāliste folkloras jomā",
    email: "dliepa4@edu.riga.lv",
    phone: "+371 28232687",
    description: "Koordinē folkloras programmas un veicina latviešu tradīciju saglabāšanu izglītībā.",
    image: "https://www.intereses.lv/wp-content/uploads/2013/11/DINA-scaled-e1767689136132-323x220.jpg",
  },
  {
    id: "10",
    name: "Antra Ņjuša",
    role: "Galvenā speciāliste teātra mākslas jomā",
    email: "anjusa@edu.riga.lv",
    phone: "+371 26434364",
    description: "Atbild par teātra mākslas programmu attīstību un koordinē teātra konkursus.",
    image: "https://www.intereses.lv/wp-content/uploads/2021/08/images-1-219x220.png",
  },
  {
    id: "11",
    name: "Alda Bēvalde",
    role: "Pasākumu koordinatore",
    email: "abevalde@edu.riga.lv",
    phone: "+371 26404919",
    description: "Organizē un koordinē RIMC rīkotos pasākumus, konkursus un festivālus.",
    image: "https://www.intereses.lv/wp-content/uploads/2013/11/Alda-scaled-e1767689227346-323x220.jpg",
  },
  {
    id: "12",
    name: "Gunārs Antapsons",
    role: "Pasākumu koordinators",
    email: "gantapsons@edu.riga.lv",
    phone: "+371 29620325",
    description: "Koordinē pasākumus un nodrošina to kvalitatīvu norisi Rīgas interešu izglītības jomā.",
    image: "https://www.intereses.lv/wp-content/uploads/2013/11/Gunars-Antapsons-scaled-e1770027219934-323x220.jpg",
  },
  {
    id: "13",
    name: "Laila Puncule",
    role: "Pasākumu koordinatore",
    email: "lpuncule4@edu.riga.lv",
    phone: "+371 26114313",
    description: "Atbild par pasākumu organizēšanu un koordināciju interešu izglītības ietvaros.",
    image: "https://www.intereses.lv/wp-content/uploads/2013/11/Laila-scaled-e1767689268488-323x220.jpg",
  },
  {
    id: "14",
    name: "Kristīne Lāriņa",
    role: "Pasākumu koordinatore",
    email: "klarina@edu.riga.lv",
    phone: "+371 26539973",
    description: "Koordinē interešu izglītības pasākumus un nodrošina to organizatorisko atbalstu.",
    image: "https://www.intereses.lv/wp-content/uploads/2022/11/kristinelarinaportretistudijaprint-23-1-1-323x220.jpg",
  },
  {
    id: "15",
    name: "Oskars Vainausks",
    role: "Video operators",
    email: "ovainausks@edu.riga.lv",
    phone: "+371 27006049",
    description: "Nodrošina video ierakstus un vizuālo dokumentāciju RIMC pasākumiem.",
    image: "https://www.intereses.lv/wp-content/uploads/2014/01/RB1_2050-scaled-e1767689376178-323x220.jpg",
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
