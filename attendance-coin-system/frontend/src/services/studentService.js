/**
 * Student Service
 * All student-related API calls
 */

import { api } from './apiService';

export const studentService = {
    /**
     * Get student wallet information
     */
    getWallet: async (studentId) => {
        const response = await api.get(`/wallets/users/${studentId}/wallet`);
        return response.data;
    },

    /**
     * Redeem coins
     */
    redeemCoins: async (redemptionData) => {
        const response = await api.post('/wallets/redeem', redemptionData);
        return response.data;
    },

    /**
     * Get attendance streaks
     */
    getStreaks: async (studentId) => {
        const response = await api.get(`/students/${studentId}/streaks`);
        return response.data;
    },

    /**
     * Get earned badges
     */
    getBadges: async (studentId) => {
        const response = await api.get(`/students/${studentId}/badges`);
        return response.data;
    },

    /**
     * Get level and XP information
     */
    getLevel: async (studentId) => {
        const response = await api.get(`/students/${studentId}/level`);
        return response.data;
    },

    /**
     * Get analytics data (attendance trends, coin history)
     */
    getAnalytics: async (studentId, params = {}) => {
        const response = await api.get(`/students/${studentId}/analytics`, { params });
        return response.data;
    },

    /**
     * Get notifications
     */
    getNotifications: async (studentId) => {
        const response = await api.get(`/students/${studentId}/notifications`);
        return response.data;
    },

    /**
     * Mark notifications as read
     */
    markNotificationsRead: async (studentId, notificationIds) => {
        const response = await api.post(`/students/${studentId}/notifications/read`, {
            notification_ids: notificationIds,
        });
        return response.data;
    },

    /**
     * Get redemption history
     */
    getRedemptionHistory: async (studentId) => {
        const response = await api.get(`/students/${studentId}/redemptions`);
        return response.data;
    },
};

export default studentService;
