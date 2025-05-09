// app/layout.tsx
import { bebasNeue, outfit, pricedown } from '@/lib/font';
import ThemeRegistry from '@/components/ThemeRegistry';

export const metadata = {
  title: 'GTA VI Countdown', 
  icons: {
    icon: '/favicon.ico', 
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${pricedown.variable} ${bebasNeue.variable} ${outfit.variable}`}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}