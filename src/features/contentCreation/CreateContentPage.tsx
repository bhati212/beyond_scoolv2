import React from 'react';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Grid from '@mui/material/Grid';

const CreateContentPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Create New Content</Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Generate engaging quizzes and lessons in seconds with the power of AI.
      </Typography>

      <Card sx={{ p: 2 }}>
        <CardContent>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" gutterBottom>Generate from Text or URL</Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                placeholder="Paste text, a topic, or a public URL (e.g., a YouTube link)..."
                sx={{ mb: 2 }}
              />
              <Button variant="contained" size="large" startIcon={<DescriptionIcon />}>
                Generate Quiz
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" gutterBottom>More Options</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button variant="outlined" size="large" startIcon={<UploadFileIcon />}>
                  Create from Document (PDF, DOC, PPT)
                </Button>
                <Button variant="outlined" size="large" startIcon={<EditNoteIcon />}>
                  Create from Scratch
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateContentPage;