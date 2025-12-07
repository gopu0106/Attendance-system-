/**
 * Authentication Service
 * All authentication-related API calls
 */

import { api } from './apiService';

export const authService = {
    /**
     * Login user
     */
    login: async (credentials) => {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    },

    /**
     * Register new user
     */
    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },

    /**
     * Verify invite code (for admin signup)
     */
    verifyInvite: async (code) => {
        const response = await api.get(`/auth/verify-invite/${code}`);
        return response.data;
    },

    /**
     * Request password reset
     */
    forgotPassword: async (email) => {
        const response = await api.post('/auth/forgot-password', { email });
        return response.data;
    },

    /**
     * Reset password with token
     */
    resetPassword: async (token, newPassword) => {
        const response = await api.post(`/auth/reset-password/${token}`, {
            password: newPassword,
        });
        return response.data;
    },

    /**
     * Logout (client-side token removal)
     */
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    /**
     * Get current user from localStorage
     */
    getCurrentUser: () => {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    /**
     * Check if user is authenticated
     */
    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },
};

export default authService;
