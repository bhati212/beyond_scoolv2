// // import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
// // import ArrowForward from '@mui/icons-material/ArrowForward';
// // import { useNavigate } from 'react-router-dom';
// // import subjects from '../../services/subjectsData';

// // const QuizzPage = () => {
// //     const navigate = useNavigate()
// //     return (
// //         <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
// //             {subjects?.map((subject) => (
// //                 <Box key={subject.id} sx={{ marginBottom: 6 }}>
// //                     <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
// //                         {subject.name}
// //                     </Typography>
// //                     {subject.topics.map((topic) => (
// //                         <Box key={topic.id} sx={{ marginBottom: 4 }}>
// //                             <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium', color: '#555' }}>
// //                                 {topic.name}
// //                             </Typography>
// //                             <Box
// //                                 sx={{
// //                                     display: 'flex',
// //                                     overflowX: 'auto',
// //                                     gap: 3,
// //                                     paddingBottom: 2,
// //                                     '&::-webkit-scrollbar': {
// //                                         height: 10,
// //                                     },
// //                                     '&::-webkit-scrollbar-thumb': {
// //                                         backgroundColor: 'rgba(0,0,0,.2)',
// //                                         borderRadius: 5,
// //                                     },
// //                                 }}
// //                             >
// //                                 {topic.subtopics.map((subtopic) => {
// //                                     const totalPlays = subtopic.quizzes.reduce((sum, quiz) => sum + quiz.plays, 0);
// //                                     return (
// //                                         <Card
// //                                             key={subtopic.id}
// //                                             sx={{
// //                                                 minWidth: 240,
// //                                                 flexShrink: 0,
// //                                                 boxShadow: 4,
// //                                                 borderRadius: 3,
// //                                                 overflow: 'hidden',
// //                                                 cursor: 'pointer',
// //                                                 transition: 'transform 0.2s, box-shadow 0.2s',
// //                                                 position: 'relative',
// //                                                 '&:hover': {
// //                                                     transform: 'translateY(-4px)',
// //                                                     boxShadow: 8,
// //                                                 },
// //                                                 '&:hover .arrow': {
// //                                                     opacity: 1,
// //                                                 },
// //                                             }}
// //                                             onClick={() => {
// //                                                 // Redirect to the first quiz of the subtopic for simplicity
// //                                                 if (subtopic.quizzes.length > 0) {
// //                                                     navigate(`/quizzes/${subject.id}/${topic.id}/${subtopic.id}`);
// //                                                 }
// //                                             }}
// //                                         >
// //                                             <CardMedia
// //                                                 component="img"
// //                                                 height="160"
// //                                                 image={`https://dummyimage.com/240x160/000/fff&text=${encodeURIComponent(subtopic.name)}`}
// //                                                 alt={subtopic.name}
// //                                                 sx={{ objectFit: 'cover' }}
// //                                             />
// //                                             <CardContent sx={{ padding: 2 }}>
// //                                                 <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
// //                                                     {subtopic.name}
// //                                                 </Typography>
// //                                                 <Typography variant="body2" color="text.secondary">
// //                                                     {subtopic.quizzes.length} activities • {totalPlays} plays
// //                                                 </Typography>
// //                                             </CardContent>
// //                                             <ArrowForward
// //                                                 className="arrow"
// //                                                 sx={{
// //                                                     position: 'absolute',
// //                                                     top: '50%',
// //                                                     right: 16,
// //                                                     transform: 'translateY(-50%)',
// //                                                     opacity: 0,
// //                                                     transition: 'opacity 0.2s',
// //                                                     color: '#666',
// //                                                 }}
// //                                             />
// //                                         </Card>
// //                                     );
// //                                 })}
// //                             </Box>
// //                         </Box>
// //                     ))}
// //                 </Box>
// //             ))}
// //         </Box>
// //     );
// // };

// // export default QuizzPage;


// import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import ArrowForward from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';
// import subjects from '../../services/subjectsData';
// import { theme } from '../../styles/theme';
// import { useState } from 'react'
// import { QuizStartModal } from './QuizStartModal';

// const Quizz = () => {
//     const [isModalOpen, setModalOpen] = useState(false);

//     const handleOpenModal = () => setModalOpen(true);
//     const handleCloseModal = () => setModalOpen(false);

//     const handlePractice = () => {
//         console.log('Starting practice mode...');
//         const subjectName ="maths";
//         const quizName = "equivalent-fractions"
//         navigate(`/quiz/${subjectName}/${quizName}/start`)
//         handleCloseModal();
//     };

//     const handleChallenge = () => {
//         // Here you can use the password for game logic
//         console.log('Challenging friends! Password is: examplePassword123');
//         handleCloseModal();
//     };

//     const navigate = useNavigate();

