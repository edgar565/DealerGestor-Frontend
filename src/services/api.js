const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://34.200.147.24:8080';

export const getApiUrl = (endpoint) => `${API_BASE_URL}${endpoint}`;
