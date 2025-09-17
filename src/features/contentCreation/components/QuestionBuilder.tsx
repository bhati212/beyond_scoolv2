import React, { useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import QuestionEditor from './QuestionEditor';
import { Question } from '@/types/content';

const initialQuestions: Question =, correctAnswer: 'Paris' },
];

const QuestionBuilder: React.FC = () => {
  const [questions, setQuestions] = useState<Question>(initialQuestions);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: `q${Date.now()}`,
      type: 'multiple-choice',
      text: '',
      options: ['', '', '', ''],
      correctAnswer: '',
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (updatedQuestion: Question) => {
    setQuestions(questions.map(q => q.id === updatedQuestion.id? updatedQuestion : q));
  };
  
  return (
    <Box>
      {questions.map((question, index) => (
        <Paper key={question.id} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Question {index + 1}</Typography>
          <QuestionEditor question={question} onUpdate={updateQuestion} />
        </Paper>
      ))}
      <Button variant="outlined" startIcon={<AddIcon />} onClick={addQuestion}>
        Add Question
      </Button>
    </Box>
  );
};

export default QuestionBuilder;