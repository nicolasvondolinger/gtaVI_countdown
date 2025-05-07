'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

// Adicione a definição da interface antes do componente
interface TimezoneSelectorProps {
  selectedTimezone: string;
  onTimezoneChange: (timezone: string) => void;
}

export default function TimezoneSelector({
  selectedTimezone: propSelectedTimezone, // Renomeamos a prop para evitar conflito
  onTimezoneChange,
}: TimezoneSelectorProps) {
  const { translations } = useLanguage();
  const [timezones, setTimezones] = useState<string[]>([]);

  useEffect(() => {
    // Carrega os fusos horários suportados
    const zones = Intl.supportedValuesOf("timeZone");
    setTimezones(zones);
  }, []);

  return (
    <div className="my-6">
      <label htmlFor="timezone" className="mr-2">
        {translations.selectTz}
      </label>
      <select
        id="timezone"
        value={propSelectedTimezone} // Usamos o valor da prop renomeada
        onChange={(e) => onTimezoneChange(e.target.value)}
        className="bg-gray-700 text-white p-2 rounded border border-gray-600"
      >
        {timezones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>
    </div>
  );
}