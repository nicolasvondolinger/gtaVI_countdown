'use client'

import { useState, useEffect } from 'react';
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

  // Auto-rotacionar as imagens
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  return (
    <Box sx={{
      width: '100vw',
      height: { xs: '400px', sm: '500px', md: '600px', lg: '700px' }, // Aumentei a altura
      position: 'relative',
      overflow: 'hidden',
      mt: 4, // Mantém o espaçamento superior
      // Removi o mb: 4 para eliminar o gap com o footer
    }}>
      {/* Imagem atual */}
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`Carousel image ${currentIndex + 1}`}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Botões de navegação */}
      <IconButton
        onClick={goToPrev}
        sx={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.8)',
          }
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>

      <IconButton
        onClick={goToNext}
        sx={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.8)',
          }
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
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'primary.main' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          />
        ))}
      </Box>
    </Box>
  );
}