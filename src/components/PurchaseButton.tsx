'use client';

import { Button } from '@mui/material';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

export default function PurchaseButton() {
  const { translations } = useLanguage();

  return (
    <Button
      component={Link}
      href="https://amzn.to/4jKQeyh"
      target="_blank"
      rel="noopener noreferrer"
      variant="contained"
      sx={{
        mt: 4,
        mb: 4,
        py: 2,
        px: 4,
        fontSize: '1.1rem',
        fontWeight: 'bold',
        backgroundColor: '#4CAF50',
        color: 'white',
        '&:hover': {
          backgroundColor: '#388E3C',
          transform: 'scale(1.02)',
        },
        '&:active': {
          transform: 'scale(0.98)',
        },
        transition: 'all 0.2s ease-in-out',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      }}
    >
      {translations.purchase || "BUY NOW"}
    </Button>
  );
}