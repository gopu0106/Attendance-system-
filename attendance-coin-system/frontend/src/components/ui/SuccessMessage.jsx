import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessMessage = ({ message, className = '' }) => {
    if (!message) return null;

    return (
        <div
            className={`
        flex items-center gap-3 
        p-4 
        bg-green-50 
        text-green-700 
        rounded-xl 
        border border-green-200
        ${className}
      `}
        >
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{message}</span>
        </div>
    );
};

export default SuccessMessage;
