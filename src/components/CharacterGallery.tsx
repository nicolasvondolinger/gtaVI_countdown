'use client'

import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';

export default function CharacterGallery() {
  const theme = useTheme();
  const { getTranslatedGalleryItems } = useLanguage();
  const galleryItems = getTranslatedGalleryItems();

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
            flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            mb: 8,
            px: { xs: 2, md: 8 },
            maxWidth: '1200px',
            mx: 'auto',
          }}
        >
          {/* Lado da imagem */}
          <Box sx={{
            width: { xs: '100%', md: '60%' },
            height: { xs: '300px', md: '500px' },
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}>
            <Image
              src={getCharacterImage(index)} // Função para pegar a imagem correta
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
            width: { xs: '100%', md: '40%' },
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

// Função auxiliar para mapear índices para imagens corretas
function getCharacterImage(index: number) {
  const images = [
    '/gtavi_countdown/assets/characters/jason.jpg',
    '/gtavi_countdown/assets/characters/lucia.jpg',
    '/gtavi_countdown/assets/characters/cal_hampton.jpg',
    '/gtavi_countdown/assets/characters/boobie_ike.jpg',
    '/gtavi_countdown/assets/characters/drequan_priest.jpg',
    '/gtavi_countdown/assets/characters/real_dimez.jpg',
    '/gtavi_countdown/assets/characters/raul_bautista.jpg',
    '/gtavi_countdown/assets/characters/brian_heder.jpg'
  ];
  return images[index];
}