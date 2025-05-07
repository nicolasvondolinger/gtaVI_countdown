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
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" sx={{ py: { xs: 4, sm: 5 }, textAlign: 'center', flexGrow: 1 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{
            fontWeight: 'bold',
            mb: { xs: 4, sm: 6 },
            color: '#ff0066', // gta-pink
            fontSize: { xs: '2.5rem', sm: '3.5rem' }
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
      </Container>
      <Footer />
    </Box>
  );
}