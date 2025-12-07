import React from 'react';

const InputField = ({
    type = 'text',
    name,
    value,
    onChange,
    placeholder,
    icon: Icon,
    required = false,
    disabled = false,
    className = '',
    ...props
}) => {
    return (
        <div className="relative">
            {Icon && (
                <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            )}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={`
          w-full 
          ${Icon ? 'pl-10' : 'pl-4'} 
          pr-4 py-3 
          border border-gray-300 
          rounded-xl
          bg-white
          text-gray-900
          placeholder:text-gray-400
          focus:ring-2 focus:ring-accent-indigo focus:border-transparent 
          disabled:bg-gray-100 disabled:cursor-not-allowed
          outline-none 
          transition-all duration-200
          ${className}
        `}
                {...props}
            />
        </div>
    );
};

export default InputField;
