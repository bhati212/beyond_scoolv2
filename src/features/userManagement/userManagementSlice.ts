import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import type { User } from '../../types/user';
import type { RootState } from '../../app/store';
import userService from '../../services/userService';

// Using createEntityAdapter for normalized state, which is a best practice for lists of data
const usersAdapter = createEntityAdapter<User>();

const initialState = usersAdapter.getInitialState({
  status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
  error: null as string | null,
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await userService.getUsers();
  return response;
});

export const inviteUser = createAsyncThunk(
  'users/inviteUser',
  async (invitation: { email: string; role: string }) => {
    const newUser = await userService.inviteUser(invitation);
    return newUser;
  }
);

const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
     .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        usersAdapter.setAll(state, action.payload);
      })
     .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      })
     .addCase(inviteUser.fulfilled, (state, action) => {
        usersAdapter.addOne(state, action.payload);
      });
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
} = usersAdapter.getSelectors((state: RootState) => state.userManagement);

export const selectUserManagementStatus = (state: RootState) => state.userManagement.status;

export default userManagementSlice.reducer;