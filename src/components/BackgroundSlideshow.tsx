'use client'

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const backgroundImages = [
  '/gtavi_countdown/assets/back1.jpg',
  '/gtavi_countdown/assets/back2.jpg',
  '/gtavi_countdown/assets/back3.jpg'
];

export default function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % backgroundImages.length
        );
        setFade(true);
      }, 1000); // Tempo do fade out
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      {backgroundImages.map((image, index) => (
        <Box
          key={image}
          component="img"
          src={image}
          alt=""
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: index === currentIndex ? (fade ? 1 : 0) : 0,
            transition: 'opacity 1s ease-in-out',
            filter: 'brightness(0.6)',
          }}
        />
      ))}
    </Box>
  );
}