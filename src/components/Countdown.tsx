'use client'

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Box, Typography, Paper } from '@mui/material';

const releaseDateUTC = new Date("2026-05-26T00:00:00Z");

interface CountdownProps {
  timezone: string;
}


export default function Countdown({ timezone }: CountdownProps) {
  const { translations } = useLanguage();
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
      const diff = releaseDateUTC.getTime() - nowDate.getTime();

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
  }, [timezone]);

  return (
    <Box sx={{ padding: { xs: 2, sm: 0 } }}>
      <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
        {translations.release}
      </Typography>
      <Typography variant="body1" sx={{ mb: { xs: 2, sm: 3 } }}>
        {translations.countdown} ({timezone})
      </Typography>

      <Paper
        elevation={3}
        sx={{
          backgroundColor: 'grey.800',
          padding: { xs: 2, sm: 3 },
          borderRadius: 2,
          maxWidth: 'md',
          margin: '0 auto'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2, // espaço entre os itens
          }}
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <Box
              key={unit}
              sx={{
                flex: '1 1 100px', // base flex size para responsividade
                textAlign: 'center',
              }}
            >
              <Typography variant="h3" component="span" sx={{ fontWeight: 'bold' }}>
                {value}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.8, display: 'block' }}>
                {translations[unit as keyof typeof translations]}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}