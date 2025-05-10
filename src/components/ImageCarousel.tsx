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

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isHovered) {
      interval = setInterval(goToNext, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [goToNext, isHovered]);

  const handleManualNavigation = (navigationFn: () => void) => {
    navigationFn();
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 5000);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        borderRadius: '16px',
        p: { xs: 2, md: 3 },
        width: { xs: '90%', sm: '85%', md: '80%', lg: '70%' },
        maxWidth: '1800px',
        height: { xs: '400px', sm: '500px', md: '600px', lg: '700px' },
        boxShadow: '0 8px 32px rgba(255, 105, 180, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        mb: 4,
        alignSelf: 'center',
        '&:hover': {
          boxShadow: '0 8px 32px rgba(255, 105, 180, 0.5)',
        },
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
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
              borderRadius: '8px',
              filter: 'brightness(0.95)',
              transition: 'filter 0.3s ease',
              '&:hover': {
                filter: 'brightness(1.05)',
              },
            }}
          />
        ))}
      </Box>

      <IconButton
        onClick={() => handleManualNavigation(goToPrev)}
        sx={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'linear-gradient(135deg, rgba(153, 89, 217, 0.8), rgba(255, 0, 102, 0.8))',
          color: 'white',
          p: 2,
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(153, 89, 217, 1), rgba(255, 0, 102, 1))',
            transform: 'translateY(-50%) scale(1.1)',
          },
          opacity: isHovered ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
          background: 'linear-gradient(135deg, rgba(255, 0, 102, 0.8), rgba(255, 153, 0, 0.8))',
          color: 'white',
          p: 2,
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(255, 0, 102, 1), rgba(255, 153, 0, 1))',
            transform: 'translateY(-50%) scale(1.1)',
          },
          opacity: isHovered ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>

      <Box
        sx={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          p: 1,
          borderRadius: '24px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              handleManualNavigation(() => {});
            }}
            sx={{
              width: index === currentIndex ? '24px' : '10px',
              height: '10px',
              borderRadius: index === currentIndex ? '8px' : '50%',
              backgroundColor:
                index === currentIndex 
                  ? 'linear-gradient(135deg, #9959D9, #FF0066)' 
                  : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              '&:hover': {
                backgroundColor: index === currentIndex ? null : 'rgba(255,255,255,0.8)',
                transform: 'scale(1.2)'
              },
              ...(index === currentIndex && {
                background: 'linear-gradient(135deg, #9959D9, #FF0066)',
              }),
            }}
          />
        ))}
      </Box>
    </Box>
  );
}