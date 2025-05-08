'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  IconButton, 
  MobileStepper,
  useMediaQuery,
  useTheme
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
      mt: 4,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Typography 
        variant="h5" 
        component="h3" 
        sx={{ 
          mb: 3, 
          fontWeight: 'bold',
          color: 'white',
          textShadow: '0 0 8px rgba(255, 0, 102, 0.5)'
        }}
      >
        {translations.trailers}
      </Typography>
      
      {/* Mobile Carousel */}
      {isMobile ? (
        <Box sx={{ 
          position: 'relative',
          width: '90%',
          maxWidth: '600px'
        }}>
          <Paper elevation={3} sx={{ 
            position: 'relative', 
            overflow: 'hidden', 
            borderRadius: 2,
            backgroundColor: 'rgba(30, 30, 30, 0.8)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
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
                  bgcolor: 'rgba(0, 0, 0, 0.7)', 
                  color: 'white',
                  '&:hover': { 
                    bgcolor: '#ff0066',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
                size="small"
              >
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton 
                onClick={handleNext}
                sx={{ 
                  bgcolor: 'rgba(0, 0, 0, 0.7)', 
                  color: 'white',
                  '&:hover': { 
                    bgcolor: '#ff0066',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
                size="small"
              >
                <NavigateNextIcon />
              </IconButton>
            </Box>
          </Paper>
          
          <Typography 
            variant="subtitle1" 
            align="center" 
            sx={{ 
              mt: 2,
              color: 'white',
              fontWeight: '500'
            }}
          >
            {trailers[activeTrailer].title}
          </Typography>
          
          <MobileStepper
            steps={trailers.length}
            position="static"
            activeStep={activeTrailer}
            sx={{ 
              bgcolor: 'transparent', 
              justifyContent: 'center',
              '& .MuiMobileStepper-dot': { 
                bgcolor: 'grey.500',
                width: 10,
                height: 10
              },
              '& .MuiMobileStepper-dotActive': { 
                bgcolor: '#ff0066',
                width: 12,
                height: 12
              } 
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
          gap: 4, 
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1200px'
        }}>
          {trailers.map((trailer) => (
            <Box 
              key={trailer.id}
              sx={{ 
                width: { xs: '100%', md: 'calc(50% - 16px)' }, 
                maxWidth: '560px',
              }}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  backgroundColor: 'rgba(30, 30, 30, 0.8)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(255, 0, 102, 0.3)'
                  }
                }}
              >
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
              <Typography 
                variant="subtitle1" 
                align="center" 
                sx={{ 
                  mt: 2,
                  color: 'white',
                  fontWeight: '500'
                }}
              >
                {trailer.title}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}