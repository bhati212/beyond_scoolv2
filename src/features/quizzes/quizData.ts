// src/components/quiz/quizData.ts
import fraction from "../../assets/fraction.jpg"
import foodChain from "../../assets/foodChain.jpg";

export interface QuizQuestion {
  id: number;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

interface Quiz {
  id: string;
  image:string;
  name: string; // Used in URL, e.g., 'equivalent-fractions'
  title: string; // Display title, e.g., { en: 'Equivalent Fractions', es: 'Fracciones Equivalentes' }
  difficulty: 'Easy' | 'Medium' | 'Hard'; // ADDED
  views: string; // ADDED (e.g., '40k')
  questions: { [key: string]: QuizQuestion[] };
}

interface Subject {
  id: string;
  name: string; // Used in URL, e.g., 'maths'
  quizzes: Quiz[];
}

interface Grade {
  id: string;
  name: string;
  subjects: Subject[];
}

export const quizDatabase: { grades: Grade[] } = {
  grades:[
    {
        id: 'grade-4',
        name:'Grade 4',
        subjects: [
            {
            id: 'maths',
            name: 'maths',
            quizzes: [
                {
                  id: 'equivalent-fractions',
                  name: 'equivalent-fractions',
                  title: 'Equivalent Fractions',
                  image:fraction,
                  difficulty: 'Medium', // ADDED
                  views: '42k', // ADDED
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
            },
            {
              id:'science',
              name: 'Science',
              quizzes:[
                {
                  id: 'food-chains-and-food-webs',
                  name: 'Food Chains and Food Webs',
                  title: 'Food Chains and Food Webs',
                  image:foodChain,
                  difficulty: 'Easy', // ADDED
                  views: '20k', // ADDED,
                  questions:{
                    fr: [
                          { id: 1, questionText: 'Quelle est la principale source d\'énergie de toutes les chaînes alimentaires ?', options: ['Soleil', 'Eau', 'Sol', 'Air'], correctAnswerIndex: 0 },
                          { id: 2, questionText: 'Lequel de ceux-ci est un producteur dans une chaîne alimentaire ?', options: ['Lion', 'Herbe', 'Tigre', 'Aigle'], correctAnswerIndex: 1 },
                          { id: 3, questionText: 'Lequel de ceux-ci est un herbivore ?', options: ['Vache', 'Tigre', 'Aigle', 'Serpent'], correctAnswerIndex: 0 },
                          { id: 4, questionText: 'Lequel de ceux-ci est un carnivore ?', options: ['Cerf', 'Vache', 'Lion', 'Chèvre'], correctAnswerIndex: 2 },
                          { id: 5, questionText: 'Lequel de ceux-ci est un omnivore ?', options: ['Chien', 'Tigre', 'Vache', 'Chèvre'], correctAnswerIndex: 0 },
                          { id: 6, questionText: 'Lequel de ceux-ci est au sommet de la chaîne alimentaire ?', options: ['Plantes', 'Herbivores', 'Carnivores', 'Sol'], correctAnswerIndex: 2 },
                          { id: 7, questionText: 'Que utilisent les plantes pour fabriquer leur propre nourriture ?', options: ['Lumière du soleil', 'Viande', 'Lait', 'Œufs'], correctAnswerIndex: 0 },
                          { id: 8, questionText: 'Lequel de ceux-ci montre l\'ordre correct d\'une chaîne alimentaire simple ?', options: ['Soleil → Plante → Sauterelle → Grenouille', 'Soleil → Tigre → Herbe → Vache', 'Soleil → Serpent → Plante → Cerf', 'Soleil → Herbe → Lion → Plante'], correctAnswerIndex: 0 },
                          { id: 9, questionText: 'Quels organismes décomposent les plantes et animaux morts ?', options: ['Producteurs', 'Consommateurs', 'Décomposeurs', 'Herbivores'], correctAnswerIndex: 2 },
                          { id: 10, questionText: 'Que se passe-t-il si une partie d\'une toile alimentaire est supprimée ?', options: ['Rien ne change', 'Cela affecte toute la toile', 'Seules les plantes disparaissent', 'Seuls les animaux meurent'], correctAnswerIndex: 1 }
                        ],
                    ru: [
                          { id: 1, questionText: 'Какой основной источник энергии во всех пищевых цепочках?', options: ['Солнце', 'Вода', 'Земля', 'Воздух'], correctAnswerIndex: 0 },
                          { id: 2, questionText: 'Кто из этих является производителем в пищевой цепочке?', options: ['Лев', 'Трава', 'Тигр', 'Орёл'], correctAnswerIndex: 1 },
                          { id: 3, questionText: 'Кто из этих является травоядным?', options: ['Корова', 'Тигр', 'Орёл', 'Змея'], correctAnswerIndex: 0 },
                          { id: 4, questionText: 'Кто из этих является плотоядным?', options: ['Олень', 'Корова', 'Лев', 'Коза'], correctAnswerIndex: 2 },
                          { id: 5, questionText: 'Кто из этих является всеядным?', options: ['Собака', 'Тигр', 'Корова', 'Коза'], correctAnswerIndex: 0 },
                          { id: 6, questionText: 'Кто находится на вершине пищевой цепочки?', options: ['Растения', 'Травоядные', 'Плотоядные', 'Земля'], correctAnswerIndex: 2 },
                          { id: 7, questionText: 'Что используют растения для производства своей пищи?', options: ['Солнечный свет', 'Мясо', 'Молоко', 'Яйца'], correctAnswerIndex: 0 },
                          { id: 8, questionText: 'Какой из этих вариантов правильно отображает порядок в пищевой цепочке?', options: ['Солнце → Растение → Скакалец → Лягушка', 'Солнце → Тигр → Трава → Корова', 'Солнце → Змея → Растение → Олень', 'Солнце → Трава → Лев → Растение'], correctAnswerIndex: 0 },
                          { id: 9, questionText: 'Какие организмы разлагают мёртвые растения и животных?', options: ['Производители', 'Потребители', 'Разлагающие организмы', 'Травоядные'], correctAnswerIndex: 2 },
                          { id: 10, questionText: 'Что произойдёт, если часть пищевой сети исчезнет?', options: ['Ничего не изменится', 'Это повлияет на всю сеть', 'Исчезнут только растения', 'Погибнут только животные'], correctAnswerIndex: 1 }
                        ]
                  }
                }
              ]
            }
        ]
    }
  ]
};

// --- Helper function to fetch the correct quiz data ---
export const getQuiz = (gradeId: string, subjectId: string, quizId: string, language: string) => {
  const grade = quizDatabase.grades.find(g => g.id === gradeId);
  if (!grade) return null;

  const subject = grade.subjects.find(s => s.id === subjectId);
  if (!subject) return null;

  const quiz = subject.quizzes.find(q => q.id === quizId);
  if (!quiz) return null;

  // Logic for questions remains multilingual with a fallback to English
  const questions = quiz.questions[language] || quiz.questions['en'];
  
  // CHANGED: Title is now fetched directly
  const title = quiz.title;

  if (!questions || !title) return null;

  return { title, questions };
};

export const languages = {
    en: 'English',
    zh: 'Mandarin Chinese',
    es: 'Spanish',
    fr: 'French',
    ar: 'Arabic',
    pt: 'Portuguese',
    ru: 'Russian',
    de: 'German'
};

export const getAllQuizzes = () => {
    const allQuizzes = [];
    for (const grade of quizDatabase.grades) {
        for (const subject of grade.subjects) {
            for (const quiz of subject.quizzes) {
                allQuizzes.push({
                    ...quiz,
                    gradeName: grade.name,
                    gradeId: grade.id,
                    subjectName: subject.name,
                    subjectId: subject.id,
                });
            }
        }
    }
    return allQuizzes;
};

export const getAllGrades = () => {
    return quizDatabase.grades.map(grade => ({ id: grade.id, name: grade.name }));
};

export const getQuizDetails = (gradeId: string, subjectId: string, quizId: string) => {
    const grade = quizDatabase.grades.find(g => g.id === gradeId);
    const subject = grade?.subjects.find(s => s.id === subjectId);
    const quiz = subject?.quizzes.find(q => q.id === quizId);

    if (!quiz || !grade || !subject) return null;

    return {
        ...quiz,
        gradeName: grade.name,
        subjectName: subject.name,
    };
};