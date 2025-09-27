// src/components/quiz/quizData.ts

export interface QuizQuestion {
  id: number;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

interface Quiz {
  name: string; // Used in URL, e.g., 'equivalent-fractions'
  title: { [key: string]: string }; // Display title, e.g., { en: 'Equivalent Fractions', es: 'Fracciones Equivalentes' }
  questions: { [key: string]: QuizQuestion[] };
}

interface Subject {
  name: string; // Used in URL, e.g., 'maths'
  quizzes: Quiz[];
}

export const quizData: { subjects: Subject[] } = {
  subjects: [
    {
      name: 'maths',
      quizzes: [
        {
          name: 'equivalent-fractions',
          title: {
            en: 'Equivalent Fractions',
            es: 'Fracciones Equivalentes',
          },
          questions: {
            en: [
              { id: 1, questionText: 'Which fraction is equivalent to 1/2?', options: ['2/4', '3/5', '4/6', '5/10'], correctAnswerIndex: 0 },
              { id: 2, questionText: 'Which fraction is equivalent to 2/3?', options: ['4/6', '5/7', '3/4', '6/10'], correctAnswerIndex: 0 },
              { id: 3, questionText: 'Which fraction is equivalent to 3/5?', options: ['6/10', '4/7', '9/15', '12/20'], correctAnswerIndex: 0 },
              { id: 4, questionText: 'Which fraction is equivalent to 1/4?', options: ['2/8', '3/5', '4/10', '5/15'], correctAnswerIndex: 0 },
              { id: 5, questionText: 'Which fraction is equivalent to 5/6?', options: ['10/12', '8/10', '7/9', '12/15'], correctAnswerIndex: 0 },
              { id: 6, questionText: 'Which fraction is equivalent to 2/5?', options: ['4/10', '3/7', '6/12', '8/20'], correctAnswerIndex: 0 },
              { id: 7, questionText: 'Which fraction is equivalent to 3/4?', options: ['6/8', '5/6', '9/12', '12/16'], correctAnswerIndex: 0 },
              { id: 8, questionText: 'Which fraction is equivalent to 4/7?', options: ['8/14', '6/10', '5/9', '12/18'], correctAnswerIndex: 0 },
              { id: 9, questionText: 'Which fraction is equivalent to 7/8?', options: ['14/16', '9/10', '12/15', '8/12'], correctAnswerIndex: 0 },
              { id: 10, questionText: 'Which fraction is equivalent to 9/10?', options: ['18/20', '8/12', '12/15', '15/18'], correctAnswerIndex: 0 },
            ],
            es: [
              { id: 1, questionText: '¿Qué fracción es equivalente a 1/2?', options: ['2/4', '3/5', '4/6', '5/10'], correctAnswerIndex: 0 },
              { id: 2, questionText: '¿Qué fracción es equivalente a 2/3?', options: ['4/6', '5/7', '3/4', '6/10'], correctAnswerIndex: 0 },
              { id: 3, questionText: '¿Qué fracción es equivalente a 3/5?', options: ['6/10', '4/7', '9/15', '12/20'], correctAnswerIndex: 0 },
              { id: 4, questionText: '¿Qué fracción es equivalente a 1/4?', options: ['2/8', '3/5', '4/10', '5/15'], correctAnswerIndex: 0 },
              { id: 5, questionText: '¿Qué fracción es equivalente a 5/6?', options: ['10/12', '8/10', '7/9', '12/15'], correctAnswerIndex: 0 },
              { id: 6, questionText: '¿Qué fracción es equivalente a 2/5?', options: ['4/10', '3/7', '6/12', '8/20'], correctAnswerIndex: 0 },
              { id: 7, questionText: '¿Qué fracción es equivalente a 3/4?', options: ['6/8', '5/6', '9/12', '12/16'], correctAnswerIndex: 0 },
              { id: 8, questionText: '¿Qué fracción es equivalente a 4/7?', options: ['8/14', '6/10', '5/9', '12/18'], correctAnswerIndex: 0 },
              { id: 9, questionText: '¿Qué fracción es equivalente a 7/8?', options: ['14/16', '9/10', '12/15', '8/12'], correctAnswerIndex: 0 },
              { id: 10, questionText: '¿Qué fracción es equivalente a 9/10?', options: ['18/20', '8/12', '12/15', '15/18'], correctAnswerIndex: 0 },
            ]
          }
        }
      ]
    }
  ]
};

// --- Helper function to fetch the correct quiz data ---
export const getQuiz = (subjectName: string, quizName: string, language: string) => {
    const subject = quizData.subjects.find(s => s.name === subjectName);
    if (!subject) return null;

    const quiz = subject.quizzes.find(q => q.name === quizName);
    if (!quiz) return null;

    // Fallback to English if the selected language is not available
    const questions = quiz.questions[language] || quiz.questions['en'];
    const title = quiz.title[language] || quiz.title['en'];

    if (!questions || !title) return null;

    return { title, questions };
}