// Real content from intereses.lv

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  fullContent?: string;
  category: string;
  newsType: "methodical" | "general";
  date: string;
  image?: string;
  author: string;
  authorRole: string;
  readingTime?: number;
  sourceUrl?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  fullContent?: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  category: string;
  image?: string;
  registrationUrl?: string;
  registrationDeadline?: string;
  organizer?: string;
  contactName?: string;
  contactEmail?: string;
  status?: "open" | "closed" | "upcoming";
  spotsTotal?: number;
  spotsLeft?: number;
  sourceUrl?: string;
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
    content: "Rīgas Bolderājas Jaunā pamatskola sadarbībā ar Rīgas valstspilsētas pašvaldības Izglītības, kultūras un sporta departamenta Sporta un jaunatnes pārvaldi aicina Rīgas izglītības iestāžu audzēkņus piedalīties radošajā mākslas konkursā \"Neparastās lietas. Ainava\".",
    fullContent: `Rīgas Bolderājas Jaunā pamatskola sadarbībā ar Rīgas valstspilsētas pašvaldības Izglītības, kultūras un sporta departamenta Sporta un jaunatnes pārvaldi aicina Rīgas izglītības iestāžu audzēkņus piedalīties radošajā mākslas konkursā **"Neparastās lietas. Ainava"**.

Konkurss rosina skolēnus iepazīt Latvijas ainavistu darbus, iedziļināties to noskaņās un kompozīcijās, kā arī radīt savas oriģinālas interpretācijas, izmantojot tikai **otrreizējās aprites materiālus** – kartonu, papīru, tekstilu, plastmasu, koka un metāla atlikumus un citus pieejamos resursus.

Tā ir iespēja attīstīt radošumu, domāt ilgtspējīgi, eksperimentēt ar faktūrām un krāsām, kā arī paraudzīties uz Latvijas ainavu no jauna skatapunkta.

Konkursa darbi jāiesniedz **2026. gada 19. martā no pl. 10:00 – 18:00** RTU Arhitektūras un dizaina institūtā – pārejā no Ķīpsalas ielas 6 uz Ķīpsalas ielu 6a, Rīgā. Veiksmīgākie darbi tiks eksponēti kopīgā izstādē.

**Aicinām skolēnus domāt ārpus ierastajiem rāmjiem un veidot neparastus darbus.**

Papildus informāciju meklē Rīgas Bolderājas Jaunās pamatskolas [mājaslapā](http://www.r19intereses.lv/). Nolikumu meklē [intereses.lv](https://www.intereses.lv/vizuala-un-vizuali-plastiska-maksla/nolikumi/).

*Informāciju sagatavoja: Dace Timule, Rīgas Bolderājas Jaunās pamatskolas izglītības metodiķe.*`,
    category: "competitions",
    newsType: "general",
    date: "2026-02-19",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/IMG_0092-725x400.jpeg",
    author: "Līga Baņķiere",
    authorRole: "Galvenā speciāliste vizuālās mākslas jomā",
    readingTime: 2,
    sourceUrl: "https://www.intereses.lv/rigas-bernu-un-jauniesu-radosas-makslas-konkurss-neparastas-lietas-ainava/",
  },
  {
    id: "2",
    title: "Aicinām pieteikties programmai \"Stikla mākslas daudzveidība, apstrādes iespējas, tehnikas un paņēmieni darbu izveidē\"",
    excerpt: "RIMC aicina pieteikties pedagogus profesionālās pilnveides programmai. Nodarbības notiks 2026. gada 23. martā un 30. martā no plkst. 10.00 līdz 13.00 Rīgas Bērnu un jauniešu centrā \"Laimīte\".",
    content: "Rīgas Interešu izglītības metodiskais centrs aicina pieteikties interešu izglītības programmu pedagogus profesionālās pilnveides programmas apguvei.",
    fullContent: `Rīgas Interešu izglītības metodiskais centrs aicina pieteikties interešu izglītības programmu pedagogus profesionālās pilnveides programmas **"Stikla mākslas daudzveidība, apstrādes iespējas, tehnikas un paņēmieni darbu izveidē"** (8 stundas) apguvei, kas norisināsies 2026. gada 23. martā un 30. martā no plkst. 10.00 līdz 13.00 Rīgas Bērnu un jauniešu centrā "Laimīte", Baltāsbaznīcas ielā 14, Rīgā.

**Lektore – Ilze Apine.**

**Programma piedāvā:**

Programma dod iespēju gūt zināšanas par stikla materiālu un tā specifiku, mākslinieciskās izteiksmes līdzekļiem, apstrādes iespējām, materiāliem un instrumentiem. Apgūt stikla apstrādes paņēmienus un tehnikas:
- kausēšanu, gravēšanu, kodināšanu;
- dažādu materiālu (arī dažādu stiklu) apvienojumu un sakausēšanas pamatprincipus;
- to pielietojumu mācību nodarbībās un jaunradē stikla darbu izveidē.

Nodarbību laikā tiks izgatavoti stikla dizaina priekšmeti – rotaslietas, dekori.

**Norises vieta un laiks:**
- Rīgas Bērnu un jauniešu centrs "Laimīte", Baltāsbaznīcas iela 14
- 2026. gada 23. un 30. marts
- No plkst. 10.00 līdz 13.00

**Pieteikuma anketa:** Pieejama [šeit](https://forms.office.com/e/).

**Informācijai:** Aivita Grīna, tālr. 29704315, e-pasts: agrina5@edu.riga.lv`,
    category: "training",
    newsType: "methodical",
    date: "2026-02-18",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-7.png",
    author: "Aivita Grīna",
    authorRole: "Pedagogu profesionālās kompetences pilnveides programmu vadītāja",
    readingTime: 3,
    sourceUrl: "https://www.intereses.lv/aicinam-pieteikties-programmai-stikla-makslas-daudzveidiba-apstrades-iespejas-tehnikas-un-panemieni-darbu-izveide/",
  },
  {
    id: "3",
    title: "Bērnu un jauniešu stikla mākslas konkurss-izstāde \"Anna izzina Rīgu. DURVIS, KAS NAV TIKAI DURVIS\"",
    excerpt: "Rīgas Tehniskās jaunrades nams \"Annas 2\" aicina pieteikties bērnu un jauniešu stikla mākslas konkursam-izstādei. Konkurss norisinās no 2026. gada 9. marta līdz 29. maijam.",
    content: "Rīgas Tehniskās jaunrades nams \"Annas 2\" aicina pieteikties bērnu un jauniešu stikla mākslas konkursam-izstādei.",
    fullContent: `Rīgas Tehniskās jaunrades nams "Annas 2" aicina pieteikties bērnu un jauniešu stikla mākslas konkursam-izstādei **"Anna izzina Rīgu. DURVIS, KAS NAV TIKAI DURVIS."**

Konkurss norisinās **no 2026. gada 9. marta līdz 29. maijam.**

Šī gada tēma aicina paraudzīties uz Rīgu citām acīm, uztverot durvis kā stāsta sākumu. Durvis pilsētvidē nav tikai ieeja un izeja, tās atver pagātnes noslēpumus, ved uz jauniem atklājumiem un glabā neskaitāmus Rīgas stāstus. Dalībnieki aicināti ielūkoties detaļās, faktūrās, ritmos un simbolos, kas slēpjas gan vēsturiskās, gan modernās Rīgas durvīs.

Konkursā aicināti piedalīties Rīgas vispārējās un interešu izglītības iestāžu audzēkņi vecumā no **7 līdz 25 gadiem**, trīs vecuma grupās:
1. 7–11 gadi
2. 12–15 gadi
3. 16–25 gadi

**Kas tiks darīts konkursā?**

Dalībnieki kopā ar pedagogiem vai individuāli izpētīs Annas ielas apkārtni, meklējot unikālas un iedvesmojošas durvis, slēptas detaļas un neparastus vizuālus atradumus. Redzētais tiks attēlots skiču formā, bet labākās idejas izvērtēs žūrija.

Žūrijas visaugstāk novērtētās skices būs iespēja realizēt stikla mākslas tehnikā, veidojot unikālu mākslas darbu.

**Svarīgi:**
- Pieteikšanās līdz 2026. gada 9. martam – [www.tjn.lv](http://www.tjn.lv)
- Skiču radīšanas plenēri: 10.03., 12.03., 17.03., 19.03.
- Skiču iesniegšana individuāli līdz 20. martam`,
    category: "competitions",
    newsType: "general",
    date: "2026-02-18",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/Stikla-konkurss_2026-725x400.jpeg",
    author: "Līga Baņķiere",
    authorRole: "Galvenā speciāliste vizuālās mākslas jomā",
    readingTime: 2,
    sourceUrl: "https://www.intereses.lv/bernu-un-jauniesu-stikla-makslas-konkurss-izstade-anna-izzina-rigu-durvis-kas-nav-tikai-durvis/",
  },
  {
    id: "4",
    title: "Aicinām pieteikties pedagogu profesionālās kompetences pilnveides semināram \"Vizuālās identitātes veidošana\"",
    excerpt: "RIMC aicina Rīgas pašvaldības izglītības iestāžu interešu izglītības skolotājus pieteikties semināram. Programma norisināsies 2026. gada 18. martā no plkst. 10.00 līdz 13.00.",
    content: "Rīgas Interešu izglītības metodiskais centrs aicina Rīgas pašvaldības izglītības iestāžu interešu izglītības skolotājus pieteikties semināra apguvei.",
    fullContent: `Rīgas Interešu izglītības metodiskais centrs aicina Rīgas pašvaldības izglītības iestāžu interešu izglītības skolotājus pieteikties pedagogu profesionālās kompetences pilnveides semināra **"Vizuālās identitātes veidošana"** apguvei.

Programma norisināsies 2026. gada **18. martā** no plkst. 10.00 līdz 13.00. **Lektore – Inese Vēriņa-Lubiņa.**

Mūsdienu izglītības vidē pedagogs bieži vien ir ne tikai skolotājs, bet arī sava pulciņa vai iestādes pasākumu organizators un vizuālā tēla veidotājs. Plakāts jaunu dalībnieku uzņemšanai, pateicības dāvana viesiem vai informatīvs materiāls par pasākumu – katra detaļa veido kopējo iespaidu.

Programma sniegs iespēju padziļināt izpratni par vizuālās prezentācijas materiālu izstrādi – no idejas un koncepta radīšanas līdz gatavam produktam. Tiks apskatīti būtiskākie principi, kas palīdz veidot mūsdienīgu un kvalitatīvu dizainu, izmantojot vienkāršus, bet efektīvus paņēmienus.

**Programmas tēmas:**
- Vizuālās identitātes pamati – kas veido zīmola tēlu?
- Krāsu teorija un tipogrāfija pedagoga darbā
- Kompozīcija un vizuālā hierarhija
- Praktiskie uzdevumi ar Canva un citiem rīkiem

**Pieteikšanās:** Pieejama [šeit](https://forms.office.com/e/).

**Informācijai:** Aivita Grīna, tālr. 29704315, e-pasts: agrina5@edu.riga.lv`,
    category: "training",
    newsType: "methodical",
    date: "2026-02-17",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-6.png",
    author: "Aivita Grīna",
    authorRole: "Pedagogu profesionālās kompetences pilnveides programmu vadītāja",
    readingTime: 3,
    sourceUrl: "https://www.intereses.lv/aicinam-pieteikties-pedagogu-profesionalas-kompetences-pilnveides-seminaram-vizualas-identitates-veidosana/",
  },
  {
    id: "5",
    title: "Aicinām pieteikties pedagogu profesionālās kompetences pilnveides programmai \"Dramaturģijas pamati\"",
    excerpt: "RIMC aicina piedalīties attālinātai profesionālās kompetences pilnveides programmai \"Dramaturģijas pamati\" (12 stundas). Programma norisināsies tiešsaistē 2026. gada 9. un 11. martā, lektors – Lauris Gundars.",
    content: "Rīgas Interešu izglītības metodiskais centrs aicina Rīgas pašvaldības izglītības iestāžu interešu izglītības skolotājus pieteikties attālinātai programmai.",
    fullContent: `Rīgas Interešu izglītības metodiskais centrs aicina Rīgas pašvaldības izglītības iestāžu interešu izglītības skolotājus pieteikties attālinātai profesionālās kompetences pilnveides programmai **"Dramaturģijas pamati"** (12 stundas) apguvei.

Programma norisināsies tiešsaistē 2026. gada **9. un 11. martā** no plkst. 11.00 līdz 15.00.

**Lektors – Lauris Gundars.**

Programmas dalībniekiem jāapgūst dramaturģisko tekstu jaunrades pamati, dramaturģijas amata rīku pielietošanas principi, kas pielietojami turpmākā teātra mākslas skolotāju ikdienas darbā.

**Pirms programmas apguves jāizlasa R. Blaumaņa luga "Skroderdienas Silmačos".**

**Programmas tēmas:**
- Dramaturģija un daiļliteratūra. Dramaturģijas pirmsākumi un iezīmes. Dramaturģiska darba struktūra.
- Dramaturģijas likumsakarības – dzīves procesu un loģikas kopija.
- Stāsts – dramaturģiska materiāla tehnoloģiskais pamats. Paradokss.
- Dramaturģiska darba vēstījums. Tēmas, ideja un virsuzdevums.
- Dramaturģiska teksta pamats – raksturs, tā izveides likumsakarības, paņēmieni.

**Pieteikuma anketa:** Pieejama [šeit](https://forms.office.com/Pages/ResponsePage.aspx?id=zQhK8ENaGEOcgp3Ru82TejvGZc4hkvFHlvXFNxrzeNhURVhXTzVVMEVVQTRNRjdNRlJPWENWRUZSWi4u).

**Informācijai:** Antra Ņjuša, tālr. 26434364, e-pasts: anjusa@edu.riga.lv`,
    category: "training",
    newsType: "methodical",
    date: "2026-02-17",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-3-1.png",
    author: "Antra Ņjuša",
    authorRole: "Galvenā speciāliste teātra mākslas jomā",
    readingTime: 2,
    sourceUrl: "https://www.intereses.lv/aicinam-pieteikties-pedagogu-profesionalas-kompetences-pilnveides-seminaram-dramaturgijas-pamati/",
  },
  {
    id: "6",
    title: "Stikla mākslinieku izstāde, kas veltīta Krišjāņa Valdemāra piemiņai",
    excerpt: "Ceturtdien, 19. februārī plkst. 16.00 Rīgas domes foajē atklās stikla mākslinieku izstādi, veltītu izcilā jaunlatvieša Krišjāņa Valdemāra piemiņai.",
    content: "Ceturtdien, 19. februārī plkst. 16.00 Rīgas domes foajē atklās stikla mākslinieku izstādi.",
    fullContent: `Ceturtdien, **19. februārī plkst. 16.00** Rīgas domes foajē atklās stikla mākslinieku izstādi, veltītu izcilā jaunlatvieša, politiķa un valstsvīra, kultūras un sabiedriskā darbinieka, latviešu jūrniecības attīstītāja **Krišjāņa Valdemāra** piemiņai.

Foajē tiks izstādīti 6. Latvijas jaunatnes stikla konkursantu darbi un konkursa žūrijas locekļu – Latvijā un pasaulē pazīstamu mākslinieku darbi.

Blakus mākslas skolu un interešu izglītības studiju audzēkņu darbiem varēs baudīt **Daiņa Gudovska**, ilggadēja LMA pasniedzēja, **Andas Munkevicas** – AM Studio vadītājas darbi, kā arī **Martas Ģibietes**, **Ramonas Pēkšēnas**, **Margaritas Budzes**, **Janas Kovaļevskas**, **Ilzes Rimicānes** un **Ingas Jaunzemes** darbi.

Izstādes centrā eksponēts **Garkalnes Mākslas skolas audzēknes Valērijas Laumas Drapezas** darbs, kurš stikla konkursā ieguva **1. vietu** un ataino burenieku, kas pilnās burās traucas uz priekšu. Burenieks simbolizē latvjus, kas neskatoties ne uz kādiem vējiem nelokāmi dodas uz priekšu nākotnē.

Izstādē ir uzsvērta stikla mākslinieku nerakstītās ģildes pēctecības nozīmība un latvisko vērtību pārneses nepārtrauktība stikla mākslā.

**Vieta:** Rīgas domes foajē, Rātslaukums 1, Rīga
**Laiks:** 19. februāris, plkst. 16:00`,
    category: "announcements",
    newsType: "general",
    date: "2026-02-18",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/598142831_122159405120643103_9124266429408214591_n-725x400.jpg",
    author: "Santa Vancāne",
    authorRole: "RIMC vadītāja",
    readingTime: 2,
    sourceUrl: "https://www.intereses.lv/stikla-makslinieku-izstade-kas-veltita-krisjana-valdemara-pieminai/",
  },
  {
    id: "7",
    title: "24 stundu spēļu izstrādes hakatons jeb game jam vidusskolēniem – \"Campfire Riga\"",
    excerpt: "Aicinām vidusskolēnus piedalīties 24 stundu spēļu izstrādes hakatonā. Reģistrācija atvērta jauniešiem, kuri interesējas par spēļu izstrādi, programmēšanu un radošu domāšanu.",
    content: "Aicinām vidusskolēnus piedalīties 24 stundu spēļu izstrādes hakatonā jeb game jam \"Campfire Riga\".",
    fullContent: `Rīgas Tehniskās jaunrades namā "Annas 2" Annas ielā 2, Rīgā no **28. februāra līdz 1. martam**, norisināsies pirmais 24 stundu spēļu izstrādes hakatons jeb game jam vidusskolēniem – **"Campfire Riga"**.

Campfire ir globāla iniciatīva, kuras ietvaros dažādās pasaules pilsētās notiks vairāk nekā 200 spēļu izstrādes hakatoni.

Atšķirībā no tradicionāliem hakatoniem, "Campfire Riga" galvenais mērķis ir dot jauniešiem iespēju piedalīties un radīt spēli, ar kuru viņi paši var lepoties – neatkarīgi no iepriekšējās programmēšanas pieredzes.

Jaunieši vecumā no **13 līdz 18 gadiem** apvienosies komandās, lai 24 stundu laikā no nulles izstrādātu savu spēli, reāli programmējot.

> "Mēs vēlamies parādīt Latvijas jauniešiem, ka programmēšana nav tikai garas stundas pie mācību grāmatām, bet gan iespēja pašiem radīt savas pasaules un spēles." – Ernests Mikuts, organizators

24 stundu formāts ļauj dalībniekiem padziļināti strādāt pie savām idejām bez pārmērīgas steigas. Tas mazina stresu, veicina ciešāku sadarbību komandās un dod iespēju apgūt jaunas tehnoloģijas.

**Norises vieta:** RTJN "Annas 2", Annas iela 2, Rīga
**Laiks:** 28. februāris – 1. marts, 2026`,
    category: "projects",
    newsType: "general",
    date: "2026-02-17",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-7.png",
    author: "Mārtiņš Liepiņš",
    authorRole: "Pasākumu koordinators",
    readingTime: 2,
    sourceUrl: "https://www.intereses.lv/24-stundu-spelu-izstrades-hakatons-jeb-game-jam-vidusskoleniem-campfire-riga/",
  },
  {
    id: "8",
    title: "Aicinām pieteikties profesionālās kompetences pilnveides programmai \"Iztēles un kreativitātes rosinoši paņēmieni vizuāli plastiskajā mākslā\"",
    excerpt: "Programma norisināsies 2026. gada 27. februārī no plkst. 11.00 līdz 15.00 Rīgas bērnu un jauniešu centrā \"Altona\". Pieteikšanās pie Aivitas Grīnas.",
    content: "Rīgas Interešu izglītības metodiskais centrs aicina pieteikties profesionālās kompetences pilnveides programmai.",
    fullContent: `Rīgas Interešu izglītības metodiskais centrs aicina interešu izglītības pedagogus 27. februārī pieteikties profesionālās kompetences pilnveides programmas **"Iztēles un kreativitātes rosinoši paņēmieni vizuāli plastiskajā mākslā"** apguvei.

Programma sniedz plašu ieskatu radošā darba procesa norisē un rezultāta sasniegšanā. Programmas lektore **Ima Mauriņa–Mīlgrāve** ir apkopojusi izzinošu informāciju, uzskaites un metodiskos materiālus.

**Tematika:**
- Papīra materiāla un plastikas specifika, apstrādes iespējas, mākslinieciskās izteiksmes līdzekļi, tehnikas paņēmieni, nepieciešamie materiāli un instrumenti;
- Metodiskie ieteikumi darba organizēšanai un pozitīva rezultāta sasniegšanai;
- Iztēles rosinošu paņēmienu pielietojums, izmantojot mākslas darbu vēstījumus;
- Daba kā iztēles rosināšanas avots, kompozīcijas izveide, eksperimentāli un neordināri risinājumi sadzīves formu "otrajai dzīvei".

**Norises vieta un laiks:**
- Rīgas bērnu un jauniešu centrs "Altona", Altonovas iela 6
- 2026. gada 27. februāris
- No plkst. 11.00 līdz 15.00

> ⚠️ Grupa nokomplektēta

**Informācijai:** Aivita Grīna, tālr. 29704315, e-pasts: agrina5@edu.riga.lv`,
    category: "training",
    newsType: "methodical",
    date: "2026-02-15",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-4-1.png",
    author: "Aivita Grīna",
    authorRole: "Pedagogu profesionālās kompetences pilnveides programmu vadītāja",
    readingTime: 3,
    sourceUrl: "https://www.intereses.lv/aicinam-pieteikties-profesionalas-kompetences-pilnveides-programmai-izteles-un-kreativitates-rosinosi-panemieni-vizuali-plastiskaja-maksla/",
  },
];

