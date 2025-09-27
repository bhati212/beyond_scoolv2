import React, { useState } from 'react';

// MUI Core Components
import {
  Box,
  Typography,
  Button,
  Paper,
  Switch,
  Grid,
  IconButton,
  Snackbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// MUI Icons
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GroupIcon from '@mui/icons-material/Group';
import StyleIcon from '@mui/icons-material/Style'; // For Flashcards
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TimerIcon from '@mui/icons-material/Timer';
import FlashOnIcon from '@mui/icons-material/FlashOn'; // For Power-ups
import CasinoIcon from '@mui/icons-material/Casino'; // Random
import ExtensionIcon from '@mui/icons-material/Extension'; // Classic
import WavesIcon from '@mui/icons-material/Waves'; // Synthwave
import PetsIcon from '@mui/icons-material/Pets'; // Dogoville
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // Cosmic
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong'; // Focus
import Brightness2Icon from '@mui/icons-material/Brightness2'; // Dark Mode
import LightModeIcon from '@mui/icons-material/LightMode'; // Light Mode
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import AppsIcon from '@mui/icons-material/Apps';
import { useNavigate } from 'react-router-dom';


// --- Data for Themes ---
const themes = [
  { name: 'Random', icon: <CasinoIcon /> },
  { name: 'Classic', icon: <ExtensionIcon /> },
  { name: 'Synthwave', icon: <WavesIcon /> },
  { name: 'Dogoville', icon: <PetsIcon /> },
  { name: 'Cosmic', icon: <RocketLaunchIcon /> },
  { name: 'Focus', icon: <CenterFocusStrongIcon /> },
  { name: 'Dark Mode', icon: <Brightness2Icon /> },
  { name: 'Light Mode', icon: <LightModeIcon /> },
];

// --- Styled Components for Consistency ---
const SectionCard = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  padding: theme.spacing(3),
  borderRadius: '16px',
  width: '100%',
  color: '#fff',
}));

const MainActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  justifyContent: 'flex-start',
}));


// --- The Main Page Component ---
export const QuizLobbyPage: React.FC = () => {
  // State for settings toggles
  const [settings, setSettings] = useState({
    readAloud: false,
    timer: true,
    powerUps: true,
  });

  const navigate = useNavigate();

  // State for the selected theme
  const [selectedTheme, setSelectedTheme] = useState<string>('Classic');

  // State for the share link snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Handler for changing settings
  const handleSettingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.checked,
    });
  };
  
  // Handler for the share button click
  const handleShareClick = () => {
    navigator.clipboard.writeText('https://example.com/quiz/dividing-fractions');
    setSnackbarOpen(true);
  };


  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#1e122b', // Dark purple background from image
        color: 'white',
        p: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Top right icons */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton sx={{ color: 'rgba(255,255,255,0.7)' }}><AppsIcon /></IconButton>
        <IconButton sx={{ color: 'rgba(255,255,255,0.7)' }}><FullscreenIcon /></IconButton>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ maxWidth: '700px', width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>

        {/* Top section: Info + Main Actions */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          {/* Left Side: Info Card */}
          <SectionCard elevation={0} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{
                  bgcolor: '#f9a825', // Yellow icon background
                  p: 1.5,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SearchIcon sx={{ color: '#000' }} />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">Dividing Fractions</Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">13 questions</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">By: Linda Region</Typography>
                <Button 
                    startIcon={<ShareIcon />} 
                    size="small" 
                    onClick={handleShareClick}
                    sx={{ color: 'rgba(255,255,255,0.7)', textTransform: 'none' }}
                >
                    Share
                </Button>
            </Box>
          </SectionCard>

          {/* Right Side: Action Buttons */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <MainActionButton variant="contained" color="success" startIcon={<PlayArrowIcon />} onClick={()=> navigate(`/quiz/12/start/question`)}>
              Start
            </MainActionButton>
            <MainActionButton variant="contained" sx={{ bgcolor: '#8e44ad', '&:hover': { bgcolor: '#7a3a9b'}}} startIcon={<GroupIcon />}>
              Challenge friends
            </MainActionButton>
            <MainActionButton variant="contained" sx={{ bgcolor: '#8e44ad', '&:hover': { bgcolor: '#7a3a9b'}}} startIcon={<StyleIcon />}>
              Flashcards
            </MainActionButton>
          </Box>
        </Box>

        {/* Settings Card */}
        <SectionCard>
          <Typography variant="h6" fontWeight="bold" mb={2}>Settings</Typography>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5}}>
                <VolumeUpIcon />
                <Typography>Read text aloud</Typography>
              </Box>
              <Switch name="readAloud" checked={settings.readAloud} onChange={handleSettingChange} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5}}>
                <TimerIcon />
                <Typography>Timer</Typography>
              </Box>
              <Switch name="timer" checked={settings.timer} onChange={handleSettingChange} color="success" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5}}>
                <FlashOnIcon />
                <Typography>Power-ups</Typography>
              </Box>
              <Switch name="powerUps" checked={settings.powerUps} onChange={handleSettingChange} color="success" />
            </Box>
          </Box>
        </SectionCard>

        {/* Themes Card */}
        <SectionCard>
          <Typography variant="h6" fontWeight="bold" mb={2}>Themes</Typography>
          <Grid container spacing={1.5}>
            {themes.map((theme) => (
              <Grid item xs={3} sm={2} md={1.5} key={theme.name}>
                <Box
                  onClick={() => setSelectedTheme(theme.name)}
                  sx={{
                    aspectRatio: '1 / 1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    border: selectedTheme === theme.name ? '2px solid #20c997' : '2px solid transparent',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)' }
                  }}
                >
                  {theme.icon}
                  <Typography variant="caption" sx={{ mt: 0.5, textAlign: 'center' }}>{theme.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </SectionCard>
      </Box>

      {/* Snackbar for Share Link Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        message="Quiz link copied to clipboard!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};

export default QuizLobbyPage;