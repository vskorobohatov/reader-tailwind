class ApiService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL || '';
  }

  getApiUrl(): string {
    return this.apiUrl;
  }
}

export default new ApiService();