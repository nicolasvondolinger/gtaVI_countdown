// styles/theme.ts
import { createTheme } from '@mui/material/styles';

// Color values extracted from GTA VI logo gradient
const gtaColors = {
  purple: '#9959D9',  // Top purple
  pink: '#FF0066',    // Middle pink
  orange: '#FF9900',  // Bottom orange
  darkGray: '#121212', // Background color
  black: '#000000'    // Pure black for header
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: gtaColors.pink,
      light: '#ff4d8c',
      dark: '#cc0052'
    },
    secondary: {
      main: gtaColors.purple,
      light: '#b17ee3',
      dark: '#7b3cb0'
    },
    error: {
      main: '#f44336'
    },
    warning: {
      main: gtaColors.orange
    },
    info: {
      main: '#29b6f6'
    },
    success: {
      main: '#66bb6a'
    },
    background: {
      default: gtaColors.darkGray,
      paper: '#1e1e1e'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)'
    }
  },
  typography: {
    // Main font family configuration
    fontFamily: 'var(--font-outfit), "Inter", "Roboto", sans-serif',
    
    // Title font using Pricedown (GTA style)
    h1: {
      fontFamily: 'var(--font-pricedown), sans-serif',
      background: `-webkit-linear-gradient(${gtaColors.purple}, ${gtaColors.pink}, ${gtaColors.orange})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 400, // Pricedown geralmente funciona melhor com peso normal
      letterSpacing: '2px', // Mais espaçamento para Pricedown
      textTransform: 'uppercase'
    },
    h2: {
      fontFamily: 'var(--font-pricedown), sans-serif',
      background: `-webkit-linear-gradient(${gtaColors.purple}, ${gtaColors.pink}, ${gtaColors.orange})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 400,
      letterSpacing: '1.5px',
      textTransform: 'uppercase'
    },
    h3: {
      fontFamily: 'var(--font-pricedown), sans-serif',
      color: gtaColors.pink,
      fontWeight: 400,
      letterSpacing: '1px'
    },
    h4: {
      fontFamily: 'var(--font-outfit), sans-serif',
      fontWeight: 600
    },
    h5: {
      fontFamily: 'var(--font-outfit), sans-serif',
      fontWeight: 600
    },
    h6: {
      fontFamily: 'var(--font-outfit), sans-serif',
      fontWeight: 600
    },
    subtitle1: {
      fontFamily: 'var(--font-outfit), sans-serif',
      fontWeight: 500
    },
    subtitle2: {
      fontFamily: 'var(--font-outfit), sans-serif',
      fontWeight: 500
    },
    body1: {
      fontFamily: 'var(--font-outfit), sans-serif',
      lineHeight: 1.6
    },
    body2: {
      fontFamily: 'var(--font-outfit), sans-serif',
      lineHeight: 1.6
    },
    button: {
      fontFamily: 'var(--font-outfit), sans-serif',
      fontWeight: 600
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600
        },
        contained: {
          background: `linear-gradient(135deg, ${gtaColors.purple}, ${gtaColors.pink})`,
          '&:hover': {
            background: `linear-gradient(135deg, ${gtaColors.purple}, ${gtaColors.pink} 70%)`
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: gtaColors.black,
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Pricedown';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/fonts/pricedown.otf') format('opentype');
        }
        
        body {
          backgroundImage: 'url("/images/background-pattern.png")',
          backgroundAttachment: 'fixed',
          scrollBehavior: 'smooth',
        }
        
        .gta-gradient-text {
          background: -webkit-linear-gradient(${gtaColors.purple}, ${gtaColors.pink}, ${gtaColors.orange});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: var(--font-pricedown), sans-serif;
        }
        
        .gta-title {
          font-family: var(--font-pricedown), sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .gta-gradient-bg {
          background: linear-gradient(135deg, ${gtaColors.purple}, ${gtaColors.pink}, ${gtaColors.orange});
        }
      `
    }
  }
});

export default theme;