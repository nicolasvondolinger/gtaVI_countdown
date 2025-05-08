'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Box, 
  FormControl, 
  Select, 
  MenuItem, 
  Typography,
  Stack 
} from '@mui/material';

interface TimezoneSelectorProps {
  selectedTimezone: string;
  onTimezoneChange: (timezone: string) => void;
}

export default function TimezoneSelector({
  selectedTimezone: propSelectedTimezone,
  onTimezoneChange,
}: TimezoneSelectorProps) {
  const { translations } = useLanguage();
  const [timezones, setTimezones] = useState<string[]>([]);
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    // Obter todos os fusos horários disponíveis
    const zones = Intl.supportedValuesOf("timeZone");
    setTimezones(zones);
    
    // Tentar detectar o fuso horário do usuário
    try {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (zones.includes(userTimezone)) {
        onTimezoneChange(userTimezone);
      }
    } catch (e) {
      console.error("Não foi possível detectar o fuso horário:", e);
    } finally {
      setIsDetecting(false);
    }
  }, [onTimezoneChange]);

  if (isDetecting) {
    return (
      <Box sx={{ textAlign: 'center', py: 2 }}>
        <Typography>Detectando seu fuso horário...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      my: { xs: 2, sm: 3 }, 
      px: { xs: 2, sm: 0 }, 
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Stack 
        direction="column" 
        spacing={2} 
        alignItems="center" 
        sx={{ maxWidth: 400, width: '100%' }}
      >
        <Typography component="label" htmlFor="timezone" variant="subtitle1">
          {translations.selectTz}
        </Typography>
        
        <FormControl fullWidth size="small">
          <Select
            id="timezone"
            value={propSelectedTimezone}
            onChange={(e) => onTimezoneChange(e.target.value)}
            sx={{
              backgroundColor: 'grey.700',
              color: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'grey.600',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'grey.500',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ff0066',
              },
            }}
          >
            {timezones.map((tz) => (
              <MenuItem key={tz} value={tz}>
                {tz}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}