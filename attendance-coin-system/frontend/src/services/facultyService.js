/**
 * Faculty Service
 * All faculty-related API calls
 */

import { api } from './apiService';

export const facultyService = {
    /**
     * Get students for attendance marking
     */
    getStudents: async (classId) => {
        const response = await api.get(`/faculty/classes/${classId}/students`);
        return response.data;
    },

    /**
     * Mark attendance for single student
     */
    markAttendance: async (attendanceData) => {
        const response = await api.post('/attendance/mark', attendanceData);
        return response.data;
    },

    /**
     * Bulk mark attendance
     */
    bulkMarkAttendance: async (attendanceList) => {
        const response = await api.post('/attendance/bulk-mark', {
            attendance: attendanceList,
        });
        return response.data;
    },

    /**
     * Lock attendance for a date
     */
    lockAttendance: async (date, classId) => {
        const response = await api.post('/attendance/lock', { date, class_id: classId });
        return response.data;
    },

    /**
     * Add remark to attendance record
     */
    addRemark: async (attendanceId, remark) => {
        const response = await api.put(`/attendance/${attendanceId}/remark`, { remark });
        return response.data;
    },

    /**
     * Get class analytics
     */
    getClassAnalytics: async (classId, params = {}) => {
        const response = await api.get(`/attendance/class/${classId}/analytics`, { params });
        return response.data;
    },

    /**
     * Export attendance to CSV
     */
    exportAttendance: async (classId, startDate, endDate) => {
        const response = await api.get(`/attendance/class/${classId}/export`, {
            params: { start_date: startDate, end_date: endDate },
            responseType: 'blob',
        });
        return response.data;
    },

    /**
     * Get attendance lock status
     */
    getLockStatus: async (date, classId) => {
        const response = await api.get('/attendance/lock-status', {
            params: { date, class_id: classId },
        });
        return response.data;
    },
};

export default facultyService;
