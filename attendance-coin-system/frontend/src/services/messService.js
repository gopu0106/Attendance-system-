/**
 * Mess Service
 * All mess terminal-related API calls
 */

import { api } from './apiService';

export const messService = {
    /**
     * Search student by roll number
     */
    searchStudent: async (rollNo) => {
        const response = await api.get(`/mess/students/search`, {
            params: { roll_no: rollNo },
        });
        return response.data;
    },

    /**
     * Get student mess balance
     */
    getBalance: async (studentId) => {
        const response = await api.get(`/mess/students/${studentId}/balance`);
        return response.data;
    },

    /**
     * Process payment
     */
    processPayment: async (paymentData) => {
        const response = await api.post('/mess/payment', paymentData);
        return response.data;
    },

    /**
     * Validate meal eligibility (fraud protection)
     */
    validateMeal: async (studentId, mealType) => {
        const response = await api.post('/mess/validate-meal', {
            student_id: studentId,
            meal_type: mealType,
        });
        return response.data;
    },

    /**
     * Get recent transactions
     */
    getRecentTransactions: async (limit = 10) => {
        const response = await api.get('/mess/transactions/recent', {
            params: { limit },
        });
        return response.data;
    },

    /**
     * Get transaction history for a student
     */
    getStudentTransactions: async (studentId, params = {}) => {
        const response = await api.get(`/mess/students/${studentId}/transactions`, {
            params,
        });
        return response.data;
    },

    /**
     * Get meal settings (prices, time windows, limits)
     */
    getMealSettings: async () => {
        const response = await api.get('/mess/settings');
        return response.data;
    },
};

export default messService;
