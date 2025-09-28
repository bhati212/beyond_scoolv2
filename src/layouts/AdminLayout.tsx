// import React, { useState } from 'react';
// import { Box, Toolbar } from '@mui/material';
// import { Outlet } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const DRAWER_WIDTH = 280;

// const AdminLayout: React.FC = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Header onDrawerToggle={handleDrawerToggle} />
//       <Sidebar
//         width={DRAWER_WIDTH}
//         mobileOpen={mobileOpen}
//         onDrawerToggle={handleDrawerToggle}
//       />
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
//         }}
//       >
//         <Toolbar />
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// export default AdminLayout;