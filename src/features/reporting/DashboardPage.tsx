// import React from 'react';
// import { Box, Grid, Card, CardContent, Typography, Link } from '@mui/material';
// import GroupIcon from '@mui/icons-material/Group';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

// const summaryData=[] ;

// const DashboardPage: React.FC = () => {
//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>Dashboard Overview</Typography>
//       <Box sx={{ mb: 4, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           Quizizz is now Wayground
//         </Typography>
//         <Typography sx={{ mb: 1 }}>
//           Our name is changing but our commitment to teachers remains the same.
//         </Typography>
//         <Link
//           href="https://dev.quizizz.com/admin"
//           target="_blank"
//           rel="noopener noreferrer"
//           underline="hover"
//           variant="body1"
//         >
//           Find a Quiz - Wayground (formerly Quizizz)
//         </Link>
//       </Box>
//       <Grid container spacing={3}>
//         {/* {summaryData.map(item => (
//           <Grid item xs={12} md={4} key={item.title}>
//             <Card>
//               <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
//                 {item.icon}
//                 <Box sx={{ ml: 2 }}>
//                   <Typography variant="h5">{item.value}</Typography>
//                   <Typography color="text.secondary">{item.title}</Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))} */}
//         {/* Chart components would be placed here */}
//       </Grid>
//     </Box>
//   );
// };

// export default DashboardPage;

import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
  CircularProgress,
} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import PeopleIcon from '@mui/icons-material/People';

type SummaryItem = {
  title: string;
  value: number | string;
  icon: React.ReactNode;
};

const DashboardPage: React.FC = () => {
  const [summaryData, setSummaryData] = useState<SummaryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated fetch
    setTimeout(() => {
      setSummaryData([
        {
          title: 'Total Quizzes',
          value: 128,
          icon: <QuizIcon color="primary" fontSize="large" />,
        },
        {
          title: 'Teachers',
          value: 45,
          icon: <SchoolIcon color="secondary" fontSize="large" />,
        },
        {
          title: 'Students',
          value: '1,250',
          icon: <PeopleIcon color="action" fontSize="large" />,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const chartData = [
    { name: 'Math', quizzes: 30 },
    { name: 'Science', quizzes: 20 },
    { name: 'English', quizzes: 25 },
    { name: 'History', quizzes: 15 },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      <Box sx={{ mb: 4, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Quizizz is now Wayground
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Our name is changing but our commitment to teachers remains the same.
        </Typography>
        <Link
          href="https://dev.quizizz.com/admin"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          variant="body1"
        >
          Find a Quiz - Wayground (formerly Quizizz)
        </Link>
      </Box>

      <Grid container spacing={3}>
        {loading ? (
          <Grid item xs={12} display="flex" justifyContent="center">
            <CircularProgress />
          </Grid>
        ) : (
          summaryData.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Card
                sx={{ cursor: 'pointer', transition: '0.3s', '&:hover': { boxShadow: 6 } }}
                onClick={() => alert(`Clicked on ${item.title}`)}
              >
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  {item.icon}
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h5">{item.value}</Typography>
                    <Typography color="text.secondary">{item.title}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}

        {/* Example chart */}
        {/* <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quizzes by Subject
              </Typography>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="quizzes" fill="#3f51b5" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default DashboardPage;
