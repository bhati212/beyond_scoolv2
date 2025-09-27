import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import LoginPage from './features/auth/LoginPage';
import DashboardPage from './features/reporting/DashboardPage';
import UserManagementPage from './features/userManagement/UserManagementPage';
import ContentLibraryPage from './features/contentLibrary/ContentLibraryPage';
import CreateContentPage from './features/contentCreation/CreateContentPage';
import ReportDetailsPage from './features/reporting/ReportDetailsPage';
import ProtectedRoute from './components/ProtectedRoute';
import Quizz from './features/quizzes/Quizz';
import QuizTest from './features/quizzes/QuizzTest';
import SubtopicQuizzes from './features/quizzes/SubTopicQuizz';
import QuizLobbyPage from './features/quizzes/QuizLobbyPage';
import { QuizPage } from './features/quizzes/QuizPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Admin Routes */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute permissions={['view:dashboard']}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          
          <Route 
            path="users" 
            element={
              <ProtectedRoute permissions={['user:read']}>
                <UserManagementPage />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="quizzes" element={<Quizz/>}/>
          <Route path="/quizzes/:subjectId/:topicId/:subtopicId" element={<SubtopicQuizzes/>}/>
          <Route path="/quizzes/:subjectId/:topicId/:subtopicId/:quizId" element={<QuizTest/>}/>
          <Route path="library" element={<ContentLibraryPage />} />
          <Route path="create" element={<CreateContentPage />} />
          <Route path="reports/:reportId" element={<ReportDetailsPage />} />
        </Route>

        <Route path="quiz/:quizId/start" element={<QuizLobbyPage/>}/>
        <Route path="quiz/:subject/:quizName/:language" element={<QuizPage/>}/>
        {/* <Route path="quiz/:quizId/:token/analytics" element={<QuizAnalyticsPage/>}/> */}

        {/* Fallback Route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;