//     return (
//         <Box sx={{ padding: { xs: 2, sm: 3, md: 4 }, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
//             {subjects?.map((subject) => (
//                 <Box key={subject.id} sx={{ marginBottom: { xs: 4, sm: 5, md: 6 } }}>
//                     <Typography
//                         variant="h3"
//                         gutterBottom
//                         sx={{
//                             fontWeight: 'bold',
//                             color: '#333',
//                             fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.2rem' },
//                         }}
//                     >
//                         {subject.name}
//                     </Typography>
//                     {subject.topics.map((topic) => (
//                         <Box key={topic.id} sx={{ marginBottom: { xs: 3, sm: 4 } }}>
//                             <Box
//                                 sx={{
//                                     display: 'flex',
//                                     flexDirection: { xs: 'column', sm: 'row' },
//                                     alignItems: { xs: 'stretch', sm: 'flex-start' },
//                                     justifyContent: 'center',
//                                     gap: { xs: 2, sm: 3 },
//                                 }}
//                             >
//                                 {/* Topic Card (Key) */}
//                                 <Card
//                                     sx={{
//                                         width: { xs: 200, sm: 220, md: 240 },
//                                         flexShrink: 0,
//                                         boxShadow: 4,
//                                         borderRadius: 3,
//                                         overflow: 'hidden',
//                                         backgroundColor: '#a67bd4ff',
//                                         color: '#fff',
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         minHeight: { xs: 80, sm: 160 },
//                                     }}
//                                 >
//                                     <CardMedia
//                                         component="img"
//                                         height="160"
//                                         image={`https://placehold.co/240x160?text=${encodeURIComponent(topic.name)}&font=roboto&size=20&bg=000000&color=ffffff`}
//                                         alt={topic.name}
//                                         sx={{ objectFit: 'cover' }}
//                                     />
//                                     <CardContent sx={{ padding: 2, textAlign: 'center' }}>

//                                         <Typography
//                                             variant="h6"
//                                             sx={{
//                                                 fontWeight: 'bold',
//                                                 fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
//                                             }}
//                                         >
//                                             {topic.name}
//                                         </Typography>
//                                     </CardContent>
//                                 </Card>

//                                 {/* Subtopics Scrollable Area (Value) */}
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         overflowX: 'auto',
//                                         gap: { xs: 2, sm: 3 },
//                                         padding: 2,
//                                         scrollbarWidth: 'none', // Firefox
//                                         '&::-webkit-scrollbar': {
//                                             display: 'none', // Chrome, Safari
//                                         },
//                                         flex: 1,
//                                         alignItems: 'center',
//                                     }}
//                                 >
//                                     {topic.subtopics.map((subtopic) => {
//                                         const totalPlays = subtopic.quizzes.reduce((sum, quiz) => sum + quiz.plays, 0);
//                                         return (
//                                             <Card
//                                                 key={subtopic.id}
//                                                 sx={{
//                                                     minWidth: { xs: 200, sm: 220, md: 240 },
//                                                     flexShrink: 0,
//                                                     boxShadow: 4,
//                                                     borderRadius: 3,
//                                                     overflow: 'hidden',
//                                                     cursor: 'pointer',
//                                                     transition: 'transform 0.2s, box-shadow 0.2s',
//                                                     position: 'relative',
//                                                     '&:hover': {
//                                                         transform: 'translateY(-4px)',
//                                                         boxShadow: 8,
//                                                     },
//                                                     '&:hover .arrow': {
//                                                         opacity: 1,
//                                                     },
//                                                 }}
//                                                 onClick={() => {
//                                                     if (subtopic.quizzes.length > 0) {
//                                                         // navigate(`/quizzes/${subject.id}/${topic.id}/${subtopic.id}`);
//                                                         setModalOpen(true);
//                                                     }
//                                                 }}
//                                             >
//                                                 <CardMedia
//                                                     component="img"
//                                                     height="160"
//                                                     image={`https://dummyimage.com/240x160/000/fff&text=${encodeURIComponent(subtopic.name)}`}
//                                                     alt={subtopic.name}
//                                                     sx={{ objectFit: 'cover' }}
//                                                 />
//                                                 <CardContent sx={{ padding: 2 }}>
//                                                     <Typography
//                                                         variant="h6"
//                                                         gutterBottom
//                                                         sx={{
//                                                             fontWeight: 'bold',
//                                                             color: '#333',
//                                                             fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
//                                                         }}
//                                                     >
//                                                         {subtopic.name}
//                                                     </Typography>
//                                                     <Typography
//                                                         variant="body2"
//                                                         color="text.secondary"
//                                                         sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem' } }}
//                                                     >
//                                                         {subtopic.quizzes.length} activities • {totalPlays} plays
//                                                     </Typography>
//                                                 </CardContent>
//                                                 <ArrowForward
//                                                     className="arrow"
//                                                     sx={{
//                                                         position: 'absolute',
//                                                         top: '50%',
//                                                         right: 16,
//                                                         transform: 'translateY(-50%)',
//                                                         opacity: 0,
//                                                         transition: 'opacity 0.2s',
//                                                         color: '#666',
//                                                     }}
//                                                 />
//                                             </Card>
//                                         );
//                                     })}
//                                 </Box>
//                             </Box>
//                         </Box>
//                     ))}
//                 </Box>
//             ))}

//             <QuizStartModal
//                 open={isModalOpen}
//                 onClose={handleCloseModal}
//                 title="Dividing Fractions"
//                 questions={13}
//                 plays="40k"
//                 grades="4th to 5th"
//                 difficulty="Medium"
//                 password="examplePassword123" // The password data you wanted
//                 onPractice={handlePractice}
//                 onChallenge={handleChallenge}
//             />
//         </Box>
//     );
// };

// export default Quizz;