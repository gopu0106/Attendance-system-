// Canonical role values used across the entire application
export const ROLES = {
    STUDENT: 'student',
    FACULTY: 'faculty',
    MESS_STAFF: 'mess_staff',
    ADMIN: 'admin',
};

// Array of all valid roles
export const ALL_ROLES = Object.values(ROLES);

// Role display names
export const ROLE_NAMES = {
    [ROLES.STUDENT]: 'Student',
    [ROLES.FACULTY]: 'Faculty',
    [ROLES.MESS_STAFF]: 'Mess Staff',
    [ROLES.ADMIN]: 'Administrator',
};

export default ROLES;
