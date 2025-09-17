export interface Content {
  id: string;
  title: string;
  subject: string;
  grade: string;
  questionCount: number;
  createdBy: string;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'fill-in-the-blank';
  text: string;
  options: string;
  correctAnswer: string;
}