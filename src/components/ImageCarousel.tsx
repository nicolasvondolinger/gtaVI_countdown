'use client'

import { useState, useEffect, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const images = [
  '/gtavi_countdown/assets/carousel/1.jpg',
  '/gtavi_countdown/assets/carousel/2.jpg',
  '/gtavi_countdown/assets/carousel/3.jpg',
  '/gtavi_countdown/assets/carousel/4.jpg',
  '/gtavi_countdown/assets/carousel/5.jpg',
  '/gtavi_countdown/assets/carousel/6.jpg',
  '/gtavi_countdown/assets/carousel/7.jpg',
  '/gtavi_countdown/assets/carousel/8.jpg'
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Função para avançar para a próxima imagem
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  // Função para voltar para a imagem anterior
  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, []);

  // Auto-rotacionar as imagens (pausa quando hover)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovered) {
      interval = setInterval(goToNext, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [goToNext, isHovered]);

  // Resetar o timer quando o usuário interage manualmente
  const handleManualNavigation = (navigationFn: () => void) => {
    navigationFn();
    // Forçar um reset do timer
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 5000);
  };

  return (
    <Box 
      sx={{
        width: '100vw',
        height: { xs: '400px', sm: '500px', md: '600px', lg: '700px' },
        position: 'relative',
        overflow: 'hidden',
        mt: 4,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container das imagens com transição suave */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          transition: 'transform 0.7s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Carousel image ${index + 1}`}
            sx={{
              width: '100%',
              height: '100%',
              flexShrink: 0,
              objectFit: 'cover',
            }}
          />
        ))}
      </Box>

      {/* Botões de navegação */}
      <IconButton
        onClick={() => handleManualNavigation(goToPrev)}
        sx={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.8)',
          },
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>

      <IconButton
        onClick={() => handleManualNavigation(goToNext)}
        sx={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.8)',
          },
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>

      {/* Indicadores */}
      <Box sx={{
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px'
      }}>
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              handleManualNavigation(() => {});
            }}
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'primary.main' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s, transform 0.2s',
              '&:hover': {
                transform: 'scale(1.2)'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
}