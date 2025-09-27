export interface QuizQuestion {
  id: number;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    questionText: '1/6 ÷ 3 = ?',
    options: ['18', '16', '1/16', '1/18'],
    correctAnswerIndex: 3,
  },
  {
    id: 2,
    questionText: '2/5 ÷ 2 = ?',
    options: ['4/5', '1/5', '1', '5'],
    correctAnswerIndex: 1,
  },
  {
    id: 3,
    questionText: 'What is 3/4 of 16?',
    options: ['9', '12', '15', '20'],
    correctAnswerIndex: 1,
  },
    {
    id: 4,
    questionText: 'Simplify the fraction 12/30.',
    options: ['6/15', '4/10', '2/5', '3/7'],
    correctAnswerIndex: 2,
  },
  {
    id: 5,
    questionText: '1/2 + 1/4 = ?',
    options: ['2/6', '1/8', '3/4', '2/4'],
    correctAnswerIndex: 2,
  },
];