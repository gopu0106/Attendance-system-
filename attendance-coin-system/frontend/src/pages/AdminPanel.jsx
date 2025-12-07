import React, { useState } from 'react';
import { Settings, CheckCircle, XCircle, DollarSign, Users, TrendingUp } from 'lucide-react';
import GlowButton from '../components/ui/GlowButton';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('redemptions');
    const [rates, setRates] = useState({
        coinToRupee: 1.0,
        coinsPerAttendance: 10,
        minRedemption: 50
    });

    const [redemptions, setRedemptions] = useState([
        { id: 1, user: 'John Doe', amount: 100, type: 'Mess Credit', date: '2025-12-01', status: 'pending' },
        { id: 2, user: 'Jane Smith', amount: 50, type: 'Voucher', date: '2025-12-01', status: 'pending' },
        { id: 3, user: 'Mike Johnson', amount: 200, type: 'Mess Credit', date: '2025-11-30', status: 'approved' },
    ]);

    const handleApprove = (id) => {
        setRedemptions(redemptions.map(r =>
            r.id === id ? { ...r, status: 'approved' } : r
        ));
    };

    const handleReject = (id) => {
        setRedemptions(redemptions.map(r =>
            r.id === id ? { ...r, status: 'rejected' } : r
        ));
    };

    const handleRateUpdate = (e) => {
        e.preventDefault();
        alert('System rates updated successfully!');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 fade-in-up">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-text-light">Admin Control Panel</h1>
                <p className="text-text-muted-dark mt-2">Manage system settings and requests</p>
            </header>

            {/* Stats Cards with Gradient Backgrounds & Float Animation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card p-6 border border-glass-border hover-lift shadow-glow-soft hover:shadow-glow-primary transition-smooth">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-text-muted-dark font-medium text-sm">Pending Requests</h3>
                        <div className="p-3 bg-orange-500/20 rounded-lg">
                            <Users className="w-6 h-6 text-orange-400" />
                        </div>
                    </div>
                    <div className="text-4xl font-bold text-text-light">
                        {redemptions.filter(r => r.status === 'pending').length}
                    </div>
                </div>
                <div className="glass-card p-6 border border-glass-border hover-lift shadow-glow-soft hover:shadow-glow-cyan transition-smooth">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-text-muted-dark font-medium text-sm">Total Coins Circulating</h3>
                        <div className="p-3 bg-secondary-cyan/20 rounded-lg">
                            <TrendingUp className="w-6 h-6 text-secondary-cyan" />
                        </div>
                    </div>
                    <div className="text-4xl font-bold text-text-light">12,450</div>
                </div>
                <div className="glass-card p-6 border border-glass-border hover-lift shadow-glow-soft hover:shadow-glow-primary transition-smooth">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-text-muted-dark font-medium text-sm">Current Exchange Rate</h3>
                        <div className="p-3 bg-green-500/20 rounded-lg">
                            <DollarSign className="w-6 h-6 text-green-400" />
                        </div>
                    </div>
                    <div className="text-4xl font-bold text-text-light">₹{rates.coinToRupee}</div>
                </div>
            </div>

            {/* Main Content Tabs */}
            <div className="glass-card rounded-card-glass overflow-hidden shadow-glass">
                {/* Tab Navigation with Glowing Indicator */}
                <div className="border-b border-glass-border bg-white/5">
                    <nav className="flex gap-6 px-6">
                        <button
                            onClick={() => setActiveTab('redemptions')}
                            className={`relative py-4 font-medium transition-smooth ${activeTab === 'redemptions'
                                    ? 'text-primary-violet'
                                    : 'text-text-muted-dark hover:text-text-light'
                                }`}
                        >
                            Redemption Requests
                            {activeTab === 'redemptions' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary shadow-glow-primary"></div>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('settings')}
                            className={`relative py-4 font-medium transition-smooth ${activeTab === 'settings'
                                    ? 'text-primary-violet'
                                    : 'text-text-muted-dark hover:text-text-light'
                                }`}
                        >
                            System Settings
                            {activeTab === 'settings' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary shadow-glow-primary"></div>
                            )}
                        </button>
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                    {activeTab === 'redemptions' ? (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-white/5 rounded-lg">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-text-muted-dark uppercase">User</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-text-muted-dark uppercase">Amount</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-text-muted-dark uppercase">Type</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-text-muted-dark uppercase">Date</th>
                                        <th className="px-4 py-3 text-center text-xs font-semibold text-text-muted-dark uppercase">Status</th>
                                        <th className="px-4 py-3 text-right text-xs font-semibold text-text-muted-dark uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-glass-border">
                                    {redemptions.map((request) => (
                                        <tr key={request.id} className="hover:bg-white/5 transition-smooth">
                                            <td className="px-4 py-4 font-medium text-text-light">{request.user}</td>
                                            <td className="px-4 py-4 text-text-muted-dark">{request.amount} Coins</td>
                                            <td className="px-4 py-4 text-text-muted-dark">{request.type}</td>
                                            <td className="px-4 py-4 text-text-muted-dark text-sm">{request.date}</td>
                                            <td className="px-4 py-4 text-center">
                                                <span className={`status-pill status-pill--${request.status}`}>
                                                    {request.status === 'pending' && (
                                                        <span className="pulsing-dot bg-yellow-400"></span>
                                                    )}
                                                    {request.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4 text-right">
                                                {request.status === 'pending' && (
                                                    <div className="flex justify-end gap-2">
                                                        <button
                                                            onClick={() => handleApprove(request.id)}
                                                            className="p-2 rounded-lg bg-white/5 text-green-400 hover:bg-green-500/20 hover:shadow-glow-soft transition-smooth"
                                                            title="Approve"
                                                        >
                                                            <CheckCircle className="w-5 h-5" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleReject(request.id)}
                                                            className="p-2 rounded-lg bg-white/5 text-red-400 hover:bg-red-500/20 hover:shadow-glow-soft transition-smooth"
                                                            title="Reject"
                                                        >
                                                            <XCircle className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <form onSubmit={handleRateUpdate} className="max-w-2xl">
                            <div className="space-y-6">
                                {/* Info Banner */}
                                <div className="glass-card border border-primary-violet/30 p-4 rounded-lg bg-primary-violet/10">
                                    <h3 className="font-semibold text-primary-violet flex items-center gap-2 mb-1">
                                        <Settings className="w-5 h-5" /> Configuration
                                    </h3>
                                    <p className="text-text-muted-dark text-sm">
                                        These settings affect the entire system immediately.
                                    </p>
                                </div>

                                {/* Settings Form */}
                                <div className="grid gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-text-light mb-2">
                                            Coin to Rupee Exchange Rate
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-dark">₹</span>
                                            <input
                                                type="number"
                                                step="0.1"
                                                value={rates.coinToRupee}
                                                onChange={(e) => setRates({ ...rates, coinToRupee: e.target.value })}
                                                className="w-full pl-8 pr-4 py-3 bg-white/5 border border-glass-border rounded-lg text-text-light focus:border-primary-violet focus:shadow-glow-soft focus:outline-none transition-smooth"
                                            />
                                        </div>
                                        <p className="text-xs text-text-muted-dark mt-1">Value of 1 Coin in Rupees</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-text-light mb-2">
                                            Coins Per Attendance
                                        </label>
                                        <input
                                            type="number"
                                            value={rates.coinsPerAttendance}
                                            onChange={(e) => setRates({ ...rates, coinsPerAttendance: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-glass-border rounded-lg text-text-light focus:border-primary-violet focus:shadow-glow-soft focus:outline-none transition-smooth"
                                        />
                                        <p className="text-xs text-text-muted-dark mt-1">Coins credited for each day of attendance</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-text-light mb-2">
                                            Minimum Redemption Amount
                                        </label>
                                        <input
                                            type="number"
                                            value={rates.minRedemption}
                                            onChange={(e) => setRates({ ...rates, minRedemption: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-glass-border rounded-lg text-text-light focus:border-primary-violet focus:shadow-glow-soft focus:outline-none transition-smooth"
                                        />
                                        <p className="text-xs text-text-muted-dark mt-1">Minimum coins required to request redemption</p>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <GlowButton type="submit">
                                        Save Changes
                                    </GlowButton>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
