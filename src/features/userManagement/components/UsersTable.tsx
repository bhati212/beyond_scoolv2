import React, { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { User } from '../../../types/user';
import { useAppSelector } from '../../../app/hooks';
import { selectCurrentUser } from '../../../features/auth/authSlice';

interface UsersTableProps {
  data: User;
}

const UsersTable: React.FC<UsersTableProps> = ({ data }) => {
  const currentUser = useAppSelector(selectCurrentUser);
  const canEdit = currentUser?.permissions.includes('user:edit_role')?? false;
  const canDelete = currentUser?.permissions.includes('user:delete')?? false;

  const columns = useMemo<MRT_ColumnDef<User>>(() =>{});

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowActions
      renderRowActions={({ row }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          {canEdit && (
            <IconButton color="primary" onClick={() => console.log('Edit user', row.original.id)}>
              <EditIcon />
            </IconButton>
          )}
          {canDelete && (
            <IconButton color="error" onClick={() => console.log('Delete user', row.original.id)}>
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      )}
    />
  );
};

export default UsersTable;