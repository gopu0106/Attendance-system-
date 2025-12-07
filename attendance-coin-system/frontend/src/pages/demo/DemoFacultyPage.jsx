import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Check, X, Clock } from 'lucide-react';

const DemoFacultyPage = () => {
    const navigate = useNavigate();

    const demoStudents = [
        { id: 1, name: 'John Doe', rollNo: 'CS101', status: 'present' },
        { id: 2, name: 'Jane Smith', rollNo: 'CS102', status: 'present' },
        { id: 3, name: 'Mike Johnson', rollNo: 'CS103', status: 'absent' },
        { id: 4, name: 'Sarah Williams', rollNo: 'CS104', status: 'present' },
        { id: 5, name: 'Robert Brown', rollNo: 'CS105', status: 'late' },
    ];

    return (
        <div className="page-bg min-h-screen">
            {/* Demo Banner */}
            <div className="bg-gradient-button text-white py-3 text-center">
                <p className="font-semibold">📋 Preview Mode - Sign up to access full features</p>
            </div>

            <div className="content-container py-8">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-text-light hover:text-white mb-6 transition-smooth"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </button>

                <div className="max-w-7xl mx-auto fade-in-up">
                    <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <p className="text-secondary-cyan font-medium mb-1 uppercase tracking-wider text-sm">Faculty Portal Demo</p>
                            <h1 className="text-4xl font-bold text-text-light">Mark Attendance</h1>
                            <p className="text-text-muted-dark mt-2">Computer Science - Section A</p>
                        </div>

                        <div className="flex items-center gap-3 glass-card p-3 rounded-lg border border-glass-border shadow-glow-soft">
                            <Calendar className="w-5 h-5 text-primary-violet" />
                            <span className="text-text-light font-medium">Dec 07, 2025</span>
                        </div>
                    </header>

                    <div className="glass-card rounded-card-glass overflow-hidden shadow-glass">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-white/5 border-b border-glass-border">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-text-muted-dark uppercase">Student Info</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-text-muted-dark uppercase">Roll No</th>
                                        <th className="px-6 py-4 text-center text-xs font-bold text-text-muted-dark uppercase">Status</th>
                                        <th className="px-6 py-4 text-right text-xs font-bold text-text-muted-dark uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-glass-border">
                                    {demoStudents.map((student) => (
                                        <tr key={student.id} className="hover:bg-white/5 transition-smooth">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="font-semibold text-text-light">{student.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-text-muted-dark font-mono text-sm">
                                                {student.rollNo}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <span className={`status-pill status-pill--${student.status}`}>
                                                    {student.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-50 cursor-not-allowed">
                                                    <button className="p-2 rounded-lg bg-white/5 border border-glass-border" disabled>
                                                        <Check className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-2 rounded-lg bg-white/5 border border-glass-border" disabled>
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-2 rounded-lg bg-white/5 border border-glass-border" disabled>
                                                        <Clock className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => navigate('/signup')}
                            className="gradient-button px-8 py-4 rounded-button font-semibold text-white shadow-glow-primary hover:shadow-glow-intense transition-smooth"
                        >
                            Sign Up to Access Full Features
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoFacultyPage;
