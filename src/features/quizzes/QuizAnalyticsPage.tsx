// // src/components/quiz/QuizAnalyticsPage.tsx

// import React from 'react';
// import { Box, Typography, Paper, Grid, Button, Avatar, LinearProgress, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { motion } from 'framer-motion';
// // import { QuizQuestion } from './questions';

// export interface QuizQuestion {
//   id: number;
//   questionText: string;
//   options: string[];
//   correctAnswerIndex: number;
// }

// export interface AnswerRecord {
//   questionId: number;
//   selectedAnswerIndex: number;
//   isCorrect: boolean;
//   timeTaken: number; // in milliseconds
// }

// // Icons
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import TimelapseIcon from '@mui/icons-material/Timelapse';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import ReplayIcon from '@mui/icons-material/Replay';
// import SearchIcon from '@mui/icons-material/Search';

// interface AnalyticsData {
//   score: number;
//   correctAnswers: number;
//   incorrectAnswers: number;
//   totalTime: string; // In seconds
//   answers: AnswerRecord[];
//   totalQuestions: number;
// }

// interface QuizAnalyticsPageProps {
//   analytics: AnalyticsData;
//   questions: QuizQuestion[];
//   onPlayAgain: () => void;
// }

// // --- Animation Variants ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { type: 'spring', stiffness: 100 },
//   },
// };


// // --- Sub-Components ---

// const SummaryCard = ({ accuracy, rank, score, onPlayAgain }: any) => (
//   <Paper component={motion.div} variants={itemVariants} sx={{ p: 3, borderRadius: 4, bgcolor: 'rgba(0,0,0,0.25)' , color:'white', marginBottom:5}}>
//     <Typography variant="h6" align="center" gutterBottom>Summary</Typography>
//     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
//       <Avatar sx={{ width: 56, height: 56 }}>M</Avatar>
//       <Typography variant="h5" sx={{ flexGrow: 1 }}>me</Typography>
//     </Box>
//     <Box sx={{ my: 2 }}>
//       <Typography variant="body2" sx={{ mb: 1 }}>Accuracy: {accuracy}%</Typography>
//       <LinearProgress
//         variant="determinate"
//         value={accuracy}
//         sx={{
//           height: 10,
//           borderRadius: 5,
//           '& .MuiLinearProgress-bar': { bgcolor: '#2ecc71' },
//           bgcolor: '#e74c3c',
//         }}
//       />
//     </Box>
//     <Grid container spacing={1} textAlign="center">
//       <Grid item xs={4}><Typography>Rank</Typography><Typography variant="h6">{rank}</Typography></Grid>
//       <Grid item xs={4}><Typography>Score</Typography><Typography variant="h6">{score}</Typography></Grid>
//       <Grid item xs={4}><EmojiEventsIcon color="warning" /><Typography variant="h6">5</Typography></Grid>
//     </Grid>
//     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
//         <Button variant="contained" startIcon={<ReplayIcon />} onClick={onPlayAgain} sx={{bgcolor: '#8e44ad', '&:hover': {bgcolor: '#7a3a9b'}}}>Play again</Button>
//         <Button variant="outlined" startIcon={<SearchIcon />} sx={{borderColor: '#8e44ad', color: '#8e44ad'}}>Find a new quiz</Button>
//     </Box>
//   </Paper>
// );

// const PerformanceStats = ({ stats }: any) => (
//   <Paper component={motion.div} variants={itemVariants} sx={{ p: 3, borderRadius: 4, bgcolor: 'rgba(0,0,0,0.25)', color:'white' }}>
//     <Typography variant="h6" gutterBottom>Performance Stats</Typography>
//     <Grid container spacing={2} textAlign="center">
//       {stats.map((stat: any) => (
//         <Grid item xs={4} key={stat.label}>
//           <stat.icon sx={{ color: stat.color, fontSize: 30 }} />
//           <Typography variant="h5">{stat.value}</Typography>
//           <Typography variant="body2">{stat.label}</Typography>
//         </Grid>
//       ))}
//     </Grid>
//   </Paper>
// );

