'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const releaseDateUTC = new Date("2026-05-26T00:00:00Z");

interface CountdownProps {
    timezone: string;  // Recebemos timezone como prop
}

export default function Countdown({ timezone }: CountdownProps) {
  const { currentLanguage, translations } = useLanguage();
  // Removemos o estado local de timezone pois agora recebemos via props
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().toLocaleString("en-US", { timeZone: timezone });
      const nowDate = new Date(now);
      const diff = releaseDateUTC.getTime() - nowDate.getTime(); // Adicionamos .getTime()

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timezone]); // Usamos a prop timezone aqui

  return (
    <>
      <h2 className="text-2xl mb-2">{translations.release}</h2>
      <p className="mb-6">
        {translations.countdown} ({timezone})
      </p>

      <div className="flex justify-center gap-5 text-2xl bg-gray-800 p-4 rounded-lg mx-auto max-w-md">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center p-2">
            <span>{value}</span>
            <span className="text-sm opacity-80">
              {translations[unit as keyof typeof translations]}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}