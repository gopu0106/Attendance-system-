import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api/axios';
import { Lock, User } from 'lucide-react';
import AuthShell from '../components/layout/AuthShell';
import GlowButton from '../components/ui/GlowButton';
import ErrorMessage from '../components/ui/ErrorMessage';
import SuccessMessage from '../components/ui/SuccessMessage';
import { ROLES } from '../constants/roles';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.message) {
            setSuccessMessage(location.state.message);
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            const response = await api.post('/auth/login', formData);
            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            // Role-based redirect using constants
            const role = user.role;
            if (role === ROLES.STUDENT) {
                navigate('/dashboard');
            } else if (role === ROLES.FACULTY) {
                navigate('/faculty');
            } else if (role === ROLES.MESS_STAFF) {
                navigate('/mess');
            } else if (role === ROLES.ADMIN) {
                navigate('/admin');
            } else {
                // Fallback to dashboard
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthShell
            title="Welcome Back"
            subtitle="Sign in to AttendanceCoin"
        >
            <SuccessMessage message={successMessage} className="mb-6" />
            <ErrorMessage message={error} className="mb-6" />

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-text-light mb-2">
                        Username
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted-dark" />
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter username"
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-glass-border rounded-lg text-text-light placeholder-text-muted-dark focus:border-primary-violet focus:shadow-glow-soft focus:outline-none transition-smooth"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text-light mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted-dark" />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-glass-border rounded-lg text-text-light placeholder-text-muted-dark focus:border-primary-violet focus:shadow-glow-soft focus:outline-none transition-smooth"
                            required
                        />
                    </div>
                </div>

                <GlowButton
                    type="submit"
                    disabled={loading}
                    loading={loading}
                    className="w-full"
                >
                    Sign In
                </GlowButton>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm text-text-muted-dark">
                    Don't have an account?{' '}
                    <button
                        onClick={() => navigate('/signup')}
                        className="text-primary-violet hover:text-secondary-cyan font-semibold transition-smooth"
                    >
                        Sign up here
                    </button>
                </p>
            </div>

            <div className="mt-8 pt-6 border-t border-glass-border text-center text-sm text-text-muted-dark">
                <p className="font-medium mb-1">Demo Credentials:</p>
                <p>Admin: admin / admin123</p>
            </div>
        </AuthShell>
    );
};

export default Login;