// const ReviewQuestions = ({ questions, answers }: any) => (
//   <Paper component={motion.div} variants={itemVariants} sx={{ p: 3, mt: 2, borderRadius: 4, bgcolor: 'rgba(0,0,0,0.25)', color:'white' }}>
//     <Typography variant="h6" gutterBottom>Review Questions</Typography>
//     <List>
//       {questions.map((q: QuizQuestion, index: number) => {
//         const userAnswer = answers.find((a: AnswerRecord) => a.questionId === q.id);
//         if (!userAnswer) return null;
//         const isCorrect = userAnswer.isCorrect;

//         return (
//           <Box key={q.id} sx={{ position: 'relative', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, p: 2, pl: 3, my: 2 }}>
//             <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', bgcolor: isCorrect ? '#27ae60' : '#c0392b', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} />
//             <Typography variant="body1" fontWeight="bold" gutterBottom>{index + 1}. {q.questionText}</Typography>
//             {q.options.map((option, optIndex) => {
//               const isCorrectAnswer = optIndex === q.correctAnswerIndex;
//               const isSelectedAnswer = optIndex === userAnswer.selectedAnswerIndex;
              
//               let icon = null;
//               if (isCorrectAnswer) {
//                 icon = <CheckCircleIcon sx={{ color: '#27ae60' }} />;
//               } else if (isSelectedAnswer && !isCorrect) {
//                 icon = <CancelIcon sx={{ color: '#c0392b' }} />;
//               }

//               return (
//                 <ListItem key={optIndex} dense>
//                   {icon && <ListItemIcon>{icon}</ListItemIcon>}
//                   <ListItemText primary={option} sx={{ ml: icon ? 0 : 4 }} />
//                 </ListItem>
//               );
//             })}
//           </Box>
//         );
//       })}
//     </List>
//   </Paper>
// );


// // --- Main Analytics Component ---

// export const QuizAnalyticsPage: React.FC<QuizAnalyticsPageProps> = ({ analytics, questions, onPlayAgain }) => {
//   // --- Calculations ---
//   const accuracy = analytics.totalQuestions > 0 ? Math.round((analytics.correctAnswers / analytics.totalQuestions) * 100) : 0;
//   const avgTimePerQuestion = (parseFloat(analytics.totalTime) / analytics.totalQuestions).toFixed(1);
  
//   // Calculate highest streak from the answers array
//   const highestStreak = analytics.answers.reduce((acc, answer) => {
//     const currentStreak = answer.isCorrect ? (acc.current + 1) : 0;
//     const maxStreak = Math.max(acc.max, currentStreak);
//     return { current: currentStreak, max: maxStreak };
//   }, { current: 0, max: 0 }).max;
  
//   const perfStats = [
//       { label: 'Correct', value: analytics.correctAnswers, icon: CheckIcon, color: '#27ae60' },
//       { label: 'Partially Correct', value: 0, icon: CheckIcon, color: '#f39c12' },
//       { label: 'Incorrect', value: analytics.incorrectAnswers, icon: CloseIcon, color: '#c0392b' },
//       { label: 'Time / ques', value: `${avgTimePerQuestion}s`, icon: TimelapseIcon, color: '#3498db' },
//       { label: 'Streak', value: highestStreak, icon: TrendingUpIcon, color: '#9b59b6' },
//   ];
  
