'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  IconButton, 
  MobileStepper 
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Trailers() {
  const { translations } = useLanguage();
  const [activeTrailer, setActiveTrailer] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const trailers = [
    {
      id: 1,
      title: "GTA VI Trailer 1",
      url: "https://www.youtube.com/embed/QdBZY2fkU-0"
    },
    {
      id: 2,
      title: "GTA VI Trailer 2",
      url: "https://www.youtube.com/embed/VQRLujxTm3c"
    }
  ];

  const handleNext = () => {
    setActiveTrailer((prevActiveStep) => 
      prevActiveStep < trailers.length - 1 ? prevActiveStep + 1 : 0
    );
  };

  const handleBack = () => {
    setActiveTrailer((prevActiveStep) => 
      prevActiveStep > 0 ? prevActiveStep - 1 : trailers.length - 1
    );
  };

  return (
    <Box sx={{ 
      mt: { xs: 3, sm: 5 }, 
      px: { xs: 2, sm: 3, md: 0 } 
    }}>
      <Typography variant="h5" component="h3" sx={{ mb: { xs: 2, sm: 3 }, fontWeight: 'bold' }}>
        {translations.trailers}
      </Typography>
      
      {/* Mobile Carousel */}
      {isMobile ? (
        <Box sx={{ position: 'relative' }}>
          <Paper elevation={3} sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2 }}>
            <Box 
              component="iframe"
              src={trailers[activeTrailer].url}
              title={trailers[activeTrailer].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{ 
                width: '100%', 
                aspectRatio: '16/9',
                border: 'none',
              }}
            />
            
            <Box 
              sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: 0,
                right: 0,
                transform: 'translateY(-50%)',
                display: 'flex',
                justifyContent: 'space-between',
                px: 1
              }}
            >
              <IconButton 
                onClick={handleBack}
                sx={{ 
                  bgcolor: 'rgba(0, 0, 0, 0.5)', 
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' } 
                }}
                size="small"
              >
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton 
                onClick={handleNext}
                sx={{ 
                  bgcolor: 'rgba(0, 0, 0, 0.5)', 
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' } 
                }}
                size="small"
              >
                <NavigateNextIcon />
              </IconButton>
            </Box>
          </Paper>
          
          <Typography variant="subtitle2" align="center" sx={{ mt: 1 }}>
            {trailers[activeTrailer].title}
          </Typography>
          
          <MobileStepper
            steps={trailers.length}
            position="static"
            activeStep={activeTrailer}
            sx={{ 
              bgcolor: 'transparent', 
              justifyContent: 'center',
              '& .MuiMobileStepper-dot': { bgcolor: 'grey.500' },
              '& .MuiMobileStepper-dotActive': { bgcolor: '#ff0066' } 
            }}
            nextButton={null}
            backButton={null}
          />
        </Box>
      ) : (
        // Desktop layout
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 3, 
          justifyContent: 'center' 
        }}>
          {trailers.map((trailer) => (
            <Box 
              key={trailer.id}
              sx={{ 
                width: { xs: '100%', md: 'calc(50% - 12px)' }, 
                maxWidth: '600px',
              }}
            >
              <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box 
                  component="iframe"
                  src={trailer.url}
                  title={trailer.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  sx={{ 
                    width: '100%', 
                    aspectRatio: '16/9',
                    border: 'none', 
                  }}
                />
              </Paper>
              <Typography variant="subtitle2" align="center" sx={{ mt: 1 }}>
                {trailer.title}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}