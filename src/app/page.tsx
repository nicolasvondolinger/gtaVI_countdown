'use client'

import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from '@/components/Header';
import Countdown from '@/components/Countdown';
import TimezoneSelector from '@/components/TimezoneSelector';
import Trailers from '@/components/Trailers';
import Footer from '@/components/Footer';

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
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
          borderRadius: '16px',
          p: { xs: 3, md: 4 },
          width: { xs: '90%', sm: '85%', md: '80%', lg: '70%' },
          maxWidth: '900px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{
              fontWeight: 'bold',
              mb: { xs: 4, sm: 6 },
              color: '#ff0066',
              fontSize: { xs: '2.5rem', sm: '3.5rem' },
              textShadow: '0 0 10px rgba(255, 0, 102, 0.5)'
            }}
          >
            GRAND THEFT AUTO VI
          </Typography>
          <Countdown timezone={timezone} />
          <TimezoneSelector 
            selectedTimezone={timezone}
            onTimezoneChange={setTimezone}
          />
          <Trailers />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}