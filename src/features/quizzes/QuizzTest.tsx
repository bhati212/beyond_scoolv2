import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Radio, FormControlLabel, Button, Collapse, Card, CardContent, Divider } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import subjects from '../../services/subjectsData';
import { theme } from '../../styles/theme';

interface MCQ {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  time: number;
  points: number;
}

interface Quiz {
  id: string;
  title: string;
  plays: number;
  mcqs: MCQ[];
}

const QuizTest: React.FC = () => {
  const { subjectId, topicId, subtopicId, quizId } = useParams<{
    subjectId: string;
    topicId: string;
    subtopicId: string;
    quizId: string;
  }>();

  // Find the quiz by filtering through subjects → topics → subtopics → quizzes
  const quiz = subjects
    .find((subject) => subject.id === subjectId)
    ?.topics.find((topic) => topic.id === topicId)
    ?.subtopics.find((subtopic) => subtopic.id === subtopicId)
    ?.quizzes.find((quiz) => quiz.id === quizId);

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(new Array(quiz?.mcqs.length || 0).fill(''));
  const [showExplanations, setShowExplanations] = useState<boolean[]>(new Array(quiz?.mcqs.length || 0).fill(false));

  const handleAnswerChange = (questionIndex: number, value: string) => {
    const newSelected = [...selectedAnswers];
    newSelected[questionIndex] = value;
    setSelectedAnswers(newSelected);
  };

  const toggleExplanation = (questionIndex: number) => {
    const newShow = [...showExplanations];
    newShow[questionIndex] = !newShow[questionIndex];
    setShowExplanations(newShow);
  };

  if (!quiz) {
    return (
      <Box sx={{ padding: { xs: 2, sm: 4 }, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" sx={{ color: '#333' }}>
          Quiz not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: { xs: 2, sm: 4 }, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#333', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
        Quiz: {quiz.title}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: '#666', marginBottom: 3 }}>
        {quiz.plays} Plays
      </Typography>
      <Divider sx={{ marginBottom: 4 }} />
      {quiz.mcqs.map((mcq, qIndex) => (
        <Card key={qIndex} sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2, backgroundColor: '#fff' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#333' }}>
                Question {qIndex + 1}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                {mcq.points} points • {mcq.time} seconds
              </Typography>
            </Box>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: 3, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              {mcq.question}
            </Typography>
            <Grid container spacing={2}>
              {mcq.options.map((option, optIndex) => {
                const label = String.fromCharCode(65 + optIndex); // A, B, C, D
                return (
                  <Grid sx={{ xs:12, sm:6}} key={optIndex}>
                    <FormControlLabel
                      control={
                        <Radio
                          checked={selectedAnswers[qIndex] === label}
                          onChange={() => handleAnswerChange(qIndex, label)}
                          sx={{ color: '#666', '&.Mui-checked': { color: theme.palette.primary } }}
                        />
                      }
                      label={
                        <Typography variant="body2" sx={{ color: '#333' }}>
                          {label}. {option}
                        </Typography>
                      }
                      sx={{
                        backgroundColor: 'transparent',
                        padding: 1,
                        borderRadius: 1,
                        margin: 0,
                        transition: 'background-color 0.2s'
                      }}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              onClick={() => toggleExplanation(qIndex)}
              sx={{
                marginTop: 3,
                textTransform: 'none',
                color: theme.palette.primary,
                borderColor: theme.palette.primary,
                '&:hover': {  borderColor: theme.palette.primary }
              }}
            >
              {showExplanations[qIndex] ? 'Hide Answer & Explanation' : 'View Answer & Explanation'}
            </Button>
            <Collapse in={showExplanations[qIndex]}>
              <Box sx={{ marginTop: 2, padding: 2, backgroundColor:'#dfcef2ff', borderRadius: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: theme.palette.primary }}>
                  Correct Answer: {mcq.correct}. {mcq.options[mcq.correct.charCodeAt(0) - 65]}
                </Typography>
                <Typography variant="body2" sx={{ color: '#333', marginTop: 1 }}>
                  {mcq.explanation}
                </Typography>
              </Box>
            </Collapse>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default QuizTest;