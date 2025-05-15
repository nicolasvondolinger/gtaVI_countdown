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
    },
    {
      title: 'E se tudo na internet fosse verdade?',
      description: 'Amigo de Jason e associado de Brian, Cal se sente mais seguro em casa, bisbilhotando as comunicações da Guarda Costeira com algumas cervejas e algumas abas privadas abertas.'
    },
    {
      title: '"Tudo é sobre coração - o Valete de Copas"',
      description: 'Boobie é uma lenda local de Vice City - e age como tal. Um dos poucos que transformou seu tempo nas ruas em um império legítimo, abrangendo imóveis, um clube de strip e um estúdio de gravação - Boobie é todo sorrisos até a hora de falar de negócios.'
    },
    {
      title: '"Apenas Raw... Records"',
      description: 'Dre\'Quan sempre foi mais um malandro do que um gangster. Mesmo quando estava vendendo drogas nas ruas para sobreviver, entrar para a música sempre foi o objetivo.'
    },
    {
      title: '"Vídeos virais. Ganchos virais."',
      description: 'Bae-Luxe e Roxy, conhecidas como Real Dimez, são amigas desde o ensino médio - garotas com a malícia necessária para transformar o tempo que passaram extorquindo traficantes locais em dinheiro vivo através de faixas de rap picantes e uma presença implacável nas redes sociais.'
    },
    {
      title: '"Experiência conta."',
      description: 'Confiança, charme e astúcia - Raul é um assaltante de bancos experiente, sempre em busca de talentos dispostos a correr os riscos que trazem as maiores recompensas.'
    },
    {
      title: '"Nada melhor que um Mudslide no pôr do sol."',
      description: 'Brian é um clássico traficante da era de ouro do contrabando nas Keys. Ainda movendo mercadorias através de seu estaleiro com sua terceira esposa, Lori, Brian está no ramo há tempo suficiente para deixar que outros façam seu trabalho sujo.'
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
    },
    {
      title: 'What if everything on the internet was true?',
      description: 'Jason\'s friend and a fellow associate of Brian\'s, Cal feels safest hanging at home, snooping on Coast Guard comms with a few beers and some private browser tabs open.'
    },
    {
      title: '"It\'s all about heart — the Jack of Hearts"',
      description: 'Boobie is a local Vice City legend — and acts like it. One of the few to transform his time in the streets into a legitimate empire spanning real estate, a strip club, and a recording studio — Boobie\'s all smiles until it\'s time to talk business.'
    },
    {
      title: '"Only Raw... Records"',
      description: 'Dre\'Quan was always more of a hustler than a gangster. Even when he was dealing on the streets to make ends meet, breaking into music was the goal.'
    },
    {
      title: '"Viral videos. Viral hooks."',
      description: 'Bae-Luxe and Roxy aka Real Dimez have been friends since high school — girls with the savvy to turn their time shaking down local dealers into cold, hard cash via spicy rap tracks and a relentless social media presence.'
    },
    {
      title: '"Experience counts."',
      description: 'Confidence, charm, and cunning — Raul\'s a seasoned bank robber always on the hunt for talent ready to take the risks that bring the biggest rewards.'
    },
    {
      title: '"Nothing better than a Mudslide at sunset."',
      description: 'Brian\'s a classic drug runner from the golden age of smuggling in the Keys. Still moving product through his boat yard with his third wife, Lori, Brian\'s been around long enough to let others do his dirty work.'
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
    },
    {
      title: '¿Y si todo en internet fuera verdad?',
      description: 'Amigo de Jason y asociado de Brian, Cal se siente más seguro en casa, espiando las comunicaciones de la Guardia Costera con algunas cervejas y pestañas privadas abiertas.'
    },
    {
      title: '"Todo se trata del corazón - la Jota de Corazones"',
      description: 'Boobie es una leyenda local de Vice City, y actúa como tal. Uno de los pocos que transformó su tiempo en las calles en un imperio legítimo que abarca bienes raíces, un club de striptease y un estudio de grabación. Boobie es todo sonrisas hasta que es hora de hablar de negocios.'
    },
    {
      title: '"Solo Raw... Records"',
      description: 'Dre\'Quan siempre fue más un traficante que un gánster. Incluso cuando estaba vendiendo drogas en las calles para llegar a fin de mes, entrar en la música era el objetivo.'
    },
    {
      title: '"Videos virales. Ganchos virales."',
      description: 'Bae-Luxe y Roxy, conocidas como Real Dimez, han sido amigas desde la secundaria - chicas con la astucia para convertir el tiempo que pasaron extorsionando a traficantes locales en dinero en efectivo a través de canciones de rap picantes y una presencia implacable en redes sociales.'
    },
    {
      title: '"La experiencia cuenta."',
      description: 'Confianza, carisma y astucia - Raul es un experimentado atracador de bancos siempre en busca de talentos dispuestos a asumir los riesgos que reportan las mayores recompensas.'
    },
    {
      title: '"Nada mejor que un Mudslide al atardecer."',
      description: 'Brian es un clásico traficante de la época dorada del contrabando en los Cayos. Todavía mueve mercancías a través de su astillero con su tercera esposa, Lori. Brian lleva tanto tiempo en el negocio que deja que otros hagan su trabajo sucio.'
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