// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAppSelector } from '../app/hooks';
// import { selectCurrentUser } from '../features/auth/authSlice';

// interface ProtectedRouteProps {
//   children: React.ReactElement;
//   permissions: string;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, permissions }) => {
//   const user = useAppSelector(selectCurrentUser);
//   const location = useLocation();

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   const hasRequiredPermissions = permissions.every(p => user.permissions.includes(p));

//   if (!hasRequiredPermissions) {
//     // In a real app, redirect to an "Unauthorized" page
//     return <Navigate to="/dashboard" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;