export const eventItems: EventItem[] = [
  {
    id: "1",
    title: "Rīgas vokālās mūzikas konkursa \"Balsis 2026\" I kārta — Kurzemes rajona ansambļi",
    description: "Rīgas vokālās mūzikas konkursa \"Balsis 2026\" I kārta Kurzemes rajona, Latgales, Zemgales priekšpilsētu B grupas ansambļiem.",
    fullContent: `Tradicionālā vokālās mūzikas konkursa "Balsis 2026" I kārta Rīgas pilsētā norisināsies no 2026. gada 19. līdz 21. februārim.

**Konkursa norise**

Konkursā katram ansamblim būs jāizpilda 3 dziesmas:
- Pirmā no tām – brīvas izvēles latviešu tautasdziesma *a cappella* unisonā;
- Otrā un trešā dziesma – brīvas izvēles latviešu tautasdziesmas apdare vai latviešu autora oriģināldziesma (ar vai bez klavieru pavadījuma).

**B grupas Latgales, Kurzemes un Zemgales priekšpilsētu muzikālie kolektīvi** 20. februārī dziedās Rīgas bērnu un jauniešu centrā "Altona", Altonavas ielā 6.

Pēc I kārtas konkursa rezultātiem labākie ansambļi katrā vecuma grupā tiks izvirzīti konkursa **II kārtai** Rīgas pilsētā, kas norisināsies no 2026. gada 2.–3. martam.

**Pieteikšanās**

Pieteikumu dalībai Konkursa I kārtā no vokālā ansambļa vadītājiem gaidīja līdz 2026. gada 11. februārim.

**Atbildīgā:** Arta Grīna`,
    date: "2026-02-20",
    time: "14:00",
    location: "Rīgas Bērnu un jauniešu centrs \"Altona\", Altonavas iela 6",
    category: "competitions",
    image: "https://www.intereses.lv/wp-content/uploads/2025/12/Balsis-2026-1.png",
    registrationUrl: "https://forms.office.com/e/ZLxdS6Mjnv",
    organizer: "Rīgas Interešu izglītības metodiskais centrs",
    contactName: "Arta Grīna",
    contactEmail: "agrina@edu.riga.lv",
    sourceUrl: "https://www.intereses.lv/vokalie-ansambli-sak-gatavoties-rigas-vokalas-muzikas-konkursam-balsis-2026/",
    status: "open",
  },
  {
    id: "2",
    title: "Rīgas vokālās mūzikas konkursa \"Balsis 2026\" I kārta — A grupas ansambļi",
    description: "Rīgas vokālās mūzikas konkursa \"Balsis 2026\" I kārta visu rajonu un priekšpilsētu A grupas ansambļiem.",
    fullContent: `Tradicionālā vokālās mūzikas konkursa "Balsis 2026" I kārta Rīgas pilsētā norisināsies no 2026. gada 19. līdz 21. februārim.

**Konkursa norise**

Konkursā katram ansamblim būs jāizpilda 3 dziesmas:
- Pirmā no tām – brīvas izvēles latviešu tautasdziesma *a cappella* unisonā;
- Otrā un trešā dziesma – brīvas izvēles latviešu tautasdziesmas apdare vai latviešu autora oriģināldziesma (ar vai bez klavieru pavadījuma).

**Visus A grupas kolektīvus** 21. februārī klausīsimies Rīgas pamatskolā "Rīdze", Krišjāņa Valdemāra ielā 2.

Pēc I kārtas konkursa rezultātiem labākie ansambļi katrā vecuma grupā tiks izvirzīti konkursa **II kārtai** Rīgas pilsētā, kas norisināsies no 2026. gada 2.–3. martam.

**Atbildīgā:** Arta Grīna`,
    date: "2026-02-21",
    time: "11:00",
    location: "Rīgas pamatskola \"Rīdze\", Krišjāņa Valdemāra iela 2",
    category: "competitions",
    image: "https://www.intereses.lv/wp-content/uploads/2025/12/Balsis-2026-1.png",
    registrationUrl: "https://forms.office.com/e/ZLxdS6Mjnv",
    organizer: "Rīgas Interešu izglītības metodiskais centrs",
    contactName: "Arta Grīna",
    contactEmail: "agrina@edu.riga.lv",
    sourceUrl: "https://www.intereses.lv/vokalie-ansambli-sak-gatavoties-rigas-vokalas-muzikas-konkursam-balsis-2026/",
    status: "open",
  },
  {
    id: "3",
    title: "Rīgas bērnu un jauniešu tradicionālās dziedāšanas konkurss \"Dziesmu dziedu, kāda bija\"",
    description: "Ikgadējais tradicionālās dziedāšanas konkurss bērniem un jauniešiem Rīgas Skolēnu pilī.",
    fullContent: `Ikgadējais tradicionālās dziedāšanas konkurss "Dziesmu dziedu, kāda bija" jau tūlīt! Aicinām visus dziedātgribētājus apgūt ko jaunu – izmēģināt savas prasmes solo vai dueta dziedāšanā, baudot tradicionālo skanējumu!

Jau šī gada **22. februārī Bērnu un jauniešu centrs "Rīgas Skolēnu pils"** tiks pieskandināts ar skaļām bērnu balsīm! Tiks izdziedātās gan talku dziesmas, gan pavasara rotāšanās, gan šūpuļdziesmas, gan bērnu dziesmas, neiztiksim bez puišu un meitu dziesmām, kuri jau lūkojās precību virzienā.

**Konkursa mērķis** ir dalībniekiem iepazīt un izkopt dažādus tradicionālās dziedāšanas paņēmienus, bagātinot savu muzikālo pieredzi. Katrs dalībnieks konkursā dzied divas neapdarinātas tautas dziesmas, atbilstoši manierei kādā situācijā senāk tās tikušas dziedātas.

Konkurss notiek jau vairāk kā **divdesmit gadus** un katru gadu Rīgā tajā piedalās vairāki desmiti dziedātāju.

**Pieteikšanās:** Aizpildītu pieteikumu dalībai Konkursā nosūta Dīnai Liepai uz e-pastu dliepa4@edu.riga.lv.`,
    date: "2026-02-22",
    time: "11:00",
    location: "BJC \"Rīgas Skolēnu pils\" Svētku zāle, Krišjāņa Barona iela 99",
    category: "competitions",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-1.png",
    organizer: "Rīgas Interešu izglītības metodiskais centrs",
    contactName: "Dina Liepa",
    contactEmail: "dliepa4@edu.riga.lv",
    sourceUrl: "https://www.intereses.lv/ikgadejais-tradicionalas-dziedasanas-konkurss-dziesmu-dziedu-kada-bija/",
    status: "open",
  },
  {
    id: "4",
    title: "Profesionālās kompetences pilnveides seminārs \"Drāmas terapija\"",
    description: "Seminārs interešu izglītības pedagogiem par drāmas terapijas metodēm. Lektore – Anna Šteina, sertificēta drāmas terapeite.",
    fullContent: `Rīgas Interešu izglītības metodiskais centrs aicina Rīgas pašvaldības izglītības iestāžu interešu izglītības pedagogus pieteikties profesionālās kompetences pilnveides semināra **"Drāmas terapija un drāmas metodes"** apguvei.

Programmas dalībnieki gūs ieskatu drāmas terapijas pamatos un metodēs. **Lektore – Anna Šteina** – sertificēta drāmas terapeite, sertificēta supervizore, teātra un runas pedagogs, otrā līmeņa EMDR terapijas metodes lietotājs dalīsies savā pieredzē:

- Kādus uzdevumus un vingrinājumus ikdienā izmantot darbā ar audzēkņiem, kuriem ir grūti izteikties verbāli, ar uzvedības, uzmanības un mācīšanās traucējumiem;
- Kā arī tiem, kuriem ir emocionālas un psiholoģiskas grūtības.

**Aicinām uz semināru ierasties ērtā apģērbā un apavos, jo notiks arī praktiskie vingrinājumi.**

> ⚠️ Grupa nokomplektēta`,
    date: "2026-02-25",
    time: "10:00 - 14:00",
    location: "Rīgas bērnu un jauniešu centrs \"Laimīte\", Sarkandaugavas iela 24",
    category: "training",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-3-1.png",
    registrationUrl: "https://forms.office.com/e/BUspEY32En",
    registrationDeadline: "2026-02-23",
    organizer: "Rīgas Interešu izglītības metodiskais centrs",
    contactName: "Aivita Grīna",
    contactEmail: "agrina5@edu.riga.lv",
    sourceUrl: "https://www.intereses.lv/aicinam-pieteikties-pedagogu-profesionalas-kompetences-pilnveides-seminaram-dramas-terapija/",
    status: "open",
    spotsTotal: 25,
    spotsLeft: 0,
  },
  {
    id: "5",
    title: "Profesionālās kompetences pilnveides programma \"Iztēles un kreativitātes rosinoši paņēmieni vizuāli plastiskajā mākslā\"",
    description: "Praktiski radošā nodarbība mākslas pedagogiem. Lektore – Ima Mauriņa-Mīlgrāve.",
    fullContent: `Rīgas Interešu izglītības metodiskais centrs aicina interešu izglītības pedagogus pieteikties profesionālās kompetences pilnveides programmas **"Iztēles un kreativitātes rosinoši paņēmieni vizuāli plastiskajā mākslā"** apguvei.

Programma sniedz plašu ieskatu radošā darba procesa norisē un rezultāta sasniegšanā. Programmas lektore **Ima Mauriņa–Mīlgrāve** ir apkopojusi izzinošu informāciju, uzskaites un metodiskos materiālus. Programma iepazīstina ar izstrādātu pieeju iztēles un kreativitātes rosināšanas procesa attīstīšanai.

**Tematika:**
- Papīra materiāla un plastikas specifika, apstrādes iespējas, mākslinieciskās izteiksmes līdzekļi, tehnikas paņēmieni, nepieciešamie materiāli un instrumenti;
- Metodiskie ieteikumi darba organizēšanai un pozitīva rezultāta sasniegšanai;
- Iztēles rosinošu paņēmienu pielietojums, izmantojot mākslas darbu vēstījumus;
- Daba kā iztēles rosināšanas avots, kompozīcijas izveide, eksperimentāli un neordināri risinājumi.

> ⚠️ Grupa nokomplektēta`,
    date: "2026-02-27",
    time: "11:00 - 15:00",
    location: "Rīgas bērnu un jauniešu centrs \"Altona\", Altonovas iela 6",
    category: "training",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-725-x-400-pikseli-4-1.png",
    organizer: "Rīgas Interešu izglītības metodiskais centrs",
    contactName: "Aivita Grīna",
    contactEmail: "agrina5@edu.riga.lv",
    sourceUrl: "https://www.intereses.lv/aicinam-pieteikties-profesionalas-kompetences-pilnveides-programmai-izteles-un-kreativitates-rosinosi-panemieni-vizuali-plastiskaja-maksla/",
    status: "open",
    spotsTotal: 20,
    spotsLeft: 0,
  },
  {
    id: "6",
    title: "Pedagogu profesionālās kompetences pilnveides programma \"Dramaturģijas pamati\"",
    description: "Attālinātā programma teātra pedagogiem (12 stundas), lektors — Lauris Gundars.",
    fullContent: `Rīgas Interešu izglītības metodiskais centrs aicina Rīgas pašvaldības izglītības iestāžu interešu izglītības skolotājus pieteikties attālinātai profesionālās kompetences pilnveides programmai **"Dramaturģijas pamati"** (12 stundas) apguvei.

Programma norisināsies tiešsaistē 2026. gada **9. un 11. martā** no plkst. 11.00 līdz 15.00.

**Lektors – Lauris Gundars.**

**Pirms programmas apguves jāizlasa R. Blaumaņa luga "Skroderdienas Silmačos".**

**Programmas tēmas:**
- Dramaturģija un daiļliteratūra. Dramaturģijas pirmsākumi. Dramaturģijas iezīmes. Dramaturģiska darba struktūra.
- Dramaturģijas likumsakarības – dzīves procesu un loģikas kopija. Stāsts – dramaturģiska materiāla tehnoloģiskais pamats.
- Paradokss. Dramaturģiska darba vēstījums. Tēmas, ideja un virsuzdevums.
- Dramaturģiska teksta pamats – raksturs, tā izveides likumsakarības, paņēmieni.`,
    date: "2026-03-09",
    endDate: "2026-03-11",
    time: "11:00 - 15:00",
    location: "Tiešsaistē (MS Teams)",
    category: "training",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-3-1.png",
    registrationUrl: "https://forms.office.com/Pages/ResponsePage.aspx?id=zQhK8ENaGEOcgp3Ru82TejvGZc4hkvFHlvXFNxrzeNhURVhXTzVVMEVVQTRNRjdNRlJPWENWRUZSWi4u",
    organizer: "Rīgas Interešu izglītības metodiskais centrs",
    contactName: "Antra Ņjuša",
    contactEmail: "anjusa@edu.riga.lv",
    sourceUrl: "https://www.intereses.lv/aicinam-pieteikties-pedagogu-profesionalas-kompetences-pilnveides-seminaram-dramaturgijas-pamati/",
    status: "open",
    spotsTotal: 30,
    spotsLeft: 12,
  },
  {
    id: "7",
    title: "Skatuves runas konkursa \"Rīgas zvirbulis 2026\" I kārta",
    description: "Rīgas skolēnu skatuves runas konkurss Bērnu un jauniešu centrā \"Rīgas Skolēnu pils\".",
    fullContent: `Rīgas valstspilsētas pašvaldības izglītības iestāžu teātra mākslas jomas interešu izglītības programmu pedagogi aicināti sagatavot audzēkņus dalībai Skatuves runas konkursā **"Rīgas zvirbulis 2026"**, kas norisināsies 2026. gada martā un aprīlī Bērnu un jauniešu centrā "Rīgas Skolēnu pils".

**Konkursa tēma:** dzīvība, brīvība, zināšanas, atbildība, tolerance, ģimene, tradīcijas.

**Konkursa nosacījumi:**
- Dalībnieks runā vienu prozas un vienu dzejas darbu. Vienu no darbiem var izpildīt latviešu valodas dialektā/izloksnē.
- Katrs priekšnesums nevar pārsniegt trīs minūtes.

**Mērķis:** Bērnu un jauniešu kultūras izpratnes un pašizpausmes mākslā lietpratības veicināšana.

**Konkursa norises kārtas:**
- I kārta no 2026. gada 4. marta līdz 6. martam – BJC "Rīgas Skolēnu pils", Krišjāņa Barona ielā 99;
- II kārta 2026. gada 2. aprīlī.

**Pieteikšanās:** Iestādes Konkursam var pieteikt ne vairāk kā 2 dalībniekus katrā vecuma grupā. Pieteikuma anketa aizpildāma līdz 2026. gada 19. februāra plkst. 15.00.`,
    date: "2026-03-04",
    endDate: "2026-03-06",
    time: "Pēc programmas",
    location: "BJC \"Rīgas Skolēnu pils\", Krišjāņa Barona iela 99",
    category: "competitions",
    image: "https://www.intereses.lv/wp-content/uploads/2026/01/Zvirbulis-2026.jpg",
    registrationUrl: "https://forms.office.com/e/CCe6jJQ2h3",
    registrationDeadline: "2026-02-19",
    organizer: "Rīgas Interešu izglītības metodiskais centrs",
    contactName: "Antra Ņjuša",
    contactEmail: "anjusa@edu.riga.lv",
    sourceUrl: "https://www.intereses.lv/aicinam-gatavoties-dalibai-skatuves-runas-konkursa-rigas-zvirbulis-2026/",
    status: "open",
  },
  {
    id: "8",
    title: "Programma \"Stikla mākslas daudzveidība, apstrādes iespējas, tehnikas un paņēmieni darbu izveidē\"",
    description: "Profesionālās pilnveides programma stikla mākslas tehnikās. Lektore – Ilze Apine.",
    fullContent: `Rīgas Interešu izglītības metodiskais centrs aicina pieteikties interešu izglītības programmu pedagogus profesionālās pilnveides programmas **"Stikla mākslas daudzveidība, apstrādes iespējas, tehnikas un paņēmieni darbu izveidē"** (8 stundas) apguvei.

**Lektore – Ilze Apine.**

**Programma piedāvā:**

Programma dod iespēju gūt zināšanas par stikla materiālu un tā specifiku, mākslinieciskās izteiksmes līdzekļiem, apstrādes iespējām, materiāliem un instrumentiem. Apgūt stikla apstrādes paņēmienus un tehnikas:
- kausēšana, gravēšana, kodināšana;
- dažādu materiālu (arī dažādu stiklu) apvienojums un sakausēšanas pamatprincipi;
- pielietojums mācību nodarbībās un jaunradē stikla darbu izveidē.

Nodarbību laikā tiks izgatavoti stikla dizaina priekšmeti – rotaslietas, dekori.

**Norises laiks:** 2026. gada 23. un 30. marts, no plkst. 10.00 līdz 13.00.`,
    date: "2026-03-23",
    endDate: "2026-03-30",
    time: "10:00 - 13:00",
    location: "Rīgas bērnu un jauniešu centrs \"Laimīte\", Baltāsbaznīcas iela 14",
    category: "training",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-7.png",
    registrationUrl: "https://forms.office.com/e/",
    organizer: "Rīgas Interešu izglītības metodiskais centrs",
    contactName: "Aivita Grīna",
    contactEmail: "agrina5@edu.riga.lv",
    sourceUrl: "https://www.intereses.lv/aicinam-pieteikties-programmai-stikla-makslas-daudzveidiba-apstrades-iespejas-tehnikas-un-panemieni-darbu-izveide/",
    status: "open",
    spotsTotal: 20,
    spotsLeft: 8,
  },
  {
    id: "9",
    title: "Rīgas bērnu un jauniešu radošais mākslas konkurss \"Neparastās lietas. Ainava\" — izstāde",
    description: "Konkursa darbu izstāde RTU Arhitektūras un dizaina institūtā. Darbi veidoti tikai no otrreizējās aprites materiāliem.",
    fullContent: `Rīgas Bolderājas Jaunā pamatskola sadarbībā ar Rīgas valstspilsētas pašvaldības Izglītības, kultūras un sporta departamenta Sporta un jaunatnes pārvaldi aicina Rīgas izglītības iestāžu audzēkņus piedalīties radošajā mākslas konkursā **"Neparastās lietas. Ainava"**.

Konkurss rosina skolēnus iepazīt Latvijas ainavistu darbus, iedziļināties to noskaņās un kompozīcijās, kā arī radīt savas oriģinālas interpretācijas, izmantojot tikai **otrreizējās aprites materiālus** – kartonu, papīru, tekstilu, plastmasu, koka un metāla atlikumus un citus pieejamos resursus.

Tā ir iespēja attīstīt radošumu, domāt ilgtspējīgi, eksperimentēt ar faktūrām un krāsām, kā arī paraudzīties uz Latvijas ainavu no jauna skatapunkta.

**Darbu iesniegšana:** Konkursa darbi jāiesniedz **2026. gada 19. martā no pl. 10:00 – 18:00** RTU Arhitektūras un dizaina institūtā – pārejā no Ķīpsalas ielas 6 uz Ķīpsalas ielu 6a, Rīgā.

Veiksmīgākie darbi tiks eksponēti kopīgā izstādē.

**Aicinām skolēnus domāt ārpus ierastajiem rāmjiem un veidot neparastus darbus.**

*Informāciju sagatavoja: Dace Timule, Rīgas Bolderājas Jaunās pamatskolas izglītības metodiķe.*`,
    date: "2026-03-19",
    endDate: "2026-04-24",
    time: "Darba dienās 9:00 - 17:00",
    location: "RTU Arhitektūras un dizaina institūts, Ķīpsalas iela 6, Rīga",
    category: "competitions",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/IMG_0092-725x400.jpeg",
    organizer: "Rīgas Bolderājas Jaunā pamatskola",
    contactName: "Dace Timule",
    sourceUrl: "https://www.intereses.lv/rigas-bernu-un-jauniesu-radosas-makslas-konkurss-neparastas-lietas-ainava/",
    status: "open",
  },
  {
    id: "10",
    title: "Vokālo ansambļu dziedāšanas svētki \"Sadziedam!\"",
    description: "Pamatskolas un vidusskolas vecuma vokālo ansambļu dziedāšanas svētki Rīgas kultūras centrā \"Mazā Ģilde\".",
    fullContent: `Rīgas vokālo ansambļu dziedāšanas svētki "Sadziedam!" pulcēs pamatskolas un vidusskolas vecuma vokālos ansambļus kopīgā muzicēšanas vakarā Rīgas Kultūras un tautas mākslas centrā "Mazā Ģilde".

Pasākums notiks **2026. gada 5. maijā** plkst. 18:00.

**Atbildīgā:** Arta Grīna`,
    date: "2026-05-05",
    time: "18:00",
    location: "Rīgas Kultūras un tautas mākslas centrs \"Mazā Ģilde\", Amatu iela 5",
    category: "competitions",
    image: "https://www.intereses.lv/wp-content/uploads/2025/12/Balsis-2026-1.png",
    organizer: "Rīgas Interešu izglītības metodiskais centrs",
    contactName: "Arta Grīna",
    contactEmail: "agrina@edu.riga.lv",
    status: "upcoming",
  },
  {
    id: "11",
    title: "Mūsdienu deju video konkursa laureātu koncerts",
    description: "Rīgas valstspilsētas pašvaldības mūsdienu deju video konkursa laureātu noslēguma koncerts.",
    fullContent: `Rīgas valstspilsētas pašvaldības mūsdienu deju video konkursa laureātu noslēguma koncerts notiks **2026. gada 17. maijā** plkst. 15:00 Kultūras pilī "Ziemeļblāzma".

Koncertā uzstāsies konkursa laureāti un labāko darbu autori mūsdienu deju jomā.

**Atbildīgā:** Ivetta Tamane`,
    date: "2026-05-17",
    time: "15:00",
    location: "Kultūras pils \"Ziemeļblāzma\", Ziemeļblāzmas iela 36",
    category: "competitions",
    image: "https://www.intereses.lv/wp-content/uploads/2026/02/FB-un-Instagram-posti-5.png",
    organizer: "Rīgas Interešu izglītības metodiskais centrs",
    contactName: "Ivetta Tamane",
    contactEmail: "itamane@edu.riga.lv",
    sourceUrl: "https://www.intereses.lv/musdienu-dejas-video-konkurss/",
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
