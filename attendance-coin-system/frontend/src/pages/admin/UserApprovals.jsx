import React, { useState } from 'react';
import { Users, CheckCircle, XCircle, Clock, Mail, Calendar } from 'lucide-react';
import GlowButton from '../components/ui/GlowButton';
import { formatRelativeDate, capitalize } from '../utils/helpers';
import toast from 'react-hot-toast';

const UserApprovals = () => {
    const [pendingUsers, setPendingUsers] = useState([
        {
            id: 1,
            username: 'john.faculty',
            full_name: 'John Doe',
            email: 'john@university.edu',
            role: 'faculty',
            requested_at: new Date(Date.now() - 86400000), // 1 day ago
        },
        {
            id: 2,
            username: 'jane.mess',
            full_name: 'Jane Smith',
            email: 'jane@university.edu',
            role: 'mess_staff',
            requested_at: new Date(Date.now() - 172800000), // 2 days ago
        },
    ]);

    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleApprove = (userId) => {
        setPendingUsers(prev => prev.filter(u => u.id !== userId));
        toast.success('User approved successfully!');
    };

    const handleReject = (userId) => {
        setPendingUsers(prev => prev.filter(u => u.id !== userId));
        toast.error('User rejected');
    };

    const bulkApprove = () => {
        if (selectedUsers.length === 0) {
            toast.error('Please select users first');
            return;
        }
        setPendingUsers(prev => prev.filter(u => !selectedUsers.includes(u.id)));
        toast.success(`Approved ${selectedUsers.length} users`);
        setSelectedUsers([]);
    };

    const toggleUserSelection = (id) => {
        setSelectedUsers(prev =>
            prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 fade-in-up">
            <header className="mb-8">
                <p className="text-secondary-cyan font-medium mb-1 uppercase tracking-wider text-sm">Admin Panel</p>
                <h1 className="text-4xl font-bold text-text-light">User Approvals</h1>
                <p className="text-text-muted-dark mt-2">Review and approve pending user registrations</p>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card p-6 border border-yellow-500/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-text-muted-dark text-sm mb-1">Pending</p>
                            <p className="text-3xl font-bold text-yellow-400">{pendingUsers.length}</p>
                        </div>
                        <Clock className="w-10 h-10 text-yellow-400" />
                    </div>
                </div>
                <div className="glass-card p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-text-muted-dark text-sm mb-1">Faculty</p>
                            <p className="text-3xl font-bold text-primary-violet">
                                {pendingUsers.filter(u => u.role === 'faculty').length}
                            </p>
                        </div>
                        <Users className="w-10 h-10 text-primary-violet" />
                    </div>
                </div>
                <div className="glass-card p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-text-muted-dark text-sm mb-1">Mess Staff</p>
                            <p className="text-3xl font-bold text-secondary-cyan">
                                {pendingUsers.filter(u => u.role === 'mess_staff').length}
                            </p>
                        </div>
                        <Users className="w-10 h-10 text-secondary-cyan" />
                    </div>
                </div>
            </div>

            {/* Bulk Actions */}
            {selectedUsers.length > 0 && (
                <div className="glass-card p-4 mb-6 flex items-center justify-between border border-primary-violet">
                    <span className="text-text-light font-semibold">
                        {selectedUsers.length} user{selectedUsers.length > 1 ? 's' : ''} selected
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={bulkApprove}
                            className="px-4 py-2 rounded-lg bg-green-500/20 text-green-400 border border-green-500/50 hover:bg-green-500/30 transition-smooth text-sm font-medium"
                        >
                            <CheckCircle className="w-4 h-4 inline mr-1" />
                            Approve Selected
                        </button>
                        <button
                            onClick={() => setSelectedUsers([])}
                            className="px-4 py-2 rounded-lg bg-white/5 text-text-light border border-glass-border hover:bg-white/10 transition-smooth text-sm"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            )}

            {/* Pending Users Table */}
            {pendingUsers.length > 0 ? (
                <div className="glass-card rounded-card-glass overflow-hidden shadow-glass">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-white/5 border-b border-glass-border">
                                <tr>
                                    <th className="px-6 py-4 text-left w-12">
                                        <input
                                            type="checkbox"
                                            checked={selectedUsers.length === pendingUsers.length}
                                            onChange={(e) =>
                                                e.target.checked
                                                    ? setSelectedUsers(pendingUsers.map(u => u.id))
                                                    : setSelectedUsers([])
                                            }
                                            className="w-4 h-4 rounded accent-primary-violet"
                                        />
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-text-muted-dark uppercase">User Info</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-text-muted-dark uppercase">Contact</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-text-muted-dark uppercase">Role</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-text-muted-dark uppercase">Requested</th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-text-muted-dark uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-glass-border">
                                {pendingUsers.map((user) => (
                                    <tr
                                        key={user.id}
                                        className={`hover:bg-white/5 transition-smooth ${selectedUsers.includes(user.id) ? 'bg-primary-violet/10' : ''
                                            }`}
                                    >
                                        <td className="px-6 py-4">
                                            <input
                                                type="checkbox"
                                                checked={selectedUsers.includes(user.id)}
                                                onChange={() => toggleUserSelection(user.id)}
                                                className="w-4 h-4 rounded accent-primary-violet"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-text-light">{user.full_name}</div>
                                            <div className="text-sm text-text-muted-dark">@{user.username}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-sm text-text-muted-dark">
                                                <Mail className="w-4 h-4" />
                                                {user.email}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${user.role === 'faculty'
                                                    ? 'bg-primary-violet/20 text-primary-violet'
                                                    : 'bg-secondary-cyan/20 text-secondary-cyan'
                                                }`}>
                                                {capitalize(user.role.replace('_', ' '))}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-sm text-text-muted-dark">
                                                <Calendar className="w-4 h-4" />
                                                {formatRelativeDate(user.requested_at)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleApprove(user.id)}
                                                    className="p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:shadow-glow-soft transition-smooth"
                                                    title="Approve"
                                                >
                                                    <CheckCircle className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleReject(user.id)}
                                                    className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:shadow-glow-soft transition-smooth"
                                                    title="Reject"
                                                >
                                                    <XCircle className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="glass-card p-12 text-center">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-text-light mb-2">All Caught Up!</h3>
                    <p className="text-text-muted-dark">No pending user approvals at the moment.</p>
                </div>
            )}
        </div>
    );
};

export default UserApprovals;
