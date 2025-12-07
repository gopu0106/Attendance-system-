import React from 'react';

/**
 * GlowButton - Button with gradient background and glow effect
 * Antigravity-style primary button
 */
const GlowButton = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    loading = false,
    variant = 'primary', // 'primary' | 'secondary' | 'ghost'
    className = '',
    ...props
}) => {
    const baseStyles = 'px-6 py-3 rounded-button font-semibold transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2';

    const variants = {
        primary: 'gradient-button text-white shadow-glow-soft hover:shadow-glow-primary hover:scale-105 active:scale-95',
        secondary: 'bg-white/10 text-text-light border border-glass-border hover:bg-white/20 hover:shadow-glow-soft',
        ghost: 'text-primary-violet border border-primary-violet/50 hover:bg-primary-violet hover:text-white hover:shadow-glow-primary'
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {loading ? (
                <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Loading...</span>
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default GlowButton;
