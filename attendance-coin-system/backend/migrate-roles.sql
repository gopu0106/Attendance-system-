-- Migration to add faculty and mess_staff roles
-- SQLite doesn't support ALTER TABLE to modify CHECK constraints
-- So we need to recreate the table

PRAGMA foreign_keys = OFF;

-- Create new users table with updated roles
CREATE TABLE IF NOT EXISTS users_new (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    role VARCHAR(20) DEFAULT 'student' CHECK(role IN ('student', 'faculty', 'mess_staff', 'admin')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Copy data from old table
INSERT INTO users_new (id, username, email, password_hash, full_name, role, created_at, updated_at)
SELECT id, username, email, password_hash, full_name, role, created_at, updated_at
FROM users;

-- Drop old table
DROP TABLE users;

-- Rename new table
ALTER TABLE users_new RENAME TO users;

PRAGMA foreign_keys = ON;
