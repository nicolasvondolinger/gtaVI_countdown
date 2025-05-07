// TimezoneSelector.tsx
'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Box, 
  FormControl, 
  Select, 
  MenuItem, 
  TextField, 
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
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const zones = Intl.supportedValuesOf("timeZone");
    setTimezones(zones);
  }, []);

  const filteredTimezones = timezones.filter(tz => 
    tz.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <Typography component="label" htmlFor="timezone-search" variant="subtitle1">
          {translations.selectTz}
        </Typography>
        
        <TextField
          id="timezone-search"
          fullWidth
          placeholder="Search timezone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="outlined"
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'grey.700',
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'grey.500',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ff0066',
              },
            },
            '& .MuiOutlinedInput-input': {
              color: 'white',
            }
          }}
        />
        
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
            {filteredTimezones.map((tz) => (
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