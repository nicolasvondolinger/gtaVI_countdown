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

  useEffect(() => {
    const zones = Intl.supportedValuesOf("timeZone");
    setTimezones(zones);
  }, []);

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