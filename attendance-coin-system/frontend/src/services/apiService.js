/**
 * Base API Service
 * Centralized API configuration with error handling, loading states, and JWT injection
 */

import axios from 'axios';
import toast from 'react-hot-toast';

const API_BASE_URL = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

// Create axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor - Add JWT token
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor - Handle errors globally
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle different error scenarios
        if (error.response) {
            // Server responded with error status
            const { status, data } = error.response;

            switch (status) {
                case 401:
                    // Unauthorized - clear token and redirect to login
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.href = '/login';
                    toast.error('Session expired. Please login again.');
                    break;

                case 403:
                    toast.error('You do not have permission to perform this action.');
                    break;

                case 404:
                    toast.error('Requested resource not found.');
                    break;

                case 500:
                    toast.error('Server error. Please try again later.');
                    break;

                default:
                    // Show error message from server or generic message
                    const errorMessage = data?.error || data?.message || 'An error occurred';
                    toast.error(errorMessage);
            }
        } else if (error.request) {
            // Request was made but no response received
            toast.error('Network error. Please check your connection.');
        } else {
            // Something else happened
            toast.error('An unexpected error occurred.');
        }

        return Promise.reject(error);
    }
);

/**
 * Generic API call wrapper with loading state management
 */
export const apiCall = async (config, options = {}) => {
    const { showSuccessToast = false, successMessage = 'Success!' } = options;

    try {
        const response = await apiClient(config);

        if (showSuccessToast) {
            toast.success(successMessage);
        }

        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        return {
            success: false,
            error: error.response?.data || error.message,
        };
    }
};

/**
 * HTTP Methods
 */
export const api = {
    get: (url, config = {}) => apiClient.get(url, config),
    post: (url, data = {}, config = {}) => apiClient.post(url, data, config),
    put: (url, data = {}, config = {}) => apiClient.put(url, data, config),
    patch: (url, data = {}, config = {}) => apiClient.patch(url, data, config),
    delete: (url, config = {}) => apiClient.delete(url, config),
};

export default apiClient;
