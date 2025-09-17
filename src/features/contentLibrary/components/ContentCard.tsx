import React from 'react';
import { Card, CardContent, Typography, Box, Button, CardActions } from '@mui/material';
import type { Content } from '../../../types/content';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EditIcon from '@mui/icons-material/Edit';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface ContentCardProps {
  item: Content;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" noWrap>{item.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {item.subject} • {item.grade}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
          <QuestionAnswerIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">{item.questionCount} Questions</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<EditIcon />}>Edit</Button>
        <Button size="small" variant="contained" startIcon={<PlayArrowIcon />}>Assign</Button>
      </CardActions>
    </Card>
  );
};

export default ContentCard;