import { useState } from 'react';

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
    seconds: "Segundos"
  },
  en: {
    release: "Release Date",
    countdown: "Countdown to May 26th, 2026 - 00:00",
    selectTz: "Select Timezone:",
    trailers: "Watch the Official Trailers",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds"
  },
  es: {
    release: "Fecha de Lanzamiento",
    countdown: "Cuenta regresiva para el 26 de mayo de 2026 - 00:00",
    selectTz: "Seleccionar Zona Horaria:",
    trailers: "Mira los Trailers Oficiales",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos"
  }
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return {
    currentLanguage,
    translations: translations[currentLanguage],
    setCurrentLanguage
  };
};