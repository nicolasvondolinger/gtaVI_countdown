import { useState, useEffect } from 'react';

type SupportedLanguages = 'pt' | 'en' | 'es';

type Translations = {
  [key: string]: {
    release: string;
    countdown: string;
    selectTz: string;
    trailers: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    galleryTitle: string;
    galleryDescription: string;
    purchase: string;
  };
};

const translations: Translations = {
  pt: {
    release: "Data de Lançamento",
    countdown: "Contagem regressiva até 26 de maio de 2026 - 00:00",
    selectTz: "Selecionar Fuso Horário:",
    trailers: "Assista aos Trailers Oficiais",
    days: "Dias",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    galleryTitle: "Galeria de Personagens",
    galleryDescription: "Conheça os protagonistas do GTA VI",
    purchase: "ADQUIRA JÁ"
  },
  en: {
    release: "Release Date",
    countdown: "Countdown to May 26th, 2026 - 00:00",
    selectTz: "Select Timezone:",
    trailers: "Watch the Official Trailers",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    galleryTitle: "Characters Gallery",
    galleryDescription: "Meet the protagonists of GTA VI",
    purchase: "BUY NOW"
  },
  es: {
    release: "Fecha de Lanzamiento",
    countdown: "Cuenta regresiva para el 26 de mayo de 2026 - 00:00",
    selectTz: "Seleccionar Zona Horaria:",
    trailers: "Mira los Trailers Oficiales",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    galleryTitle: "Galería de Personajes",
    galleryDescription: "Conoce a los protagonistas de GTA VI",
    purchase: "COMPRAR AHORA"
  }
};

const galleryItemsTranslations = {
  pt: [
    {
      title: 'Jason quer uma vida fácil',
      description: 'Jason cresceu entre criminosos e traficantes. Depois de um período no Exército tentando escapar de sua adolescência problemática, ele acabou nas Keys fazendo o que sabe fazer melhor: trabalhando para traficantes locais. Talvez seja hora de tentar algo novo.'
    },
    {
      title: 'O pai de Lucia a ensinou a lutar',
      description: 'A vida sempre foi dura com ela. Lutar por sua família a levou à Penitenciária Leonida. Sorte a tirou de lá. Lucia aprendeu a lição - daqui para frente, apenas jogadas inteligentes.'
    }
  ],
  en: [
    {
      title: 'Jason wants an easy life',
      description: 'Jason grew up around gritters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners. It might be time to try something new.'
    },
    {
      title: 'Lucia\'s father taught her to fight',
      description: 'Life has been coming at her swinging ever since. Fighting for her family landed her in the Leonida Penitentiary. Sheer luck got her out. Lucia\'s learned her lesson – only smart moves from here.'
    }
  ],
  es: [
    {
      title: 'Jason quiere una vida fácil',
      description: 'Jason creció entre criminales y traficantes. Después de un período en el Ejército tratando de dejar atrás su problemática adolescencia, terminó en los Keys haciendo lo que mejor sabe hacer: trabajando para traficantes locales. Quizás sea hora de intentar algo nuevo.'
    },
    {
      title: 'El padre de Lucia le enseñó a luchar',
      description: 'La vida siempre ha sido dura con ella. Luchar por su familia la llevó a la Penitenciaría Leonida. La pura suerte la sacó de allí. Lucia ha aprendido la lección: de ahora en adelante, solo jugadas inteligentes.'
    }
  ]
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguages>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as SupportedLanguages;
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
      return;
    }

    const browserLanguage = navigator.language.split('-')[0] as SupportedLanguages;
    if (translations[browserLanguage]) {
      setCurrentLanguage(browserLanguage);
    }
  }, []);

  const changeLanguage = (lang: SupportedLanguages) => {
    if (translations[lang]) {
      setCurrentLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  const getTranslatedGalleryItems = () => {
    return galleryItemsTranslations[currentLanguage];
  };

  return {
    currentLanguage,
    translations: translations[currentLanguage],
    setCurrentLanguage: changeLanguage,
    getTranslatedGalleryItems
  };
};