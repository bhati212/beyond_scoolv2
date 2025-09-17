import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Button,
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
  FormGroup, Checkbox, Typography, Box
} from '@mui/material';

interface AssignActivityModalProps {
  open: boolean;
  onClose: () => void;
}

const AssignActivityModal: React.FC<AssignActivityModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Assign Activity</DialogTitle>
      <DialogContent>
        {/* Session Mode Selection */}
        <FormControl component="fieldset" sx={{ mb: 3 }}>
          <FormLabel component="legend">Session Mode</FormLabel>
          <RadioGroup row defaultValue="classic">
            <FormControlLabel value="classic" control={<Radio />} label="Classic" />
            <FormControlLabel value="instructor-paced" control={<Radio />} label="Instructor-Paced" />
            <FormControlLabel value="team" control={<Radio />} label="Team Mode" />
            <FormControlLabel value="homework" control={<Radio />} label="Homework" />
          </RadioGroup>
        </FormControl>

        {/* Advanced Settings */}
        <Typography variant="h6" gutterBottom>Game Settings</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Shuffle Questions" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Shuffle Answers" />
            <FormControlLabel control={<Checkbox />} label="Show Answers After Question" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Show Leaderboard" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Enable Power-ups" />
            <FormControlLabel control={<Checkbox />} label="Show Memes" />
          </FormGroup>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained">Assign</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AssignActivityModal;