// import { createSlice } from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit'
// import type { User } from '../../types/user';
// import type { RootState } from '../../app/store';

// interface AuthState {
//   user: User | null;
//   token: string | null;
// }

// // Mock a logged-in user for demonstration
// const mockUser: User = {
//   id: 'u001',
//   name: 'Jane Doe',
//   email: 'jane.d@example.com',
//   role: 'teacher',
//   lastActive: '2024-10-26T10:00:00Z',
//   permissions: [
//     'view:dashboard',
//     'user:read',
//     'user:create',
//     'user:edit_role',
//     'user:delete',
//     'content:read',
//     'content:create',
//     'report:read',
//   ],
// };

// const initialState: AuthState = {
//   user: mockUser, // Set mock user as initial state
//   token: 'mock-jwt-token',
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setCredentials(state, action: PayloadAction<{ user: User; token: string }>) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     logOut(state) {
//       state.user = null;
//       state.token = null;
//     },
//   },
// });

// export const { setCredentials, logOut } = authSlice.actions;

// export default authSlice.reducer;

// export const selectCurrentUser = (state: RootState) => state.auth.user;