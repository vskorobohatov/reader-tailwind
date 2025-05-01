import axios from 'axios';
import ApiService from './ApiService';

class AuthError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'AuthError';
  }
}

class AuthService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = ApiService.getApiUrl() || '';
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/login`, { email, password });
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Login failed';
      const statusCode = error.response?.status;
      throw new AuthError(message, statusCode);
    }
  }

  async register(email: string, password: string): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/register`, { email, password });
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Registration failed';
      const statusCode = error.response?.status;
      throw new AuthError(message, statusCode);
    }
  }
}

export default new AuthService();