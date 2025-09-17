import React from 'react';
import { Box, Grid, TextField } from '@mui/material';
import ContentCard from './ContentCard';
import type { Content } from '../../../types/content';

interface ContentGridProps {
  content: Content;
}

const ContentGrid: React.FC<ContentGridProps> = ({ content }) => {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <TextField fullWidth label="Search content..." variant="outlined" />
        {/* Add filter dropdowns for subject, grade, etc. here */}
      </Box>
      <Grid container spacing={3}>
        {content.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <ContentCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentGrid;