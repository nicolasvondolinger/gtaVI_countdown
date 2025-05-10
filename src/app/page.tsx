'use client'

import { useState } from 'react';
import { Container, Box } from '@mui/material';
import Header from '@/components/Header';
import Countdown from '@/components/Countdown';
import TimezoneSelector from '@/components/TimezoneSelector';
import Trailers from '@/components/Trailers';
import Footer from '@/components/Footer';
import PurchaseButton from '@/components/PurchaseButton';
import ImageCarousel from '@/components/ImageCarousel';

export default function Home() {
  const [timezone, setTimezone] = useState('Europe/London');

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      backgroundImage: 'url(/gtavi_countdown/assets/background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <Header />
      <Container component="main" sx={{ 
        py: { xs: 4, sm: 5 }, 
        textAlign: 'center', 
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Box sx={{
          /* Aumenta opacidade em mobile (xs) para 0.85, mantém 0.7 em telas maiores */
          backgroundColor: { xs: 'rgba(0, 0, 0, 0.85)', md: 'rgba(0, 0, 0, 0.6)' },
          backdropFilter: 'blur(8px)',
          borderRadius: '16px',
          p: { xs: 3, md: 4 },
          width: { xs: '90%', sm: '85%', md: '80%', lg: '70%' },
          maxWidth: '900px',
          boxShadow: '0 8px 32px rgba(255, 105, 180, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(255, 105, 180, 0.5)',
          },
          transition: 'all 0.3s ease',
        }}>
          {/* Logo com tamanho ajustado */}
          <Box
            component="img"
            src="/gtavi_countdown/assets/gta-logo.png"
            alt="GTA VI Logo"
            sx={{
              width: '80%',
              maxWidth: '400px',
              mb: { xs: 4, sm: 6 },
              filter: 'drop-shadow(0 0 10px rgba(255, 0, 102, 0.5))'
            }}
          />
          
          <Countdown timezone={timezone} />
          <TimezoneSelector 
            selectedTimezone={timezone}
            onTimezoneChange={setTimezone}
          />
          <Trailers />
          <PurchaseButton />
        </Box>
        {/*<ImageCarousel />*/}
      </Container>
      <ImageCarousel />
      <Footer />
    </Box>
  );
}
