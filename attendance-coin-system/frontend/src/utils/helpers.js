/**
 * Utility Helper Functions
 */

import { format, formatDistance, formatRelative, isValid, parseISO } from 'date-fns';

/**
 * Format date to readable string
 */
export const formatDate = (date, formatString = 'MMM dd, yyyy') => {
    try {
        const dateObj = typeof date === 'string' ? parseISO(date) : date;
        return isValid(dateObj) ? format(dateObj, formatString) : 'Invalid date';
    } catch {
        return 'Invalid date';
    }
};

/**
 * Format date relative to now (e.g., "2 hours ago")
 */
export const formatRelativeDate = (date) => {
    try {
        const dateObj = typeof date === 'string' ? parseISO(date) : date;
        return isValid(dateObj) ? formatDistance(dateObj, new Date(), { addSuffix: true }) : 'Invalid date';
    } catch {
        return 'Invalid date';
    }
};

/**
 * Format date in relative format (e.g., "yesterday at 3:00 PM")
 */
export const formatRelativeDateTime = (date) => {
    try {
        const dateObj = typeof date === 'string' ? parseISO(date) : date;
        return isValid(dateObj) ? formatRelative(dateObj, new Date()) : 'Invalid date';
    } catch {
        return 'Invalid date';
    }
};

/**
 * Capitalize first letter
 */
export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Truncate string with ellipsis
 */
export const truncate = (str, maxLength = 50) => {
    if (!str) return '';
    return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
};

/**
 * Format number with commas
 */
export const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
};

/**
 * Format currency (INR)
 */
export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(amount);
};

/**
 * Get initials from name
 */
export const getInitials = (name) => {
    if (!name) return '?';
    return name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

/**
 * Generate avatar URL from initials
 */
export const getAvatarUrl = (name, bgColor = '8b5cf6', textColor = 'fff') => {
    const initials = getInitials(name);
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
    )}&background=${bgColor}&color=${textColor}&bold=true`;
};

/**
 * Calculate percentage
 */
export const calculatePercentage = (value, total) => {
    if (total === 0) return 0;
    return Math.round((value / total) * 100);
};

/**
 * Debounce function
 */
export const debounce = (func, delay = 300) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

/**
 * Local storage helpers with error handling
 */
export const storage = {
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch {
            return defaultValue;
        }
    },

    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            return false;
        }
    },

    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch {
            return false;
        }
    },

    clear: () => {
        try {
            localStorage.clear();
            return true;
        } catch {
            return false;
        }
    },
};

/**
 * Validate email
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate username
 */
export const isValidUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
};

/**
 * Download blob as file
 */
export const downloadBlob = (blob, filename) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
};

export default {
    formatDate,
    formatRelativeDate,
    formatRelativeDateTime,
    capitalize,
    truncate,
    formatNumber,
    formatCurrency,
    getInitials,
    getAvatarUrl,
    calculatePercentage,
    debounce,
    storage,
    isValidEmail,
    isValidUsername,
    downloadBlob,
};
