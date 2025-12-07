import React from 'react';

const SecondaryButton = ({
    children,
    onClick,
    disabled = false,
    type = 'button',
    className = '',
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        px-5 py-2.5
        bg-white/20 backdrop-blur-sm
        text-gray-800 dark:text-white
        rounded-button 
        font-medium text-sm
        border border-white/30
        hover:bg-white/30 hover:border-white/40
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        inline-flex items-center justify-center gap-2
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;
