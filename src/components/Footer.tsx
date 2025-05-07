// Footer.tsx
import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

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
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2, sm: 3 } }}>
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
          <SportsEsportsIcon />
        </IconButton>
      </Box>
      
      <Typography variant="caption" color="text.secondary" sx={{ mt: 1.5, px: 2 }}>
        © {new Date().getFullYear()} GTA VI Countdown • Fan-made project
      </Typography>
    </Box>
  );
}