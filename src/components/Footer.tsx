import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import Rockstar from '../../public/assets/rockstar.png';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: { xs: 2, sm: 3 },
        backgroundColor: 'grey.900',
        textAlign: 'center'
      }}
    >
      {/* Social Links Row */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: { xs: 4, sm: 6 },
        mb: 3
      }}>

        {/* Lucas */}
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <IconButton
              href="https://www.linkedin.com/in/lucas-cassio-costa"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.1)' }
              }}
              color="primary"
            >
              <LinkedInIcon />
            </IconButton>
            
            <IconButton
              href="https://github.com/lucascassiocosta"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.1)' }
              }}
              color="primary"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Lucas
          </Typography>
        </Box>

        {/* Rockstar Logo */}
        <Box sx={{ textAlign: 'center' }}>
          <IconButton
            href="https://www.rockstargames.com/VI"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.1)' }
            }}
            color="primary"
          >
            <Image 
              src={Rockstar} 
              alt="Rockstar Logo" 
              width={24}
              height={24}
              style={{ 
                filter: 'brightness(0) invert(0.8)',
                transition: 'filter 0.2s'
              }} 
            />
          </IconButton>
        </Box>

        {/* Nicolas */}
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <IconButton
              href="https://www.linkedin.com/in/nicolas-von-dolinger-5a7036207"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.1)' }
              }}
              color="primary"
            >
              <LinkedInIcon />
            </IconButton>
            
            <IconButton
              href="https://github.com/nicolasvondolinger"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.1)' }
              }}
              color="primary"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Nicolas
          </Typography>
        </Box>

      </Box>

      {/* Copyright Text */}
      <Box>
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} GTA VI Countdown · Fan-made project by Lucas Cassio Costa & Nicolas Von Dolinger
          <br /> All rights reserved to Rockstar Games
        </Typography>
      </Box>
    </Box>
  );
}
