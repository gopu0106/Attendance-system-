import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

/**
 * Attendance Trend Chart
 */
export const AttendanceTrendChart = ({ data = [] }) => {
    // Expected data format: [{ date: '2025-12-01', present: 1, absent: 0, late: 0 }, ...]

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="glass-card p-3 border border-glass-border">
                    <p className="text-text-light font-semibold mb-2">{payload[0].payload.date}</p>
                    {payload.map((entry, index) => (
                        <p key={index} className="text-sm" style={{ color: entry.color }}>
                            {entry.name}: {entry.value}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-text-light mb-4">Attendance Trend (Last 30 Days)</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                    <XAxis
                        dataKey="date"
                        stroke="rgba(226, 232, 240, 0.6)"
                        style={{ fontSize: '12px' }}
                    />
                    <YAxis
                        stroke="rgba(226, 232, 240, 0.6)"
                        style={{ fontSize: '12px' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{ color: 'rgba(226, 232, 240, 0.95)' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="present"
                        stroke="#22c55e"
                        strokeWidth={2}
                        dot={{ fill: '#22c55e' }}
                        name="Present"
                    />
                    <Line
                        type="monotone"
                        dataKey="absent"
                        stroke="#f97373"
                        strokeWidth={2}
                        dot={{ fill: '#f97373' }}
                        name="Absent"
                    />
                    <Line
                        type="monotone"
                        dataKey="late"
                        stroke="#eab308"
                        strokeWidth={2}
                        dot={{ fill: '#eab308' }}
                        name="Late"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

/**
 * Coin Earning History Chart
 */
export const CoinEarningChart = ({ data = [] }) => {
    // Expected data format: [{ week: 'Week 1', earned: 50, bonuses: 10 }, ...]

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="glass-card p-3 border border-glass-border">
                    <p className="text-text-light font-semibold mb-2">{payload[0].payload.week}</p>
                    <p className="text-sm text-green-400">
                        Earned: {payload[0].value} coins
                    </p>
                    {payload[1] && (
                        <p className="text-sm text-yellow-400">
                            Bonuses: {payload[1].value} coins
                        </p>
                    )}
                    <p className="text-sm text-primary-violet font-bold mt-1">
                        Total: {(payload[0].value + (payload[1]?.value || 0))} coins
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-text-light mb-4">Coin Earning History</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                    <XAxis
                        dataKey="week"
                        stroke="rgba(226, 232, 240, 0.6)"
                        style={{ fontSize: '12px' }}
                    />
                    <YAxis
                        stroke="rgba(226, 232, 240, 0.6)"
                        style={{ fontSize: '12px' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ color: 'rgba(226, 232, 240, 0.95)' }} />
                    <Bar
                        dataKey="earned"
                        stackId="a"
                        fill="#22c55e"
                        name="Attendance"
                        radius={[0, 0, 4, 4]}
                    />
                    <Bar
                        dataKey="bonuses"
                        stackId="a"
                        fill="#eab308"
                        name="Bonuses"
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default { AttendanceTrendChart, CoinEarningChart };
