/**
 * Application Constants
 */

// User Roles
export const USER_ROLES = {
    STUDENT: 'student',
    FACULTY: 'faculty',
    MESS_STAFF: 'mess_staff',
    ADMIN: 'admin',
};

// Attendance Status
export const ATTENDANCE_STATUS = {
    PRESENT: 'present',
    ABSENT: 'absent',
    LATE: 'late',
};

// Redemption Types
export const REDEMPTION_TYPES = {
    MESS_CREDIT: 'mess_credit',
    LIBRARY_FINE: 'library_fine',
    EVENT_TICKET: 'event_ticket',
    MERCHANDISE: 'merchandise',
};

// Badge IDs
export const BADGE_IDS = {
    EARLY_BIRD: 'early_bird',
    PERFECT_WEEK: 'perfect_week',
    PERFECT_MONTH: 'perfect_month',
    COIN_COLLECTOR_100: 'coin_collector_100',
    COIN_COLLECTOR_500: 'coin_collector_500',
    COIN_COLLECTOR_1000: 'coin_collector_1000',
    STREAK_MASTER_7: 'streak_master_7',
    STREAK_MASTER_15: 'streak_master_15',
    STREAK_MASTER_30: 'streak_master_30',
    NEVER_LATE: 'never_late',
};

// Notification Types
export const NOTIFICATION_TYPES = {
    COIN_EARNED: 'coin_earned',
    REDEMPTION_APPROVED: 'redemption_approved',
    REDEMPTION_REJECTED: 'redemption_rejected',
    BADGE_UNLOCKED: 'badge_unlocked',
    STREAK_MILESTONE: 'streak_milestone',
    SYSTEM_ANNOUNCEMENT: 'system_announcement',
};

// Meal Types
export const MEAL_TYPES = {
    BREAKFAST: 'breakfast',
    LUNCH: 'lunch',
    DINNER: 'dinner',
    SNACK: 'snack',
};

// Route Paths
export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    DASHBOARD: '/dashboard',
    FACULTY: '/faculty',
    MESS: '/mess',
    ADMIN: '/admin',
    PENDING_APPROVAL: '/pending-approval',
    INVITE_SIGNUP: '/invite-signup/:code',
    DEMO_FACULTY: '/demo/faculty',
    DEMO_MESS: '/demo/mess',
    DEMO_ADMIN: '/demo/admin',
};

export default {
    USER_ROLES,
    ATTENDANCE_STATUS,
    REDEMPTION_TYPES,
    BADGE_IDS,
    NOTIFICATION_TYPES,
    MEAL_TYPES,
    ROUTES,
};
