import React from 'react';

const PrimaryButton = ({
    children,
    onClick,
    disabled = false,
    loading = false,
    type = 'button',
    className = '',
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        px-6 py-3 
        bg-text-primary text-white 
        rounded-button 
        font-semibold text-sm
        shadow-cta
        hover:bg-gray-800
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        inline-flex items-center justify-center gap-2
        ${className}
      `}
            {...props}
        >
            {loading ? (
                <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default PrimaryButton;
