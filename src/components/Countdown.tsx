'use client'

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Box, Typography, Grid, Paper } from '@mui/material';

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
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
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
        <Grid container spacing={2} justifyContent="center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <Grid item key={unit} sx={{ textAlign: 'center', flex: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" component="span" sx={{ fontWeight: 'bold' }}>
                  {value}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  {translations[unit as keyof typeof translations]}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}