import React, { useState } from 'react';
import { Search, Utensils, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import GlowButton from '../components/ui/GlowButton';
import ConfirmationModal from '../components/modals/ConfirmationModal';
import ErrorMessage from '../components/ui/ErrorMessage';
import SuccessMessage from '../components/ui/SuccessMessage';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { formatCurrency, formatRelativeDate } from '../utils/helpers';

const MessTerminal = () => {
    const [rollNo, setRollNo] = useState('');
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [recentTransactions, setRecentTransactions] = useState([
        { id: 1, student: 'John Doe', rollNo: 'CS101', meal: 'Breakfast', amount: 50, time: new Date(Date.now() - 300000) },
        { id: 2, student: 'Jane Smith', rollNo: 'CS102', meal: 'Lunch', amount: 80, time: new Date(Date.now() - 600000) },
    ]);

    const meals = [
        { type: 'breakfast', label: 'Breakfast', price: 50, icon: '🌅', color: 'from-yellow-400 to-orange-500' },
        { type: 'lunch', label: 'Lunch', price: 80, icon: '🍛', color: 'from-green-400 to-emerald-500' },
        { type: 'dinner', label: 'Dinner', price: 80, icon: '🌙', color: 'from-blue-400 to-indigo-500' },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        setPaymentStatus(null);
        setErrorMessage('');

        setTimeout(() => {
            if (rollNo.trim()) {
                setStudent({
                    name: 'John Doe',
                    rollNo: rollNo,
                    mess_balance: 450.50,
                    image: 'https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6&color=fff',
                    last_meal: 'Breakfast (6 hours ago)',
                });
            } else {
                setStudent(null);
            }
            setLoading(false);
        }, 800);
    };

    const handleMealClick = (meal) => {
        if (!student) return;

        // Validate balance
        if (student.mess_balance < meal.price) {
            setErrorMessage('Insufficient Balance!');
            setPaymentStatus('error');
            return;
        }

        setSelectedMeal(meal);
        setShowConfirmModal(true);
    };

    const confirmPayment = () => {
        setLoading(true);

        setTimeout(() => {
            // Deduct amount
            const newBalance = student.mess_balance - selectedMeal.price;
            setStudent(prev => ({
                ...prev,
                mess_balance: newBalance,
                last_meal: `${selectedMeal.label} (just now)`,
            }));

            // Add to recent transactions
            setRecentTransactions(prev => [
                {
                    id: Date.now(),
                    student: student.name,
                    rollNo: student.rollNo,
                    meal: selectedMeal.label,
                    amount: selectedMeal.price,
                    time: new Date(),
                },
                ...prev.slice(0, 9),
            ]);

            setPaymentStatus('success');
            setShowConfirmModal(false);
            setSelectedMeal(null);
            setLoading(false);

            setTimeout(() => setPaymentStatus(null), 3000);
        }, 1000);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Terminal (Left - 2 columns) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card p-8 fade-in-up">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-button rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-primary breathe-animation">
                                <Utensils className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-text-light">Mess Terminal</h1>
                            <p className="text-text-muted-dark mt-2">Scan or enter roll number</p>
                        </div>

                        {/* Search Form */}
                        <form onSubmit={handleSearch} className="mb-8">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-text-muted-dark" />
                                <input
                                    type="text"
                                    value={rollNo}
                                    onChange={(e) => setRollNo(e.target.value)}
                                    placeholder="Enter Student Roll No"
                                    className="w-full pl-14 pr-4 py-4 bg-white/5 border-2 border-glass-border rounded-lg text-text-light placeholder-text-muted-dark text-lg focus:border-primary-violet focus:shadow-glow-soft focus:outline-none transition-smooth"
                                />
                            </div>
                        </form>

                        {/* Loading State */}
                        {loading && !student && (
                            <div className="py-12 text-center">
                                <LoadingSpinner size="lg" />
                                <p className="text-text-muted-dark mt-4">Searching student database...</p>
                            </div>
                        )}

                        {/* Student Info and Payment */}
                        {student && (
                            <div className="space-y-6 fade-in-up">
                                {/* Student Profile */}
                                <div className="flex items-center gap-4 p-4 glass-card border border-glass-border rounded-lg hover-lift">
                                    <img src={student.image} alt={student.name} className="w-16 h-16 rounded-full shadow-glow-soft" />
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold text-text-light">{student.name}</h2>
                                        <p className="text-text-muted-dark">{student.rollNo}</p>
                                        <p className="text-xs text-text-muted-dark mt-1">Last meal: {student.last_meal}</p>
                                    </div>
                                </div>

                                {/* Balance Display */}
                                <div className="text-center p-8 glass-card rounded-lg border border-primary-violet shadow-glow-primary glow-pulse-animation">
                                    <p className="text-text-muted-dark text-sm mb-2 uppercase tracking-wider">Current Mess Balance</p>
                                    <div className="text-5xl font-bold text-text-light">{formatCurrency(student.mess_balance)}</div>
                                </div>

                                {/* Meal Buttons */}
                                <div className="grid grid-cols-3 gap-4">
                                    {meals.map((meal) => (
                                        <button
                                            key={meal.type}
                                            onClick={() => handleMealClick(meal)}
                                            disabled={loading}
                                            className={`p-6 glass-card border border-glass-border rounded-lg hover:border-primary-violet hover:shadow-glow-soft hover-scale transition-smooth disabled:opacity-50 disabled:cursor-not-allowed`}
                                        >
                                            <div className="text-4xl mb-2">{meal.icon}</div>
                                            <div className="text-sm text-text-muted-dark mb-2">{meal.label}</div>
                                            <div className="text-2xl font-bold text-primary-violet">{formatCurrency(meal.price)}</div>
                                        </button>
                                    ))}
                                </div>

                                {/* Status Messages */}
                                {paymentStatus === 'success' && (
                                    <SuccessMessage message="Payment Successful!" />
                                )}
                                {paymentStatus === 'error' && (
                                    <ErrorMessage message={errorMessage} />
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Recent Transactions (Right - 1 column) */}
                <div className="lg:col-span-1">
                    <div className="glass-card p-6 fade-in-up sticky top-4">
                        <h3 className="text-lg font-bold text-text-light mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary-violet" />
                            Recent Transactions
                        </h3>
                        <div className="space-y-3 max-h-[600px] overflow-y-auto">
                            {recentTransactions.map((txn) => (
                                <div key={txn.id} className="p-3 bg-white/5 rounded-lg border border-glass-border hover:border-glass-border-hover transition-smooth">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <div className="font-semibold text-text-light text-sm">{txn.student}</div>
                                            <div className="text-xs text-text-muted-dark">{txn.rollNo}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-bold text-primary-violet">{formatCurrency(txn.amount)}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-text-muted-dark">{txn.meal}</span>
                                        <span className="text-text-muted-dark">{formatRelativeDate(txn.time)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            {selectedMeal && (
                <ConfirmationModal
                    isOpen={showConfirmModal}
                    onClose={() => {
                        setShowConfirmModal(false);
                        setSelectedMeal(null);
                    }}
                    onConfirm={confirmPayment}
                    title="Confirm Payment"
                    message={
                        <div className="space-y-3">
                            <div className="p-4 bg-white/5 rounded-lg">
                                <div className="flex justify-between mb-2">
                                    <span className="text-text-muted-dark">Student:</span>
                                    <span className="text-text-light font-semibold">{student?.name}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-text-muted-dark">Meal:</span>
                                    <span className="text-text-light font-semibold">{selectedMeal.label}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-text-muted-dark">Amount:</span>
                                    <span className="text-primary-violet font-bold">{formatCurrency(selectedMeal.price)}</span>
                                </div>
                                <div className="h-px bg-glass-border my-2"></div>
                                <div className="flex justify-between">
                                    <span className="text-text-muted-dark">New Balance:</span>
                                    <span className="text-text-light font-bold">
                                        {formatCurrency(student ? student.mess_balance - selectedMeal.price : 0)}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-text-muted-dark">
                                Confirm this transaction?
                            </p>
                        </div>
                    }
                    confirmText="Confirm Payment"
                    type="info"
                    loading={loading}
                />
            )}
        </div>
    );
};

export default MessTerminal;
