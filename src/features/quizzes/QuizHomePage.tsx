// src/components/quiz/QuizHomePage.tsx
import React, { useState, useMemo } from 'react';
import {
    AppBar, Toolbar, Box, Typography, Button, Grid, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Card, CardMedia, CardContent, Chip, CardActions, Link
} from '@mui/material';
import { getAllQuizzes, getAllGrades, languages } from './quizData';
import { useNavigate } from 'react-router-dom';
import { QuizStartModal } from './QuizStartModal';

type QuizIdentifiers = {
    gradeId: string;
    subjectId: string;
    quizId: string;
};

export const QuizHomePage: React.FC = () => {
    // --- State for Filters ---
    const [selectedGrade, setSelectedGrade] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState<QuizIdentifiers | null>(null);
    const navigate = useNavigate();


    const handleOpenModal = () => {
        setModalOpen(true);
    }
    const handleCloseModal = () => setModalOpen(false);

    const handlePractice = () => {
        console.log('Starting practice mode...');
        const subjectName = "maths";
        const quizName = "equivalent-fractions"
        console.log("quiz", selectedQuiz)
        navigate(`/quiz/${selectedQuiz?.gradeId}/${selectedQuiz?.subjectId}/${selectedQuiz?.quizId}/start`)
        handleCloseModal();
    };

    const handleChallenge = () => {
        // Here you can use the password for game logic
        console.log('Challenging friends! Password is: examplePassword123');
        handleCloseModal();
    };


    // --- Memoized Filtering Logic ---
    const filteredQuizzes = useMemo(() => {
        let quizzes = getAllQuizzes();
        if (selectedLanguage) {
            quizzes = quizzes.filter(quiz => quiz.questions.hasOwnProperty(selectedLanguage));
        }
        if (selectedGrade) {
            quizzes = quizzes.filter(quiz => quiz.gradeId === selectedGrade);
        }
        if (searchTerm) {
            const lowercasedTerm = searchTerm.toLowerCase();
            quizzes = quizzes.filter(
                quiz =>
                    quiz.title.toLowerCase().includes(lowercasedTerm) ||
                    quiz.subjectName.toLowerCase().includes(lowercasedTerm)
            );
        }
        return quizzes;
    }, [selectedGrade, searchTerm, selectedLanguage]);

    const handleStartClick = (quiz: any) => {
        setSelectedQuiz({
            gradeId: quiz.gradeId,
            subjectId: quiz.subjectId,
            quizId: quiz.id,
        });
        setModalOpen(true);
    };

    return (
        <Box>
            {/* --- Header --- */}
            <AppBar position="sticky" sx={{ bgcolor: 'background.paper', color: 'text.primary', boxShadow: '0 1px 0 rgba(0,0,0,.06)' }}>
                <Toolbar>
                    <Link href="#" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box component="img" src="https://picsum.photos/seed/logo/40/40" sx={{ width: 38, height: 38, borderRadius: '50%' }} />
                        <Typography variant="h5" sx={{ fontWeight: 800, display: { xs: 'none', sm: 'block' } }}>
                            Beyondscool
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 5 }}>
                        <Link href="#">Home</Link>
                        <Link href="#">Library</Link>
                        <Link href="#">Play Quiz</Link>
                        <Link href="#">Play Games</Link>
                    </Box>
                    <Button variant="contained" sx={{ bgcolor: '#111', color: '#fff', '&:hover': { bgcolor: '#333' } }}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            {/* --- Main Content --- */}
            <Box component="main" sx={{ p: { xs: 2, md: 3 }, maxWidth: '1240px', mx: 'auto' }}>
                {/* --- Hero Section --- */}
                <Grid container spacing={2.5} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: '16px' }}>
                            <Typography variant="h3">Play & Host live</Typography>
                            <Typography sx={{ color: '#CFE6E3', my: 1 }}>Share a 6-digit code. Players join instantly.</Typography>
                            <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#eee' } }}>
                                Pick a quiz below →
                            </Button>
                        </Paper>
                    </Grid>
                    {/* Other 2 hero cards */}
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: '16px' }}>
                            <Typography variant="h3">Daily Deck</Typography>
                            <Typography sx={{ color: '#CFE6E3', my: 1 }}>5 questions/day tuned to your grade &amp; streak.</Typography>
                            <Button variant="contained" color="secondary">
                                Start
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: '16px' }}>
                            <Typography variant="h3">Create Your Own</Typography>
                            <Typography sx={{ color: '#CFE6E3', my: 1 }}>Build a new quiz and challenge your friends.</Typography>
                            <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#eee' } }}>
                                Create Quiz
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>

                {/* --- Controls --- */}
                <Typography variant="h2">explore</Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', my: 2 }}>
                    <FormControl sx={{ minWidth: 180, bgcolor: 'white' }}>
                        <InputLabel>Grade</InputLabel>
                        <Select value={selectedGrade} label="Grade" onChange={(e) => setSelectedGrade(e.target.value)}>
                            <MenuItem value=""><em>All Grades</em></MenuItem>
                            {getAllGrades().map(grade => <MenuItem key={grade.id} value={grade.id}>{grade.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        placeholder="Search subject or title"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FormControl sx={{ minWidth: 180 }}>
                        <InputLabel>Language</InputLabel>
                        <Select value={selectedLanguage} label="Language" onChange={(e) => setSelectedLanguage(e.target.value)}>
                            <MenuItem value=""><em>Any Language</em></MenuItem>
                            {Object.entries(languages).map(([code, name]) => <MenuItem key={code} value={code}>{name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>

                {/* --- Quiz Grid --- */}
                <Grid container spacing={2.5}>
                    {filteredQuizzes.map(quiz => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={quiz.id}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardMedia component="img" height="140" image={quiz.image} alt={quiz.title} />
                                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h6" gutterBottom>{quiz.title}</Typography>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                                        <Chip label={quiz.gradeName} size="small" />
                                        <Chip label={quiz.subjectName} size="small" />
                                    </Box>
                                    <CardActions sx={{ mt: 'auto', p: 0 }}>
                                        <Button fullWidth variant="outlined" onClick={() => handleStartClick(quiz)}>Start</Button>
                                        <Button fullWidth variant="contained" color="primary" onClick={() => handleStartClick(quiz)}>Host</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <QuizStartModal
                open={isModalOpen}
                onClose={() => setModalOpen(false)}
                quizIdentifiers={selectedQuiz}
                onStartPractice={handlePractice}
            />
        </Box>
    );
};