'use client';

import { Box } from '@mui/material';
import './animatedBackground.css';

export default function AnimatedBackground() {
  return (
    <Box className="animated-bg">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="circle" />
      ))}
    </Box>
  );
}
