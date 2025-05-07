// lib/fonts.ts
import { Bebas_Neue, Outfit } from 'next/font/google';
import localFont from 'next/font/local';

// Fonte Pricedown para títulos estilo GTA
export const pricedown = localFont({
  src: '../../public/fonts/Pricedown Bl.otf', // Caminho para o arquivo .otf
  display: 'swap',
  variable: '--font-pricedown',
});

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
});

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});