//   return (
//     <Box
//       component={motion.div}
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       sx={{
//         minHeight: '100vh',
//         bgcolor: '#1e122b',
//         color: 'white',
//         p: { xs: 2, md: 4 },
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'flex-start',
//       }}
//     >
//       <Grid container spacing={3} maxWidth="lg">
//         {/* Left Column */}
//         <Grid item xs={12} md={4}>
//           <SummaryCard 
//             accuracy={accuracy} 
//             rank="19/19" 
//             score={analytics.score} 
//             onPlayAgain={onPlayAgain}
//           />
        
//         <Grid item xs={12} md={4}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
//             <PerformanceStats stats={perfStats} />
//             <ReviewQuestions questions={questions} answers={analytics.answers} />
//           </Box>
//         </Grid>

//         {/* Right Column */}
        
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// src/components/quiz/QuizAnalyticsPage.tsx

import React from 'react';
import { Box, Typography, Paper, Grid, Button, Avatar, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { motion } from 'framer-motion';

// --- (Keep your existing interface definitions: QuizQuestion, AnswerRecord) ---

// Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Represents Highest Streak
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Represents Streak
import ReplayIcon from '@mui/icons-material/Replay';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // For Unattempted
import type { QuizQuestion } from './quizData';
import type { AnswerRecord } from './useQuizState';

// --- (Keep AnalyticsData and QuizAnalyticsPageProps interfaces) ---
interface AnalyticsData { /* ... */ }
interface QuizAnalyticsPageProps { /* ... */ }


// --- Animation Variants ---
const containerVariants = { /* ... */ };
const itemVariants = { /* ... */ };


// --- Sub-Components with Improved Props and Dynamic Data ---

// ADDED: Stronger typing for props
interface SummaryCardProps {
  accuracy: number;
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  highestStreak: number;
  onPlayAgain: () => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ accuracy, totalQuestions, correctAnswers, score, highestStreak, onPlayAgain }) => (
  <Paper component={motion.div} variants={itemVariants} sx={{ p: 3, borderRadius: 4, bgcolor: 'rgba(0,0,0,0.25)', color:'white' }}>
    <Typography variant="h6" align="center" gutterBottom>Summary</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
      <Avatar sx={{ width: 56, height: 56 }}>M</Avatar>
      <Typography variant="h5" sx={{ flexGrow: 1 }}>me</Typography>
    </Box>
    <Box sx={{ my: 2 }}>
      <Typography variant="body2" sx={{ mb: 1 }}>Accuracy: {accuracy}%</Typography>
      <LinearProgress variant="determinate" value={accuracy} sx={{ height: 10, borderRadius: 5, '& .MuiLinearProgress-bar': { bgcolor: '#2ecc71' }, bgcolor: '#e74c3c' }} />
    </Box>
    <Grid container spacing={1} textAlign="center">
      {/* CHANGED: Replaced hardcoded "Rank" with dynamic question count */}
      <Grid item xs={4}><Typography>Questions</Typography><Typography variant="h6">{correctAnswers}/{totalQuestions}</Typography></Grid>
      <Grid item xs={4}><Typography>Score</Typography><Typography variant="h6">{score}</Typography></Grid>
      {/* CHANGED: Replaced hardcoded "5" with the dynamic highest streak */}
      <Grid item xs={4}><Typography>Top Streak</Typography><Typography variant="h6"><EmojiEventsIcon sx={{ color: '#f6c41b', verticalAlign: 'middle', mb: '2px' }}/> {highestStreak}</Typography></Grid>
    </Grid>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
        <Button variant="contained" startIcon={<ReplayIcon />} onClick={onPlayAgain} sx={{bgcolor: '#8e44ad', '&:hover': {bgcolor: '#7a3a9b'}}}>Play again</Button>
        <Button variant="outlined" startIcon={<SearchIcon />} sx={{borderColor: '#8e44ad', color: '#8e44ad'}}>Find a new quiz</Button>
    </Box>
  </Paper>
);


// ADDED: Stronger typing for props
interface PerfStatsProps {
    stats: {
        label: string;
        value: string | number;
        icon: React.ElementType;
        color: string;
    }[];
}
const PerformanceStats: React.FC<PerfStatsProps> = ({ stats }) => (
  <Paper component={motion.div} variants={itemVariants} sx={{ p: 3, borderRadius: 4, bgcolor: 'rgba(0,0,0,0.25)', color:'white' }}>
    <Typography variant="h6" gutterBottom>Performance Stats</Typography>
    <Grid container spacing={2} textAlign="center">
      {stats.map((stat) => (
        <Grid item xs={6} sm={4} key={stat.label}>
          <stat.icon sx={{ color: stat.color, fontSize: 30 }} />
          <Typography variant="h5">{stat.value}</Typography>
          <Typography variant="body2">{stat.label}</Typography>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

// ADDED: Stronger typing for props
interface ReviewQuestionsProps {
    questions: QuizQuestion[];
    answers: AnswerRecord[];
}
const ReviewQuestions: React.FC<ReviewQuestionsProps> = ({ questions, answers }) => (
  <Paper component={motion.div} variants={itemVariants} sx={{ p: 3, mt: 2, borderRadius: 4, bgcolor: 'rgba(0,0,0,0.25)', color:'white' }}>
    <Typography variant="h6" gutterBottom>Review Questions</Typography>
    <List>
      {questions.map((q, index) => {
        const userAnswer = answers.find((a) => a.questionId === q.id);
        if (!userAnswer) return null;
        const isCorrect = userAnswer.isCorrect;

        return (
          <Box key={q.id} sx={{ position: 'relative', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, p: 2, pl: 3, my: 2 }}>
            <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', bgcolor: isCorrect ? '#27ae60' : '#c0392b', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="body1" fontWeight="bold">{index + 1}. {q.questionText}</Typography>
                {/* ADDED: Display time taken for each question */}
                <Chip label={`${(userAnswer.timeTaken / 1000).toFixed(1)}s`} size="small" variant="outlined" sx={{ color: 'rgba(255,255,255,0.7)'}} />
            </Box>
            {q.options.map((option, optIndex) => {
              const isCorrectAnswer = optIndex === q.correctAnswerIndex;
              const isSelectedAnswer = optIndex === userAnswer.selectedAnswerIndex;
              
              let icon = null;
              if (isCorrectAnswer) icon = <CheckCircleIcon sx={{ color: '#27ae60' }} />;
              else if (isSelectedAnswer && !isCorrect) icon = <CancelIcon sx={{ color: '#c0392b' }} />;

              return (
                <ListItem key={optIndex} dense>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={option} sx={{ ml: icon ? 0 : 4 }} />
                </ListItem>
              );
            })}
          </Box>
        );
      })}
    </List>
  </Paper>
);


// --- Main Analytics Component ---

export const QuizAnalyticsPage: React.FC<QuizAnalyticsPageProps> = ({ analytics, questions, onPlayAgain }) => {
  // --- Calculations ---
  const accuracy = analytics.totalQuestions > 0 ? Math.round((analytics.correctAnswers / analytics.totalQuestions) * 100) : 0;
  const avgTimePerQuestion = analytics.totalQuestions > 0 ? (parseFloat(analytics.totalTime) / analytics.totalQuestions).toFixed(1) : '0.0';
  
  const highestStreak = analytics.answers.reduce((acc, answer) => {
    const currentStreak = answer.isCorrect ? (acc.current + 1) : 0;
    const maxStreak = Math.max(acc.max, currentStreak);
    return { current: currentStreak, max: maxStreak };
  }, { current: 0, max: 0 }).max;
  
  // CHANGED: Stats are now more relevant and scalable
  const perfStats = [
      { label: 'Correct', value: analytics.correctAnswers, icon: CheckIcon, color: '#27ae60' },
      { label: 'Incorrect', value: analytics.incorrectAnswers, icon: CloseIcon, color: '#c0392b' },
      { label: 'Unattempted', value: analytics.totalQuestions - (analytics.correctAnswers + analytics.incorrectAnswers), icon: HelpOutlineIcon, color: '#7f8c8d' },
      { label: 'Avg Time', value: `${avgTimePerQuestion}s`, icon: TimelapseIcon, color: '#3498db' },
      { label: 'Top Streak', value: highestStreak, icon: TrendingUpIcon, color: '#9b59b6' },
  ];
  
  return (
    <Box component={motion.div} variants={containerVariants} initial="hidden" animate="visible"
      sx={{ minHeight: '100vh', bgcolor: '#1e122b', color: 'white', p: { xs: 2, md: 4 }, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
    >
      {/* FIXED: The Grid layout is now a proper 2-column structure */}
      <Grid container spacing={3} maxWidth="lg">
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <SummaryCard 
            accuracy={accuracy} 
            totalQuestions={analytics.totalQuestions}
            correctAnswers={analytics.correctAnswers}
            score={analytics.score} 
            highestStreak={highestStreak}
            onPlayAgain={onPlayAgain}
          />
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <PerformanceStats stats={perfStats} />
            <ReviewQuestions questions={questions} answers={analytics.answers} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};