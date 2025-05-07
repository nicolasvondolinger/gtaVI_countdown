'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Header() {
  const { setCurrentLanguage } = useLanguage();
  const [currentFlag, setCurrentFlag] = useState('/assets/usa.png');
  const [showDropdown, setShowDropdown] = useState(false);

  const setLanguage = (lang: string, flagSrc: string) => {
    setCurrentLanguage(lang);
    setCurrentFlag(flagSrc);
    setShowDropdown(false);
  };

  const addToGoogleCalendar = () => {
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=GTA+VI+Release&dates=20260526T000000Z/20260526T010000Z&details=GTA+6+is+releasing!&sf=true&output=xml`;
    window.open(calendarUrl, "_blank");
  };

  return (
    <header className="flex justify-between items-center bg-gray-800 p-4">
      <Image 
        src="/assets/gta6.png" 
        alt="GTA 6 Logo" 
        width={120}
        height={40}
        className="h-10 w-auto"
      />
      
      <div className="flex gap-3">
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 rounded-md hover:bg-gray-700"
          >
            <Image 
              src={currentFlag} 
              alt="Current Language" 
              width={24} 
              height={24}
            />
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-16 bg-gray-800 rounded-md shadow-lg z-10">
              <Image 
                src="/assets/usa.png" 
                onClick={() => setLanguage('en', '/assets/usa.png')} 
                width={24} 
                height={24}
                alt="English"
                className="m-2 cursor-pointer"
              />
              <Image 
                src="/assets/spain.png" 
                onClick={() => setLanguage('es', '/assets/spain.png')} 
                width={24} 
                height={24}
                alt="Spanish"
                className="m-2 cursor-pointer"
              />
              <Image 
                src="/assets/brazil.png" 
                onClick={() => setLanguage('pt', '/assets/brazil.png')} 
                width={24} 
                height={24}
                alt="Portuguese"
                className="m-2 cursor-pointer"
              />
            </div>
          )}
        </div>
        
        <button 
          onClick={addToGoogleCalendar}
          className="bg-gradient-to-b from-gta-pink to-gta-purple text-white px-4 py-2 rounded-lg font-bold hover:opacity-80 transition-opacity"
        >
          Add to Calendar
        </button>
      </div>
    </header>
  );
}