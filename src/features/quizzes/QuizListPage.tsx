// src/components/quiz/QuizListPage.tsx

import React, { useState, useMemo } from 'react';
import { 
    Box, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    CardMedia, 
    TextField, 
    Select, 
    MenuItem, 
    FormControl, 
    InputLabel,
    Chip,
    InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { getAllQuizzes, getAllGrades, languages } from './quizData';
import { Paper } from '@mui/material';

export const QuizListPage: React.FC = () => {
    // --- State for Filters ---
    const [selectedGrade, setSelectedGrade] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');

    // --- Memoized Filtering Logic for Performance ---
    const filteredQuizzes = useMemo(() => {
        let quizzes = getAllQuizzes();

        // 1. Filter by selected language first
        if (selectedLanguage) {
            quizzes = quizzes.filter(quiz => quiz.questions.hasOwnProperty(selectedLanguage));
        }

        // 2. Filter by selected grade
        if (selectedGrade) {
            quizzes = quizzes.filter(quiz => quiz.gradeId === selectedGrade);
        }

        // 3. Filter by search term (searches title and subject name)
        if (searchTerm) {
            const lowercasedSearchTerm = searchTerm.toLowerCase();
            quizzes = quizzes.filter(
                quiz =>
                    quiz.title.toLowerCase().includes(lowercasedSearchTerm) ||
                    quiz.subjectName.toLowerCase().includes(lowercasedSearchTerm)
            );
        }

        return quizzes;
    }, [selectedGrade, searchTerm, selectedLanguage]);

    const handleQuizClick = (quiz: any) => {
        // In a real app, you would use a router to navigate
        // e.g., navigate(`/quiz/${quiz.gradeId}/${quiz.subjectId}/${quiz.id}`);
        alert(`Starting quiz: ${quiz.title}`);
    };

    return (
        <Box sx={{ p: 4, bgcolor: 'white', minHeight: '100vh', color: 'black' }}>
            <Typography variant="h3" gutterBottom align="center" fontWeight="bold">
                Explore Quizzes
            </Typography>

            {/* --- Filter Bar --- */}
            <Paper sx={{ p: 2, mb: 4, bgcolor: 'rgba(0,0,0,0.25)', display: 'flex', gap: 2, alignItems: 'center' }}>
                <FormControl sx={{ minWidth: 150 }} size="small">
                    <InputLabel sx={{ color: 'white' }}>Grade</InputLabel>
                    <Select value={selectedGrade} label="Grade" onChange={(e) => setSelectedGrade(e.target.value)} sx={{ color: 'white' }}>
                        <MenuItem value=""><em>All Grades</em></MenuItem>
                        {getAllGrades().map(grade => (
                            <MenuItem key={grade.id} value={grade.id}>{grade.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Search by subject or quiz name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: 'grey.500' }} />
                            </InputAdornment>
                        ),
                    }}
                />

                <FormControl sx={{ minWidth: 150 }} size="small">
                    <InputLabel sx={{ color: 'white' }}>Language</InputLabel>
                    <Select value={selectedLanguage} label="Language" onChange={(e) => setSelectedLanguage(e.target.value)} sx={{ color: 'white' }}>
                        <MenuItem value=""><em>Any Language</em></MenuItem>
                        {Object.entries(languages).map(([code, name]) => (
                            <MenuItem key={code} value={code}>{name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Paper>

            {/* --- Quiz Card Grid --- */}
            <Grid container spacing={3}>
                {filteredQuizzes.length > 0 ? (
                    filteredQuizzes.map(quiz => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={quiz.id}>
                            <Card 
                                onClick={() => handleQuizClick(quiz)}
                                sx={{ 
                                    bgcolor: 'rgba(0,0,0,0.4)', 
                                    color: 'white', 
                                    height: '100%',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                        boxShadow: '0 8px 16px rgba(0,255,255,0.2)',
                                        cursor: 'pointer',
                                    }
                                }}
                            >
                                <CardMedia component="img" height="140" image={quiz?.image} alt={quiz.title} />
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        <Chip label={quiz.gradeName} size="small" sx={{ bgcolor: '#9b59b6', color: 'white' }} />
                                        <Chip label={quiz.subjectName} size="small" sx={{ bgcolor: '#3498db', color: 'white' }} />
                                    </Box>
                                    <Typography variant="h6" component="div" sx={{ mt: 2, fontWeight: 'bold' }}>
                                        {quiz.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Typography align="center" sx={{ mt: 5 }}>
                            No quizzes found matching your criteria.
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};