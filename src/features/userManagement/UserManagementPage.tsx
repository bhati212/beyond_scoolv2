import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, CircularProgress, Alert } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UsersTable from './components/UsersTable';
import InviteUserModal from './components/InviteUserModal';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsers, selectAllUsers, selectUserManagementStatus } from './userManagementSlice';

const UserManagementPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const status = useAppSelector(selectUserManagementStatus);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">User Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenModal}
        >
          Invite User
        </Button>
      </Box>

      {status === 'loading' && <CircularProgress />}
      {status === 'failed' && <Alert severity="error">Failed to load users.</Alert>}
      {status === 'succeeded' && <UsersTable data={users} />}

      <InviteUserModal open={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default UserManagementPage;