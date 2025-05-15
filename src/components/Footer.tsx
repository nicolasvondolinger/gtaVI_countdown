import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
      {/* SVG para definir o gradiente (vertical) */}
      <svg width="0" height="0">
        <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#335FCF" />
          <stop offset="33%" stopColor="#A941C1" />
          <stop offset="66%" stopColor="#FF5E94" />
          <stop offset="100%" stopColor="#FF9547" />
        </linearGradient>
      </svg>

      {/* Social Links Row */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: { xs: 4, sm: 6 },
        mb: 3
      }}>
        {/* Lucas */}
        <Box sx={{ 
          textAlign: 'center',
          p: 2,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'grey.700',
          backgroundColor: 'grey.800',
          boxShadow: 1
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <IconButton
              href="https://www.linkedin.com/in/lucas-c-392792251/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.1)' }
              }}
            >
              <LinkedInIcon sx={{ fill: 'url(#verticalGradient)' }} />
            </IconButton>
            
            <IconButton
              href="https://github.com/lucascassio"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.1)' }
              }}
            >
              <GitHubIcon sx={{ fill: 'url(#verticalGradient)' }} />
            </IconButton>
          </Box>
          <Typography variant="subtitle1" color="text.primary" gutterBottom>
            Lucas Cassio Costa
          </Typography>
        </Box>

        {/* Nicolas */}
        <Box sx={{ 
          textAlign: 'center',
          p: 2,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'grey.700',
          backgroundColor: 'grey.800',
          boxShadow: 1
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <IconButton
              href="https://www.linkedin.com/in/nicolas-von-dolinger-5a7036207"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.1)' }
              }}
            >
              <LinkedInIcon sx={{ fill: 'url(#verticalGradient)' }} />
            </IconButton>
            
            <IconButton
              href="https://github.com/nicolasvondolinger"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.1)' }
              }}
            >
              <GitHubIcon sx={{ fill: 'url(#verticalGradient)' }} />
            </IconButton>
          </Box>
          <Typography variant="subtitle1" color="text.primary" gutterBottom>
            Nicolas Von Dolinger
          </Typography>
        </Box>
      </Box>

      {/* Copyright Text */}
      <Box>
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} GTA VI Countdown · Fan-made project by Lucas Cassio Costa & Nicolas Von Dolinger
          <br /> All rights reserved to{' '}
          <Typography 
            component="a" 
            href="https://www.rockstargames.com/VI" 
            target="_blank"
            rel="noopener noreferrer"
            variant="caption" 
            sx={{ 
              background: 'linear-gradient(to bottom, #335FCF, #A941C1, #FF5E94, #FF9547)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            Rockstar Games
          </Typography>
          . This site is not affiliated with or endorsed by Rockstar Games. 
        </Typography>
      </Box>
    </Box>
  );
}