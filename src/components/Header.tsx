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
  Tooltip,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

export default function Header() {
  const { setCurrentLanguage } = useLanguage();
  const [currentFlag, setCurrentFlag] = useState('/gtavi_countdown/assets/usa.png');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [calendarAnchorEl, setCalendarAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleCalendarClick = (event: React.MouseEvent<HTMLElement>) => {
    setCalendarAnchorEl(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setCalendarAnchorEl(null);
  };

  const setLanguage = (lang: string, flagSrc: string) => {
    setCurrentLanguage(lang);
    setCurrentFlag(flagSrc);
    handleLanguageClose();
  };

  const addToGoogleCalendar = () => {
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=GTA+VI+Release&dates=20260526T000000Z/20260526T010000Z&details=GTA+6+is+releasing!&sf=true&output=xml`;
    window.open(calendarUrl, "_blank");
    handleCalendarClose();
  };

  const addToAppleCalendar = () => {
    const startDate = '20260526T000000';
    const endDate = '20260526T010000';
    const title = 'GTA VI Release';
    const details = 'GTA 6 is releasing!';
    
    const calendarContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//GTA VI Countdown//EN',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@gtavi.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${details}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
    
    const blob = new Blob([calendarContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'gta-vi-release.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    handleCalendarClose();
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
          
          <Tooltip title="Add to Calendar">
            <IconButton
              onClick={handleCalendarClick}
              sx={{
                background: 'linear-gradient(to bottom, #ff0066, #990066)',
                color: 'white',
                '&:hover': {
                  opacity: 0.9,
                  background: 'linear-gradient(to bottom, #ff0066, #990066)',
                }
              }}
            >
              <EventIcon />
            </IconButton>
          </Tooltip>
          
          <Menu
            anchorEl={calendarAnchorEl}
            open={Boolean(calendarAnchorEl)}
            onClose={handleCalendarClose}
            PaperProps={{
              sx: {
                bgcolor: 'grey.800',
                border: '1px solid',
                borderColor: 'grey.700',
              }
            }}
          >
            <MenuItem onClick={addToGoogleCalendar}>
              <ListItemIcon>
                <Box 
                  component="img" 
                  src="/gtavi_countdown/assets/google-calendar.png" 
                  alt="Google Calendar" 
                  sx={{ width: 24, height: 24 }}
                />
              </ListItemIcon>
              <ListItemText>Google Calendar</ListItemText>
            </MenuItem>
            <MenuItem onClick={addToAppleCalendar}>
              <ListItemIcon>
                <Box 
                  component="img" 
                  src="/gtavi_countdown/assets/apple-calendar.png" 
                  alt="Apple Calendar" 
                  sx={{ width: 24, height: 24 }}
                />
              </ListItemIcon>
              <ListItemText>Apple Calendar</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}