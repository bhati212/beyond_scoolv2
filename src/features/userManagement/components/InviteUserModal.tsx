import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch } from '../../../app/hooks';
import { inviteUser } from '../userManagementSlice';

interface InviteUserModalProps {
  open: boolean;
  onClose: () => void;
}

interface IFormInput {
  email: string;
  role: string;
}

const InviteUserModal: React.FC<InviteUserModalProps> = ({ open, onClose }) => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: { email: '', role: 'teacher' },
  });

  const onSubmit = (data: IFormInput) => {
    dispatch(inviteUser(data));
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Invite New User</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Controller
            name="email"
            control={control}
            rules={{ required: 'Email is required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                autoFocus
                margin="dense"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Role</InputLabel>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Role">
                  <MenuItem value="teacher">Teacher</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Send Invite
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default InviteUserModal;