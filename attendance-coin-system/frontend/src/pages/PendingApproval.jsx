import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const PendingApproval = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    return (
        <div className="page-bg min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <button
                    onClick={() => {
                        localStorage.clear();
                        navigate('/');
                    }}
                    className="flex items-center gap-2 text-text-muted-dark hover:text-text-light mb-6 transition-smooth"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm">Back to Home</span>
                </button>

                <div className="glass-card p-8 text-center fade-in-up">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-soft">
                        <CheckCircle className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <h1 className="text-3xl font-bold text-text-light mb-3">
                        Registration Submitted!
                    </h1>
                    <p className="text-text-muted-dark mb-6">
                        Your account is pending approval from an administrator.
                    </p>

                    {/* User Info */}
                    <div className="glass-card bg-white/5 p-4 mb-6 text-left">
                        <div className="text-sm text-text-muted-dark mb-2">Account Details:</div>
                        <div className="space-y-1">
                            <div className="flex justify-between">
                                <span className="text-text-muted-dark">Username:</span>
                                <span className="text-text-light font-semibold">{user.username}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-text-muted-dark">Email:</span>
                                <span className="text-text-light font-semibold">{user.email}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-text-muted-dark">Role:</span>
                                <span className="text-primary-violet font-semibold capitalize">{user.role}</span>
                            </div>
                        </div>
                    </div>

                    {/* Next Steps */}
                    <div className="text-left mb-6">
                        <h3 className="text-sm font-bold text-text-light mb-3">What happens next?</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-text-muted-dark">
                                <span className="text-primary-violet mt-0.5">1.</span>
                                <span>An administrator will review your request</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text-muted-dark">
                                <span className="text-primary-violet mt-0.5">2.</span>
                                <span>You'll receive an email notification about the decision</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text-muted-dark">
                                <span className="text-primary-violet mt-0.5">3.</span>
                                <span>Once approved, you can login with your credentials</span>
                            </li>
                        </ul>
                    </div>

                    {/* Action */}
                    <button
                        onClick={() => {
                            localStorage.clear();
                            navigate('/');
                        }}
                        className="w-full px-6 py-3 rounded-button bg-gradient-button text-white font-semibold shadow-glow-primary hover:shadow-glow-intense transition-smooth"
                    >
                        Return to Home
                    </button>

                    {/* Contact */}
                    <p className="text-xs text-text-muted-dark mt-6">
                        Questions? Contact your administrator
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PendingApproval;
