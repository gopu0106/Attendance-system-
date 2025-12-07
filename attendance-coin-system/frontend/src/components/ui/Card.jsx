import React from 'react';

const Card = ({
    children,
    className = '',
    gradient = false,
    shadow = true,
    padding = true,
    ...props
}) => {
    return (
        <div
            className={`
        ${gradient ? 'bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl' : 'bg-white'}
        ${shadow ? 'shadow-elevation' : ''}
        ${padding ? 'p-6' : ''}
        rounded-card-md
        transition-all duration-200
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
