import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Tab,
  Tabs,
  LinearProgress,
  Switch,
  FormControlLabel,
  Alert,
  Snackbar,
  Fab,
  Tooltip
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Quiz as QuizIcon,
  School as SchoolIcon,
  People as PeopleIcon,
  Analytics as AnalyticsIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  PlayArrow as PlayIcon,
  Stop as StopIcon,
  Visibility as ViewIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  MoreVert as MoreVertIcon,
  TrendingUp as TrendingUpIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Mock Data
const mockUsers = [
  { id: 1, name: 'John Smith', email: 'john.smith@school.edu', role: 'Teacher', status: 'Active', quizzes: 15, students: 120 },
  { id: 2, name: 'Sarah Johnson', email: 'sarah.j@school.edu', role: 'Teacher', status: 'Active', quizzes: 23, students: 98 },
  { id: 3, name: 'Mike Brown', email: 'mike.brown@school.edu', role: 'Admin', status: 'Active', quizzes: 5, students: 0 },
  { id: 4, name: 'Lisa Davis', email: 'lisa.davis@school.edu', role: 'Teacher', status: 'Inactive', quizzes: 8, students: 67 }
];

const mockQuizzes = [
  { id: 1, title: 'Mathematics Quiz - Algebra', subject: 'Mathematics', questions: 25, plays: 234, created: '2024-01-15', status: 'Published', creator: 'John Smith' },
  { id: 2, title: 'Science Quiz - Physics', subject: 'Science', questions: 30, plays: 189, created: '2024-01-10', status: 'Published', creator: 'Sarah Johnson' },
  { id: 3, title: 'History - World War II', subject: 'History', questions: 20, plays: 156, created: '2024-01-08', status: 'Draft', creator: 'John Smith' },
  { id: 4, title: 'English Literature Quiz', subject: 'English', questions: 35, plays: 278, created: '2024-01-05', status: 'Published', creator: 'Lisa Davis' }
];

const mockClasses = [
  { id: 1, name: 'Grade 10A Mathematics', teacher: 'John Smith', students: 28, activeQuizzes: 3 },
  { id: 2, name: 'Grade 9B Science', teacher: 'Sarah Johnson', students: 32, activeQuizzes: 2 },
  { id: 3, name: 'Grade 11 History', teacher: 'John Smith', students: 25, activeQuizzes: 1 },
  { id: 4, name: 'Grade 8 English', teacher: 'Lisa Davis', students: 30, activeQuizzes: 4 }
];

const mockAnalytics = {
  totalQuizzes: 1247,
  totalPlays: 15632,
  totalUsers: 456,
  totalStudents: 12890,
  weeklyGrowth: 12.5,
  monthlyActiveUsers: 342,
  averageScore: 76.8,
  completionRate: 84.3
};

// Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#8B42D3',
      light: '#A855F7',
      dark: '#7C3AED'
    },
    secondary: {
      main: '#06B6D4',
      light: '#22D3EE',
      dark: '#0891B2'
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600
    },
    h6: {
      fontWeight: 600
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1E293B',
          color: '#F1F5F9'
        }
      }
    }
  }
});

