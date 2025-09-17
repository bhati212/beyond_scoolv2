import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Divider, Grid } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import subjects from '../../services/subjectsData';

const SubtopicQuizzes: React.FC = () => {
    const { subjectId, topicId, subtopicId } = useParams<{
        subjectId: string;
        topicId: string;
        subtopicId: string;
    }>();
    const navigate = useNavigate();

    // Find the subtopic
    const subtopic = subjects
        .find((subject) => subject.id === subjectId)
        ?.topics.find((topic) => topic.id === topicId)
        ?.subtopics.find((subtopic) => subtopic.id === subtopicId);

    if (!subtopic) {
        return (
            <Box sx={{ padding: { xs: 2, sm: 3, md: 4 }, backgroundColor: 'background.default', minHeight: '100vh' }}>
                <Typography variant="h4" sx={{ color: '#333' }}>
                    Subtopic not found
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ padding: { xs: 2, sm: 3, md: 4 }, backgroundColor: 'background.default', minHeight: '100vh' }}>
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    color: '#333',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'primary.main' },
                }}
            >
                {subtopic.name} Quizzes
            </Typography>
            <Divider sx={{ marginBottom: { xs: 3, sm: 4 } }} />

            <Box
                display="grid"
                gridTemplateColumns={{
                    xs: '1fr',    // 1 column on mobile
                    sm: '1fr 1fr', // 2 columns on small+
                }}
                gap={2}
            >
                {subtopic.quizzes.map((quiz) => (
                    <Box key={quiz.id}>
                        <Card
                            sx={{
                                height: '100%',
                                boxShadow: 3,
                                borderRadius: 2,
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-6px) scale(1.02)',
                                    boxShadow: 12,
                                },
                            }}
                            onClick={() =>
                                navigate(`/quizzes/${subjectId}/${topicId}/${subtopicId}/${quiz.id}`)
                            }
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#333',
                                            transition: 'color 0.3s ease',
                                            '&:hover': { color: 'primary.main' },
                                        }}
                                    >
                                        {quiz.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {quiz.plays} plays
                                    </Typography>
                                </Box>
                                <ArrowForward
                                    sx={{
                                        color: 'primary.main',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': { transform: 'translateX(4px)' },
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SubtopicQuizzes;