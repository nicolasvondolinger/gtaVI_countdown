'use client'

import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

const galleryItems = [
  {
    image: '/gtavi_countdown/assets/characters/jason.jpg',
    title: 'Jason wants an easy life',
    description: 'Jason grew up around gritters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners. It might be time to try something new.'
  },
  {
    image: '/gtavi_countdown/assets/characters/lucia.jpg',
    title: 'Lucia\'s father taught her to fight',
    description: 'Life has been coming at her swinging ever since. Fighting for her family landed her in the Leonida Penitentiary. Sheer luck got her out. Lucia\'s learned her lesson – only smart moves from here.'
  },
];

export default function CharacterGallery() {
  const theme = useTheme();

  return (
    <Box sx={{
      width: '100%',
      py: 8,
      backgroundColor: theme.palette.background.paper,
    }}>
      {galleryItems.map((item, index) => (
        <Box 
          key={index}
          sx={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            mb: 8,
            px: { xs: 4, md: 8 },
            maxWidth: '1200px',
            mx: 'auto',
          }}
        >
          {/* Lado da imagem */}
          <Box sx={{
            flex: 1,
            minHeight: '400px',
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{
                objectFit: 'cover',
              }}
              quality={100}
            />
          </Box>

          {/* Lado do texto */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 4,
          }}>
            <Typography 
              variant="h3" 
              component="h2"
              sx={{
                fontFamily: 'var(--font-pricedown)',
                fontWeight: 400,
                letterSpacing: '1px',
                mb: 3,
                background: 'linear-gradient(to bottom, #335FCF, #A941C1, #FF5E94, #FF9547)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {item.title}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: theme.palette.text.secondary,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}