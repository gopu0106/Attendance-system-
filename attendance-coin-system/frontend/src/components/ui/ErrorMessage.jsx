import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message, className = '' }) => {
    if (!message) return null;

    return (
        <div
            className={`
        flex items-center gap-3 
        p-4 
        bg-red-50 
        text-red-700 
        rounded-xl 
        border border-red-200
        ${className}
      `}
        >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{message}</span>
        </div>
    );
};

export default ErrorMessage;
