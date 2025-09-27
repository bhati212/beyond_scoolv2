import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownProps {
  onComplete: () => void;
}

const countdownSteps = ['3', '2', '1', 'Start!'];

export const Countdown: React.FC<CountdownProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < countdownSteps.length) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [step, onComplete]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e122b',
        zIndex: 9999,
      }}
    >
      <AnimatePresence>
        <motion.div
          key={step}
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Typography variant="h1" sx={{ fontSize: '15vw', fontWeight: 'bold', color: 'white' }}>
            {countdownSteps[step]}
          </Typography>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};