import type { AxiosInstance } from 'axios';
// This would be a more complex setup in a real app, possibly using libraries like axios-mock-adapter
import users from './mockData/users.json';
import myContent from './mockData/myContent.json';

const setupMockAdapter = (client: AxiosInstance) => {
  // This is a simplified mock interceptor logic
  const originalGet = client.get;
  client.get = (async (url: string, config?: any) => {
    console.log(`[MOCK] GET: ${url}`);
    if (url.endsWith('/users')) {
      return Promise.resolve({ data: users });
    }
    if (url.endsWith('/content/me')) {
      return Promise.resolve({ data: myContent });
    }
    // Fallback to original or throw error
    return originalGet(url, config);
  }) as AxiosInstance['get'];
};

export default setupMockAdapter;