import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Grid, Paper, Tooltip, IconButton, Avatar, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizState } from './useQuizState';
import { Countdown } from './Countdown';
// import './styles.css'; // Import the CSS for animations
import { questions } from './questions';

// Icons
import SecurityIcon from '@mui/icons-material/Security'; // Immunity
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'; // Double Jeopardy
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Streak Booster
import { QuizAnalyticsPage } from './QuizAnalyticsPage';
import { getQuiz } from './quizData';
import { useParams } from 'react-router-dom';

const optionColors = ['#c4a224', '#8e44ad', '#d35400', '#16a085'];

interface QuizPageProps {
    subject: string;
    quizName: string;
    language: string;
}

export const QuizPage: React.FC = () => {
    const { gradeId, subjectId, quizId, language } = useParams();
    if(!gradeId || !subjectId || !quizId || !language){
        return <Typography>Error: Missing required quiz information in the URL!</Typography>;
    }

    const quizContent = useMemo(() => getQuiz(gradeId, subjectId, quizId, language), [gradeId, subjectId, quizId, language]);
    if (!quizContent) {
        return <Typography>Error: Quiz not found!</Typography>;
    }

    const { questions } = quizContent;
    //   const { state, startQuiz, resetQuiz, answerQuestion, nextQuestion, getAnalytics, currentQuestion } = useQuizState();
    const { state, startQuiz, answerQuestion, nextQuestion, getAnalytics, resetQuiz, currentQuestion } = useQuizState(
        gradeId,
        subjectId,
        quizId,
        language,
        questions
    );

    // Internal UI state for animations and second chances
    const [answerStatus, setAnswerStatus] = useState<'idle' | 'correct' | 'incorrect' | 'second_chance'>('idle');
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [shakingOption, setShakingOption] = useState<number | null>(null);

    const handlePlayAgain = () => {
        resetQuiz();
    };

    // Memoize disabled options for the "second chance" feature
    const disabledOptions = useMemo(() => {
        if (answerStatus !== 'second_chance' || selectedOption === null) return [];

        // Find one other incorrect option to disable
        const otherIncorrectIndex = currentQuestion.options.findIndex(
            (opt, i) => i !== selectedOption && i !== currentQuestion.correctAnswerIndex
        );

        return [selectedOption, otherIncorrectIndex];
    }, [answerStatus, selectedOption, currentQuestion]);

    // Timer for second chance
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (answerStatus === 'second_chance') {
            timer = setTimeout(() => {
                // Time's up, move to next question
                handleNext();
            }, 7000); // 7 second window
        }
        return () => clearTimeout(timer);
    }, [answerStatus]);

    const handleAnswerClick = (index: number) => {
        if (answerStatus !== 'idle' && answerStatus !== 'second_chance') return;

        setSelectedOption(index);
        const isCorrect = answerQuestion(index);

        if (isCorrect) {
            setAnswerStatus('correct');
            setTimeout(handleNext, 1500); // Wait 1.5s on correct answer
        } else {
            // First incorrect attempt
            if (answerStatus === 'idle') {
                setAnswerStatus('incorrect');
                setShakingOption(index);
                setTimeout(() => {
                    setShakingOption(null);
                    setAnswerStatus('second_chance'); // Activate second chance
                }, 500);
            } else { // Second incorrect attempt during 'second_chance'
                setAnswerStatus('incorrect');
                setShakingOption(index);
                setTimeout(handleNext, 1500);
            }
        }
    };

    const handleNext = () => {
        setAnswerStatus('idle');
        setSelectedOption(null);
        nextQuestion();
    };

    if (state.status === 'loading') {
        return <Typography>Loading Quiz...</Typography>;
    }

    if (state.status === 'countdown') {
        return <Countdown onComplete={startQuiz} />;
    }

    if (state.status === 'finished') {
        const analytics = getAnalytics();
        if (!analytics) return <Typography>Calculating results...</Typography>;
        return (
            <QuizAnalyticsPage
                analytics={analytics}
                questions={questions}
                onPlayAgain={handlePlayAgain}
            />
        );
    }

    return (
        <Box sx={{
            minHeight: '100vh', bgcolor: '#1e122b', color: 'white',
            display: 'flex', flexDirection: 'column',
            p: 3,
            overflow: 'hidden',
            background: 'linear-gradient(to bottom, #3c1053, #1e122b)',
        }}
        >
            {/* HUD - Top */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Chip label={`Streak: ${state.streak}`} sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                <Chip label="Bonus" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
            </Box>

            {/* Question Area */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion.id}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.5 }}
                        style={{ width: '100%', textAlign: 'center' }}
                    >
                        <Chip label={`${state.currentQuestionIndex + 1} / ${questions.length}`} sx={{ color: 'white' }} />
                        <Paper sx={{ bgcolor: 'rgba(0,0,0,0.4)', p: 3, borderRadius: 2, maxWidth: '800px', mx: 'auto' }}>
                            <Typography variant="h4" color='white'>{currentQuestion.questionText}</Typography>
                        </Paper>
                    </motion.div>
                </AnimatePresence>
            </Box>

            {/* Options Area */}
            <Box sx={{ mb: 8 }}>
                <Grid container spacing={2} justifyContent="space-between" sx={{ width: '100%' }}>
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedOption === index;
                        const isCorrect = index === currentQuestion.correctAnswerIndex;
                        const isShaking = shakingOption === index;
                        const isDisabled = disabledOptions.includes(index);

                        return (
                            <Grid item xs={12} sm={6} key={index}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    whileHover={{ scale: isDisabled ? 1 : 1.05 }}
                                    whileTap={{ scale: isDisabled ? 1 : 0.95 }}
                                >
                                    <Paper
                                        onClick={() => !isDisabled && handleAnswerClick(index)}
                                        className={isShaking ? 'shake' : ''}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            p: 4,
                                            textAlign: 'center',
                                            borderRadius: 2,
                                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                                            border: '4px solid',
                                            borderColor: answerStatus !== 'idle' && isCorrect ? 'lime' : 'transparent',
                                            bgcolor: optionColors[index],
                                            opacity: isDisabled ? 0.3 : 1,
                                            transition: 'opacity 0.3s, border-color 0.3s',
                                            width: 'auto', // Make it take full width
                                            height: 'auto', // Let the height adjust based on the content
                                            //   maxWidth: '15rem', // Optional: maximum width for large screens
                                            minHeight: '20rem',
                                            minWidth: '20rem',
                                            margin: 'auto',
                                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.15)',
                                            ':hover': {
                                                boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
                                            }
                                        }}
                                    >
                                        <Typography variant="h5" textAlign={'center'} alignContent={'center'}>{option}</Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>

            {/* HUD - Bottom */}
            <Box sx={{
                position: 'fixed', bottom: 0, left: 0, right: 0,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    <Typography>me</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="Double Jeopardy: Get double score, or pay a cost.">
                        <IconButton sx={{ bgcolor: 'rgba(0,0,0,0.4)', color: 'white' }}><DoubleArrowIcon /></IconButton>
                    </Tooltip>
                    <Tooltip title="Immunity: Get a second chance after an incorrect answer.">
                        <IconButton sx={{ bgcolor: 'rgba(0,0,0,0.4)', color: 'white' }}><SecurityIcon /></IconButton>
                    </Tooltip>
                    <Tooltip title="Streak Booster: Apply to boost your streak counter by +6.">
                        <IconButton sx={{ bgcolor: 'rgba(0,0,0,0.4)', color: 'white' }}><TrendingUpIcon /></IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
};