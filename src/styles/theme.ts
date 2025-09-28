// import { createTheme } from '@mui/material/styles';

// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#8854c1', // Quizizz purple
//     },
//     secondary: {
//       main: '#28a745', // Quizizz green
//     },
//     background: {
//       default: '#f4f5f7',
//       paper: '#ffffff',
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 600,
//     },
//     h5: {
//       fontWeight: 600,
//     },
//     h6: {
//       fontWeight: 600,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//           borderRadius: 8,
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: 12,
//           boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//         },
//       },
//     },
//   },
// });

// src/theme.ts
import { createTheme } from '@mui/material/styles';

// Color palette from your provided CSS variables
const palette = {
  bg: '#F7F2EA',
  ink: '#0E0F12',
  teal: '#0C2D2C',
  chip: '#F1EDE5',
  brand: '#F6C41B',
  cardInk: '#ECF4F2',
  muted: '#7F8B8B',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: palette.teal,
      contrastText: palette.cardInk,
    },
    secondary: {
      main: palette.brand,
      contrastText: palette.ink,
    },
    background: {
      default: palette.bg,
      paper: '#ffffff',
    },
    text: {
      primary: palette.ink,
      secondary: palette.muted,
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "sans-serif"',
    h2: {
      fontWeight: 900,
    },
    h3: {
      fontWeight: 800,
      fontSize: '28px',
    },
    h6: {
      fontWeight: 800,
      fontSize: '18px',
      lineHeight: 1.25,
    },
    button: {
      fontWeight: 800,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: '18px',
                boxShadow: '0 8px 24px rgba(0,0,0,.06)',
            }
        }
    }
  },
});