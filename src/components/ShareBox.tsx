'use client'

import { Box, Button, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import XIcon from '@mui/icons-material/X';

export default function ShareBox() {
  const siteUrl = 'https://gtavicountdown.com';
  const shareText = encodeURIComponent("Check out this GTA VI countdown!");
  const shareUrl = encodeURIComponent(siteUrl);

  return (
    <Box sx={{
      mt: 6,
      mb: 6,
      px: { xs: 3, md: 4 },
      py: { xs: 4, md: 5 },
      borderRadius: '20px',
      background: 'linear-gradient(135deg, rgba(255,0,150,0.3), rgba(255,153,102,0.3))',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      textAlign: 'center',
      boxShadow: '0 8px 32px rgba(255, 105, 180, 0.25)',
      maxWidth: '700px',
      mx: 'auto'
    }}>
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3, 
          fontWeight: 'bold', 
          color: '#fff',
          textShadow: '0 0 10px rgba(255, 105, 180, 0.8)'
        }}
      >
        SHARE THE COUNTDOWN
      </Typography>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 2
      }}>
        <Button
          variant="contained"
          startIcon={<XIcon />}
          sx={{
            backgroundColor: '#1DA1F2',
            color: '#fff',
            '&:hover': { backgroundColor: '#0d8ddb' }
          }}
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
          target="_blank"
        >
          Share on X
        </Button>

        <Button
          variant="contained"
          startIcon={<FacebookIcon />}
          sx={{
            backgroundColor: '#3b5998',
            color: '#fff',
            '&:hover': { backgroundColor: '#2d4373' }
          }}
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
        >
          Share on Facebook
        </Button>

        <Button
          variant="contained"
          startIcon={<RedditIcon />}
          sx={{
            backgroundColor: '#FF5700',
            color: '#fff',
            '&:hover': { backgroundColor: '#e64a00' }
          }}
          href={`https://www.reddit.com/submit?url=${shareUrl}&title=${shareText}`}
          target="_blank"
        >
          Share on Reddit
        </Button>
      </Box>
    </Box>
  );
}
