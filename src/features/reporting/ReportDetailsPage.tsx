import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import QuestionAnalysisTable from './components/QuestionAnalysisTable';
import ParticipantAnalysisTable from './components/ParticipantAnalysisTable';

// Mock data would be fetched based on reportId
import { mockQuestionAnalysis, mockParticipantAnalysis } from '../../services/mockData/reports';

const ReportDetailsPage: React.FC = () => {
  const { reportId } = useParams();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Report Details: {reportId}</Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Question Analysis</Typography>
        <QuestionAnalysisTable data={mockQuestionAnalysis} />
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>Participant Analysis</Typography>
        <ParticipantAnalysisTable data={mockParticipantAnalysis} />
      </Paper>
    </Box>
  );
};

export default ReportDetailsPage;