import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  Quiz as QuizIcon,
  School as SchoolIcon,
  People as PeopleIcon,
  Analytics as AnalyticsIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import { useAppSelector } from '../app/hooks';
import { selectCurrentUser } from '../features/auth/authSlice';

interface SidebarProps {
  width: number;
  mobileOpen: boolean;
  onDrawerToggle: () => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactElement;
  roles: string[];
  path?: string;
}

const menuItems: MenuItem[] = [
  { 
    id: 'dashboard', 
    label: 'Dashboard', 
    icon: <DashboardIcon />, 
    roles: ['admin', 'teacher'],
    path: '/dashboard'
  },
  { 
    id: 'quizzes', 
    label: 'Quizzes', 
    icon: <QuizIcon />, 
    roles: ['admin', 'teacher'],
    path: '/quizzes'
  },
  { 
    id: 'classes', 
    label: 'Classes', 
    icon: <SchoolIcon />, 
    roles: ['admin', 'teacher'],
    path: '/classes'
  },
  { 
    id: 'users', 
    label: 'Users', 
    icon: <PeopleIcon />, 
    roles: ['admin'],
    path: '/users'
  },
  { 
    id: 'analytics', 
    label: 'Analytics', 
    icon: <AnalyticsIcon />, 
    roles: ['admin', 'teacher'],
    path: '/analytics'
  },
  { 
    id: 'settings', 
    label: 'Settings', 
    icon: <SettingsIcon />, 
    roles: ['admin', 'teacher'],
    path: '/settings'
  }
];

const Sidebar: React.FC<SidebarProps> = ({ width, mobileOpen, onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const user = useAppSelector(selectCurrentUser);

  // Check if user has permission to access a menu item
  const hasPermission = (roles: string[]): boolean => {
    if (!user?.role) return false;
    return roles.includes(user.role);
  };

  // Check if current path matches menu item
  const isActiveItem = (itemPath: string): boolean => {
    return location.pathname === itemPath || location.pathname.startsWith(itemPath);
  };

  // Filter menu items based on user role
  const filteredMenuItems = menuItems.filter(item => hasPermission(item.roles));

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header Section */}
      <Toolbar sx={{ 
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        minHeight: '64px !important',
        px: 3
      }}>
        <Box display="flex" alignItems="center" gap={2} width="100%">
          <Box 
            sx={{ 
              width: 40, 
              height: 40, 
              borderRadius: 2, 
              background: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Typography variant="h6" sx={{ 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              Q
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" sx={{ 
              color: 'white', 
              fontWeight: 600,
              fontSize: '1.1rem'
            }}>
              Quizizz Admin
            </Typography>
            <Typography variant="caption" sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.75rem'
            }}>
              {user?.role === 'admin' ? 'Administrator' : 'Teacher'} Panel
            </Typography>
          </Box>
        </Box>
      </Toolbar>

      <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)' }} />

      {/* User Info Section */}
      {user && (
        <Box sx={{ p: 2, backgroundColor: theme.palette.grey[50] }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ 
              width: 36, 
              height: 36, 
              bgcolor: theme.palette.primary.main,
              fontSize: '0.9rem'
            }}>
              {user.name?.charAt(0).toUpperCase() || 'U'}
            </Avatar>
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography variant="subtitle2" sx={{ 
                fontWeight: 600,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                {user.name || 'User'}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                display: 'block'
              }}>
                {user.email || 'user@example.com'}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      <Divider />

      {/* Navigation Menu */}
      <List sx={{ 
        flex: 1, 
        pt: 2,
        px: 1
      }}>
        {filteredMenuItems.map((item) => {
          const isActive = isActiveItem(item.path || `/${item.id}`);
          
          return (
            <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton 
                component={NavLink} 
                to={item.path || `/${item.id}`}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  minHeight: 48,
                  backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
                  color: isActive ? theme.palette.primary.contrastText : theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: isActive 
                      ? theme.palette.primary.dark 
                      : theme.palette.action.hover,
                  },
                  '&.active': {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    '& .MuiListItemIcon-root': {
                      color: theme.palette.primary.contrastText
                    }
                  },
                  transition: 'all 0.2s ease-in-out',
                  '& .MuiListItemIcon-root': {
                    minWidth: 40,
                    color: isActive ? theme.palette.primary.contrastText : theme.palette.text.secondary
                  }
                }}
              >
                <ListItemIcon>
                  {React.cloneElement(item.icon, { 
                    fontSize: 'small',
                    sx: { fontSize: '1.25rem' }
                  })}
                </ListItemIcon>
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 500
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Footer Section */}
      <Box sx={{ 
        p: 2, 
        borderTop: 1, 
        borderColor: 'divider',
        backgroundColor: theme.palette.grey[50]
      }}>
        <Typography variant="caption" color="text.secondary" align="center" display="block">
          © 2024 Quizizz Admin
        </Typography>
        <Typography variant="caption" color="text.secondary" align="center" display="block">
          Version 1.0.0
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{ 
          keepMounted: true // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: width,
            borderRight: 'none',
            boxShadow: theme.shadows[8]
          },
        }}
      >
        {drawerContent}
      </Drawer>
      
      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: width,
            borderRight: `1px solid ${theme.palette.divider}`,
            boxShadow: 'none'
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;