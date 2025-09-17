import apiClient from '../lib/axios';
import type { User } from '../types/user';

const getUsers = async (): Promise<User> => {
  const response = await apiClient.get('/users');
  return response.data;
};

const inviteUser = async (invitation: { email: string; role: string }): Promise<User> => {
  // In a real app, this would be a POST request
  // For mock, we'll just create a new user object
  const newUser: User = {
    id: `u${Date.now()}`,
    name: 'New User',
    email: invitation.email,
    role: invitation.role,
    lastActive: new Date().toISOString(),
    permissions: invitation.role === 'Admin'? ['view:dashboard', 'user:read', 'user:create'] : ['view:dashboard', 'content:read'],
  };
  return Promise.resolve(newUser);
};

const userService = {
  getUsers,
  inviteUser,
};

export default userService;