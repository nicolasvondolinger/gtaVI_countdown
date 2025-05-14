'use client';

import { useState } from 'react';
import { 
  Menu, 
  MenuItem, 
  Button,
  Tooltip,
  ListItemIcon,
  ListItemText,
  Box
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

export default function CalendarButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addToGoogleCalendar = () => {
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=GTA+VI+Release&dates=20260526T000000Z/20260526T010000Z&details=GTA+6+is+releasing!&sf=true&output=xml`;
    window.open(calendarUrl, "_blank");
    handleClose();
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
    
    handleClose();
  };

  return (
    <>
      <Tooltip title="Add to Calendar">
        <Button // Alterado para Button
          onClick={handleClick}
          startIcon={<EventIcon />} // Adicionado ícone como startIcon
          sx={{
            minWidth: 120, // Largura mínima
            padding: '8px 16px', // Padding maior
            borderRadius: '12px', // Bordas mais arredondadas
            background: 'linear-gradient(to bottom, #335FCF, #A941C1, #FF5E94, #FF9547)',
            color: 'white',
            textTransform: 'none', // Evita que o texto fique em maiúsculas
            '&:hover': {
              opacity: 0.9,
              background: 'linear-gradient(to bottom, #335FCF, #A941C1, #FF5E94, #FF9547)',
              transform: 'scale(1.02)',
            },
            '&:active': {
              transform: 'scale(0.98)',
            },
            transition: 'all 0.2s ease-in-out',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          Add to Calendar
        </Button>
      </Tooltip>
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
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
    </>
  );
}