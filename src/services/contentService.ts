import apiClient from '../lib/axios';
import type { Content } from '../types/content';

const getMyContent = async (): Promise<Content> => {
  const response = await apiClient.get('/content/me');
  return response.data;
};

const getOrgContent = async (): Promise<Content> => {
  const response = await apiClient.get('/content/org');
  return response.data;
};

const contentService = {
    getMyContent,
    getOrgContent,
};

export default contentService;