// Main App Component
const QuizzAdminApp = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [userRole] = useState('admin'); // Mock user role
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationCount] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const drawerWidth = 280;

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon />, roles: ['admin', 'teacher'] },
    { id: 'quizzes', label: 'Quizzes', icon: <QuizIcon />, roles: ['admin', 'teacher'] },
    { id: 'classes', label: 'Classes', icon: <SchoolIcon />, roles: ['admin', 'teacher'] },
    { id: 'users', label: 'Users', icon: <PeopleIcon />, roles: ['admin'] },
    { id: 'analytics', label: 'Analytics', icon: <AnalyticsIcon />, roles: ['admin', 'teacher'] },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon />, roles: ['admin', 'teacher'] }
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  // Dashboard Component
  const Dashboard = () => (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4">{mockAnalytics.totalQuizzes.toLocaleString()}</Typography>
                  <Typography variant="body2">Total Quizzes</Typography>
                </Box>
                <QuizIcon sx={{ fontSize: 40, opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4">{mockAnalytics.totalPlays.toLocaleString()}</Typography>
                  <Typography variant="body2">Total Plays</Typography>
                </Box>
                <PlayIcon sx={{ fontSize: 40, opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4">{mockAnalytics.totalUsers}</Typography>
                  <Typography variant="body2">Teachers</Typography>
                </Box>
                <PeopleIcon sx={{ fontSize: 40, opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: 'white' }}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4">{mockAnalytics.totalStudents.toLocaleString()}</Typography>
                  <Typography variant="body2">Students</Typography>
                </Box>
                <SchoolIcon sx={{ fontSize: 40, opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Quiz Activity
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Quiz Title</TableCell>
                      <TableCell>Creator</TableCell>
                      <TableCell>Plays</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mockQuizzes.slice(0, 5).map((quiz) => (
                      <TableRow key={quiz.id}>
                        <TableCell>{quiz.title}</TableCell>
                        <TableCell>{quiz.creator}</TableCell>
                        <TableCell>{quiz.plays}</TableCell>
                        <TableCell>
                          <Chip 
                            label={quiz.status} 
                            color={quiz.status === 'Published' ? 'success' : 'default'}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton size="small"><ViewIcon fontSize="small" /></IconButton>
                          <IconButton size="small"><EditIcon fontSize="small" /></IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Stats
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2">Average Score</Typography>
                  <Typography variant="body2" fontWeight="bold">{mockAnalytics.averageScore}%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={mockAnalytics.averageScore} sx={{ mb: 2 }} />
                
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2">Completion Rate</Typography>
                  <Typography variant="body2" fontWeight="bold">{mockAnalytics.completionRate}%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={mockAnalytics.completionRate} sx={{ mb: 2 }} />
                
                <Box display="flex" alignItems="center" justifyContent="space-between" p={2} bgcolor="grey.50" borderRadius={1}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Weekly Growth</Typography>
                    <Typography variant="h6" color="success.main">+{mockAnalytics.weeklyGrowth}%</Typography>
                  </Box>
                  <TrendingUpIcon color="success" />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  // Quizzes Component
  const Quizzes = () => {
    const [tabValue, setTabValue] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    return (
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">Quiz Management</Typography>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            onClick={() => showSnackbar('Create quiz functionality would be implemented here')}
          >
            Create Quiz
          </Button>
        </Box>

        <Card>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
              <Tab label="All Quizzes" />
              <Tab label="Published" />
              <Tab label="Drafts" />
              <Tab label="Archived" />
            </Tabs>
          </Box>

          <CardContent>
            <Box display="flex" gap={2} mb={3}>
              <TextField
                placeholder="Search quizzes..."
                variant="outlined"
                size="small"
                sx={{ flexGrow: 1 }}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outlined" startIcon={<FilterIcon />}>Filter</Button>
              <Button variant="outlined" startIcon={<DownloadIcon />}>Export</Button>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Quiz Title</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Questions</TableCell>
                    <TableCell>Plays</TableCell>
                    <TableCell>Creator</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockQuizzes
                    .filter(quiz => tabValue === 0 || 
                      (tabValue === 1 && quiz.status === 'Published') ||
                      (tabValue === 2 && quiz.status === 'Draft'))
                    .filter(quiz => quiz.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((quiz) => (
                      <TableRow key={quiz.id} hover>
                        <TableCell>
                          <Typography variant="subtitle2">{quiz.title}</Typography>
                        </TableCell>
                        <TableCell>{quiz.subject}</TableCell>
                        <TableCell>{quiz.questions}</TableCell>
                        <TableCell>{quiz.plays}</TableCell>
                        <TableCell>{quiz.creator}</TableCell>
                        <TableCell>{quiz.created}</TableCell>
                        <TableCell>
                          <Chip 
                            label={quiz.status} 
                            color={quiz.status === 'Published' ? 'success' : 'warning'}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton size="small" onClick={() => showSnackbar(`Viewing ${quiz.title}`)}>
                            <ViewIcon fontSize="small" />
                          </IconButton>
                          <IconButton size="small" onClick={() => showSnackbar(`Editing ${quiz.title}`)}>
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton size="small" onClick={() => showSnackbar(`Playing ${quiz.title}`)}>
                            <PlayIcon fontSize="small" />
                          </IconButton>
                          <IconButton size="small">
                            <MoreVertIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    );
  };

  // Classes Component
  const Classes = () => (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Class Management</Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={() => showSnackbar('Create class functionality would be implemented here')}
        >
          Create Class
        </Button>
      </Box>

      <Grid container spacing={3}>
        {mockClasses.map((classItem) => (
          <Grid item xs={12} md={6} lg={4} key={classItem.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="start" mb={2}>
                  <Typography variant="h6" component="div">
                    {classItem.name}
                  </Typography>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Box>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Teacher: {classItem.teacher}
                </Typography>
                
                <Box display="flex" alignItems="center" gap={2} mt={2}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <GroupIcon fontSize="small" color="primary" />
                    <Typography variant="body2">{classItem.students} students</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AssignmentIcon fontSize="small" color="secondary" />
                    <Typography variant="body2">{classItem.activeQuizzes} active quizzes</Typography>
                  </Box>
                </Box>
                
                <Box mt={3} display="flex" gap={1}>
                  <Button size="small" variant="outlined" fullWidth>
                    View Details
                  </Button>
                  <Button size="small" variant="contained" fullWidth>
                    Manage
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  // Users Component (Admin only)
  const Users = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);

    return (
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">User Management</Typography>
          <Box display="flex" gap={2}>
            <Button 
              variant="outlined" 
              startIcon={<UploadIcon />}
              onClick={() => showSnackbar('Bulk import functionality would be implemented here')}
            >
              Import Users
            </Button>
            <Button 
              variant="contained" 
              startIcon={<AddIcon />}
              onClick={() => setOpenDialog(true)}
            >
              Add User
            </Button>
          </Box>
        </Box>

        <Card>
          <CardContent>
            <Box display="flex" gap={2} mb={3}>
              <TextField
                placeholder="Search users..."
                variant="outlined"
                size="small"
                sx={{ flexGrow: 1 }}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
                }}
              />
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Role</InputLabel>
                <Select label="Role" defaultValue="">
                  <MenuItem value="">All Roles</MenuItem>
                  <MenuItem value="teacher">Teacher</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Status</InputLabel>
                <Select label="Status" defaultValue="">
                  <MenuItem value="">All Status</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      {/* Checkbox for select all */}
                    </TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Quizzes Created</TableCell>
                    <TableCell>Students</TableCell>
                    <TableCell>Last Login</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockUsers.map((user) => (
                    <TableRow key={user.id} hover>
                      <TableCell padding="checkbox">
                        {/* Individual checkbox */}
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Avatar sx={{ width: 40, height: 40 }}>
                            {user.name.charAt(0)}
                          </Avatar>
                          <Box>
                            <Typography variant="subtitle2">{user.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {user.email}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip 
                          label={user.role} 
                          color={user.role === 'Admin' ? 'primary' : 'default'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Chip 
                          label={user.status} 
                          color={user.status === 'Active' ? 'success' : 'error'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{user.quizzes}</TableCell>
                      <TableCell>{user.students}</TableCell>
                      <TableCell>2 hours ago</TableCell>
                      <TableCell>
                        <IconButton size="small" onClick={() => showSnackbar(`Editing ${user.name}`)}>
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small" onClick={() => showSnackbar(`Viewing ${user.name} details`)}>
                          <ViewIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                          <MoreVertIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* Add User Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Add New User</DialogTitle>
          <DialogContent>
            <Box display="flex" flexDirection="column" gap={3} mt={1}>
              <TextField label="Full Name" fullWidth />
              <TextField label="Email Address" type="email" fullWidth />
              <FormControl fullWidth>
                <InputLabel>Role</InputLabel>
                <Select label="Role">
                  <MenuItem value="teacher">Teacher</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel 
                control={<Switch defaultChecked />} 
                label="Send invitation email" 
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button 
              variant="contained" 
              onClick={() => {
                setOpenDialog(false);
                showSnackbar('User added successfully!');
              }}
            >
              Add User
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  };

  // Analytics Component
  const Analytics = () => (
    <Box>
      <Typography variant="h4" gutterBottom>
        Analytics & Reports
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                {mockAnalytics.monthlyActiveUsers}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Monthly Active Users
              </Typography>
              <LinearProgress variant="determinate" value={75} sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="secondary">
                {mockAnalytics.averageScore}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average Quiz Score
              </Typography>
              <LinearProgress variant="determinate" value={mockAnalytics.averageScore} sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="success.main">
                {mockAnalytics.completionRate}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Completion Rate
              </Typography>
              <LinearProgress variant="determinate" value={mockAnalytics.completionRate} sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="warning.main">
                +{mockAnalytics.weeklyGrowth}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Weekly Growth
              </Typography>
              <LinearProgress variant="determinate" value={mockAnalytics.weeklyGrowth * 4} sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quiz Performance Analytics
              </Typography>
              <Box height={400} display="flex" alignItems="center" justifyContent="center" bgcolor="grey.50">
                <Typography color="text.secondary">
                  Interactive charts would be implemented here using recharts
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Top Performing Quizzes
              </Typography>
              <List>
                {mockQuizzes
                  .sort((a, b) => b.plays - a.plays)
                  .slice(0, 5)
                  .map((quiz, index) => (
                    <ListItem key={quiz.id} divider>
                      <ListItemText
                        primary={quiz.title}
                        secondary={`${quiz.plays} plays • ${quiz.subject}`}
                      />
                                              <Chip 
                        label={`#${index + 1}`}
                        color="primary"
                        size="small"
                      />
                    </ListItem>
                  ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  // Settings Component
  const Settings = () => {
    const [tabValue, setTabValue] = useState(0);
    
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        
        <Card>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
              <Tab label="General" />
              <Tab label="Users & Permissions" />
              <Tab label="Quiz Settings" />
              <Tab label="Notifications" />
              <Tab label="Integrations" />
            </Tabs>
          </Box>

          <CardContent>
            {tabValue === 0 && (
              <Box>
                <Typography variant="h6" gutterBottom>General Settings</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField label="Organization Name" fullWidth defaultValue="Sample School District" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="Domain" fullWidth defaultValue="sample-school.edu" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                      label="Organization Description" 
                      multiline 
                      rows={4} 
                      fullWidth 
                      defaultValue="Leading educational institution focused on innovative learning methods."
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Time Zone</InputLabel>
                      <Select label="Time Zone" defaultValue="UTC-5">
                        <MenuItem value="UTC-8">Pacific Time (UTC-8)</MenuItem>
                        <MenuItem value="UTC-5">Eastern Time (UTC-5)</MenuItem>
                        <MenuItem value="UTC+0">UTC</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Language</InputLabel>
                      <Select label="Language" defaultValue="en">
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="es">Spanish</MenuItem>
                        <MenuItem value="fr">French</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Box mt={3}>
                  <Button variant="contained" onClick={() => showSnackbar('Settings saved successfully!')}>
                    Save Changes
                  </Button>
                </Box>
              </Box>
            )}

            {tabValue === 1 && (
              <Box>
                <Typography variant="h6" gutterBottom>User & Permission Settings</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <FormControlLabel 
                      control={<Switch defaultChecked />} 
                      label="Allow teachers to create quizzes" 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel 
                      control={<Switch defaultChecked />} 
                      label="Allow teachers to manage their own classes" 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel 
                      control={<Switch />} 
                      label="Require admin approval for new quizzes" 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel 
                      control={<Switch defaultChecked />} 
                      label="Enable user registration" 
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Default Role for New Users</InputLabel>
                      <Select label="Default Role for New Users" defaultValue="teacher">
                        <MenuItem value="teacher">Teacher</MenuItem>
                        <MenuItem value="student">Student</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            )}

            {tabValue === 2 && (
              <Box>
                <Typography variant="h6" gutterBottom>Quiz Settings</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField 
                      label="Maximum Questions per Quiz" 
                      type="number" 
                      fullWidth 
                      defaultValue="50"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField 
                      label="Default Quiz Time Limit (minutes)" 
                      type="number" 
                      fullWidth 
                      defaultValue="30"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel 
                      control={<Switch defaultChecked />} 
                      label="Allow quiz retakes" 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel 
                      control={<Switch defaultChecked />} 
                      label="Show correct answers after quiz completion" 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel 
                      control={<Switch />} 
                      label="Require proctoring for high-stakes quizzes" 
                    />
                  </Grid>
                </Grid>
              </Box>
            )}

            {tabValue === 3 && (
              <Box>
                <Typography variant="h6" gutterBottom>Notification Settings</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>Email Notifications</Typography>
                    <FormControlLabel 
                      control={<Switch defaultChecked />} 
                      label="New quiz submissions" 
                    />
                    <FormControlLabel 
                      control={<Switch defaultChecked />} 
                      label="User registration notifications" 
                    />
                    <FormControlLabel 
                      control={<Switch />} 
                      label="Weekly activity reports" 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>Push Notifications</Typography>
                    <FormControlLabel 
                      control={<Switch defaultChecked />} 
                      label="Real-time quiz activity" 
                    />
                    <FormControlLabel 
                      control={<Switch />} 
                      label="System maintenance alerts" 
                    />
                  </Grid>
                </Grid>
              </Box>
            )}

            {tabValue === 4 && (
              <Box>
                <Typography variant="h6" gutterBottom>Integrations</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>Google Classroom</Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Sync classes and assignments with Google Classroom
                        </Typography>
                        <Button variant="outlined" size="small">Configure</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>Microsoft Teams</Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Enable quiz sharing in Microsoft Teams
                        </Typography>
                        <Button variant="outlined" size="small">Configure</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>Canvas LMS</Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Integrate with Canvas Learning Management System
                        </Typography>
                        <Button variant="outlined" size="small">Configure</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>Zoom</Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Enable live quiz sessions in Zoom meetings
                        </Typography>
                        <Button variant="outlined" size="small">Configure</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    );
  };

  // Sidebar Component
  const Sidebar = () => (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" gap={2}>
          <Box 
            sx={{ 
              width: 40, 
              height: 40, 
              borderRadius: 2, 
              background: 'linear-gradient(45deg, #8B42D3, #A855F7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
              Q
            </Typography>
          </Box>
          <Typography variant="h6" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
            Quizizz Admin
          </Typography>
        </Box>
      </Toolbar>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
      <List sx={{ pt: 2 }}>
        {menuItems
          .filter(item => item.roles.includes(userRole))
          .map((item) => (
            <ListItem 
              key={item.id} 
              disablePadding
              sx={{ 
                mb: 1,
                mx: 1,
                borderRadius: 1,
                backgroundColor: currentView === item.id ? 'rgba(139, 66, 211, 0.2)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)'
                }
              }}
            >
              <ListItemButton 
                onClick={() => setCurrentView(item.id)}
                sx={{ 
                  borderRadius: 1,
                  color: currentView === item.id ? '#A855F7' : '#F1F5F9'
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Drawer>
  );

  // Header Component
  const Header = () => (
    <AppBar 
      position="fixed" 
      sx={{ 
        width: `calc(100% - ${drawerWidth}px)`, 
        ml: `${drawerWidth}px`,
        backgroundColor: 'white',
        color: 'text.primary',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
          {menuItems.find(item => item.id === currentView)?.label || 'Dashboard'}
        </Typography>
        
        <Box display="flex" alignItems="center" gap={2}>
          <TextField 
            placeholder="Quick search..." 
            size="small" 
            sx={{ width: 250 }}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
            }}
          />
          
          <IconButton color="inherit">
            <Badge badgeContent={notificationCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          
          <IconButton onClick={handleMenuClick} color="inherit">
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              A
            </Avatar>
          </IconButton>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );

  // Main Content Component
  const MainContent = () => {
    const renderContent = () => {
      switch (currentView) {
        case 'dashboard':
          return <Dashboard />;
        case 'quizzes':
          return <Quizzes />;
        case 'classes':
          return <Classes />;
        case 'users':
          return userRole === 'admin' ? <Users /> : <Dashboard />;
        case 'analytics':
          return <Analytics />;
        case 'settings':
          return <Settings />;
        default:
          return <Dashboard />;
      }
    };

    return (
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          bgcolor: 'background.default',
          minHeight: '100vh',
          ml: `${drawerWidth}px`,
          mt: 8
        }}
      >
        <Container maxWidth="xl" sx={{ py: 4 }}>
          {renderContent()}
        </Container>
        
        {/* Floating Action Button */}
        <Fab 
          color="primary" 
          sx={{ position: 'fixed', bottom: 24, right: 24 }}
          onClick={() => {
            if (currentView === 'quizzes') {
              showSnackbar('Quick create quiz');
            } else if (currentView === 'classes') {
              showSnackbar('Quick create class');
            } else if (currentView === 'users') {
              setOpenDialog(true);
            }
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <MainContent />
        
        {/* Snackbar for notifications */}
        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={6000} 
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        >
          <Alert 
            onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} 
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default QuizzAdminApp;