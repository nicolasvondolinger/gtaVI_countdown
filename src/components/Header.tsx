'use client';

import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Menu, 
  MenuItem, 
  Avatar, 
  IconButton,
  Tooltip
} from '@mui/material';
import CalendarButton from './CalendarButton';

export default function Header() {
  const { setCurrentLanguage } = useLanguage();
  const [currentFlag, setCurrentFlag] = useState('/gtavi_countdown/assets/usa.png');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const setLanguage = (lang: string, flagSrc: string) => {
    setCurrentLanguage(lang);
    setCurrentFlag(flagSrc);
    handleLanguageClose();
  };

  return (
    <AppBar position="static" color="transparent" sx={{ bgcolor: 'grey.900' }}>
      <Toolbar sx={{ justifyContent: 'space-between', padding: { xs: 1.5, sm: 2 } }}>
        <Box component="img" src="/gtavi_countdown/assets/gta6.png" alt="GTA 6 Logo" sx={{ height: { xs: 32, sm: 40 } }} />
        
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Tooltip title="Change language">
            <IconButton 
              onClick={handleLanguageClick}
              sx={{ padding: { xs: 0.5, sm: 1 } }}
            >
              <Avatar 
                src={currentFlag} 
                alt="Current Language" 
                sx={{ width: { xs: 24, sm: 28 }, height: { xs: 24, sm: 28 } }} 
              />
            </IconButton>
          </Tooltip>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleLanguageClose}
            PaperProps={{
              sx: {
                bgcolor: 'grey.800',
                border: '1px solid',
                borderColor: 'grey.700',
              }
            }}
          >
            <MenuItem onClick={() => setLanguage('en', '/gtavi_countdown/assets/usa.png')} sx={{ justifyContent: 'center' }}>
              <Avatar src="/gtavi_countdown/assets/usa.png" alt="English" sx={{ width: 24, height: 24 }} />
            </MenuItem>
            <MenuItem onClick={() => setLanguage('es', '/gtavi_countdown/assets/spain.png')} sx={{ justifyContent: 'center' }}>
              <Avatar src="/gtavi_countdown/assets/spain.png" alt="Spanish" sx={{ width: 24, height: 24 }} />
            </MenuItem>
            <MenuItem onClick={() => setLanguage('pt', '/gtavi_countdown/assets/brazil.png')} sx={{ justifyContent: 'center' }}>
              <Avatar src="/gtavi_countdown/assets/brazil.png" alt="Portuguese" sx={{ width: 24, height: 24 }} />
            </MenuItem>
          </Menu>
          
          <CalendarButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}