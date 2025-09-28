import React, { useEffect, useState } from 'react';

// MUI Components
import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    Button,
    IconButton,
    Chip,
    Avatar,
} from '@mui/material';

// MUI Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GroupIcon from '@mui/icons-material/Group';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import { getQuizDetails } from './quizData';

type QuizDetails = NonNullable<ReturnType<typeof getQuizDetails>>;

interface QuizStartModalProps {
    open: boolean;
    onClose: () => void;
    quizIdentifiers?: {
        gradeId: string;
        subjectId: string;
        quizId: string;
    } | null;
    onStartPractice: () => void; // Callback to start the quiz
}

// Map difficulty levels to MUI colors
const difficultyColors = {
    Easy: 'success.main',
    Medium: 'warning.main',
    Hard: 'error.main',
};

export const QuizStartModal: React.FC<QuizStartModalProps> = ({
    open, onClose, quizIdentifiers, onStartPractice
}) => {
    const [quiz, setQuiz] = useState<QuizDetails | null>(null);

    useEffect(() => {
        if (quizIdentifiers) {
            const details = getQuizDetails(quizIdentifiers.gradeId, quizIdentifiers.subjectId, quizIdentifiers.quizId);
            setQuiz(details);
        }
    }, [quizIdentifiers]);

    if (!quiz) return null; // Don't render if there's no quiz data

    const questionCount = quiz.questions['en']?.length || 0;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    borderRadius: '24px',
                    // Allow content to overflow for the curved effect
                    overflow: 'visible',
                    position: 'relative',
                    maxWidth: '900px',
                    minWidth: '500px'
                },
            }}
        >
            {/* Top right action buttons */}
            <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 2 }}>
                <IconButton
                    size="small"
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: '5px',
                        color: 'white',
                        mr: 1,
                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                    }}
                >
                    <ShareIcon fontSize="small" />
                    <Typography>Share</Typography>
                </IconButton>
                <IconButton
                    size="small"
                    onClick={onClose}
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        color: 'white',
                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>

            <DialogContent sx={{ p: 0, overflow: 'visible' }}>
                {/* Blue Curved Header */}
                <Box
                    sx={{
                        backgroundColor: '#2e5cda', // A blue color similar to the image
                        color: 'white',
                        height: '220px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        // This creates the curved bottom
                        borderBottomLeftRadius: '50% 30px',
                        borderBottomRightRadius: '50% 30px',
                    }}
                >
                    <Avatar
                        sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            fontSize: '3rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Q
                    </Avatar>

                    {/* Question and Plays Chips */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 1,
                            width: 'calc(100% - 48px)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            //   px: 1,
                        }}
                    >
                        <Chip
                            label={`${questionCount} questions`}
                            size="small"
                            sx={{ backgroundColor: '#f2f2f2', color: '#292a3aa8' }}
                        />
                        <Chip
                            label={`${quiz.views} plays`}
                            size="small"
                            sx={{ backgroundColor: '#f2f2f2', color: '#8854c0' }}
                        />
                    </Box>
                </Box>

                {/* White Content Area */}
                <Box sx={{ p: 3, textAlign: 'left' }}>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mt: 1, mb: 1 }}>
                        {quiz.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Grades: <span style={{ backgroundColor: '#f2f2f2', padding: '2px 8px', borderRadius: '4px' }}>{quiz.gradeName}</span>
                    </Typography>

                    <hr style={{ marginTop: '2' }} />

                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 0.5 }}>
                        <Typography color="text.secondary" textAlign={'left'}>
                            Difficulty level:
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', color: difficultyColors[quiz.difficulty] }}>
                            {quiz.difficulty}
                        </Typography>
                    </Box>


                    {/* Action Buttons */}
                    <Box sx={{ mt: 3, display: 'flex', flexDirection: 'row', gap: 1.5 }}>
                        <Button
                            variant="contained"
                            endIcon={<PlayArrowIcon sx={{ fontSize: '1.2rem' }} />}
                            onClick={onStartPractice}
                            sx={{
                                backgroundColor: '#20c997',
                                borderRadius: '8px',
                                py: 1.5,
                                fontSize: '1.2rem',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#1baa80',
                                },
                                width: '100%'
                            }}
                        >
                            Practice
                        </Button>
                        <Button
                            variant="contained"
                            endIcon={<GroupIcon />}
                            //   onClick={}
                            sx={{
                                backgroundColor: '#6f42c1',
                                borderRadius: '8px',
                                py: 1.5,
                                fontSize: '1.2rem',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#5a359e',
                                },
                                width: '100%'
                            }}
                        >
                            Challenge Friends
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};