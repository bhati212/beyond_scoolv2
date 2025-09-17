import React from 'react';
import { Box, Button, TextField, Menu, MenuItem } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { Question } from '@/types/content';

interface QuestionEditorProps {
  question: Question;
  onUpdate: (question: Question) => void;
}

const QuestionEditor: React.FC<QuestionEditorProps> = ({ question, onUpdate }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // In a real app, these would trigger API calls to an AI service
  const handleAiAction = (action: string) => {
    console.log(`Performing AI action: ${action} on question ${question.id}`);
    handleClose();
  };

  return (
    <Box>
      <TextField
        fullWidth
        label="Question Text"
        defaultValue={question.text}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      {/*... inputs for options... */}
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AutoFixHighIcon />}
          onClick={handleClick}
        >
          AI Enhance
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={() => handleAiAction('fix_grammar')}>Fix Grammar</MenuItem>
          <MenuItem onClick={() => handleAiAction('translate_spanish')}>Translate to Spanish</MenuItem>
          <MenuItem onClick={() => handleAiAction('make_harder')}>Make More Difficult</MenuItem>
          <MenuItem onClick={() => handleAiAction('add_real_world_scenario')}>Add Real-World Scenario</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default QuestionEditor;