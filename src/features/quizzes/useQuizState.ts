import { useState, useEffect, useCallback } from 'react';
// import { questions } from './questions';

// const QUIZ_STATE_KEY = 'quizGameState';


export interface QuizQuestion {
  id: number;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface AnswerRecord {
  questionId: number;
  selectedAnswerIndex: number;
  isCorrect: boolean;
  timeTaken: number; // in milliseconds
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: AnswerRecord[];
  streak: number;
  score: number;
  startTime: number; // Timestamp when the current question was shown
  quizStartTime: number; // Timestamp when the whole quiz started
  status: 'loading' | 'countdown' | 'playing' | 'finished';
}

const getInitialState = (): QuizState => ({
  currentQuestionIndex: 0,
  answers: [],
  streak: 0,
  score: 0,
  startTime: 0,
  quizStartTime: 0,
  status: 'countdown',
});

export const useQuizState = (
    gradeId: string,    // ADDED for a more robust key
    subjectId: string,  // RENAMED from 'subject'
    quizId: string,     // RENAMED from 'quizName
    language: string,
    questions: QuizQuestion[]
) => {
  // MODIFIED: Dynamic local storage key
  const QUIZ_STATE_KEY = `quizGameState-${gradeId}-${subjectId}-${quizId}-${language}`;

  const [state, setState] = useState<QuizState>(getInitialState());
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  useEffect(() => {
    // Load state from local storage on initial mount
    try {
      const savedState = localStorage.getItem(QUIZ_STATE_KEY);
      if (savedState) {
        const parsedState = JSON.parse(savedState) as QuizState;
        if (parsedState.status === 'finished') {
           localStorage.removeItem(QUIZ_STATE_KEY);
        } else {
           setState(parsedState);
        }
      }
    } catch (error) {
      console.error('Failed to load quiz state', error);
      localStorage.removeItem(QUIZ_STATE_KEY);
    }
  }, [QUIZ_STATE_KEY]);

  useEffect(() => {
    // Save state to local storage whenever it changes
    if (state.status !== 'countdown') {
        localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify(state));
    }
  }, [state, QUIZ_STATE_KEY]);
  
  // Update currentQuestion when index changes
  useEffect(() => {
      setCurrentQuestion(questions[state.currentQuestionIndex]);
  }, [state.currentQuestionIndex, questions]);


  const startQuiz = useCallback(() => {
    const now = Date.now();
    setState({
      ...getInitialState(),
      status: 'playing',
      quizStartTime: now,
      startTime: now,
    });
  }, []);

  const answerQuestion = useCallback((selectedIndex: number) => {
    // ... This function logic remains exactly the same
    const isCorrect = selectedIndex === currentQuestion.correctAnswerIndex;
    const timeTaken = Date.now() - state.startTime;

    setState(prevState => {
      const newStreak = isCorrect ? prevState.streak + 1 : 0;
      const newScore = isCorrect ? prevState.score + 10 : prevState.score;
      return {
        ...prevState,
        streak: newStreak,
        score: newScore,
        answers: [
          ...prevState.answers,
          { questionId: currentQuestion.id, selectedAnswerIndex: selectedIndex, isCorrect, timeTaken },
        ],
      };
    });
    return isCorrect;
  }, [currentQuestion, state.startTime, state.answers, state.streak, state.score]);
  
  const nextQuestion = useCallback(() => {
    // ... This function logic remains exactly the same
    const nextIndex = state.currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setState(prevState => ({ ...prevState, currentQuestionIndex: nextIndex, startTime: Date.now() }));
    } else {
      setState(prevState => ({ ...prevState, status: 'finished' }));
    }
  }, [state.currentQuestionIndex, questions.length]);
  
  const getAnalytics = useCallback(() => {
    // ... This function logic remains exactly the same
    if(state.status !== 'finished') return null;
    const totalTime = state.answers.reduce((acc, ans) => acc + ans.timeTaken, 0);
    const correctAnswers = state.answers.filter(a => a.isCorrect).length;
    return {
        totalTime: (totalTime / 1000).toFixed(2),
        correctAnswers,
        incorrectAnswers: state.answers.length - correctAnswers,
        totalQuestions: questions.length,
        score: state.score,
        answers: state.answers,
    };
  }, [state, questions.length]);

  const resetQuiz = useCallback(() => {
    localStorage.removeItem(QUIZ_STATE_KEY);
    setState(getInitialState());
  }, [QUIZ_STATE_KEY]);

  return { state, startQuiz, answerQuestion, nextQuestion, getAnalytics, resetQuiz, currentQuestion };
};
