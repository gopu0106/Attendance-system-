import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthShell = ({ children, title, subtitle, showBackButton = true }) => {
    const navigate = useNavigate();

    return (
        <div className="page-bg min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {showBackButton && (
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-text-muted-dark hover:text-text-light mb-6 transition-smooth"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Back to Home</span>
                    </button>
                )}

                <div className="glass-card p-8 fade-in-up">
                    {/* Header with gradient */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-text-light mb-2">{title}</h1>
                        {subtitle && (
                            <p className="text-text-muted-dark">{subtitle}</p>
                        )}
                    </div>

                    {/* Content */}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthShell;
