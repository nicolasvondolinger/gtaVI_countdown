'use client'

import { useState } from 'react';
import Header from '@/components/Header';
import Countdown from '@/components/Countdown';
import TimezoneSelector from '@/components/TimezoneSelector';
import Trailers from '@/components/Trailers';
import Footer from '@/components/Footer';

export default function Home() {
  const [timezone, setTimezone] = useState('Europe/London');

  return (
    <>
      <Header />
      <main className="p-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gta-pink">
          GRAND THEFT AUTO VI
        </h1>
        <Countdown timezone={timezone} />
        <TimezoneSelector 
          selectedTimezone={timezone}
          onTimezoneChange={setTimezone}
        />
        <Trailers />
      </main>
      <Footer />
    </>
  );
}