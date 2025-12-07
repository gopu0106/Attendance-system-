/**
 * Admin Service
 * All admin-related API calls
 */

import { api } from './apiService';

export const adminService = {
    /**
     * Get pending user approvals
     */
    getPendingUsers: async () => {
        const response = await api.get('/admin/pending-users');
        return response.data;
    },

    /**
     * Approve user
     */
    approveUser: async (userId) => {
        const response = await api.post(`/admin/approve-user/${userId}`);
        return response.data;
    },

    /**
     * Reject user
     */
    rejectUser: async (userId, reason = '') => {
        const response = await api.post(`/admin/reject-user/${userId}`, { reason });
        return response.data;
    },

    /**
     * Bulk approve users
     */
    bulkApproveUsers: async (userIds) => {
        const response = await api.post('/admin/bulk-approve', { user_ids: userIds });
        return response.data;
    },

    /**
     * Get audit logs
     */
    getAuditLogs: async (params = {}) => {
        const response = await api.get('/admin/audit-logs', { params });
        return response.data;
    },

    /**
     * Get system configuration
     */
    getSystemConfig: async () => {
        const response = await api.get('/admin/system-config');
        return response.data;
    },

    /**
     * Update system configuration
     */
    updateSystemConfig: async (configData) => {
        const response = await api.put('/admin/system-config', configData);
        return response.data;
    },

    /**
     * Get all users (with filters)
     */
    getUsers: async (params = {}) => {
        const response = await api.get('/admin/users', { params });
        return response.data;
    },

    /**
     * Update user role
     */
    updateUserRole: async (userId, newRole) => {
        const response = await api.put(`/admin/users/${userId}/role`, { role: newRole });
        return response.data;
    },

    /**
     * Get system statistics
     */
    getStatistics: async () => {
        const response = await api.get('/admin/statistics');
        return response.data;
    },

    /**
     * Export audit logs
     */
    exportAuditLogs: async (startDate, endDate) => {
        const response = await api.get('/admin/audit-logs/export', {
            params: { start_date: startDate, end_date: endDate },
            responseType: 'blob',
        });
        return response.data;
    },

    /**
     * Generate invite code for admin signup
     */
    generateInviteCode: async (data) => {
        const response = await api.post('/admin/generate-invite', data);
        return response.data;
    },
};

export default adminService;
