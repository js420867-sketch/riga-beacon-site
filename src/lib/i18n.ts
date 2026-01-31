// Latvian translations - i18n ready structure
export const lv = {
  nav: {
    home: "Sākums",
    news: "Jaunumi",
    events: "Pasākumi",
    about: "Par mums",
    resources: "Resursi",
    contact: "Kontakti",
    search: "Meklēt",
    menu: "Izvēlne",
  },
  home: {
    hero: {
      title: "Rīgas Interešu izglītības metodiskais centrs",
      subtitle: "Atbalsts pedagogiem, skolēniem un vecākiem interešu izglītības jomā",
      cta: "Uzzināt vairāk",
      ctaSecondary: "Skatīt pasākumus",
    },
    sections: {
      latestNews: "Jaunākie jaunumi",
      upcomingEvents: "Tuvākie pasākumi",
      viewAll: "Skatīt visus",
    },
  },
  news: {
    title: "Jaunumi",
    description: "Aktuālākā informācija par interešu izglītību Rīgā",
    search: "Meklēt jaunumus...",
    categories: {
      all: "Visi",
      announcements: "Paziņojumi",
      competitions: "Konkursi",
      training: "Apmācības",
      projects: "Projekti",
    },
    readMore: "Lasīt vairāk",
    published: "Publicēts",
  },
  events: {
    title: "Pasākumi",
    description: "Plānotie pasākumi un aktivitātes",
    viewCalendar: "Kalendārs",
    viewList: "Saraksts",
    register: "Pieteikties",
    location: "Vieta",
    time: "Laiks",
    noEvents: "Nav plānotu pasākumu šajā periodā",
  },
  about: {
    title: "Par mums",
    mission: "Mūsu misija",
    team: "Mūsu komanda",
    history: "Vēsture",
    values: "Vērtības",
  },
  resources: {
    title: "Resursi",
    description: "Metodiskie materiāli un noderīgi resursi",
    categories: {
      all: "Visi resursi",
      methodical: "Metodiskie materiāli",
      documents: "Dokumenti",
      presentations: "Prezentācijas",
      videos: "Video materiāli",
    },
    download: "Lejupielādēt",
    fileSize: "Faila izmērs",
  },
  contact: {
    title: "Kontakti",
    description: "Sazinieties ar mums",
    form: {
      name: "Vārds, uzvārds",
      email: "E-pasts",
      subject: "Tēma",
      message: "Ziņojums",
      submit: "Nosūtīt",
      success: "Ziņojums veiksmīgi nosūtīts!",
    },
    info: {
      address: "Adrese",
      phone: "Tālrunis",
      email: "E-pasts",
      hours: "Darba laiks",
    },
  },
  common: {
    loading: "Ielādē...",
    error: "Kļūda",
    noResults: "Nav rezultātu",
    back: "Atpakaļ",
    next: "Tālāk",
    previous: "Iepriekšējais",
    showMore: "Rādīt vairāk",
    showLess: "Rādīt mazāk",
  },
  footer: {
    rights: "Visas tiesības aizsargātas",
    privacy: "Privātuma politika",
    accessibility: "Pieejamība",
  },
};

export type Translations = typeof lv;

// Current language (can be extended for multi-language support)
export const t = lv;
